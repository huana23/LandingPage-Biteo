'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FileText, MessageSquare, CheckCircle, Clock, AlertTriangle, Phone, Shield } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import PageHeader from '@/components/PageHeader'

export default function ComplaintHandlingPage() {
  const { t } = useLanguage()

  const tableOfContents = [
    { id: 'general', title: t('complaintHandlingPart1'), icon: FileText },
    { id: 'scope', title: t('complaintHandlingPart2'), icon: MessageSquare },
    { id: 'process', title: t('complaintHandlingPart3'), icon: CheckCircle },
    { id: 'levels', title: t('complaintHandlingPart4'), icon: AlertTriangle },
    { id: 'urgent', title: t('complaintHandlingPart5'), icon: Clock },
    { id: 'rights', title: t('complaintHandlingPart6'), icon: Shield },
  ]

  const generalSections = [
    { title: t('complaintHandlingArt1Title'), content: t('complaintHandlingArt1Content') },
    { title: t('complaintHandlingArt2Title'), content: t('complaintHandlingArt2Content') },
    { title: t('complaintHandlingArt3Title'), content: t('complaintHandlingArt3Content') },
  ]

  const scopeSections = [
    { title: t('complaintHandlingArt4Title'), content: t('complaintHandlingArt4Content') },
    { title: t('complaintHandlingArt5Title'), content: t('complaintHandlingArt5Content') },
    { title: t('complaintHandlingArt6Title'), content: t('complaintHandlingArt6Content') },
    { title: t('complaintHandlingArt7Title'), content: t('complaintHandlingArt7Content') },
  ]

  const processSections = [
    { title: t('complaintHandlingArt8Title'), content: t('complaintHandlingArt8Content') },
    { title: t('complaintHandlingArt9Title'), content: t('complaintHandlingArt9Content') },
    { title: t('complaintHandlingArt10Title'), content: t('complaintHandlingArt10Content') },
    { title: t('complaintHandlingArt11Title'), content: t('complaintHandlingArt11Title') },
    { title: t('complaintHandlingArt12Title'), content: t('complaintHandlingArt12Content') },
    { title: t('complaintHandlingArt13Title'), content: t('complaintHandlingArt13Content') },
    { title: t('complaintHandlingArt14Title'), content: t('complaintHandlingArt14Content') },
  ]

  const levelSections = [
    { title: t('complaintHandlingArt15Title'), content: t('complaintHandlingArt15Content') },
    { title: t('complaintHandlingArt16Title'), content: t('complaintHandlingArt16Content') },
    { title: t('complaintHandlingArt17Title'), content: t('complaintHandlingArt17Content') },
    { title: t('complaintHandlingArt18Title'), content: t('complaintHandlingArt18Content') },
  ]

  const urgentSections = [
    { title: t('complaintHandlingArt19Title'), content: t('complaintHandlingArt19Content') },
    { title: t('complaintHandlingArt20Title'), content: t('complaintHandlingArt20Content') },
    { title: t('complaintHandlingArt21Title'), content: t('complaintHandlingArt21Content') },
  ]

  const rightsSections = [
    { title: t('complaintHandlingArt22Title'), content: t('complaintHandlingArt22Content') },
    { title: t('complaintHandlingArt23Title'), content: t('complaintHandlingArt23Content') },
    { title: t('complaintHandlingArt24Title'), content: t('complaintHandlingArt24Content') },
    { title: t('complaintHandlingArt25Title'), content: t('complaintHandlingArt25Content') },
    { title: t('complaintHandlingArt26Title'), content: t('complaintHandlingArt26Content') },
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
            <MessageSquare className="w-4 h-4" />
            {t('legal')}
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t('complaintHandlingPageTitle')}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('complaintHandlingPageSubtitle')}
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
            <h2 className="text-2xl font-bold text-gray-900">{t('complaintHandlingPart1')}</h2>
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

        {/* Part II - Scope */}
        <motion.div
          id="scope"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold">II</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900">{t('complaintHandlingPart2')}</h2>
          </div>
          <div className="space-y-4">
            {scopeSections.map((section, index) => (
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

        {/* Part III - Process */}
        <motion.div
          id="process"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-purple-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold">III</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900">{t('complaintHandlingPart3')}</h2>
          </div>
          <div className="space-y-4">
            {processSections.map((section, index) => (
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

        {/* Part IV - Levels */}
        <motion.div
          id="levels"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-orange-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold">IV</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900">{t('complaintHandlingPart4')}</h2>
          </div>
          <div className="space-y-4">
            {levelSections.map((section, index) => (
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

        {/* Part V - Urgent */}
        <motion.div
          id="urgent"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-red-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold">V</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900">{t('complaintHandlingPart5')}</h2>
          </div>
          <div className="space-y-4">
            {urgentSections.map((section, index) => (
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

        {/* Part VI - Rights */}
        <motion.div
          id="rights"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-cyan-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold">VI</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900">{t('complaintHandlingPart6')}</h2>
          </div>
          <div className="space-y-4">
            {rightsSections.map((section, index) => (
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
            {t('complaintHandlingContactTitle')}
          </h3>
          <p className="text-green-100 mb-6">
            {t('pricingPolicyContactDesc')}
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-green-600 font-semibold rounded-xl hover:bg-green-50 transition-colors"
          >
            <Phone className="w-5 h-5" />
            {t('contactNow')}
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
