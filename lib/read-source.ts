import fs from 'node:fs/promises';
import path from 'node:path';

export async function readFilesContent(files: string[]) {
  const cwd = process.cwd();
  const reads = files.map(async (p) => {
    const abs = path.join(cwd, p);
    const code = await fs.readFile(abs, 'utf8');
    return { path: p, code };
  });
  return Promise.all(reads);
}