// =================================================================
// --- KONFIGURATION - HIER KÖNNEN SIE INHALTE ÄNDERN ---
// =================================================================
// 
// HINWEIS FÜR DIE BEARBEITUNG:
// 1. Texte stehen immer in Anführungszeichen: "Mein Text"
// 2. Nach jedem Eintrag (außer dem letzten in einer Liste) muss ein Komma stehen.
// 3. Wenn Sie ein Bild nicht haben, schreiben Sie: null (ohne Anführungszeichen).
// 4. Zeilen mit // sind nur Kommentare und werden von der Webseite ignoriert.

// --- AVATAR-BILDER (VORLAGEN) ---
// Hier definieren wir kleine gezeichnete Bilder für die Elternstimmen.
// Sie können diese Namen (z.B. avatarPresets.weiblich_hell) weiter unten verwenden.
const avatarPresets = {
    weiblich_hell: "https://api.dicebear.com/7.x/notionists/svg?seed=Lara&backgroundColor=ffdfbf",
    weiblich_dunkel: "https://api.dicebear.com/7.x/notionists/svg?seed=Aisha&backgroundColor=ffdfbf",
    maennlich_hell: "https://api.dicebear.com/7.x/notionists/svg?seed=Felix&backgroundColor=b6e3f4",
    maennlich_dunkel: "https://api.dicebear.com/7.x/notionists/svg?seed=Jordan&backgroundColor=b6e3f4",
    neutral: "https://api.dicebear.com/7.x/notionists/svg?seed=Jasper&backgroundColor=c0aede"
};

