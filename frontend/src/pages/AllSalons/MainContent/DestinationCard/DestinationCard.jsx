// DestinationCard.jsx
import React from "react";
import { Star, Heart } from "lucide-react";
import { useTranslation } from "react-i18next";


function DestinationCard({ title, price, location, description, rating, img }) {
  const { t } = useTranslation();



  return (
    <div className="group h-full">
      <div className="relative overflow-hidden rounded-xl bg-surface-container-lowest p-1 shadow-sm transition-transform duration-500 hover:-translate-y-2 h-full flex flex-col">

        {/* Image */}
        <div className="relative h-72 overflow-hidden rounded-lg">
          <img
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            src={img}
            alt={title}
            loading="lazy"
          />
          <div className="absolute top-4 right-4 bg-surface/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1 shadow-sm">
            <Star className="w-4 h-4 text-secondary" />
            <span className="text-xs font-bold font-label">{rating}</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-1">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-2xl font-serif font-bold text-on-surface leading-tight line-clamp-2">
              {title}
            </h3>
            <span className="text-sm font-label font-bold text-primary">
              From ${price}
            </span>
          </div>

          <p className="text-xs font-label uppercase tracking-widest text-outline mb-4">
            {location}
          </p>

          <p className="text-sm font-body text-on-surface-variant line-clamp-2 mb-6">
            {description}
          </p>

          {/* luôn nằm đáy */}
          <div className="flex gap-3 mt-auto">
            <button className="flex-1 bg-primary text-on-primary py-3 rounded-full font-label text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-on-primary-container transition-all">
              {t("pageAllSalons.mainContent.destinationCard.btnBooking")}
            </button>
            <button className="flex-none aspect-square bg-surface-container-high text-primary p-3 rounded-full hover:bg-primary-container transition-all">
              <Heart className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DestinationCard;