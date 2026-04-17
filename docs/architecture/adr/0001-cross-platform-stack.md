# ADR 0001: Cross-Platform Stack

Status: Vorgeschlagen  
Datum: 17.04.2026

## Kontext

Die App soll fuer iOS/iPadOS, Android und Windows gebaut werden. Optional sollen macOS und Web spaeter ergaenzbar bleiben. Gleichzeitig braucht die App Audio, Video, lokale Offline-Daten, gute Performance und stabile Release-Pfade.

## Entscheidung

Wir verwenden:

- Flutter/Dart fuer die App
- TypeScript/Node.js fuer Backend und API-Gateway
- PostgreSQL zentral
- SQLite lokal in der App
- Headless CMS fuer redaktionelle Inhalte

## Konsequenzen

Vorteile:

- gemeinsame Codebasis fuer mehrere Plattformen
- gute Offline-Unterstuetzung
- klare Trennung von App, API und Content
- skalierbarer Weg fuer spaetere Plattformen

Nachteile:

- Flutter-spezifisches Know-how noetig
- Desktop-Feinschliff bleibt eigener Aufwand
- App-Store-Release bleibt plattformspezifisch

## Alternativen

### React Native

Gut fuer Mobile, aber Windows/Desktop und langfristige plattformuebergreifende UI waeren komplexer.

### Native Apps

Maximale Plattformintegration, aber hoher Aufwand durch mehrere Codebasen.

### Web/PWA zuerst

Schnell fuer Browser, aber schwacher bei App-Store, Offline-Medien, Audio-Integration und nativer Desktop-Distribution.

