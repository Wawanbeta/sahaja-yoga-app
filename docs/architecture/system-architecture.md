# Systemarchitektur

Status: Startarchitektur

## Architekturziel

Die App soll externe Inhalte, eigene redaktionelle Inhalte und private Nutzerdaten klar trennen.

```text
Flutter-App
  |
  v
Eigene App-API
  |
  +--> CMS / PostgreSQL / Storage
  |
  +--> Learn Sahaja Yoga API
  |
  +--> freigegebene Foundation-Inhalte
```

## Schichten

### App

Aufgaben:

- UI und Navigation
- lokale Offline-Daten
- Audio/Video-Wiedergabe
- lokale Favoriten
- lokales Tagebuch
- API-Kommunikation mit eigener App-API

### App-API

Aufgaben:

- externe Quellen kapseln
- CMS-Inhalte ausliefern
- Caching und Rate-Limit-Schutz
- einheitliche Datenmodelle liefern
- spaeter Auth, Sync und Community absichern

### CMS

Aufgaben:

- redaktionelle Inhalte pflegen
- Freigabestatus verwalten
- Quellen und Rechte dokumentieren
- mehrsprachige Inhalte verwalten

### Datenbank

Aufgaben:

- Nutzerprofile, falls Konto aktiviert
- Favoriten-Sync, falls aktiviert
- Community-Daten, spaeter
- redaktionelle Metadaten
- Audit-Informationen

### Externe Quellen

Aufgaben:

- Talk-Daten
- Transkripte
- Metadaten
- freigegebene Informationsquellen

## Grundsaetze

- Die App soll nicht direkt von externen API-Details abhaengen.
- Caching ist Pflicht, nicht Optimierung.
- Offline-Faehigkeit wird von Anfang an modelliert.
- Direkte Zitate und spirituelle Einordnungen benoetigen Quellen- und Freigabestatus.
- Private Nutzerdaten werden getrennt von Content-Daten behandelt.

