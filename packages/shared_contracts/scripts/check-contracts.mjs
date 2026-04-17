import { existsSync } from 'node:fs';

const requiredFiles = [
  'schemas/openapi.yaml',
  'src/index.ts'
];

const missing = requiredFiles.filter((file) => !existsSync(new URL(`../${file}`, import.meta.url)));

if (missing.length > 0) {
  console.error(`Missing contract files: ${missing.join(', ')}`);
  process.exit(1);
}

console.log('Shared contracts are present.');

