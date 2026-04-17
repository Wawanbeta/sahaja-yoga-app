# R1 Proof of Concept

Status: Angelegt

## Ziel

Der R1-Prototyp soll zeigen, dass die Produktstruktur technisch tragfaehig ist:

- Flutter-App-Shell fuer den Kernflow
- TypeScript-App-API
- eigene API als Kapselung der Learn-Sahaja-Yoga-API
- lokale Seed-Inspiration
- gemeinsame Contracts

## Aktueller Stand

Angelegt:

- Root-Workspace mit `package.json`
- API-Projekt in `services/api`
- Shared Contracts in `packages/shared_contracts`
- Flutter-Zielstruktur in `apps/mobile_desktop`
- Seed-Content in `content/seeds`

Blocker:

- Flutter und Dart sind lokal noch nicht installiert. Deshalb konnte `flutter create` und `flutter test` noch nicht ausgefuehrt werden.

## Lokaler Start

API-Abhaengigkeiten installieren:

```bash
npm install
```

API im Entwicklungsmodus starten:

```bash
npm run api:dev
```

Healthcheck:

```bash
curl http://localhost:8787/health
```

Tagesinspiration:

```bash
curl "http://localhost:8787/v1/inspiration/today?lang=de"
```

## Naechste Schritte

1. Flutter SDK installieren.
2. In `apps/mobile_desktop` mit Flutter die Plattformordner erzeugen.
3. API-Prototyp starten und Healthcheck testen.
4. Talk-Proxy gegen die externe API testen.
5. Lokale Tagebuchspeicherung in Flutter mit SQLite/Drift vorbereiten.

