import { useTranslation } from "react-i18next";
import { MapPin, Plane, Car as CarIcon } from "lucide-react";
import ScrollReveal from "../../ui/ScrollReveal";
import SectionTitle from "../../ui/SectionTitle";

function LocationSection() {
  const { t } = useTranslation();
  const nearby = t("location-section.nearby", { returnObjects: true }) || {};
  const airport = t("location-section.airport", { returnObjects: true }) || {};
  const cityCenter = t("location-section.cityCenter", { returnObjects: true }) || {};

  return (
    <section id="location" className="py-section-padding-mobile md:py-section-padding bg-surface">
      <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
        <ScrollReveal>
          <SectionTitle
            label={t("location-section.label")}
            title={t("location-section.title")}
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Map */}
          <ScrollReveal delay={100}>
            <div className="rounded-3xl overflow-hidden aspect-[4/3] bg-surface-container-lowest border border-outline-variant/10">
              <iframe
                title="Serenity Homestay Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.096709328257!2d103.842293315!3d21.029693985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDAwJzQ4LjQiTiAxMDLCsDUwJzM2LjMiRQ!5e0!3m2!1sen!2s!4v1690000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </ScrollReveal>

          {/* Info */}
          <div className="space-y-8">
            <ScrollReveal delay={150}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-headline font-bold text-on-surface mb-1">Address</h3>
                  <p className="text-stone-600 font-body">{t("location-section.address")}</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="bg-surface-container-lowest rounded-2xl p-6 border border-outline-variant/10">
                <h4 className="text-sm font-label uppercase tracking-widest text-secondary mb-4 font-bold">
                  {nearby.title}
                </h4>
                <div className="space-y-4">
                  {[
                    { name: nearby.fansipan, dist: nearby.fansipanDist },
                    { name: nearby.taPhin, dist: nearby.taPhinDist },
                    { name: nearby.catCat, dist: nearby.catCatDist },
                    { name: nearby.market, dist: nearby.marketDist },
                  ].map((item, i) => (
                    <div key={i} className="flex justify-between items-center text-sm">
                      <span className="text-on-surface font-medium">{item.name}</span>
                      <span className="text-stone-500 font-label">{item.dist}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={250}>
              <div className="bg-surface-container-lowest rounded-2xl p-6 border border-outline-variant/10">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Plane className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-on-surface mb-1">{airport.name}</h4>
                    <p className="text-xs text-stone-500 mb-2">{airport.distance} · {airport.duration}</p>
                    <p className="text-xs text-stone-500 italic">{airport.note}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 mt-4 pt-4 border-t border-outline-variant/10">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <CarIcon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-on-surface mb-1">{cityCenter.name}</h4>
                    <p className="text-xs text-stone-500">{cityCenter.distance} · {cityCenter.duration}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LocationSection;
