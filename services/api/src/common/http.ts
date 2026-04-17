import type { IncomingMessage, ServerResponse } from 'node:http';

export interface JsonResponseBody {
  [key: string]: unknown;
}

export function sendJson(response: ServerResponse, statusCode: number, body: unknown): void {
  const payload = JSON.stringify(body);

  response.writeHead(statusCode, {
    'content-type': 'application/json; charset=utf-8',
    'cache-control': 'no-store',
    'access-control-allow-origin': '*',
    'access-control-allow-methods': 'GET, OPTIONS',
    'access-control-allow-headers': 'content-type'
  });
  response.end(payload);
}

export function sendError(
  response: ServerResponse,
  statusCode: number,
  code: string,
  message: string,
  detail?: unknown
): void {
  sendJson(response, statusCode, {
    error: {
      code,
      message,
      ...(detail === undefined ? {} : { detail })
    }
  });
}

export function getRequestUrl(request: IncomingMessage): URL {
  return new URL(request.url ?? '/', 'http://localhost');
}

export function handleCorsPreflight(request: IncomingMessage, response: ServerResponse): boolean {
  if (request.method !== 'OPTIONS') {
    return false;
  }

  response.writeHead(204, {
    'access-control-allow-origin': '*',
    'access-control-allow-methods': 'GET, OPTIONS',
    'access-control-allow-headers': 'content-type'
  });
  response.end();
  return true;
}

