import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

export const Footer = () => {
    const { t } = useTranslation();
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-primary text-white pt-12 pb-6">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    <div>
                        <h3 className="text-xl font-bold mb-3">{t('footer.brand')}</h3>
                        <p className="text-gray-300 text-sm leading-relaxed whitespace-pre-line">
                            {t('footer.description')}
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-3 text-white">{t('footer.navTitle')}</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">{t('navbar.home')}</a></li>
                            <li><a href="#services" className="text-sm text-gray-300 hover:text-white transition-colors">{t('navbar.services')}</a></li>
                            <li><a href="#about" className="text-sm text-gray-300 hover:text-white transition-colors">{t('navbar.about')}</a></li>
                            <li><a href="#contact" className="text-sm text-gray-300 hover:text-white transition-colors">{t('navbar.contact')}</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-3 text-white">{t('footer.contactTitle')}</h4>
                        <ul className="space-y-2">
                            <li><a href="mailto:bjorn@infinif.ai" className="text-sm text-gray-300 hover:text-white transition-colors">bjorn@infinif.ai</a></li>
                            <li><a href="tel:+31611159651" className="text-sm text-gray-300 hover:text-white transition-colors">+31 6 1115 9651</a></li>
                            <li><a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">KvK: 97606952</a></li>
                            <li><a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">BTW: NL005278494B56</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-600 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-gray-300">
                        {t('footer.copyright', { year: currentYear })}
                    </p>
                    <div className="flex items-center space-x-4">
                        <Link to="/privacy" className="text-sm text-gray-300 hover:text-white transition-colors">
                            {t('navbar.privacy')}
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};
