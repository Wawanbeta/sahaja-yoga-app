import { getConfig } from './config/env.js';
import { createAppServer } from './app.js';
import { LearnSahajaYogaClient } from './integrations/learn_sahaja_yoga/client.js';

const config = getConfig();
const learnSahajaYogaClient = new LearnSahajaYogaClient(config);

const server = createAppServer({
  config,
  talksClient: learnSahajaYogaClient
});

server.listen(config.port, config.host, () => {
  console.log(`Sahaja Yoga API listening on http://${config.host}:${config.port}`);
});
