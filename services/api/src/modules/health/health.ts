import type { AppConfig } from '../../config/env.js';

export function getHealth(config: AppConfig): Record<string, unknown> {
  return {
    status: 'ok',
    service: 'sahaja-yoga-api',
    version: '0.1.0',
    externalSources: {
      learnSahajaYogaApi: config.learnSahajaApiBaseUrl
    }
  };
}

