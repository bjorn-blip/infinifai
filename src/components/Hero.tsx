import { Button } from "@/components/ui/button";
import { heroContent } from "@/data/content";
import { Cpu, Sparkles, Brain, ArrowRight, TrendingUp } from "lucide-react";
import { useTranslation, Trans } from 'react-i18next';
import { useNavigate } from "react-router-dom";

export const Hero = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    return (
        <section className="relative pt-32 pb-4 lg:pt-40 lg:pb-12 overflow-hidden">
            <div className="container mx-auto px-4 relative z-10 text-center">
                <h1 className="max-w-4xl mx-auto text-4xl font-extrabold tracking-tight text-transparent sm:text-5xl md:text-7xl bg-clip-text bg-gradient-to-r from-foreground to-foreground/60 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
                    {t('hero.title')}
                </h1>

                <p className="max-w-2xl mx-auto text-xl text-muted-foreground mb-12 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
                    {t('hero.subtitle')}
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
                    <a href="/tool" onClick={(e) => {
                        e.preventDefault();
                        navigate('/tool');
                    }}>
                        <Button size="lg" className="h-14 px-10 text-xl font-bold rounded-full hover:scale-105 transition-all shadow-xl shadow-primary/20 group">
                            Doe Gratis AI Business Scan
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </a>
                </div>

                {/* HIGH-END INTERACTIVE PROCESS HUB */}
                <div className="mt-20 relative mx-auto max-w-6xl">
                    <div className="relative group">
                        {/* Glow Background */}
                        <div className="absolute -inset-10 bg-gradient-to-tr from-accent/20 to-primary/20 rounded-[4rem] blur-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-1000" />

                        {/* Main Interaction Area */}
                        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white/40 backdrop-blur-sm p-8 rounded-[3rem] border border-white/60 shadow-2xl animate-float">

                            {/* Center: The Implementation (The "Computerscreen") */}
                            <div className="lg:col-span-8 relative aspect-video w-full h-auto">
                                <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden border-4 border-white shadow-xl">
                                    <img
                                        src={heroContent.heroImage}
                                        alt="AI Implementation"
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-accent/10 via-transparent to-transparent" />
                                </div>

                                {/* Methodology Reference Badge */}
                                <div className="absolute top-6 left-6 z-20">
                                    <div className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-2xl border border-accent/20 shadow-lg flex flex-col items-start gap-0.5">
                                        <div className="flex items-center gap-2">
                                            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                                            <span className="text-[10px] font-black text-accent uppercase tracking-widest">{t('hero.diagram.poweredBy')}</span>
                                        </div>
                                        <span className="text-xs font-bold text-foreground">{t('hero.diagram.methodology')}</span>
                                    </div>
                                </div>

                                {/* Floating Tech Nodes - Simplified for focus */}
                                <div className="absolute -bottom-4 -left-4 animate-float delay-300 hidden lg:block">
                                    <div className="bg-white p-3 rounded-xl shadow-xl border border-accent/10">
                                        <Brain className="w-6 h-6 text-accent" />
                                    </div>
                                </div>
                            </div>

                            {/* Right Side: The Continuous Improvement Cycle (The "Infinity") */}
                            <div className="lg:col-span-4 h-full flex flex-col justify-center">
                                <div className="relative w-full aspect-square max-w-[280px] mx-auto">
                                    {/* The Loop background */}
                                    <div className="absolute inset-0 rounded-full border-4 border-dashed border-accent/20 animate-spin-slow" />

                                    {/* Cycle Steps */}
                                    {[
                                        { label: t("hero.diagram.cycle.analyze"), icon: Brain, pos: "top-0 left-1/2 -translate-x-1/2 -translate-y-1/2" },
                                        { label: t("hero.diagram.cycle.transform"), icon: Cpu, pos: "right-0 top-1/2 translate-x-1/2 -translate-y-1/2" },
                                        { label: t("hero.diagram.cycle.measure"), icon: TrendingUp, pos: "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2" },
                                        { label: t("hero.diagram.cycle.optimize"), icon: Sparkles, pos: "left-0 top-1/2 -translate-x-1/2 -translate-y-1/2" },
                                    ].map((step, i) => (
                                        <div key={i} className={`absolute ${step.pos} z-20 group/step`}>
                                            <div className="bg-white p-3 rounded-xl shadow-lg border border-accent/20 flex flex-col items-center gap-1 hover:scale-110 hover:border-accent transition-all">
                                                <step.icon className="w-5 h-5 text-accent" />
                                                <span className="text-[10px] font-bold uppercase tracking-tighter text-foreground">{step.label}</span>
                                            </div>
                                            {/* Pulse effect */}
                                            <div className="absolute inset-0 bg-accent/20 rounded-xl animate-ping -z-10 group-hover/step:opacity-100 opacity-0 transition-opacity" />
                                        </div>
                                    ))}

                                    {/* Center of the Loop: The MOAT */}
                                    <div className="absolute inset-8 rounded-full bg-primary/5 flex flex-col items-center justify-center text-center p-4 border border-accent/10 shadow-inner">
                                        <p className="text-[10px] font-bold text-accent uppercase tracking-widest mb-1">{t('hero.diagram.result')}</p>
                                        <div className="relative">
                                            <p className="text-xl font-extrabold text-foreground leading-none tracking-tighter">{t('hero.diagram.moat')}</p>
                                            <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-accent/30 rounded-full" />
                                        </div>
                                        <p className="text-[8px] text-muted-foreground mt-2 leading-tight font-medium">{t('hero.diagram.moatDesc')}</p>
                                    </div>
                                </div>

                                <div className="mt-12 bg-accent/5 p-4 rounded-2xl border border-accent/10 relative overflow-hidden">
                                    <div className="absolute top-0 left-0 w-1 h-full bg-accent" />
                                    <p className="text-xs text-foreground leading-relaxed font-medium">
                                        "<Trans i18nKey="hero.diagram.quote" components={{ 1: <span className="text-accent font-bold" /> }} />"
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Decorative Background Elements */}
                    <div className="absolute -z-10 top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-accent/20 to-transparent lg:block hidden" />
                </div>
            </div>

            {/* Background Decor */}
            <div className="absolute top-0 transform -translate-x-1/2 left-1/2 w-full h-full -z-10 pointer-events-none">
                <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-accent/5 rounded-full blur-[160px]" />
                <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[160px]" />
            </div>
        </section>
    );
};
