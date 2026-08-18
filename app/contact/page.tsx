'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, Mail, Phone, MapPin, Clock, MessageCircle, Send, CheckCircle } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

export default function ContactPage() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-green-50 flex items-center justify-center px-4 py-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full bg-white rounded-3xl shadow-xl p-8 text-center"
        >
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            {t('success')}
          </h2>
          <p className="text-gray-600 mb-6">
            {t('responseIn24h')}
          </p>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 w-full py-3.5 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {t('home')}
          </Link>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-green-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-green-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">B</span>
              </div>
              <span className="text-2xl font-bold text-green-600">Biteo</span>
            </Link>
            <Link
              href="/"
              className="flex items-center gap-2 text-gray-600 hover:text-green-600 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm font-medium">{t('back')}</span>
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <MessageCircle className="w-4 h-4" />
            {t('contact')}
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t('supportDesc')}
          </h1>
          <p className="text-lg text-gray-600">
            {t('supportDesc')}
          </p>
        </motion.div>

        {/* Contact Methods */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {[
            { icon: Mail, title: t('email'), description: 'Email support', value: 'support@biteo.vn', href: 'mailto:support@biteo.vn', color: 'bg-green-100 text-green-600' },
            { icon: Phone, title: t('hotline'), description: '24/7 support', value: '0986498899', href: 'tel:0986498899', color: 'bg-blue-100 text-blue-600' },
            { icon: MessageCircle, title: t('liveChat'), description: 'Chat with us', value: 'Zalo: Biteo', href: 'https://zalo.me/biteo', color: 'bg-purple-100 text-purple-600' },
            { icon: MapPin, title: t('address'), description: 'Biteo Office', value: '123 Nguyen Hue, Q.1, HCMC', href: '#', color: 'bg-orange-100 text-orange-600' },
          ].map((method, index) => (
            <motion.a
              key={method.title}
              href={method.href}
              target={method.href.startsWith('http') ? '_blank' : undefined}
              rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.1 }}
              whileHover={{ y: -4 }}
              className="bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all"
            >
              <div className={`w-14 h-14 ${method.color} rounded-xl flex items-center justify-center mb-4`}>
                <method.icon className="w-7 h-7" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">{method.title}</h3>
              <p className="text-sm text-gray-500 mb-2">{method.description}</p>
              <p className="font-medium text-gray-900">{method.value}</p>
            </motion.a>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {t('contactSupport')}
              </h2>
              <p className="text-gray-600 mb-8">
                {t('supportDesc')}
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('fullName')} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder={t('fullName')}
                      className="w-full px-4 py-3.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all bg-gray-50/50 hover:bg-gray-50"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('emailAddress')} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="email@example.com"
                      className="w-full px-4 py-3.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all bg-gray-50/50 hover:bg-gray-50"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('phone')}
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="0xxx xxx xxx"
                      className="w-full px-4 py-3.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all bg-gray-50/50 hover:bg-gray-50"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('subject')} <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all bg-gray-50/50 hover:bg-gray-50"
                    >
                      <option value="">{t('subject')}</option>
                      <option value="support">{t('support')}</option>
                      <option value="partner">{t('registerBusiness')}</option>
                      <option value="feedback">{t('feedback')}</option>
                      <option value="report">{t('report')}</option>
                      <option value="other">{t('other')}</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('message')} <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder={t('message')}
                    className="w-full px-4 py-3.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all bg-gray-50/50 hover:bg-gray-50 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-xl hover:from-green-700 hover:to-emerald-700 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg shadow-green-600/30"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      {t('loading')}
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      {t('submit')}
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>

          {/* FAQ Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {t('faqTitle')}
              </h2>
              <p className="text-gray-600 mb-8">
                {t('faqSubtitle')}
              </p>

              <div className="space-y-4">
                {[
                  { q: t('faqQ1'), a: t('faqA1') },
                  { q: t('faqQ2'), a: t('faqA2') },
                  { q: t('faqQ3'), a: t('faqA3') },
                ].map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="border border-gray-100 rounded-xl p-5 hover:border-green-200 transition-colors"
                  >
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {faq.q}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {faq.a}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Business Hours */}
              <div className="mt-8 p-6 bg-green-50 rounded-xl">
                <div className="flex items-center gap-3 mb-3">
                  <Clock className="w-5 h-5 text-green-600" />
                  <h3 className="font-semibold text-gray-900">{t('businessHours')}</h3>
                </div>
                <div className="space-y-2 text-sm text-gray-600">
                  <p><span className="font-medium">{t('hotline')}:</span> 24/7</p>
                  <p><span className="font-medium">{t('email')}:</span> {t('responseIn24h')}</p>
                  <p><span className="font-medium">{t('office')}:</span> 8:00 - 18:00 ({t('weekdays')})</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
