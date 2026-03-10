// =================================================================
// --- KONFIGURATION - HIER INHALTE BEARBEITEN ---
// =================================================================

const webseitenInhalt = {
    // GRUNDEINSTELLUNGEN
    vereinName: "Förderverein des ev. Kindergartens Senfkorn Haltern am See e.V.",
    vereinNameKurz: "FV Ev. Kiga Senfkorn",
    stadt: "Haltern am See",
    
    // NAVIGATION MENÜ (Links und Labels)
    menu: [
        { label: "Start", link: "#home" },
        { label: "Über uns", link: "#ueber-uns" },
        { label: "Projekte", link: "#projekte" },
        { label: "Aktionen", link: "#aktionen" },
        { label: "Mitglied werden", link: "#mitgliedschaft" },
        { label: "Spenden", link: "#spenden", highlight: true }
    ],

    // STARTSEITE (HERO)
    hero: {
        badge: "Gemeinsam für unsere Kleinen",
        titelZeile1: "Aus kleinen Körnern",
        titelZeile2: "werden starke Bäume.",
        text: "Willkommen beim Förderverein des Ev. Kindergartens Senfkorn. Wir unterstützen das offene Konzept unserer Kita in Haltern am See und schaffen Räume zum Wachsen.",
        bildUrl: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },

    // ÜBER UNS
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

    // PROJEKTE
    projekteSettings: {
        titel: "Projekte & Anschaffungen",
        buttonAlle: "Alle Projekte anzeigen"
    },
    // Wenn mehr als 3 Projekte eingetragen werden, erscheint ein "Alle anzeigen" Button.
    projekte: [
        {
            titel: "Ausflug zum Maislabyrinth",
            status: "abgeschlossen",
            statusText: "Erfolgreich",
            bildUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfaFNyIcOopdg_3FYiSq7_v6KHeiEsVs_Dfg&s", 
            beschreibung: "Das war ein Riesenspaß! Alle Kinder und Erzieher haben gemeinsam den Weg durchs Labyrinth gesucht. Ein toller Tag in der Natur.",
        },
        {
            titel: "Neuer Schiebewagen",
            status: "abgeschlossen",
            statusText: "Angeschafft",
            bildUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa5u9zINX-nwgk797juZgcFAjXPiP2Ws3GEA&s",
            beschreibung: "Für unsere Kleinsten haben wir einen robusten 6-Sitzer-Schiebewagen finanziert. So sind auch längere Ausflüge rund um Haltern kein Problem mehr.",
        },
        {
            titel: "Matschküche für den Garten",
            status: "aktiv",
            statusText: "In Arbeit",
            bildUrl: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?q=80&w=800&auto=format&fit=crop",
            beschreibung: "Wasser, Sand und jede Menge Fantasie: Wir finanzieren eine neue Matschküche für den Außenbereich, damit die Kinder nach Herzenslust 'kochen' können.",
        }
    ],

    // AKTIONEN
    aktionenSettings: {
        titel: "Aktionen & Termine",
        untertitel: "Gemeinsam aktiv für unsere Kita. Hier treffen wir uns, verkaufen Selbstgemachtes und feiern zusammen.",
        buttonAlle: "Alle Aktionen anzeigen"
    },
    // Auch hier: Ab dem 4. Eintrag erscheint ein "Mehr anzeigen" Button.
    aktionen: [
        {
            titel: "Waffelverkauf",
            zeitraum: "Regelmäßig",
            icon: "utensils",
            text: "Der Duft von frischen Waffeln gehört dazu! Wir verkaufen regelmäßig an Markttagen oder bei Kita-Festen.",
            bildUrl: "https://images.unsplash.com/photo-1574340530514-610f44358899?q=80&w=800&auto=format&fit=crop",
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
        }
    ],

    // TESTIMONIALS (ELTERN-STIMMEN)
    testimonialsSettings: {
        titel: "Warum wir dabei sind",
        untertitel: "Stimmen aus unserer Elternschaft"
    },
    testimonials: [
        {
            name: "Sarah M.",
            rolle: "Mama von zwei Kindern",
            text: "Es ist toll zu sehen, wie die Anschaffungen des Fördervereins den Kita-Alltag bereichern. Die Kinder lieben die neue Matschküche!",
            avatar: "https://i.pravatar.cc/150?u=sarah"
        },
        {
            name: "Christian B.",
            rolle: "Papa eines Sohnes",
            text: "Die Gemeinschaft im Verein ist super. Man lernt andere Eltern kennen und tut gleichzeitig etwas Gutes für die Kleinen.",
            avatar: "https://i.pravatar.cc/150?u=christian"
        },
        {
            name: "Julia K.",
            rolle: "Mama einer Tochter",
            text: "Schon mit einem kleinen Beitrag können wir Projekte realisieren, die sonst nicht möglich wären. Jedes Senfkorn zählt!",
            avatar: "https://i.pravatar.cc/150?u=julia"
        }
    ],

    // MITGLIEDSCHAFT & ACTION
    cta: {
        titel: "Werde ein Senfkorn-Unterstützer!",
        text: "Schon mit einem kleinen Jahresbeitrag hilfst du uns, große Sprünge zu machen.",
        buttonAntrag: "Mitgliedsantrag (PDF)",
        dateiNameAntrag: "Mitgliedsantrag_Senfkorn.pdf"
    },

    // BANKDATEN
    bank: {
        titel: "Spendenkonto",
        empfaenger: "Förderverein des ev. Kiga Senfkorn",
        bankName: "Volksbank Haltern",
        iban: "DE00 1234 5678 9000 00",
        bic: "GENODED1HAL",
        infoText: "Jeder Euro fließt zu 100% in die Projekte für die Kinder. Spendenquittungen stellen wir gerne aus.",
        copyFeedback: "IBAN in die Zwischenablage kopiert!"
    },

    // MODAL TEXTE
    modal: {
        titel: "Mitgliedsantrag",
        text: "Laden Sie das PDF herunter, füllen Sie es aus und werfen Sie es einfach in den Briefkasten der Kita \"Senfkorn\".",
        buttonDownload: "PDF Herunterladen",
        buttonSchliessen: "Schließen"
    },

    // SPIELERISCHE HINTERGRUND-ELEMENTE (Icons)
    // Hier kannst du die Icons, ihre Position, Größe, Farbe (Tailwind-Klassen) und Transparenz steuern.
    // Transparenz wird über Tailwind /Opacity gesteuert (z.B. /20 = 20%).
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

    // KONTAKT & FOOTER
    footer: {
        adresse: [
            "Förderverein des ev. Kindergartens Senfkorn e.V.",
            "Musterstraße 12",
            "45721 Haltern am See"
        ],
        email: "kontakt@fv-senfkorn-haltern.de",
        links: [
            { text: "Impressum", url: "#" },
            { text: "Datenschutz", url: "#" },
            { text: "Satzung (PDF)", url: "#" }
        ],
        ueberText: "Der Förderverein unterstützt die pädagogische Arbeit der Einrichtung in Haltern am See finanziell und ideell."
    }
};
