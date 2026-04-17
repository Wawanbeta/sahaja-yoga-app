# API-Integration

Status: Startkonzept

## Externe API

Quelle:

- `https://learnsahajayoga.org/api/docs`

Geplante Nutzung:

- Talks listen
- Talks suchen
- Talk-Details anzeigen
- Metadaten fuer Filter laden

## Eigene App-API

Die Flutter-App spricht primaer mit der eigenen App-API.

Geplante Endpunkte:

```text
GET /v1/inspiration/today
GET /v1/mantras
GET /v1/mantras/{id}
GET /v1/meditations
GET /v1/talks
GET /v1/talks/{id}
GET /v1/talks/search
GET /v1/meta/categories
GET /v1/meta/countries
GET /v1/meta/languages
```

Spaeter:

```text
POST /v1/auth/session
GET /v1/profile
GET /v1/sync
POST /v1/journal/sync
GET /v1/community/threads
POST /v1/community/threads
```

## Integrationsregeln

- externe API-Antworten nie ungefiltert an die App weiterreichen
- Timeouts setzen
- Retry mit Backoff verwenden
- Suchergebnisse kurz cachen
- Metadaten laenger cachen
- Talk-Details mittelfristig cachen
- Fehler in nutzerfreundliche App-Fehler uebersetzen

## Datenvertrag

Gemeinsame Schemas gehoeren nach:

- `packages/shared_contracts`

Bevorzugte Form:

- OpenAPI fuer REST
- JSON Schema fuer Content-Objekte
- generierte TypeScript-Typen fuer Backend
- generierte Dart-Modelle fuer Flutter, falls praktikabel

