import { after, before, describe, it } from 'node:test';
import assert from 'node:assert/strict';
import type { AddressInfo } from 'node:net';
import type { Server } from 'node:http';
import { createAppServer } from '../src/app.js';
import type { AppConfig } from '../src/config/env.js';
import { ExternalApiError } from '../src/integrations/learn_sahaja_yoga/client.js';
import type { TalksClient } from '../src/modules/talks/talks.js';

const config: AppConfig = {
  host: '127.0.0.1',
  port: 0,
  learnSahajaApiBaseUrl: 'https://example.test/api',
  requestTimeoutMs: 1000
};

class FakeTalksClient implements TalksClient {
  public listTalks(searchParams: URLSearchParams): Promise<unknown> {
    return Promise.resolve({
      kind: 'list',
      query: Object.fromEntries(searchParams)
    });
  }

  public searchTalks(searchParams: URLSearchParams): Promise<unknown> {
    return Promise.resolve({
      kind: 'search',
      query: Object.fromEntries(searchParams)
    });
  }

  public getTalk(id: string): Promise<unknown> {
    return Promise.resolve({
      id,
      title: 'Seed Talk'
    });
  }

  public getMetadata(kind: string): Promise<unknown> {
    return Promise.resolve({
      kind,
      values: ['Public Program']
    });
  }
}

class FailingTalksClient extends FakeTalksClient {
  public override listTalks(): Promise<unknown> {
    return Promise.reject(new ExternalApiError('Upstream failed.', 503, { upstream: 'down' }));
  }
}

async function readJson(response: Response): Promise<unknown> {
  return response.json() as Promise<unknown>;
}

describe('app routes', () => {
  let server: Server;
  let baseUrl: string;

  before(async () => {
    server = createAppServer({
      config,
      talksClient: new FakeTalksClient()
    });

    await new Promise<void>((resolve) => {
      server.listen(0, '127.0.0.1', resolve);
    });

    const address = server.address() as AddressInfo;
    baseUrl = `http://127.0.0.1:${address.port}`;
  });

  after(async () => {
    await new Promise<void>((resolve, reject) => {
      server.close((error) => (error ? reject(error) : resolve()));
    });
  });

  it('returns health status', async () => {
    const response = await fetch(`${baseUrl}/health`);
    const json = await readJson(response);

    assert.equal(response.status, 200);
    assert.deepEqual(json, {
      data: {
        status: 'ok',
        service: 'sahaja-yoga-api',
        version: '0.1.0',
        externalSources: {
          learnSahajaYogaApi: 'https://example.test/api'
        }
      }
    });
  });

  it('returns seed inspiration by language', async () => {
    const response = await fetch(`${baseUrl}/v1/inspiration/today?lang=de`);
    const json = (await readJson(response)) as { data: { id: string; language: string } };

    assert.equal(response.status, 200);
    assert.equal(json.data.id, 'seed-inspiration-001');
    assert.equal(json.data.language, 'de');
  });

  it('proxies talk metadata through the internal API shape', async () => {
    const response = await fetch(`${baseUrl}/v1/meta/categories`);
    const json = await readJson(response);

    assert.equal(response.status, 200);
    assert.deepEqual(json, {
      data: {
        kind: 'categories',
        values: ['Public Program']
      }
    });
  });

  it('rejects unsupported metadata kinds', async () => {
    const response = await fetch(`${baseUrl}/v1/meta/unknown`);
    const json = (await readJson(response)) as { error: { code: string } };

    assert.equal(response.status, 500);
    assert.equal(json.error.code, 'INTERNAL_ERROR');
  });
});

describe('upstream errors', () => {
  let server: Server;
  let baseUrl: string;

  before(async () => {
    server = createAppServer({
      config,
      talksClient: new FailingTalksClient()
    });

    await new Promise<void>((resolve) => {
      server.listen(0, '127.0.0.1', resolve);
    });

    const address = server.address() as AddressInfo;
    baseUrl = `http://127.0.0.1:${address.port}`;
  });

  after(async () => {
    await new Promise<void>((resolve, reject) => {
      server.close((error) => (error ? reject(error) : resolve()));
    });
  });

  it('maps upstream errors into API error envelopes', async () => {
    const response = await fetch(`${baseUrl}/v1/talks`);
    const json = (await readJson(response)) as { error: { code: string; message: string } };

    assert.equal(response.status, 503);
    assert.equal(json.error.code, 'EXTERNAL_API_ERROR');
    assert.equal(json.error.message, 'Upstream failed.');
  });
});
