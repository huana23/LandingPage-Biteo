import { useTranslation } from "react-i18next";


function RatingFilter() {
  const { t } = useTranslation();

  return (
    <div className="space-y-4">
      <span className="block text-[10px] font-label font-extrabold uppercase tracking-[0.2em] text-outline">
        {t("pageAllSalons.sideBar.filters-rating.title")}
      </span>
      <div className="space-y-3">
        <label className="flex items-center gap-3 cursor-pointer group">
          <input
            className="border-outline-variant text-primary focus:ring-primary/20 bg-surface"
            name="rating"
            type="radio"
          />
          <span className="text-sm font-body text-on-surface flex items-center gap-1">
            4.0+ {t("pageAllSalons.sideBar.filters-rating.stars")}{" "}
            <span
              className="material-symbols-outlined text-[16px] text-secondary"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              star
            </span>
          </span>
        </label>
        <label className="flex items-center gap-3 cursor-pointer group">
          <input
            className="border-outline-variant text-primary focus:ring-primary/20 bg-surface"
            name="rating"
            type="radio"
          />
          <span className="text-sm font-body text-on-surface flex items-center gap-1">
            3.0+ {t("pageAllSalons.sideBar.filters-rating.stars")}{" "}
            <span
              className="material-symbols-outlined text-[16px] text-secondary"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              star
            </span>
          </span>
        </label>
        <label className="flex items-center gap-3 cursor-pointer group">
          <input
            className="border-outline-variant text-primary focus:ring-primary/20 bg-surface"
            name="rating"
            type="radio"
          />
          <span className="text-sm font-body text-on-surface flex items-center gap-1">
            2.0+ {t("pageAllSalons.sideBar.filters-rating.stars")}{" "}
            <span
              className="material-symbols-outlined text-[16px] text-secondary"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              star
            </span>
          </span>
        </label>
        <label className="flex items-center gap-3 cursor-pointer group">
          <input
            className="border-outline-variant text-primary focus:ring-primary/20 bg-surface"
            name="rating"
            type="radio"
          />
          <span className="text-sm font-body text-on-surface flex items-center gap-1">
            {t("pageAllSalons.sideBar.filters-rating.all")}
          </span>
        </label>
      </div>
    </div>
  );
}

export default RatingFilter;