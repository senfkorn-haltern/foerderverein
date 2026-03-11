# Handbuch zur Pflege der Webseite (Förderverein Senfkorn)

Herzlich willkommen! Diese Webseite wurde so entwickelt, dass sie vollständig über eine einzige Datei (`config.js`) gesteuert werden kann. Sie benötigen keine Programmierkenntnisse.

---

## 1. Das Sicherheitsnetz: Keine Angst vor Fehlern!
**Sie können nichts kaputt machen.** GitHub speichert jede Version der Seite. Wenn die Seite nach einer Änderung nicht mehr lädt:
1. Klicken Sie bei der Datei `config.js` oben auf **"History"**.
2. Wählen Sie die letzte funktionierende Version aus.
3. Stellen Sie diese mit einem Klick wieder her.

**Notfallkontakt:** Christian Danowski-Buhren (danowski-buhren@gmx.de)

---

## 2. Die goldenen Regeln der Bearbeitung
Alle Inhalte liegen in der Datei `config.js`. Damit die Technik funktioniert, beachten Sie bitte diese Regeln:

*   **Anführungszeichen:** Texte müssen immer in `"Anführungszeichen"` stehen.
*   **Kommas:** Nach jedem Eintrag muss ein Komma `,` stehen.
*   **Kein Bild?** Wenn Sie kein Foto haben, schreiben Sie `null` (ohne Anführungszeichen). Die Seite zeigt dann automatisch einen schönen Platzhalter ("Foto folgt") an.
*   **Reihenfolge:** Der **oberste** Eintrag in einer Liste (z.B. bei Projekten) erscheint auf der Webseite als **erster**. Wenn Sie etwas Neues hinzufügen, setzen Sie es also am besten ganz nach oben in die Liste.

---

## 3. Schritt-für-Schritt: Einen neuen Eintrag hinzufügen
Egal ob ein neues Projekt, eine Aktion oder eine Elternstimme – der Ablauf ist immer gleich.

### Beispiel: Ein neues Projekt hinzufügen ("Die Matschküche")

**Schritt 1: Das Bild hochladen**
1. Gehen Sie auf GitHub in den Ordner `assets` (oder einen Unterordner wie `2026`).
2. Klicken Sie auf **"Add file"** -> **"Upload files"**.
3. Laden Sie Ihr Bild hoch (z.B. `matschkueche.jpg`).

**Schritt 2: Den Code in `config.js` vorbereiten**
1. Öffnen Sie die `config.js`.
2. Suchen Sie die Liste `projekte: [`.
3. Kopieren Sie einen bestehenden Block (alles von `{` bis `},`).
4. Fügen Sie ihn direkt unter der öffnenden Klammer `[` ein (damit er ganz oben steht).

**Schritt 3: Werte anpassen**
Passen Sie die Texte innerhalb der Anführungszeichen an. Das Ergebnis sieht dann so aus:

```javascript
{ 
  titel: "Neue Matschküche", 
  status: "abgeschlossen", 
  statusText: "Eingeweiht!", 
  bildUrl: "./assets/2026/matschkueche.jpg", 
  beschreibung: "Dank eurer Spenden konnten wir eine neue Matschküche aus massivem Holz anschaffen." 
},
```

---

## 4. Anleitung für die einzelnen Sektionen

### A. Unsere Kita (`kita`)
*   **Funktionsräume (`raeume`):** Hier können Sie Räume hinzufügen. Wenn `bildUrl: null` ist, erscheint ein "In Arbeit"-Banner.
*   **Kontakt:** Ändern Sie hier Telefonnummer und E-Mail der Kita.

### B. Projekte & Aktionen (`projekte`, `aktionen`)
*   **Status bei Projekten:** Nutzen Sie `"aktiv"` (grün), `"geplant"` (orange) oder `"abgeschlossen"` (blau).
*   **Icons bei Aktionen:** Nutzen Sie Symbole wie `"utensils"` (Essen), `"gift"` (Geschenke) oder `"sun"` (Sommer).

### C. Elternstimmen (`testimonials`)
*   Hier nutzen wir **Avatare** (gezeichnete Gesichter).
*   Nutzen Sie die Vorlagen von ganz oben in der Datei, z.B.: `avatar: avatarPresets.weiblich_hell`.

### D. WhatsApp-Kanal (`socialMedia`)
*   **Link:** Tragen Sie den Einladungs-Link zu Ihrem Kanal ein.
*   **QR-Code:** Laden Sie ein Bild Ihres Kanal-QR-Codes hoch und verlinken Sie ihn bei `qrUrl`.

---

## 5. Änderungen live schalten
1. Wenn Sie fertig sind, klicken Sie auf GitHub auf den grünen Button **"Commit changes"**.
2. Warten Sie ca. **1 Minute**.
3. Laden Sie die Webseite in Ihrem Browser neu (ggf. Taste `F5`). Fertig!
