// =================================================================
// --- KONFIGURATION - HIER KÖNNEN SIE INHALTE ÄNDERN ---
// =================================================================
// 
// HINWEIS FÜR DIE BEARBEITUNG:
// 1. TEXTE: Müssen immer in Anführungszeichen stehen: "Mein Text"
// 2. KOMMAS: Nach jedem Eintrag muss ein Komma stehen (außer am Ende einer Liste).
// 3. BILDER: Wenn Sie kein Bild haben, schreiben Sie: null (ohne Anführungszeichen).
//    Beispiel: bildUrl: null,
// 4. ZEILENUMBRÜCHE: In Texten können Sie <br> für einen Umbruch nutzen.
// 5. ICONS: Wir nutzen "Lucide Icons". Eine Übersicht aller Namen finden Sie auf:
//    https://lucide.dev/icons (einfach den Namen in Kleinbuchstaben eintippen).

// --- AVATAR-VORLAGEN (Für die Elternstimmen weiter unten) ---
// Hier können Sie vordefinierte Gesichter wählen, um keine echten Fotos nutzen zu müssen.
const avatarPresets = {
    weiblich_hell: "https://api.dicebear.com/7.x/notionists/svg?seed=Lara&backgroundColor=ffdfbf",
    weiblich_dunkel: "https://api.dicebear.com/7.x/notionists/svg?seed=Aisha&backgroundColor=ffdfbf",
    maennlich_hell: "https://api.dicebear.com/7.x/notionists/svg?seed=Felix&backgroundColor=b6e3f4",
    maennlich_dunkel: "https://api.dicebear.com/7.x/notionists/svg?seed=Jordan&backgroundColor=b6e3f4",
    neutral: "https://api.dicebear.com/7.x/notionists/svg?seed=Jasper&backgroundColor=c0aede"
};

