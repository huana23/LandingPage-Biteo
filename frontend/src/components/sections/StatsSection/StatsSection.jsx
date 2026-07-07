import { useEffect, useState, useRef } from 'react';
import ScrollReveal from '../../ui/ScrollReveal';

const stats = [
  {
    value: 5000000,
    suffix: '+',
    displayValue: '5M+',
    label: 'Người dùng tin dùng',
    icon: '👥',
    color: 'from-primary to-primary-light',
  },
  {
    value: 10000,
    suffix: '+',
    displayValue: '10K+',
    label: 'Đối tác cửa hàng',
    icon: '🏪',
    color: 'from-secondary to-primary',
  },
  {
    value: 63,
    suffix: '',
    displayValue: '63',
    label: 'Tỉnh thành phủ sóng',
    icon: '🗺️',
    color: 'from-accent to-secondary',
  },
  {
    value: 24,
    suffix: '/7',
    displayValue: '24/7',
    label: 'Hỗ trợ khách hàng',
    icon: '💬',
    color: 'from-primary to-secondary',
  },
];

function AnimatedCounter({ value, suffix, isVisible }) {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isVisible || hasAnimated.current) return;
    hasAnimated.current = true;

    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      countRef.current = Math.min(Math.round(increment * currentStep), value);
      setCount(countRef.current);

      if (currentStep >= steps) {
        clearInterval(timer);
        setCount(value);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isVisible, value]);

  const formatNumber = (num) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1).replace('.0', '') + 'M';
    if (num >= 1000) return (num / 1000).toFixed(0) + 'K';
    return num.toString();
  };

  return (
    <span>{isVisible ? formatNumber(count) : '0'}{suffix}</span>
  );
}

function StatsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden py-section-padding-mobile md:py-section-padding bg-gradient-to-r from-primary via-primary-dark to-primary">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/2 translate-y-1/2" />

      <div className="relative mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <ScrollReveal 
              key={stat.label} 
              delay={index * 100}
              className="text-center group"
            >
              <div className="relative">
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-sm mb-4 group-hover:bg-white/20 transition-all duration-300">
                  <span className="text-2xl">{stat.icon}</span>
                </div>

                {/* Value */}
                <div className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white mb-2 tracking-tight">
                  <AnimatedCounter 
                    value={stat.value} 
                    suffix={stat.suffix} 
                    displayValue={stat.displayValue}
                    isVisible={isVisible}
                  />
                </div>

                {/* Label */}
                <p className="text-xs md:text-sm lg:text-base font-medium text-white/80 uppercase tracking-wider">
                  {stat.label}
                </p>

                {/* Bottom Line */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-12 h-1 bg-white/30 rounded-full group-hover:w-20 group-hover:bg-white/50 transition-all duration-500" />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/20 pointer-events-none" />
    </section>
  );
}

export default StatsSection;
