# Sahaja Yoga App

Plattformunabhaengige App fuer Inspiration, Meditation, Mantren, Mediathek, Tagebuch und spaetere Community-Funktionen.

Dieses Repository startet als Produkt- und Architekturgrundlage. Die eigentliche Implementierung soll darauf aufbauen:

- Flutter/Dart fuer iOS, Android, Windows und optional macOS/Web
- TypeScript/Node.js fuer Backend, API-Gateway und Integrationen
- PostgreSQL fuer zentrale Daten
- SQLite fuer lokale Offline-Daten in der App
- Headless CMS fuer redaktionelle Inhalte

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

## Naechster Entwicklungsschritt

1. Flutter-Projekt in `apps/mobile_desktop` initialisieren.
2. TypeScript-API in `services/api` initialisieren.
3. Gemeinsame OpenAPI-/JSON-Schemas in `packages/shared_contracts` definieren.
4. CMS-Inhaltsmodelle fuer Inspiration, Mantren, Meditationen und Quellen anlegen.
5. Ersten vertikalen MVP-Slice bauen: Tagesinspiration -> Meditation -> Tagebuch.
