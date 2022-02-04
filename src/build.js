import { mkdir, readdir, readFile, stat, writeFile } from 'fs/promises';
import { join } from 'path';
import { direxists } from './lib/file.js';

import { makeHTML, makeIndex, makeTemplate } from './make-html.js';
import { parse } from './parser.js';

const DATA_DIR = './data';
const OUTPUT_DIR = './dist';

async function main() {
  const files = await readdir(DATA_DIR);
  if (!(await direxists(OUTPUT_DIR))) {
    await mkdir(OUTPUT_DIR);
  }

  for (const file of files) {
    const path = join(DATA_DIR, file);
    const info = await stat(path);

    if (info.isDirectory()) {
      // eslint-disable-next-line no-continue
      continue;
    }
    const data = await readFile(path);
    const str = data.toString('utf-8');
    const parsed = parse(str);

    const fileName = join(OUTPUT_DIR, file + '.html');
    const content = makeHTML(file, parsed, str);
    const wrappedContent = makeTemplate(file, content);
    await writeFile(fileName, wrappedContent, { flag: 'w+' });
  }
  const index = makeTemplate('Skilaverkefni1-sfm1', makeIndex(files));
  await writeFile(join(OUTPUT_DIR, 'index.html'), index, { flag: 'w+' });
}

main().catch((err) => console.error(err));
