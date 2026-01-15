// Forced rebuild comment 1
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from "./LanguageSwitcher";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const { t } = useTranslation();

    const links = [
        { label: t('navbar.home'), href: "/" },
        { label: t('navbar.services'), href: "#services" },
        { label: t('navbar.contact'), href: "#contact" },
    ];

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        setIsMenuOpen(false); // Close menu on click

        // Special handling for Home link
        if (href === '/') {
            e.preventDefault();
            if (location.pathname === '/') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
                navigate('/');
                window.scrollTo(0, 0);
            }
            return;
        }

        if (href.startsWith('/')) {
            e.preventDefault();
            navigate(href);
            return;
        }

        // If it's an anchor link
        if (href.startsWith('#')) {
            e.preventDefault();

            if (href === '#') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                return;
            }

            // If we're not on the home page, navigate there first
            if (location.pathname !== '/' && location.pathname !== '') {
                navigate('/');
                // Wait for navigation, then scroll
                setTimeout(() => {
                    const element = document.querySelector(href);
                    if (element) {
                        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                }, 100);
            } else {
                // We're already on home page, just scroll
                const element = document.querySelector(href);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        }
    };

    return (
        <>
            <div className="fixed top-0 left-0 w-full z-50 flex justify-center pt-4 px-4">
                <nav className="w-full max-w-6xl bg-white/80 backdrop-blur-xl border border-white/40 shadow-lg/5 rounded-full px-6 py-3 flex items-center justify-between transition-all duration-301">
                    <Link to="/" onClick={(e) => handleNavClick(e as any, '/')} className="flex items-center shrink-0">
                        <div className="relative p-1">
                            <img
                                src="/logo-header.jpg"
                                alt="Infinif.ai"
                                className="h-16 w-auto object-contain mix-blend-multiply [mask-image:radial-gradient(circle,white_70%,transparent_100%)]"
                            />
                        </div>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-1">
                        {links.map((link, index) => (
                            <a
                                key={index}
                                href={link.href}
                                onClick={(e) => handleNavClick(e, link.href)}
                                className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary hover:bg-primary/5 rounded-full transition-all duration-200"
                            >
                                {link.label}
                            </a>
                        ))}
                        <div className="pl-2 ml-2 border-l border-foreground/10">
                            <LanguageSwitcher />
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-primary hover:bg-primary/5 rounded-full transition-colors"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </nav>
            </div>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div className="fixed inset-0 top-24 z-40 md:hidden px-4 animate-in fade-in slide-in-from-top-4 duration-200">
                    <div className="bg-white/90 backdrop-blur-xl border border-white/40 shadow-xl rounded-3xl p-6 space-y-2">
                        {links.map((link, index) => (
                            <a
                                key={index}
                                href={link.href}
                                onClick={(e) => handleNavClick(e, link.href)}
                                className="block w-full px-4 py-3 text-lg font-medium text-foreground hover:bg-primary/5 hover:text-primary rounded-xl transition-colors"
                            >
                                {link.label}
                            </a>
                        ))}
                        <div className="pt-4 mt-2 border-t border-border/50 flex justify-center">
                            <LanguageSwitcher />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
