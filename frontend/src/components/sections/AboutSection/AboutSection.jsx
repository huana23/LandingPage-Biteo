import { useTranslation } from "react-i18next";
import { Heart, Mountain, Utensils, TreePine } from "lucide-react";
import ScrollReveal from "../../ui/ScrollReveal";
import SectionTitle from "../../ui/SectionTitle";

const iconMap = { Heart, Mountain, Utensils, TreePine };

function AboutSection() {
  const { t } = useTranslation();
  const items = t("about-section.whyUs", { returnObjects: true }) || [];

  return (
    <section className="py-24 lg:py-32 bg-surface-container-low">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-10">
        <ScrollReveal>
          <SectionTitle
            label={t("about-section.label")}
            title={t("about-section.title")}
            subtitle={t("about-section.description")}
          />
        </ScrollReveal>

        {/* Story Block */}
        <ScrollReveal delay={100}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1200&q=80"
                alt="Homestay interior"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-headline italic font-bold text-on-surface">
                {t("about-section.story")}
              </h3>
              <p className="text-on-surface-variant leading-relaxed font-body text-lg">
                {t("about-section.storyText")}
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Why Us */}
        <ScrollReveal delay={200}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {items.map((item, idx) => {
              const Icon = iconMap[item.icon] || Heart;
              return (
                <div
                  key={idx}
                  className="group bg-surface-container-lowest rounded-2xl p-8 border border-outline-variant/10 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 hover:-translate-y-1"
                >
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h4 className="text-xl font-headline font-bold text-on-surface mb-3">
                    {item.title}
                  </h4>
                  <p className="text-on-surface-variant text-sm leading-relaxed font-body">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

export default AboutSection;
