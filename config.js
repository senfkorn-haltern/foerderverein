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
    vereinNameKurz: "FV Ev. Kiga Senfkorn", 
    stadt: "Haltern am See",
    logoUrl: "./assets/logo.png", 
    
    // --- NAVIGATION (MENÜ) ---
    menu: [
        { label: "Start", link: "#home" },
        { label: "Unsere Kita", link: "#unsere-kita" }, // NEU: Link zur Kita
        { label: "Über uns", link: "#ueber-uns" },
        { label: "Projekte", link: "#projekte" },
        { label: "Aktionen", link: "#aktionen" },
        { label: "Elternstimmen", link: "#testimonials" },
        { label: "Mitglied werden", link: "#mitgliedschaft", highlight: true },
        { label: "Spenden", link: "#spenden", highlight: true }
    ],

    // --- UNSERE KITA (NEUE GROSSE SEKTION) ---
    kita: {
        badge: "Herzlich Willkommen",
        titel: "Ev. Kindergarten Senfkorn",
        untertitel: "Ein Ort zum Wachsen in den Katharinenhöfen",
        beschreibung: "In unserem 2024 modern erbauten Kindergarten leben wir ein offenes Konzept. Unsere Kinder sind Entdecker:innen, die sich frei in unseren Funktionsräumen bewegen und von unseren Kita-Begleiter:innen liebevoll unterstützt werden.",
        
        leitung: {
            titel: "Kita-Leitung",
            name: "Frau Marie Büning",
            bildUrl: "./assets/leitung.jpg" // Platzhalter
        },

        kontakt: {
            tel: "02364 9527024",
            email: "sfk@egha.de",
            adresse: "Flaesheimer Str. 3, 45721 Haltern am See",
            appInfo: "Wir kommunizieren digital über die 'Stay Informed App'."
        },

        highlights: [
            { icon: "utensils-cross-over", titel: "BIO-Mittagessen", text: "Täglich frisch in BIO-Qualität von rebional." },
            { icon: "map-pin", titel: "Top Lage", text: "Ausflüge zum Kanal und nahen Spielplätzen." },
            { icon: "users", titel: "Gemeinschaft", text: "Regelmäßige Waldtage und Elternabende." }
        ],

        // Die Räumlichkeiten-Galerie
        raeume: [
            { 
                titel: "Das Atelier", 
                text: "Ein Raum für kleine Künstler:innen. Hier wird gemalt, gebastelt und mit Farben experimentiert.",
                bildUrl: "./assets/raeume/atelier.jpg"
            },
            { 
                titel: "Konstruktionsbereich", 
                text: "Kreatives Bauen mit verschiedensten Materialien fördert das räumliche Vorstellungsvermögen.",
                bildUrl: "./assets/raeume/konstruktion.jpg"
            },
            { 
                titel: "Wurzelzwerge (U3)", 
                text: "Unser geschützter Bereich für die Kleinsten, in dem Geborgenheit an erster Stelle steht.",
                bildUrl: "./assets/raeume/wurzelzwerge.jpg"
            },
            { 
                titel: "Turnraum", 
                text: "Platz für Bewegung, Toben und gezielte motorische Angebote.",
                bildUrl: "./assets/raeume/turnen.jpg"
            },
            { 
                titel: "Rollenspiel & Puppenecke", 
                text: "In andere Rollen schlüpfen und den Alltag spielerisch verarbeiten.",
                bildUrl: "./assets/raeume/spiel.jpg"
            },
            { 
                titel: "Vorschul-Raum", 
                text: "Gezielte Vorbereitung auf den neuen Lebensabschnitt Schule.",
                bildUrl: "./assets/raeume/vorschule.jpg"
            }
        ],

        aussen: {
            titel: "Unser Außengelände",
            text: "Ein Paradies zum Spielen: Mit Rutsche, Kletterhaus, großen Sandkästen, Netzschaukel und einem Matsch- & Wasserspielbereich.",
            bildUrl: "./assets/raeume/garten.jpg"
        }
    },

    // --- STARTSEITE (WILLKOMMEN-BEREICH) ---
    willkommen: {
        badge: "Gemeinsam für unsere Kleinen", 
        titelZeile1: "Aus kleinen Körnern",
        titelZeile2: "werden starke Bäume.", 
        text: "Willkommen beim Förderverein des Ev. Kindergartens Senfkorn. Wir unterstützen das offene Konzept unserer Kita in Haltern am See und schaffen Räume zum Wachsen.",
        bildUrl: "./assets/kind.jpeg" 
    },

    // --- ÜBER UNS (UNSER ANSATZ) ---
    ueberUns: {
        badge: "Unser Ansatz",
        titel: "Wurzeln schlagen, Welt entdecken",
        text: "Das offene Konzept der Kita Senfkorn stellt das Kind und seine Interessen in den Mittelpunkt. Als Förderverein unterstützen wir genau hier: Wir finanzieren Materialien, die Neugier wecken, und Projekte, die Selbstvertrauen stärken.",
        karten: [
            {
                icon: "sprout", 
                farbe: "green", 
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
        titel: "Projekte & Anschaffungen"
    },
    // HIER NEUE PROJEKTE HINZUFÜGEN:
    projekte: [
         {
            titel: "Musikschule für die Kita",
            status: "aktiv",
            statusText: "In Planung",
            bildUrl: "./assets/2026/musikschule.jpeg",
            beschreibung: "Der Förderverein plant die Finanzierung einer Musikschule, die regelmäßig in die Kita kommt. So können die Kinder spielerisch Instrumente entdecken und ihre musikalische Seite entfalten.",
        },
        {
            titel: "Ausflug zum Maislabyrinth",
            status: "abgeschlossen", 
            statusText: "Erfolgreich", 
            bildUrl: "./assets/2025/Ausflug_Maislabyrinth.jpg", 
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
        untertitel: "Gemeinsam aktiv für unsere Kita."
    },
    // HIER NEUE AKTIONEN HINZUFÜGEN:
    aktionen: [
        {
            titel: "Kinderkarneval 2026 - Das Senfkorn feiert!",
            zeitraum: "Februar 2026", 
            icon: "venetian-mask", 
            text: "Der Förderverein sponsorte Kamelle und spaßiges Wurfmaterial für den Kinderkarnevalsumzug <br> (Foto: Blanka Thieme-Dietel und Seestadtjecken)",
            bildUrl: "./assets/2026/karneval.jpg",
            textFarbe: "white" 
        },
        {
            titel: "Waffelverkauf",
            zeitraum: "Regelmäßig", 
            icon: "utensils", 
            text: "Der Duft von frischen Waffeln gehört dazu! Wir verkaufen regelmäßig an Markttagen oder bei Kita-Festen.",
            bildUrl: "./assets/2025/Waffel.jpeg",
            textFarbe: "white" 
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
            bildUrl: null 
        },
        {
            titel: "Sommerfest",
            zeitraum: "Juni",
            icon: "sun",
            text: "Spiele, Musik und gute Laune: Unser großes jährliches Sommerfest für alle Familien und Freunde.",
            bildUrl: null
        }
    ],

    // --- TESTIMONIALS (ELTERNSTIMMEN) ---
    testimonialsSettings: {
        titel: "Warum wir dabei sind",
        untertitel: "Stimmen aus unserer Elternschaft"
    },
    testimonials: [
        {
            name: "Daniel L.",
            rolle: "Papa von zwei Töchtern",
            text: "Es ist toll zu sehen, wie die Anschaffungen des Fördervereins den Kita-Alltag bereichern. Der Ausflug ins Maislabyrinth war ein voller Erfolg!",
            avatar: avatarPresets.neutral 
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
            avatar: null 
        }
    ],

    // --- MITGLIEDSCHAFT & DOWNLOADS ---
    cta: {
        titel: "Werde ein Senfkorn-Unterstützer!",
        text: "Schon mit einem kleinen Jahresbeitrag hilfst du uns, große Sprünge zu machen.",
        buttonAntrag: "Mitgliedsantrag",
        dateiNameAntrag: "./assets/documents/Aufnahmeantrag_Förderverein-Senfkorn-Haltern.pdf" 
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
        standardZweck: "Spende Foerderverein" 
    },

    // --- TEXTE IM MITGLIEDS-FENSTER (MODAL) ---
    modal: {
        titel: "Mitgliedsantrag",
        text: "Laden Sie das PDF herunter, füllen Sie es aus und werfen Sie es einfach in den Briefkasten der Kita \"Senfkorn\".",
        buttonDownload: "PDF Herunterladen"
    },

    // --- SPIELERISCHE HINTERGRUND-DEKO (ICONS) ---
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
                    <h4 class="font-bold mb-2 text-gray-800 uppercase text-sm">1. Datenschutz auf einen Blick</h4>
                    <p class="mb-4 text-sm">Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.</p>

                    <h4 class="font-bold mb-2 text-gray-800 uppercase text-sm">2. Verantwortliche Stelle</h4>
                    <p class="mb-4 text-sm">Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:<br>
                    ${d.verein}<br>${d.strasse}, ${d.plzOrt}<br>
                    E-Mail: ${d.email}</p>

                    <h4 class="font-bold mb-2 text-gray-800 uppercase text-sm">3. Datenerfassung auf dieser Website</h4>
                    <p class="mb-2 text-sm"><strong>Hosting durch GitHub Pages:</strong></p>
                    <p class="mb-4 text-sm">Diese Website wird über GitHub Pages gehostet (GitHub Inc., 88 Colin P. Kelly Jr. St., San Francisco, CA 94107, USA). Beim Zugriff auf unsere Seiten werden automatisch Informationen in sogenannten Server-Log-Dateien erhoben, die Ihr Browser automatisch an GitHub übermittelt (z.B. IP-Adresse, Datum/Uhrzeit, Browsertyp). Dies ist technisch notwendig, um die Website stabil und sicher anzuzeigen. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO.</p>

                    <p class="mb-2 text-sm"><strong>Externe Schriftarten & Icons:</strong></p>
                    <p class="mb-4 text-sm">Zur einheitlichen Darstellung von Schriftarten und Symbolen nutzt diese Seite Web Fonts von Google und Icons von Lucide. Beim Aufruf der Seite lädt Ihr Browser die benötigten Dateien in ihren Browsercache. Hierbei wird technisch bedingt Ihre IP-Adresse an die Anbieter übertragen. Wir bemühen uns, diese Dienste so datenschutzfreundlich wie möglich einzubinden.</p>

                    <h4 class="font-bold mb-2 text-gray-800 uppercase text-sm">4. Ihre Rechte</h4>
                    <p class="mb-4 text-sm">Sie haben jederzeit das Recht:</p>
                    <ul class="list-disc ml-5 mb-4 text-sm">
                        <li>Auskunft über Ihre gespeicherten Daten zu erhalten (Art. 15 DSGVO).</li>
                        <li>Die Berichtigung unrichtiger Daten zu verlangen (Art. 16 DSGVO).</li>
                        <li>Die Löschung Ihrer Daten zu verlangen (Art. 17 DSGVO).</li>
                        <li>Widerspruch gegen die Verarbeitung einzulegen (Art. 21 DSGVO).</li>
                    </ul>
                    <p class="text-sm">Bei Fragen zur Erhebung, Verarbeitung oder Nutzung Ihrer personenbezogenen Daten wenden Sie sich bitte direkt an uns über die oben genannten Kontaktdaten.</p>
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
