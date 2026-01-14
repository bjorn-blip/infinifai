import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useTranslation } from 'react-i18next';
import { Target, ShieldCheck, FileText, Users2, Compass, AlertTriangle, Search, Map, Zap, Activity, Rocket } from "lucide-react";

export const Methodology = () => {
    const { t } = useTranslation();

    const defineSteps = [
        { letter: "D", title: t('methodology.steps.D.title'), description: t('methodology.steps.D.description'), icon: Target },
        { letter: "E", title: t('methodology.steps.E.title'), description: t('methodology.steps.E.description'), icon: ShieldCheck },
        { letter: "F", title: t('methodology.steps.F.title'), description: t('methodology.steps.F.description'), icon: FileText },
        { letter: "I", title: t('methodology.steps.I.title'), description: t('methodology.steps.I.description'), icon: Users2 },
        { letter: "N", title: t('methodology.steps.N.title'), description: t('methodology.steps.N.description'), icon: Compass },
        { letter: "E", title: t('methodology.steps.E_risk.title'), description: t('methodology.steps.E_risk.description'), icon: AlertTriangle },
    ];

    const frameSteps = [
        { letter: "F", title: t('methodology.steps.F_frame.title'), description: t('methodology.steps.F_frame.description'), icon: Search },
        { letter: "R", title: t('methodology.steps.R.title'), description: t('methodology.steps.R.description'), icon: Map },
        { letter: "A", title: t('methodology.steps.A.title'), description: t('methodology.steps.A.description'), icon: Zap },
        { letter: "M", title: t('methodology.steps.M.title'), description: t('methodology.steps.M.description'), icon: Activity },
        { letter: "E", title: t('methodology.steps.E_scale.title'), description: t('methodology.steps.E_scale.description'), icon: Rocket },
    ];

    return (
        <section id="methodology" className="py-24 bg-slate-50/50 scroll-mt-28 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-7xl -z-10">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
            </div>

            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
                        {t('methodology.title')}
                    </h2>
                    <p className="text-xl text-muted-foreground">
                        {t('methodology.subtitle')}
                    </p>
                </div>

                <div className="space-y-20">
                    {/* DEFINE PHASE */}
                    <div>
                        <div className="flex items-center gap-4 mb-10">
                            <div className="h-px flex-grow bg-gradient-to-r from-transparent to-accent/20" />
                            <h3 className="text-2xl font-bold text-accent uppercase tracking-[0.2em]">{t('methodology.phases.define')}</h3>
                            <div className="h-px flex-grow bg-gradient-to-l from-transparent to-accent/20" />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {defineSteps.map((step, i) => (
                                <MethodologyCard key={i} step={step} color="accent" />
                            ))}
                        </div>
                    </div>

                    {/* FRAME PHASE */}
                    <div>
                        <div className="flex items-center gap-4 mb-10">
                            <div className="h-px flex-grow bg-gradient-to-r from-transparent to-primary/20" />
                            <h3 className="text-2xl font-bold text-primary uppercase tracking-[0.2em]">{t('methodology.phases.frame')}</h3>
                            <div className="h-px flex-grow bg-gradient-to-l from-transparent to-primary/20" />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                            {frameSteps.map((step, i) => (
                                <MethodologyCard key={i} step={step} color="primary" isFrame />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const MethodologyCard = ({ step, color, isFrame }: { step: any, color: string, isFrame?: boolean }) => {
    const Icon = step.icon;
    return (
        <Card className={cn(
            "group relative overflow-hidden border-border/50 bg-white hover:shadow-2xl transition-all duration-500 hover:-translate-y-2",
            isFrame ? "xl:col-span-1" : ""
        )}>
            {/* Phase Letter Background */}
            <div className="absolute -right-4 -top-8 text-9xl font-black opacity-[0.03] group-hover:opacity-[0.07] transition-opacity">
                {step.letter}
            </div>

            <CardContent className="p-8">
                <div className={cn(
                    "w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-500",
                    color === 'accent' ? "bg-accent/10 group-hover:bg-accent group-hover:text-white" : "bg-primary/10 group-hover:bg-primary group-hover:text-white"
                )}>
                    <Icon className="w-7 h-7" />
                </div>

                <div className="space-y-3">
                    <div className="flex items-center gap-2">
                        <span className={cn(
                            "text-xl font-black",
                            color === 'accent' ? "text-accent" : "text-primary"
                        )}>{step.letter}.</span>
                        <h4 className="text-lg font-bold text-foreground leading-tight group-hover:text-primary transition-colors">
                            {step.title}
                        </h4>
                    </div>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                        {step.description}
                    </p>
                </div>
            </CardContent>

            {/* Bottom Progress Line */}
            <div className={cn(
                "absolute bottom-0 left-0 h-1 bg-gradient-to-r transition-all duration-700 w-0 group-hover:w-full",
                color === 'accent' ? "from-accent to-accent/50" : "from-primary to-primary/50"
            )} />
        </Card>
    );
};
