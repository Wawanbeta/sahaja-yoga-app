# Produktstruktur

Status: Startstruktur fuer Produkt, UX und Entwicklung

## Produktziel

Die Sahaja-Yoga-App begleitet Nutzende von einem kurzen Impuls in die Praxis, danach in Reflexion, Vertiefung und spaeter in Gemeinschaft.

Kernschleife:

```text
Inspiration -> Praxis -> Reflexion -> Vertiefung -> neue Inspiration
```

## Produktbereiche

### 1. Inspiration

Zweck:

- taeglicher Einstieg
- Zitat oder kurzer Impuls
- Weiterleitung in passende Praxis oder Mediathek

Screens:

- Tagesimpuls
- Inspirationsarchiv
- Detailansicht mit Quelle

MVP:

- Tagesimpuls
- Quelle/Freigabestatus
- Link zu Meditation oder Mediathek

### 2. Meditation

Zweck:

- stille oder gefuehrte Praxis
- Timer
- optionaler Uebergang von Mantra zu Stille

Screens:

- Meditation starten
- Timer
- gefuehrte Meditation
- Abschluss

MVP:

- Timer
- mindestens eine gefuehrte Meditation
- Abschlusslink zum Tagebuch

### 3. Mantren

Zweck:

- Mantra-Texte
- Uebersetzungen
- Audio zum Mitsprechen
- redaktionell gesicherte Zuordnung zu Themen

Screens:

- Mantren-Liste
- Mantra-Detail
- Audio-Player

MVP:

- Liste
- Detailtext
- Sprache/Uebersetzung
- optional Audio

### 4. Mediathek

Zweck:

- Zugriff auf Talks, Videos, Transkripte und Metadaten
- Suche und Filter
- Vertiefung nach Inspiration oder Meditation

Screens:

- Talk-Liste
- Suche
- Filter
- Talk-Detail
- Favoriten

MVP:

- API-basierte Liste
- Suche
- Basisfilter
- Detailansicht
- Favoriten lokal

### 5. Tagebuch

Zweck:

- persoenliche Reflexion nach Meditation
- private Notizen
- spaeter optionaler Cloud-Sync

Screens:

- neuer Eintrag
- Eintragsliste
- Eintragsdetail

MVP:

- lokale Speicherung
- Textnotizen
- Export/Loeschen technisch vorbereiten

### 6. Kurs

Zweck:

- strukturierter Einsteigerpfad
- Lernmodule und Praxisaufgaben

Screens:

- Kursuebersicht
- Moduldetail
- Schrittansicht

MVP:

- nicht zwingend; kann mit wenigen Basisinhalten vorbereitet werden

### 7. Empfehlungen

Zweck:

- passende Inhalte verbinden
- redaktionell nachvollziehbare Vorschlaege

MVP:

- regelbasiert
- keine KI-Abhaengigkeit

Spaeter:

- optionales KI-Re-Ranking nach Datenschutz- und Transparenzpruefung

### 8. Community

Zweck:

- Austausch ueber Talks, Praxis und Events

MVP:

- bewusst nicht enthalten

Spaeter:

- moderierte Threads
- Meldefunktion
- Rollen und Admin-Bereich

### 9. Offline-Modus

Zweck:

- Kernfunktionen ohne Internet
- lokale Basisinhalte
- klare Anzeige, was offline verfuegbar ist

MVP:

- Offline-Seed-Paket
- lokales Tagebuch
- Favoriten lokal
- gecachte Metadaten

## Produkt-Navigation

MVP-Navigation:

```text
Start
Meditation
Mantren
Mediathek
Tagebuch
Profil/Einstellungen
```

Spaetere Navigation:

```text
Start
Praxis
Mediathek
Kurs
Gemeinschaft
Profil
```

## Produktprinzipien

- Ruhige, klare Nutzerfuehrung statt Funktionsueberladung
- Wert vor Konto: Basisfunktionen ohne Registrierung
- Datenschutz by Design, besonders fuer Tagebuch und Verlauf
- Quellenpflicht fuer Zitate, Talks und spirituelle Einordnungen
- Offline-Faehigkeit als Kernanforderung, nicht als Zusatz
- Community erst mit Moderationskonzept

