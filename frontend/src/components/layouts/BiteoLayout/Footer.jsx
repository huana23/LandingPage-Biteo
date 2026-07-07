import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ArrowRight, Video, Share2 } from 'lucide-react';

const footerNav = [
  {
    title: 'Sản phẩm',
    links: [
      { label: 'Video Short', to: '/services/short-video' },
      { label: 'Biteo Food', to: '/services/food' },
      { label: 'Biteo Travel', to: '/services/travel' },
      { label: 'Biteo Mall', to: '/services/shopping' },
      { label: 'Đặc sản vùng miền', to: '/services/specialty' },
    ],
  },
  {
    title: 'Công ty',
    links: [
      { label: 'Về chúng tôi', to: '/about' },
      { label: 'Tuyển dụng', to: '/careers' },
      { label: 'Tin tức', to: '/blog' },
      { label: 'Liên hệ', to: '/contact' },
    ],
  },
  {
    title: 'Pháp lý',
    links: [
      { label: 'Điều khoản dịch vụ', to: '/terms' },
      { label: 'Chính sách bảo mật', to: '/privacy' },
      { label: 'Quy chế hoạt động', to: '/terms#operating' },
      { label: 'Câu hỏi thường gặp', to: '/faq' },
    ],
  },
];

const socialLinks = [
  { icon: Share2, href: 'https://instagram.com/biteo', label: 'Instagram' },
  { icon: Video, href: 'https://youtube.com/biteo', label: 'YouTube' },
];

function Footer() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <footer className="relative bg-gradient-to-b from-background to-surface-container-low border-t border-border/50 overflow-hidden">
      {/* Top Gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      {/* Background Decorations */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-[100px] hidden md:block" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary/5 rounded-full blur-[120px] hidden md:block" />

      <div className="relative mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop py-12 md:py-16 lg:py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-16">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-6 lg:space-y-8">
            {/* Logo */}
            <Link to="/" className="inline-flex items-center gap-3 group">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary-dark text-white shadow-lg shadow-primary/30">
                <span className="text-xl font-bold">B</span>
              </div>
              <span className="text-2xl font-bold text-primary">Biteo</span>
            </Link>

            {/* Description */}
            <p className="text-body-sm text-subtext leading-relaxed max-w-sm">
              Kiến tạo cuộc sống số tiện nghi cho mọi người Việt. Tích hợp mọi nhu cầu trong một chạm. 
              Cùng Biteo, mọi thứ trở nên dễ dàng hơn.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 lg:space-y-4">
              <div className="flex items-center gap-3 text-body-sm text-subtext">
                <div className="flex h-9 w-9 md:h-10 md:w-10 items-center justify-center rounded-xl bg-primary/10 text-primary shrink-0">
                  <Phone className="h-4 w-4 md:h-5 md:w-5" />
                </div>
                <span className="text-sm md:text-body-sm">1900 1234</span>
              </div>
              <div className="flex items-center gap-3 text-body-sm text-subtext">
                <div className="flex h-9 w-9 md:h-10 md:w-10 items-center justify-center rounded-xl bg-primary/10 text-primary shrink-0">
                  <Mail className="h-4 w-4 md:h-5 md:w-5" />
                </div>
                <span className="text-sm md:text-body-sm">support@biteo.vn</span>
              </div>
              <div className="flex items-start gap-3 text-body-sm text-subtext">
                <div className="flex h-9 w-9 md:h-10 md:w-10 items-center justify-center rounded-xl bg-primary/10 text-primary shrink-0">
                  <MapPin className="h-4 w-4 md:h-5 md:w-5" />
                </div>
                <span className="text-sm md:text-body-sm">Tầng 15, Tòa nhà ABC, Hà Nội</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 lg:gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="group flex h-11 w-11 items-center justify-center rounded-2xl border border-border/50 bg-white text-subtext hover:border-primary hover:bg-primary hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1"
                  >
                    <Icon className="h-5 w-5 transition-transform group-hover:scale-110" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Navigation Columns */}
          {footerNav.map((column) => (
            <div key={column.title}>
              <h4 className="text-title-sm font-bold text-text mb-4 lg:mb-6 relative">
                {column.title}
                <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-primary rounded-full" />
              </h4>
              <ul className="space-y-3 lg:space-y-4">
                {column.links.map((link) => (
                  <li key={link.to}>
                    <Link 
                      to={link.to} 
                      className="group inline-flex items-center gap-2 text-body-sm text-subtext hover:text-primary transition-colors"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-border group-hover:bg-primary transition-colors" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="mt-12 lg:mt-16 pt-8 lg:pt-12 border-t border-border/50">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 lg:gap-8 p-6 lg:p-8 rounded-3xl bg-gradient-to-r from-primary/5 via-primary/10 to-secondary/5 border border-border/30">
            <div className="flex-1">
              <h4 className="text-title-sm lg:text-title-md font-bold text-text mb-1 lg:mb-2">Đăng ký nhận tin</h4>
              <p className="text-body-sm text-subtext hidden sm:block">Nhận ngay ưu đãi và cập nhật mới nhất từ Biteo</p>
            </div>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row w-full md:w-auto gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Nhập email của bạn"
                className="flex-1 sm:min-w-[200px] lg:min-w-[280px] h-14 sm:h-12 py-2 sm:py-0 rounded-full border border-border bg-white px-5 sm:px-6 text-body-sm text-text placeholder:text-subtext focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all shadow-sm"
                required
              />
              <button 
                type="submit" 
                className="h-12 px-6 rounded-full bg-primary text-white font-semibold hover:bg-primary-dark transition-colors shadow-lg shadow-primary/30 flex items-center justify-center gap-2 whitespace-nowrap disabled:opacity-70"
                disabled={isSubscribed}
              >
                {isSubscribed ? (
                  <>
                    <span>Đã đăng ký!</span>
                  </>
                ) : (
                  <>
                    <span>Đăng ký</span>
                    <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 lg:mt-12 pt-6 lg:pt-8 border-t border-border/30 flex flex-col md:flex-row items-center justify-between gap-4 text-center">
          <p className="text-body-sm text-subtext">
            © {new Date().getFullYear()} Biteo. Bảo lưu mọi quyền.
          </p>
          <div className="flex items-center gap-4 lg:gap-6 text-body-sm text-subtext">
            <Link to="/terms" className="hover:text-primary transition-colors">Điều khoản</Link>
            <Link to="/privacy" className="hover:text-primary transition-colors">Bảo mật</Link>
            <Link to="/faq" className="hover:text-primary transition-colors">FAQ</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
