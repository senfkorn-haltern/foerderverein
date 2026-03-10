# Anleitung zur Pflege der Webseite

Herzlich willkommen! Diese Webseite des Fördervereins wurde so gebaut, dass sie auch ohne Programmierkenntnisse einfach gepflegt werden kann. 

### Keine Angst vor Fehlern!
Das Wichtigste zuerst: **Sie können nichts kaputt machen.** Da wir die Seite über GitHub verwalten, wird jede Änderung gespeichert. Wenn etwas schiefgeht, können wir jederzeit zu einer älteren, funktionierenden Version zurückkehren.

**Notfallkontakt:** Bei Fragen oder Problemen wenden Sie sich bitte an:
**Christian Danowski-Buhren** (danowski-buhren@gmx.de)

---

## 1. Grundregeln beim Bearbeiten der Inhalte

Alle Inhalte der Webseite befinden sich in der Datei `config.js`. Diese Datei ist wie ein Rezeptbuch aufgebaut. Damit die Webseite alles richtig versteht, beachten Sie bitte diese drei Regeln:

1.  **Anführungszeichen:** Texte müssen immer in Anführungszeichen stehen, zum Beispiel: `"Hier steht mein Text"`.
2.  **Kommas:** Nach jedem Eintrag muss ein Komma stehen (außer es ist der absolut letzte Punkt in einer Liste). Wenn die Webseite nicht mehr lädt, fehlt oft nur ein Komma!
3.  **Bilder ohne Datei:** Wenn Sie für einen Eintrag kein Bild haben, schreiben Sie einfach `null` (ohne Anführungszeichen).

---

## 2. So fügen Sie neue Projekte oder Aktionen hinzu

Dies ist der häufigste Fall: Sie möchten ein neues Foto und einen Text für ein Projekt oder eine Aktion ergänzen. Folgen Sie diesen zwei Schritten:

### Schritt 1: Das Bild hochladen
1. Öffnen Sie auf GitHub den Ordner `assets`.
2. Laden Sie dort Ihr neues Bild hoch (am besten als `.jpg` oder `.png`).
3. Merken Sie sich den Dateinamen (z.B. `matschkueche.jpg`).

### Schritt 2: Den Eintrag in `config.js` erstellen
1. Öffnen Sie die Datei `config.js`.
2. Suchen Sie den Bereich `projekte:` oder `aktionen:`.
3. Kopieren Sie einen bestehenden Block (alles von der geschweiften Klammer `{` bis zur schließenden Klammer `},`).
4. Fügen Sie diesen Block direkt darunter ein.
5. Passen Sie die Texte an.
6. Bei `bildUrl:` schreiben Sie den Pfad zu Ihrem Bild hinein, zum Beispiel: `./assets/matschkueche.jpg`.

---

## 3. Die Sektionen in der Übersicht

Hier ein kurzer Überblick, was Sie in der `config.js` alles ändern können:

### Willkommen (Startseite)
Hier ändern Sie den großen Begrüßungstext und das Hauptbild der Webseite.

### Über uns
Hier beschreiben wir den Ansatz des Fördervereins. In der Liste `karten` können Sie die drei Schwerpunkte (z.B. "Wachstum fördern") anpassen.

### Projekte & Anschaffungen
Hier zeigen wir, was wir für die Kinder erreicht haben. Jedes Projekt braucht einen `titel`, einen `status` ("aktiv" oder "abgeschlossen") und eine `beschreibung`.

### Aktionen & Termine
Hier stehen aktuelle Ereignisse wie Waffelverkäufe oder Gartenaktionen. Sie können hier ein `icon` festlegen (z.B. "utensils" für Essen oder "gift" für Geschenke).

### Elternstimmen (Testimonials)
Hier teilen Eltern ihre Meinung. Sie können für jede Person einen `avatar` (ein gezeichnetes Symbolbild) aus den Vorlagen am Anfang der Datei wählen oder `null` schreiben, wenn kein Symbol gewünscht ist.

### Bankdaten & Spenden
Hier verwalten Sie das Spendenkonto. Die Webseite zeigt einen **QR-Code (GiroCode)**, den Spender einfach mit ihrer Bank-App scannen können. Ändern Sie hier IBAN und BIC nur bei einem Kontowechsel!

### Impressum & Datenschutz (Stammdaten)
Unter `legal: { stammdaten: { ... } }` können Sie Namen von Vorständen, die E-Mail-Adresse oder die Registernummer ändern. Diese Daten werden dann automatisch korrekt in das Impressum und die Datenschutzerklärung eingesetzt.

---

## 4. Live-Schaltung: Änderungen im Internet veröffentlichen

Wenn Sie eine Datei (z.B. `config.js`) auf GitHub bearbeitet und gespeichert haben ("Commit changes"), passiert Folgendes:

1.  **Automatisches Update:** GitHub erkennt Ihre Änderung und aktualisiert die Webseite im Hintergrund.
2.  **Dauer:** Es dauert meist ca. **1 bis 2 Minuten**, bis die Änderungen auf der echten Webseite sichtbar sind.
3.  **Anschauen:** Laden Sie die Webseite in Ihrem Browser neu (ggf. die Seite mit der Taste `F5` oder `Strg + R` "hart" neu laden), um das Ergebnis zu sehen.

---

## 5. Fehler beheben: Eine alte Version wiederherstellen

Sollte die Webseite nach einer Änderung nicht mehr laden oder "kaputt" aussehen, können Sie ganz einfach den Stand von gestern (oder von vor einer Stunde) wiederherstellen:

1.  Klicken Sie oben in Ihrem GitHub-Projekt auf den Punkt **"History"** (das kleine Uhr-Symbol rechts über der Dateiliste).
2.  Dort sehen Sie eine Liste aller vergangenen Änderungen.
3.  Klicken Sie auf die Version, die zuletzt gut funktioniert hat.
4.  Klicken Sie rechts oben auf die drei Punkte `...` und wählen Sie **"Revert"** oder kopieren Sie den Inhalt der alten Datei und überschreiben Sie damit die aktuelle `config.js`.
5.  Speichern Sie die Änderung ("Commit changes"). Die Webseite wird nun wieder mit dem alten Stand neu geladen.

---

Viel Erfolg bei der Pflege der Seite! Gemeinsam machen wir die Kita Senfkorn noch schöner.
