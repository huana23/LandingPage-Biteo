import { useState } from "react";
import { useTranslation } from "react-i18next";

function PriceRangeFilter() {
  const { t } = useTranslation();

  const [price, setPrice] = useState(0);
  return (
    <div className="space-y-4">
      <span className="block text-[10px] font-label font-extrabold uppercase tracking-[0.2em] text-outline">
        {t("pageAllSalons.sideBar.priceRange.title")}

      </span>
      <div className="pt-2">
        <input
          className="w-full h-1 bg-outline-variant rounded-lg appearance-none cursor-pointer accent-primary"
          max="500"
          min="0"
          step="10"
          type="range"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
        />
        <div className="flex justify-between mt-4 text-[11px] font-label font-bold text-on-surface-variant">
          <span className="bg-surface-container-high px-3 py-1 rounded-full">$0</span>
          <span className="bg-surface-container-high px-3 py-1 rounded-full">
            ${price}+
          </span>
        </div>
      </div>
    </div>
  );
}

export default PriceRangeFilter;