import { execFileSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { readFile, writeFile, mkdir, readdir, copyFile, unlink } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));
const source = process.env.BIBLIOPLEX_SOURCE;
if (!source) throw new Error('Set BIBLIOPLEX_SOURCE to an isolated, installed Biblioplex worktree.');
const pin = JSON.parse(await readFile(path.join(root, 'component-preview/source.json'), 'utf8'));
const revision = execFileSync('git', ['rev-parse', 'HEAD'], { cwd: source, encoding: 'utf8' }).trim();
if (revision !== pin.commit) throw new Error(`Expected Biblioplex ${pin.commit}; got ${revision}.`);
execFileSync('git', ['diff', '--exit-code', 'HEAD', '--', 'apps', 'storybook', 'package.json', 'package-lock.json'], { cwd: source, stdio: 'pipe' });
const { build } = await import(pathToFileURL(path.join(source, 'node_modules/vite/dist/node/index.js')));
// In-memory output avoids accumulating stale hashed bundles between iterations.
const result = await build({ configFile: path.join(root, 'component-preview/vite.config.mjs'), build: { write: false }, logLevel: 'warn' });
const files = [];
for (const bundle of Array.isArray(result) ? result : [result]) {
  for (const output of bundle.output) files.push([output.fileName, output.type === 'chunk' ? output.code : output.source]);
}
const outDir = path.join(root, 'public/components');
const manifestPath = path.join(root, 'component-preview/build-manifest.json');
let previous = { assets: {} };
try { previous = JSON.parse(await readFile(manifestPath, 'utf8')); } catch (error) { if (error.code !== 'ENOENT') throw error; }
const assets = {};
function assetPath(name) {
  const target = path.resolve(outDir, name);
  if (!target.startsWith(outDir + path.sep)) throw new Error(`Invalid asset path: ${name}`);
  return target;
}
for (const [name, contents] of files) {
  const target = assetPath(name);
  await mkdir(path.dirname(target), { recursive: true });
  await writeFile(target, contents);
  assets[name] = createHash('sha256').update(contents).digest('hex');
}
// Remove only exact files recorded by the previous build, after every new file
// has been written. Never recursively delete the publishing directory.
for (const name of Object.keys(previous.assets)) {
  if (!(name in assets)) await unlink(assetPath(name)).catch((error) => { if (error.code !== 'ENOENT') throw error; });
}
const inputs = {};
for (const name of (await readdir(path.join(root, 'component-preview'))).filter((name) => /\.(?:js|mjs|css|html|json)$/.test(name) && name !== 'build-manifest.json').sort()) {
  const contents = (await readFile(path.join(root, 'component-preview', name), 'utf8')).replace(/\r\n/g, '\n');
  inputs[name] = createHash('sha256').update(contents).digest('hex');
}
await writeFile(manifestPath, JSON.stringify({ source: pin, inputs, assets }, null, 2) + '\n');
await copyFile(path.join(root, 'component-preview/source.json'), path.join(outDir, 'source.json'));
console.log(`Built ${files.length} component-preview files from Biblioplex ${revision}.`);
