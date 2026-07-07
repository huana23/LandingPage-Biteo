import { Link } from "react-router-dom";
import { Share2, Heart, Globe } from "lucide-react";
import { useTranslation } from "react-i18next";


function Footer() {
  const { t } = useTranslation();
    return (
        <footer className="bg-[#fcf9f4] dark:bg-stone-950 w-full border-t border-stone-200/15 dark:border-stone-800/15">
            <div className="max-w-screen-2xl mx-auto px-6 lg:px-10 pt-20 pb-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

                    {/* Brand */}
                    <div className="lg:col-span-1 space-y-4">
                        <Link
                            to="/"
                            className="text-2xl font-serif font-bold text-[#80534c] dark:text-[#dba39a] tracking-tight inline-block"
                        >
                            {t("header.brand")}
                        </Link>
                        <p className="text-stone-500 dark:text-stone-400 font-body text-sm leading-relaxed max-w-xs">
                            {t("footer.description")}
                        </p>
                        <div className="flex gap-5 pt-2">
                            <Share2 className="w-5 h-5 text-primary cursor-pointer hover:text-[#775a19] dark:hover:text-[#dba39a] transition-colors" />
                            <Heart className="w-5 h-5 text-primary cursor-pointer hover:text-[#775a19] dark:hover:text-[#dba39a] transition-colors" />
                            <Globe className="w-5 h-5 text-primary cursor-pointer hover:text-[#775a19] dark:hover:text-[#dba39a] transition-colors" />
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-label uppercase tracking-widest text-xs font-bold text-[#80534c] mb-6">
                            {t("footer.quickLinks.title")}
                        </h4>
                        <ul className="space-y-3">
                            <li>
                                <Link to="/" className="font-sans text-sm text-stone-500 dark:text-stone-400 hover:text-[#775a19] dark:hover:text-[#dba39a] transition-all duration-200">
                                    {t("footer.quickLinks.home")}
                                </Link>
                            </li>
                            <li>
                                <Link to="/all-salons" className="font-sans text-sm text-stone-500 dark:text-stone-400 hover:text-[#775a19] dark:hover:text-[#dba39a] transition-all duration-200">
                                    {t("footer.quickLinks.rooms")}
                                </Link>
                            </li>
                            <li>
                                <Link to="/all-salons" className="font-sans text-sm text-stone-500 dark:text-stone-400 hover:text-[#775a19] dark:hover:text-[#dba39a] transition-all duration-200">
                                    {t("footer.quickLinks.amenities")}
                                </Link>
                            </li>
                            <li>
                                <Link to="#reviews" className="font-sans text-sm text-stone-500 dark:text-stone-400 hover:text-[#775a19] dark:hover:text-[#dba39a] transition-all duration-200">
                                    {t("footer.quickLinks.gallery")}
                                </Link>
                            </li>
                            <li>
                                <Link to="#contact" className="font-sans text-sm text-stone-500 dark:text-stone-400 hover:text-[#775a19] dark:hover:text-[#dba39a] transition-all duration-200">
                                    {t("footer.quickLinks.contact")}
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-label uppercase tracking-widest text-xs font-bold text-[#80534c] mb-6">
                            {t("footer.contact.title")}
                        </h4>
                        <ul className="space-y-3">
                            <li className="text-sm text-stone-500 dark:text-stone-400">
                                {t("footer.contact.address")}
                            </li>
                            <li>
                                <a href={`tel:${t("contact.phone")}`} className="font-sans text-sm text-stone-500 dark:text-stone-400 hover:text-[#775a19] dark:hover:text-[#dba39a] transition-all duration-200">
                                    {t("footer.contact.phone")}
                                </a>
                            </li>
                            <li>
                                <a href={`mailto:${t("contact.email")}`} className="font-sans text-sm text-stone-500 dark:text-stone-400 hover:text-[#775a19] dark:hover:text-[#dba39a] transition-all duration-200">
                                    {t("footer.contact.email")}
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h4 className="font-label uppercase tracking-widest text-xs font-bold text-[#80534c] mb-6">
                            {t("footer.social.title")}
                        </h4>
                        <ul className="space-y-3">
                            <li>
                                <a href={t("contact.facebook")} target="_blank" rel="noopener noreferrer" className="font-sans text-sm text-stone-500 dark:text-stone-400 hover:text-[#775a19] dark:hover:text-[#dba39a] transition-all duration-200">
                                    {t("footer.social.facebook")}
                                </a>
                            </li>
                            <li>
                                <a href={t("contact.instagram")} target="_blank" rel="noopener noreferrer" className="font-sans text-sm text-stone-500 dark:text-stone-400 hover:text-[#775a19] dark:hover:text-[#dba39a] transition-all duration-200">
                                    {t("footer.social.instagram")}
                                </a>
                            </li>
                            <li>
                                <a href={t("contact.zalo")} target="_blank" rel="noopener noreferrer" className="font-sans text-sm text-stone-500 dark:text-stone-400 hover:text-[#775a19] dark:hover:text-[#dba39a] transition-all duration-200">
                                    {t("footer.social.zalo")}
                                </a>
                            </li>
                            <li>
                                <a href={t("contact.whatsapp")} target="_blank" rel="noopener noreferrer" className="font-sans text-sm text-stone-500 dark:text-stone-400 hover:text-[#775a19] dark:hover:text-[#dba39a] transition-all duration-200">
                                    {t("footer.social.whatsapp")}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="w-full bg-[#f4eee5]/60 dark:bg-stone-900/60 border-t border-stone-200/10 dark:border-stone-800/10 text-center py-6 mt-12">
                    <p className="text-stone-500 dark:text-stone-400 text-xs tracking-wide">
                        {t("footer.copyright")} · <Link to="/privacy" className="hover:text-[#775a19] dark:hover:text-[#dba39a] transition-colors">{t("footer.privacy")}</Link> · <Link to="/terms" className="hover:text-[#775a19] dark:hover:text-[#dba39a] transition-colors">{t("footer.terms")}</Link>
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;