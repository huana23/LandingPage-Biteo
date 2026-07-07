import SectionTitle from '../../components/ui/SectionTitle';

const services = [
  { title: 'Video ngắn', description: 'Trải nghiệm nội dung giải trí sáng tạo, bắt kịp xu hướng mỗi ngày.', icon: 'play_circle', color: 'text-primary', href: '/services/short-video' },
  { title: 'Ẩm thực', description: 'Khám phá hàng ngàn món ngon từ các nhà hàng uy tín nhất.', icon: 'restaurant', color: 'text-orange-600', href: '/services/food' },
  { title: 'Đi chợ hộ', description: 'Thực phẩm tươi sống giao tận nhà chỉ trong tích tắc.', icon: 'shopping_cart', color: 'text-emerald-600', href: '/services/grocery' },
  { title: 'Du lịch', description: 'Đặt vé, phòng khách sạn và tour khám phá dễ dàng.', icon: 'flight_takeoff', color: 'text-sky-600', href: '/services/travel' },
  { title: 'Mua sắm', description: 'Sàn thương mại điện tử với hàng triệu sản phẩm chính hãng.', icon: 'local_mall', color: 'text-blue-600', href: '/services/local-shopping' },
  { title: 'Đặc sản', description: 'Kết nối tinh hoa nông sản từ khắp các vùng miền Việt Nam.', icon: 'eco', color: 'text-emerald-700', href: '/services/specialty' },
];

function ServicesPage() {
  return (
    <div>
      <section className="relative overflow-hidden bg-background">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-24 -right-24 h-[420px] w-[420px] rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-[360px] w-[360px] rounded-full bg-secondary/10 blur-3xl" />
        </div>

        <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop py-section-padding-mobile md:py-section-padding">
          <div className="text-center mb-16">
            <SectionTitle
              label="Dịch vụ"
              title="Dịch vụ đa dạng"
              subtitle="Giải pháp tích hợp cho mọi nhu cầu hàng ngày của bạn"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((item) => (
              <a key={item.title} href={item.href} className="group block">
                <div className="glass-card h-full p-6 lg:p-8 rounded-3xl group-hover:bg-primary/10 transition-all duration-300">
                  <div className={`w-12 h-12 lg:w-14 lg:h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 lg:mb-6 group-hover:scale-110 transition-transform ${item.color}`}>
                    <span className="material-symbols-outlined text-2xl lg:text-3xl">{item.icon}</span>
                  </div>
                  <h3 className="text-title-sm lg:text-title font-semibold text-text mb-2 lg:mb-3">{item.title}</h3>
                  <p className="text-body-sm text-subtext">{item.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default ServicesPage;
