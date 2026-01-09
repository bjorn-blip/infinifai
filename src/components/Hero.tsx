import { Button } from "@/components/ui/button";
import { heroContent } from "@/data/content";


export const Hero = () => {
    return (
        <section className="relative pt-32 pb-4 lg:pt-48 lg:pb-8 overflow-hidden">
            <div className="container mx-auto px-4 relative z-10 text-center">
                {/* Badge removed */}

                <h1 className="max-w-4xl mx-auto text-4xl font-extrabold tracking-tight text-transparent sm:text-5xl md:text-6xl bg-clip-text bg-gradient-to-r from-foreground to-foreground/70 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
                    {heroContent.title}
                </h1>

                <p className="max-w-2xl mx-auto text-xl text-muted-foreground mb-10 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
                    {heroContent.subtitle}
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
                    <Button size="lg" className="h-12 px-8 text-lg font-semibold rounded-full hover:scale-105 transition-transform">
                        {heroContent.primaryCta}
                    </Button>
                    <a href="#about" onClick={(e) => {
                        e.preventDefault();
                        document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }}>
                        <Button variant="secondary" size="lg" className="h-12 px-8 text-lg rounded-full hover:scale-105 transition-transform bg-secondary/30 hover:bg-secondary/50">
                            {heroContent.secondaryCta}
                        </Button>
                    </a>
                </div>

                <div className="mt-16 relative mx-auto max-w-4xl animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-500">
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 mx-auto w-fit">
                        <img
                            src={heroContent.heroImage}
                            alt="Bjørn"
                            className="w-full h-auto max-w-[600px] object-cover"
                        />
                        {/* Gradient overlay for better blend if needed, optional */}
                        <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent pointer-events-none" />
                    </div>
                </div>
            </div>

            {/* Background gradients */}
            <div className="absolute top-0 transform -translate-x-1/2 left-1/2 w-full h-full -z-10 pointer-events-none">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl opacity-20 transition-opacity" />
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl opacity-20 transition-opacity" />
            </div>
        </section>
    );
};
