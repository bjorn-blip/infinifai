import { type LucideIcon, Briefcase, Brain, TrendingUp, Users, Home, Mountain, Utensils, Plane } from "lucide-react";

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
    downloadCvCta: string;
    downloadCvUrl: string;
    linkedinCta: string;
    linkedinUrl: string;
    cardTitle: string;
    quote: string;
    stories: {
        badge: string;
        title: string;
        description: string;
    }[];
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

export const navbarContent: NavbarContent = {
    brand: "Infinif.ai",
    links: [
        { label: "Home", href: "#" },
        { label: "Diensten", href: "#services" },
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
    heroImage: "/bjorn-portrait.jpg",
};

export const featuresContent: FeaturesSection = {
    title: "Diensten",
    description: "Van interim management tot AI-implementatie. Praktische oplossingen die uw bedrijf vooruit helpen in de digitale transformatie",
    items: [
        {
            title: "Interim Marketing- & E-commerce Management",
            description: "Tijdelijke invulling van marketing- en e-commerce posities met directe impact op groei en resultaten.",
            icon: Briefcase,
            cta: "Vraag offerte",
        },
        {
            title: "Advies & Implementatie van AI-oplossingen",
            description: "Van strategie tot uitvoering: praktische AI-implementatie die uw bedrijfsprocessen versterkt.",
            icon: Brain,
            cta: "Vraag offerte",
        },
        {
            title: "Investor-ready Marketing- & businessplannen & pitch decks",
            description: "Professionele marketingplannen voor seed en series A financieringsrondes.",
            icon: TrendingUp,
            cta: "Vraag offerte",
        },
        {
            title: "AI-trainingen & Workshops",
            description: "Praktische training en workshops over AI-toepassingen voor uw team en organisatie.",
            icon: Users,
            cta: "Vraag offerte",
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
    downloadCvCta: "Download CV",
    downloadCvUrl: "/CV_Bjorn_Jense_Infinifai.pdf",
    linkedinCta: "LinkedIn",
    linkedinUrl: "https://www.linkedin.com/in/bj%C3%B8rn-jense-991078a/",
    cardTitle: "Strategische visie met een menselijke maat",
    quote: "\"Of ik nu een berg afdaal op mijn ski's, een complex vijfgangendiner voorbereid of een AI-strategie uitrol voor een multinational: voor mij draait alles om de juiste techniek, focus en het resultaat waar je anderen mee verrast.\"",
    stories: [
        {
            badge: "Carrière",
            title: "Van de boardroom naar de toekomst",
            description: "Mijn carrière is geen toevallige aaneenschakeling van functies, maar een bewuste reis langs innovatie. Na mijn Master in Consultancy begon ik in de digitale wereld toen e-commerce nog in de kinderschoenen stond. Via rollen bij tech-giganten als Sony en Samsung groeide ik van Brand Manager naar Director. Ik leerde daar hoe je complexe technologie vertaalt naar iets waar de consument echt blij van wordt, zoals de lancering van de allereerste Chromebook in Nederland.",
        },
        {
            badge: "Ondernemerschap",
            title: "Innovatie in de praktijk",
            description: "Geïnspireerd door mijn eigen ervaring koos ik voor het avontuur van het ondernemerschap met mijn eigen craft beer-merk. Ik wilde ervaren hoe het is om vanaf nul iets op te bouwen en met je eigen voeten in de klei (of in dit geval, de hop) te staan. Deze hands-on ervaring heeft me geleerd wat het betekent om écht ondernemer te zijn: van strategie tot uitvoering, van marketing tot operations.",
        },
    ],
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
    title: "Waarom nu?",
    subtitle: "De rode draad in mijn loopbaan is altijd de vraag een geweest: \"Hoe kan techniek ons werk slimmer en leuker maken?\"",
    description: "De opkomst van generatieve AI was voor mij het moment om alles samen te brengen. Ik besloot me te certificeren als AI Business Professional en met Infinif.ai mijn eigen koers te varen. Ik help nu bedrijven om niet alleen over AI te praten, maar het ook echt te doen: van investor-ready plannen tot hands-on marketing automation implementatie.",
    secondTitle: "Naast de data en algoritmes",
    secondSubtitle: "Als de laptop dichtgaat, vind je me waarschijnlijk niet stilzittend op de bank",
    values: [
        {
            icon: Home,
            title: "Het Gezinsleven",
            description: "Mijn thuisbasis in Huizen is mijn belangrijkste fundament. Samen met mijn gezin geniet ik van de dagelijkse dynamiek die me scherp houdt.",
        },
        {
            icon: Mountain,
            title: "De Bergen in",
            description: "Skiën is voor mij de ultieme vrijheid. De combinatie van snelheid, techniek en de buitenlucht geeft me de frisse blik die ik meeneem naar mijn werk.",
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
    ctaTitle: "Waarom we moeten praten",
    ctaDescription: "Ik geloof niet in technologie om de technologie. Ik geloof in impact. Of je nu een startup bent die klaar is voor een seed-ronde of een gevestigde organisatie die de AI-boot niet wil missen: ik spreek de taal van de boardroom én de werkvloer. Laten we samen kijken hoe we jouw ambities kunnen waarmaken.",
    ctaButton: "Plan een gesprek",
};
