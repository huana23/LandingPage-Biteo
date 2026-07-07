import { useTranslation } from "react-i18next";
import { Star } from "lucide-react";
import ScrollReveal from "../../ui/ScrollReveal";
import SectionTitle from "../../ui/SectionTitle";
import { Link } from "react-router-dom";

function FeaturedRooms() {
  const { t } = useTranslation();
  const rooms = t("rooms-section.rooms", { returnObjects: true }) || [];
  const amenitiesMap = t("rooms-section.amenities", { returnObjects: true }) || {};

  return (
    <section id="rooms" className="py-24 lg:py-32 bg-surface">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-10">
        <ScrollReveal>
          <SectionTitle
            label={t("rooms-section.label")}
            title={t("rooms-section.title")}
            subtitle={t("rooms-section.subtitle")}
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {rooms.map((room, idx) => {
            const roomAmenities = [
              room.size, room.guests, room.bed,
              amenitiesMap.wifi, amenitiesMap.ac, amenitiesMap.tv
            ].filter(Boolean);

            return (
              <ScrollReveal key={idx} delay={idx * 100}>
                <div className="group h-full flex flex-col bg-surface-container-lowest rounded-3xl overflow-hidden border border-outline-variant/10 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 hover:-translate-y-1">
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={room.image}
                      alt={room.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm">
                      <Star className="w-4 h-4 text-secondary fill-secondary" />
                      <span className="text-xs font-bold font-label text-on-surface">{room.rating}</span>
                      <span className="text-xs text-stone-400">({room.reviews})</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-headline font-bold text-on-surface leading-tight">
                        {room.name}
                      </h3>
                      <div className="text-right">
                        <span className="text-lg font-label font-bold text-primary">${room.price}</span>
                        <span className="text-xs text-stone-400 block">/ night</span>
                      </div>
                    </div>

                    <p className="text-sm text-on-surface-variant mb-4 line-clamp-2 leading-relaxed">
                      {room.description}
                    </p>

                    {/* Amenities */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {roomAmenities.slice(0, 4).map((a, i) => (
                        <span key={i} className="text-[10px] font-label uppercase tracking-widest bg-surface-container px-2.5 py-1 rounded-full text-stone-500 border border-outline-variant/20">
                          {a}
                        </span>
                      ))}
                    </div>

                    <div className="mt-auto">
                      <Link
                        to={`/detail-salon/${encodeURIComponent(room.name)}`}
                        className="block w-full text-center bg-primary hover:bg-primary/90 text-on-primary py-3.5 rounded-xl font-label text-sm uppercase tracking-widest font-bold transition-all hover:shadow-lg hover:shadow-primary/20"
                      >
                        Book Now
                      </Link>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FeaturedRooms;
