'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { BarChart3, FileText, Target, Search, AlertTriangle, Settings } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import PageHeader from '@/components/PageHeader'

export default function DisplayPolicyPage() {
  const { t } = useLanguage()

  const tableOfContents = [
    { id: 'general', title: t('displayPolicyPart1'), icon: FileText },
    { id: 'ranking', title: t('displayPolicyPart2'), icon: BarChart3 },
    { id: 'mechanisms', title: t('displayPolicyPart3'), icon: Settings },
    { id: 'personalization', title: t('displayPolicyPart4'), icon: Target },
    { id: 'restrictions', title: t('displayPolicyPart5'), icon: AlertTriangle },
    { id: 'notification', title: t('displayPolicyPart6'), icon: Search },
  ]

  const generalSections = [
    { title: t('displayPolicyArt1Title'), content: t('displayPolicyArt1Content') },
    { title: t('displayPolicyArt2Title'), content: t('displayPolicyArt2Content') },
    { title: t('displayPolicyArt3Title'), content: t('displayPolicyArt3Content') },
    { title: t('displayPolicyArt4Title'), content: t('displayPolicyArt4Content') },
  ]

  const rankingSections = [
    { title: t('displayPolicyArt5Title'), content: t('displayPolicyArt5Content') },
    { title: t('displayPolicyArt6Title'), content: t('displayPolicyArt6Content') },
    { title: t('displayPolicyArt7Title'), content: t('displayPolicyArt7Content') },
    { title: t('displayPolicyArt8Title'), content: t('displayPolicyArt8Content') },
    { title: t('displayPolicyArt9Title'), content: t('displayPolicyArt9Content') },
    { title: t('displayPolicyArt10Title'), content: t('displayPolicyArt10Content') },
    { title: t('displayPolicyArt11Title'), content: t('displayPolicyArt11Content') },
  ]

  const mechanismSections = [
    { title: t('displayPolicyArt12Title'), content: t('displayPolicyArt12Content') },
    { title: t('displayPolicyArt13Title'), content: t('displayPolicyArt13Content') },
    { title: t('displayPolicyArt14Title'), content: t('displayPolicyArt14Content') },
    { title: t('displayPolicyArt15Title'), content: t('displayPolicyArt15Content') },
    { title: t('displayPolicyArt16Title'), content: t('displayPolicyArt16Content') },
    { title: t('displayPolicyArt17Title'), content: t('displayPolicyArt17Content') },
    { title: t('displayPolicyArt18Title'), content: t('displayPolicyArt18Content') },
  ]

  const personalizationSections = [
    { title: t('displayPolicyArt19Title'), content: t('displayPolicyArt19Content') },
    { title: t('displayPolicyArt20Title'), content: t('displayPolicyArt20Content') },
    { title: t('displayPolicyArt21Title'), content: t('displayPolicyArt21Content') },
    { title: t('displayPolicyArt22Title'), content: t('displayPolicyArt22Content') },
  ]

  const restrictionSections = [
    { title: t('displayPolicyArt23Title'), content: t('displayPolicyArt23Content') },
    { title: t('displayPolicyArt24Title'), content: t('displayPolicyArt24Content') },
    { title: t('displayPolicyArt25Title'), content: t('displayPolicyArt25Content') },
    { title: t('displayPolicyArt26Title'), content: t('displayPolicyArt26Content') },
  ]

  const notificationSections = [
    { title: t('displayPolicyArt27Title'), content: t('displayPolicyArt27Content') },
    { title: t('displayPolicyArt28Title'), content: t('displayPolicyArt28Content') },
    { title: t('displayPolicyArt29Title'), content: t('displayPolicyArt29Content') },
    { title: t('displayPolicyArt30Title'), content: t('displayPolicyArt30Content') },
    { title: t('displayPolicyArt31Title'), content: t('displayPolicyArt31Content') },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <PageHeader />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <BarChart3 className="w-4 h-4" />
            {t('legal')}
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t('displayPolicyPageTitle')}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('displayPolicyPageSubtitle')}
          </p>
        </motion.div>

        {/* Table of Contents */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white rounded-3xl shadow-xl p-6 mb-8"
        >
          <h2 className="text-xl font-bold text-gray-900 mb-4">{t('tableOfContents')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {tableOfContents.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors"
              >
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-green-600" />
                </div>
                <span className="text-gray-700 font-medium">{item.title}</span>
              </a>
            ))}
          </div>
        </motion.div>

        {/* Part I - General */}
        <motion.div
          id="general"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-green-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold">I</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900">{t('displayPolicyPart1')}</h2>
          </div>
          <div className="space-y-4">
            {generalSections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.05 }}
                className="bg-white rounded-2xl shadow-card hover:shadow-card-hover transition-all p-6"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3">{section.title}</h3>
                <p className="text-gray-600 leading-relaxed whitespace-pre-wrap">
                  {section.content}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Part II - Ranking */}
        <motion.div
          id="ranking"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold">II</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900">{t('displayPolicyPart2')}</h2>
          </div>
          <div className="space-y-4">
            {rankingSections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.05 }}
                className="bg-white rounded-2xl shadow-card hover:shadow-card-hover transition-all p-6"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3">{section.title}</h3>
                <p className="text-gray-600 leading-relaxed whitespace-pre-wrap">
                  {section.content}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Part III - Mechanisms */}
        <motion.div
          id="mechanisms"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-purple-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold">III</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900">{t('displayPolicyPart3')}</h2>
          </div>
          <div className="space-y-4">
            {mechanismSections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 + index * 0.05 }}
                className="bg-white rounded-2xl shadow-card hover:shadow-card-hover transition-all p-6"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3">{section.title}</h3>
                <p className="text-gray-600 leading-relaxed whitespace-pre-wrap">
                  {section.content}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Part IV - Personalization */}
        <motion.div
          id="personalization"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-orange-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold">IV</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900">{t('displayPolicyPart4')}</h2>
          </div>
          <div className="space-y-4">
            {personalizationSections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.1 + index * 0.05 }}
                className="bg-white rounded-2xl shadow-card hover:shadow-card-hover transition-all p-6"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3">{section.title}</h3>
                <p className="text-gray-600 leading-relaxed whitespace-pre-wrap">
                  {section.content}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Part V - Restrictions */}
        <motion.div
          id="restrictions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-red-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold">V</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900">{t('displayPolicyPart5')}</h2>
          </div>
          <div className="space-y-4">
            {restrictionSections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.3 + index * 0.05 }}
                className="bg-white rounded-2xl shadow-card hover:shadow-card-hover transition-all p-6"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3">{section.title}</h3>
                <p className="text-gray-600 leading-relaxed whitespace-pre-wrap">
                  {section.content}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Part VI - Notification */}
        <motion.div
          id="notification"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-cyan-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold">VI</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900">{t('displayPolicyPart6')}</h2>
          </div>
          <div className="space-y-4">
            {notificationSections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.5 + index * 0.05 }}
                className="bg-white rounded-2xl shadow-card hover:shadow-card-hover transition-all p-6"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3">{section.title}</h3>
                <p className="text-gray-600 leading-relaxed whitespace-pre-wrap">
                  {section.content}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.6 }}
          className="bg-green-600 rounded-2xl p-8 text-center text-white"
        >
          <h3 className="text-2xl font-bold mb-3">
            {t('displayPolicyContactTitle')}
          </h3>
          <p className="text-green-100 mb-6">
            {t('pricingPolicyContactDesc')}
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-green-600 font-semibold rounded-xl hover:bg-green-50 transition-colors"
          >
            {t('contactNow')}
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
