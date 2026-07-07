import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Phone, Mail, MapPin, Clock, Send, Facebook, Instagram, MessageCircle, MessageSquare } from "lucide-react";
import ScrollReveal from "../../ui/ScrollReveal";
import SectionTitle from "../../ui/SectionTitle";

function ContactSection() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    setTimeout(() => setSubmitted(false), 3000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      label: t("contact-section.info.address"),
      value: t("contact-section.address"),
      href: null,
    },
    {
      icon: Phone,
      label: t("contact-section.info.phone"),
      value: t("contact-section.phone"),
      href: `tel:${t("contact-section.phone")}`,
    },
    {
      icon: Mail,
      label: t("contact-section.info.email"),
      value: t("contact-section.email"),
      href: `mailto:${t("contact-section.email")}`,
    },
  ];

  const socialLinks = [
    { key: "facebook", label: "Facebook", icon: Facebook, href: t("contact.facebook") },
    { key: "instagram", label: "Instagram", icon: Instagram, href: t("contact.instagram") },
    { key: "zalo", label: "Zalo", icon: MessageCircle, href: t("contact.zalo") },
    { key: "whatsapp", label: "WhatsApp", icon: MessageSquare, href: t("contact.whatsapp") },
  ];

  const subjectOptions = [
    { value: "general", label: t("contact-section.form.subjects.general") },
    { value: "business", label: t("contact-section.form.subjects.business") },
    { value: "support", label: t("contact-section.form.subjects.support") },
    { value: "quote", label: t("contact-section.form.subjects.quote") },
    { value: "feedback", label: t("contact-section.form.subjects.feedback") },
    { value: "other", label: t("contact-section.form.subjects.other") },
  ];

  return (
    <section id="contact" className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-mesh-gradient pointer-events-none" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-secondary/5 to-transparent rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />

      <div className="max-w-screen-2xl mx-auto px-6 lg:px-10 relative">
        <ScrollReveal>
          <SectionTitle
            label={t("contact-section.label")}
            title={t("contact-section.title")}
            subtitle={t("contact-section.subtitle")}
          />
        </ScrollReveal>

        {/* Main Content - Contact Info + Form in 2 columns */}
        <div className="bg-white rounded-3xl p-8 lg:p-10 border border-border/50 shadow-soft-lg relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-60 h-60 bg-gradient-primary/5 rounded-full -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-br from-secondary/5 to-transparent rounded-full translate-y-1/2 -translate-x-1/4" />

          <div className="relative">
            <h3 className="text-2xl font-bold text-text mb-2">Gửi tin nhắn cho chúng tôi</h3>
            <p className="text-subtext mb-8">
              Điền form bên dưới và chúng tôi sẽ phản hồi trong vòng 24 giờ.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
              {/* Left Column - Contact Info Cards */}
              <ScrollReveal delay={100} className="space-y-4">
                {contactInfo.map((item, index) => (
                  <div
                    key={index}
                    className="group flex items-start gap-4 p-4 rounded-xl bg-surface-container-low border border-transparent hover:border-primary/20 hover:bg-surface-container-high transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-semibold uppercase tracking-wider text-subtext mb-1">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-base font-semibold text-text hover:text-primary transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-base font-semibold text-text">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}

                {/* Working Hours - Inline */}
                <div className="flex items-center gap-4 p-4 rounded-xl bg-surface-container-low border border-transparent hover:border-primary/20 hover:bg-surface-container-high transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-semibold uppercase tracking-wider text-subtext mb-1">
                      {t("contact-section.hours.title")}
                    </p>
                    <p className="text-sm text-text">
                      {t("contact-section.hours.weekdays")}: <span className="font-semibold">08:00 - 18:00</span>
                    </p>
                    <p className="text-sm text-text">
                      {t("contact-section.hours.weekends")}: <span className="font-semibold">09:00 - 15:00</span>
                    </p>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex flex-wrap gap-3 pt-2">
                  {socialLinks.map((social) => (
                    <a
                      key={social.key}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-surface-container-low border border-transparent hover:border-primary/30 hover:bg-surface-container hover:text-primary transition-all duration-200 group"
                    >
                      <social.icon className="w-4 h-4 text-primary" />
                      <span className="text-sm font-medium text-text group-hover:text-primary transition-colors">
                        {social.label}
                      </span>
                    </a>
                  ))}
                </div>
              </ScrollReveal>

              {/* Right Column - Contact Form */}
              <ScrollReveal delay={200}>
                {submitted ? (
                  <div className="text-center py-12 animate-fade-in">
                    <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-primary flex items-center justify-center">
                      <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold text-text mb-2">Gửi thành công!</h4>
                    <p className="text-subtext">Cảm ơn bạn đã liên hệ. Chúng tôi sẽ sớm phản hồi.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <label className="text-xs font-semibold uppercase tracking-wider text-subtext">
                          {t("contact-section.form.name")} <span className="text-primary">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Nguyễn Văn A"
                          className="w-full px-4 py-3.5 bg-surface-container-low rounded-xl border border-transparent focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-sm transition-all placeholder:text-subtext/50"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-semibold uppercase tracking-wider text-subtext">
                          {t("contact-section.form.email")} <span className="text-primary">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="email@biteo.vn"
                          className="w-full px-4 py-3.5 bg-surface-container-low rounded-xl border border-transparent focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-sm transition-all placeholder:text-subtext/50"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <label className="text-xs font-semibold uppercase tracking-wider text-subtext">
                          Số điện thoại
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="0912 345 678"
                          className="w-full px-4 py-3.5 bg-surface-container-low rounded-xl border border-transparent focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-sm transition-all placeholder:text-subtext/50"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-semibold uppercase tracking-wider text-subtext">
                          {t("contact-section.form.subject")} <span className="text-primary">*</span>
                        </label>
                        <select
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3.5 bg-surface-container-low rounded-xl border border-transparent focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-sm transition-all appearance-none cursor-pointer"
                        >
                          <option value="">Chọn chủ đề</option>
                          {subjectOptions.map((opt) => (
                            <option key={opt.value} value={opt.value}>
                              {opt.label}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-semibold uppercase tracking-wider text-subtext">
                        {t("contact-section.form.message")} <span className="text-primary">*</span>
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        placeholder="Viết tin nhắn của bạn tại đây..."
                        className="w-full px-4 py-3.5 bg-surface-container-low rounded-xl border border-transparent focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-sm transition-all resize-none placeholder:text-subtext/50"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-primary text-white font-semibold py-4 rounded-xl shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 active:scale-[0.98] transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          <span>Đang gửi...</span>
                        </>
                      ) : (
                        <>
                          <span>{t("contact-section.form.send")}</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </ScrollReveal>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <ScrollReveal delay={300}>
          <div className="mt-10 text-center">
            <p className="text-subtext mb-4">Bạn cần hỗ trợ nhanh?</p>
            <a
              href={`tel:${t("contact-section.phone")}`}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white rounded-full border border-border/50 shadow-soft hover:shadow-soft-lg hover:border-primary/30 transition-all group"
            >
              <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <span className="font-semibold text-text group-hover:text-primary transition-colors">
                Gọi ngay: {t("contact-section.phone")}
              </span>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

export default ContactSection;
