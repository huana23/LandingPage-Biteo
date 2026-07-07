import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import ScrollReveal from "../../ui/ScrollReveal";
import SectionTitle from "../../ui/SectionTitle";

function PhotoGallery() {
  const { t } = useTranslation();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "https://images.unsplash.com/photo-1587061949409-02df41d5e562?w=800&q=80",
    "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80",
    "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80",
    "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
    "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&q=80",
    "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&q=80",
    "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800&q=80",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
  ];

  useEffect(() => {
    if (lightboxOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightboxOpen]);

  const openLightbox = (idx) => {
    setCurrentIndex(idx);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const next = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prev = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const handleKey = (e) => {
      if (!lightboxOpen) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") setCurrentIndex((p) => (p + 1) % images.length);
      if (e.key === "ArrowLeft") setCurrentIndex((p) => (p - 1 + images.length) % images.length);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightboxOpen, images.length]);

  return (
    <section id="gallery" className="py-section-padding-mobile md:py-section-padding bg-surface">
      <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
        <ScrollReveal>
          <SectionTitle
            label={t("gallery-section.label")}
            title={t("gallery-section.title")}
            subtitle={t("gallery-section.subtitle")}
          />
        </ScrollReveal>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((src, idx) => (
            <ScrollReveal key={idx} delay={idx * 80}>
              <div
                onClick={() => openLightbox(idx)}
                className="group relative overflow-hidden rounded-2xl cursor-pointer break-inside-avoid"
              >
                <img
                  src={src}
                  alt={`Gallery ${idx + 1}`}
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4">
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors z-50"
          >
            <X className="w-8 h-8" />
          </button>

          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors hidden sm:flex items-center justify-center w-12 h-12 rounded-full bg-white/10 hover:bg-white/20"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors hidden sm:flex items-center justify-center w-12 h-12 rounded-full bg-white/10 hover:bg-white/20"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="max-w-5xl w-full">
            <img
              src={images[currentIndex]}
              alt={`Gallery ${currentIndex + 1}`}
              className="w-full max-h-[85vh] object-contain rounded-lg"
            />
            <div className="text-center mt-4 text-white/60 text-sm font-body">
              {currentIndex + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default PhotoGallery;
