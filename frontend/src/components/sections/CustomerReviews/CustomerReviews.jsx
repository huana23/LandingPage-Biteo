import { useTranslation } from "react-i18next";
import { Star, Quote } from "lucide-react";
import ScrollReveal from "../../ui/ScrollReveal";
import SectionTitle from "../../ui/SectionTitle";

function CustomerReviews() {
  const { t } = useTranslation();
  const reviews = t("reviews-section.reviews", { returnObjects: true }) || [];

  return (
    <section id="reviews" className="py-section-padding-mobile md:py-section-padding bg-surface-container-low">
      <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
        <ScrollReveal>
          <SectionTitle
            label={t("reviews-section.label")}
            title={t("reviews-section.title")}
            subtitle={t("reviews-section.subtitle")}
          />
        </ScrollReveal>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reviews.map((review, idx) => (
            <ScrollReveal key={idx} delay={idx * 100}>
              <div className="h-full flex flex-col bg-surface-container-lowest rounded-2xl p-8 border border-outline-variant/10 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 hover:-translate-y-1">
                <Quote className="w-8 h-8 text-primary/30 mb-4" />

                {/* Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < review.rating ? "text-secondary fill-secondary" : "text-stone-300"}`}
                    />
                  ))}
                </div>

                {/* Text */}
                <p className="text-sm text-on-surface-variant leading-relaxed mb-6 flex-1 italic font-body">
                  &ldquo;{review.text}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-outline-variant/10">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-xs font-bold text-primary">{review.avatar}</span>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-on-surface">{review.name}</h4>
                    <p className="text-xs text-stone-500">{review.country}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CustomerReviews;
