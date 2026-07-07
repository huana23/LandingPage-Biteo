import SectionTitle from '../../components/ui/SectionTitle';
import ScrollReveal from '../../components/ui/ScrollReveal';
import Button from '../../components/ui/Button';

const positions = [
  { title: 'Frontend Engineer', type: 'Toàn thời gian', location: 'Hà Nội / Remote' },
  { title: 'Product Designer', type: 'Toàn thời gian', location: 'Hà Nội' },
  { title: 'Marketing Executive', type: 'Hợp đồng / Toàn thời gian', location: 'TP.HCM' },
  { title: 'Customer Success', type: 'Toàn thời gian', location: 'Toàn quốc' },
];

function CareersPage() {
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
              label="Tuyển dụng"
              title="Cùng Biteo xây dựng trải nghiệm số tốt hơn"
              subtitle="Chúng tôi tìm kiếm người có cùng tầm nhìn, thích sáng tạo và thích đóng góp vào cộng đồng."
            />
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-white py-section-padding-mobile md:py-section-padding">
        <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
          <ScrollReveal>
            <SectionTitle title="Vị trí đang mở" subtitle="Khám phá cơ hội phù hợp với năng lực và định hướng của bạn." />
          </ScrollReveal>

          <div className="mt-10 grid grid-cols-1 gap-6">
            {positions.map((position, index) => (
              <ScrollReveal key={position.title} delay={index * 80}>
                <div className="glass-card flex flex-col gap-3 p-6 lg:flex-row lg:items-center lg:justify-between lg:p-8 rounded-3xl">
                  <div>
                    <h3 className="text-lg font-semibold text-text">{position.title}</h3>
                    <p className="text-sm text-subtext">{position.type} · {position.location}</p>
                  </div>
                  <Button variant="outline" href="/contact">Ứng tuyển</Button>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default CareersPage;
