# Sahaja-Yoga-App: Software-Erstellungsplan

Stand: 17.04.2026  
Status: Erste Planungsgrundlage fuer die Umsetzung

## 1. Ziel des Dokuments

Dieses Dokument beschreibt einen ersten Schritt-fuer-Schritt-Plan zur Erstellung einer plattformunabhaengigen Sahaja-Yoga-App. Es dient als technische und organisatorische Grundlage fuer die eigentliche Software-Entwicklung.

Die App soll Inhalte, Praxis und Gemeinschaft verbinden:

- taegliche Inspirationen und Zitate
- Meditationen mit Timer oder gefuehrtem Ablauf
- Mantren mit Text, Uebersetzung und Audio
- Mediathek mit Reden, Videos und Transkripten
- Einsteigerkurs und gefuehrte Lernpfade
- Tagebuch fuer persoenliche Reflexion
- Empfehlungen fuer passende Inhalte
- Community-Funktionen mit moderierten Diskussionen
- Offline-Modus fuer ausgewaehlte Basisfunktionen

## 2. Quellen und fachliche Grundlage

### 2.1 Bestehende Projektdokumentation

Basis ist die vorhandene fachliche Dokumentation:

- `Sahaja_Yoga_App_Dokumentation.docx`
- `Sahaja_Yoga_App_Dokumentation_polished.docx`
- `Sahaja_Yoga_App_Dokumentation.pdf`
- `sahaja_yoga_app_flow.bpmn`

Die vorhandene Dokumentation beschreibt bereits die zentralen App-Module und Uebergaenge, zum Beispiel Inspiration -> Meditation, Meditation -> Tagebuch und Mediathek -> Empfehlungen.

### 2.2 Shri Mataji Foundation

Quelle: <https://shrimatajifoundation.org/>

Die Website der Shri Mataji Foundation dient als fachlicher Bezugspunkt fuer:

- Informationen zu Shri Mataji Nirmala Devi
- Grundverstaendnis von Sahaja Yoga
- Kontext zur Foundation und ihrer internationalen Arbeit
- Hinweise auf Events, Projekte, Biografie, Heritage-Themen und organisatorische Informationen

Wichtig: Direkte Texte, Zitate, Bilder oder Medien dieser Quelle duerfen nur verwendet werden, wenn Rechte, Lizenz und redaktionelle Freigabe geklaert sind.

### 2.3 Learn Sahaja Yoga Talks API

Quelle: <https://learnsahajayoga.org/api/docs>  
Base URL: `https://learnsahajayoga.org/api`

Die API stellt einen programmatischen Zugang zu einem Archiv von Talks von Shri Mataji Nirmala Devi bereit. Laut Dokumentation bietet sie unter anderem:

- REST-Endpunkte mit JSON-Antworten
- Volltextsuche mit Relevanzranking
- Filter nach Land, Kategorie, Jahr und gesprochener Sprache
- Pagination fuer Listen
- mehrere Uebersetzungssprachen
- Metadaten-Endpunkte fuer dynamische UI-Filter
- OpenAPI-Spezifikation unter `https://learnsahajayoga.org/api/openapi.json`
- MCP-Discovery unter `https://learnsahajayoga.org/.well-known/mcp.json`

Relevante Endpunkte fuer die App:

- `GET /api/talks`: Liste von Talks mit Filtern und Sortierung
- `GET /api/talk/{id}`: Detailansicht eines Talks
- `GET /api/search`: Volltextsuche
- `GET /api/meta/categories`: Kategorien
- `GET /api/meta/countries`: Laender
- `GET /api/meta/languages`: verfuegbare Uebersetzungssprachen
- `GET /api/meta/spoken-languages`: gesprochene Sprachen
- `GET /api/meta/video-subtitles`: Video-Untertitelsprachen
- `GET /api/meta/years`: Jahre

Wichtig fuer die Umsetzung:

- Die API ist laut Dokumentation offen und benoetigt aktuell keine Authentifizierung.
- Die Anwendung muss trotzdem defensiv gebaut werden: Rate Limiting, Retry-Strategie, Caching und Fehlerbehandlung sind Pflicht.
- Metadaten sollten lokal gecacht werden, weil sie sich selten aendern.
- Fuer Offline-Nutzung muss geklaert werden, welche Inhalte gespeichert werden duerfen.

## 3. Zielplattformen

Die App soll plattformunabhaengig entwickelt werden.

Primaere Zielplattformen:

- iOS fuer iPhone und iPad
- Android fuer Smartphones und Tablets
- Windows Desktop

