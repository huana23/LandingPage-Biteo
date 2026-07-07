import { useTranslation } from "react-i18next";


function ServicesFilter() {
    const { t } = useTranslation();

    return (
        <div className="space-y-4">
            <span className="block text-[10px] font-label font-extrabold uppercase tracking-[0.2em] text-outline">
                {t("pageAllSalons.sideBar.filters.services.title")}
            </span>
            <div className="space-y-3">
                <label className="flex items-center gap-3 cursor-pointer group">
                    <input
                        className="rounded-sm border-outline-variant text-primary focus:ring-primary/20 bg-surface"
                        type="checkbox"
                    />
                    <span className="text-sm font-body text-on-surface group-hover:text-primary transition-colors">
                  {t("pageAllSalons.sideBar.filters.services.room")}
                </span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer group">
                <input
                  className="rounded-sm border-outline-variant text-primary focus:ring-primary/20 bg-surface"
                  type="checkbox"
                />
                <span className="text-sm font-body text-on-surface group-hover:text-primary transition-colors">
                  {t("pageAllSalons.sideBar.filters.services.suite")}
                </span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer group">
                <input
                  className="rounded-sm border-outline-variant text-primary focus:ring-primary/20 bg-surface"
                  type="checkbox"
                />
                <span className="text-sm font-body text-on-surface group-hover:text-primary transition-colors">
                  {t("pageAllSalons.sideBar.filters.services.cottage")}
                </span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer group">
                <input
                  className="rounded-sm border-outline-variant text-primary focus:ring-primary/20 bg-surface"
                  type="checkbox"
                />
                <span className="text-sm font-body text-on-surface group-hover:text-primary transition-colors">
                  {t("pageAllSalons.sideBar.filters.services.villa")}
                </span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer group">
                <input
                  className="rounded-sm border-outline-variant text-primary focus:ring-primary/20 bg-surface"
                  type="checkbox"
                />
                <span className="text-sm font-body text-on-surface group-hover:text-primary transition-colors">
                  {t("pageAllSalons.sideBar.filters.services.family")}
                </span>
              </label>
            </div>
        </div>
    );
}

export default ServicesFilter;