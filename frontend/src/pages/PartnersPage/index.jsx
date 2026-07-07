import Button from '../../components/ui/Button';
import SectionTitle from '../../components/ui/SectionTitle';
import ScrollReveal from '../../components/ui/ScrollReveal';

const partnerTypes = [
  { title: 'Nhà hàng', description: 'Kết nối với hàng nghìn người dùng và tăng doanh thu trực tuyến.' },
  { title: 'Cafe & Quán ăn', description: 'Quản lý đơn hàng, đặt bàn và xây dựng thương hiệu trên nền tảng số.' },
  { title: 'Tạp hóa & Siêu thị', description: 'Mở rộng kênh bán hàng và tối ưu vận hành với hệ thống Biteo.' },
  { title: 'Đặc sản & Homestay', description: 'Tiếp cận khách du lịch và người dùng địa phương một cách hiệu quả.' },
];

const benefits = [
  'Tiếp cận hàng triệu người dùng tiềm năng',
  'Công cụ quản lý đơn hàng và đặt bàn',
  'Hỗ trợ marketing và vận hành',
  'Chính sách thanh toán rõ ràng',
  'Báo cáo hiệu quả kinh doanh',
];

function PartnersPage() {
  return (
    <div>
      <section className="relative overflow-hidden bg-background">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-24 -right-24 h-[420px] w-[420px] rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-[360px] w-[360px] rounded-full bg-secondary/10 blur-3xl" />
        </div>

        <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop py-section-padding-mobile md:py-section-padding">
          <ScrollReveal>
            <SectionTitle
              label="Đối tác"
              title="Phát triển kinh doanh cùng Biteo"
              subtitle="Đăng ký đối tác để tiếp cận người dùng trên toàn quốc và tối ưu doanh thu trực tuyến."
            />
          </ScrollReveal>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {partnerTypes.map((item, index) => (
              <ScrollReveal key={item.title} delay={index * 80}>
                <div className="glass-card p-6 lg:p-8 rounded-[24px]">
                  <h3 className="text-lg font-semibold text-text">{item.title}</h3>
                  <p className="mt-2 text-subtext">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            <ScrollReveal className="glass-card p-6 lg:p-8 rounded-3xl">
              <h3 className="text-lg font-semibold text-text">Lợi ích khi trở thành đối tác</h3>
              <ul className="mt-4 grid grid-cols-1 gap-3">
                {benefits.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-subtext">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <Button href="/contact">Đăng ký đối tác</Button>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={120} className="glass-card p-6 lg:p-8 rounded-3xl">
              <h3 className="text-lg font-semibold text-text">Quy trình hợp tác</h3>
              <ol className="mt-4 space-y-3 text-subtext">
                <li>1. Đăng ký thông tin đối tác</li>
                <li>2. Đội ngũ Biteo xác minh hồ sơ</li>
                <li>3. Tích hợp cửa hàng / dịch vụ lên nền tảng</li>
                <li>4. Vận hành và tối ưu doanh thu cùng Biteo</li>
              </ol>
              <div className="mt-6">
                <Button variant="outline" href="/contact">Trao đổi với đội ngũ</Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PartnersPage;