const webseitenInhalt = {
    // --- GRUNDEINSTELLUNGEN ---
    vereinName: "Förderverein des ev. Kindergartens Senfkorn Haltern am See e.V.",
    vereinNameKurz: "FV Ev. Kiga Senfkorn", // Erscheint oben links in der Ecke
    stadt: "Haltern am See",
    logoUrl: "./assets/logo.png", // Offizielles Logo des Vereins
    
    // --- NAVIGATION (MENÜ) ---
    // Hier können Sie die Links oben in der Leiste ändern.
    // highlight: true macht den Button farbig (wichtig für Spenden).
    menu: [
        { label: "Start", link: "#home" },
        { label: "Über uns", link: "#ueber-uns" },
        { label: "Projekte", link: "#projekte" },
        { label: "Aktionen", link: "#aktionen" },
        { label: "Elternstimmen", link: "#testimonials" },
        { label: "Mitglied werden", link: "#mitgliedschaft", highlight: true },
        { label: "Spenden", link: "#spenden", highlight: true }
    ],

    // --- STARTSEITE (WILLKOMMEN-BEREICH) ---
    willkommen: {
        badge: "Gemeinsam für unsere Kleinen", // Kleiner Text über der Überschrift
        titelZeile1: "Aus kleinen Körnern",
        titelZeile2: "werden starke Bäume.", // Wird in der Hauptfarbe (Gold/Senf) angezeigt
        text: "Willkommen beim Förderverein des Ev. Kindergartens Senfkorn. Wir unterstützen das offene Konzept unserer Kita in Haltern am See und schaffen Räume zum Wachsen.",
        bildUrl: "./assets/kind.jpeg" // Das große Bild auf der Startseite
    },

    // --- ÜBER UNS (UNSER ANSATZ) ---
    ueberUns: {
        badge: "Unser Ansatz",
        titel: "Wurzeln schlagen, Welt entdecken",
        text: "Das offene Konzept der Kita Senfkorn stellt das Kind und seine Interessen in den Mittelpunkt. Als Förderverein unterstützen wir genau hier: Wir finanzieren Materialien, die Neugier wecken, und Projekte, die Selbstvertrauen stärken.",
        // Die 3 kleinen Karten unter dem Text:
        karten: [
            {
                icon: "sprout", // Name des Icons (von lucide.dev)
                farbe: "green", // green, yellow oder orange
                titel: "Wachstum fördern",
                text: "Zusätzliche pädagogische Materialien für die Funktionsräume der Kita."
            },
            {
                icon: "sun",
                farbe: "yellow",
                titel: "Freude schenken",
                text: "Finanzierung von Ausflügen, Theaterbesuchen und Sommerfesten."
            },
            {
                icon: "users",
                farbe: "orange",
                titel: "Gemeinschaft",
                text: "Verbindung zwischen Eltern, Erzieherteam und Kirchengemeinde stärken."
            }
        ]
    },

    // --- PROJEKTE & ANSCHAFFUNGEN ---
    projekteSettings: {
        titel: "Projekte & Anschaffungen",
        buttonAlle: "Alle Projekte anzeigen" // Text auf dem Button, wenn es mehr als 3 Projekte gibt
    },
    // HIER NEUE PROJEKTE HINZUFÜGEN:
    // Kopieren Sie einen Block von { bis }, setzen Sie ein Komma und ändern Sie die Texte.
    projekte: [
        {
            titel: "Regelmäßige Musikschule",
            status: "aktiv",
            statusText: "In Arbeit",
            bildUrl: "./assets/2026/musikschule.jpeg",
            beschreibung: "Der Förderverein beteiligt sich an der Finanzierung einer regelmäßigen Musikschule, um den kreativen Ausdruck der Kinder zu fördern.",
        },
        {
            titel: "Ausflug zum Maislabyrinth",
            status: "abgeschlossen", // "aktiv", "geplant" oder "abgeschlossen"
            statusText: "Erfolgreich", // Text auf dem kleinen Label am Bild
            bildUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfaFNyIcOopdg_3FYiSq7_v6KHeiEsVs_Dfg&s", 
            beschreibung: "Das war ein Riesenspaß! Alle Kinder und Erzieher haben gemeinsam den Weg durchs Labyrinth gesucht. Ein toller Tag in der Natur.",
        },
        {
            titel: "Neuer Schiebewagen",
            status: "abgeschlossen",
            statusText: "Angeschafft",
            bildUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa5u9zINX-nwgk797juZgcFAjXPiP2Ws3GEA&s",
            beschreibung: "Für unsere Kleinsten haben wir einen robusten 6-Sitzer-Schiebewagen finanziert. So sind auch längere Ausflüge rund um Haltern kein Problem mehr.",
        }
        
    ],

    // --- AKTIONEN & TERMINE ---
    aktionenSettings: {
        titel: "Aktionen & Termine",
        untertitel: "Gemeinsam aktiv für unsere Kita. Hier treffen wir uns, verkaufen Selbstgemachtes und feiern zusammen.",
        buttonAlle: "Alle Aktionen anzeigen"
    },
    // HIER NEUE AKTIONEN HINZUFÜGEN:
    // Gleiches Prinzip: Block { ... } kopieren, mit Komma trennen.
    aktionen: [
        {
            titel: "Waffelverkauf",
            zeitraum: "Regelmäßig", // Kleiner Text oben rechts auf der Karte
            icon: "utensils", // Name des Icons
            text: "Der Duft von frischen Waffeln gehört dazu! Wir verkaufen regelmäßig an Markttagen oder bei Kita-Festen.",
            bildUrl: "./assets/2025/Waffel.jpeg",
            textFarbe: "white" // 'white' für helle Texte auf dunklen Bildern
        },
        {
            titel: "Nikolausnachmittag",
            zeitraum: "Dezember",
            icon: "gift",
            text: "In der Weihnachtszeit organisieren wir einen gemütlichen Nachmittag mit Kakao, Plätzchen und einer kleinen Überraschung.",
            bildUrl: "https://images.unsplash.com/photo-1512389142860-9c449e58a543?q=80&w=800&auto=format&fit=crop",
            textFarbe: "white"
        },
        {
            titel: "Grillen für die Handwerker",
            zeitraum: "Einmalig",
            icon: "utensils",
            text: "Ein herzliches Dankeschön an alle fleißigen Helfer! Nach getaner Arbeit gab es Würstchen und Salate.",
            bildUrl: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=800&auto=format&fit=crop",
            textFarbe: "white"
        },
        {
            titel: "Gartenaktion",
            zeitraum: "Frühling",
            icon: "shovel",
            text: "Eltern packen an: Gemeinsam machen wir den Garten fit für den Frühling. Mit Hacke, Schaufel und guter Laune.",
            bildUrl: null // Wenn kein Bild da ist, wird ein farbiger Hintergrund genutzt
        }
    ],

    // --- TESTIMONIALS (ELTERNSTIMMEN) ---
    testimonialsSettings: {
        titel: "Warum wir dabei sind",
        untertitel: "Stimmen aus unserer Elternschaft"
    },
    // HIER STIMMEN ÄNDERN ODER ERGÄNZEN:
    testimonials: [
        {
            name: "Daniel L.",
            rolle: "Papa von zwei Kindern",
            text: "Es ist toll zu sehen, wie die Anschaffungen des Fördervereins den Kita-Alltag bereichern. Der Ausflug zum Maislabyrinth war ein Highlight für unsere Kinder!",
            avatar: avatarPresets.neutral // Nutzt die Vorlage von oben
        },
        {
            name: "Christian D.-B.",
            rolle: "Papa eines Sohnes und zweier Töchter",
            text: "Die Gemeinschaft im Verein ist super. Man lernt andere Eltern kennen und tut gleichzeitig etwas Gutes für die Kleinen.",
            avatar: avatarPresets.maennlich_hell
        },
        {
            name: "Lara B.",
            rolle: "Mama eines Sohnes",
            text: "Schon mit einem kleinen Beitrag können wir Projekte realisieren, die sonst nicht möglich wären. Jedes Senfkorn zählt!",
            avatar: avatarPresets.weiblich_hell // Zeigt ein neutrales Personen-Symbol
        }
    ],

    // --- MITGLIEDSCHAFT & DOWNLOADS ---
    cta: {
        titel: "Werde ein Senfkorn-Unterstützer!",
        text: "Schon mit einem kleinen Jahresbeitrag hilfst du uns, große Sprünge zu machen.",
        buttonAntrag: "Mitgliedsantrag",
        dateiNameAntrag: "./assets/documents/Aufnahmeantrag_Förderverein-Senfkorn-Haltern.pdf" // Muss im gleichen Ordner liegen
    },

    // --- BANKDATEN & SPENDEN ---
    bank: {
        titel: "Spendenkonto",
        empfaenger: "Förderverein des ev. Kindergartens Senfkorn Haltern",
        bankName: "Sparkasse Westmünsterland",
        iban: "DE08 4015 4530 0040 0056 21",
        bic: "WELADE3WXXX",
        infoText: "Jeder Euro fließt zu 100% in die Projekte für die Kinder. Spendenquittungen stellen wir gerne aus.",
        copyFeedback: "IBAN in die Zwischenablage kopiert!",
        qrInfo: "Scanne den GiroCode mit deiner Bank-App, um alle Daten automatisch zu übernehmen.",
        standardZweck: "Spende Foerderverein" // Wird im QR-Code als Verwendungszweck eingetragen
    },

    // --- TEXTE IM MITGLIEDS-FENSTER (MODAL) ---
    modal: {
        titel: "Mitgliedsantrag",
        text: "Laden Sie das PDF herunter, füllen Sie es aus und werfen Sie es einfach in den Briefkasten der Kita \"Senfkorn\".",
        buttonDownload: "PDF Herunterladen",
        buttonSchliessen: "Schließen"
    },

    // --- SPIELERISCHE HINTERGRUND-DEKO (ICONS) ---
    // Hier können Sie Icons im Hintergrund steuern.
    // pos: Position (top, bottom, left, right)
    // color: Farbe und Deckkraft (z.B. /30 = 30% sichtbar)
    // size: Größe (w-16 bis w-64)
    // anim: Bewegung (floating, floating-delayed, floating-slow)
    dekoElemente: {
        home: [
            { icon: "cloud", pos: "top-24 left-[5%]", color: "text-brand-light/80", size: "w-16 h-16 sm:w-24 sm:h-24", anim: "floating" },
            { icon: "sun", pos: "top-32 right-[10%]", color: "text-brand-light/70", size: "w-20 h-20 sm:w-32 sm:h-32", anim: "floating-delayed" }
        ],
        "ueber-uns": [
            { icon: "leaf", pos: "bottom-10 left-[5%]", color: "text-brand-green/30", size: "w-32 h-32 sm:w-48 sm:h-48", anim: "floating-slow" },
            { icon: "sprout", pos: "top-10 right-[5%]", color: "text-brand-green/20", size: "w-24 h-24", anim: "floating" }
        ],
        projekte: [
            { icon: "sparkles", pos: "top-20 right-[5%]", color: "text-brand/30", size: "w-24 h-24 sm:w-40 sm:h-40", anim: "floating" },
            { icon: "palette", pos: "bottom-10 left-[2%]", color: "text-brand/20", size: "w-20 h-20", anim: "floating-delayed" }
        ],
        aktionen: [
            { icon: "party-popper", pos: "bottom-10 right-[2%]", color: "text-brand-dark/30", size: "w-32 h-32 sm:w-48 sm:h-48", anim: "floating-delayed" },
            { icon: "utensils", pos: "top-10 left-[5%]", color: "text-brand-dark/20", size: "w-20 h-20", anim: "floating-slow" }
        ],
        testimonials: [
            { icon: "smile", pos: "top-1/2 left-[3%] -translate-y-1/2", color: "text-brand-green/30", size: "w-32 h-32 sm:w-40 sm:h-40", anim: "floating" },
            { icon: "star", pos: "bottom-5 right-[10%]", color: "text-brand-green/20", size: "w-16 h-16", anim: "floating-delayed" }
        ],
        spenden: [
            { icon: "piggy-bank", pos: "top-10 right-10", color: "text-brand/20", size: "w-48 h-48 sm:w-64 sm:h-64", anim: "floating-slow" }
        ]
    },

    // --- RECHTLICHE DATEN (IMPRESSUM & DATENSCHUTZ) ---
    // Ändern Sie hier nur die Werte rechts vom Doppelpunkt.
    legal: {
        stammdaten: {
            verein: "Förderverein des ev. Kindergartens Senfkorn Haltern am See e.V.",
            strasse: "Flaesheimer Str. 3",
            plzOrt: "45721 Haltern am See",
            vorstand1: "Lara Bennemann",
            vorstand2: "Daniel Langer",
            email: "förderverein.sfk@gmail.com",
            webseite: "https://senfkorn-haltern.github.io/foerderverein",
            registergericht: "Amtsgericht Gelsenkirchen",
            registernummer: "VR 2763",
            verantwortlich: "Christian Danowski-Buhren"
        },
        
        // Diese Vorlagen bauen aus den Stammdaten automatisch das Impressum.
        // In der Regel müssen Sie hier nichts ändern.
        templates: {
            impressum: {
                titel: "Impressum",
                getHtml: (d) => `
                    <h4 class="font-bold mb-2 text-gray-800">Angaben gemäß § 5 TMG</h4>
                    <p class="mb-4">${d.verein}<br>${d.strasse}<br>${d.plzOrt}</p>
                    <h4 class="font-bold mb-2 text-gray-800">Vertreten durch den Vorstand</h4>
                    <p class="mb-4">${d.vorstand1}<br>${d.vorstand2}</p>
                    <h4 class="font-bold mb-2 text-gray-800">Kontakt</h4>
                    <p class="mb-4">E-Mail: ${d.email}<br>Webseite: ${d.webseite}</p>
                    <h4 class="font-bold mb-2 text-gray-800">Registereintrag</h4>
                    <p class="mb-4">Registergericht: ${d.registergericht}<br>Registernummer: ${d.registernummer}</p>
                    <h4 class="font-bold mb-2 text-gray-800">Redaktionell verantwortlich</h4>
                    <p class="mb-4">${d.verantwortlich}</p>
                `
            },
            datenschutz: {
                titel: "Datenschutzerklärung",
                getHtml: (d) => `
                    <h4 class="font-bold mb-2 text-gray-800">1. Datenschutz auf einen Blick</h4>
                    <p class="mb-4 text-sm">Der Schutz Ihrer persönlichen Daten ist uns ein wichtiges Anliegen.</p>
                    <h4 class="font-bold mb-2 text-gray-800 text-sm uppercase">Verantwortliche Stelle</h4>
                    <p class="mb-4 text-sm">Verantwortlich für die Datenverarbeitung ist der ${d.verein} (Anschrift siehe Impressum).</p>
                    <h4 class="font-bold mb-2 text-gray-800 text-sm uppercase">Ihre Rechte</h4>
                    <p class="mb-4 text-sm">Sie haben jederzeit das Recht auf Auskunft, Berichtigung oder Löschung Ihrer Daten.</p>
                `
            }
        }
    },

    // --- FUSSZEILE (FOOTER) ---
    footer: {
        adresse: [
            "Förderverein des ev. Kindergartens Senfkorn e.V.",
            "Flaesheimer Str. 3",
            "45721 Haltern am See"
        ],
        email: "förderverein.sfk@gmail.com",
        links: [
            { text: "Impressum", url: "#" },
            { text: "Datenschutz", url: "#" },
            { text: "Satzung (PDF)", url: "./assets/documents/Satzung_Förderverein Senfkorn_2025.pdf" }
        ],
        ueberText: "Der Förderverein unterstützt die pädagogische Arbeit der Einrichtung in Haltern am See finanziell und ideell."
    }
};
