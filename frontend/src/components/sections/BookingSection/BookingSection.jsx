import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Calendar, Users, ChevronDown } from "lucide-react";
import ScrollReveal from "../../ui/ScrollReveal";

function BookingSection() {
  const { t } = useTranslation();
  const [form, setForm] = useState({
    checkIn: "",
    checkOut: "",
    adults: 1,
    children: 0,
    infants: 0,
    requests: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Booking inquiry sent! We'll contact you within 24 hours.");
    setForm({ checkIn: "", checkOut: "", adults: 1, children: 0, infants: 0, requests: "" });
  };

  return (
    <section id="booking" className="py-section-padding-mobile md:py-section-padding bg-surface-container-low">
      <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left */}
          <ScrollReveal>
            <div>
              <span className="inline-block font-label text-xs uppercase tracking-[0.2em] text-secondary mb-3">
                {t("booking-section.label")}
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-headline italic font-bold text-on-surface mb-6 leading-tight">
                {t("booking-section.title")}
              </h2>
              <p className="text-base md:text-lg text-on-surface-variant leading-relaxed font-body">
                {t("booking-section.subtitle")}
              </p>

              {/* Trust Signals */}
              <div className="flex gap-6 mt-10">
                <div className="text-center">
                  <p className="text-3xl font-headline font-bold text-primary">500+</p>
                  <p className="text-xs text-stone-500 mt-1 font-label">Happy Guests</p>
                </div>
                <div className="w-px bg-outline-variant/20" />
                <div className="text-center">
                  <p className="text-3xl font-headline font-bold text-primary">4.9</p>
                  <p className="text-xs text-stone-500 mt-1 font-label">Avg Rating</p>
                </div>
                <div className="w-px bg-outline-variant/20" />
                <div className="text-center">
                  <p className="text-3xl font-headline font-bold text-primary">24h</p>
                  <p className="text-xs text-stone-500 mt-1 font-label">Quick Response</p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Form */}
          <ScrollReveal delay={150}>
            <form
              onSubmit={handleSubmit}
              className="bg-surface-container-lowest rounded-3xl p-8 lg:p-10 border border-outline-variant/10 shadow-xl"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                {/* Check-in */}
                <div>
                  <label className="block text-xs font-label uppercase tracking-widest text-stone-500 mb-2">
                    {t("booking-section.checkIn")}
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
                    <input
                      type="date"
                      name="checkIn"
                      value={form.checkIn}
                      onChange={handleChange}
                      className="w-full pl-11 pr-4 py-3.5 bg-surface rounded-xl border border-outline-variant/20 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none text-sm font-body text-on-surface transition-all"
                      required
                    />
                  </div>
                </div>

                {/* Check-out */}
                <div>
                  <label className="block text-xs font-label uppercase tracking-widest text-stone-500 mb-2">
                    {t("booking-section.checkOut")}
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
                    <input
                      type="date"
                      name="checkOut"
                      value={form.checkOut}
                      onChange={handleChange}
                      className="w-full pl-11 pr-4 py-3.5 bg-surface rounded-xl border border-outline-variant/20 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none text-sm font-body text-on-surface transition-all"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Guests */}
              <div className="mb-6">
                <label className="block text-xs font-label uppercase tracking-widest text-stone-500 mb-3">
                  {t("booking-section.guestCount")}
                </label>
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-surface rounded-xl p-4 text-center">
                    <p className="text-xs text-stone-500 mb-2 font-label">{t("booking-section.adults")}</p>
                    <div className="flex items-center justify-center gap-2">
                      <button
                        type="button"
                        onClick={() => setForm((p) => ({ ...p, adults: Math.max(1, p.adults - 1) }))}
                        className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-sm font-bold hover:bg-primary/10 transition-colors"
                      >
                        -
                      </button>
                      <span className="font-bold text-on-surface w-4 text-center">{form.adults}</span>
                      <button
                        type="button"
                        onClick={() => setForm((p) => ({ ...p, adults: Math.min(10, p.adults + 1) }))}
                        className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-sm font-bold hover:bg-primary/10 transition-colors"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="bg-surface rounded-xl p-4 text-center">
                    <p className="text-xs text-stone-500 mb-2 font-label">{t("booking-section.children")}</p>
                    <div className="flex items-center justify-center gap-2">
                      <button
                        type="button"
                        onClick={() => setForm((p) => ({ ...p, children: Math.max(0, p.children - 1) }))}
                        className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-sm font-bold hover:bg-primary/10 transition-colors"
                      >
                        -
                      </button>
                      <span className="font-bold text-on-surface w-4 text-center">{form.children}</span>
                      <button
                        type="button"
                        onClick={() => setForm((p) => ({ ...p, children: Math.min(6, p.children + 1) }))}
                        className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-sm font-bold hover:bg-primary/10 transition-colors"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="bg-surface rounded-xl p-4 text-center">
                    <p className="text-xs text-stone-500 mb-2 font-label">{t("booking-section.infants")}</p>
                    <div className="flex items-center justify-center gap-2">
                      <button
                        type="button"
                        onClick={() => setForm((p) => ({ ...p, infants: Math.max(0, p.infants - 1) }))}
                        className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-sm font-bold hover:bg-primary/10 transition-colors"
                      >
                        -
                      </button>
                      <span className="font-bold text-on-surface w-4 text-center">{form.infants}</span>
                      <button
                        type="button"
                        onClick={() => setForm((p) => ({ ...p, infants: Math.min(3, p.infants + 1) }))}
                        className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-sm font-bold hover:bg-primary/10 transition-colors"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Special Requests */}
              <div className="mb-8">
                <label className="block text-xs font-label uppercase tracking-widest text-stone-500 mb-2">
                  {t("booking-section.specialRequests")}
                </label>
                <textarea
                  name="requests"
                  value={form.requests}
                  onChange={handleChange}
                  placeholder={t("booking-section.specialRequestsPlaceholder")}
                  rows={3}
                  className="w-full px-4 py-3.5 bg-surface rounded-xl border border-outline-variant/20 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none text-sm font-body text-on-surface transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-on-primary py-4 rounded-xl font-label text-sm uppercase tracking-widest font-bold transition-all hover:shadow-lg hover:shadow-primary/20"
              >
                {t("booking-section.btnBook")}
              </button>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

export default BookingSection;
