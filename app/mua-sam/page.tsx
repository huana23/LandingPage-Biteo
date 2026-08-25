'use client'

import { motion } from 'framer-motion'
import {
  Smartphone,
  Search,
  Package,
  Store,
  Heart,
  Star,
  Users,
  Shield,
  TrendingUp,
  Tag,
  CheckCircle2,
  ArrowRight,
  Handshake,
  Video,
  Gift,
  Truck,
  Smartphone as Mobile,
  MapPin,
  Award,
  Leaf,
  Radio,
  CreditCard,
  ShoppingBag,
  Eye,
  MessageCircle,
  Share2,
  Bookmark,
  DollarSign,
  RefreshCw,
  Clock,
  ChevronRight,
  Sparkles,
  Layers,
} from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import PageHeader from '@/components/PageHeader'

const searchItems = [
  'shopS1Item1',
  'shopS1Item2',
  'shopS1Item3',
  'shopS1Item4',
  'shopS1Item5',
  'shopS1Item6',
  'shopS1Item7',
  'shopS1Item8',
]

const localSpecialtyFeatures = [
  'shopS2Item1',
  'shopS2Item2',
  'shopS2Item3',
  'shopS2Item4',
  'shopS2Item5',
  'shopS2Item6',
]

const ocopExploreItems = [
  'shopS3Item1',
  'shopS3Item2',
  'shopS3Item3',
  'shopS3Item4',
  'shopS3Item5',
]

const sellerFeatures = [
  'shopS4Item1',
  'shopS4Item2',
  'shopS4Item3',
  'shopS4Item4',
  'shopS4Item5',
  'shopS4Item6',
]

const contentFlowSteps = [
  'shopS5Step1',
  'shopS5Step2',
  'shopS5Step3',
  'shopS5Step4',
  'shopS5Step5',
  'shopS5Step6',
]

const videoContentTypes = [
  'shopS6Item1',
  'shopS6Item2',
  'shopS6Item3',
  'shopS6Item4',
  'shopS6Item5',
  'shopS6Item6',
]

const orderingSteps = [
  'shopS7Step1',
  'shopS7Step2',
  'shopS7Step3',
  'shopS7Step4',
  'shopS7Step5',
  'shopS7Step6',
  'shopS7Step7',
]

const promoItems = [
  'shopS8Item1',
  'shopS8Item2',
  'shopS8Item3',
  'shopS8Item4',
  'shopS8Item5',
  'shopS8Item6',
]

const deliverySteps = [
  'shopS9Step1',
  'shopS9Step2',
  'shopS9Step3',
  'shopS9Step4',
  'shopS9Step5',
]

const considerItems = [
  'shopS10Item1',
  'shopS10Item2',
  'shopS10Item3',
  'shopS10Item4',
  'shopS10Item5',
  'shopS10Item6',
  'shopS10Item7',
]

const connectionItems = [
  'shopS11Item1',
  'shopS11Item2',
  'shopS11Item3',
  'shopS11Item4',
]

const ecosystemFlow = [
  'shopFlow1',
  'shopFlow2',
  'shopFlow3',
  'shopFlow4',
  'shopFlow5',
  'shopFlow6',
  'shopFlow7',
  'shopFlow8',
  'shopFlow9',
  'shopFlow10',
]

const interactionItems = [
  { icon: Heart, color: 'from-red-400 to-pink-400', labelKey: 'videoS3Like' },
  { icon: MessageCircle, color: 'from-blue-400 to-indigo-400', labelKey: 'videoS3Comment' },
  { icon: Share2, color: 'from-green-400 to-emerald-400', labelKey: 'videoS3Share' },
  { icon: Bookmark, color: 'from-purple-400 to-pink-400', labelKey: 'videoS3Save' },
]

