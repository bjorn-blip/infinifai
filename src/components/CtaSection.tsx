import { ctaContent } from "@/data/content";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const CtaSection = () => {
    const handleCtaClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const element = document.querySelector('#contact');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <section className="py-16 bg-background overflow-hidden">
            <div className="container mx-auto px-4">


                {/* Values Grid Section */}
                <div className="mb-32">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">
                            {ctaContent.secondTitle}
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            {ctaContent.secondSubtitle}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        {ctaContent.values.map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <Card key={index} className="border-border/50 bg-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                                    <div className="flex p-6 gap-6">
                                        <div className="flex-shrink-0">
                                            <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                                                <Icon className="w-6 h-6 text-accent" />
                                            </div>
                                        </div>
                                        <div>
                                            <CardHeader className="p-0 mb-2">
                                                <CardTitle className="text-xl font-bold text-foreground">
                                                    {item.title}
                                                </CardTitle>
                                            </CardHeader>
                                            <CardContent className="p-0">
                                                <p className="text-muted-foreground leading-relaxed">
                                                    {item.description}
                                                </p>
                                            </CardContent>
                                        </div>
                                    </div>
                                </Card>
                            );
                        })}
                    </div>
                </div>

                {/* Bottom CTA Card */}
                <div className="max-w-6xl mx-auto">
                    <div className="bg-primary text-white rounded-[2rem] p-8 md:p-16 text-center shadow-2xl relative overflow-hidden border border-white/5">
                        {/* Background Decor */}
                        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
                                {ctaContent.ctaTitle}
                            </h2>
                            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed whitespace-pre-line">
                                {ctaContent.ctaDescription}
                            </p>
                            <Button
                                size="lg"
                                onClick={handleCtaClick}
                                className="h-14 px-10 text-xl font-semibold rounded-full hover:scale-105 transition-transform bg-primary text-primary-foreground group"
                            >
                                {ctaContent.ctaButton}
                                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
