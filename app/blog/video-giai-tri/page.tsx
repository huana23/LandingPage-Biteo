'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
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
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  GalleryHorizontal,
} from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import PageHeader from '@/components/PageHeader'
import ShortVideo from '../../../assets/images/blogs/Entertainment/img-1.webp'
import DiverseContent from '../../../assets/images/blogs/Entertainment/img-2.jpeg'
import ServiceConnection from '../../../assets/images/blogs/Entertainment/img-3.jpeg'
import Cuisine from '../../../assets/images/blogs/Entertainment/am-thuc.webp'
import Tourism from '../../../assets/images/blogs/Entertainment/du-lich.webp'
import Shopping from '../../../assets/images/blogs/Entertainment/mua-sam.webp'
import Review from '../../../assets/images/blogs/Entertainment/review.webp'
import Community from '../../../assets/images/blogs/Entertainment/cong-dong.webp'







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


export default function VideoBlogPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-pink-50">
      <PageHeader />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section with Images */}
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
        </motion.section>

        {/* Hero Image Gallery */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="grid grid-cols-3 gap-4">
            {[
              { src: ShortVideo, alt: 'Short video content social media', title: t('blogVideoNgan'), priority: true },
              { src: DiverseContent, alt: 'Diverse video content entertainment', title: t('blogNoiDungDaDang'), priority: false },
              { src: ServiceConnection, alt: 'Video connects services platform', title: t('blogKetNoiDichVu'), priority: false },
            ].map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative h-48 rounded-2xl overflow-hidden shadow-lg"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority={img.priority}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                  <p className="text-white font-semibold text-sm p-3">{img.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Demo Images Gallery Section 1 */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-pink-500 rounded-xl flex items-center justify-center">
                <GalleryHorizontal className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-gray-900">
                  {t('blogVideoTheoChuDe')}
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
              {[
                { src: ShortVideo, alt: 'Entertainment fun video content', title: t('blogCatGiaiTri') },
                { src: Cuisine, alt: 'Cooking food culinary video', title: t('blogCatAmThuc') },
                { src: Tourism, alt: 'Travel adventure video content', title: t('blogCatDuLich') },
                { src: Shopping, alt: 'Shopping product review video', title: t('blogCatMuaSam') },
                { src: Review, alt: 'Video review testing products', title: t('blogCatReview') },
                { src: Community, alt: 'Community social video sharing', title: t('blogCatCongDong') },
              ].map((img, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="relative h-28 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-default group"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 33vw, 16vw"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <p className="text-white text-xs font-medium drop-shadow-md">{img.title}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>


        {/* Intro Card */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
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
