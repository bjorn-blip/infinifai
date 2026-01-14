import { Button } from "@/components/ui/button";
import { Download, Linkedin } from "lucide-react";
import { useTranslation } from 'react-i18next';

export const About = () => {
    const { t } = useTranslation();
    return (
        <section id="about" className="py-24 bg-background scroll-mt-28 relative overflow-hidden">
            <div className="absolute top-0 right-1/2 translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] opacity-10 -z-10" />

            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
                        {/* Story Content - 3 columns */}
                        <div className="lg:col-span-3 space-y-8 order-2 lg:order-1">
                            <div>
                                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6 leading-tight">
                                    {t('about.title')}
                                </h2>
                                <p className="text-xl font-medium text-accent">
                                    {t('about.subtitle')}
                                </p>
                            </div>

                            <div className="space-y-6">
                                {(t('about.description') || "").split('\n\n').map((paragraph, i) => (
                                    <p key={i} className="text-lg text-muted-foreground leading-relaxed">
                                        {paragraph}
                                    </p>
                                ))}
                            </div>

                            <div className="flex flex-wrap items-center gap-6 pt-6">
                                <a href="/CV_Bjorn_Jense_Infinifai.pdf" download="CV_Bjorn_Jense_Infinifai.pdf">
                                    <Button size="lg" className="h-12 px-8 text-md font-semibold rounded-full hover:scale-105 transition-transform shadow-lg shadow-primary/10">
                                        <Download className="w-4 h-4 mr-2" />
                                        {t('about.cta.cv')}
                                    </Button>
                                </a>
                                <a href="https://www.linkedin.com/in/bj%C3%B8rn-jense-991078a/" target="_blank" rel="noopener noreferrer">
                                    <Button variant="secondary" size="lg" className="h-12 px-8 text-md rounded-full hover:scale-105 transition-transform bg-secondary/30 hover:bg-secondary/50">
                                        <Linkedin className="w-4 h-4 mr-2" />
                                        {t('about.cta.linkedin')}
                                    </Button>
                                </a>
                            </div>
                        </div>

                        {/* Visual - 2 columns */}
                        <div className="lg:col-span-2 order-1 lg:order-2 lg:sticky lg:top-32">
                            <div className="relative group">
                                <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-[2.5rem] blur-2xl opacity-50 group-hover:opacity-75 transition-opacity" />
                                <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-border/50 shadow-2xl">
                                    <img
                                        src="/bjorn-portrait.jpg"
                                        alt="Bjørn Jense"
                                        className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