const webseitenInhalt = {
    // --- ALLGEMEINE DATEN ---
    vereinName: "Förderverein des ev. Kindergartens Senfkorn Haltern am See e.V.",
    vereinNameKurz: "FV Ev. Kiga Senfkorn", // Erscheint oben links in der Ecke
    stadt: "Haltern am See",
    logoUrl: "./assets/logo.png", // Pfad zum Logo-Bild
    
    // --- NAVIGATION (MENÜOBEN) ---
    // label: Der Text im Menü | link: Wohin es springt (ID der Sektion mit #)
    // highlight: true = Oranger Button | kitaHighlight: true = Grüner Button
    menu: [
        { label: "Willkommen", link: "#home" },
        { label: "Über uns", link: "#ueber-uns" },
        { label: "Projekte", link: "#projekte" },
        { label: "Aktionen", link: "#aktionen" },
        { label: "Elternstimmen", link: "#testimonials" },
        { label: "News", link: "#social-media" },
        { label: "Mitglied werden", link: "#mitgliedschaft", highlight: true },
        { label: "Spenden", link: "#spenden", highlight: true },
        { label: "Unsere Kita", link: "#unsere-kita", kitaHighlight: true }
    ],

    // --- STARTSEITE (WILLKOMMEN-BEREICH) ---
    willkommen: {
        badge: "Gemeinsam für unsere Kleinen", // Kleiner Text über der Überschrift
        titelZeile1: "Aus kleinen Körnern",
        titelZeile2: "werden starke Bäume.", // Wird in Orange hervorgehoben
        text: "Willkommen beim Förderverein des Ev. Kindergartens Senfkorn. Wir unterstützen das offene Konzept unserer Kita in Haltern am See und schaffen Räume zum Wachsen.",
        bildUrl: "./assets/kind.jpeg", // Hauptbild rechts (oder null)
        buttonVerein: "Förderverein unterstützen",
        buttonKita: "Unsere Kita entdecken"
    },

    // --- UNSERE KITA (VORSTELLUNG DER EINRICHTUNG) ---
    kita: {
        bereichLabel: "Die Einrichtung", // Kleines Label ganz oben
        badge: "Herzlich Willkommen",
        titel: "Ev. Kindergarten Senfkorn",
        untertitel: "Ein Ort zum Wachsen in den Katharinenhöfen",
        beschreibung: "In unserem 2024 modern erbauten Kindergarten leben wir ein offenes Konzept. Unsere Kinder sind Entdecker:innen, die sich frei in unseren Funktionsräumen bewegen und von unseren Kita-Begleiter:innen liebevoll unterstützt werden.",
        
        // Kleine Info-Kärtchen unter der Beschreibung
        highlights: [
            { icon: "utensils-crossed", titel: "BIO-Mittagessen", text: "Täglich frisch in BIO-Qualität von rebional." },
            { icon: "map-pin", titel: "Top Lage", text: "Ausflüge zum Kanal und nahen Spielplätzen." },
            { icon: "users", titel: "Gemeinschaft", text: "Regelmäßige Waldtage und Elternabende." }
        ],

        galleryTitle: "Einblicke in unsere Räume",
        galleryOverlayText: "Senfkorn Entdeckerwelt", // Erscheint beim Drüberfahren mit der Maus

        // Konfiguration für die verspielten Fußspuren in der Galerie
        footprints: {
            sizeSmall: "w-10 h-10 sm:w-12 sm:h-12", // Größe zwischen den Bildern
            sizeLarge: "w-12 h-12",               // Größe der Trenner zwischen den Sektionen
            opacitySmall: "opacity-30",           // Transparenz zwischen den Bildern
            opacityLarge: "opacity-40",           // Transparenz der Trenner
            color: "text-brand",                  // Farbe (Tailwind-Klasse)
            spacingSections: "space-y-16",        // Vertikaler Abstand zwischen den Bereichen
            animSmall: "footprint-step",          // Animation zwischen Bildern
            animLarge1: "footprint-step",         // Erste Animation Trenner
            animLarge2: "footprint-step-delayed"  // Zweite Animation Trenner (verzögert)
            },

        // Liste der Funktionsräume (Galerie)
        // bilder: Array von Bildpfaden. Ein leeres Array erzeugt automatisch einen Platzhalter.
        raeume: [
            { 
                titel: "Das Atelier", 
                text: "Ein Raum für kleine Künstler:innen. Hier wird gemalt, gebastelt und mit Farben experimentiert.", 
                bilder: ["./assets/kita/Atelier.jpg", "./assets/kita/Atelier2.jpg", "./assets/kita/Atelier_Nebenraum.jpg"] 
            },
            { 
                titel: "Konstruktionsbereich", 
                text: "Kreatives Bauen mit verschiedensten Materialien fördert das räumliche Vorstellungsvermögen.", 
                bilder: ["./assets/kita/Konstruktion.jpg", "./assets/kita/Konstruktion2.jpg", "./assets/kita/Konstruktion_Nebenraum.jpg"] 
            },
            { 
                titel: "Wurzelzwerge (U3)", 
                text: "Unser geschützter Bereich für die Kleinsten, in dem Geborgenheit an erster Stelle steht.", 
                bilder: ["./assets/kita/Wurzelzwerge_U3.jpg", "./assets/kita/Gruppenraum_Wurzelzwerge.jpg", "./assets/kita/Nebenraum_Wurzelzwerge.jpg", "./assets/kita/Wurzelzwerge_Nebenraum2.jpg"] 
            },
            { 
                titel: "Bewegung & Spiel", 
                text: "Platz für Bewegung, Toben und gezielte motorische Angebote im Turnraum oder Rollenspiele in der Puppenecke.", 
                bilder: ["./assets/kita/Bewegungsraum.jpg", "./assets/kita/Rollenspiel2.jpg"] 
            },
            { 
                titel: "Essen & Gemeinschaft", 
                text: "In unserer Cafeteria kommen alle zusammen. Auch unsere Flure bieten Platz für Begegnungen.", 
                bilder: ["./assets/kita/Cafeteria.jpg", "./assets/kita/Cafeteria2.jpg", "./assets/kita/Flur.jpg", "./assets/kita/Flur2.jpg"] 
            },
            { 
                titel: "Unser Außengelände", 
                text: "Ein Paradies zum Spielen: Mit Rutsche, Kletterhaus, großen Sandkästen, Netzschaukel und einem Matsch- & Wasserspielbereich.", 
                bilder: ["./assets/kita/Aussenbereich.jpg", "./assets/kita/Aussenbereich2.jpg", "./assets/kita/Sandkasten_Wurzelzwerge.jpg", "./assets/kita/Aussenbereich3.jpg", "./assets/kita/Aussenbereich4.jpg"] 
            }
        ],

        // Kita-Leitung Info
        leitung: {
            titel: "Kita-Leitung",
            name: "Frau Marie Büning",
            bildUrl: null
        },

        // Beschriftungen für den Kontakt-Block
        kontaktLabels: {
            tel: "Telefon",
            email: "E-Mail",
            app: "App-Kommunikation",
            adresse: "Adresse"
        },

        // Echte Kontaktdaten der Kita
        kontakt: {
            tel: "02364 9527024",
            email: "sfk@egha.de",
            adresse: "Flaesheimer Str. 1, 45721 Haltern am See",
            appInfo: "Wir kommunizieren digital über die 'Stay Informed App'."
        }
    },

    // --- ÜBER UNS (FÖRDERVEREIN KONZEPT) ---
    ueberUns: {
        badge: "Unser Ansatz",
        titel: "Wurzeln schlagen, Welt entdecken",
        text: "Das offene Konzept der Kita Senfkorn stellt das Kind und seine Interessen in den Mittelpunkt. Als Förderverein unterstützen wir genau hier: Wir finanzieren Materialien, die Neugier wecken, und Projekte, die Selbstvertrauen stärken.",
        gruppenBildUrl: null, // Foto des Vorstands oder Teams
        gruppenBildLabel: "Wir unterstützen unsere Senfkörner!", // Text auf dem grünen Label am Bild
        
        // Drei Fokus-Karten (Icon-Farben: green, yellow, orange)
        karten: [
            { icon: "sprout", farbe: "green", titel: "Wachstum fördern", text: "Zusätzliche pädagogische Materialien für die Funktionsräume der Kita." },
            { icon: "sun", farbe: "yellow", titel: "Freude schenken", text: "Finanzierung von Ausflügen, Theaterbesuchen und Sommerfesten." },
            { icon: "users", farbe: "orange", titel: "Gemeinschaft", text: "Verbindung zwischen Eltern, Erzieherteam und Kirchengemeinde stärken." }
        ]
    },

    // --- VORSTAND (TEAM VORSTELLUNG) ---
    vorstand: {
        buttonLabel: "Vorstand kennenlernen",
        modalTitel: "Der Vorstand",
        modalUntertitel: "Wir setzen uns für die Kita ein",
        modalText: "Wir sind ein Team aus engagierten Eltern und Erziehern, die sich ehrenamtlich für die Belange der Kita einsetzen. Sprechen Sie uns gerne an, wenn Sie Ideen oder Fragen haben!",
        mitglieder: [
            {
                name: "Lara Bennemann",
                rolle: "1. Vorsitzende",
                bildUrl: null, 
                beschreibung: "Koordination, Organisation und Kontakt zur Kita-Leitung."
            },
            {
                name: "Daniel Langer",
                rolle: "2. Vorsitzender",
                bildUrl: null,
                beschreibung: "Koordination, Organisation und Kontakt zur Kita-Leitung."
            },
            {
                name: "Lydia Balzer",
                rolle: "Kassenwart",
                bildUrl: null,
                beschreibung: "Finanzen und Mitgliederverwaltung."
            },
            {
                name: "Antonia Brinkert",
                rolle: "Schriftführerin",
                bildUrl: null,
                beschreibung: "Protokolle und Dokumentation."
            }
            //  {
            //     name: "Anne Kuhlmann",
            //     rolle: "Beisitzerin",
            //     bildUrl: null,
            //     beschreibung: "Unterstützung bei Aktionen."
            // },
            // {
            //     name: "Anne Kuhlmann",
            //     rolle: "Beisitzerin",
            //     bildUrl: null,
            //     beschreibung: "Unterstützung bei Aktionen."
            // }
        ]
    },

    // --- PROJEKTE & ANSCHAFFUNGEN ---
    projekteSettings: {
        titel: "Projekte & Anschaffungen"
    },
    // Status-Typen für die Farbkennzeichnung:
    // status: "aktiv" (Grün), "geplant" (Orange), "abgeschlossen" (Blau)
    // statusText: Der Text, der auf dem Label steht
    projekte: [
         { titel: "Musikschule für die Kita", status: "aktiv", statusText: "In Planung", bildUrl: "./assets/2026/musikschule.jpeg", beschreibung: "Der Förderverein plant eine finanzielle Beteiligung für ein Musikschulangebot, das regelmäßig in der Kita stattfinden soll. So können die Kinder spielerisch Instrumente entdecken und ihre musikalische Seite entfalten." },
         { titel: "Ausflug zum Maislabyrinth", status: "abgeschlossen", statusText: "Erfolgreich", bildUrl: "./assets/2025/Ausflug_Maislabyrinth.jpg", beschreibung: "Das war ein Riesenspaß! Alle Kinder und Erzieher haben gemeinsam den Weg durchs Labyrinth gesucht. Ein toller Tag in der Natur." },
         { titel: "Neuer Schiebewagen", status: "abgeschlossen", statusText: "Angeschafft", bildUrl: "./assets/2025/Bollerwagen.jpg", beschreibung: "Für unsere Kleinsten haben wir einen Bollerwagen finanziert. So sind auch längere Ausflüge rund um Haltern kein Problem mehr." }
    ],

    // --- AKTIONEN & TERMINE ---
    aktionenSettings: {
        titel: "Aktionen & Termine",
        untertitel: "Gemeinsam aktiv für unsere Kita."
    },
    // textFarbe: "white" für helle Texte mit Schatten auf dunklen Bildern
    aktionen: [
        { titel: "Kinderkarneval 2026", zeitraum: "Februar 2026", icon: "venetian-mask", text: "Der Förderverein sponsorte Kamelle und spaßiges Wurfmaterial für den Kinderkarnevalsumzug <br> (Foto: Blanka Thieme-Dietel)", bildUrl: "./assets/2026/karneval.jpg", textFarbe: "white" },
        { titel: "Waffelverkauf", zeitraum: "Regelmäßig", icon: "utensils", text: "Der Duft von frischen Waffeln gehört dazu! Wir verkaufen regelmäßig an Markttagen oder bei Kita-Festen.", bildUrl: "./assets/2025/Waffel.jpeg", textFarbe: "white" },
        { titel: "Nikolausnachmittag", zeitraum: "Dezember", icon: "gift", text: "In der Weihnachtszeit organisieren wir einen gemütlichen Nachmittag mit Kakao, Plätzchen und einer kleinen Überraschung.", bildUrl: "https://images.unsplash.com/photo-1512389142860-9c449e58a543?q=80&w=800&auto=format&fit=crop", textFarbe: "white" },
        { titel: "Sommerfest", zeitraum: "Juni", icon: "sun", text: "Spiele, Musik und gute Laune: Unser großes jährliches Sommerfest für alle Familien und Freunde.", bildUrl: null }
    ],

    // --- ELTERNSTIMMEN (TESTIMONIALS) ---
    testimonialsSettings: {
        titel: "Warum wir dabei sind",
        untertitel: "Stimmen aus unserer Elternschaft"
    },
    // avatar: Nutzen Sie hier die avatarPresets von ganz oben (z.B. avatarPresets.neutral)
    testimonials: [
        { name: "Daniel L.", rolle: "Papa von zwei Töchtern", text: "Es ist toll zu sehen, wie die Anschaffungen des Fördervereins den Kita-Alltag bereichern. Der Ausflug ins Maislabyrinth war ein voller Erfolg!", avatar: avatarPresets.neutral },
        { name: "Christian D.-B.", rolle: "Papa von drei Kindern", text: "Die Gemeinschaft im Verein ist super. Man lernt andere Eltern kennen und tut gleichzeitig etwas Gutes für die Kleinen.", avatar: avatarPresets.maennlich_hell },
        { name: "Lara B.", rolle: "Mama eines Sohnes", text: "Schon mit einem kleinen Beitrag können wir Projekte realisieren, die sonst nicht möglich wären. Jedes Senfkorn zählt!", avatar: avatarPresets.weiblich_hell }
    ],

    // --- SOCIAL MEDIA (WHATSAPP KANAL) ---
    socialMedia: {
        titel: "Immer auf dem Laufenden",
        untertitel: "Folge unserem WhatsApp-Kanal für schnelle Updates direkt auf dein Handy.",
        whatsapp: {
            name: "Förderverein Senfkorn News",
            link: "https://whatsapp.com/channel/0029VbBFHQUI1rcg606kcY0b", 
            buttonText: "Kanal abonnieren",
            qrUrl: "./assets/whatsapp_kanal_only_qr.png", // QR-Code Bilddatei hochladen und hier verknüpfen
            qrLabel: "Kanal mit dem Handy scannen",
            qrSubLabel: "Einfach Kamera öffnen und draufhalten",
            features: [
                "Termine & Erinnerungen",
                "Fotos von Aktionen",
                "Kurzfristige Infos"
            ]
        }
    },

    // --- MITGLIEDSCHAFT & DOWNLOADS ---
    cta: {
        titel: "Werde ein Senfkorn-Unterstützer!",
        text: "Schon mit einem kleinen Jahresbeitrag hilfst du uns, große Sprünge zu machen.",
        buttonAntrag: "Mitgliedsantrag",
        buttonSpenden: "Spendeninfos",
        dateiNameAntrag: "./assets/documents/Aufnahmeantrag_Förderverein-Senfkorn-Haltern.pdf" // Dateiname im Ordner assets/documents
    },

    // --- BANKDATEN & SPENDEN ---
    bank: {
        titel: "Spendenkonto",
        empfaenger: "Förderverein des ev. Kindergartens Senfkorn Haltern",
        bankName: "Sparkasse Westmünsterland",
        iban: "DE08 4015 4530 0040 0056 21",
        bic: "WELADE3WXXX",
        qrUrl: "./assets/Bank_Giro_Code.jpg", // Statisches QR-Code Bild (GiroCode)
        labels: {
            empfaenger: "Empfänger",
            bank: "Bank",
            iban: "IBAN",
            bic: "BIC",
            copyAll: "Alle Daten kopieren",
            copyIbanHint: "IBAN Kopieren",
            copySuccess: "Alle Bankdaten wurden kopiert!"
        },
        infoText: "Jeder Euro fließt zu 100% in die Projekte für die Kinder. Spendenquittungen stellen wir gerne aus.",
        copyFeedback: "IBAN in die Zwischenablage kopiert!",
        qrInfo: "Scanne den GiroCode mit deiner Bank-App, um alle Daten automatisch zu übernehmen.",
        standardZweck: "Spende Foerderverein" 
    },

    // --- RECHTLICHE DATEN & TEXTE (STAMMDATEN) ---
    // Diese Daten werden automatisch in das Impressum und den Datenschutz eingesetzt.
    legal: {
        stammdaten: {
            verein: "Förderverein des ev. Kindergartens Senfkorn Haltern am See e.V.",
            strasse: "Flaesheimer Str. 1",
            plzOrt: "45721 Haltern am See",
            vorstand1: "Lara Bennemann",
            vorstand2: "Daniel Langer",
            email: "förderverein.sfk@gmail.com",
            webseite: "https://senfkorn-haltern.github.io/foerderverein",
            registergericht: "Amtsgericht Gelsenkirchen",
            registernummer: "VR 2763",
            verantwortlich: "Christian Danowski-Buhren"
        },
        footerHeaders: {
            kontakt: "Kontakt",
            rechtliches: "Rechtliches"
        },
        // HINWEIS: Die Vorlagen (Templates) müssen normalerweise nicht geändert werden.
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
                    <p class="mb-4 text-sm">Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen.</p>
                    <h4 class="font-bold mb-2 text-gray-800 uppercase text-sm">2. Verantwortliche Stelle</h4>
                    <p class="mb-4 text-sm">${d.verein}<br>${d.strasse}, ${d.plzOrt}<br>E-Mail: ${d.email}</p>
                    <h4 class="font-bold mb-2 text-gray-800 uppercase text-sm">3. Datenerfassung</h4>
                    <p class="mb-4 text-sm">Diese Website wird über GitHub Pages gehostet. GitHub erhebt technisch notwendige Log-Dateien.</p>
                    <h4 class="font-bold mb-2 text-gray-800 uppercase text-sm">4. Ihre Rechte</h4>
                    <p class="mb-4 text-sm">Sie haben jederzeit das Recht auf Auskunft, Berichtigung oder Löschung Ihrer Daten.</p>
                `
            }
        }
    },

    // --- MODAL & BUTTON-TEXTE ---
    ui: {
        buttonSchliessen: "Schließen",
        mitgliedschaft: {
            titel: "Mitgliedsantrag",
            text: "Laden Sie das PDF herunter, füllen Sie es aus und werfen Sie es einfach in den Briefkasten der Kita \"Senfkorn\".",
            buttonDownload: "PDF Herunterladen"
        }
    },

    // --- FUSSZEILE (FOOTER) ---
    footer: {
        adresse: ["Förderverein des ev. Kindergartens Senfkorn e.V.", "Flaesheimer Str. 1", "45721 Haltern am See"],
        email: "förderverein.sfk@gmail.com",
        links: [
            { text: "Impressum", url: "#" },
            { text: "Datenschutz", url: "#" },
            { text: "Satzung (PDF)", url: "./assets/documents/Satzung_Förderverein Senfkorn_2025.pdf" }
        ],
        ueberText: "Der Förderverein unterstützt die pädagogische Arbeit der Einrichtung in Haltern am See finanziell und ideell."
    },

    // --- DEKO-ELEMENTE (Hintergrund-Icons) ---
    // Hier können Sie Icons im Hintergrund schweben lassen.
    // pos: Position (Tailwind Klassen) | color: Farbe/Transparenz | anim: floating, floating-slow, floating-delayed
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
            { icon: "smile", pos: "top-15 left-[3%] -translate-y-1/2", color: "text-brand-green/30", size: "w-32 h-32 sm:w-40 sm:h-40", anim: "floating" },
            { icon: "star", pos: "bottom-5 right-[10%]", color: "text-brand-green/20", size: "w-16 h-16", anim: "floating-delayed" }
        ],
        spenden: [
            { icon: "piggy-bank", pos: "top-10 right-10", color: "text-brand/20", size: "w-48 h-48 sm:w-64 sm:h-64", anim: "floating-slow" }
        ],
        "unsere-kita": [
            { icon: "sprout", pos: "top-10 left-[5%]", color: "text-brand-green/30", size: "w-16 h-16 sm:w-24 sm:h-24", anim: "floating" },
            { icon: "sun", pos: "top-20 right-[5%]", color: "text-brand/20", size: "w-20 h-20 sm:w-32 sm:h-32", anim: "floating-delayed" },
            { icon: "leaf", pos: "bottom-20 left-[2%]", color: "text-brand-green/20", size: "w-16 h-16 sm:w-20 sm:h-20", anim: "floating-slow" },
            { icon: "bird", pos: "top-1/2 right-[2%]", color: "text-brand-dark/10", size: "w-12 h-12 sm:w-16 sm:h-16", anim: "floating" }
        ],
        "social-media": [
            { icon: "message-circle", pos: "top-10 right-[5%]", color: "text-whatsapp/20", size: "w-32 h-32 sm:w-48 sm:h-48", anim: "floating" },
            { icon: "share-2", pos: "bottom-10 left-[5%]", color: "text-whatsapp/10", size: "w-24 h-24", anim: "floating-delayed" }
        ]
    }
};