Optionale Erweiterung:

- macOS Desktop
- Web-App fuer Browserzugriff

Annahme: Mit "Apple" ist zuerst iOS/iPadOS gemeint. macOS kann mit derselben Technologie spaeter ergaenzt werden, sollte aber als eigener Release-Pfad geplant werden.

## 4. Empfohlener Technologie-Stack

### 4.1 App-Frontend

Empfehlung: Flutter mit Dart

Gruende:

- eine gemeinsame Codebasis fuer iOS, Android, Windows, macOS und optional Web
- gute Performance fuer mobile und Desktop-Oberflaechen
- stabile Unterstuetzung fuer Offline-Speicherung, Audio, Video und lokale Datenbanken
- ausgereifte Build- und Release-Prozesse fuer App Stores und Desktop-Installer
- native Erweiterungen moeglich, falls Plattformfunktionen gebraucht werden

Programmiersprache:

- Dart fuer die App

Wichtige Flutter-Pakete, die in der technischen Detailplanung geprueft werden sollten:

- `riverpod` oder `bloc` fuer State Management
- `go_router` fuer Navigation
- `dio` oder `http` fuer API-Kommunikation
- `drift` oder `sqflite` fuer lokale SQLite-Daten
- `flutter_secure_storage` fuer sichere lokale Tokens
- `just_audio` fuer Audio-Wiedergabe
- `video_player` oder eingebettete Web-/Vimeo-Loesungen fuer Video
- `freezed` und `json_serializable` fuer stabile Datenmodelle

### 4.2 Backend und App-API

Empfehlung: TypeScript mit Node.js

Aufgabe des Backends:

- eigene App-API bereitstellen
- externe Quellen wie die Learn-Sahaja-Yoga-API anbinden
- API-Antworten cachen und vereinheitlichen
- Nutzerkonten, Tagebuch-Sync und Favoriten verwalten
- Community-Funktionen und Moderation absichern
- Empfehlungen vorberechnen oder regelbasiert erzeugen
- CMS-Inhalte an die App ausliefern

Moegliche Frameworks:

- NestJS, wenn klare Module, Dependency Injection und groessere Struktur gewuenscht sind
- Fastify, wenn ein schlankes, schnelles API-Gateway bevorzugt wird

Programmiersprachen:

- TypeScript fuer Backend, API-Gateway und Integrationen
- SQL fuer Datenbankabfragen

### 4.3 Datenbank und Speicherung

Empfehlung:

- PostgreSQL als zentrale relationale Datenbank
- SQLite lokal in der App fuer Offline-Daten
- Object Storage fuer eigene Audiodateien, Bilder und Downloads

Moegliche Plattform:

- Supabase oder ein vergleichbarer PostgreSQL-basierter Dienst fuer Auth, Datenbank und Storage
- alternativ eigenes Hosting mit PostgreSQL, Node.js und separatem Object Storage

### 4.4 CMS fuer redaktionelle Inhalte

Empfehlung:

- Directus oder Strapi als Headless CMS

Zu pflegende Inhalte:

- Tagesimpulse
- Zitate und Quellenhinweise
- Mantren
- Uebersetzungen
- gefuehrte Meditationen
- Kursmodule
- App-Texte
- redaktionelle Empfehlungen
- Offline-Seed-Pakete

Wichtig: Zitate, Mantren, Quellenangaben und spirituelle Einordnungen muessen redaktionell freigegeben werden, bevor sie produktiv erscheinen.

## 5. Zielarchitektur

Die App sollte nicht direkt von allen externen Quellen abhaengig sein. Empfohlen wird eine Schichtenarchitektur:

1. Flutter-App
2. Eigene App-API
3. CMS und eigene Datenbank
4. Externe Quellen, insbesondere Learn Sahaja Yoga API und freigegebene Foundation-Inhalte

Vorteile:

- einheitliche Datenmodelle in der App
- bessere Kontrolle ueber Caching, Fehler, Rate Limits und Offline-Sync
- redaktionelle Pruefung vor Auslieferung sensibler Inhalte
- leichterer Austausch externer Quellen
- klare Trennung zwischen Nutzerinhalten, CMS-Inhalten und Archivdaten

## 6. Zentrale Datenbereiche

### 6.1 Redaktionelle Inhalte

Beispiele:

- `inspiration`
- `quote`
- `mantra`
- `meditation`
- `course_module`
- `course_step`
- `recommendation_rule`

Wichtige Felder:

