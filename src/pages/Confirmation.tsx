import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

declare global {
    interface Window {
        gtag?: (...args: any[]) => void;
    }
}

export const Confirmation = () => {
    const { t } = useTranslation();

    useEffect(() => {
        // Track conversion for appointment booking
        if (window.gtag) {
            window.gtag('event', 'conversion', {
                'send_to': 'AW-XXXXXXXXXX/APPOINTMENT_CONVERSION_LABEL',
                'value': 1.0,
                'currency': 'EUR',
                'transaction_id': ''
            });

            // Also track as a custom event
            window.gtag('event', 'appointment_booked', {
                'event_category': 'engagement',
                'event_label': 'Google Calendar Appointment',
                'value': 1
            });
        }
    }, []);

    return (
        <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/20">
            <Navbar />
            <main className="pt-32 pb-20 flex items-center justify-center min-h-[80vh]">
                <div className="container mx-auto px-4 max-w-2xl text-center">
                    <div className="mb-8 flex justify-center">
                        <div className="relative">
                            <div className="absolute inset-0 bg-accent/20 blur-3xl rounded-full scale-150 animate-pulse" />
                            <div className="relative bg-accent rounded-full p-6 shadow-2xl shadow-accent/20">
                                <CheckCircle2 className="w-16 h-16 text-white" />
                            </div>
                        </div>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                        {t('confirmation.title', 'Afspraak Bevestigd!')}
                    </h1>

                    <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
                        {t('confirmation.subtitle', 'Bedankt voor het inplannen van een gesprek. Je ontvangt spoedig een bevestiging via e-mail met de details en de Teams/Google Meet link.')}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/">
                            <Button size="lg" className="rounded-full px-8 h-12 bg-accent text-white hover:bg-accent/90 shadow-lg shadow-accent/20">
                                <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
                                {t('confirmation.backHome', 'Terug naar Home')}
                            </Button>
                        </Link>
                        <Button variant="outline" size="lg" className="rounded-full px-8 h-12" onClick={() => window.open('https://calendar.google.com', '_blank')}>
                            <Calendar className="w-4 h-4 mr-2" />
                            {t('confirmation.addToCalendar', 'Bekijk in Agenda')}
                        </Button>
                    </div>

                    <div className="mt-20 p-8 rounded-3xl bg-secondary/5 border border-white/40 backdrop-blur-sm">
                        <p className="text-sm text-muted-foreground">
                            {t('confirmation.contactInfo', 'Vragen voor het gesprek? Stuur gerust een bericht naar bjorn@infinif.ai')}
                        </p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};
