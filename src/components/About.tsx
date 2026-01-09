import { aboutContent } from "@/data/content";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, Linkedin } from "lucide-react";

export const About = () => {
    return (
        <section id="about" className="py-16 bg-background scroll-mt-28">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-4xl mx-auto mb-12">
                    <h2 className="text-4xl font-bold tracking-tight text-foreground mb-4">
                        {aboutContent.title}
                    </h2>
                    <p className="text-lg text-muted-foreground mb-8">
                        {aboutContent.subtitle}
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                        <a href={aboutContent.downloadCvUrl} download="CV_Bjorn_Jense_Infinifai.pdf">
                            <Button size="lg" className="h-12 px-8 text-lg font-semibold rounded-full hover:scale-105 transition-transform">
                                <Download className="w-4 h-4 mr-2" />
                                {aboutContent.downloadCvCta}
                            </Button>
                        </a>
                        <a href={aboutContent.linkedinUrl} target="_blank" rel="noopener noreferrer">
                            <Button variant="secondary" size="lg" className="h-12 px-8 text-lg rounded-full hover:scale-105 transition-transform bg-secondary/30 hover:bg-secondary/50">
                                <Linkedin className="w-4 h-4 mr-2" />
                                {aboutContent.linkedinCta}
                            </Button>
                        </a>
                    </div>
                </div>

                {/* Quote Card */}
                <div className="max-w-4xl mx-auto mb-16">
                    <Card className="border-border/50 bg-card shadow-lg">
                        <CardContent className="p-8">
                            <h3 className="text-2xl font-bold text-foreground mb-4">
                                {aboutContent.cardTitle}
                            </h3>
                            <p className="text-xl italic text-muted-foreground leading-relaxed">
                                {aboutContent.quote}
                            </p>
                        </CardContent>
                    </Card>
                </div>

                {/* Story Cards */}
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {aboutContent.stories.map((story, index) => (
                            <Card key={index} className="border-border/50 bg-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                                <CardHeader>
                                    <div className="inline-block mb-3">
                                        <span className="text-xs font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full">
                                            {story.badge}
                                        </span>
                                    </div>
                                    <CardTitle className="text-2xl font-bold text-foreground">
                                        {story.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {story.description}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
