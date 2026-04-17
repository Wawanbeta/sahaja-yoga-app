import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';

interface SeedInspiration {
  id: string;
  title: string;
  body: string;
  language: string;
  sourceLabel: string;
  sourceUrl: string | null;
  reviewStatus: string;
  linkedPractice?: {
    type: string;
    id: string;
  };
}

const seedPath = resolve(process.cwd(), '../../content/seeds/inspirations.json');

async function readSeedInspirations(): Promise<SeedInspiration[]> {
  const raw = await readFile(seedPath, 'utf8');
  return JSON.parse(raw) as SeedInspiration[];
}

export async function getTodayInspiration(language: string): Promise<SeedInspiration> {
  const inspirations = await readSeedInspirations();
  const byLanguage = inspirations.find((item) => item.language === language);
  const fallback = inspirations[0];

  if (!byLanguage && !fallback) {
    throw new Error('No inspiration seed content is available.');
  }

  return byLanguage ?? fallback;
}

