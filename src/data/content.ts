import { type LucideIcon, Briefcase, Brain, TrendingUp, Users, Home, Mountain, Utensils, Plane, Target, ShieldCheck, FileText, Users2, Compass, AlertTriangle, Search, Map, Zap, Activity, Rocket } from "lucide-react";

export interface NavbarContent {
    brand: string;
    links: { label: string; href: string }[];
    cta: string;
}

export interface HeroProps {
    badge: string;
    title: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
    heroImage: string;
}

export interface FeatureItem {
    title: string;
    description: string;
    icon: LucideIcon;
    cta: string;
    href: string;
}

export interface FeaturesSection {
    title: string;
    description: string;
    items: FeatureItem[];
}

export interface ContactDetail {
    label: string;
    value: string;
}

export interface ContactProps {
    sectionTitle: string;
    sectionDescription: string;
    details: ContactDetail[];
    email: string; // Keeping for backward compat or form usage
    formTitle: string;
    formDescription: string;
    formLabels: {
        name: string;
        email: string;
        message: string;
        submit: string;
    };
}

export interface FooterLink {
    label: string;
    href: string;
}

export interface FooterSection {
    title: string;
    links: FooterLink[];
}

export interface FooterContent {
    brand: string;
    description: string;
    copyright: string;
    sections: FooterSection[];
}

export interface AboutContent {
    title: string;
    subtitle: string;
    description: string;
    downloadCvCta: string;
    downloadCvUrl: string;
    linkedinCta: string;
    linkedinUrl: string;
}

export interface CTAContent {
    badge: string;
    title: string;
    subtitle: string;
    description: string;
    secondTitle: string;
    secondSubtitle: string;
    values: {
        icon: LucideIcon;
        title: string;
        description: string;
    }[];
    ctaTitle: string;
    ctaDescription: string;
    ctaButton: string;
}

export interface MethodologyStep {
    letter: string;
    phase: string;
    title: string;
    description: string;
    icon: LucideIcon;
}

export interface MethodologyContent {
    title: string;
    subtitle: string;
    defineSteps: MethodologyStep[];
    frameSteps: MethodologyStep[];
}

export const navbarContent: NavbarContent = {
    brand: "Infinif.ai",
    links: [
        { label: "Home", href: "#" },
        { label: "Diensten", href: "#services" },
        // { label: "Producten", href: "https://chat.infinif.ai" },
        { label: "Over Bjørn", href: "#about" },
        { label: "Contact", href: "#contact" },
    ],
    cta: "", // CTA removed as per design
};

export const heroContent: HeroProps = {
    badge: "New Features Available",
    title: "Ready to infinif.ai your business?",
    subtitle: "Infinif.ai staat voor infinite improvement through AI: slimmer werken en continu verbeteren met de kracht van kunstmatige intelligentie. Ik help organisaties om AI écht praktisch in te zetten: niet alleen met strategisch advies, maar ook door samen de handen uit de mouwen te steken.",
    primaryCta: "Plan een kennismaking",
    secondaryCta: "Meer over Bjørn",
    heroImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40", // Planning/Strategy image
};

export const featuresContent: FeaturesSection = {
    title: "Diensten",
    description: "Van interim management tot AI-implementatie. Praktische oplossingen die uw bedrijf vooruit helpen in de digitale transformatie",
    items: [
        {
            title: "Advies & Implementatie van AI-oplossingen",
            description: "Van strategie tot uitvoering: praktische AI-implementatie die uw bedrijfsprocessen versterkt.",
            icon: Brain,
            cta: "Vraag offerte",
            href: "#contact",
        },
        {
            title: "AI-trainingen & Workshops",
            description: "Praktische training en workshops over AI-toepassingen voor uw team en organisatie.",
            icon: Users,
            cta: "Vraag offerte",
            href: "#contact",
        },
        {
            title: "Interim Marketing- & E-commerce Management",
            description: "Tijdelijke invulling van marketing- en e-commerce posities met directe impact op groei en resultaten.",
            icon: Briefcase,
            cta: "Vraag offerte",
            href: "#contact",
        },
        {
            title: "Investor-ready Marketing- & businessplannen & pitch decks",
            description: "Professionele marketingplannen voor seed en series A financieringsrondes.",
            icon: TrendingUp,
            cta: "Vraag offerte",
            href: "#contact",
        },
    ],
};

export const contactContent: ContactProps = {
    sectionTitle: "Bedrijfsgegevens",
    sectionDescription: "", // Empty or removed as per screenshot, it just shows details
    email: "bjorn@infinif.ai", // Used for form default
    details: [
        { label: "Handelsnaam", value: "Infinif.ai" },
        { label: "KvK-nummer", value: "97606952" },
        { label: "BTW-identificatienummer", value: "NL005278494B56" },
        { label: "Postadres", value: "Ericaweg 47, 1272CS Huizen" },
        { label: "Telefoon", value: "+31 6 1115 9651" },
        { label: "E-mail", value: "bjorn@infinif.ai" },
    ],
    formTitle: "Stuur een bericht",
    formDescription: "Vul het onderstaande formulier in om contact op te nemen.",
    formLabels: {
        name: "Naam",
        email: "E-mail",
        message: "Bericht",
        submit: "Verstuur bericht",
    },
};

