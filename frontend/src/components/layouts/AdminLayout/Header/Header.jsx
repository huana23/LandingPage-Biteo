import React from "react";
import { Bell, Search, Menu } from "lucide-react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../../DefaultLayout/LanguageSwitcher";


function Header({ setIsOpen }) {
    const { t } = useTranslation();
    return (
        <header className="w-full h-16 sticky top-0 z-40 bg-[#fcf9f4]/70 dark:bg-stone-900/70 backdrop-blur-xl flex justify-between items-center px-8 border-b border-stone-100 dark:border-stone-800">
            <div className="flex items-center gap-3 w-full">
                {/* Hamburger (mobile only) */}
                <button
                    onClick={() => setIsOpen(true)}
                    className="lg:hidden p-2 rounded-lg hover:bg-stone-200/40"
                >
                    <Menu size={20} />
                </button>
                {/* Search */}
                <div className="flex items-center flex-1 max-w-lg">
                    <div className="relative w-full">
                        <Search size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400 text-lg" />
                        <input
                            type="text"
                            placeholder={t("header.searchPlaceholder")}
                            className="w-full pl-10 pr-4 py-2 bg-stone-200/20 dark:bg-stone-800/20 border-none rounded-full focus:ring-2 focus:ring-[#80534c]/20 text-sm font-body outline-none"
                        />
                    </div>
                </div>
            </div>

            {/* Buttons */}
            <div className="flex items-center gap-4">
                <button className="text-stone-400 hover:bg-stone-200/40 dark:hover:bg-stone-800/40 rounded-full p-2 transition-colors">
                    <Bell size={20} />
                </button>
                <div className="text-stone-400 hover:bg-stone-200/40 dark:hover:bg-stone-800/40 rounded-full p-2 transition-colors">
                    <LanguageSwitcher />
                </div>

                {/* Profile */}
                <div className="w-8 h-8 rounded-full overflow-hidden border border-stone-200 ml-2">
                    <img
                        alt="Admin Profile Image"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuABuRDUeJBMRuWlOGRAi4WPr7rvWHmEAikuTAJutM6oTWJNYU0xZcTYK-GP2LGnItLW2a_1ZRIQQLyx4v-nzGM4p8zRYc_SPLAw8J0G1TWGo7HzTUzkgcRpM5e0kNOc_vTueJaRrXZZ7-aDtRElTQRPeTpxzShoT_HStp39L4xUmW1DQiLBYB08Mh4-RXg-wVoSwCo1JU2nFlGWFuzfJNgbKu3NhycnM0iI-l7ETdP8pFGfmyb4Dn5m7VKtenQ8fBYgN2j86KaD13Kg"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </header>
    );
}

export default Header;