import SectionTitle from '../../components/ui/SectionTitle';
import ScrollReveal from '../../components/ui/ScrollReveal';

function TermsPage() {
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
              title="Điều khoản sử dụng"
              subtitle="Nội dung này cung cấp thông tin tổng quan về điều khoản sử dụng dịch vụ Biteo."
            />
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-white py-section-padding-mobile md:py-section-padding">
        <div className="mx-auto max-w-4xl px-margin-mobile md:px-margin-desktop">
          <ScrollReveal className="space-y-4 text-subtext">
            <p>Đây là trang Điều khoản sử dụng. Bạn có thể thay thế nội dung này bằng chính sách thực tế của công ty.</p>
            <p>Người dùng cần tuân thủ quy định khi sử dụng dịch vụ Biteo, bảo vệ thông tin tài khoản và không thực hiện các hành vi gây ảnh hưởng đến cộng đồng.</p>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}

export default TermsPage;
