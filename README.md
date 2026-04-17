# Sahaja Yoga App

Plattformunabhaengige App fuer Inspiration, Meditation, Mantren, Mediathek, Tagebuch und spaetere Community-Funktionen.

This is an early open-source project. Its goal is to make Sahaja Yoga meditation resources more accessible through a privacy-first, source-aware, cross-platform app architecture.

Public repository:

- <https://github.com/Wawanbeta/sahaja-yoga-app>

Dieses Repository startet als Produkt- und Architekturgrundlage. Die eigentliche Implementierung soll darauf aufbauen:

- Flutter/Dart fuer iOS, Android, Windows und optional macOS/Web
- TypeScript/Node.js fuer Backend, API-Gateway und Integrationen
- PostgreSQL fuer zentrale Daten
- SQLite fuer lokale Offline-Daten in der App
- Headless CMS fuer redaktionelle Inhalte

## Open-Source Purpose

The project is intended as public-good open-source software for people who want to learn, practice, and explore Sahaja Yoga meditation in a careful and accessible way.

Core goals:

- Cross-platform access for iOS, Android, Windows, and later macOS/Web
- Privacy-first journaling and local-first practice data
- Source-aware access to talks, mantras, meditations, and learning material
- Offline-friendly practice flows
- Open architecture that other maintainers can inspect, improve, or reuse
- Accessibility and inclusive design from the beginning

## Current Prototype

The repository currently includes:

- Product and architecture documentation
- A TypeScript API prototype
- A local seed-content endpoint for daily inspiration
- A gateway to the Learn Sahaja Yoga API
- Shared OpenAPI/contract groundwork
- API tests
- Initial Flutter/Dart app structure for inspiration, meditation, journal, and media-library flows

The Flutter SDK is still required before the app UI can be run locally.

## Sources and Content Review

The app is designed to work with verified and reviewable sources.

Known reference sources:

- <https://shrimatajifoundation.org/>
- <https://learnsahajayoga.org/api/docs>

Direct quotes, mantras, dates, translations, media, and source attributions must be reviewed before they are treated as approved content. Uncertain claims should remain marked as `draft` or `needs_review`.

## Privacy Principles

- The app should be useful without requiring an account.
- Journal data should be local and private by default.
- Cloud sync should be optional.
- Analytics should be consent-based and must not inspect journal content.
- External APIs should be accessed through the internal app API, not directly from UI code.
- Community features should not launch without moderation and reporting workflows.

## Projektstruktur

```text
.
|-- apps/
|   `-- mobile_desktop/        # Flutter-App fuer Mobile und Desktop
|-- services/
|   `-- api/                   # Eigene App-API und externe Integrationen
|-- packages/
|   `-- shared_contracts/      # Gemeinsame API-Schemas und Typen
|-- cms/                       # CMS-Modelle, Rollen, Seed-Daten
|-- content/                   # Redaktionelle Arbeitsdateien und Quellenlisten
|-- assets/                    # Freigegebene Medien, Icons, Audio, Bilder
|-- infra/                     # Hosting, Datenbank, Storage, Deployment
|-- ops/                       # Betrieb, Support, Monitoring, Runbooks
|-- scripts/                   # Automatisierung und Wartungsskripte
|-- tests/                     # Plattformuebergreifende Testplaene
`-- docs/                      # Produkt, Architektur, Design und Delivery
```

## Wichtige Dokumente

- [Software-Erstellungsplan](./Sahaja_Yoga_App_Software_Erstellungsplan.md)
- [Produktstruktur](./docs/product/product-structure.md)
- [Skills und Skill-Gaps](./docs/product/skills-gap.md)
- [MVP-Backlog](./docs/product/mvp-backlog.md)
- [Systemarchitektur](./docs/architecture/system-architecture.md)
- [API-Integration](./docs/architecture/api-integration.md)
- [Daten und Datenschutz](./docs/architecture/data-and-privacy.md)
- [Designsystem](./docs/design/design-system.md)
- [Entwicklungsprozess](./docs/delivery/development-process.md)
- [Qualitaetsplan](./docs/delivery/quality-plan.md)
- [Contributing Guide](./CONTRIBUTING.md)
- [Code of Conduct](./CODE_OF_CONDUCT.md)

## Local API Test

Install dependencies:

```bash
npm install
```

Run checks:

```bash
npm run api:build
npm run api:test
npm run contracts:check
```

Start the local API:

```bash
npm run api:start
```

Test endpoints:

- <http://127.0.0.1:8787/health>
- <http://127.0.0.1:8787/v1/inspiration/today?lang=de>
- <http://127.0.0.1:8787/v1/meta/categories>

## Contributing

Contributions are welcome, especially around documentation, architecture, tests, accessibility, privacy, Flutter setup, API reliability, and content governance.

Please read:

- [CONTRIBUTING.md](./CONTRIBUTING.md)
- [CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md)

## License

This project is licensed under the [MIT License](./LICENSE).

## Naechster Entwicklungsschritt

1. Flutter-Projekt in `apps/mobile_desktop` initialisieren.
2. TypeScript-API in `services/api` initialisieren.
3. Gemeinsame OpenAPI-/JSON-Schemas in `packages/shared_contracts` definieren.
4. CMS-Inhaltsmodelle fuer Inspiration, Mantren, Meditationen und Quellen anlegen.
5. Ersten vertikalen MVP-Slice bauen: Tagesinspiration -> Meditation -> Tagebuch.
