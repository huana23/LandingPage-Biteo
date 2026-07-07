import Button from '../../components/ui/Button';
import SectionTitle from '../../components/ui/SectionTitle';
import ScrollReveal from '../../components/ui/ScrollReveal';

const benefits = [
  'Linh hoạt thời gian, phù hợp với nhiều nhóm đối tượng',
  'Hỗ trợ đào tạo và tài liệu hướng dẫn',
  'Cơ chế theo dõi thu nhập minh bạch',
  'Cơ hội thăng tiến theo mức hiệu quả',
  'Cộng đồng Cộng tác viên Biteo toàn quốc',
];

const incomeExamples = [
  { label: 'Linh hoạt', value: 'Tùy chỉnh khối lượng công việc theo khả năng cá nhân.' },
  { label: 'Theo hiệu quả', value: 'Thu nhập phụ thuộc vào kết quả thực tế, không cố định.' },
  { label: 'Hỗ trợ liên tục', value: 'Đội ngũ Biteo hỗ trợ kiểm tra và tối ưu quy trình.' },
];

function AffiliatesPage() {
  return (
    <div>
      <section className="relative overflow-hidden bg-background">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-24 -right-24 h-[420px] w-[420px] rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-[360px] w-[360px] rounded-full bg-secondary/10 blur-3xl" />
        </div>

        <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop py-section-padding-mobile md:py-section-padding">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            <ScrollReveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary mt-8 lg:mt-0">
                Cộng tác viên
              </span>
              <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                Tham gia mạng lưới <span className="text-primary">Cộng tác viên Biteo</span>
              </h1>
              <p className="mt-6 max-w-xl text-subtext">
                Kết nối cơ hội phù hợp với lịch trình cá nhân, tối ưu thời gian và mở rộng thu nhập minh bạch.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button size="lg" href="#register" className="w-full sm:w-auto">Đăng ký ngay</Button>
                <Button size="lg" variant="outline" href="/faq" className="w-full sm:w-auto">Xem chính sách</Button>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={120} className="glass-card p-6 lg:p-8 rounded-3xl">
              <h3 className="text-lg font-semibold text-text">Lợi ích chính</h3>
              <ul className="mt-4 space-y-3">
                {benefits.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-subtext">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="bg-white py-section-padding-mobile md:py-section-padding">
        <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
          <ScrollReveal>
            <SectionTitle
              title="Ví dụ minh họa"
              subtitle="Các ví dụ chỉ mang tính minh họa và không phải cam kết thu nhập cụ thể."
            />
          </ScrollReveal>

          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
            {incomeExamples.map((item, index) => (
              <ScrollReveal key={item.label} delay={index * 80}>
                <div className="glass-card p-5 md:p-6 rounded-3xl">
                  <p className="text-sm font-semibold text-primary">{item.label}</p>
                  <p className="mt-2 text-subtext">{item.value}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-section-padding-mobile md:py-section-padding">
        <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
          <ScrollReveal>
            <SectionTitle
              title="Quy trình đăng ký"
              subtitle="Tham gia mạng lưới Cộng tác viên Biteo với quy trình đăng ký đơn giản và rõ ràng."
            />
          </ScrollReveal>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {['Điền thông tin đăng ký', 'Đội ngũ xác minh hồ sơ', 'Học quy trình & bắt đầu', 'Theo dõi kết quả'].map((step, index) => (
              <ScrollReveal key={step} delay={index * 100}>
                <div className="glass-card p-5 md:p-6 rounded-3xl">
                  <span className="text-sm font-semibold text-primary">Bước {index + 1}</span>
                  <p className="mt-2 text-subtext">{step}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section id="register" className="bg-white py-section-padding-mobile md:py-section-padding">
        <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
          <ScrollReveal className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-text">Đăng ký Cộng tác viên Biteo</h2>
              <p className="mt-4 text-subtext">
                Điền thông tin để chúng tôi gửi hướng dẫn đăng ký chi tiết. Hồ sơ sẽ được xác minh trong 1-3 ngày làm việc.
              </p>
            </div>
            <div>
              <form className="grid grid-cols-1 gap-4" onSubmit={(event) => event.preventDefault()}>
                <input className="w-full rounded-2xl border border-border bg-white px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/10" placeholder="Họ và tên" required />
                <input className="w-full rounded-2xl border border-border bg-white px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/10" placeholder="Số điện thoại" required />
                <input className="w-full rounded-2xl border border-border bg-white px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/10" placeholder="Tỉnh/Thành phố" required />
                <textarea className="w-full rounded-2xl border border-border bg-white px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/10" placeholder="Giới thiệu ngắn về bạn" rows="3" />
                <Button type="submit" size="lg" className="w-full sm:w-auto">Gửi đăng ký</Button>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}

export default AffiliatesPage;
