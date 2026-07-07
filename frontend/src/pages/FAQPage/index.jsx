import SectionTitle from '../../components/ui/SectionTitle';
import Accordion from '../../components/ui/Accordion';
import ScrollReveal from '../../components/ui/ScrollReveal';
import Button from '../../components/ui/Button';

const userFaqs = [
  { question: 'Làm sao để tải ứng dụng Biteo?', answer: 'Bạn có thể tải trên App Store, Google Play hoặc quét mã QR tại trang Tải ứng dụng.' },
  { question: 'Biteo có hỗ trợ thanh toán khi nhận hàng không?', answer: 'Điều này tùy theo dịch vụ và khu vực. Chi tiết sẽ hiển thị rõ khi bạn đặt hàng.' },
];

const partnerFaqs = [
  { question: 'Làm sao để đăng ký đối tác?', answer: 'Truy cập trang Đối tác, điền thông tin và đội ngũ sẽ liên hệ hướng dẫn.' },
  { question: 'Phí dịch vụ cho đối tác là bao nhiêu?', answer: 'Chính sách phí được thông báo rõ trong quy trình đăng ký và đi kèm bảng giá minh bạch.' },
];

const affiliateFaqs = [
  { question: 'Ai có thể đăng ký Cộng tác viên?', answer: 'Người từ 18 tuổi trở lên, có nhu cầu làm thêm linh hoạt và có thể tham gia tại khu vực phủ sóng.' },
  { question: 'Thu nhập có cố định không?', answer: 'Không cố định. Thu nhập phụ thuộc vào kết quả thực tế và từng nhiệm vụ được giao.' },
];

const paymentFaqs = [
  { question: 'Biteo hỗ trợ những phương thức thanh toán nào?', answer: 'Hỗ trợ thanh toán trực tuyến phổ biến và một số lựa chọn theo khu vực.' },
  { question: 'Làm sao để hoàn tiền?', answer: 'Bạn có thể gửi yêu cầu qua mục Hỗ trợ trong ứng dụng hoặc email support@biteo.vn.' },
];

const appFaqs = [
  { question: 'Ứng dụng có miễn phí không?', answer: 'Có, tải và sử dụng cơ bản miễn phí. Một số dịch vụ có thể có phí theo từng đơn hàng.' },
  { question: 'Làm sao để báo lỗi?', answer: 'Sử dụng mục Báo lỗi trong ứng dụng hoặc gửi email chi tiết để đội ngũ xử lý nhanh hơn.' },
];

function FAQPage() {
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
              label="FAQ"
              title="Câu hỏi thường gặm"
              subtitle="Tìm câu trả lời nhanh về người dùng, đối tác, Cộng tác viên, thanh toán và ứng dụng Biteo."
            />
          </ScrollReveal>
        </div>
      </section>

      <section className="py-section-padding-mobile md:py-section-padding">
        <div className="mx-auto max-w-4xl px-margin-mobile md:px-margin-desktop space-y-10">
          <ScrollReveal>
            <h2 className="text-2xl font-bold text-text">Người dùng</h2>
            <div className="mt-4">
              <Accordion items={userFaqs} />
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="text-2xl font-bold text-text">Đối tác</h2>
            <div className="mt-4">
              <Accordion items={partnerFaqs} />
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="text-2xl font-bold text-text">Cộng tác viên</h2>
            <div className="mt-4">
              <Accordion items={affiliateFaqs} />
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="text-2xl font-bold text-text">Thanh toán</h2>
            <div className="mt-4">
              <Accordion items={paymentFaqs} />
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="text-2xl font-bold text-text">Ứng dụng</h2>
            <div className="mt-4">
              <Accordion items={appFaqs} />
            </div>
          </ScrollReveal>

          <ScrollReveal className="flex flex-wrap gap-4">
            <Button href="/contact">Liên hệ hỗ trợ</Button>
            <Button variant="outline" href="/help">Trung tâm trợ giúp</Button>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}

export default FAQPage;
