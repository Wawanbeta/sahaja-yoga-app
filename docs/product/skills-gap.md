# Benoetigte Skills und Skill-Gaps

Status: Erste Einschaetzung fuer die Umsetzung

## Aktuell genutzte Codex-Skills

### product-strategist

Einsatz:

- Produktstruktur
- MVP-Schnitt
- Roadmap
- Backlog- und Phasenlogik
- spaetere OKRs und Erfolgsmessung

Warum relevant:

Die App ist nicht nur ein technisches Projekt, sondern braucht klare Priorisierung: Was gehoert in den MVP, was kommt spaeter, was muss vorher rechtlich oder redaktionell geklaert werden?

### product-design

Einsatz:

- UX-Flows
- Designsystem
- Onboarding-Struktur
- Accessibility als Standard
- spaeteres Handoff an Entwicklung

Warum relevant:

Die App soll ruhig, klar und plattformuebergreifend konsistent wirken. Dafuer braucht sie frueh ein Designsystem, nicht erst am Ende Oberflaechenkosmetik.

## Voraussichtlich noetige vorhandene Skills

### frontend-design

Einsatzzeitpunkt:

- sobald die Flutter-Oberflaeche oder ein Web-Prototyp gestaltet wird
- fuer visuelle Qualitaet, Komponentenstruktur und responsive Screens

### ui-visual-validator

Einsatzzeitpunkt:

- nach ersten sichtbaren App-Screens
- zur visuellen Pruefung gegen Layout-, Lesbarkeits- und Interaktionsprobleme

### accessibility-compliance-accessibility-audit

Einsatzzeitpunkt:

- ab Designsystem und spaetestens vor Release
- fuer Kontrast, Screenreader, Schriftgroessen, Touch Targets und Tastaturbedienung

### security-best-practices

Einsatzzeitpunkt:

- beim TypeScript-Backend
- bei Auth, Tagebuch-Sync, API-Gateway, Moderation und Admin-Bereichen

Einschraenkung:

Der vorhandene Security-Skill deckt JavaScript/TypeScript gut ab, aber nicht speziell Flutter/Dart oder mobile Plattform-Security.

### analytics-tracking

Einsatzzeitpunkt:

- wenn Produktmetriken, freiwillige Nutzungsanalyse oder Conversion-Flows gebraucht werden

Wichtig:

Analytics nur mit klarer Einwilligung und ohne sensible Tagebuchinhalte.

### openai-docs

Einsatzzeitpunkt:

- nur falls spaeter KI-gestuetzte Empfehlungen, semantische Suche oder Zusammenfassungen mit OpenAI-Produkten gebaut werden

## Fehlende oder nicht spezialisierte Skills

Diese Skills fehlen als spezialisierte lokale Skill-Anleitung. Sie sind keine Blocker, aber sollten bewusst eingeplant oder durch externe Expertise ergaenzt werden.

### Flutter/Dart Cross-Platform Engineering

Fehlt fuer:

- Flutter-Projektarchitektur
- Riverpod/BLoC-Entscheidung
- lokale SQLite-Schicht mit Drift
- Audio/Video-Handling
- Desktop-spezifische Flutter-Details
- Build-Flavors fuer iOS, Android und Windows

Ausgleich:

- eigene Architekturstandards in `docs/architecture/`
- kleine Proofs of Concept vor grosser Implementierung

### Mobile Release Engineering

Fehlt fuer:

- Apple Developer Setup
- Google Play Release Tracks
- Windows MSIX Signing
- Zertifikate, Provisioning, App Store Review
- Release-Automatisierung

Ausgleich:

- separate Release-Checklisten in `ops/`
- frueh TestFlight, Internal Testing und Windows-Testbuilds einplanen

### Datenschutz / DSGVO / Legal

Fehlt fuer:

- rechtliche Bewertung von Tagebuchdaten
- Einwilligung, Datenexport und Loeschung
- API- und Medienrechte
- Lizenzklaerung fuer Foundation- und Talk-Inhalte

Ausgleich:

- juristische Pruefung vor produktivem Launch
- Datenschutz by Design technisch vorbereiten

### Spiritual Content Governance

Fehlt fuer:

- fachliche Freigabe von Zitaten
- Mantra-Schreibweisen
- Kontextualisierung von Talks
- sensible Formulierungen ohne falsche Versprechen

Ausgleich:

- redaktioneller Freigabestatus im CMS
- Quellenpflicht fuer direkte Aussagen
- Review durch fachkundige Sahaja-Yoga-Redaktion

### Mobile QA / Device Lab

Fehlt fuer:

- echte Geraetetests
- Audio-Hintergrundverhalten
- Offline-/Online-Wechsel
- Screenreader auf iOS und Android
- Windows-Desktop-Interaktion

Ausgleich:

- Testmatrix in `docs/delivery/quality-plan.md`
- fruehe manuelle Tests auf echten Zielgeraeten

### CMS- und Content-Ops

Fehlt fuer:

- konkrete Directus-/Strapi-Modelle
- Rollen und Freigabeworkflows
- mehrsprachige redaktionelle Arbeit
- Quellen- und Lizenzmanagement

Ausgleich:

- CMS-Struktur in `cms/README.md`
- Content-Governance in `content/README.md`

## Empfehlung

Die Umsetzung kann mit den vorhandenen Skills starten, wenn die fehlenden Bereiche als Risiken gefuehrt werden. Vor dem produktiven Launch sollten besonders diese Punkte extern oder fachlich validiert werden:

- Datenschutz und DSGVO
- Rechte an Inhalten und Medien
- App-Store-Freigabe
- spirituelle/redaktionelle Korrektheit
- Flutter-spezifische Mobile-Security und Release-Prozesse
