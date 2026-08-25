'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import {
  ArrowRight,
  Handshake,
  Video,
  ChefHat,
  Radio,
  Store,
  Globe,
  Gift,
  Camera,
  Calendar,
  GalleryHorizontal,
  Utensils,
  MapPin,
  Search,
  Smartphone,
  Star,
  Heart,
  MessageCircle,
  Share2,
  Users,
  Shield,
  TrendingUp,
  Tag,
  CheckCircle2,
} from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import PageHeader from '@/components/PageHeader'
import BlogImg1 from '../../../assets/images/blogs/Cuisine/img-1.webp'
import BlogImg2 from '../../../assets/images/blogs/Cuisine/img-2.webp'
import BlogImg3 from '../../../assets/images/blogs/Cuisine/img-3.webp'
import FoodImgVN from '../../../assets/images/blogs/Cuisine/food-vn.webp'
import FoodImgJP from '../../../assets/images/blogs/Cuisine/food-jp.webp'
import FoodImgKorea from '../../../assets/images/blogs/Cuisine/food-korea.webp'
import FoodImgItaly from '../../../assets/images/blogs/Cuisine/food-italya.webp'
import FoodImgChina from '../../../assets/images/blogs/Cuisine/food-china.webp'
import FoodImgThai from '../../../assets/images/blogs/Cuisine/food-thailan.webp'




const cuisineGroups = [
  { nameKey: 'culinaryS8SubDesc', items: [
    { flag: '🇻🇳', nameKey: 'catVietnam' },
    { flag: '🇯🇵', nameKey: 'catJapan' },
    { flag: '🇰🇷', nameKey: 'catKorea' },
    { flag: '🇮🇹', nameKey: 'catItaly' },
    { flag: '🇨🇳', nameKey: 'catChina' },
    { flag: '🇹🇭', nameKey: 'catThailand' },
  ]},
]

const searchItems = [
  'culinaryS1Item1',
  'culinaryS1Item2',
  'culinaryS1Item3',
  'culinaryS1Item4',
  'culinaryS1Item5',
  'culinaryS1Item6',
]

const mapFeatures = [
  'culinaryS2Item1',
  'culinaryS2Item2',
  'culinaryS2Item3',
  'culinaryS2Item4',
  'culinaryS2Item5',
]

const dishFeatures = [
  'culinaryS3Item1',
  'culinaryS3Item2',
  'culinaryS3Item3',
  'culinaryS3Item4',
  'culinaryS3Item5',
  'culinaryS3Item6',
  'culinaryS3Item7',
]

const reviewItems = [
  'culinaryS4Item1',
  'culinaryS4Item2',
  'culinaryS4Item3',
  'culinaryS4Item4',
]

const infoItems = [
  'culinaryS5Item1',
  'culinaryS5Item2',
  'culinaryS5Item3',
  'culinaryS5Item4',
  'culinaryS5Item5',
  'culinaryS5Item6',
  'culinaryS5Item7',
  'culinaryS5Item8',
  'culinaryS5Item9',
]

