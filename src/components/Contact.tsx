import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { contactContent } from "@/data/content";
import { Send, CheckCircle2, Loader2 } from "lucide-react";

export const Contact = () => {
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    access_key: "711465b6-43e8-451b-a887-ff64d51ac4ec", // Bjørn: Zet hier je Web3Forms key neer!
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                    subject: `Nieuw bericht van ${formData.name} via Infinif.ai`,
                }),
            });

            const result = await response.json();
            if (result.success) {
                setStatus("success");
                setFormData({ name: "", email: "", message: "" });
            } else {
                setStatus("error");
            }
        } catch (error) {
            console.error("Submission error:", error);
            setStatus("error");
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <section id="contact" className="py-16 relative overflow-hidden scroll-mt-28">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-primary/5 rounded-full blur-3xl opacity-20 -z-10" />

            <div className="container mx-auto px-4">
                {/* Section Title */}
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-4xl font-bold tracking-tight text-foreground mb-4">
                        Contact
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Klaar om uw AI en marketing doelen te realiseren? Laten we kennismaken en de mogelijkheden bespreken.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {/* Business Details Card */}
                    <Card className="shadow-2xl border-border/50 backdrop-blur-sm bg-card/80">
                        <CardHeader>
                            <CardTitle>{contactContent.sectionTitle}</CardTitle>
                            {contactContent.sectionDescription && (
                                <CardDescription>{contactContent.sectionDescription}</CardDescription>
                            )}
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-6">
                                {contactContent.details.map((detail, index) => (
                                    <div key={index} className="flex flex-col space-y-1">
                                        <p className="text-base font-bold text-foreground">{detail.label}</p>
                                        <p className="text-base text-muted-foreground">{detail.value}</p>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    {/* Contact Form Card */}
                    <Card className="shadow-2xl border-border/50 backdrop-blur-sm bg-card/80">
                        <CardHeader>
                            <CardTitle>{contactContent.formTitle}</CardTitle>
                            <CardDescription>{contactContent.formDescription}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            {status === "success" ? (
                                <div className="py-12 text-center space-y-4 animate-in fade-in zoom-in duration-300">
                                    <CheckCircle2 className="w-16 h-16 text-accent mx-auto" />
                                    <h4 className="text-2xl font-bold">Bericht verzonden!</h4>
                                    <p className="text-muted-foreground">Bedankt voor je bericht. Ik neem zo snel mogelijk contact met je op.</p>
                                    <Button variant="outline" onClick={() => setStatus("idle")}>
                                        Nog een bericht sturen
                                    </Button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="name">{contactContent.formLabels.name}</Label>
                                        <Input
                                            id="name"
                                            name="name"
                                            placeholder="Uw naam"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            disabled={status === "loading"}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="email">{contactContent.formLabels.email}</Label>
                                        <Input
                                            id="email"
                                            name="email"
                                            type="email"
                                            placeholder="uw@email.nl"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            disabled={status === "loading"}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="message">{contactContent.formLabels.message}</Label>
                                        <Textarea
                                            id="message"
                                            name="message"
                                            placeholder="Hoe kunnen we u helpen?"
                                            className="min-h-[120px]"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            disabled={status === "loading"}
                                        />
                                    </div>
                                    {status === "error" && (
                                        <p className="text-sm text-destructive font-medium">Er ging iets mis bij het verzenden. Probeer het later opnieuw.</p>
                                    )}
                                    <Button type="submit" className="w-full group" disabled={status === "loading"}>
                                        {status === "loading" ? (
                                            <>
                                                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                                                Versturen...
                                            </>
                                        ) : (
                                            <>
                                                {contactContent.formLabels.submit}
                                                <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                            </>
                                        )}
                                    </Button>
                                </form>
                            )}
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section >
    );
};
