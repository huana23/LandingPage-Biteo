import React from "react";
import { useTranslation } from "react-i18next";




function LatestReviews() {
    const { t } = useTranslation();
    const reviews = [
        {
            stars: 5,
            text: t("latestReviews-section.reviews.0.text"),
            initials: t("latestReviews-section.reviews.0.initials"),
            name: t("latestReviews-section.reviews.0.name"),
            bg: "bg-primary-fixed",
            textColor: "text-on-primary-fixed",
        },
        {
            stars: 5,
            text: t("latestReviews-section.reviews.1.text"),
            initials: t("latestReviews-section.reviews.1.initials"),
            name:  t("latestReviews-section.reviews.1.name"),
            bg: "bg-secondary-fixed",
            textColor: "text-on-secondary-fixed",
        },
        {
            stars: 5,
            text: t("latestReviews-section.reviews.2.text"),
            initials: t("latestReviews-section.reviews.2.initials"),
            name:  t("latestReviews-section.reviews.2.name"),
            bg: "bg-tertiary-fixed",
            textColor: "text-on-tertiary-fixed",
        },
        {
            stars: 4,
            text: t("latestReviews-section.reviews.3.text"),
            initials: t("latestReviews-section.reviews.3.initials"),
            name:  t("latestReviews-section.reviews.3.name"),
            bg: "bg-primary-fixed-dim",
            textColor: "text-on-primary-fixed-variant",
        },
    ];
    return (
        <section className="py-24 px-6 lg:px-20">
            <div className="max-w-screen-2xl mx-auto">
                <div className="mb-16">
                    <span className="font-label text-xs uppercase tracking-[0.2em] text-secondary mb-2 block">
                        {t("latestReviews-section.label")}
                    </span>
                    <h2 className="text-4xl font-headline italic font-bold">{t("latestReviews-section.title")}</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {reviews.map((r, idx) => (
                        <div
                            key={idx}
                            className="flex flex-col h-full bg-surface-container-lowest p-8 rounded-xl editorial-shadow border border-outline-variant/10"
                        >
                            {/* Star Rating */}
                            <div className="flex items-center gap-1 mb-4">
                                {Array(r.stars)
                                    .fill(0)
                                    .map((_, i) => (
                                        <span key={i} className="material-symbols-outlined text-secondary text-sm">
                                            star
                                        </span>
                                    ))}
                                {r.stars < 5 &&
                                    Array(5 - r.stars)
                                        .fill(0)
                                        .map((_, i) => (
                                            <span key={i} className="material-symbols-outlined text-secondary text-sm">
                                                star_border
                                            </span>
                                        ))}
                            </div>

                            {/* Review Text */}
                            <p className="font-body text-sm italic text-on-surface-variant mb-8 leading-relaxed">{r.text}</p>

                            {/* Reviewer Info */}
                            <div className="flex items-center gap-4 mt-auto">
                                <div className={`w-10 h-10 rounded-full ${r.bg} flex items-center justify-center font-bold ${r.textColor} text-xs`}>
                                    {r.initials}
                                </div>
                                <div>
                                    <h4 className="text-xs font-bold font-body">{r.name}</h4>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default LatestReviews;