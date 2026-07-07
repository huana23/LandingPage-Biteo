// TopSalons.jsx
import { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { useTranslation } from "react-i18next";

import { Navigation } from "swiper/modules";
import { Autoplay } from "swiper/modules";
import { MapPin, ArrowRight } from "lucide-react";


import { useNavigate } from "react-router-dom";


function TopSalons() {
  const navigate = useNavigate();
  const swiperRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const [salons, setSalons] = useState([]);
  const [loading, setLoading] = useState(true);
  const { t } = useTranslation();

  useEffect(() => {
    async function fetchSalons() {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/api/shops`);
        if (!res.ok) throw new Error('Failed to fetch salons');
        const data = await res.json();

        const mappedData = data.map((shop) => ({
          _id: shop._id, 
          name: shop.name,
          desc: shop.website || "",
          location: `${shop.city} • ${shop.state}`,
          img:
            shop.imgStore && shop.imgStore !== ""
              ? shop.imgStore.startsWith("http")
                ? shop.imgStore
                : `${import.meta.env.VITE_API_URL}${shop.imgStore}`
              : "https://placekitten.com/400/300",
        }));

        setSalons(mappedData);
      } catch (error) {
        // Error handled silently with loading state
      } finally {
        setLoading(false);
      }
    }

    fetchSalons();
  }, []);

  return (
    <section className="py-24 px-6 lg:px-20 relative">
      <div className="max-w-screen-2xl mx-auto">
        <div className="mb-16 text-center">
          <span className="font-label text-xs uppercase tracking-[0.2em] text-secondary mb-2 block">
            {t("topSalonsSection.label")}
          </span>
          <h2 className="text-5xl font-headline italic font-bold">
            {t("topSalonsSection.title")}
          </h2>
        </div>

        {/* Custom Navigation Buttons */}
        <div className="absolute top-1/2 left-2 md:left-10 -translate-y-1/2 z-10">
          <button
            aria-label="Previous slide"
            onClick={() => swiperRef.current?.slidePrev()}
            disabled={isBeginning}
            className={`w-10 h-10 rounded-full flex items-center justify-center text-white shadow-lg transition-colors ${isBeginning ? "bg-gray-400 cursor-not-allowed" : "bg-primary/20 hover:bg-primary/40"
              }`}
          >
            ‹
          </button>
        </div>
        <div className="absolute top-1/2 right-2 md:right-10 -translate-y-1/2 z-10">
          <button
            aria-label="Next slide"
            onClick={() => swiperRef.current?.slideNext()}
            disabled={isEnd}
            className={`w-10 h-10 rounded-full flex items-center justify-center text-white shadow-lg transition-colors ${isEnd ? "bg-gray-400 cursor-not-allowed" : "bg-primary/20 hover:bg-primary/40"
              }`}
          >
            ›
          </button>
        </div>

        {loading ? (
          <p className="text-center">Loading...</p>
        ) : salons.length > 0 ? (
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            }}
            onSlideChange={(swiper) => {
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            }}
            autoplay={{ delay: 4000, disableOnInteraction: true }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
          >
            {salons.map((salon, index) => (
              <SwiperSlide key={index}>
                <div className="group flex flex-col h-full justify-between rounded-xl overflow-hidden shadow-lg bg-surface-container-highest">
                  {/* Image with overlay */}
                  <div className="relative aspect-[4/5] overflow-hidden rounded-t-xl">
                    <img
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      src={salon.img}
                      alt={`Ảnh tiệm ${salon.name}`}
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                      <h3 className="text-white text-xl font-bold">{salon.name}</h3>
                      <p className="text-sm text-white/80 flex items-center gap-1 mt-1">
                        <MapPin className="w-4 h-4 text-white" /> {salon.location}
                      </p>
                    </div>
                  </div>

                  {/* Card content */}
                  <div className="p-4 flex flex-col gap-3">
                    <p className="text-on-surface-variant text-sm line-clamp-3">{salon.desc}</p>

                    {/* Badge / tag */}
                    <div className="flex gap-2 flex-wrap">
                      <span className="bg-primary/20 text-primary px-2 py-1 rounded-full text-xs font-medium">
                        {t("topSalonsSection.badges.topRated")}
                      </span>
                      <span className="bg-secondary/20 text-secondary px-2 py-1 rounded-full text-xs font-medium">
                        {t("topSalonsSection.badges.ecoFriendly")}
                      </span>
                    </div>

                    {/* Booking button */}
                    <button
                      onClick={() => navigate(`/detail-salon/${salon._id}`)}
                      className="mt-auto w-full bg-primary text-white py-3 rounded-lg font-medium hover:bg-primary/80 transition-colors flex items-center justify-center gap-2"
                    >
                      {t("topSalonsSection.buttons.booking")} <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <p className="text-center">No salons found.</p>
        )}
      </div>
    </section>
  );
}

export default TopSalons;