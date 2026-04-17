# Entwicklungsprozess

Status: Startprozess

## Arbeitsweise

Empfohlener Ablauf:

1. Produktentscheidung dokumentieren.
2. Akzeptanzkriterien schreiben.
3. Datenmodell und API-Vertrag klaeren.
4. Kleine vertikale Scheibe implementieren.
5. Tests und manuelle Plattformpruefung durchfuehren.
6. Dokumentation aktualisieren.

## Branching

Empfehlung:

- `main` bleibt releasefaehig
- Feature-Branches fuer groessere Arbeit
- kurze Pull Requests
- keine grossen unreviewten Sammel-Aenderungen

## Code-Qualitaet

Grundsaetze:

- klare Modulgrenzen
- typed data contracts
- keine direkte externe API-Abhaengigkeit in UI-Code
- Fehler- und Offline-Zustaende immer mitdenken
- Tests passend zum Risiko
- keine Secrets im Repository

## Reviews

Jede groessere Aenderung sollte pruefen:

- Produktverhalten
- Datenmodell
- Datenschutz
- Accessibility
- Offline-Fall
- Fehlerfall
- redaktionelle Quellenpflicht

## Dokumentationspflicht

ADR noetig bei:

- Technologieentscheidungen
- Datenbankentscheidungen
- Auth-/Sync-Entscheidungen
- groesseren API-Vertragsaenderungen
- Datenschutzrelevanten Entscheidungen

