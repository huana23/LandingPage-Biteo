'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Truck, FileText, Package, MapPin, Clock, AlertTriangle, CheckCircle } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import PageHeader from '@/components/PageHeader'

export default function DeliveryPolicyPage() {
  const { t } = useLanguage()

  const tableOfContents = [
    { id: 'general', title: t('deliveryPolicyPart1'), icon: FileText },
    { id: 'methods', title: t('deliveryPolicyPart2'), icon: Truck },
    { id: 'packaging', title: t('deliveryPolicyPart3'), icon: Package },
    { id: 'delivery', title: t('deliveryPolicyPart4'), icon: MapPin },
    { id: 'issues', title: t('deliveryPolicyPart5'), icon: AlertTriangle },
    { id: 'responsibilities', title: t('deliveryPolicyPart6'), icon: CheckCircle },
  ]

  const generalSections = [
    { title: t('deliveryPolicyArt1Title'), content: t('deliveryPolicyArt1Content') },
    { title: t('deliveryPolicyArt2Title'), content: t('deliveryPolicyArt2Content') },
    { title: t('deliveryPolicyArt3Title'), content: t('deliveryPolicyArt3Content') },
    { title: t('deliveryPolicyArt4Title'), content: t('deliveryPolicyArt4Content') },
  ]

  const methodSections = [
    { title: t('deliveryPolicyArt5Title'), content: t('deliveryPolicyArt5Content') },
    { title: t('deliveryPolicyArt6Title'), content: t('deliveryPolicyArt6Content') },
    { title: t('deliveryPolicyArt7Title'), content: t('deliveryPolicyArt7Content') },
    { title: t('deliveryPolicyArt8Title'), content: t('deliveryPolicyArt8Content') },
    { title: t('deliveryPolicyArt9Title'), content: t('deliveryPolicyArt9Content') },
  ]

  const packagingSections = [
    { title: t('deliveryPolicyArt10Title'), content: t('deliveryPolicyArt10Content') },
    { title: t('deliveryPolicyArt11Title'), content: t('deliveryPolicyArt11Content') },
    { title: t('deliveryPolicyArt12Title'), content: t('deliveryPolicyArt12Content') },
    { title: t('deliveryPolicyArt13Title'), content: t('deliveryPolicyArt13Content') },
  ]

  const deliverySections = [
    { title: t('deliveryPolicyArt14Title'), content: t('deliveryPolicyArt14Content') },
    { title: t('deliveryPolicyArt15Title'), content: t('deliveryPolicyArt15Content') },
    { title: t('deliveryPolicyArt16Title'), content: t('deliveryPolicyArt16Content') },
    { title: t('deliveryPolicyArt17Title'), content: t('deliveryPolicyArt17Content') },
    { title: t('deliveryPolicyArt18Title'), content: t('deliveryPolicyArt18Content') },
    { title: t('deliveryPolicyArt19Title'), content: t('deliveryPolicyArt19Content') },
  ]

  const issueSections = [
    { title: t('deliveryPolicyArt20Title'), content: t('deliveryPolicyArt20Content') },
    { title: t('deliveryPolicyArt21Title'), content: t('deliveryPolicyArt21Content') },
    { title: t('deliveryPolicyArt22Title'), content: t('deliveryPolicyArt22Content') },
    { title: t('deliveryPolicyArt23Title'), content: t('deliveryPolicyArt23Content') },
  ]

  const responsibilitySections = [
    { title: t('deliveryPolicyArt24Title'), content: t('deliveryPolicyArt24Content') },
    { title: t('deliveryPolicyArt25Title'), content: t('deliveryPolicyArt25Content') },
    { title: t('deliveryPolicyArt26Title'), content: t('deliveryPolicyArt26Content') },
    { title: t('deliveryPolicyArt27Title'), content: t('deliveryPolicyArt27Content') },
    { title: t('deliveryPolicyArt28Title'), content: t('deliveryPolicyArt28Content') },
    { title: t('deliveryPolicyArt29Title'), content: t('deliveryPolicyArt29Content') },
    { title: t('deliveryPolicyArt30Title'), content: t('deliveryPolicyArt30Content') },
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
            <Truck className="w-4 h-4" />
            {t('legal')}
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t('deliveryPolicyPageTitle')}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('deliveryPolicyPageSubtitle')}
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
            <h2 className="text-2xl font-bold text-gray-900">{t('deliveryPolicyPart1')}</h2>
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

        {/* Part II - Delivery Methods */}
        <motion.div
          id="methods"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold">II</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900">{t('deliveryPolicyPart2')}</h2>
          </div>
          <div className="space-y-4">
            {methodSections.map((section, index) => (
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

        {/* Part III - Packaging */}
        <motion.div
          id="packaging"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-purple-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold">III</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900">{t('deliveryPolicyPart3')}</h2>
          </div>
          <div className="space-y-4">
            {packagingSections.map((section, index) => (
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

        {/* Part IV - Delivery Process */}
        <motion.div
          id="delivery"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-orange-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold">IV</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900">{t('deliveryPolicyPart4')}</h2>
          </div>
          <div className="space-y-4">
            {deliverySections.map((section, index) => (
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

        {/* Part V - Issues */}
        <motion.div
          id="issues"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-red-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold">V</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900">{t('deliveryPolicyPart5')}</h2>
          </div>
          <div className="space-y-4">
            {issueSections.map((section, index) => (
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

        {/* Part VI - Responsibilities */}
        <motion.div
          id="responsibilities"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-cyan-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold">VI</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900">{t('deliveryPolicyPart6')}</h2>
          </div>
          <div className="space-y-4">
            {responsibilitySections.map((section, index) => (
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
            {t('deliveryPolicyContactTitle')}
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
