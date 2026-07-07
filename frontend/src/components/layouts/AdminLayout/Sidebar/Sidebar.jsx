import React from "react";
import {
    LayoutDashboard,
    Store,
    Calendar,
    Scissors,
    Star,
    Settings,
    HelpCircle,
    LogOut
} from "lucide-react";

import { useTranslation } from "react-i18next";


function Sidebar({ isOpen, setIsOpen }) {
    const { t } = useTranslation();

    return (
        <>
            {/* Overlay mobile */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/40 z-40 lg:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}
            <aside
                className={`
                     fixed top-0 left-0 z-50 h-screen w-64
    bg-[#fcf9f4] dark:bg-stone-900
    transform transition-transform duration-300
    ${isOpen ? "translate-x-0" : "-translate-x-full"}
    lg:translate-x-0 lg:static lg:h-auto lg:w-64

    border-r border-stone-200/50 dark:border-stone-800/50
    flex flex-col py-8 px-4
                `}
            >
                {/* Close button */}
                <div className="flex justify-end mb-4 lg:hidden">
                    <button
                        onClick={() => setIsOpen(false)}
                        className="p-2 rounded-lg hover:bg-stone-200/40 dark:hover:bg-stone-800/40"
                    >
                        ✕
                    </button>
                </div>
                {/* Header */}
                <div className="mb-10 px-2">
                    <h1 className="text-2xl font-serif italic text-[#80534c] dark:text-[#DBA39A]">
                        {t("header.brand")}
                    </h1>
                    <p className="font-['Noto_Serif'] font-medium text-sm tracking-tight text-stone-500 mt-1">
                        {t("sidebar-admin.text-admin")}

                    </p>
                </div>

                {/* Navigation */}
                <nav className="flex-1 space-y-1">
                    <a
                        className="flex items-center gap-3 px-4 py-3 text-stone-500 dark:text-stone-400 hover:text-[#80534c] dark:hover:text-[#DBA39A] hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors duration-200 font-['Noto_Serif'] font-medium text-sm tracking-tight"
                        href="#"
                    >
                        <LayoutDashboard size={20} />
                        <span>                                      {t("sidebar-admin.dashboard")}
                        </span>
                    </a>

                    <a
                        className="flex items-center gap-3 px-4 py-3 text-[#80534c] dark:text-[#DBA39A] font-semibold bg-[#80534c]/5 dark:bg-[#DBA39A]/10 rounded-lg transition-colors duration-200 font-['Noto_Serif'] text-sm tracking-tight scale-[0.98]"
                        href="#"
                    >
                        <Store size={20} />
                        <span>{t("sidebar-admin.manageSalon")}</span>
                    </a>

                    <a
                        className="flex items-center gap-3 px-4 py-3 text-stone-500 dark:text-stone-400 hover:text-[#80534c] dark:hover:text-[#DBA39A] hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors duration-200 font-['Noto_Serif'] font-medium text-sm tracking-tight"
                        href="#"
                    >
                        <Calendar size={20} />
                        <span>{t("sidebar-admin.appointments")}</span>
                    </a>

                    <a
                        className="flex items-center gap-3 px-4 py-3 text-stone-500 dark:text-stone-400 hover:text-[#80534c] dark:hover:text-[#DBA39A] hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors duration-200 font-['Noto_Serif'] font-medium text-sm tracking-tight"
                        href="#"
                    >
                        <Scissors size={20} />
                        <span>{t("sidebar-admin.staff")}</span>
                    </a>

                    <a
                        className="flex items-center gap-3 px-4 py-3 text-stone-500 dark:text-stone-400 hover:text-[#80534c] dark:hover:text-[#DBA39A] hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors duration-200 font-['Noto_Serif'] font-medium text-sm tracking-tight"
                        href="#"
                    >
                        <Star size={20} />
                        <span>{t("sidebar-admin.reviews")}</span>
                    </a>

                    <a
                        className="flex items-center gap-3 px-4 py-3 text-stone-500 dark:text-stone-400 hover:text-[#80534c] dark:hover:text-[#DBA39A] hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors duration-200 font-['Noto_Serif'] font-medium text-sm tracking-tight"
                        href="#"
                    >
                        <Settings size={20} />
                        <span>{t("sidebar-admin.settings")}</span>
                    </a>
                </nav>

                {/* Footer */}
                <div className="mt-auto pt-6 border-t border-stone-100 dark:border-stone-800">
                    <a
                        className="flex items-center gap-3 px-4 py-3 text-stone-500 dark:text-stone-400 hover:text-[#80534c] dark:hover:text-[#DBA39A] hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors duration-200 font-['Noto_Serif'] font-medium text-sm tracking-tight"
                        href="#"
                    >
                        <HelpCircle size={20} />
                        <span>{t("sidebar-admin.help")}</span>
                    </a>

                    <a
                        className="flex items-center gap-3 px-4 py-3 text-stone-500 dark:text-stone-400 hover:text-[#80534c] dark:hover:text-[#DBA39A] hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors duration-200 font-['Noto_Serif'] font-medium text-sm tracking-tight"
                        href="#"
                    >
                        <LogOut size={20} />
                        <span>{t("sidebar-admin.logout")}</span>
                    </a>
                </div>
            </aside>
        </>
    );
}

export default Sidebar;