- Titel
- Kurzbeschreibung
- Sprache
- Quelle
- Freigabestatus
- thematische Tags
- Chakra- oder Themenbezug, falls redaktionell gesichert
- Offline-Verfuegbarkeit

### 6.2 Externe Talk-Daten

Aus der Learn-Sahaja-Yoga-API sollten nicht alle Daten ungeprueft kopiert werden. Sinnvoll ist:

- Talk-ID
- Titel
- Datum/Jahr
- Land, Stadt, Kategorie
- Sprache und Uebersetzungen
- Medienlinks
- Markdown-Transkript oder Textauszug
- Zeitpunkt der letzten Synchronisierung

Caching-Regel:

- Metadaten langfristig cachen
- Suchergebnisse kurz cachen
- Talk-Details mittelfristig cachen
- bei Fehlern auf vorhandene lokale Kopien zurueckfallen

### 6.3 Nutzerdaten

Beispiele:

- Profil
- Spracheinstellung
- Favoriten
- Verlauf
- Tagebucheintraege
- Meditationserfolge oder Streaks, falls gewuenscht
- Community-Beitraege

Datenschutz:

- Tagebuchdaten sind besonders sensibel und muessen privat, verschluesselt und exportierbar sein.
- Die App sollte ohne Konto nutzbar sein, soweit das fachlich moeglich ist.
- Konto und Cloud-Sync sollten optional sein.

## 7. Entwicklungsphasen

### Phase 0: Rechte, Umfang und Produktentscheidung

Ziel: Vor dem Bauen klaeren, was gebaut werden darf und was zuerst gebaut wird.

Schritte:

1. Rechte an Zitaten, Bildern, Audio, Video, Transkripten und Foundation-Inhalten klaeren.
2. Nutzungsbedingungen der Learn-Sahaja-Yoga-API pruefen.
3. Klaeren, ob API-Daten offline gespeichert werden duerfen.
4. Zielgruppe definieren: Einsteiger, erfahrene Praktizierende oder beide.
5. MVP-Funktionsumfang festlegen.
6. Sprachen fuer Version 1 definieren, empfohlen: Deutsch und Englisch.
7. Community-Funktionen fuer MVP bewusst zurueckstellen, falls Moderation noch nicht geklaert ist.

Ergebnis:

- freigegebener Funktionsumfang
- Rechte- und Quellenliste
- MVP-Backlog
- erste Datenschutz- und Moderationsentscheidung

### Phase 1: Produktkonzept und UX-Struktur

Ziel: Die Nutzerfuehrung festlegen, bevor Code geschrieben wird.

Schritte:

1. Hauptnavigation definieren: Inspiration, Meditation, Mantren, Mediathek, Kurs, Tagebuch, Profil.
2. App-Flows aus `sahaja_yoga_app_flow.bpmn` in konkrete Screens uebersetzen.
3. Wireframes fuer die wichtigsten Screens erstellen.
4. Onboarding definieren: Sprache, Erfahrung, Ziel der Nutzung, Datenschutz.
5. Offline-Szenarien planen: Was funktioniert ohne Internet?
6. Inhaltsarten in CMS-Strukturen uebersetzen.
7. Akzeptanzkriterien pro Screen schreiben.

Ergebnis:

- Screen-Liste
- Navigation Map
- MVP-Wireframes
- Inhaltsmodell
- priorisierte User Stories

### Phase 2: Technisches Fundament

Ziel: Projektstruktur, Entwicklungsumgebung und Basisarchitektur erstellen.

Schritte:

1. Flutter-Projekt anlegen.
2. Zielplattformen aktivieren: iOS, Android, Windows, optional macOS.
3. State Management auswaehlen und einrichten.
4. Routing einrichten.
5. Theme, Design Tokens und Basis-Komponenten erstellen.
6. API-Client fuer eigene App-API vorbereiten.
7. Lokale SQLite-Datenbank einrichten.
8. Logging, Error Handling und Crash Reporting planen.
9. CI/CD-Pipeline vorbereiten.

Ergebnis:

- lauffaehige App-Shell auf allen Zielplattformen
- einheitliches Design-Fundament
- technische Projektstruktur
- erste automatisierte Builds

### Phase 3: Backend, CMS und Datenbasis

Ziel: Die App bekommt eine stabile Datenquelle.

Schritte:

