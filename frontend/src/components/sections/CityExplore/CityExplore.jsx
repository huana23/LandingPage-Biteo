import { useTranslation } from "react-i18next";


function CityExplore() {
    const { t } = useTranslation();

    return (
        <section className="py-24 px-6 lg:px-20 bg-surface-container">
            <div className="max-w-screen-2xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
                <div className="lg:w-1/3">
                    <h2 className="text-5xl font-headline italic font-bold mb-6">{t("city-explore-section.title")}</h2>
                    <p className="text-on-surface-variant mb-10 leading-relaxed">{t("city-explore-section.description")}</p>
                    <div className="grid grid-cols-2 gap-4">
                        <button className="px-6 py-4 rounded-xl bg-surface text-on-surface font-label text-xs uppercase tracking-widest text-left hover:bg-primary hover:text-on-primary transition-all border border-outline-variant/20">{t("city-explore-section.cities.sydney")}</button>
                        <button className="px-6 py-4 rounded-xl bg-surface text-on-surface font-label text-xs uppercase tracking-widest text-left hover:bg-primary hover:text-on-primary transition-all border border-outline-variant/20">{t("city-explore-section.cities.melbourne")}</button>
                        <button className="px-6 py-4 rounded-xl bg-surface text-on-surface font-label text-xs uppercase tracking-widest text-left hover:bg-primary hover:text-on-primary transition-all border border-outline-variant/20">{t("city-explore-section.cities.brisbane")}</button>
                        <button className="px-6 py-4 rounded-xl bg-surface text-on-surface font-label text-xs uppercase tracking-widest text-left hover:bg-primary hover:text-on-primary transition-all border border-outline-variant/20">{t("city-explore-section.cities.perth")}</button>
                        <button className="px-6 py-4 rounded-xl bg-surface text-on-surface font-label text-xs uppercase tracking-widest text-left hover:bg-primary hover:text-on-primary transition-all border border-outline-variant/20">{t("city-explore-section.cities.adelaide")}</button>
                        <button className="px-6 py-4 rounded-xl bg-surface text-on-surface font-label text-xs uppercase tracking-widest text-left hover:bg-primary hover:text-on-primary transition-all border border-outline-variant/20">{t("city-explore-section.cities.goldCoast")}</button>
                    </div>
                </div>
                <div className="lg:w-2/3 grid grid-cols-2 gap-6 w-full">
                    <div className="bg-surface-container-highest rounded-2xl h-80 overflow-hidden relative editorial-shadow" data-location="Melbourne" >
                        <img className="w-full h-full object-cover" data-alt="Stylized map showing premium salon locations in Melbourne with elegant gold icons and minimalist urban layout" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQi2ulYdd-UkPgVltgYeGe-pK5t22MepNy1Np1g-VyJpKqv7cSP1RlBQZBpq3sCwUSWn9Ouus4zgtL0iBygFXrZalRbBVSwCxKGRfhI9ZqPbSTmhCy0tuTGKfcZnALfwTGOhszaOZ8pgi8j2uQm19fDw_8GJ_xr_ce0SmO__lPGB437W1W0UP8yCIEIsYGBESW_quwOpGcpKpX0mfka64QVus77ZP5AvgT0130_jHa9m9jCUOeXRl3mvFfpAkmV8xjKIBiJewNDaaU" />
                        <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
                        <div className="absolute bottom-6 left-6 text-white font-headline text-2xl italic">{t("city-explore-section.hubs.melbourne")}</div>
                    </div>
                    <div className="bg-surface-container-highest rounded-2xl h-80 overflow-hidden relative editorial-shadow" data-location="Sydney" >
                        <img className="w-full h-full object-cover" data-alt="Scenic view of Sydney Harbour at sunset, soft pink and orange hues matching the brand's primary color palette" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAWnQCg7pSA9D3hFiSIzHYMDJe1c1_HqzgFNNPzehSM0ZTZR5A8gTmE6ffJNhG9AhhNTdGCbezSeLXsnpS4k1uB2rFwXqHmcBMjSptXVa24Iu0reDpdlY88Myp89n4tsn1Sk9C98nIhzrdQWzVG8NZuEMNPuvYfzxKkkVLHiwXr4kRHs2sojUsRjjG58rXwGtSUkpYzavKyqoFeROeiXqdScuzred9T4OrKLO22Aee5VD-YdQ3QJT7wGHVsh-6L45isgptm0ZU6mmuD" />
                        <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
                        <div className="absolute bottom-6 left-6 text-white font-headline text-2xl italic">{t("city-explore-section.hubs.sydney")}</div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CityExplore;