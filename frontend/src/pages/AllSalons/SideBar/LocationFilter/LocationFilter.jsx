import { useState, useRef, useEffect } from "react";
import { Globe, ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";



function LocationFilter() {
  const { t } = useTranslation();

  const LOCATIONS = [
    t("pageAllSalons.sideBar.locationFilter.options.all"),
    t("pageAllSalons.sideBar.locationFilter.options.north"),
    t("pageAllSalons.sideBar.locationFilter.options.central"),
    t("pageAllSalons.sideBar.locationFilter.options.south"),
  ];


  const [selected, setSelected] = useState(LOCATIONS[0]);
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [height, setHeight] = useState(0);  

  useEffect(() => {
    if (dropdownRef.current) {
      setHeight(dropdownRef.current.scrollHeight);
    }
  }, [open]);

  const handleSelect = (location) => {
    setSelected(location);
    setOpen(false);
  };

  return (
    <div className="space-y-4 w-64 relative">
      {/* Label */}
      <span className="block text-[10px] font-label font-extrabold uppercase tracking-[0.2em] text-outline">
        {t("pageAllSalons.sideBar.locationFilter.label")}
      </span>

      {/* Button / Selected */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="
          w-full relative flex items-center justify-between
          pl-10 pr-4 py-2 bg-surface border border-outline-variant rounded-lg
          text-sm font-body text-on-surface
          hover:border-primary
          focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary
          transition-all
        "
      >
        <div className="flex items-center w-full">
          <Globe className="absolute left-3 w-5 h-5 text-outline pointer-events-none" />
          <span className="ml-1">{selected}</span>
        </div>
        <ChevronDown
          className={`w-5 h-5 text-outline transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {/* Options */}
      <div
        className={`
          absolute z-10 w-full mt-1 bg-surface rounded-lg shadow-lg
          overflow-hidden transition-all duration-300
        `}
        style={{ maxHeight: open ? `${height}px` : "0px" }}
      >
        <ul className="border border-outline-variant" ref={dropdownRef}>
          {LOCATIONS.map((location) => (
            <li
              key={location}
              onClick={() => handleSelect(location)}
              className="
                px-4 py-2 text-sm font-body text-on-surface
                hover:bg-surface-hover cursor-pointer transition-colors
              "
            >
              {location}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default LocationFilter;