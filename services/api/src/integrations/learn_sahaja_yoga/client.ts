import type { AppConfig } from '../../config/env.js';
import { TtlCache } from '../../common/ttl-cache.js';

export class ExternalApiError extends Error {
  public constructor(
    message: string,
    public readonly statusCode = 502,
    public readonly detail?: unknown
  ) {
    super(message);
  }
}

export class LearnSahajaYogaClient {
  private readonly cache = new TtlCache<unknown>();

  public constructor(
    private readonly config: AppConfig,
    private readonly fetchFn: typeof fetch = fetch
  ) {}

  public listTalks(searchParams: URLSearchParams): Promise<unknown> {
    return this.fetchJson('/talks', searchParams, 60_000);
  }

  public searchTalks(searchParams: URLSearchParams): Promise<unknown> {
    return this.fetchJson('/search', searchParams, 30_000);
  }

  public getTalk(id: string): Promise<unknown> {
    return this.fetchJson(`/talk/${encodeURIComponent(id)}`, new URLSearchParams(), 60 * 60_000);
  }

  public getMetadata(kind: string): Promise<unknown> {
    return this.fetchJson(`/meta/${encodeURIComponent(kind)}`, new URLSearchParams(), 24 * 60 * 60_000);
  }

  private async fetchJson(pathname: string, params: URLSearchParams, ttlMs: number): Promise<unknown> {
    const baseUrl = this.config.learnSahajaApiBaseUrl.replace(/\/$/, '');
    const url = new URL(`${baseUrl}${pathname}`);
    params.forEach((value, key) => {
      url.searchParams.append(key, value);
    });

    const cacheKey = url.toString();
    const cached = this.cache.get(cacheKey);
    if (cached !== undefined) {
      return cached;
    }

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), this.config.requestTimeoutMs);

    try {
      const response = await this.fetchFn(url, {
        method: 'GET',
        headers: {
          accept: 'application/json'
        },
        signal: controller.signal
      });

      const text = await response.text();
      const json = text.length > 0 ? JSON.parse(text) : null;

      if (!response.ok) {
        throw new ExternalApiError('External Learn Sahaja Yoga API request failed.', response.status, json);
      }

      this.cache.set(cacheKey, json, ttlMs);
      return json;
    } catch (error) {
      if (error instanceof ExternalApiError) {
        throw error;
      }

      throw new ExternalApiError('External Learn Sahaja Yoga API is currently unavailable.', 502, {
        reason: error instanceof Error ? error.message : String(error)
      });
    } finally {
      clearTimeout(timeout);
    }
  }
}
