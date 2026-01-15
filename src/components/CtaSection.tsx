import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useTranslation } from 'react-i18next';

import { useState } from "react";
import { CalendarModal } from "./CalendarModal";

export const CtaSection = () => {
    const { t } = useTranslation();
    const [isCalendarOpen, setIsCalendarOpen] = useState(false);

    const handleCtaClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setIsCalendarOpen(true);
    };

    return (
        <section className="py-16 bg-background overflow-hidden">
            <div className="container mx-auto px-4">

                {/* Bottom CTA Card */}
                <div className="max-w-6xl mx-auto">
                    <div className="bg-primary text-white rounded-[2rem] p-8 md:p-16 text-center shadow-2xl relative overflow-hidden border border-white/5">
                        {/* Background Decor */}
                        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
                                {t('ctaSection.main.title')}
                            </h2>
                            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed whitespace-pre-line">
                                {t('ctaSection.main.description')}
                            </p>
                            <Button
                                size="lg"
                                onClick={handleCtaClick}
                                className="h-14 px-10 text-xl font-semibold rounded-full hover:scale-105 transition-all bg-accent text-white hover:bg-accent/90 shadow-xl shadow-accent/20 group"
                            >
                                {t('ctaSection.main.button')}
                                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <CalendarModal isOpen={isCalendarOpen} onClose={() => setIsCalendarOpen(false)} />
        </section>
    );
};
