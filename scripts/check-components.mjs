import { createHash } from 'node:crypto';
import { readFile } from 'node:fs/promises';

const root = new URL('../', import.meta.url);
const manifest = JSON.parse(await readFile(new URL('component-preview/build-manifest.json', root), 'utf8'));
const hash = (value) => createHash('sha256').update(value).digest('hex');
for (const [name, expected] of Object.entries(manifest.inputs)) {
  const actual = hash((await readFile(new URL(`component-preview/${name}`, root), 'utf8')).replace(/\r\n/g, '\n'));
  if (actual !== expected) throw new Error(`Rebuild components: source ${name} changed.`);
}
for (const [name, expected] of Object.entries(manifest.assets)) {
  if (hash(await readFile(new URL(`public/components/${name}`, root))) !== expected) throw new Error(`Component asset does not match its build: ${name}`);
}
const pin = JSON.parse(await readFile(new URL('public/components/source.json', root), 'utf8'));
if (pin.commit !== manifest.source.commit) throw new Error('Component source revision mismatch.');
console.log(`Verified ${Object.keys(manifest.assets).length} component assets and their source inputs.`);
