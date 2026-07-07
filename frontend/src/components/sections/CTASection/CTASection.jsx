import { Link } from 'react-router-dom';
import { User, Store, Handshake, ArrowRight } from 'lucide-react';
import ScrollReveal from '../../ui/ScrollReveal';

const userTypes = [
  {
    id: 'user',
    title: 'Người dùng',
    subtitle: 'Trải nghiệm ngay',
    description: 'Khám phá hàng ngàn dịch vụ tiện ích trong tầm tay',
    icon: User,
    href: '/download',
    color: 'from-primary to-green-400',
    hoverBg: 'hover:bg-primary',
    hoverText: 'hover:text-white',
    isPrimary: true,
  },
  {
    id: 'partner',
    title: 'Đối tác',
    subtitle: 'Kinh doanh cùng Biteo',
    description: 'Mở rộng thị trường, gia tăng doanh thu hiệu quả',
    icon: Store,
    href: '/partners',
    color: 'from-blue-500 to-cyan-400',
    hoverBg: 'hover:bg-blue-500',
    hoverText: 'hover:text-white',
    isPrimary: false,
  },
  {
    id: 'affiliate',
    title: 'Cộng tác viên',
    subtitle: 'Gia tăng thu nhập',
    description: 'Cơ hội kiếm thêm thu nhập không giới hạn',
    icon: Handshake,
    href: '/affiliates',
    color: 'from-purple-500 to-pink-400',
    hoverBg: 'hover:bg-purple-500',
    hoverText: 'hover:text-white',
    isPrimary: false,
  },
];

function CTACard({ type, index }) {
  const Icon = type.icon;
  
  return (
    <ScrollReveal delay={index * 150}>
      <Link
        to={type.href}
        className={`group relative flex flex-col items-start p-6 lg:p-8 rounded-3xl transition-all duration-500 ${
          type.isPrimary 
            ? 'bg-primary text-white shadow-xl shadow-primary/25 hover:shadow-2xl hover:shadow-primary/30' 
            : 'bg-white border border-border hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10'
        }`}
      >
        {/* Background Gradient */}
        <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${type.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
        
        {/* Content */}
        <div className="relative z-10 w-full">
          {/* Icon */}
          <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 transition-all duration-300 group-hover:scale-110 ${
            type.isPrimary 
              ? 'bg-white/20 text-white' 
              : 'bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white'
          }`}>
            <Icon className="w-8 h-8" />
          </div>

          {/* Title & Subtitle */}
          <div className="mb-3">
            <h3 className={`text-xl font-bold mb-1 ${type.isPrimary ? 'text-white' : 'text-text group-hover:text-primary'} transition-colors`}>
              {type.title}
            </h3>
            <p className={`text-sm font-medium ${type.isPrimary ? 'text-white/80' : 'text-subtext'}`}>
              {type.subtitle}
            </p>
          </div>

          {/* Description */}
          <p className={`text-sm leading-relaxed mb-6 ${type.isPrimary ? 'text-white/70' : 'text-subtext'}`}>
            {type.description}
          </p>

          {/* Arrow */}
          <div className={`inline-flex items-center gap-2 text-sm font-semibold transition-all duration-300 ${
            type.isPrimary 
              ? 'text-white' 
              : 'text-primary'
          } group-hover:gap-4`}>
            <span>Khám phá ngay</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </div>
        </div>

        {/* Decorative Elements */}
        <div className={`absolute -top-4 -right-4 w-24 h-24 rounded-full opacity-10 ${
          type.isPrimary ? 'bg-white' : 'bg-primary'
        } blur-2xl`} />
      </Link>
    </ScrollReveal>
  );
}

function CTASection() {
  return (
    <section className="py-section-padding-mobile md:py-section-padding bg-background relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
        <div className="relative overflow-hidden rounded-[40px] bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 p-8 md:p-16">
          {/* Decorative Background Pattern */}
          <div className="absolute inset-0 opacity-[0.03]">
            <div 
              className="absolute inset-0" 
              style={{
                backgroundImage: `repeating-linear-gradient(45deg, #000 0, #000 1px, transparent 0, transparent 50%), repeating-linear-gradient(-45deg, #000 0, #000 1px, transparent 0, transparent 50%)`,
                backgroundSize: '20px 20px'
              }}
            />
          </div>

          {/* Skewed Side Decoration */}
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent -skew-x-12 translate-x-20 pointer-events-none" />

          <div className="relative z-10">
            {/* Section Header */}
            <ScrollReveal>
              <div className="max-w-2xl mb-12">
                <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-label-md font-semibold text-primary mb-4">
                  <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                  Bắt đầu ngay hôm nay
                </span>
                <h2 className="text-headline-md md:text-headline-lg font-bold text-text mb-4">
                  Gia nhập hệ sinh thái Biteo ngay hôm nay
                </h2>
                <p className="text-body-md text-subtext leading-relaxed">
                  Dù bạn là khách hàng, chủ doanh nghiệp hay muốn trở thành cộng tác viên, 
                  Biteo luôn có cơ hội dành cho bạn. Tham gia ngay để trải nghiệm và khám phá!
                </p>
              </div>
            </ScrollReveal>

            {/* CTA Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {userTypes.map((type, index) => (
                <CTACard key={type.id} type={type} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTASection;
