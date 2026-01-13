import { featuresContent } from "@/data/content";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const Features = () => {
    return (
        <section id="services" className="pt-12 pb-16 bg-background scroll-mt-28">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                        {featuresContent.title}
                    </h2>
                    {featuresContent.description && (
                        <p className="text-muted-foreground text-lg">
                            {featuresContent.description}
                        </p>
                    )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {featuresContent.items.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <Card key={index} className="border-border/50 bg-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col items-center text-center p-6">
                                <CardHeader className="flex flex-col items-center space-y-4 pb-2">
                                    <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-2">
                                        <Icon className="w-8 h-8 text-accent" />
                                    </div>
                                    <CardTitle className="text-xl font-bold">{feature.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="flex-grow">
                                    <p className="text-muted-foreground leading-relaxed">
                                        {feature.description}
                                    </p>
                                </CardContent>
                                <CardFooter className="pt-4 pb-0">
                                    <Button asChild variant="outline" className="border-accent text-accent hover:bg-accent/10">
                                        <a href={feature.href}>{feature.cta}</a>
                                    </Button>
                                </CardFooter>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
