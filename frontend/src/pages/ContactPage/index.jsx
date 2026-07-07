import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { Mail, Phone, MapPin, Share, Users, Globe, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ContactForm from '../../components/ui/ContactForm';
import OfficeCard from '../../components/ui/OfficeCard';
import ScrollReveal from '../../components/ui/ScrollReveal';

function ContactPage() {
  const { t } = useTranslation();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (formData) => {
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const offices = [
    {
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&q=80',
      title: t('contact-page.offices.hcm.title'),
      address: t('contact-page.offices.hcm.address'),
      phone: '+84 28 000 000',
      badge: t('contact-page.offices.badges.main')
    },
    {
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&q=80',
      title: t('contact-page.offices.hanoi.title'),
      address: t('contact-page.offices.hanoi.address'),
      phone: '+84 24 111 111',
      badge: t('contact-page.offices.badges.rnd')
    },
    {
      image: 'https://images.unsplash.com/photo-1565967511849-76a60a516170?w=400&q=80',
      title: t('contact-page.offices.danang.title'),
      address: t('contact-page.offices.danang.address'),
      phone: '+84 23 222 222',
      badge: t('contact-page.offices.badges.support')
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 lg:py-28 px-margin-mobile md:px-margin-desktop bg-background">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/20 rounded-full blur-3xl" />
        </div>
        <div className="max-w-container-max mx-auto relative z-10">
          <div className="max-w-3xl">
            <ScrollReveal>
              <h1 className="text-headline-md lg:text-headline-lg font-bold text-primary mb-6 leading-tight">
                {t('contact-page.hero.title')}
              </h1>
              <p className="text-body-lg text-subtext leading-relaxed">
                {t('contact-page.hero.subtitle')}
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Contact Info & Form Section */}
      <section className="py-12 lg:py-20 xl:py-28 px-margin-mobile md:px-margin-desktop bg-background">
        <div className="max-w-container-max mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">

            {/* Left Column: Info Card */}
            <ScrollReveal className="transition-all duration-700 ease-out">
              <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 lg:p-10 xl:p-12 border border-outline-variant/20 shadow-xl h-full">
                <div className="space-y-8">
                  {/* Header */}
                  <div>
                    <h2 className="text-2xl lg:text-3xl font-bold text-text mb-2">Liên hệ với chúng tôi</h2>
                    <p className="text-subtext">Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn.</p>
                  </div>

                  {/* Contact Items */}
                  <div className="space-y-5">
                    {/* Email */}
                    <a href="mailto:contact@biteo.tech" className="group flex items-start gap-4 p-4 rounded-2xl bg-surface-container-low hover:bg-surface-container-high border border-transparent hover:border-primary/20 transition-all duration-300">
                      <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-semibold uppercase tracking-wider text-subtext mb-1">Email</p>
                        <p className="text-base font-semibold text-text group-hover:text-primary transition-colors">contact@biteo.tech</p>
                      </div>
                    </a>

                    {/* Phone */}
                    <a href="tel:+842412345678" className="group flex items-start gap-4 p-4 rounded-2xl bg-surface-container-low hover:bg-surface-container-high border border-transparent hover:border-primary/20 transition-all duration-300">
                      <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-semibold uppercase tracking-wider text-subtext mb-1">Điện thoại</p>
                        <p className="text-base font-semibold text-text group-hover:text-primary transition-colors">+84 (0) 24 1234 5678</p>
                      </div>
                    </a>

                    {/* Address */}
                    <div className="group flex items-start gap-4 p-4 rounded-2xl bg-surface-container-low hover:bg-surface-container-high border border-transparent hover:border-primary/20 transition-all duration-300">
                      <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-semibold uppercase tracking-wider text-subtext mb-1">Địa chỉ</p>
                        <p className="text-base font-semibold text-text">{t('contact-page.info.addressValue')}</p>
                      </div>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

                  {/* Social Links */}
                  <div className="space-y-4">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-subtext">
                      Kết nối với chúng tôi
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      <a
                        href="https://facebook.com/biteo"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-3 rounded-full bg-surface-container-low hover:bg-primary hover:text-white border border-transparent hover:border-primary transition-all duration-300 group"
                      >
                        <svg className="w-5 h-5 text-primary group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
                        <span className="text-sm font-medium text-text group-hover:text-white transition-colors">Facebook</span>
                      </a>
                      <a
                        href="https://instagram.com/biteo"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-3 rounded-full bg-surface-container-low hover:bg-primary hover:text-white border border-transparent hover:border-primary transition-all duration-300 group"
                      >
                        <svg className="w-5 h-5 text-primary group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                        <span className="text-sm font-medium text-text group-hover:text-white transition-colors">Instagram</span>
                      </a>
                      <a
                        href="https://youtube.com/biteo"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-3 rounded-full bg-surface-container-low hover:bg-primary hover:text-white border border-transparent hover:border-primary transition-all duration-300 group"
                      >
                        <svg className="w-5 h-5 text-primary group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                        <span className="text-sm font-medium text-text group-hover:text-white transition-colors">YouTube</span>
                      </a>
                      <a
                        href="https://zalo.me/biteo"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-3 rounded-full bg-surface-container-low hover:bg-primary hover:text-white border border-transparent hover:border-primary transition-all duration-300 group"
                      >
                        <svg className="w-5 h-5 text-primary group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.568 17.217c-.267.748-1.838 1.512-2.56 1.598-.56.067-.816.267-.816.667 0 .056.017.119.05.178.05.106.125.28.175.4.267.533 1.178 1.78 1.267 1.91.044.067.078.145.078.227 0 .16-.089.284-.267.36-.338.145-.988-.106-1.338-.2-.338-.1-.622-.16-.955-.16-.4 0-.756.089-1.022.2-.333.133-.533.311-.533.578 0 .178.106.356.377.533.378.245.956.378 1.378.378.756 0 1.289-.311 1.423-.778.133-.444.044-1.244-.267-2.067-.044-.111-.111-.267-.167-.4l-.333-.778c-.134-.333-.378-.489-.734-.489-.267 0-.534.133-.711.355-.177.223-.267.533-.267.844 0 .267.089.489.267.667.177.178.444.311.711.4.311.1.711.177 1.111.233.4.056.8.122 1.066.267.356.178.533.444.533.844 0 .4-.222.8-.622 1.111-.378.311-.933.489-1.511.489-.845 0-1.511-.267-2.044-.778-.444-.444-.667-1.066-.667-1.78 0-.667.2-1.289.578-1.845.378-.578.889-1.067 1.511-1.467.089-.067.156-.111.222-.178.6-.444 1.067-.978 1.378-1.511.311-.533.444-1.066.378-1.467-.022-.133-.045-.266-.045-.4 0-.267.067-.578.178-.756.133-.178.333-.267.622-.267.311 0 .578.089.755.244.177.178.267.356.267.533 0 .2-.089.378-.267.578z"/></svg>
                        <span className="text-sm font-medium text-text group-hover:text-white transition-colors">Zalo</span>
                      </a>
                    </div>
                  </div>

                  {/* Working Hours */}
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/10">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h4 className="text-sm font-semibold text-text">Giờ làm việc</h4>
                    </div>
                    <div className="grid grid-cols-2 gap-4 pl-[2.5rem]">
                      <div>
                        <p className="text-xs text-subtext mb-1">Thứ 2 - Thứ 6</p>
                        <p className="text-sm font-semibold text-text">08:00 - 18:00</p>
                      </div>
                      <div>
                        <p className="text-xs text-subtext mb-1">Thứ 7 - CN</p>
                        <p className="text-sm font-semibold text-text">09:00 - 15:00</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Right Column: Form Card */}
            <ScrollReveal delay={100} className="transition-all duration-700 ease-out">
              <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 lg:p-10 xl:p-12 border border-outline-variant/20 shadow-xl h-full">
                {isSubmitted ? (
                  <div className="text-center py-12 animate-fade-in">
                    <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-primary flex items-center justify-center">
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-text mb-2">Gửi thành công!</h3>
                    <p className="text-subtext">Cảm ơn bạn đã liên hệ. Chúng tôi sẽ phản hồi trong 24 giờ.</p>
                  </div>
                ) : (
                  <ContactForm onSubmit={handleSubmit} />
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* FAQ Preview Section */}
      <section className="py-16 px-margin-mobile md:px-margin-desktop">
        <div className="max-w-container-max mx-auto text-center">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/20 text-secondary text-label-sm font-bold uppercase tracking-widest mb-4">
              {t('contact-page.faq.label')}
            </div>
            <h2 className="text-headline-md lg:text-headline-lg font-bold text-primary mb-6 leading-tight">
              {t('contact-page.faq.title')}
            </h2>
            <p className="text-body-lg text-subtext max-w-2xl mx-auto mb-10">
              {t('contact-page.faq.subtitle')}
            </p>
            <Link
              to="/faq"
              className="inline-flex items-center gap-2 text-primary font-bold hover:underline decoration-2 underline-offset-8 transition-all"
            >
              {t('contact-page.faq.link')}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Offices Section */}
      <section className="py-16 lg:py-28 px-margin-mobile md:px-margin-desktop bg-surface-container-low">
        <div className="max-w-container-max mx-auto">
          <ScrollReveal>
            <h2 className="text-headline-md lg:text-headline-lg font-bold text-primary mb-12 leading-tight">
              {t('contact-page.offices.title')}
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <OfficeCard {...office} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactPage;
