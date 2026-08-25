'use client'

import { motion } from 'framer-motion'
import {
  ShoppingCart,
  MapPin,
  Smartphone,
  Package,
  Store,
  Truck,
  Clock,
  Users,
  CheckCircle2,
  ArrowRight,
  Heart,
  Search,
  Calendar,
  RefreshCw,
  Sparkles,
  Leaf,
  Home,
  CreditCard,
  Star,
  ChevronRight,
  Handshake,
} from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import PageHeader from '@/components/PageHeader'

const freshFoodItems = [
  'groceryS1Item1',
  'groceryS1Item2',
  'groceryS1Item3',
  'groceryS1Item4',
  'groceryS1Item5',
  'groceryS1Item6',
  'groceryS1Item7',
  'groceryS1Item8',
  'groceryS1Item9',
]

const localFlowSteps = [
  'groceryS2Step1',
  'groceryS2Step2',
  'groceryS2Step3',
  'groceryS2Step4',
  'groceryS2Step5',
  'groceryS2Step6',
]

const multiCategoryItems = [
  'groceryS3Item1',
  'groceryS3Item2',
  'groceryS3Item3',
  'groceryS3Item4',
  'groceryS3Item5',
  'groceryS3Item6',
  'groceryS3Item7',
]

const searchItems = [
  'groceryS4Item1',
  'groceryS4Item2',
  'groceryS4Item3',
  'groceryS4Item4',
  'groceryS4Item5',
  'groceryS4Item6',
]

const sellerTypes = [
  'groceryS5Item1',
  'groceryS5Item2',
  'groceryS5Item3',
  'groceryS5Item4',
  'groceryS5Item5',
  'groceryS5Item6',
  'groceryS5Item7',
  'groceryS5Item8',
]

const qualityItems = [
  'groceryS6Item1',
  'groceryS6Item2',
  'groceryS6Item3',
  'groceryS6Item4',
  'groceryS6Item5',
  'groceryS6Item6',
]

const orderSteps = [
  'groceryS7Step1',
  'groceryS7Step2',
  'groceryS7Step3',
  'groceryS7Step4',
  'groceryS7Step5',
  'groceryS7Step6',
  'groceryS7Step7',
]

const deliverySteps = [
  'groceryS8Step1',
  'groceryS8Step2',
  'groceryS8Step3',
  'groceryS8Step4',
]

const timeSavingItems = [
  'groceryS9Item1',
  'groceryS9Item2',
  'groceryS9Item3',
  'groceryS9Item4',
  'groceryS9Item5',
  'groceryS9Item6',
]

const familyItems = [
  'groceryS10Item1',
  'groceryS10Item2',
  'groceryS10Item3',
  'groceryS10Item4',
  'groceryS10Item5',
  'groceryS10Item6',
]

const localConnectionSteps = [
  'groceryS11Step1',
  'groceryS11Step2',
  'groceryS11Step3',
  'groceryS11Step4',
  'groceryS11Step5',
  'groceryS11Step6',
  'groceryS11Step7',
]

const integrationLinks = [
  'groceryS12Link1',
  'groceryS12Link2',
  'groceryS12Link3',
  'groceryS12Link4',
]

const ecosystemJourney = [
  'groceryS13Step1',
  'groceryS13Step2',
  'groceryS13Step3',
  'groceryS13Step4',
  'groceryS13Step5',
  'groceryS13Step6',
]

const valueItems = [
  'groceryS14Item1',
  'groceryS14Item2',
  'groceryS14Item3',
  'groceryS14Item4',
  'groceryS14Item5',
]

