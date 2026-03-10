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

Viel Erfolg bei der Pflege der Seite! Gemeinsam machen wir die Kita Senfkorn noch schöner.