export default function AmThucBlogPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50">
      <PageHeader />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section with Images */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Utensils className="w-4 h-4" />
            {t('culinaryHero')}
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            {t('culinaryPageTitle')}
          </h1>
          <p className="text-lg text-orange-500 font-medium mb-8">
            {t('culinaryPageHeroTag')}
          </p>

          {/* Hero Image Gallery */}
          <div className="grid grid-cols-3 gap-4">
            {[
              {
                src: BlogImg1,
                alt: 'Vietnamese cuisine pho and dishes',
                title: t('blogHeroTimKiem'),
                priority: true,
              },
              {
                src: BlogImg2,
                alt: 'Restaurant reservation dining',
                title: t('blogHeroDatBan'),
                priority: false,
              },
              {
                src: BlogImg3,
                alt: 'Food review and ratings',
                title: t('blogHeroReview'),
                priority: false,
              },
            ].map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
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
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center">
                <GalleryHorizontal className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-gray-900">
                  {t('blogAmThucQuocGia')}
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
              {[
                {
                  src: FoodImgVN,
                  alt: 'Vietnamese pho noodles',
                  flag: '🇻🇳',
                  title: t('catVietnam'),
                },
                {
                  src: FoodImgJP,
                  alt: 'Japanese sushi',
                  flag: '🇯🇵',
                  title: t('catJapan'),
                },
                {
                  src: FoodImgKorea,
                  alt: 'Korean bibimbap',
                  flag: '🇰🇷',
                  title: t('catKorea'),
                },
                {
                  src: FoodImgItaly,
                  alt: 'Italian pizza',
                  flag: '🇮🇹',
                  title: t('catItaly'),
                },
                {
                  src: FoodImgChina,
                  alt: 'Chinese dim sum',
                  flag: '🇨🇳',
                  title: t('catChina'),
                },
                {
                  src: FoodImgThai,
                  alt: 'Thai pad thai',
                  flag: '🇹🇭',
                  title: t('catThailand'),
                },
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
                    <span className="text-3xl mb-1">{img.flag}</span>
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
              {t('culinaryPageIntroTitle')}
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              {t('culinaryPageIntroDesc')}
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              {t('culinaryPageIntroText1')}
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              {t('culinaryPageIntroText2')}
            </p>
            <div className="bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-2xl p-5 my-6 text-center font-semibold">
              {t('culinaryPageSlogan')}
            </div>
            <p className="text-gray-900 font-semibold mb-4">
              {t('culinaryPageIntroText3')}
            </p>
            <p className="text-gray-600 leading-relaxed">
              {t('culinaryPageIntroText4')}
            </p>
          </div>
        </motion.section>

        {/* Search */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 lg:p-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center">
                <Search className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
                {t('culinaryS1Title')}
              </h2>
            </div>
            <p className="text-gray-600 mb-4 leading-relaxed">
              {t('culinaryS1Desc')}
            </p>
            <p className="text-gray-700 font-medium mb-4">
              {t('culinaryS1SubDesc')}
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
              {searchItems.map((key, idx) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="bg-orange-50 rounded-xl p-4 flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0" />
                  <span className="text-gray-800 text-sm">{t(key)}</span>
                </motion.div>
              ))}
            </div>
            <div className="bg-orange-50 rounded-2xl p-5 border-l-4 border-orange-500">
              <p className="text-gray-700 leading-relaxed italic">
                💡 {t('culinaryS1Note')}
              </p>
            </div>
          </div>
        </motion.section>

        {/* Demo Images Gallery Section 3 */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center">
                <GalleryHorizontal className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-gray-900">
                  {t('blogLoaiHinhAmThuc')}
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
              {[
                {
                  src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=80',
                  alt: 'Main dishes',
                  title: t('blogMonChinh'),
                },
                {
                  src: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&q=80',
                  alt: 'Coffee and beverages',
                  title: t('blogDoUong'),
                },
                {
                  src: 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=400&q=80',
                  alt: 'Street food snacks',
                  title: t('blogAnVat'),
                },
                {
                  src: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&q=80',
                  alt: 'Vegetarian food',
                  title: t('blogAnChay'),
                },
                {
                  src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&q=80',
                  alt: 'Fine Dining',
                  title: t('blogFineDining'),
                },
                {
                  src: 'https://images.unsplash.com/photo-1559314809-0d155014e29e?w=400&q=80',
                  alt: 'Street Food',
                  title: t('blogStreetFood'),
                },
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

        {/* Map Discovery */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-3xl p-6 sm:p-8 lg:p-10">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
                {t('culinaryS2Title')}
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                {t('culinaryS2Desc')}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6 max-w-4xl mx-auto">
              {mapFeatures.map((key, idx) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
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
                💡 {t('culinaryS2Note')}
              </p>
            </div>
          </div>
        </motion.section>

        {/* Discover Dishes */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="text-center mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
              {t('culinaryS3Title')}
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              {t('culinaryS3Desc')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-br from-orange-100 to-amber-100 rounded-2xl p-6"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center mb-4">
                <ChefHat className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                {t('culinaryS3SubDesc')}
              </h3>
              <div className="space-y-2">
                {dishFeatures.slice(0, 4).map((key) => (
                  <div key={key} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-orange-500" />
                    <span className="text-gray-700 text-sm">{t(key)}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-red-100 to-pink-100 rounded-2xl p-6"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-pink-500 rounded-xl flex items-center justify-center mb-4">
                <Camera className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                {t('culinaryS3SubDesc')}
              </h3>
              <div className="space-y-2">
                {dishFeatures.slice(4).map((key) => (
                  <div key={key} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-red-500" />
                    <span className="text-gray-700 text-sm">{t(key)}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-card border-l-4 border-amber-500">
            <p className="text-gray-700 leading-relaxed italic">
              💡 {t('culinaryS3Note')}
            </p>
          </div>
        </motion.section>

        {/* Reviews */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 lg:p-10">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-amber-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
                {t('culinaryS4Title')}
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                {t('culinaryS4Desc')}
              </p>
            </div>

            <p className="text-gray-700 font-medium mb-6 text-center">
              {t('culinaryS4SubDesc')}
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {reviewItems.map((key, idx) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-2xl p-5 text-center"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-amber-400 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-gray-800 font-medium text-sm">{t(key)}</p>
                </motion.div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-yellow-50 to-amber-50 rounded-2xl p-5 border-l-4 border-yellow-500">
              <p className="text-gray-700 leading-relaxed italic">
                💡 {t('culinaryS4Note')}
              </p>
            </div>
          </div>
        </motion.section>

        {/* Info Before Visiting */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-6 sm:p-8 lg:p-10">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
                {t('culinaryS5Title')}
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                {t('culinaryS5Desc')}
              </p>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-3 mb-6">
              {infoItems.map((key, idx) => (
                <span key={key} className="flex items-center gap-2">
                  <span className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-md">
                    {t(key)}
                  </span>
                  {idx < infoItems.length - 1 && (
                    <ArrowRight className="w-4 h-4 text-gray-400 hidden sm:block" />
                  )}
                </span>
              ))}
            </div>

            <div className="bg-white rounded-2xl p-5 shadow-sm border-l-4 border-blue-500 max-w-3xl mx-auto">
              <p className="text-gray-700 leading-relaxed italic">
                💡 {t('culinaryS5Note')}
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
            { value: '50,000+', labelKey: 'restaurants', icon: Utensils },
            { value: '5M+', labelKey: 'reviews', icon: Star },
            { value: '2M+', labelKey: 'appUsers', icon: Users },
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
              <stat.icon className="w-8 h-8 text-orange-500 mx-auto mb-3" />
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
          className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-3xl p-8 lg:p-12 text-center text-white"
        >
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">
            {t('hungryNow')}
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            {t('hungryNowDesc')}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-4 bg-white text-orange-600 font-bold rounded-xl hover:bg-gray-100 transition-all flex items-center gap-2">
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