export default function DiChoHoPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">
      <PageHeader />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <ShoppingCart className="w-4 h-4" />
            {t('groceryHero')}
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            {t('groceryPageTitle')}
          </h1>
          <p className="text-lg text-green-500 font-medium mb-8">
            {t('groceryPageHeroTag')}
          </p>

          {/* Intro Card */}
          <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 lg:p-10 text-left">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              {t('groceryPageIntroTitle')}
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              {t('groceryPageIntroDesc')}
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              {t('groceryPageIntroText1')}
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              {t('groceryPageIntroText2')}
            </p>
            <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-2xl p-5 my-6 text-center font-semibold">
              {t('groceryPageSlogan')}
            </div>
            <p className="text-gray-900 font-semibold mb-4">
              {t('groceryPageIntroText3')}
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              {t('groceryPageIntroText4')}
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              {t('groceryPageIntroText5')}
            </p>
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-5 border-l-4 border-green-500">
              <p className="text-gray-700 leading-relaxed font-medium">
                {t('groceryPageEmoji1')} {t('groceryPageEmoji2')} {t('groceryPageEmoji3')} {t('groceryPageEmoji4')}
              </p>
            </div>
            <p className="text-gray-900 font-semibold mt-6">
              {t('groceryPageOutro')}
            </p>
          </div>
        </motion.section>

        {/* Section 1: Fresh Food */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 lg:p-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                <Leaf className="w-7 h-7 text-white" />
              </div>
              <div>
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
                  {t('groceryS1Title')}
                </h2>
                <p className="text-green-600 font-medium">{t('groceryS1SubTitle')}</p>
              </div>
            </div>
            <p className="text-gray-600 mb-4 leading-relaxed">
              {t('groceryS1Desc')}
            </p>
            <p className="text-gray-700 font-medium mb-6">
              {t('groceryS1SubDesc')}
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
              {freshFoodItems.map((key, idx) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="bg-green-50 rounded-xl p-4 flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-800 text-sm">{t(key)}</span>
                </motion.div>
              ))}
            </div>
            <div className="bg-green-50 rounded-2xl p-5 border-l-4 border-green-500">
              <p className="text-gray-700 leading-relaxed italic">
                💡 {t('groceryS1Note')}
              </p>
            </div>
          </div>
        </motion.section>

        {/* Section 2: Local Area */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-6 sm:p-8 lg:p-10">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
                {t('groceryS2Title')}
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                {t('groceryS2Desc')}
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 mb-6 max-w-4xl mx-auto">
              <p className="text-center text-lg font-semibold text-gray-800 mb-4">
                {t('groceryS2Flow')}
              </p>
              <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3">
                {localFlowSteps.map((step, idx, arr) => (
                  <span key={idx} className="flex items-center gap-2">
                    <span className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-md">
                      {t(step)}
                    </span>
                    {idx < arr.length - 1 && (
                      <ChevronRight className="w-4 h-4 text-gray-400 hidden sm:block" />
                    )}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-5 shadow-sm border-l-4 border-emerald-500 max-w-3xl mx-auto">
              <p className="text-gray-700 leading-relaxed italic">
                💡 {t('groceryS2Note')}
              </p>
            </div>
          </div>
        </motion.section>

        {/* Section 3: Multi-category */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 lg:p-10">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-lime-500 to-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Package className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
                {t('groceryS3Title')}
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                {t('groceryS3Desc')}
              </p>
            </div>

            <p className="text-gray-700 font-medium mb-6 text-center">
              {t('groceryS3SubDesc')}
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-6 max-w-4xl mx-auto">
              {multiCategoryItems.map((key, idx) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="bg-lime-50 rounded-xl p-4 flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-lime-500 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">{t(key)}</span>
                </motion.div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-lime-50 to-green-50 rounded-2xl p-5 border-l-4 border-lime-500 max-w-3xl mx-auto">
              <p className="text-gray-700 leading-relaxed italic">
                💡 {t('groceryS3Note')}
              </p>
            </div>
          </div>
        </motion.section>

        {/* Section 4: Easy Search */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-3xl p-6 sm:p-8 lg:p-10">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
                {t('groceryS4Title')}
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto mb-2">
                {t('groceryS4Desc')}
              </p>
              <p className="text-gray-700 font-medium">
                {t('groceryS4SubDesc')}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6 max-w-4xl mx-auto">
              {searchItems.map((key, idx) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="bg-white rounded-xl p-4 flex items-center gap-3 shadow-sm"
                >
                  <CheckCircle2 className="w-5 h-5 text-teal-500 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">{t(key)}</span>
                </motion.div>
              ))}
            </div>

            <div className="bg-white rounded-2xl p-5 shadow-sm border-l-4 border-teal-500 max-w-3xl mx-auto">
              <p className="text-gray-700 leading-relaxed italic">
                💡 {t('groceryS4Note')}
              </p>
            </div>
          </div>
        </motion.section>

        {/* Section 5: Local Sellers */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 lg:p-10">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Store className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
                {t('groceryS5Title')}
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                {t('groceryS5Desc')}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-6 max-w-4xl mx-auto">
              {sellerTypes.map((key, idx) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="bg-cyan-50 rounded-xl p-4 flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-cyan-500 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">{t(key)}</span>
                </motion.div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-2xl p-5 border-l-4 border-cyan-500 max-w-3xl mx-auto">
              <p className="text-gray-700 leading-relaxed italic">
                💡 {t('groceryS5Note')}
              </p>
            </div>
          </div>
        </motion.section>

        {/* Section 6: Fresh Quality */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-3xl p-6 sm:p-8 lg:p-10">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
                {t('groceryS6Title')}
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                {t('groceryS6Desc')}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6 max-w-4xl mx-auto">
              {qualityItems.map((key, idx) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="bg-white rounded-xl p-4 flex items-center gap-3 shadow-sm"
                >
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">{t(key)}</span>
                </motion.div>
              ))}
            </div>

            <div className="bg-white rounded-2xl p-5 shadow-sm border-l-4 border-green-500 max-w-3xl mx-auto">
              <p className="text-gray-700 leading-relaxed italic">
                💡 {t('groceryS6Note')}
              </p>
            </div>
          </div>
        </motion.section>

        {/* Section 7: Order Process */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 lg:p-10">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <ShoppingCart className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
                {t('groceryS7Title')}
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
                {t('groceryS7Desc')}
              </p>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 mb-6 max-w-4xl mx-auto">
              <div className="space-y-3">
                {orderSteps.map((step, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                      {idx + 1}
                    </div>
                    <span className="text-gray-700">{t(step)}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-5 border-l-4 border-blue-500 max-w-3xl mx-auto">
              <p className="text-gray-700 leading-relaxed italic">
                💡 {t('groceryS7Note')}
              </p>
            </div>
          </div>
        </motion.section>

        {/* Section 8: Delivery */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-br from-emerald-500 to-green-500 rounded-3xl shadow-xl p-6 sm:p-8 lg:p-10 text-white">
            <div className="text-center mb-8">
              <Truck className="w-12 h-12 mx-auto mb-3 opacity-90" />
              <h2 className="text-2xl lg:text-3xl font-bold mb-3">
                {t('groceryS8Title')}
              </h2>
              <p className="opacity-90 max-w-3xl mx-auto mb-2">
                {t('groceryS8Desc')}
              </p>
              <p className="opacity-90 font-medium">
                {t('groceryS8SubDesc')}
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-6 border border-white/20 max-w-3xl mx-auto">
              <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3">
                {deliverySteps.map((step, idx, arr) => (
                  <span key={idx} className="flex items-center gap-2">
                    <span className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium border border-white/30">
                      {t(step)}
                    </span>
                    {idx < arr.length - 1 && (
                      <ArrowRight className="w-4 h-4 text-white/60 hidden sm:block" />
                    )}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/20 max-w-3xl mx-auto">
              <p className="leading-relaxed italic opacity-95">
                💡 {t('groceryS8Note')}
              </p>
            </div>
          </div>
        </motion.section>

        {/* Section 9: Time Saving */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 lg:p-10">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
                {t('groceryS9Title')}
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                {t('groceryS9Desc')}
              </p>
            </div>

            <p className="text-gray-700 font-medium mb-6 text-center">
              {t('groceryS9SubDesc')}
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6 max-w-4xl mx-auto">
              {timeSavingItems.map((key, idx) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="bg-amber-50 rounded-xl p-4 flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-amber-500 flex-shrink-0" />
                  <span className="text-gray-800 text-sm">{t(key)}</span>
                </motion.div>
              ))}
            </div>

            <div className="bg-white rounded-2xl p-5 shadow-sm border-l-4 border-amber-500 max-w-3xl mx-auto">
              <p className="text-gray-700 leading-relaxed">
                <span className="font-semibold">{t('groceryS9Instead')}</span>
                <br />
                <span className="text-gray-500">{t('groceryS9Old')}</span>
                <br />
                <span className="text-green-600 font-medium">{t('groceryS9New')}</span>
              </p>
            </div>
          </div>
        </motion.section>

        {/* Section 10: Family */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-3xl p-6 sm:p-8 lg:p-10">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
                {t('groceryS10Title')}
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                {t('groceryS10Desc')}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6 max-w-4xl mx-auto">
              {familyItems.map((key, idx) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="bg-white rounded-xl p-4 flex items-center gap-3 shadow-sm"
                >
                  <CheckCircle2 className="w-5 h-5 text-pink-500 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">{t(key)}</span>
                </motion.div>
              ))}
            </div>

            <div className="bg-white rounded-2xl p-5 shadow-sm border-l-4 border-pink-500 max-w-3xl mx-auto">
              <p className="text-gray-700 leading-relaxed italic">
                💡 {t('groceryS10Note')}
              </p>
            </div>
          </div>
        </motion.section>

        {/* Section 11: Local Connection */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 lg:p-10">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Home className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
                {t('groceryS11Title')}
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto mb-2">
                {t('groceryS11Desc')}
              </p>
              <p className="text-gray-700 font-medium">
                {t('groceryS11SubDesc')}
              </p>
            </div>

            <div className="bg-gradient-to-r from-violet-50 to-purple-50 rounded-2xl p-6 mb-6 max-w-4xl mx-auto">
              <p className="text-center text-lg font-semibold text-gray-800 mb-4">
                {t('groceryS11Flow')}
              </p>
              <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3">
                {localConnectionSteps.map((step, idx, arr) => (
                  <span key={idx} className="flex items-center gap-2">
                    <span className="bg-gradient-to-r from-violet-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-md">
                      {t(step)}
                    </span>
                    {idx < arr.length - 1 && (
                      <ChevronRight className="w-4 h-4 text-gray-400 hidden sm:block" />
                    )}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-5 shadow-sm border-l-4 border-violet-500 max-w-3xl mx-auto">
              <p className="text-gray-700 leading-relaxed italic">
                💡 {t('groceryS11Note')}
              </p>
            </div>
          </div>
        </motion.section>

        {/* Section 12: Integration */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-3xl p-6 sm:p-8 lg:p-10">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Handshake className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
                {t('groceryS12Title')}
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                {t('groceryS12Desc')}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mb-6 max-w-3xl mx-auto">
              {integrationLinks.map((key, idx) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="bg-white rounded-2xl p-5 shadow-sm text-center"
                >
                  <p className="text-gray-700 font-medium">{t(key)}</p>
                </motion.div>
              ))}
            </div>

            <div className="bg-white rounded-2xl p-5 shadow-sm border-l-4 border-indigo-500 max-w-3xl mx-auto">
              <p className="text-gray-700 leading-relaxed italic">
                💡 {t('groceryS12Note')}
              </p>
            </div>
          </div>
        </motion.section>

        {/* Section 13: E-commerce */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 lg:p-10">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
                {t('groceryS13Title')}
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                {t('groceryS13Desc')}
              </p>
            </div>

            <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-2xl p-6 mb-6 max-w-4xl mx-auto">
              <p className="text-center text-lg font-semibold text-gray-800 mb-4">
                {t('groceryS13Flow')}
              </p>
              <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3">
                {ecosystemJourney.map((step, idx, arr) => (
                  <span key={idx} className="flex items-center gap-2">
                    <span className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-md">
                      {t(step)}
                    </span>
                    {idx < arr.length - 1 && (
                      <ChevronRight className="w-4 h-4 text-gray-400 hidden sm:block" />
                    )}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-2xl p-5 border-l-4 border-teal-500 max-w-3xl mx-auto">
              <p className="text-gray-700 leading-relaxed italic">
                💡 {t('groceryS13Note')}
              </p>
            </div>
          </div>
        </motion.section>

        {/* Section 14: Value */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-12 text-white">
            <div className="text-center mb-8">
              <Star className="w-12 h-12 mx-auto mb-3 text-yellow-400" />
              <h2 className="text-2xl lg:text-3xl font-bold mb-3">
                {t('groceryS14Title')}
              </h2>
              <p className="opacity-90 max-w-3xl mx-auto">
                {t('groceryS14Desc')}
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-6 border border-white/20 max-w-4xl mx-auto">
              <p className="text-center mb-2 opacity-80">
                {t('groceryS14Question')}
              </p>
              <p className="text-center text-xl font-bold text-yellow-300">
                "{t('groceryS14Quote')}"
              </p>
            </div>

            <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl p-6 mb-6 max-w-4xl mx-auto">
              <p className="text-center font-semibold leading-relaxed">
                {t('groceryS14Flow')}
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20 mb-6 max-w-3xl mx-auto">
              <p className="text-center font-medium leading-relaxed text-sm">
                {t('groceryS14Journey')}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6 max-w-3xl mx-auto">
              {valueItems.map((key, idx) => (
                <div key={key} className="bg-white/10 rounded-xl p-3 text-center">
                  <p className="text-sm font-medium">{t(key)}</p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl p-6 text-center">
              <p className="leading-relaxed font-medium">
                💎 {t('groceryS14Note')}
              </p>
            </div>
          </div>
        </motion.section>

        {/* Stats */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {[
            { value: '10,000+', labelKey: 'groceryProducts', icon: Package },
            { value: '1,000+', labelKey: 'grocerySellers', icon: Store },
            { value: '500K+', labelKey: 'groceryOrders', icon: ShoppingCart },
            { value: '63', labelKey: 'provinces', icon: MapPin },
          ].map((stat, index) => (
            <motion.div
              key={stat.labelKey}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-card text-center"
            >
              <stat.icon className="w-8 h-8 text-green-500 mx-auto mb-3" />
              <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-500">{t(stat.labelKey)}</div>
            </motion.div>
          ))}
        </motion.section>

        {/* CTA */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-3xl p-8 lg:p-12 text-center text-white"
        >
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">
            {t('groceryCtaTitle')}
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            {t('groceryCtaDesc')}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-4 bg-white text-green-600 font-bold rounded-xl hover:bg-gray-100 transition-all flex items-center gap-2">
              <Smartphone className="w-5 h-5" />
              {t('downloadIOS')}
            </button>
            <button className="px-8 py-4 bg-white/20 text-white font-bold rounded-xl hover:bg-white/30 transition-all flex items-center gap-2">
              <Smartphone className="w-5 h-5" />
              {t('downloadAndroid')}
            </button>
          </div>
        </motion.section>
      </div>
    </div>
  )
}
