'use client'

import { motion } from 'framer-motion'
import {
  Play,
  Users,
  Video,
  Smartphone,
  Share2,
  Heart,
  MessageCircle,
  Eye,
  Globe,
  Sparkles,
  ChefHat,
  MapPin,
  Plane,
  Radio,
  Store,
  Shield,
  TrendingUp,
  Tag,
  CheckCircle2,
  ArrowRight,
  Handshake,
} from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import PageHeader from '@/components/PageHeader'

const contentCategories = [
  {
    icon: Sparkles,
    titleKey: 'videoS1Cat1',
    listKey: 'videoS1Cat1List',
    gradient: 'from-pink-500 to-rose-500',
    bg: 'bg-pink-50',
  },
  {
    icon: ChefHat,
    titleKey: 'videoS1Cat2',
    listKey: 'videoS1Cat2List',
    gradient: 'from-orange-500 to-amber-500',
    bg: 'bg-orange-50',
  },
  {
    icon: MapPin,
    titleKey: 'videoS1Cat3',
    listKey: 'videoS1Cat3List',
    gradient: 'from-teal-500 to-emerald-500',
    bg: 'bg-teal-50',
  },
  {
    icon: Plane,
    titleKey: 'videoS1Cat4',
    listKey: 'videoS1Cat4List',
    gradient: 'from-blue-500 to-indigo-500',
    bg: 'bg-blue-50',
  },
]

const interactions = [
  { icon: Heart, titleKey: 'videoS3Like', descKey: 'videoS3LikeDesc', color: 'text-red-500', bg: 'bg-red-50' },
  { icon: MessageCircle, titleKey: 'videoS3Comment', descKey: 'videoS3CommentDesc', color: 'text-blue-500', bg: 'bg-blue-50' },
  { icon: Share2, titleKey: 'videoS3Share', descKey: 'videoS3ShareDesc', color: 'text-green-500', bg: 'bg-green-50' },
  { icon: Users, titleKey: 'videoS3Follow', descKey: 'videoS3FollowDesc', color: 'text-purple-500', bg: 'bg-purple-50' },
]

const discoverFactors = [
  'videoS4Item1',
  'videoS4Item2',
  'videoS4Item3',
  'videoS4Item4',
  'videoS4Item5',
  'videoS4Item6',
  'videoS4Item7',
]

const serviceFlows = [
  { titleKey: 'videoS5Flow1Title', flowKey: 'videoS5Flow1', icon: ChefHat, color: 'from-orange-500 to-red-500' },
  { titleKey: 'videoS5Flow2Title', flowKey: 'videoS5Flow2', icon: Store, color: 'from-purple-500 to-pink-500' },
  { titleKey: 'videoS5Flow3Title', flowKey: 'videoS5Flow3', icon: MapPin, color: 'from-teal-500 to-blue-500' },
]

const videoProductExamples = [
  'videoS6Ex1',
  'videoS6Ex2',
  'videoS6Ex3',
  'videoS6Ex4',
  'videoS6Ex5',
]

const contributors = [
  { nameKey: 'videoS9Contributors', icon: Users },
  { nameKey: 'videoS9ContribCreator', icon: Video },
  { nameKey: 'videoS9ContribAffiliate', icon: Tag },
  { nameKey: 'videoS9ContribSeller', icon: Store },
  { nameKey: 'videoS9ContribRestaurant', icon: ChefHat },
  { nameKey: 'videoS9ContribStore', icon: Store },
  { nameKey: 'videoS9ContribPartner', icon: Handshake },
  { nameKey: 'videoS9ContribBiteo', icon: Sparkles },
]

const qualityControls = [
  'videoS10Item1',
  'videoS10Item2',
  'videoS10Item3',
  'videoS10Item4',
  'videoS10Item5',
  'videoS10Item6',
]