1. PostgreSQL-Datenbank einrichten.
2. Backend-Projekt mit TypeScript anlegen.
3. Basis-API definieren: Inhalte, Talks, Nutzer, Sync, Empfehlungen.
4. CMS einrichten und Inhaltsmodelle anlegen.
5. Rollen und Freigabeprozess fuer Redaktion definieren.
6. API-Gateway fuer Learn-Sahaja-Yoga-API bauen.
7. Caching fuer Metadaten, Talks und Suche implementieren.
8. Admin-Seed-Daten fuer Inspiration, Mantren und Meditationen erstellen.
9. OpenAPI-Dokumentation fuer die eigene App-API erzeugen.

Ergebnis:

- CMS fuer redaktionelle Pflege
- eigene App-API
- angebundene externe Talk-API
- erste freigegebene Inhalte

### Phase 4: MVP-Funktionen bauen

Ziel: Eine erste nutzbare Version der App erstellen.

Empfohlene Reihenfolge:

1. Onboarding und Spracheinstellung
2. Startseite mit Tagesinspiration
3. Meditation mit Timer
4. einfache gefuehrte Meditation
5. Mantren-Liste mit Detailansicht
6. Audio-Wiedergabe fuer Mantren oder Meditationen
7. Mediathek-Liste mit Talk-Daten aus API oder Backend-Cache
8. Talk-Detailseite mit Metadaten, Medienlinks und Markdown-Inhalt
9. Suche in der Mediathek
10. Filter nach Sprache, Jahr, Land und Kategorie
11. Tagebuch lokal
12. Favoriten lokal
13. Offline-Seed-Paket fuer Basisinhalte

Nicht zwingend im ersten MVP:

- Community
- KI-Re-Ranking
- komplexe Personalisierung
- Cloud-Sync fuer Tagebuch
- Push Notifications
- vollstaendige Desktop-Optimierung

Ergebnis:

- nutzbarer MVP
- Kernpfad Inspiration -> Praxis -> Reflexion -> Vertiefung
- erste Offline-Faehigkeit

### Phase 5: Offline-First und Synchronisation

Ziel: Die App bleibt auch ohne Internet sinnvoll nutzbar.

Schritte:

1. Lokale Datenmodelle finalisieren.
2. Offline-Seed-Paket definieren.
3. Download-Manager fuer ausgewaehlte Inhalte bauen.
4. Cache-Invalidierung implementieren.
5. Konfliktstrategie fuer Tagebuch-Sync festlegen.
6. Netzstatus erkennen und UI entsprechend anpassen.
7. Fehlermeldungen menschlich und ruhig formulieren.

Ergebnis:

- App funktioniert mit Basisinhalten offline
- Nutzer erkennen klar, welche Inhalte lokal verfuegbar sind
- Sync ist nachvollziehbar und robust

### Phase 6: Personalisierung und Empfehlungen

Ziel: Inhalte sinnvoll verbinden, ohne die App undurchsichtig zu machen.

Start mit regelbasierten Empfehlungen:

- Thema
- Chakra
- Sprache
- Nutzungsverlauf
- favorisierte Inhaltsarten
- redaktionelle Verknuepfungen

Spaetere KI-Option:

- KI-Re-Ranking nur, wenn Datenschutz, Transparenz und redaktionelle Kontrolle geklaert sind.
- Keine spirituellen oder medizinischen Versprechen automatisch generieren.
- Empfehlungen muessen als Empfehlungen erkennbar sein.

Ergebnis:

- nachvollziehbare Vorschlaege
- einfache Pflege durch Redaktion
- Grundlage fuer spaetere Personalisierung

### Phase 7: Community und Moderation

Ziel: Austausch ermoeglichen, ohne Sicherheit und Qualitaet zu gefaehrden.

Schritte:

1. Community-Regeln formulieren.
2. Rollen definieren: Nutzer, Moderator, Admin.
3. Melde- und Sperrfunktionen bauen.
4. Threads an Mediathek-Inhalte koppeln.
5. Moderations-Queue im Admin-Bereich bauen.
6. App-Store-Anforderungen fuer User Generated Content pruefen.

Empfehlung:

Community erst nach dem MVP bauen, weil Moderation, Datenschutz und Betrieb sonst zu frueh zu viel Komplexitaet erzeugen.

Ergebnis:

- sicherer Community-Bereich
- klare Moderationsprozesse
- reduzierte Risiken fuer App-Store-Freigaben

### Phase 8: Qualitaetssicherung

Ziel: Stabilitaet auf allen Plattformen sicherstellen.

Tests:

