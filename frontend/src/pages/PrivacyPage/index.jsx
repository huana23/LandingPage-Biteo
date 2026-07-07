import SectionTitle from '../../components/ui/SectionTitle';
import ScrollReveal from '../../components/ui/ScrollReveal';

function PrivacyPage() {
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
              label="Chính sách"
              title="Chính sách bảo mật"
              subtitle="Nội dung này cung cấp thông tin tổng quan về cách Biteo thu thập, sử dụng và bảo vệ thông tin người dùng."
            />
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-white py-section-padding-mobile md:py-section-padding">
        <div className="mx-auto max-w-4xl px-margin-mobile md:px-margin-desktop">
          <ScrollReveal className="space-y-4 text-subtext">
            <p>Biteo cam kết bảo vệ thông tin cá nhân của người dùng theo quy định pháp luật hiện hành.</p>
            <p>Thông tin thu thập chủ yếu phục vụ vận hành dịch vụ, cải thiện trải nghiệm và liên lạc hỗ trợ khi cần thiết.</p>
            <p>Bạn có thể yêu cầu cập nhật, chỉnh sửa hoặc xóa thông tin bằng cách liên hệ đội ngũ hỗ trợ Biteo.</p>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}

export default PrivacyPage;
