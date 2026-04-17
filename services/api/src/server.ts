import { createServer } from 'node:http';
import { getConfig } from './config/env.js';
import { getRequestUrl, handleCorsPreflight, sendError, sendJson } from './common/http.js';
import { LearnSahajaYogaClient, ExternalApiError } from './integrations/learn_sahaja_yoga/client.js';
import { getHealth } from './modules/health/health.js';
import { getTodayInspiration } from './modules/inspiration/inspiration.js';
import { getMetadata, getTalk, listTalks, searchTalks } from './modules/talks/talks.js';

const config = getConfig();
const learnSahajaYogaClient = new LearnSahajaYogaClient(config);

const server = createServer(async (request, response) => {
  if (handleCorsPreflight(request, response)) {
    return;
  }

  if (request.method !== 'GET') {
    sendError(response, 405, 'METHOD_NOT_ALLOWED', 'Only GET is supported in the R1 prototype.');
    return;
  }

  const url = getRequestUrl(request);

  try {
    if (url.pathname === '/health') {
      sendJson(response, 200, { data: getHealth(config) });
      return;
    }

    if (url.pathname === '/v1/inspiration/today') {
      const language = url.searchParams.get('lang') ?? 'de';
      const inspiration = await getTodayInspiration(language);
      sendJson(response, 200, { data: inspiration });
      return;
    }

    if (url.pathname === '/v1/talks') {
      const talks = await listTalks(learnSahajaYogaClient, url.searchParams);
      sendJson(response, 200, { data: talks });
      return;
    }

    if (url.pathname === '/v1/talks/search') {
      const talks = await searchTalks(learnSahajaYogaClient, url.searchParams);
      sendJson(response, 200, { data: talks });
      return;
    }

    const talkMatch = url.pathname.match(/^\/v1\/talks\/([^/]+)$/);
    if (talkMatch) {
      const talk = await getTalk(learnSahajaYogaClient, talkMatch[1]);
      sendJson(response, 200, { data: talk });
      return;
    }

    const metaMatch = url.pathname.match(/^\/v1\/meta\/([^/]+)$/);
    if (metaMatch) {
      const metadata = await getMetadata(learnSahajaYogaClient, metaMatch[1]);
      sendJson(response, 200, { data: metadata });
      return;
    }

    sendError(response, 404, 'NOT_FOUND', 'No route matched this request.');
  } catch (error) {
    if (error instanceof ExternalApiError) {
      sendError(response, error.statusCode, 'EXTERNAL_API_ERROR', error.message, error.detail);
      return;
    }

    sendError(response, 500, 'INTERNAL_ERROR', 'The API could not complete this request.', {
      reason: error instanceof Error ? error.message : String(error)
    });
  }
});

server.listen(config.port, config.host, () => {
  console.log(`Sahaja Yoga API listening on http://${config.host}:${config.port}`);
});
