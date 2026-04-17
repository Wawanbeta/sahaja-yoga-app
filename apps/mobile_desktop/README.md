# Mobile/Desktop App

Geplanter Stack:

- Flutter
- Dart
- SQLite/Drift fuer lokale Daten
- Riverpod oder BLoC fuer State Management
- GoRouter fuer Navigation

## Zielplattformen

- iOS/iPadOS
- Android
- Windows
- optional macOS
- optional Web

## Geplante Feature-Struktur

```text
lib/
|-- app/
|-- core/
|-- features/
|   |-- inspiration/
|   |-- meditation/
|   |-- mantras/
|   |-- media_library/
|   |-- journal/
|   |-- offline/
|   `-- settings/
`-- shared/
```

## Naechster Schritt

Flutter-Projekt hier initialisieren und zuerst eine App-Shell mit Navigation und lokalem Seed-Content bauen.

## Lokale API konfigurieren

Die App erwartet standardmaessig:

```bash
http://127.0.0.1:8787
```

Bei Bedarf kann die API-Basis beim Start gesetzt werden:

```bash
flutter run --dart-define=API_BASE_URL=http://127.0.0.1:8787
```
