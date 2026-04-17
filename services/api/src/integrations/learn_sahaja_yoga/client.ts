import type { AppConfig } from '../../config/env.js';

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
  public constructor(private readonly config: AppConfig) {}

  public listTalks(searchParams: URLSearchParams): Promise<unknown> {
    return this.fetchJson('/talks', searchParams);
  }

  public searchTalks(searchParams: URLSearchParams): Promise<unknown> {
    return this.fetchJson('/search', searchParams);
  }

  public getTalk(id: string): Promise<unknown> {
    return this.fetchJson(`/talk/${encodeURIComponent(id)}`, new URLSearchParams());
  }

  public getMetadata(kind: string): Promise<unknown> {
    return this.fetchJson(`/meta/${encodeURIComponent(kind)}`, new URLSearchParams());
  }

  private async fetchJson(pathname: string, params: URLSearchParams): Promise<unknown> {
    const baseUrl = this.config.learnSahajaApiBaseUrl.replace(/\/$/, '');
    const url = new URL(`${baseUrl}${pathname}`);
    params.forEach((value, key) => {
      url.searchParams.append(key, value);
    });

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), this.config.requestTimeoutMs);

    try {
      const response = await fetch(url, {
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

