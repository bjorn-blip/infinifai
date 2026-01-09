import { Link, useLocation, useNavigate } from "react-router-dom";
import { navbarContent } from "@/data/content";

export const Navbar = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        // If it's an anchor link
        if (href.startsWith('#')) {
            e.preventDefault();

            if (href === '#') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                return;
            }

            // If we're not on the home page, navigate there first
            if (location.pathname !== '/') {
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
        <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-white/10">
            <div className="container mx-auto px-4 h-auto py-4 flex items-center justify-between">
                <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center">
                    <img
                        src="/logo-header.jpg"
                        alt={navbarContent.brand}
                        className="h-20 w-auto object-contain mix-blend-multiply"
                    />
                </Link>
                <div className="hidden md:flex items-center space-x-6 text-lg font-medium text-muted-foreground">
                    {navbarContent.links.map((link, index) => (
                        <a
                            key={index}
                            href={link.href}
                            onClick={(e) => handleNavClick(e, link.href)}
                            className="hover:text-primary transition-colors cursor-pointer"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
};