- Unit Tests fuer Datenmodelle und Business-Logik
- Widget Tests fuer Flutter-Komponenten
- Integration Tests fuer Kernflows
- API-Tests fuer Backend-Endpunkte
- Offline-/Online-Wechseltests
- Audio- und Video-Wiedergabetests
- Accessibility-Tests
- Datenschutz- und Security-Review

Plattformtests:

- iPhone
- iPad
- Android Smartphone
- Android Tablet
- Windows Desktop
- optional macOS

Besonders zu pruefen:

- Schriftgroessen und Lesbarkeit
- Audio im Hintergrund
- Netzunterbrechungen
- lokale Speicherung
- Sprache und Uebersetzung
- Fehler der externen API
- Rate-Limit-Situationen

Ergebnis:

- testbarer Release Candidate
- dokumentierte bekannte Einschraenkungen
- Freigabecheckliste

### Phase 9: Release und Betrieb

Ziel: Die App kontrolliert veroeffentlichen und betreiben.

Schritte fuer iOS:

1. Apple Developer Account klaeren.
2. App-ID, Bundle Identifier und Zertifikate anlegen.
3. TestFlight einrichten.
4. Datenschutzangaben fuer App Store vorbereiten.
5. App Review einreichen.

Schritte fuer Android:

1. Google Play Developer Account klaeren.
2. Package Name und Signing konfigurieren.
3. Internal Testing Track nutzen.
4. Store Listing, Screenshots und Datenschutzangaben erstellen.
5. Play Review einreichen.

Schritte fuer Windows:

1. Windows-Build mit Flutter Desktop erstellen.
2. Installer-Format festlegen, empfohlen: MSIX.
3. Code Signing klaeren.
4. Distribution ueber Microsoft Store oder eigener Download entscheiden.

Betrieb:

- Monitoring fuer Backend und API-Gateway
- Crash Reporting fuer App
- Content-Freigabeprozess im CMS
- Backup-Strategie fuer Datenbank und Storage
- Datenschutzanfragen und Datenexport
- Versionsmanagement und Release Notes

Ergebnis:

- veroeffentlichte App
- Betriebshandbuch
- Support- und Update-Prozess

## 8. MVP-Vorschlag

Der erste produktive MVP sollte klein genug sein, um stabil gebaut und getestet zu werden.

Empfohlener MVP:

- Onboarding mit Spracheinstellung
- Startseite mit Tagesinspiration
- Meditationstimer
- eine kleine Auswahl gefuehrter Meditationen
- Mantren-Bereich mit Text, Uebersetzung und optional Audio
- Mediathek mit API-basierter Suche und Talk-Detailseite
- Favoriten
- lokales Tagebuch
- Offline-Seed-Paket
- CMS fuer redaktionelle Pflege

Bewusst spaeter:

- Community
- vollstaendige Personalisierung
- KI-gestuetzte Empfehlungen
- Cloud-Sync fuer Tagebuch
- Push Notifications
- komplexe Kurslogik

## 9. Erste technische Aufgabenliste

### Repository und Projektstruktur

1. Repository-Struktur festlegen:
   - `apps/mobile_desktop` fuer Flutter
   - `services/api` fuer TypeScript Backend
   - `cms` oder externe CMS-Konfiguration
   - `docs` fuer Produkt- und Architekturunterlagen
2. Flutter-Projekt anlegen.
3. TypeScript-Backend anlegen.
4. Gemeinsame API-Schemata definieren.
5. CI-Pipeline fuer Tests und Builds einrichten.

### Flutter-App

1. Designsystem erstellen.
2. Navigation aufsetzen.
3. Lokale Datenbank einrichten.
4. API-Client schreiben.
5. Inspirationsscreen bauen.
6. Meditationsscreen bauen.
7. Mantrenbereich bauen.
8. Mediathek-Liste und Detailseite bauen.
9. Tagebuch lokal bauen.
10. Offline-Status und Cache-Anzeige bauen.

### Backend

1. API-Projekt mit TypeScript erstellen.
2. Datenbankmodell definieren.
3. CMS anbinden.
4. Learn-Sahaja-Yoga-API-Client bauen.
5. Caching-Schicht implementieren.
6. App-Endpunkte bereitstellen.
7. Auth optional vorbereiten.
8. Logging und Monitoring vorbereiten.

### Redaktion und Inhalte

1. Quellenliste pflegen.
2. Zitate verifizieren.
3. Mantra-Schreibweisen freigeben.
4. Meditationstexte erstellen oder freigeben.
5. Uebersetzungen planen.
6. Offline-Startpaket definieren.

