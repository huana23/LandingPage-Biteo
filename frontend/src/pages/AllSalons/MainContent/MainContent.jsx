import { useState, useEffect } from "react";
import DestinationCard from "./DestinationCard";
import { useTranslation } from "react-i18next";
import { ArrowLeft, ArrowRight } from "lucide-react";

const STATIC_DESTINATIONS = [
  {
    title: "Sapa Valley Retreat",
    price: 65,
    location: "Lao Cai • Vietnam",
    description: "A cozy mountain cabin with panoramic valley views, perfect for couples and small families.",
    rating: 4.9,
    img: "https://images.unsplash.com/photo-1587061949409-02df41d5e562?w=800&q=80",
  },
  {
    title: "Hoi An Riverside Homestay",
    price: 55,
    location: "Quang Nam • Vietnam",
    description: "Traditional Vietnamese house by the river, offering a peaceful and cultural stay.",
    rating: 4.8,
    img: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80",
  },
  {
    title: "Ha Long Bay View Villa",
    price: 120,
    location: "Quang Ninh • Vietnam",
    description: "Luxury villa overlooking the iconic karst landscape of Ha Long Bay.",
    rating: 5.0,
    img: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80",
  },
  {
    title: "Dalat Pine Forest Room",
    price: 45,
    location: "Lam Dong • Vietnam",
    description: "A quiet room surrounded by pine trees and fresh mountain air in the city of flowers.",
    rating: 4.7,
    img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
  },
  {
    title: "Phu Quoc Beach Bungalow",
    price: 90,
    location: "Kien Giang • Vietnam",
    description: "Beachfront bungalow steps away from the white sand and clear water of Phu Quoc.",
    rating: 4.9,
    img: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&q=80",
  },
  {
    title: "Hue Imperial Garden Stay",
    price: 60,
    location: "Thua Thien Hue • Vietnam",
    description: "A historic garden house near the Citadel, blending royal heritage with modern comfort.",
    rating: 4.8,
    img: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&q=80",
  },
  {
    title: "Ninh Binh Eco Lodge",
    price: 75,
    location: "Ninh Binh • Vietnam",
    description: "Eco-friendly lodge nestled in the limestone mountains and rice paddies of Ninh Binh.",
    rating: 4.9,
    img: "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800&q=80",
  },
  {
    title: "Mai Chau Valley House",
    price: 50,
    location: "Hoa Binh • Vietnam",
    description: "A stilt house in the lush valley, ideal for experiencing local Thai culture.",
    rating: 4.6,
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
  },
  {
    title: "Con Dao Seaside Room",
    price: 110,
    location: "Ba Ria Vung Tau • Vietnam",
    description: "A pristine island getaway with clear water, coral reefs, and quiet sandy beaches.",
    rating: 4.8,
    img: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=800&q=80",
  },
  {
    title: "Cat Ba Island Cabin",
    price: 70,
    location: "Hai Phong • Vietnam",
    description: "Rustic cabin in the jungle with access to hidden beaches and emerald waters.",
    rating: 4.7,
    img: "https://images.unsplash.com/photo-1505693416388-b0346efee535?w=800&q=80",
  },
  {
    title: "Sa Pa Rice Terrace Room",
    price: 58,
    location: "Lao Cai • Vietnam",
    description: "Wake up to endless rice terraces and the misty beauty of Northern Vietnam.",
    rating: 4.8,
    img: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80",
  },
  {
    title: "Phong Nha Farmstay",
    price: 85,
    location: "Quang Binh • Vietnam",
    description: "Rustic farmstay near the world heritage caves with bicycle trails and river views.",
    rating: 4.9,
    img: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&q=80",
  },
];

function MainContent() {
  const { t } = useTranslation();
  const destinations = STATIC_DESTINATIONS;
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const totalPages = Math.ceil(destinations.length / itemsPerPage);

  const currentItems = destinations.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  return (
    <section className="lg:col-span-9">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 lg:mb-10 gap-4">
        <div>
          <span className="text-[10px] font-label font-extrabold uppercase tracking-[0.3em] text-secondary">
            {t("pageAllSalons.mainContent.curated_collection")}
          </span>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-on-surface mt-2">
            {t("pageAllSalons.mainContent.sydney_artistry")}
          </h1>
        </div>
        <div className="text-sm font-body text-on-surface-variant italic">
          {t("pageAllSalons.mainContent.showing_destinations", {
            count: destinations.length,
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {destinations.length > 0 ? (
          currentItems.map((item, index) => (
            <DestinationCard key={index} {...item} />
          ))
        ) : (
          <p>No destinations found.</p>
        )}
      </div>

      {/* Pagination */}
      <div className="mt-20 flex justify-center items-center gap-8 border-t border-outline-variant/20 pt-10">
        <button
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="text-xs font-label uppercase tracking-widest text-outline hover:text-primary transition-all flex items-center gap-2 disabled:opacity-50"
        >
          <ArrowLeft className="w-4 h-4" />
          {t("previous")}
        </button>

        <div className="flex gap-4">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
            <span
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`text-xs font-label ${
                currentPage === page
                  ? "font-bold text-primary border-b border-primary pb-1"
                  : "text-outline hover:text-primary cursor-pointer transition-all"
              }`}
            >
              {page.toString().padStart(2, "0")}
            </span>
          ))}
        </div>

        <button
          onClick={() =>
            setCurrentPage(prev => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          className="text-xs font-label uppercase tracking-widest text-outline hover:text-primary transition-all flex items-center gap-2 disabled:opacity-50"
        >
          {t("next")}
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}

export default MainContent;