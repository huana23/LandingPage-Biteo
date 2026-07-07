import { Link } from 'react-router-dom';
import { Zap, Shield, CreditCard, Headphones, Globe, Sparkles, CheckCircle2 } from 'lucide-react';
import ScrollReveal from '../../ui/ScrollReveal';

const features = [
  {
    icon: Zap,
    title: 'Một ứng dụng - Vạn tiện ích',
    description: 'Tích hợp nhiều dịch vụ thiết yếu trong một nền tảng duy nhất, tiết kiệm thời gian và chi phí cho bạn.',
    highlight: 'Tiết kiệm 70% thời gian',
  },
  {
    icon: Globe,
    title: 'Phủ sóng toàn quốc',
    description: 'Dịch vụ có mặt tại 63 tỉnh thành, sẵn sàng phục vụ mọi nhu cầu của bạn ở khắp Việt Nam.',
    highlight: '63 tỉnh thành',
  },
  {
    icon: CreditCard,
    title: 'Thanh toán linh hoạt',
    description: 'Hỗ trợ nhiều phương thức thanh toán an toàn: Tiền mặt, Chuyển khoản, Ví điện tử, QR Code.',
    highlight: '100+ phương thức',
  },
  {
    icon: Shield,
    title: 'Bảo mật tuyệt đối',
    description: 'Công nghệ mã hóa tiên tiến, bảo vệ thông tin cá nhân và giao dịch của bạn 24/7.',
    highlight: 'Mã hóa 256-bit',
  },
  {
    icon: Headphones,
    title: 'Hỗ trợ 24/7',
    description: 'Đội ngũ hỗ trợ chuyên nghiệp luôn sẵn sàng giải đáp thắc mắc mọi lúc, mọi nơi.',
    highlight: '60+ nhân viên',
  },
  {
    icon: Sparkles,
    title: 'Cập nhật liên tục',
    description: 'Ứng dụng được cải tiến mỗi ngày với các tính năng mới, mang đến trải nghiệm ngày càng tốt hơn.',
    highlight: 'Cập nhật hàng tuần',
  },
];

const whyChooseUs = [
  'Đặt hàng nhanh chóng chỉ trong 3 bước',
  'Giao hàng trong 30-60 phút',
  'Hoàn tiền 100% nếu không hài lòng',
  'Đội ngũ tài xế chuyên nghiệp',
  'Nhiều ưu đãi hấp dẫn mỗi ngày',
  'Tích hợp đa nền tảng: iOS & Android',
];

function FeatureCard({ feature, index }) {
  const Icon = feature.icon;
  
  return (
    <ScrollReveal delay={index * 100}>
      <div className="group relative p-6 lg:p-8 rounded-3xl bg-white border border-border/50 hover:border-primary/20 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5">
        {/* Icon */}
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 text-primary mb-6 group-hover:from-primary/20 group-hover:to-secondary/20 transition-all duration-300">
          <Icon className="w-7 h-7" />
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-text mb-3 group-hover:text-primary transition-colors">
          {feature.title}
        </h3>

        {/* Description */}
        <p className="text-body-sm text-subtext leading-relaxed mb-4">
          {feature.description}
        </p>

        {/* Highlight Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/5 text-primary text-label-md font-semibold">
          <CheckCircle2 className="w-4 h-4" />
          {feature.highlight}
        </div>

        {/* Hover Effect */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      </div>
    </ScrollReveal>
  );
}

function FeaturesSection() {
  return (
    <section className="py-section-padding-mobile md:py-section-padding bg-gradient-to-b from-white via-background to-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-secondary/5 rounded-full blur-[100px]" />

      <div className="relative mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-label-md font-semibold text-primary mb-4">
              <Zap className="w-4 h-4" />
              Tại sao chọn Biteo
            </span>
            <h2 className="text-headline-md md:text-headline-lg font-bold text-text mb-4">
              Trải nghiệm vượt trội
            </h2>
            <p className="text-body-md text-subtext max-w-2xl mx-auto">
              Biteo mang đến cho bạn những trải nghiệm tuyệt vời nhất với công nghệ hiện đại và dịch vụ tận tâm
            </p>
          </div>
        </ScrollReveal>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>

        {/* Why Choose Us Section */}
        <ScrollReveal delay={300}>
          <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Image/Illustration */}
            <div className="relative order-2 lg:order-1">
              <div className="relative aspect-square max-w-md mx-auto">
                {/* Background Circle */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full" />
                
                {/* Phone Mockup */}
                <div className="absolute inset-8 bg-white rounded-[40px] shadow-2xl shadow-primary/10 overflow-hidden border border-border">
                  <div className="h-8 bg-text flex items-center justify-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-white/30" />
                    <div className="w-2 h-2 rounded-full bg-white/30" />
                    <div className="w-2 h-2 rounded-full bg-white/30" />
                  </div>
                  <div className="p-4 space-y-3">
                    <div className="h-20 rounded-xl bg-gradient-to-r from-primary/20 to-primary/10" />
                    <div className="grid grid-cols-3 gap-2">
                      <div className="h-16 rounded-lg bg-primary/10" />
                      <div className="h-16 rounded-lg bg-secondary/10" />
                      <div className="h-16 rounded-lg bg-accent/20" />
                    </div>
                    <div className="h-12 rounded-lg bg-primary" />
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-lg p-3 animate-float">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">✓</span>
                    <span className="text-sm font-semibold">Thành công!</span>
                  </div>
                </div>

                <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-lg p-3 animate-float" style={{ animationDelay: '1s' }}>
                  <div className="flex items-center gap-2">
                    <span className="text-xl">🚀</span>
                    <span className="text-sm font-semibold">Siêu nhanh</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Content */}
            <div className="order-1 lg:order-2">
              <ScrollReveal>
                <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-label-md font-semibold text-primary mb-4">
                  <Sparkles className="w-4 h-4" />
                  Vì sao bạn nên chọn Biteo
                </span>
                <h2 className="text-headline-md md:text-headline-lg font-bold text-text mb-6">
                  Tiện lợi trong từng khoảnh khắc
                </h2>
              </ScrollReveal>

              <div className="space-y-4">
                {whyChooseUs.map((item, index) => (
                  <ScrollReveal key={index} delay={index * 80}>
                    <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-border/50 hover:border-primary/20 hover:shadow-lg transition-all duration-300">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <CheckCircle2 className="w-5 h-5 text-primary" />
                      </div>
                      <p className="text-body-sm font-medium text-text pt-1">{item}</p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>

              <ScrollReveal delay={600}>
                <div className="mt-8">
                  <Link 
                    to="/download"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-white font-semibold hover:bg-primary-dark transition-colors"
                  >
                    Trải nghiệm ngay
                    <Sparkles className="w-4 h-4" />
                  </Link>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

export default FeaturesSection;