export const aboutContent: AboutContent = {
    title: "Over Bjørn",
    subtitle: "Gecertificeerd AI Business Professional met 20+ jaar ervaring in digital commerce & marketing.",
    description: "Mijn carrière is een bewuste reis langs innovatie: van directierollen bij tech-giganten als Sony en Samsung, waar ik onder andere de eerste Chromebooks in Nederland introduceerde, tot het bouwen van mijn eigen craft beer-merk. De rode draad? Altijd de vraag: hoe kan technologie ons werk écht slimmer maken?\n\nMet de opkomst van AI viel alles op zijn plek. Ik besloot me te certificeren als AI Business Professional om organisaties te helpen niet alleen over AI te praten, maar het ook echt te doen. Of je nu een startup bent die een investor-ready plan nodig heeft of een gevestigde organisatie die de AI-boot niet wil missen: ik spreek de taal van de boardroom én de werkvloer. Want ik geloof niet in technologie om de technologie, maar in impact. Laten we samen kijken hoe we jouw ambities kunnen waarmaken.",
    downloadCvCta: "Download CV",
    downloadCvUrl: "/CV_Bjorn_Jense_Infinifai.pdf",
    linkedinCta: "LinkedIn",
    linkedinUrl: "https://www.linkedin.com/in/bj%C3%B8rn-jense-991078a/",
};

export const footerContent: FooterContent = {
    brand: "Infinif.ai",
    description: "Boutique AI & Marketing Consultancy\nGecertificeerd AI Business Professional",
    copyright: `© ${new Date().getFullYear()} Infinif.ai. Alle rechten voorbehouden.`,
    sections: [
        {
            title: "Navigatie",
            links: [
                { label: "Home", href: "#" },
                { label: "Diensten", href: "#services" },
                { label: "Over Bjørn", href: "#about" },
                { label: "Contact", href: "#contact" },
            ],
        },
        {
            title: "Contact",
            links: [
                { label: "bjorn@infinif.ai", href: "mailto:bjorn@infinif.ai" },
                { label: "+31 6 1115 9651", href: "tel:+31611159651" },
                { label: "KvK: 97606952", href: "#" },
                { label: "BTW: NL005278494B56", href: "#" },
            ],
        },
    ],
};

export const ctaContent: CTAContent = {
    badge: "De AI-stap",
    title: "Mijn waarden",
    subtitle: "Naast de data en algoritmes",
    description: "Als de laptop dichtgaat, vind je me waarschijnlijk niet stilzittend op de bank. Deze passies houden me scherp en creatief.",
    secondTitle: "Naast de data en algoritmes",
    secondSubtitle: "Wat mij drijft buiten het werk",
    values: [
        {
            icon: Home,
            title: "Het Gezinsleven",
            description: "Mijn thuisbasis in Huizen is mijn belangrijkste fundament. Samen met mijn gezin geniet ik van de dagelijkse dynamiek die me scherp houdt.",
        },
        {
            icon: Mountain,
            title: "De Bergen in",
            description: "Skiën is voor mij de ulitieme vrijheid. De combinatie van snelheid, techniek en de buitenlucht geeft me de frisse blik die ik meeneem naar mijn werk.",
        },
        {
            icon: Utensils,
            title: "In de Keuken",
            description: "Koken is voor mij een vorm van creativiteit. Net als in de business gaat het om de beste ingrediënten, een goede timing en soms een beetje durf om te experimenteren.",
        },
        {
            icon: Plane,
            title: "Reizen & Ontdekken",
            description: "Ik ben altijd nieuwsgierig naar nieuwe culturen en plekken. Die nieuwsgierigheid vertaalt zich ook naar mijn fascinatie voor AI.",
        },
    ],
    ctaTitle: "Klaar voor de volgende stap?",
    ctaDescription: "Laten we samen kijken hoe we AI voor jouw business kunnen laten werken.",
    ctaButton: "Plan een gesprek",
};

export const defineFrameContent: MethodologyContent = {
    title: "DEFINE - FRAME Methodologie",
    subtitle: "Een bewezen, systeematische aanpak voor effectieve AI-adoptie en blijvende impact.",
    defineSteps: [
        { letter: "D", phase: "DEFINE", title: "Determine Objectives", description: "Vaststellen wat we exact willen bereiken: automatisering, content creatie of leadgeneratie.", icon: Target },
        { letter: "E", phase: "DEFINE", title: "Establish Success Criteria", description: "Definiëren van specifieke, meetbare doelen (KPI's) zoals conversiepercentages.", icon: ShieldCheck },
        { letter: "F", phase: "DEFINE", title: "Formulate Key Deliverables", description: "Identificeren van de tastbare resultaten van het AI-project.", icon: FileText },
        { letter: "I", phase: "DEFINE", title: "Identify Stakeholders", description: "In kaart brengen van alle betrokkenen en hun specifieke verwachtingen.", icon: Users2 },
        { letter: "N", phase: "DEFINE", title: "Navigate Constraints", description: "Analyseren van beperkingen in tijd, budget en beschikbare middelen.", icon: Compass },
        { letter: "E", phase: "DEFINE", title: "Evaluate Risks", description: "Inschatten van potentiële risico's en bepalen van mitigatiestrategieën.", icon: AlertTriangle },
    ],
    frameSteps: [
        { letter: "F", phase: "FRAME", title: "Feasibility Study", description: "Onderzoek naar welke bedrijfsprocessen het meest geschikt zijn voor AI-verbetering.", icon: Search },
        { letter: "R", phase: "FRAME", title: "Roadmap Creation", description: "Ontwikkelen van een gedetailleerd plan met tijdlijn, tools en mijlpalen.", icon: Map },
        { letter: "A", phase: "FRAME", title: "AI Implementation", description: "Uitrollen van geselecteerde AI-oplossingen, vaak startend met pilotprojecten.", icon: Zap },
        { letter: "M", phase: "FRAME", title: "Measurement & Monitoring", description: "Prestaties bewaken op basis van KPI's en resultaten evalueren.", icon: Activity },
        { letter: "E", phase: "FRAME", title: "Enhancement & Scalability", description: "Continu verfijnen en opschalen van AI-oplossingen binnen de organisatie.", icon: Rocket },
    ]
};
