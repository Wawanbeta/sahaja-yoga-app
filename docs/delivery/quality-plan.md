# Qualitaetsplan

Status: Startmatrix

## Testarten

### Flutter-App

- Unit Tests fuer ViewModels, Services und Datenmapper
- Widget Tests fuer Kernkomponenten
- Integration Tests fuer Kernflows
- manuelle Tests auf Zielplattformen

### Backend

- Unit Tests fuer Services
- Integration Tests fuer API-Endpunkte
- Contract Tests fuer externe API-Mappinglogik
- Security Checks fuer Auth und private Daten, sobald aktiv

### CMS und Content

- Pflichtfelder pruefen
- Quellenstatus pruefen
- Freigabestatus pruefen
- Uebersetzungsstatus pruefen

## Plattformmatrix

MVP:

- iPhone
- iPad
- Android Smartphone
- Android Tablet
- Windows Desktop

Optional:

- macOS
- Web

## Risikobasierte Testschwerpunkte

- Offline-/Online-Wechsel
- externe API nicht erreichbar
- Audio startet, stoppt und pausiert korrekt
- Tagebuch bleibt lokal und privat
- Favoriten bleiben gespeichert
- Suchfilter liefern nachvollziehbare Ergebnisse
- Schriftgroessen und Kontraste sind ausreichend
- Desktop-Tastaturbedienung funktioniert

## Release-Gates

Beta:

- Kernflows funktionieren auf allen MVP-Plattformen
- bekannte Fehler sind dokumentiert
- keine ungeprueften Zitate im produktiven Content

Public Release:

- Datenschutztexte final
- App-Store-Angaben final
- Monitoring aktiv
- Backup-Strategie aktiv
- Supportweg definiert

