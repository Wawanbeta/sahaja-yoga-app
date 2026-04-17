# MVP-Backlog

Status: Erste Backlog-Struktur

## MVP-Ziel

Der MVP beweist den Kernnutzen:

```text
Nutzende oeffnen die App, erhalten Inspiration, meditieren, reflektieren im Tagebuch und vertiefen Inhalte in der Mediathek.
```

## Epic 1: App-Shell und Onboarding

User Stories:

- Als Nutzer moechte ich die App ohne Konto starten, damit ich direkt einen Eindruck bekomme.
- Als Nutzer moechte ich meine Sprache waehlen, damit Inhalte passend angezeigt werden.
- Als Nutzer moechte ich die Hauptbereiche klar erreichen, damit ich mich nicht orientierungslos fuehle.

Akzeptanzkriterien:

- App startet auf iOS, Android und Windows.
- Spracheinstellung wird lokal gespeichert.
- Hauptnavigation funktioniert.

## Epic 2: Tagesinspiration

User Stories:

- Als Nutzer moechte ich beim Start einen Tagesimpuls sehen.
- Als Nutzer moechte ich die Quelle eines Zitats erkennen.
- Als Nutzer moechte ich von einem Impuls zu einer passenden Meditation oder einem Talk wechseln.

Akzeptanzkriterien:

- Tagesimpuls wird aus App-API oder lokalem Seed geladen.
- Quelle und Freigabestatus sind im Datenmodell vorhanden.
- Fehlerfall zeigt eine lokale Fallback-Inspiration.

## Epic 3: Meditation

User Stories:

- Als Nutzer moechte ich eine stille Meditation mit Timer starten.
- Als Nutzer moechte ich eine gefuehrte Meditation abspielen.
- Als Nutzer moechte ich nach der Meditation ins Tagebuch wechseln.

Akzeptanzkriterien:

- Timer laeuft stabil im Vordergrund.
- Start, Pause, Fortsetzen und Beenden funktionieren.
- Abschlussbildschirm fuehrt optional zum Tagebuch.

## Epic 4: Mantren

User Stories:

- Als Nutzer moechte ich Mantren in einer Liste durchsuchen.
- Als Nutzer moechte ich Text und Uebersetzung eines Mantras sehen.
- Als Nutzer moechte ich Audio abspielen, falls vorhanden.

Akzeptanzkriterien:

- Mantren kommen aus CMS/Seed.
- Jede Mantra-Version hat Sprache, Quelle und Freigabestatus.
- Audiofehler werden ruhig und verstaendlich behandelt.

## Epic 5: Mediathek

User Stories:

- Als Nutzer moechte ich Talks suchen.
- Als Nutzer moechte ich Talks nach Sprache, Jahr, Land und Kategorie filtern.
- Als Nutzer moechte ich eine Detailseite mit Metadaten und Inhalt oeffnen.
- Als Nutzer moechte ich Talks als Favorit speichern.

Akzeptanzkriterien:

- App spricht nur mit eigener App-API, nicht direkt mit allen externen Quellen.
- App-API kapselt Learn-Sahaja-Yoga-API.
- Such- und Filterfehler haben Fallback und Retry-Option.
- Favoriten werden lokal gespeichert.

## Epic 6: Tagebuch

User Stories:

- Als Nutzer moechte ich nach einer Meditation eine private Notiz schreiben.
- Als Nutzer moechte ich alte Notizen lokal wiederfinden.
- Als Nutzer moechte ich Notizen loeschen koennen.

Akzeptanzkriterien:

- Tagebuch funktioniert offline.
- Daten bleiben lokal, solange kein Cloud-Sync aktiviert ist.
- Loeschen entfernt lokale Daten nachvollziehbar.

## Epic 7: Offline-Basis

User Stories:

- Als Nutzer moechte ich ohne Internet weiter meditieren.
- Als Nutzer moechte ich ausgewaehlte Mantren offline lesen.
- Als Nutzer moechte ich erkennen, welche Inhalte offline verfuegbar sind.

Akzeptanzkriterien:

- Seed-Paket wird mit App ausgeliefert.
- Netzstatus wird erkannt.
- Lokale Inhalte werden eindeutig markiert.

## Nicht im MVP

- Community
- KI-Re-Ranking
- Cloud-Sync fuer Tagebuch
- Push Notifications
- komplexer Kursfortschritt
- volle Desktop-Optimierung

