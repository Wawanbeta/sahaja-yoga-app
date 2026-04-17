export interface TalksClient {
  listTalks(searchParams: URLSearchParams): Promise<unknown>;
  searchTalks(searchParams: URLSearchParams): Promise<unknown>;
  getTalk(id: string): Promise<unknown>;
  getMetadata(kind: string): Promise<unknown>;
}

const allowedMetaKinds = new Set([
  'categories',
  'countries',
  'languages',
  'spoken-languages',
  'video-subtitles',
  'years'
]);

export function listTalks(client: TalksClient, searchParams: URLSearchParams): Promise<unknown> {
  return client.listTalks(searchParams);
}

export function searchTalks(client: TalksClient, searchParams: URLSearchParams): Promise<unknown> {
  return client.searchTalks(searchParams);
}

export function getTalk(client: TalksClient, id: string): Promise<unknown> {
  return client.getTalk(id);
}

export function getMetadata(client: TalksClient, kind: string): Promise<unknown> {
  if (!allowedMetaKinds.has(kind)) {
    throw new Error(`Unsupported metadata kind: ${kind}`);
  }

  return client.getMetadata(kind);
}
