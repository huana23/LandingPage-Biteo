import LocationFilter from "./LocationFilter"
import ServicesFilter from "./ServicesFilter"
import PriceRangeFilter from "./PriceRangeFilter"
import RatingFilter from "./RatingFilter"
import AmenitiesFilter from "./AmenitiesFilter"


import { useTranslation } from "react-i18next";



function SideBar() {

  const { t } = useTranslation();


  return (
    <aside className="lg:col-span-3 space-y-10">
      <div>
        <h3 className="font-serif italic text-xl text-primary mb-6">
          {t("pageAllSalons.sideBar.title")}
        </h3>
        <div className="space-y-8">
          {/* Địa điểm */}
          <LocationFilter />
          {/* Dịch vụ */}
          <ServicesFilter />

          {/* Khoảng giá */}
          <PriceRangeFilter />

          {/* Xếp hạng khách hàng */}
          <RatingFilter />

          {/* Tiện ích không gian */}
          <AmenitiesFilter />
        </div>
      </div>

      {/* Quote & image */}
      <div className="p-6 bg-primary-container/20 rounded-xl border border-primary/10">
        <p className="text-sm italic font-serif text-on-primary-container mb-4 text-center">
          "{t("pageAllSalons.sideBar.quote")}"
          
        </p>
        <img
          className="w-full h-32 object-cover rounded-lg"
          alt="close up of elegant hands holding a luxury nail polish bottle, soft natural light, minimalist aesthetic"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmGl8hhYUVywIwA1IPRmL0qKT3jbk5Ff58kjwlChQ0wo9laGdM8bBv-i-My3oJZhuOb70Ot3LP_Ksv-YLRkW8tCxFVy6HBx3DrymMwR3JNi-o-fEgrH1-WSk9ttQewCQRAw7YI7vvCPs_JRX9aBJNSb2jfy99si9M32mGB_hz3Ka7f20ugmsn0cvUaN4gSIbzsoRT4261_JY-jbleknEDgyUFWjYG7x9Z_kuLmNa54QHzDoRQ37Loh_jnTucaHkLw7OWUYrpov2UST"
        />
      </div>
    </aside>
  );
}

export default SideBar;