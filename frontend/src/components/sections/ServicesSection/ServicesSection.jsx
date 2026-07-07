import { Link } from 'react-router-dom';
import { ArrowRight, Play, Utensils, ShoppingCart, Plane, ShoppingBag, Leaf } from 'lucide-react';
import ScrollReveal from '../../ui/ScrollReveal';
import SectionTitle from '../../ui/SectionTitle';

const services = [
  {
    id: 1,
    title: 'Video ngắn',
    description: 'Trải nghiệm nội dung giải trí sáng tạo, bắt kịp xu hướng mỗi ngày.',
    icon: Play,
    href: '/services/short-video',
    color: 'from-pink-500 to-rose-500',
    bgColor: 'bg-rose-50',
    hoverBg: 'hover:bg-rose-50',
    iconBg: 'bg-rose-100 text-rose-500',
  },
  {
    id: 2,
    title: 'Ẩm thực',
    description: 'Khám phá hàng ngàn món ngon từ các nhà hàng uy tín nhất.',
    icon: Utensils,
    href: '/services/food',
    color: 'from-orange-500 to-amber-500',
    bgColor: 'bg-orange-50',
    hoverBg: 'hover:bg-orange-50',
    iconBg: 'bg-orange-100 text-orange-500',
  },
  {
    id: 3,
    title: 'Đi chợ',
    description: 'Thực phẩm tươi sống giao tận cửa chỉ trong tích tắc.',
    icon: ShoppingCart,
    href: '/services/grocery',
    color: 'from-green-500 to-emerald-500',
    bgColor: 'bg-green-50',
    hoverBg: 'hover:bg-green-50',
    iconBg: 'bg-green-100 text-green-500',
  },
  {
    id: 4,
    title: 'Du lịch',
    description: 'Đặt vé, phòng khách sạn và tour khám phá dễ dàng.',
    icon: Plane,
    href: '/services/travel',
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-50',
    hoverBg: 'hover:bg-blue-50',
    iconBg: 'bg-blue-100 text-blue-500',
  },
  {
    id: 5,
    title: 'Mua sắm',
    description: 'Sàn thương mại điện tử với hàng triệu sản phẩm chính hãng.',
    icon: ShoppingBag,
    href: '/services/shopping',
    color: 'from-purple-500 to-violet-500',
    bgColor: 'bg-purple-50',
    hoverBg: 'hover:bg-purple-50',
    iconBg: 'bg-purple-100 text-purple-500',
  },
  {
    id: 6,
    title: 'Đặc sản',
    description: 'Kết nối tinh hoa nông sản từ khắp các vùng miền Việt Nam.',
    icon: Leaf,
    href: '/services/specialty',
    color: 'from-teal-500 to-green-500',
    bgColor: 'bg-teal-50',
    hoverBg: 'hover:bg-teal-50',
    iconBg: 'bg-teal-100 text-teal-500',
  },
];

function ServiceCard({ service, index }) {
  const Icon = service.icon;
  
  return (
    <ScrollReveal delay={index * 80}>
      <Link 
        to={service.href} 
        className={`group relative block h-full p-6 lg:p-8 rounded-3xl bg-white border border-border/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 hover:border-primary/20 ${service.hoverBg}`}
      >
        {/* Gradient Background on Hover */}
        <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${service.color} opacity-0 transition-opacity duration-500 group-hover:opacity-5`} />
        
        {/* Content */}
        <div className="relative z-10">
          {/* Icon */}
          <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${service.iconBg} mb-6 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg`}>
            <Icon className="w-8 h-8" />
          </div>

          {/* Number Badge */}
          <div className="absolute top-6 right-6 text-label-md font-bold text-border group-hover:text-primary/30 transition-colors">
            0{service.id}
          </div>

          {/* Title */}
          <h3 className="text-title-lg font-bold text-text mb-3 group-hover:text-primary transition-colors">
            {service.title}
          </h3>

          {/* Description */}
          <p className="text-body-sm text-subtext leading-relaxed mb-6">
            {service.description}
          </p>

          {/* Arrow Link */}
          <div className="inline-flex items-center gap-2 text-label-lg font-semibold text-primary opacity-0 -translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
            <span>Tìm hiểu thêm</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </div>
        </div>

        {/* Decorative Corner */}
        <div className={`absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl ${service.color} opacity-0 transition-opacity duration-500 rounded-tl-3xl rounded-br-3xl group-hover:opacity-10`} />
      </Link>
    </ScrollReveal>
  );
}

function ServicesSection() {
  return (
    <section className="py-section-padding-mobile md:py-section-padding bg-gradient-to-b from-background via-white/30 to-background relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-secondary/5 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" />

      <div className="relative mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
        {/* Section Header */}
        <ScrollReveal>
          <SectionTitle
            label="Dịch vụ"
            title="Dịch vụ đa dạng"
            subtitle="Giải pháp tích hợp cho mọi nhu cầu hàng ngày của bạn"
          />
        </ScrollReveal>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <ScrollReveal delay={600}>
          <div className="mt-16 text-center">
            <Link 
              to="/services"
              className="inline-flex items-center gap-3 text-primary font-semibold hover:underline underline-offset-4"
            >
              <span>Xem tất cả dịch vụ</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

export default ServicesSection;
