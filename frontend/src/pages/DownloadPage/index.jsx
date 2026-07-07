import Button from '../../components/ui/Button';
import SectionTitle from '../../components/ui/SectionTitle';
import ScrollReveal from '../../components/ui/ScrollReveal';
import Accordion from '../../components/ui/Accordion';

const features = [
  'Video ngắn, ẩm thực, đi chợ hộ, du lịch và đặc sản trong một ứng dụng',
  'Giao hàng minh bạch và thanh toán an toàn',
  'Đặt bàn, đặt tour và đặt món dễ dàng',
  'Tiết kiệm thời gian và tối ưu trải nghiệm mua sắm',
];

const faqs = [
  { question: 'Ứng dụng có miễn phí không?', answer: 'Có. Tải và dùng miễn phí; một số dịch vụ có thể phát sinh phí theo từng đơn hàng.' },
  { question: 'Hệ điều hành nào được hỗ trợ?', answer: 'Hỗ trợ iOS và Android với phiên bản tương thích phổ biến.' },
];

function DownloadPage() {
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
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
                Tải ứng dụng
              </span>
              <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                Trải nghiệm <span className="text-primary">Biteo</span> mọi lúc, mọi nơi
              </h1>
              <p className="mt-6 max-w-xl text-subtext">
                Quét mã QR hoặc tải trực tiếp từ App Store / Google Play để bắt đầu.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button size="lg" href="#" className="w-full sm:w-auto">App Store</Button>
                <Button size="lg" variant="outline" href="#" className="w-full sm:w-auto">Google Play</Button>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={120} className="card-base flex items-center justify-center p-8 lg:p-10">
              <div className="h-64 w-64 rounded-3xl border border-border bg-white" />
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="bg-white py-section-padding-mobile md:py-section-padding">
        <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
          <ScrollReveal>
            <SectionTitle title="Tính năng nổi bật" subtitle="Những trải nghiệm chính bạn sẽ có trên ứng dụng Biteo." />
          </ScrollReveal>

          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
            {features.map((item, index) => (
              <ScrollReveal key={item} delay={index * 80}>
                <div className="card-base flex items-start gap-4 p-5 md:p-6">
                  <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                  <p className="text-subtext">{item}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-section-padding-mobile md:py-section-padding">
        <div className="mx-auto max-w-4xl px-margin-mobile md:px-margin-desktop">
          <ScrollReveal>
            <SectionTitle title="Câu hỏi thường gặp" subtitle="Những thắc mắc phổ biến về tải và sử dụng ứng dụng Biteo." />
          </ScrollReveal>
          <div className="mt-8">
            <Accordion items={faqs} />
          </div>
        </div>
      </section>
    </div>
  );
}

export default DownloadPage;
