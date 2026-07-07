import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";

const cardImages = [
    {
        imgSrc: "https://i.pinimg.com/1200x/e7/95/f7/e795f7f41299b9e527a747b4e07c3e40.jpg",
        alt: "Detailed macro shot of modern chrome-finish nails on a hand holding a designer fragrance bottle in soft evening light",
        colSpan: 2,
        rowSpan: 2,
        overlayType: "gradient",
        titleKey: "trending-section.card.0.title",
        subtitleKey: "trending-section.card.0.subtitle",
    },
    {
        imgSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuBXbEz1RLxyM3ISXFAlrDxvDhKen7zjVdNMn_54hHITsPXmUtr2HGBRLdNbtsn5yKhbmpAwyeymiSrvi8l-wtT2kw8W-B1z29aT6bsDcdZ2MPPreH01gbZmbclg9d-f4fehWBEHNiKPUF9mHp6r9ukgUySEfA0MugRxv_WLPHO2R4Rh9QHyFeYZPr7eJSdBAEvBhoHoTkbVl4aLnEkQN5WzVdrjFC_c4LtFukC-52v9xE4dOdI_h9UBaoXyORjYXDK20WwmvTLfYt0X",
        alt: "Artistic manicure featuring tiny hand-painted floral motifs on a neutral base, aesthetic studio setting with warm beige tones",
        colSpan: 1,
        rowSpan: 1,
        overlayType: "solid",
        titleKey: "trending-section.card.1.title",
    },
    {
        imgSrc: "https://i.pinimg.com/1200x/5c/19/86/5c1986b1a0cb7637b2f505e2a0cd2f6e.jpg",
        alt: "High-end studio interior with velvet chairs, marble tables, and soft glowing pendant lights creating a luxury spa atmosphere",
        colSpan: 1,
        rowSpan: 1,
        overlayType: "solid",
        titleKey: "trending-section.card.2.title",
    },
    {
        imgSrc: "https://i.pinimg.com/1200x/a0/4f/c5/a04fc57cf89a002cbbf2e3c344de0357.jpg",
        alt: "Minimalist sheer nude manicure on elegant hands holding a linen towel, clean and sophisticated aesthetic with soft shadows",
        colSpan: 2,
        rowSpan: 1,
        overlayType: "gradient",
        titleKey: "trending-section.card.3.title",
    },
];

function TrendingStyles() {
    const { t } = useTranslation();

    return (
        <section className="py-24 px-6 lg:px-20 bg-surface-container-low">
            <div className="max-w-screen-2xl mx-auto">
                <div className="flex justify-between items-end mb-16">
                    <div>
                        <span className="font-label text-xs uppercase tracking-[0.2em] text-secondary mb-2 block">
                            {t("trending-section.trending")}
                        </span>
                        <h2 className="text-4xl font-headline italic font-bold">
                            {t("trending-section.seasonalArt")}
                        </h2>
                    </div>
                    <a
                        className="flex items-center gap-2 text-primary font-medium border-b border-primary/30 pb-1"
                        href="#"
                    >
                        {t("trending-section.seeMore")}
                        <ArrowRight className="w-4 h-4" />
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 h-[700px]">
                    {cardImages.map((card, index) => {
                        // Xử lý class col-span, row-span để Tailwind nhận
                        const colSpanClass = card.colSpan === 2 ? "md:col-span-2" : "md:col-span-1";
                        const rowSpanClass = card.rowSpan === 2 ? "md:row-span-2" : "md:row-span-1";

                        // Xử lý text size
                        let textSizeClass = "text-xl";
                        if (card.rowSpan === 2) textSizeClass = "text-3xl";
                        else if (card.rowSpan === 1 && card.colSpan === 2) textSizeClass = "text-2xl";

                        return (
                            <div
                                key={index}
                                className={`relative group overflow-hidden rounded-xl bg-surface-container-highest ${colSpanClass} ${rowSpanClass}`}
                            >
                                <img
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    src={card.imgSrc}
                                    alt={card.alt}
                                />

                                {card.overlayType === "gradient" ? (
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                ) : (
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
                                )}

                                <div className="absolute bottom-8 left-8 text-white">
                                    {card.subtitleKey && (
                                        <span className="font-label text-[10px] uppercase tracking-widest bg-white/20 backdrop-blur-md px-3 py-1 rounded-full mb-3 inline-block">
                                            {t(card.subtitleKey)}
                                        </span>
                                    )}
                                    <h3 className={`${textSizeClass} font-headline italic`}>
                                        {t(card.titleKey)}
                                    </h3>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default TrendingStyles;