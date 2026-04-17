import type { LearnSahajaYogaClient } from '../../integrations/learn_sahaja_yoga/client.js';

const allowedMetaKinds = new Set([
  'categories',
  'countries',
  'languages',
  'spoken-languages',
  'video-subtitles',
  'years'
]);

export function listTalks(client: LearnSahajaYogaClient, searchParams: URLSearchParams): Promise<unknown> {
  return client.listTalks(searchParams);
}

export function searchTalks(client: LearnSahajaYogaClient, searchParams: URLSearchParams): Promise<unknown> {
  return client.searchTalks(searchParams);
}

export function getTalk(client: LearnSahajaYogaClient, id: string): Promise<unknown> {
  return client.getTalk(id);
}

export function getMetadata(client: LearnSahajaYogaClient, kind: string): Promise<unknown> {
  if (!allowedMetaKinds.has(kind)) {
    throw new Error(`Unsupported metadata kind: ${kind}`);
  }

  return client.getMetadata(kind);
}

