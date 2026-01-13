import { defineFrameContent } from "@/data/content";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export const Methodology = () => {
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
                        {defineFrameContent.title}
                    </h2>
                    <p className="text-xl text-muted-foreground">
                        {defineFrameContent.subtitle}
                    </p>
                </div>

                <div className="space-y-20">
                    {/* DEFINE PHASE */}
                    <div>
                        <div className="flex items-center gap-4 mb-10">
                            <div className="h-px flex-grow bg-gradient-to-r from-transparent to-accent/20" />
                            <h3 className="text-2xl font-bold text-accent uppercase tracking-[0.2em]">Phase 1: DEFINE</h3>
                            <div className="h-px flex-grow bg-gradient-to-l from-transparent to-accent/20" />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {defineFrameContent.defineSteps.map((step, i) => (
                                <MethodologyCard key={i} step={step} color="accent" />
                            ))}
                        </div>
                    </div>

                    {/* FRAME PHASE */}
                    <div>
                        <div className="flex items-center gap-4 mb-10">
                            <div className="h-px flex-grow bg-gradient-to-r from-transparent to-primary/20" />
                            <h3 className="text-2xl font-bold text-primary uppercase tracking-[0.2em]">Phase 2: FRAME</h3>
                            <div className="h-px flex-grow bg-gradient-to-l from-transparent to-primary/20" />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                            {defineFrameContent.frameSteps.map((step, i) => (
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
