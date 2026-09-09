import { createHash } from 'node:crypto';
import { cp, readFile, writeFile } from 'node:fs/promises';

const source = new URL('../public/', import.meta.url);
const output = new URL('../dist/', import.meta.url);
await cp(source, output, { recursive: true });

async function fingerprint(name, contents) {
  const hash = createHash('sha256').update(contents).digest('hex').slice(0, 12);
  const versioned = name.replace(/(\.[^.]+)$/, `.${hash}$1`);
  await writeFile(new URL(versioned, output), contents);
  return versioned;
}

const cards = await fingerprint('cards.js', await readFile(new URL('cards.js', source)));
const script = (await readFile(new URL('study.js', source), 'utf8'))
  .replace("'./cards.js'", `'./${cards}'`);
const js = await fingerprint('study.js', script);
const css = await fingerprint('study.css', await readFile(new URL('study.css', source)));
const html = (await readFile(new URL('index.html', source), 'utf8'))
  .replace('./study.js', `./${js}`)
  .replace('./study.css', `./${css}`);
await writeFile(new URL('index.html', output), html);
console.log(`Built ${css}, ${js}, ${cards}`);
