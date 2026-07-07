import { useState } from 'react';
import { useTranslation } from 'react-i18next';

function ContactForm({ onSubmit }) {
  const { t } = useTranslation();
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = (event) => {
    setForm((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit?.(form);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5 lg:space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-widest text-subtext px-1 block">
            {t('contact-page.form.name')}
          </label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder={t('contact-page.form.namePlaceholder')}
            className="w-full bg-surface-container-low border border-transparent focus:border-primary focus:ring-2 focus:ring-primary/20 rounded-xl px-4 py-3 lg:py-4 transition-all outline-none text-sm"
          />
        </div>
        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-widest text-subtext px-1 block">
            {t('contact-page.form.email')}
          </label>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder={t('contact-page.form.emailPlaceholder')}
            className="w-full bg-surface-container-low border border-transparent focus:border-primary focus:ring-2 focus:ring-primary/20 rounded-xl px-4 py-3 lg:py-4 transition-all outline-none text-sm"
          />
        </div>
      </div>
      <div className="space-y-2">
        <label className="text-xs font-bold uppercase tracking-widest text-subtext px-1 block">
          {t('contact-page.form.subject')}
        </label>
        <select
          name="subject"
          value={form.subject}
          onChange={handleChange}
          required
          className="w-full bg-surface-container-low border border-transparent focus:border-primary focus:ring-2 focus:ring-primary/20 rounded-xl px-4 py-3 lg:py-4 transition-all outline-none text-sm appearance-none cursor-pointer"
        >
          <option value="">{t('contact-page.form.subjectPlaceholder')}</option>
          <option value="business">{t('contact-page.form.subjects.business')}</option>
          <option value="support">{t('contact-page.form.subjects.support')}</option>
          <option value="quote">{t('contact-page.form.subjects.quote')}</option>
          <option value="other">{t('contact-page.form.subjects.other')}</option>
        </select>
      </div>
      <div className="space-y-2">
        <label className="text-xs font-bold uppercase tracking-widest text-subtext px-1 block">
          {t('contact-page.form.message')}
        </label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          required
          rows="4"
          placeholder={t('contact-page.form.messagePlaceholder')}
          className="w-full bg-surface-container-low border border-transparent focus:border-primary focus:ring-2 focus:ring-primary/20 rounded-xl px-4 py-3 lg:py-4 transition-all outline-none text-sm resize-none"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-primary text-white font-bold py-3 lg:py-4 rounded-xl shadow-lg shadow-primary/20 hover:bg-primary-dark hover:shadow-xl hover:shadow-primary/30 active:scale-[0.98] transition-all flex items-center justify-center gap-2 text-sm lg:text-base"
      >
        {t('contact-page.form.submit')}
        <span className="material-symbols-outlined text-lg">send</span>
      </button>
    </form>
  );
}

export default ContactForm;
