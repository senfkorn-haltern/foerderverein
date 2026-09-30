# Handbuch zur Pflege der Webseite (Förderverein Senfkorn)

Herzlich willkommen! Diese Webseite wurde so entwickelt, dass sie vollständig über eine einzige Datei (`config.js`) gesteuert werden kann. Du benötigst keine Programmierkenntnisse.

---

## 1. Das Sicherheitsnetz: Keine Angst vor Fehlern!

**Du kannst nichts kaputt machen.** GitHub speichert jede Version der Seite. Wenn die Seite nach einer Änderung nicht mehr lädt:
1. Klick bei der Datei `config.js` oben auf **"History"**.
2. Wähle die letzte funktionierende Version aus.
3. Stelle sie mit einem Klick wieder her.

**Notfallkontakt:** Christian Danowski-Buhren (danowski-buhren@gmx.de)

---

## 2. Die goldenen Regeln der Bearbeitung

Alle Inhalte liegen in der Datei `config.js`. Damit die Technik funktioniert, beachte bitte diese Regeln:

*   **Anführungszeichen:** Texte müssen immer in `"Anführungszeichen"` stehen.
*   **Kommas:** Nach jedem Eintrag muss ein Komma `,` stehen.
*   **Kein Bild?** Wenn du kein Foto hast, schreibe `null` (ohne Anführungszeichen). Die Seite zeigt dann automatisch einen schönen Platzhalter ("Foto folgt") an.
*   **Reihenfolge:** Der **oberste** Eintrag in einer Liste (z.B. bei Projekten) erscheint auf der Webseite als **erster**. Wenn du etwas Neues hinzufügen willst, setze es am besten ganz **oben in die Liste** (nach der öffnenden Klammer `[`).
*   **Zeilenumbrüche in Texten:** Du kannst `<br>` für einen Zeilenwechsel nutzen. Beispiel: `"Erster Satz.<br>Zweiter Satz."`
*   **Icons:** Die Icons stammen von Lucide Icons. Eine Übersicht aller Namen findest du auf: [lucide.dev/icons](https://lucide.dev/icons). Tippe einfach den Namen in Kleinbuchstaben ein (z.B. `sun`, `gift`, `utensils`).

---

## 3. Schritt-für-Schritt: Einen neuen Eintrag hinzufügen

Egal ob ein neues Projekt, eine Aktion oder eine Elternstimme – der Ablauf ist immer gleich.

### Beispiel: Ein neues Projekt hinzufügen ("Die Matschküche")

**Schritt 1: Das Bild hochladen**
1. Geh in GitHub in den Ordner `assets` (oder einen Unterordner wie `2026`).
2. Klick auf **"Add file"** → **"Upload files"**.
3. Lade dein Bild hoch (z.B. `matschkueche.jpg`).

> **Hinweis zu Ordnern:** Für Bilder nutze den Ordner `assets`. In Unterordner wie `assets/2026/` oder `assets/kita/` kannst du die Bilder sortieren. Für Dokumente (wie der Mitgliedsantrag) nutze den Ordner `assets/documents/`.

**Schritt 2: Den Code in `config.js` vorbereiten**
1. Öffne die `config.js`.
2. Such die Liste `projekte: [`.
3. Kopiere einen bestehenden Block (alles von `{` bis `},`) – am besten mit einem anderen Projekt.
4. Füge ihn direkt unter der öffnenden Klammer `[` ein (damit erscheint er ganz oben).

**Schritt 3: Werte anpassen**
Passe die Texte innerhalb der Anführungszeichen an. Das Ergebnis sieht dann so aus:

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

### A. Navigation (`menu`)

Die Menüpunkte oben in der Leiste kannst du bearbeiten. Jeder Menüeintrag besteht aus:

| Feld | Bedeutung | Beispiel |
|------|-----------|----------|
| `label` | Text, der im Menü erscheint | `"Willkommen"` |
| `link` | Wo der Link hinführt (immer mit `#` beginnen) | `"#home"` |
| `highlight` | `true` = orangener Hervorhebungsbutton | `true` oder weglassen |
| `kitaHighlight` | `true` = grüner Kinder-Button | `true` oder weglassen |

**Beispiel für einen Menüeinrag:**
```javascript
{ label: "Mitglied werden", link: "#mitgliedschaft", highlight: true }
```

---

### B. Startseite / Willkommen (`willkommen`)

Das ist die erste Sektion, die Besucher sehen.

| Feld | Bedeutung | Beispiel |
|------|-----------|----------|
| `badge` | Kleine Überschrift über dem Titel | `"Gemeinsam wachsen - von Anfang an"` |
| `titelZeile1` | Erster Teil des großen Titels | `"Weil jedes kleine Senfkorn"` |
| `titelZeile2` | Zweiter Teil (wird orange hervorgehoben) | `"Großes in sich trägt."` |
| `text` | Der einlange Text darunter | `"Willkommen beim Förderverein..."` |
| `bildUrl` | Bild (oder `null`) | `"./assets/logo.svg"` |
| `buttonVerein` | Text auf der linken Schaltfläche | `"Förderverein unterstützen"` |
| `buttonKita` | Text auf der rechten Schaltfläche | `"Unsere Kita entdecken"` |

---

### C. Über Uns (`ueberUns`)

Diese Sektion erklärt, wer der Förderverein ist.

| Feld | Bedeutung |
|------|-----------|
| `badge` | Kleine Überschrift ("Unser Ansatz") |
| `titel` | Großer Titel ("Wurzeln schlagen...") |
| `text` | Der erklärende Text |
| `gruppenBildUrl` | Team-Foto (oder `null` für Platzhalter) |
| `gruppenBildLabel` | Text auf dem grünen Etikett am Foto |
| `karten` | **Drei Kärtchen** mit Icons (s.u.) |

**Die drei Kärtchen (karten):**

Jedes Kärtchen hat diese Felder:

| Feld | Bedeutung | Farbbeispiele |
|------|-----------|---------------|
| `icon` | Symbol vor dem Titel | `sprout`, `sun`, `users` |
| `farbe` | Hintergrundfarbe | `"green"` (grün), `"yellow"` (gelb), `"orange"` (orange) |
| `titel` | Überschrift des Kärtchens | `"Wachstum fördern"` |
| `text` | Kurze Beschreibung | `"Zusätzliche pädagogische Materialien..."` |

---

### D. Vorstand / Team (`vorstand`)

Hier werden die Vorstände vorgestellt. Der **Bearbeiten-Button** führt zu dieser Sektion.

| Feld | Bedeutung |
|------|-----------|
| `buttonLabel` | Text des Buttons ("Ansprechpartner kennenlernen") |
| `modalTitel` | Titel im Popup ("Der Vorstand") |
| `modalUntertitel` | Untertitel ("Wir setzen uns für die Kita ein") |
| `modalText` | Einlagentext im Popup |
| `mitglieder` | **Liste der Vorstände** (s.u.) |

**Ein Vorstandsmitglied hinzufügen:**

```javascript
{
    name: "Max Mustermann",
    rolle: "Vorsitzender",
    bildUrl: null,
    beschreibung: "Koordination und Organisation."
}
```

> Setze neue Mitglieder **oben in die Liste**, um sie zuerst anzuzeigen.

---

### E. Kita-Räume (`kita.raeume`)

Die Funktionsräume der Kita mit Bildern.

| Feld | Bedeutung |
|------|-----------|
| `titel` | Name des Raums | `"Das Atelier"` |
| `text` | Beschreibung des Raums |
| `bilder` | **Liste von Bildern** (mehrere möglich!) |

**Beispiel für einen Raum:**
```javascript
{ 
  titel: "Das Atelier", 
  text: "Ein Raum für kleine Künstler:innen.", 
  bilder: ["./assets/kita/Atelier.jpg", "./assets/kita/Atelier2.jpg"] 
}
```

---

### F. Projekte (`projekte`)

| Feld | Bedeutung |
|------|-----------|
| `titel` | Name des Projekts |
| `status` | Projektstatus: `"aktiv"` (grün), `"geplant"` (orange), `"abgeschlossen"` (blau) |
| `statusText` | Wird auf dem Etikett angezeigt |
| `bildUrl` | Bild oder `null` |
| `beschreibung` | Projektbeschreibung |

---

### G. Aktionen (`aktionen`)

| Feld | Bedeutung |
|------|-----------|
| `titel` | Name der Aktion |
| `zeitraum` | Zeitangabe | `"Juli 2026"` oder `"Regelmäßig"` |
| `icon` | Symbol | `sun`, `gift`, `utensils`, `hand-coins`, `venetian-mask` |
| `text` | Beschreibung (nutze `<br>` für Umbrüche) |
| `bildUrl` | Bild oder `null` |
| `textFarbe` | `"white"` (für helle Texte auf dunklen Bildern) oder weglassen |

---

### H. Elternstimmen (`testimonials`)

Eltern können hier ihre Meinung zum Förderverein äußern.

| Feld | Bedeutung |
|------|-----------|
| `name` | Name (kann abgekürzt sein) |
| `rolle` | Zurückgegeben (Mama, Papa, etc.) |
| `text` | Das Zitat |
| `avatar` | Avatar-Bild (nutze eine der Vorlagen): |

**Avatar-Vorlagen (am Anfang der Datei):**
```javascript
avatarPresets.weiblich_hell    // helles Frauen-Avatar
avatarPresets.weiblich_dunkel   // dunkles Frauen-Avatar
avatarPresets.maennlich_hell    // helles Männer-Avatar
avatarPresets.maennlich_dunkel  // dunkles Männer-Avatar
avatarPresets.neutral          // generelles Symbol
```

---

### I. WhatsApp-Kanal (`socialMedia.whatsapp`)

| Feld | Bedeutung |
|------|-----------|
| `titel` | Überschrift ("Immer auf dem Laufenden") |
| `untertitel` | Untertitel ("Folge unserem WhatsApp-Kanal...") |
| `name` | Name des Kanals | `"Förderverein Senfkorn News"` |
| `link` | Einladungs-Link zum Kanal |
| `buttonText` | Text der Schaltfläche ("Kanal abonnieren") |
| `qrUrl` | QR-Code Bild (oder `null`) |
| `qrLabel` | Beschriftung des QR-Codes |
| `features` | **Liste von 3 Vorteilen** des Kanals |

**Features-Beispiel:**
```javascript
features: [
    "Termine & Erinnerungen",
    "Fotos von Aktionen",
    "Kurzfristige Infos"
]
```

---

### J. Mitgliedschaft (`cta`)

Die Hervorhebung für den Mitgliedsantrag.

| Feld | Bedeutung |
|------|-----------|
| `titel` | Überschrift ("Werde ein Senfkorn-Unterstützer!") |
| `text` | Erklärungstext |
| `buttonAntrag` | Text der Button ("Mitgliedsantrag") |
| `buttonSpenden` | Text der Button ("Spendeninfos") |
| `dateiNameAntrag` | Pfad zur PDF-Datei (muss in `assets/documents/` liegen) |

---

### K. Spenden / Bank (`bank`)

Die Spenden-Daten für Überweisungen.

| Feld | Bedeutung |
|------|-----------|
| `titel` | Überschrift ("Spendenkonto") |
| `empfaenger` | Vollständiger Name des Vereins |
| `bankName` | Name der Bank |
| `iban` | IBAN (ohne Leerzeichen) |
| `bic` | BIC-Code |
| `qrUrl` | QR-Code Bild für GiroCode |
| `infoText` | Erklärungstext unter den Daten |
| `labels` | Beschriftungen (können angepasst werden) |
| `qrInfo` | Hinweistext zum QR-Code |
| `standardZweck` | Standard-Verwendungszweck |

---

### L. Footer (Fußzeile)

Die letzte Sektion der Seite mit Kontaktdaten.

| Feld | Bedeutung |
|------|-----------|
| `adresse` | **Liste von Adresszeilen** |
| `email` | E-Mail-Adresse |
| `links` | **Liste von Links** (s.u.) |
| `ueberText` | Kurzer Beschreibungstext |

**Footer-Links:**
```javascript
links: [
    { text: "Impressum", url: "#" },                              // Interne Links mit #
    { text: "Datenschutz", url: "#" },
    { text: "Satzung (PDF)", url: "./assets/documents/Satzung.pdf" } // Externe Dokumente
]
```

---

## 5. Häufige Icons – Übersicht

Hier sind gängige Icons, die du kennen solltest:

| Icon-Name | Symbol | Typische Verwendung |
|-----------|--------|---------------------|
| `sun` | 🌞 | Sommer, Sonne, Sommerfest |
| `gift` | 🎁 | Nikolaus, Geschenke, Spendenaktionen |
| `utensils` | 🍽️ | Essen, Waffelverkauf, Kochen |
| `hand-coins` | 💰 | Spenden, Sponsoren |
| `venetian-mask` | 🎭 | Karneval, Fasching |
| `sprout` | 🌱 | Wachstum, Nachwuchs |
| `users` | 👥 | Gemeinschaft, Team, Kita |
| `heart` | ❤️ | Fürsorge, Förderverein |
| `heart-handshake` | 🤝 | Spenden, Unterstützung |
| `file-down` | 📥 | Download, Antrag |
| `map-pin` | 📍 | Adresse, Lage |
| `phone` | 📞 | Telefon |
| `mail` | 📧 | E-Mail |

**Alle Icons findest du hier:** [lucide.dev/icons](https://lucide.dev/icons)

---

## 6. Besucherstatistik (GoatCounter)

Am unteren Ende der Webseite siehst du einen Besucherzähler mit der Frage "Wie viele Besucher hat unsere Seite?" Hinter dieser Zählung steht **GoatCounter** – ein kostenloses, datenschutzfreundliches Tool.

### Was ist GoatCounter?
GoatCounter ist ein Dienst, der anonym zählt, wie oft deine Webseite besucht wird. Es ist:
- **Komplett kostenlos** für gemeinnützige Vereine wie unseren
- **Datenschutzkonform** – es werden keine Namen, E-Mail-Adressen oder ähnliche persönliche Daten gespeichert
- **Ohne Cookies** – keine kleinen Datenspeicher auf deinem Computer
- **Transparent** – jeder kann sich die Auszahldaten auf der GoatCounter-Website ansehen

### Wie funktioniert es?
1. Wenn jemand die Seite aufruft, registriert GoatCounter diesen Besuch
2. Die Besucherzahl wird automatisch aktualisiert und auf der Seite angezeigt
3. Bei manchen Besuchern mit Werbeblockern (wie AdBlock) kann die Anzeige blockiert werden – in diesem Fall steht "Durch Ad Blocker blockiert"

### Wo sehe ich die Statistik?
- **Kurzansicht:** Klick unten auf "Besucherstatistik anzeigen"
- **Vollständige Statistik:** Klick im Popup auf "Vollständige Statistik öffnen" – das öffnet die umfassende Auswertung in einem neuen Tab

### Wichtig für technisch Interessierte
Das GoatCounter-Skript ist bereits in die Webseite eingebaut. Du musst dich **nichts weiter** schicken – es läuft automatisch!

---

## 7. Änderungen live schalten

1. Wenn du fertig bist, klickst du auf GitHub auf den grünen Button **"Commit changes"**.
2. Warte ca. **1 Minute**.
3. Lade die Webseite in deinem Browser neu (ggf. Taste `F5`). Fertig!

---

## 8. Syntax-Validierung vor dem Commit

Bevor du deine Änderungen speicherst, solltest du die `config.js`-Datei auf **Syntaxfehler** prüfen. Das klingt kompliziert – ist es aber nicht! Eine "Syntax" ist einfach die **Regel, wie der Code aufgebaut sein muss**, damit der Webbrowser ihn versteht. Wenn eine Regel verletzt wird (zum Beispiel ein fehlendes Komma oder eine vergessene Klammer), dann lädt die Seite nicht mehr richtig.

> **Merke:** Es gibt nichts Schlimmes am Prüfen! Wenn ein Fehler angezeigt wird, hast du die Chance, ihn **noch zu korrigieren** – bevor die ganze Welt eine kaputtere Webseite sieht.

### Warum ist das wichtig?

Stell dir vor, du schreibst einen Text, aber plötzlich fehlt ein Komma. Der Satz ist zwar fast richtig – aber genug, um ihn missverständlich zu machen. Genauso funktioniert die `config.js`: Ein einziges fehlendes Komma, eine vergessene Klammer oder ein falsch gesetztes Anführungszeichen kann die ganze Seite zum Einfrieren bringen. Die Syntax-Validierung ist wie ein **automatischer Rechtschreibungs-Checker** – nur für den Code.

### Schritt-für-Schritt: So funktioniert die Validierung

#### Schritt 1: Öffne die Validierungs-Website

1. Öffne deinen Webbrowser (Chrome, Firefox, Edge – irgendeinen).
2. Gib in die Adresszeile ein: [https://esprima.org/demo/validate.html](https://esprima.org/demo/validate.html)
3. Drücke **Enter**. Die Seite lädt – sie zeigt ein großes weißes Textfeld in der Mitte.

![Esprima Validator](https://placehold.co/800x200/cccccc/666666?text=Esprima+Demo+–+Validate+JavaScript+Syntax)

#### Schritt 2: Den Inhalt der `config.js` kopieren

1. Gehe in GitHub zur Datei `config.js`.
2. Klicke auf den grünen Button **"Raw"** (das ist der Button, der dir den reinen Text ohne Formatierung anzeigt).
3. Drücke `Strg + A` (markiert alles) und dann `Strg + C` (kopiert alles).

> **Tipp:** Wenn du keinen "Raw"-Button siehst, scrolle ein Stück nach unten – manchmal ist er etwas versteckt.

#### Schritt 3: Den Code einfügen und prüfen

1. Wechsel zurück zur Esprima-Website.
2. Klicke in das große weiße Textfeld.
3. Drücke `Strg + V` (füge den kopierten Inhalt ein).
4. Klicke auf den orangenen Button **"Validate"**.

#### Schritt 4: Das Ergebnis lesen

Die Website zeigt dir dann eine von zwei möglichen Meldungen:

- **Grün (okay):** Wenn alles richtig ist, siehst du eine grüne Meldung wie **"Valid JavaScript"** oder **"No syntax errors"**. Das bedeutet: **Dein Code ist fehlerfrei!** Du kannst beruhigt speichern.

- **Rot (Achtung!):** Wenn es einen Fehler gibt, erscheint eine **rote Fehlermeldung** mit einer Zeilennummer. Zum Beispiel:
  ```
  SyntaxError: Unexpected token } (15:3)
  ```
  Das bedeutet: **"Unerwartetes Zeichen `}` in Zeile 15, Spalte 3"**. 

#### Schritt 5: Fehler korrigieren

Wenn du einen Fehler bekommst:

1. **Schau genau hin:** Die Fehlermeldung sagt dir, **in welcher Zeile** das Problem ist. Zähle diese Zeile in deiner `config.js` ab.
2. **Prüfe die Regeln aus Abschnitt 2:**
   - Steht der Text in richtigen `"Anführungszeichen"`?
   - Ist nach jedem Eintrag ein Komma `,` gesetzt?
   - Sind alle Klammern `)` und `}` korrekt gepaart?
3. **Korrigiere den Fehler** in GitHub direkt in der `config.js`.
4. **Wiederhole den Vorgang:** Kopiere den neuen Inhalt erneut und validiere ihn erneut.

> **Beispiel-Fehler:** Du hast versehentlich ein Komma vergessen:
> ```javascript
> {
>     titel: "Neues Projekt"
>     status: "aktiv"
> }
> ```
> **Fehlermeldung:** `SyntaxError: Unexpected identifier (2:5)`
> **Korrektur:** Ein Komma nach `"Neues Projekt"` hinzufügen:
> ```javascript
> {
>     titel: "Neues Projekt",
>     status: "aktiv"
> }
> ```

### Noch ein Sicherheits-Tipp

Bevor du auf **"Commit changes"** klickst, lies die Änderungen in GitHub noch einmal **durch**. GitHub zeigt dir eine **Vergleichs-Anzeige** (Diff), in der du genau siehst, was sich geändert hat. So kannst du Fehler noch vor dem Speichern entdecken – ähnlich wie der Syntax-Prüfung, aber mit deinen eigenen Augen.

---

## 9. Noch Fragen?

Wenn etwas nicht klappt oder du unsicher bist:

- **Per E-Mail:** Christian Danowski-Buhren (danowski-buhren@gmx.de) – ich helfe dir gern weiter!
- **GitHub Issues:** Du kannst auch direkt auf GitHub ein **Issue** erstellen. Klick dazu im Repository oben auf **"Issues"** und dann auf **"New issue"**. Beschreibe kurz, was nicht funktioniert – ich melde mich dann.

Keine Sorge: **Nichts ist so kompliziert, dass es nicht zu verstehen ist.** Jeder hat mal angefangen. 🌱
