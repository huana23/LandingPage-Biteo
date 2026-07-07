import { useParams } from "react-router-dom";
import { useMemo } from "react";

const STATIC_DESTINATIONS = [
  {
    _id: "1",
    name: "Sapa Valley Retreat",
    website: "A cozy mountain cabin with panoramic valley views, perfect for couples and small families seeking tranquility.",
    imgStore: "https://images.unsplash.com/photo-1587061949409-02df41d5e562?w=1200&q=80",
    city: "Lao Cai",
    state: "Vietnam",
    btnBooking: "#booking",
  },
  {
    _id: "2",
    name: "Hoi An Riverside Homestay",
    website: "Traditional Vietnamese house by the river, offering a peaceful and cultural stay in the old town.",
    imgStore: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1200&q=80",
    city: "Quang Nam",
    state: "Vietnam",
    btnBooking: "#booking",
  },
  {
    _id: "3",
    name: "Ha Long Bay View Villa",
    website: "Luxury villa overlooking the iconic karst landscape of Ha Long Bay with private balcony and modern amenities.",
    imgStore: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1200&q=80",
    city: "Quang Ninh",
    state: "Vietnam",
    btnBooking: "#booking",
  },
  {
    _id: "4",
    name: "Dalat Pine Forest Room",
    website: "A quiet room surrounded by pine trees and fresh mountain air in the romantic city of flowers.",
    imgStore: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=80",
    city: "Lam Dong",
    state: "Vietnam",
    btnBooking: "#booking",
  },
  {
    _id: "5",
    name: "Phu Quoc Beach Bungalow",
    website: "Beachfront bungalow steps away from white sand beaches and the clearest water in Vietnam.",
    imgStore: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200&q=80",
    city: "Kien Giang",
    state: "Vietnam",
    btnBooking: "#booking",
  },
  {
    _id: "6",
    name: "Hue Imperial Garden Stay",
    website: "A historic garden house near the Citadel, blending royal heritage with modern comfort and hospitality.",
    imgStore: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=1200&q=80",
    city: "Thua Thien Hue",
    state: "Vietnam",
    btnBooking: "#booking",
  },
  {
    _id: "7",
    name: "Ninh Binh Eco Lodge",
    website: "Eco-friendly lodge nestled in limestone mountains and endless rice paddies of Ninh Binh.",
    imgStore: "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=1200&q=80",
    city: "Ninh Binh",
    state: "Vietnam",
    btnBooking: "#booking",
  },
  {
    _id: "8",
    name: "Mai Chau Valley House",
    website: "A traditional stilt house in the lush valley, ideal for experiencing local Thai culture and nature.",
    imgStore: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
    city: "Hoa Binh",
    state: "Vietnam",
    btnBooking: "#booking",
  },
  {
    _id: "9",
    name: "Con Dao Seaside Room",
    website: "A pristine island getaway with crystal clear water, coral reefs, and quiet sandy beaches.",
    imgStore: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=1200&q=80",
    city: "Ba Ria Vung Tau",
    state: "Vietnam",
    btnBooking: "#booking",
  },
];

function DetailSalon() {
  const { shopId } = useParams();

  const salon = useMemo(() => {
    if (!shopId) return null;
    const decoded = decodeURIComponent(shopId);
    return (
      STATIC_DESTINATIONS.find((item) => item.name === decoded) ||
      STATIC_DESTINATIONS.find((item) => item._id === decoded) ||
      null
    );
  }, [shopId]);

  if (!salon) {
    return <p className="text-center py-20">Destination not found.</p>;
  }

  return (
    <section className="px-margin-mobile md:px-margin-desktop py-8 space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="col-span-1 lg:col-span-4 flex flex-col justify-center space-y-6 py-8">
          <div>
            <span className="font-label uppercase tracking-[0.2em] text-xs text-primary font-bold mb-3 inline-block">
              Premium Stay
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-headline font-bold -tracking-tight text-on-surface">
              {salon.name}
            </h1>
          </div>
          <p className="text-on-surface-variant font-body leading-relaxed text-base md:text-lg max-w-md">
            {salon.website}
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href={salon.btnBooking || "#booking"}
              className="bg-primary text-on-primary px-6 md:px-8 py-3 rounded-full font-label text-sm uppercase tracking-wider hover:opacity-90 transition-all"
            >
              Book Now
            </a>
            <button className="border border-outline text-on-surface px-6 md:px-8 py-3 rounded-full font-label text-sm uppercase tracking-wider hover:bg-surface-container transition-all">
              View Details
            </button>
          </div>
        </div>

        <div className="col-span-1 lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4 h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
          <div className="h-full relative overflow-hidden rounded-2xl md:rounded-xl group">
            <img
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              src={salon.imgStore}
              alt={`${salon.name} photo`}
            />
          </div>
          <div className="hidden md:flex flex-col gap-4 h-full">
            <div className="h-full overflow-hidden rounded-xl group">
              <img
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                src={salon.imgStore}
                alt={`${salon.name} photo`}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DetailSalon;