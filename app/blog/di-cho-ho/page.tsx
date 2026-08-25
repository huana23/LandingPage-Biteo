'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
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
  GalleryHorizontal,
  ShoppingBag,
} from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import PageHeader from '@/components/PageHeader'

import BlogImg1 from '../../../assets/images/blogs/Grocery/img-1.webp'
import BlogImg2 from '../../../assets/images/blogs/Grocery/img-2.jpg'
import BlogImg3 from '../../../assets/images/blogs/Grocery/img-3.jpg'
import DiverseFoods1 from '../../../assets/images/blogs/Grocery/rau-cu.webp'
import DiverseFoods2 from '../../../assets/images/blogs/Grocery/trai-cay.webp'
import DiverseFoods3 from '../../../assets/images/blogs/Grocery/thit-ca.webp'
import DiverseFoods4 from '../../../assets/images/blogs/Grocery/sua.webp'
import DiverseFoods5 from '../../../assets/images/blogs/Grocery/gia-vi.webp'
import DiverseFoods6 from '../../../assets/images/blogs/Grocery/dong-goi.jpg'


export default function DiChoHoBlogPage() {
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

          {/* Hero Image Gallery */}
          <div className="grid grid-cols-3 gap-4">
            {[
              {
                src: BlogImg1,
                alt: 'Fresh vegetables at market',
                title: t('blogThucPhamTuoi'),
                priority: true,
              },
              {
                src: BlogImg2,
                alt: 'Online grocery shopping',
                title: t('blogMuaHang'),
                priority: false,
              },
              {
                src: BlogImg3,
                alt: 'Grocery delivery service',
                title: t('blogGiaoHang'),
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
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                <GalleryHorizontal className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-gray-900">
                  {t('blogThucPhamDaDang')}
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
              {[
                {
                  src: DiverseFoods1,
                  alt: 'Fresh vegetables',
                  title: t('blogRauCu'),
                },
                {
                  src: DiverseFoods2,
                  alt: 'Fresh fruits',
                  title: t('blogTraiCay'),
                },
                {
                  src: DiverseFoods3,
                  alt: 'Fresh meat and fish',
                  title: t('blogThitCa'),
                },
                {
                  src: DiverseFoods4,
                  alt: 'Fresh milk and dairy',
                  title: t('blogSua'),
                },
                {
                  src: DiverseFoods5,
                  alt: 'Spices and seasonings',
                  title: t('blogGiaVi'),
                },
                {
                  src: DiverseFoods6,
                  alt: 'Packaged food',
                  title: t('blogDongGoi'),
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
