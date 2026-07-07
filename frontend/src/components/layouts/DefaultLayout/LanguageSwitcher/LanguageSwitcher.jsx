import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Globe, Check } from "lucide-react";


import flagVN from "../../../../assets/flags/vietnam-flag-icon.svg";
import flagUS from "../../../../assets/flags/united-states-flag-icon.svg";

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const ref = useRef();

 
  const changeLang = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lang", lng);
    setOpen(false);
  };


  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative cursor-pointer">
      
      {/* Icon */}
      <Globe
        className="w-5 h-5"
        onClick={() => setOpen((prev) => !prev)}
      />

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg border z-50 overflow-hidden">
          
          {/* VI */}
          <button
            onClick={() => changeLang("vi")}
            className="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100"
          >
            <div className="flex items-center gap-2">
              <img src={flagVN} alt="Vietnam flag" className="w-6 h-6" />
              Tiếng Việt
            </div>

            {i18n.language === "vi" && (
              <Check className="w-4 h-4 text-green-500" />
            )}
          </button>

          {/* EN */}
          <button
            onClick={() => changeLang("en")}
            className="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100"
          >
            <div className="flex items-center gap-2">
              <img src={flagUS} alt="US flag" className="w-6 h-6" />
              English
            </div>

            {i18n.language === "en" && (
              <Check className="w-4 h-4 text-green-500" />
            )}
          </button>

        </div>
      )}
    </div>
  );
}

export default LanguageSwitcher;