export default function MuaSamPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <PageHeader />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <ShoppingBag className="w-4 h-4" />
            {t('shoppingHero')}
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            {t('shopPageTitle')}
          </h1>
          <p className="text-lg text-purple-500 font-medium mb-8">
            {t('shopPageHeroTag')}
          </p>

          {/* Intro Card */}
          <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 lg:p-10 text-left">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              {t('shopPageIntroTitle')}
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              {t('shopPageIntroDesc')}
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              {t('shopPageIntroText1')}
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              {t('shopPageIntroText2')}
            </p>
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-2xl p-5 my-6 text-center font-semibold">
              {t('shopPageSlogan')}
            </div>
            <p className="text-gray-900 font-semibold mb-4">
              {t('shopPageIntroText3')}
            </p>
            <p className="text-gray-600 leading-relaxed">
              {t('shopPageIntroText4')}
            </p>
          </div>
        </motion.section>

        {/* Section 1: Product Discovery */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 lg:p-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                <Search className="w-7 h-7 text-white" />
              </div>
              <div>
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
                  {t('shopS1Title')}
                </h2>
                <p className="text-purple-600 font-medium">{t('shopS1SubTitle')}</p>
              </div>
            </div>
            <p className="text-gray-600 mb-4 leading-relaxed">
              {t('shopS1Desc')}
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
              {searchItems.map((key, idx) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="bg-purple-50 rounded-xl p-4 flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-purple-500 flex-shrink-0" />
                  <span className="text-gray-800 text-sm">{t(key)}</span>
                </motion.div>
              ))}
            </div>
            <div className="bg-purple-50 rounded-2xl p-5 border-l-4 border-purple-500">
              <p className="text-gray-700 leading-relaxed italic">
                💡 {t('shopS1Note')}
              </p>
            </div>
          </div>
        </motion.section>

        {/* Section 2: Local Specialties */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-6 sm:p-8 lg:p-10">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
                {t('shopS2Title')}
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                {t('shopS2Desc')}
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 mb-6 max-w-4xl mx-auto">
              <p className="text-center text-lg font-semibold text-gray-800 mb-4">
                {t('shopS2Flow')}
              </p>
              <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3">
                {['Địa phương', 'Đặc sản', 'Sản phẩm', 'Người bán', 'Câu chuyện'].map((step, idx, arr) => (
                  <span key={idx} className="flex items-center gap-2">
                    <span className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-md">
                      {step}
                    </span>
                    {idx < arr.length - 1 && (
                      <ChevronRight className="w-4 h-4 text-gray-400 hidden sm:block" />
                    )}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6 max-w-4xl mx-auto">
              {localSpecialtyFeatures.map((key, idx) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="bg-white rounded-xl p-4 flex items-center gap-3 shadow-sm"
                >
                  <CheckCircle2 className="w-5 h-5 text-amber-500 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">{t(key)}</span>
                </motion.div>
              ))}
            </div>

            <div className="bg-white rounded-2xl p-5 shadow-sm border-l-4 border-amber-500 max-w-3xl mx-auto">
              <p className="text-gray-700 leading-relaxed italic">
                💡 {t('shopS2Note')}
              </p>
            </div>
          </div>
        </motion.section>

        {/* Section 3: OCOP Products */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 lg:p-10">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
                {t('shopS3Title')}
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                {t('shopS3Desc')}
              </p>
            </div>

            <p className="text-gray-700 font-medium mb-6 text-center">
              {t('shopS3SubDesc')}
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6 max-w-4xl mx-auto">
              {ocopExploreItems.map((key, idx) => (
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

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-5 border-l-4 border-green-500 max-w-3xl mx-auto">
              <p className="text-gray-700 leading-relaxed italic">
                💡 {t('shopS3Note')}
              </p>
            </div>
          </div>
        </motion.section>

        {/* Section 4: Seller Discovery */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl p-6 sm:p-8 lg:p-10">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Store className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
                {t('shopS4Title')}
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto mb-2">
                {t('shopS4Desc')}
              </p>
              <p className="text-gray-700 font-medium">
                {t('shopS4SubDesc')}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6 max-w-4xl mx-auto">
              {sellerFeatures.map((key, idx) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="bg-white rounded-xl p-4 flex items-center gap-3 shadow-sm"
                >
                  <CheckCircle2 className="w-5 h-5 text-indigo-500 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">{t(key)}</span>
                </motion.div>
              ))}
            </div>

            <div className="bg-white rounded-2xl p-5 shadow-sm border-l-4 border-indigo-500 max-w-3xl mx-auto">
              <p className="text-gray-700 leading-relaxed italic">
                💡 {t('shopS4Note')}
              </p>
            </div>
          </div>
        </motion.section>

        {/* Section 5: Shopping with Content */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 lg:p-10">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Mobile className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
                {t('shopS5Title')}
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                {t('shopS5Desc')}
              </p>
            </div>

            <p className="text-gray-700 font-medium mb-6 text-center">
              {t('shopS5SubDesc')}
            </p>

            <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-2xl p-6 mb-6 max-w-4xl mx-auto">
              <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3">
                {contentFlowSteps.map((step, idx, arr) => (
                  <span key={idx} className="flex items-center gap-2">
                    <span className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-md">
                      {t(step)}
                    </span>
                    {idx < arr.length - 1 && (
                      <ArrowRight className="w-4 h-4 text-gray-400 hidden sm:block" />
                    )}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-4 mb-6 max-w-3xl mx-auto">
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-5 border border-purple-200">
                <p className="text-gray-800 leading-relaxed">
                  📱 {t('shopS5Ex1')}
                </p>
              </div>
              <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl p-5 border border-teal-200">
                <p className="text-gray-800 leading-relaxed">
                  🎥 {t('shopS5Ex2')}
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-2xl p-5 border-l-4 border-pink-500 max-w-3xl mx-auto">
              <p className="text-gray-700 leading-relaxed italic">
                💡 {t('shopS5Note')}
              </p>
            </div>
          </div>
        </motion.section>

        {/* Section 6: Video & Livestream */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-3xl p-6 sm:p-8 lg:p-10">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Video className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
                {t('shopS6Title')}
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                {t('shopS6Desc')}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6 max-w-4xl mx-auto">
              {videoContentTypes.map((key, idx) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="bg-white rounded-xl p-4 flex items-center gap-3 shadow-sm"
                >
                  <CheckCircle2 className="w-5 h-5 text-violet-500 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">{t(key)}</span>
                </motion.div>
              ))}
            </div>

            <div className="bg-white rounded-2xl p-5 shadow-sm border-l-4 border-violet-500 max-w-3xl mx-auto">
              <p className="text-gray-700 leading-relaxed italic">
                💡 {t('shopS6Note')}
              </p>
            </div>
          </div>
        </motion.section>

        {/* Section 7: Ordering Process */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 lg:p-10">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <ShoppingBag className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
                {t('shopS7Title')}
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
                {t('shopS7Desc')}
              </p>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-6 mb-6 max-w-4xl mx-auto">
              <div className="space-y-3">
                {orderingSteps.map((step, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                      {idx + 1}
                    </div>
                    <span className="text-gray-700">{t(step)}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-5 border-l-4 border-blue-500 max-w-3xl mx-auto">
              <p className="text-gray-700 leading-relaxed italic">
                💡 {t('shopS7Note')}
              </p>
            </div>
          </div>
        </motion.section>

        {/* Section 8: Promotions */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="text-center mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
              {t('shopS8Title')}
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              {t('shopS8Desc')}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6 max-w-4xl mx-auto">
            {promoItems.map((key, idx) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -4, scale: 1.05 }}
                className="bg-white rounded-2xl p-5 shadow-card hover:shadow-card-hover transition-all text-center"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Gift className="w-6 h-6 text-orange-500" />
                </div>
                <p className="text-sm font-semibold text-gray-900">{t(key)}</p>
              </motion.div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-5 border-l-4 border-yellow-500 max-w-3xl mx-auto">
            <p className="text-gray-700 leading-relaxed italic">
              💡 {t('shopS8Note')}
            </p>
          </div>
        </motion.section>

        {/* Section 9: Delivery */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-br from-teal-500 to-emerald-500 rounded-3xl shadow-xl p-6 sm:p-8 lg:p-10 text-white">
            <div className="text-center mb-8">
              <Truck className="w-12 h-12 mx-auto mb-3 opacity-90" />
              <h2 className="text-2xl lg:text-3xl font-bold mb-3">
                {t('shopS9Title')}
              </h2>
              <p className="opacity-90 max-w-3xl mx-auto mb-2">
                {t('shopS9Desc')}
              </p>
              <p className="opacity-90 font-medium">
                {t('shopS9SubDesc')}
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
                💡 {t('shopS9Note')}
              </p>
            </div>
          </div>
        </motion.section>

        {/* Section 10: Product Selection */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 lg:p-10">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
                {t('shopS10Title')}
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                {t('shopS10Desc')}
              </p>
            </div>

            <p className="text-gray-700 font-medium mb-6 text-center">
              {t('shopS10SubDesc')}
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-6 max-w-4xl mx-auto">
              {considerItems.map((key, idx) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="bg-red-50 rounded-xl p-4 flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0" />
                  <span className="text-gray-800 text-sm">{t(key)}</span>
                </motion.div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-2xl p-5 border-l-4 border-red-500 max-w-3xl mx-auto">
              <p className="text-gray-700 leading-relaxed italic">
                💡 {t('shopS10Note')}
              </p>
            </div>
          </div>
        </motion.section>

        {/* Section 11: Buyer-Seller Connection */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-br from-orange-100 to-amber-100 rounded-3xl p-6 sm:p-8 lg:p-10">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Handshake className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
                {t('shopS11Title')}
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto mb-2">
                {t('shopS11Desc')}
              </p>
              <p className="text-gray-700 font-medium">
                {t('shopS11SubDesc')}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6 max-w-3xl mx-auto">
              {[
                { icon: Users, color: 'from-blue-400 to-indigo-400', label: t('shopS11Buyer') },
                { icon: Store, color: 'from-purple-400 to-pink-400', label: t('shopS11Seller') },
                { icon: Package, color: 'from-green-400 to-emerald-400', label: t('shopS11Product') },
                { icon: MapPin, color: 'from-orange-400 to-red-400', label: t('shopS11Local') },
              ].map((item, idx) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="bg-white rounded-2xl p-4 shadow-card text-center"
                >
                  <div className={`w-10 h-10 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center mx-auto mb-2`}>
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-xs font-medium text-gray-700">{item.label}</p>
                </motion.div>
              ))}
            </div>

            <div className="bg-white rounded-2xl p-5 shadow-sm border-l-4 border-orange-500 max-w-3xl mx-auto">
              <p className="text-gray-700 leading-relaxed italic">
                💡 {t('shopS11Note')}
              </p>
            </div>
          </div>
        </motion.section>

        {/* Section 12: Value to Biteo */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-12 text-white">
            <div className="text-center mb-8">
              <TrendingUp className="w-12 h-12 mx-auto mb-3 text-purple-400" />
              <h2 className="text-2xl lg:text-3xl font-bold mb-3">
                {t('shopS12Title')}
              </h2>
              <p className="opacity-90 max-w-3xl mx-auto">
                {t('shopS12Desc')}
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-6 border border-white/20 max-w-4xl mx-auto">
              <p className="text-center mb-2 opacity-80">
                {t('shopS12Question')}
              </p>
              <p className="text-center text-xl font-bold text-yellow-300">
                "{t('shopS12Quote')}"
              </p>
            </div>

            <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-6 mb-6 max-w-4xl mx-auto">
              <p className="text-center font-semibold leading-relaxed">
                {t('shopS12Flow')}
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20 mb-6 max-w-3xl mx-auto">
              <p className="text-center font-medium leading-relaxed text-sm">
                {t('shopS12Journey')}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6 max-w-3xl mx-auto">
              {ecosystemFlow.map((key, idx) => (
                <div key={key} className="bg-white/10 rounded-xl p-3 text-center">
                  <p className="text-sm font-medium">{t(key)}</p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-6 text-center">
              <p className="leading-relaxed font-medium">
                💎 {t('shopS12Note')}
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
            { value: '50,000+', labelKey: 'shopProducts', icon: Package },
            { value: '2,000+', labelKey: 'sellers', icon: Store },
            { value: '1M+', labelKey: 'orders', icon: Truck },
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
              <stat.icon className="w-8 h-8 text-purple-500 mx-auto mb-3" />
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
          className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl p-8 lg:p-12 text-center text-white"
        >
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">
            {t('shopNow2')}
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            {t('shopNow2Desc')}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-4 bg-white text-purple-600 font-bold rounded-xl hover:bg-gray-100 transition-all flex items-center gap-2">
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
