import { useTranslation } from "react-i18next";


function Footer() {
    const { t } = useTranslation();
    
    const year = new Date().getFullYear();
    return (  
        <footer className="mt-auto py-6 px-8 text-center">
            <p className="text-[10px] font-label uppercase tracking-widest text-stone-400"> {t("footer-admin.copyright", { year })}</p>
        </footer>
    );
}

export default Footer;