## 10. Sicherheits- und Datenschutzprinzipien

Grundsaetze:

- so wenige personenbezogene Daten wie moeglich speichern
- Tagebuchdaten privat und optional cloud-synchronisiert behandeln
- Konto optional machen, wenn fachlich moeglich
- lokale Daten klar loeschbar machen
- Export fuer persoenliche Daten vorsehen
- keine sensiblen Inhalte ohne Zustimmung analysieren
- Community nur mit Moderation und Meldefunktion
- externe API-Fehler nicht an Nutzer durchreichen

Zu klaeren:

- DSGVO-Rechtsgrundlage
- Datenschutzerklaerung
- Datenverarbeitung fuer Crash Reporting
- Analytics nur mit Einwilligung
- Altersfreigabe
- App-Store-Regeln fuer User Generated Content

## 11. Offene Entscheidungen

Diese Punkte muessen vor oder waehrend der Umsetzung geklaert werden:

- Soll die App zuerst Deutsch, Englisch oder mehrsprachig starten?
- Ist "Apple" nur iOS/iPadOS oder auch macOS?
- Duerfen Inhalte der Learn-Sahaja-Yoga-API offline gespeichert werden?
- Welche Foundation-Inhalte duerfen direkt in der App verwendet werden?
- Gibt es offizielle Logos, Farben und Designvorgaben?
- Wer uebernimmt redaktionelle Freigabe von Zitaten und Mantren?
- Soll das Tagebuch nur lokal bleiben oder Cloud-Sync erhalten?
- Soll die App komplett ohne Konto nutzbar sein?
- Wann wird Community eingebaut?
- Soll das Projekt Open Source oder privat entwickelt werden?

## 12. Risiken

### Rechte und Inhalte

Risiko: Inhalte werden ohne ausreichende Rechte oder Quellenangaben verwendet.  
Massnahme: Rechte- und Freigabeprozess vor dem produktiven Einsatz etablieren.

### Externe API-Abhaengigkeit

Risiko: Die App ist zu stark von einer externen API abhaengig.  
Massnahme: Eigenes API-Gateway, Caching und Offline-Fallbacks verwenden.

### Community-Komplexitaet

Risiko: Community-Funktionen erfordern Moderation, Meldewege und App-Store-Konformitaet.  
Massnahme: Community nach dem MVP planen.

### Plattformaufwand

Risiko: iOS, Android und Windows unterscheiden sich trotz gemeinsamer Codebasis in Details.  
Massnahme: Frueh auf allen Zielplattformen testen.

### Datenschutz

Risiko: Tagebuch, Verlauf und spirituelle Interessen koennen sensible Nutzerdaten sein.  
Massnahme: Datensparsamkeit, lokale Speicherung, Verschluesselung und klare Zustimmung.

## 13. Definition of Done fuer den MVP

Der MVP gilt als fertig, wenn:

- die App auf iOS, Android und Windows startet
- die Hauptnavigation funktioniert
- Tagesinspirationen geladen und angezeigt werden
- Meditationstimer und mindestens eine gefuehrte Meditation funktionieren
- Mantren angezeigt werden
- Mediathek-Daten aus der API oder dem Backend-Cache geladen werden
- Suche und Basisfilter funktionieren
- Favoriten lokal gespeichert werden
- Tagebuch lokal gespeichert wird
- ein Offline-Seed-Paket verfuegbar ist
- Fehler der externen API verstaendlich behandelt werden
- Datenschutztexte und App-Store-Pflichtangaben vorbereitet sind
- alle redaktionellen Inhalte Quellen- und Freigabestatus haben

## 14. Naechster konkreter Schritt

Der naechste sinnvolle Schritt ist eine technische Vorbereitungsphase:

1. Projektstruktur anlegen.
2. Flutter-Proof-of-Concept fuer iOS, Android und Windows starten.
3. Kleinen API-Prototypen bauen, der `GET /api/talks`, `GET /api/talk/{id}` und `GET /api/search` ueber eine eigene App-API kapselt.
4. Einfaches CMS-Inhaltsmodell fuer Inspiration, Mantren und Meditationen erstellen.
5. Einen klickbaren MVP-Prototypen mit den Kernflows bauen:
   - Inspiration -> Meditation
   - Inspiration -> Mediathek
   - Meditation -> Tagebuch
   - Mediathek -> Favoriten

Danach kann aus diesem Plan ein konkretes technisches Backlog mit Tickets, Aufwandsschaetzungen und Sprint-Reihenfolge erstellt werden.