export default function VideoPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-pink-50">
      <PageHeader />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Play className="w-4 h-4" />
            {t('videoHero')}
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            {t('videoPageTitle')}
          </h1>
          <p className="text-lg text-red-500 font-medium mb-8">
            {t('videoPageHeroTag')}
          </p>

          {/* Intro Card */}
          <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 lg:p-10 text-left">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              {t('videoPageIntroTitle')}
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              {t('videoPageIntroDesc')}
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              {t('videoPageIntroText1')}
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              {t('videoPageIntroText2')}
            </p>
            <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-2xl p-5 my-6 text-center font-semibold">
              {t('videoPageSlogan')}
            </div>
            <p className="text-gray-900 font-semibold mb-4">
              {t('videoPageIntroText3')}
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              {t('videoPageIntroText4')}
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              {t('videoPageIntroText5')}
            </p>
            <p className="text-gray-600 leading-relaxed">
              {t('videoPageIntroText6')}
            </p>
          </div>
        </motion.section>

        {/* Section 1: What users can watch */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="text-center mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
              {t('videoS1Title')}
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              {t('videoS1Desc')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {contentCategories.map((cat, idx) => (
              <motion.div
                key={cat.titleKey}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -4 }}
                className={`${cat.bg} rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all`}
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${cat.gradient} rounded-xl flex items-center justify-center mb-4`}>
                  <cat.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {t(cat.titleKey)}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {t(cat.listKey)}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-card border-l-4 border-red-500">
            <p className="text-gray-700 leading-relaxed italic">
              💡 {t('videoS1Note')}
            </p>
          </div>
        </motion.section>

        {/* Section 2: Watching Experience */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 lg:p-10">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 text-center">
              {t('videoS2Title')}
            </h2>
            <p className="text-gray-600 mb-6 text-center max-w-3xl mx-auto leading-relaxed">
              {t('videoS2Desc')}
            </p>

            <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 mb-6">
              {t('videoS2Flow').split('→').map((step, idx, arr) => (
                <span key={idx} className="flex items-center gap-2">
                  <span className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-md">
                    {step.trim()}
                  </span>
                  {idx < arr.length - 1 && (
                    <ArrowRight className="w-4 h-4 text-gray-400 hidden sm:block" />
                  )}
                </span>
              ))}
            </div>

            <p className="text-gray-600 mb-4 text-center leading-relaxed">
              {t('videoS2Note')}
            </p>
            <p className="text-center text-lg font-semibold text-red-600">
              ✨ {t('videoS2Conclusion')}
            </p>
          </div>
        </motion.section>

        {/* Section 3: Content Interaction */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="text-center mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
              {t('videoS3Title')}
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              {t('videoS3Desc')}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {interactions.map((item, idx) => (
              <motion.div
                key={item.titleKey}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -4 }}
                className="bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all text-center"
              >
                <div className={`w-16 h-16 ${item.bg} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <item.icon className={`w-8 h-8 ${item.color}`} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {t(item.titleKey)}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {t(item.descKey)}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-card border-l-4 border-blue-500">
            <p className="text-gray-700 leading-relaxed italic">
              💡 {t('videoS3Note')}
            </p>
          </div>
        </motion.section>

        {/* Section 4: Discover Suitable Content */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-6 sm:p-8 lg:p-10">
            <div className="text-center mb-8">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
                {t('videoS4Title')}
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                {t('videoS4Desc')}
              </p>
            </div>

            <p className="text-gray-700 mb-4 text-center font-medium">
              {t('videoS4SubDesc')}
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6 max-w-4xl mx-auto">
              {discoverFactors.map((key, idx) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="bg-white rounded-xl p-4 flex items-center gap-3 shadow-sm"
                >
                  <CheckCircle2 className="w-5 h-5 text-purple-500 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">{t(key)}</span>
                </motion.div>
              ))}
            </div>

            <div className="bg-white rounded-2xl p-5 text-center shadow-card">
              <p className="text-lg font-semibold text-purple-600">
                🎯 {t('videoS4Conclusion')}
              </p>
            </div>
          </div>
        </motion.section>

        {/* Section 5: Video Connects with Other Services */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="text-center mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
              {t('videoS5Title')}
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto mb-2">
              {t('videoS5Desc')}
            </p>
            <p className="text-gray-700 font-medium">
              {t('videoS5SubDesc')}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 mb-6">
            {serviceFlows.map((flow, idx) => (
              <motion.div
                key={flow.titleKey}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -4 }}
                className="bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${flow.color} rounded-xl flex items-center justify-center mb-4`}>
                  <flow.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {t(flow.titleKey)}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  ↓<br />
                  {t(flow.flowKey)}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-card border-l-4 border-orange-500">
            <p className="text-gray-700 leading-relaxed italic">
              💡 {t('videoS5Note')}
            </p>
          </div>
        </motion.section>

        {/* Section 6: Video Can Attach Products */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 lg:p-10">
            <div className="text-center mb-8">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
                {t('videoS6Title')}
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                {t('videoS6Desc')}
              </p>
            </div>

            <div className="space-y-3 mb-6 max-w-3xl mx-auto">
              {videoProductExamples.map((key, idx) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08 }}
                  className="bg-gradient-to-r from-red-50 to-pink-50 rounded-xl p-4 border border-red-100"
                >
                  <p className="text-gray-800 font-medium">
                    {t(key)}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-2xl p-5 border-l-4 border-amber-500">
              <p className="text-gray-700 leading-relaxed italic">
                💡 {t('videoS6Note')}
              </p>
            </div>
          </div>
        </motion.section>

        {/* Section 7: For Creators and Affiliates */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="text-center mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
              {t('videoS7Title')}
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              {t('videoS7Desc')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              whileHover={{ y: -4 }}
              className="bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl p-6 shadow-card"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <Video className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Creator</h3>
              </div>
              <p className="text-gray-700 font-medium mb-3">{t('videoS7Creator')}</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                {t('videoS7CreatorList')}
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -4 }}
              className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-6 shadow-card"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-xl flex items-center justify-center">
                  <Tag className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Affiliate</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                {t('videoS7Affiliate')}
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Section 8: Video + Livestream */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-br from-red-500 via-pink-500 to-rose-500 rounded-3xl shadow-xl p-6 sm:p-8 lg:p-10 text-white">
            <div className="text-center mb-8">
              <Radio className="w-12 h-12 mx-auto mb-3 opacity-90" />
              <h2 className="text-2xl lg:text-3xl font-bold mb-3">
                {t('videoS8Title')}
              </h2>
              <p className="opacity-90 max-w-3xl mx-auto">
                {t('videoS8Desc')}
              </p>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 mb-6">
              {t('videoS8Flow').split('→').map((step, idx, arr) => (
                <span key={idx} className="flex items-center gap-2">
                  <span className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium border border-white/30">
                    {step.trim()}
                  </span>
                  {idx < arr.length - 1 && (
                    <ArrowRight className="w-4 h-4 text-white/60 hidden sm:block" />
                  )}
                </span>
              ))}
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/20">
              <p className="leading-relaxed italic opacity-95">
                💡 {t('videoS8Note')}
              </p>
            </div>
          </div>
        </motion.section>

        {/* Section 9: Community Content Creation */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="text-center mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
              {t('videoS9Title')}
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto mb-4">
              {t('videoS9Desc')}
            </p>
            <p className="text-gray-700 font-medium">
              {t('videoS9SubDesc')}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
            {contributors.map((c, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                whileHover={{ y: -4, scale: 1.05 }}
                className="bg-white rounded-2xl p-5 shadow-card hover:shadow-card-hover transition-all text-center"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-red-100 to-pink-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <c.icon className="w-6 h-6 text-red-500" />
                </div>
                <p className="text-sm font-semibold text-gray-900">{t(c.nameKey)}</p>
              </motion.div>
            ))}
          </div>

          <div className="bg-white rounded-2xl p-5 shadow-card border-l-4 border-purple-500 mb-4">
            <p className="text-gray-700 leading-relaxed italic">
              💡 {t('videoS9Note')}
            </p>
          </div>

          <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-2xl p-5 text-center font-semibold">
            🌟 {t('videoS9Conclusion')}
          </div>
        </motion.section>

        {/* Section 10: Quality Control */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 lg:p-10">
            <div className="text-center mb-8">
              <Shield className="w-12 h-12 mx-auto mb-3 text-red-500" />
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
                {t('videoS10Title')}
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                {t('videoS10Desc')}
              </p>
            </div>

            <p className="text-gray-700 mb-6 text-center font-medium max-w-3xl mx-auto">
              {t('videoS10SubDesc')}
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-4xl mx-auto">
              {qualityControls.map((key, idx) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="bg-red-50 rounded-xl p-4 flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0" />
                  <span className="text-gray-800 text-sm font-medium">{t(key)}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Section 11: Value to Biteo */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-12 text-white">
            <div className="text-center mb-8">
              <TrendingUp className="w-12 h-12 mx-auto mb-3 text-red-400" />
              <h2 className="text-2xl lg:text-3xl font-bold mb-3">
                {t('videoS11Title')}
              </h2>
              <p className="opacity-90 max-w-3xl mx-auto">
                {t('videoS11Desc')}
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-6 border border-white/20">
              <p className="text-center font-semibold text-lg leading-relaxed">
                {t('videoS11Journey')}
              </p>
            </div>

            <div className="bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl p-6 text-center">
              <p className="leading-relaxed font-medium">
                💎 {t('videoS11Conclusion')}
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
            { value: '50M+', labelKey: 'views', icon: Eye },
            { value: '1.2M', labelKey: 'videos', icon: Video },
            { value: '500K+', labelKey: 'creators', icon: Users },
            { value: '10M+', labelKey: 'appUsers', icon: Globe },
          ].map((stat, index) => (
            <motion.div
              key={stat.labelKey}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-card text-center"
            >
              <stat.icon className="w-8 h-8 text-red-500 mx-auto mb-3" />
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
          className="bg-gradient-to-r from-red-500 to-pink-500 rounded-3xl p-8 lg:p-12 text-center text-white"
        >
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">
            {t('exploreVideo')}
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            {t('exploreVideoDesc')}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-4 bg-white text-red-600 font-bold rounded-xl hover:bg-gray-100 transition-all flex items-center gap-2">
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
