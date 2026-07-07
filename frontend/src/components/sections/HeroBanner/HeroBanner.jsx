import { ChevronRight, Download, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../../ui/ScrollReveal';

const heroImage = "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80";

function HeroBanner() {
  return (
    <section className="relative overflow-hidden bg-background pt-20">
      {/* Background Decorations */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-primary/10 via-primary/5 to-transparent rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-secondary/10 via-secondary/5 to-transparent rounded-full blur-[100px]" />
        <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-gradient-to-r from-accent/5 to-transparent rounded-full blur-[60px]" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop py-section-padding-mobile md:py-section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter lg:gap-16 items-center min-h-[calc(100vh-160px)]">
          {/* Left Content */}
          <div className="relative z-10 order-2 lg:order-1">
            <ScrollReveal>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                <span className="text-label-lg font-semibold text-primary">
                  Hệ sinh thái số cho người Việt
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <h1 className="text-display-xs md:text-display-sm lg:text-display-xl font-bold text-text leading-[1.1] tracking-tight">
                Hệ sinh thái số <span className="relative">
                  <span className="relative z-10 text-primary">toàn diện</span>
                  <span className="absolute -bottom-2 left-0 right-0 h-3 bg-primary/20 -skew-x-3"></span>
                </span> cho cuộc sống hiện đại
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <p className="mt-8 text-body-lg text-subtext max-w-xl leading-relaxed">
                Biteo tích hợp mượt mà các trải nghiệm <strong className="text-primary">Video giải trí</strong>, 
                <strong className="text-primary"> Ẩm thực phong phú</strong>, <strong className="text-primary">Du lịch khám phá</strong> 
                và <strong className="text-primary">Mua sắm thông minh</strong> trong một nền tảng duy nhất.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/download"
                  className="group inline-flex items-center justify-center gap-3 rounded-full bg-primary px-8 py-4 text-body-lg font-bold text-white shadow-lg shadow-primary/25 transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 active:scale-[0.98]"
                >
                  <Download className="h-5 w-5" />
                  Tải App ngay
                  <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link 
                  to="/services"
                  className="group inline-flex items-center justify-center gap-3 rounded-full border-2 border-primary/20 bg-white/80 backdrop-blur-sm px-8 py-4 text-body-lg font-bold text-primary transition-all duration-300 hover:border-primary hover:bg-white hover:shadow-lg active:scale-[0.98]"
                >
                  <Play className="h-5 w-5" />
                  Khám phá dịch vụ
                </Link>
              </div>
            </ScrollReveal>

            {/* Trust Badges */}
            <ScrollReveal delay={400}>
              <div className="mt-12 flex flex-wrap items-center gap-8">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {['👨‍💼', '👩‍💻', '👨‍🎨', '👩‍🏫'].map((emoji, i) => (
                      <div key={i} className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-gradient-to-br from-primary/20 to-secondary/20 text-sm">
                        {emoji}
                      </div>
                    ))}
                  </div>
                  <div className="text-sm">
                    <p className="font-semibold text-text">5M+</p>
                    <p className="text-subtext">Người dùng</p>
                  </div>
                </div>
                <div className="h-10 w-px bg-border" />
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="h-4 w-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <div className="text-sm">
                    <p className="font-semibold text-text">4.9/5</p>
                    <p className="text-subtext">Đánh giá</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Image */}
          <div className="relative order-1 lg:order-2">
            <ScrollReveal delay={200} className="relative">
              {/* Main Image */}
              <div className="relative z-10 overflow-hidden rounded-3xl shadow-2xl shadow-primary/10">
                <img
                  src={heroImage}
                  alt="Biteo App - Hệ sinh thái số toàn diện"
                  className="w-full h-auto object-cover"
                  fetchPriority="high"
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent" />
              </div>

              {/* Floating Cards */}
              <div className="absolute -bottom-4 sm:-bottom-6 left-0 sm:left-4 z-20 animate-float rounded-2xl border border-border bg-white/90 backdrop-blur-md p-3 sm:p-4 shadow-xl max-w-[180px] sm:max-w-none">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-green-100">
                    <span className="text-lg sm:text-2xl">🛒</span>
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm font-semibold text-text">Đơn hàng mới</p>
                    <p className="text-[10px] sm:text-xs text-subtext">Giao trong 30 phút</p>
                  </div>
                </div>
              </div>

              <div className="absolute -top-2 sm:-top-4 right-0 sm:right-4 z-20 animate-float rounded-2xl border border-border bg-white/90 backdrop-blur-md p-3 sm:p-4 shadow-xl max-w-[180px] sm:max-w-none" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-primary/10">
                    <span className="text-lg sm:text-2xl">📍</span>
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm font-semibold text-text">63 Tỉnh thành</p>
                    <p className="text-[10px] sm:text-xs text-subtext">Phủ sóng toàn quốc</p>
                  </div>
                </div>
              </div>

              {/* Decorative Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-[120%] h-[120%]">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20 rounded-full blur-[80px]" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden sm:block">
        <div className="flex flex-col items-center gap-2 text-subtext">
          <span className="text-label-sm">Cuộn xuống</span>
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}

export default HeroBanner;
