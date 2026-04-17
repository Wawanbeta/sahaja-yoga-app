export interface AppConfig {
  port: number;
  host: string;
  learnSahajaApiBaseUrl: string;
  requestTimeoutMs: number;
}

function readNumber(name: string, fallback: number): number {
  const value = process.env[name];
  if (!value) {
    return fallback;
  }

  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : fallback;
}

export function getConfig(): AppConfig {
  return {
    port: readNumber('PORT', 8787),
    host: process.env.HOST ?? '127.0.0.1',
    learnSahajaApiBaseUrl: process.env.LEARN_SAHAJA_API_BASE_URL ?? 'https://learnsahajayoga.org/api',
    requestTimeoutMs: readNumber('API_REQUEST_TIMEOUT_MS', 8000)
  };
}
