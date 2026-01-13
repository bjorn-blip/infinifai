import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Methodology } from "@/components/Methodology";
import { About } from "@/components/About";
import { CtaSection } from "@/components/CtaSection";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export const Home = () => {
    return (
        <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/20">
            <Navbar />
            <main>
                <Hero />
                <Features />
                <Methodology />
                <About />
                <CtaSection />
                <Contact />
            </main>
            <Footer />
        </div>
    );
};
