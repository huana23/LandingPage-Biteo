import SectionTitle from '../../components/ui/SectionTitle';
import Accordion from '../../components/ui/Accordion';
import ScrollReveal from '../../components/ui/ScrollReveal';
import Button from '../../components/ui/Button';

const helpTopics = [
  { question: 'Tôi quên mật khẩu ứng dụng, phải làm sao?', answer: 'Sử dụng tính năng quên mật khẩu trên màn hình đăng nhập hoặc liên hệ support@biteo.vn để được hỗ trợ.' },
  { question: 'Làm sao để cập nhật thông tin tài khoản?', answer: 'Mở Cài đặt trong ứng dụng, chọn Thông tin tài khoản và chỉnh sửa theo nhu cầu.' },
  { question: 'Tôi muốn báo lỗi hoặc góp ý, liên hệ ở đâu?', answer: 'Bạn có thể gửi mẫu báo lỗi trong ứng dụng hoặc gửi email chi tiết cho Biteo.' },
];

function HelpPage() {
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
              label="Trung tâm trợ giúp"
              title="Chúng tôi sẵn sàng hỗ trợ bạn"
              subtitle="Tìm câu trả lời nhanh hoặc liên hệ đội ngũ hỗ trợ của Biteo khi bạn cần."
            />
          </ScrollReveal>
        </div>
      </section>

      <section className="py-section-padding-mobile md:py-section-padding">
        <div className="mx-auto max-w-4xl px-margin-mobile md:px-margin-desktop">
          <ScrollReveal>
            <Accordion items={helpTopics} />
          </ScrollReveal>
          <ScrollReveal className="mt-10">
            <div className="glass-card p-6 lg:p-8 rounded-3xl">
              <h3 className="text-lg font-semibold text-text">Liên hệ hỗ trợ</h3>
              <p className="mt-2 text-subtext">Nếu bạn không tìm thấy câu trả lời, hãy gửi email tới support@biteo.vn.</p>
              <div className="mt-4">
                <Button href="/contact">Liên hệ hỗ trợ</Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}

export default HelpPage;
