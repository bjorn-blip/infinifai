import { Link } from "react-router-dom";
import { footerContent } from "@/data/content";

export const Footer = () => {
    return (
        <footer className="bg-primary text-white pt-12 pb-6">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    <div>
                        <h3 className="text-xl font-bold mb-3">{footerContent.brand}</h3>
                        <p className="text-gray-300 text-sm leading-relaxed whitespace-pre-line">
                            {footerContent.description}
                        </p>
                    </div>

                    {footerContent.sections.map((section, index) => (
                        <div key={index}>
                            <h4 className="font-semibold mb-3 text-white">{section.title}</h4>
                            <ul className="space-y-2">
                                {section.links.map((link, linkIndex) => (
                                    <li key={linkIndex}>
                                        <a
                                            href={link.href}
                                            className="text-sm text-gray-300 hover:text-white transition-colors"
                                        >
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="border-t border-gray-600 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-gray-300">
                        {footerContent.copyright}
                    </p>
                    <div className="flex items-center space-x-4">
                        <Link to="/privacy" className="text-sm text-gray-300 hover:text-white transition-colors">
                            Privacy & Algemene voorwaarden
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};
