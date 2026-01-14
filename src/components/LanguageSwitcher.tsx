import { useTranslation } from 'react-i18next';
import { Button } from "@/components/ui/button";

export const LanguageSwitcher = () => {
    const { i18n } = useTranslation();

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div className="flex items-center gap-2">
            <Button
                variant={i18n.language === 'nl' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => changeLanguage('nl')}
                className="px-2 py-1 h-auto text-xs font-bold"
            >
                NL
            </Button>
            <Button
                variant={i18n.language === 'en' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => changeLanguage('en')}
                className="px-2 py-1 h-auto text-xs font-bold"
            >
                EN
            </Button>
        </div>
    );
};
