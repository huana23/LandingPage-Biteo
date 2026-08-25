'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Handshake, TrendingUp, Shield, Clock, Award, FileText, Users, CheckCircle, Star } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import PageHeader from '@/components/PageHeader'

export default function PartnerPolicyPage() {
  const { t } = useLanguage()

  const partnerTypes = [
    {
      icon: Users,
      title: t('ctv'),
      description: t('ctvDesc'),
      benefits: [t('unlimitedIncome'), t('flexibleTime'), t('noCapital'), t('freeTraining')],
      cta: t('registerCTV'),
      href: '/dang-ky-nhan-vien-di-cho-ho',
      color: 'from-green-500 to-emerald-600',
    },
    {
      icon: Award,
      title: t('roleShopper'),
      description: t('collabDesc'),
      benefits: [t('incomePerOrder'), t('flexibleSchedule'), t('workInsurance'), t('professionalTraining')],
      cta: t('registerStaff'),
      href: '/dang-ky-nhan-vien-di-cho-ho',
      color: 'from-blue-500 to-indigo-600',
    },
    {
      icon: Star,
      title: t('businessPartners'),
      description: t('businessPartnersDesc'),
      benefits: [t('reachNewCustomers'), t('modernTools'), t('marketingSupport'), t('detailedReports')],
      cta: t('contactCooperation'),
      href: '/contact',
      color: 'from-purple-500 to-pink-600',
    },
  ]

  const policies = [
    { title: t('partnerRights'), content: t('partnerRightsText') },
    { title: t('partnerObligations'), content: t('partnerObligationsText') },
    { title: t('paymentSettlement'), content: t('paymentSettlementText') },
    { title: t('qualityRating'), content: t('qualityRatingText') },
    { title: t('privacyData'), content: t('privacyDataText') },
    { title: t('terminateCooperation'), content: t('terminateCooperationText') },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <PageHeader backHref="/" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Handshake className="w-4 h-4" />
            {t('partnerPolicy')}
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t('partnerPolicyTitle')} <span className="text-green-600"></span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('partnerPolicyDesc')}
          </p>
        </motion.div>

        {/* Partner Types */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {partnerTypes.map((type, index) => (
            <motion.div
              key={type.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              whileHover={{ y: -8 }}
              className={`bg-gradient-to-br ${type.color} rounded-3xl p-6 text-white shadow-xl hover:shadow-2xl transition-all`}
            >
              <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-5">
                <type.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-2">{type.title}</h3>
              <p className="text-white/80 text-sm mb-5">{type.description}</p>
              <ul className="space-y-2 mb-6">
                {type.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-white/80" />
                    {benefit}
                  </li>
                ))}
              </ul>
              <Link
                href={type.href}
                className="block w-full py-3 bg-white text-gray-900 font-semibold rounded-xl text-center hover:bg-white/90 transition-colors"
              >
                {type.cta}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Policy Sections */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            {t('policyForPartners')}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {policies.map((policy, index) => (
              <motion.div
                key={policy.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.05 }}
                className="bg-white rounded-2xl shadow-card hover:shadow-card-hover transition-all p-6"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-green-600" />
                  {policy.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {policy.content}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Why Partner with Biteo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="bg-white rounded-3xl shadow-xl p-8 mb-12"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            {t('whyChooseBiteo')}
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{t('growth')}</h3>
              <p className="text-sm text-gray-600">{t('growthDesc')}</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{t('safe')}</h3>
              <p className="text-sm text-gray-600">{t('safeDesc')}</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{t('flexible')}</h3>
              <p className="text-sm text-gray-600">{t('flexibleDesc')}</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{t('reputable')}</h3>
              <p className="text-sm text-gray-600">{t('reputableDesc')}</p>
            </div>
          </div>
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-green-600 rounded-2xl p-8 text-center text-white"
        >
          <h3 className="text-2xl font-bold mb-3">
            {t('readyPartner')}
          </h3>
          <p className="text-green-100 mb-6">
            {t('contactForAdvice')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-green-600 font-semibold rounded-xl hover:bg-green-50 transition-colors"
            >
              {t('contactConsult')}
            </Link>
            <Link
              href="/dang-ky-nhan-vien-di-cho-ho"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-green-500 text-white font-semibold rounded-xl hover:bg-green-400 transition-colors border-2 border-white/30"
            >
              {t('registerNow')}
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
