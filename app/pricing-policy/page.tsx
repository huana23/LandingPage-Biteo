'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { DollarSign, Percent, Receipt, Shield, Info, AlertTriangle, FileText, CreditCard, Users, TrendingUp, RefreshCw, Phone } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import PageHeader from '@/components/PageHeader'

export default function PricingPolicyPage() {
  const { t } = useLanguage()

  const sections = [
    {
      icon: Info,
      title: t('pricingPolicySection1'),
      color: 'from-green-500 to-emerald-600',
      content: t('pricingPolicySection1Content'),
    },
    {
      icon: DollarSign,
      title: t('pricingPolicySection2'),
      color: 'from-blue-500 to-indigo-600',
      content: t('pricingPolicySection2Content'),
    },
    {
      icon: Receipt,
      title: t('pricingPolicySection3'),
      color: 'from-purple-500 to-pink-600',
      content: t('pricingPolicySection3Content'),
    },
  ]

  const part1 = [
    { title: t('pricingPolicyPart1Title1'), content: t('pricingPolicyPart1Content1') },
    { title: t('pricingPolicyPart1Title2'), content: t('pricingPolicyPart1Content2') },
    { title: t('pricingPolicyPart1Title3'), content: t('pricingPolicyPart1Content3') },
  ]

  const part2 = [
    { title: t('pricingPolicyPart2Title1'), content: t('pricingPolicyPart2Content1') },
    { title: t('pricingPolicyPart2Title2'), content: t('pricingPolicyPart2Content2') },
    { title: t('pricingPolicyPart2Title3'), content: t('pricingPolicyPart2Content3') },
  ]

  const part3 = [
    { title: t('pricingPolicyPart3Title1'), content: t('pricingPolicyPart3Content1') },
    { title: t('pricingPolicyPart3Title2'), content: t('pricingPolicyPart3Content2') },
    { title: t('pricingPolicyPart3Title3'), content: t('pricingPolicyPart3Content3') },
  ]

  const part4 = [
    { title: t('pricingPolicyPart4Title1'), content: t('pricingPolicyPart4Content1') },
    { title: t('pricingPolicyPart4Title2'), content: t('pricingPolicyPart4Content2') },
  ]

  const part5 = [
    { title: t('pricingPolicyPart5Title1'), content: t('pricingPolicyPart5Content1') },
    { title: t('pricingPolicyPart5Title2'), content: t('pricingPolicyPart5Content2') },
    { title: t('pricingPolicyPart5Title3'), content: t('pricingPolicyPart5Content3') },
  ]

  const part6 = [
    { title: t('pricingPolicyPart6Title1'), content: t('pricingPolicyPart6Content1') },
    { title: t('pricingPolicyPart6Title2'), content: t('pricingPolicyPart6Content2') },
    { title: t('pricingPolicyPart6Title3'), content: t('pricingPolicyPart6Content3') },
  ]

  const part7 = [
    { title: t('pricingPolicyPart7Title1'), content: t('pricingPolicyPart7Content1') },
    { title: t('pricingPolicyPart7Title2'), content: t('pricingPolicyPart7Content2') },
    { title: t('pricingPolicyPart7Title3'), content: t('pricingPolicyPart7Content3') },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <PageHeader backHref="/" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Percent className="w-4 h-4" />
            {t('legal')}
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t('pricingPolicyTitle')}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('pricingPolicySubtitle')}
          </p>
          <p className="text-sm text-gray-500 mt-2">
            {t('lastUpdated')}: {t('weekdays')} 2026
          </p>
        </motion.div>

        {/* Overview Cards */}
        <div className="grid md:grid-cols-3 gap-4 mb-10">
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className={`bg-gradient-to-br ${section.color} rounded-2xl p-5 text-white shadow-lg`}
            >
              <section.icon className="w-8 h-8 mb-3" />
              <h3 className="font-bold mb-1">{section.title}</h3>
              <p className="text-sm text-white/80">{section.content}</p>
            </motion.div>
          ))}
        </div>

        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white rounded-3xl shadow-xl p-8 mb-8"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
              <Shield className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">{t('pricingPolicyIntroTitle')}</h2>
              <p className="text-gray-600 leading-relaxed">
                {t('pricingPolicyIntro')}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Part I - General Provisions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-green-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold">I</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900">{t('pricingPolicyPart1')}</h2>
          </div>
          <div className="space-y-4">
            {part1.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.05 }}
                className="bg-white rounded-2xl shadow-card hover:shadow-card-hover transition-all p-6"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-green-600" />
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.content}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Part II - Pricing */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold">II</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900">{t('pricingPolicyPart2')}</h2>
          </div>
          <div className="space-y-4">
            {part2.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.05 }}
                className="bg-white rounded-2xl shadow-card hover:shadow-card-hover transition-all p-6"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-blue-600" />
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.content}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Part III - Fees */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-purple-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold">III</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900">{t('pricingPolicyPart3')}</h2>
          </div>
          <div className="space-y-4">
            {part3.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 + index * 0.05 }}
                className="bg-white rounded-2xl shadow-card hover:shadow-card-hover transition-all p-6"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <Receipt className="w-5 h-5 text-purple-600" />
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.content}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Part IV - Commission */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-orange-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold">IV</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900">{t('pricingPolicyPart4')}</h2>
          </div>
          <div className="space-y-4">
            {part4.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.1 + index * 0.05 }}
                className="bg-white rounded-2xl shadow-card hover:shadow-card-hover transition-all p-6"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-orange-600" />
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.content}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Part V - Affiliate Commission */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-pink-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold">V</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900">{t('pricingPolicyPart5')}</h2>
          </div>
          <div className="space-y-4">
            {part5.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.3 + index * 0.05 }}
                className="bg-white rounded-2xl shadow-card hover:shadow-card-hover transition-all p-6"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <Users className="w-5 h-5 text-pink-600" />
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.content}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Part VI - Taxes & Refunds */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-cyan-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold">VI</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900">{t('pricingPolicyPart6')}</h2>
          </div>
          <div className="space-y-4">
            {part6.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.5 + index * 0.05 }}
                className="bg-white rounded-2xl shadow-card hover:shadow-card-hover transition-all p-6"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <RefreshCw className="w-5 h-5 text-cyan-600" />
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.content}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Part VII - Changes & Updates */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.6 }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-red-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold">VII</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900">{t('pricingPolicyPart7')}</h2>
          </div>
          <div className="space-y-4">
            {part7.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.7 + index * 0.05 }}
                className="bg-white rounded-2xl shadow-card hover:shadow-card-hover transition-all p-6"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <CreditCard className="w-5 h-5 text-red-600" />
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.content}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Important Notice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.8 }}
          className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-8"
        >
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
              <AlertTriangle className="w-5 h-5 text-amber-600" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">{t('importantNotice')}</h4>
              <p className="text-sm text-gray-600">
                {t('pricingPolicyNotice')}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.9 }}
          className="bg-green-600 rounded-2xl p-8 text-center text-white"
        >
          <h3 className="text-2xl font-bold mb-3">
            {t('pricingPolicyContactTitle')}
          </h3>
          <p className="text-green-100 mb-6">
            {t('pricingPolicyContactDesc')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-green-600 font-semibold rounded-xl hover:bg-green-50 transition-colors"
            >
              <Phone className="w-5 h-5" />
              {t('contactNow')}
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
