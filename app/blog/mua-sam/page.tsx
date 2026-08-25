'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
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
  GalleryHorizontal,
  ShoppingCart,
  Package as PackageBox,
  Gem,
  Percent,
} from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import PageHeader from '@/components/PageHeader'
import BlogImg1 from '../../../assets/images/blogs/Shopping/img-1.jpg'
import BlogImg2 from '../../../assets/images/blogs/Shopping/img-2.jpg'
import BlogImg3 from '../../../assets/images/blogs/Shopping/img-3.webp'
import LocalSpecialties1 from '../../../assets/images/blogs/Shopping/mien-nam.jpg'
import LocalSpecialties2 from '../../../assets/images/blogs/Shopping/nong-san.jpg'
import LocalSpecialties3 from '../../../assets/images/blogs/Shopping/tho-cam.jpg'
import LocalSpecialties4 from '../../../assets/images/blogs/Shopping/non-la.jpg'
import LocalSpecialties5 from '../../../assets/images/blogs/Shopping/tra-sen.jpg'
import LocalSpecialties6 from '../../../assets/images/blogs/Shopping/ca-phe.jpg'


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

// Demo images for shopping content
const shoppingDemoImages = [
  { id: 1, title: 'Đặc Sản Miền Tây', category: 'Miền Tây', src: LocalSpecialties1, alt: 'Mekong delta specialties Vietnam' },
  { id: 2, title: 'Nông Sản OCOP', category: 'OCOP', src: LocalSpecialties2, alt: 'Organic Vietnamese agricultural products OCOP' },
  { id: 3, title: 'Thổ Cẩm Tây Bắc', category: 'Tây Bắc', src: LocalSpecialties3, alt: 'Traditional ethnic minority brocade Northwest Vietnam' },
  { id: 4, title: 'Nón Lá Huế', category: 'Miền Trung', src: LocalSpecialties4, alt: 'Hue conical hat traditional Vietnam' },
  { id: 5, title: 'Trà Sen Tây Hồ', category: 'Miền Bắc', src: LocalSpecialties5, alt: 'Lotus tea West Lake Hanoi Vietnam' },
  { id: 6, title: 'Cà Phê Buôn Ma Thuột', category: 'Tây Nguyên', src: LocalSpecialties6, alt: 'Buon Ma Thuot coffee Vietnam highlands' },
]

const heroImages = [
  { id: 1, title: 'Tìm Kiếm Sản Phẩm', src: BlogImg1, alt: 'Online shopping search products' },
  { id: 2, title: 'Đặc Sản Địa Phương', src: BlogImg2, alt: 'Vietnam local specialties products' },
  { id: 3, title: 'Mua Sắm Video', src: BlogImg3, alt: 'Video commerce shopping review' },
]

export default function MuaSamBlogPage() {
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

          {/* Hero Image Gallery */}
          <div className="grid grid-cols-3 gap-4">
            {[
              { src: BlogImg1, alt: 'Online shopping search products', title: t('blogHeroTimKiem'), priority: true },
              { src: BlogImg2, alt: 'Vietnam local specialties products', title: t('blogDACSan'), priority: false },
              { src: BlogImg3, alt: 'Video commerce shopping review', title: t('blogCatReview'), priority: false },
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
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                <GalleryHorizontal className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-gray-900">
                  {t('blogDACSanDiaPhuong')}
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { id: 1, src: LocalSpecialties1, alt: 'Mekong specialties products', title: t('blogMienNam'), category: t('blogDACSan') },
                { id: 2, src: LocalSpecialties2, alt: 'Organic vegetables OCOP certified', title: t('blogOCOP'), category: t('shopS1Item3') },
                { id: 3, src: LocalSpecialties3, alt: 'Traditional ethnic brocade textiles', title: t('blogTayBac'), category: t('blogThoCam') },
                { id: 4, src: LocalSpecialties4, alt: 'Hue traditional conical hat crafts', title: t('blogMienTrung'), category: t('blogNonLa') },
                { id: 5, src: LocalSpecialties5, alt: 'Lotus tea West Lake Hanoi', title: t('blogMienBac'), category: t('blogTraSen') },
                { id: 6, src: LocalSpecialties6, alt: 'Buon Ma Thuot coffee beans', title: t('blogTayNguyen'), category: t('blogCaPhe') },
              ].map((img, idx) => (
                <motion.div
                  key={img.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="relative h-40 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all cursor-default group"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-xs font-medium text-gray-700">{img.category}</span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-white font-semibold text-sm drop-shadow-md">{img.title}</p>
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
                {['blogFlowDiaPhuong', 'blogFlowDACSan', 'blogFlowSanPham', 'blogFlowNguoiBan', 'blogFlowCauChuyen'].map((stepKey, idx, arr) => (
                  <span key={idx} className="flex items-center gap-2">
                    <span className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-md">
                      {t(stepKey)}
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

        {/* Remaining sections... */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="bg-white rounded-3xl shadow-2xl p-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              {t('shopNow2')}
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              {t('shopNow2Desc')}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-xl hover:shadow-lg transition-all flex items-center gap-2">
                <Smartphone className="w-5 h-5" />
                {t('downloadIOS')}
              </button>
              <button className="px-8 py-4 bg-gray-100 text-gray-700 font-bold rounded-xl hover:bg-gray-200 transition-all flex items-center gap-2">
                <Smartphone className="w-5 h-5" />
                {t('downloadAndroid')}
              </button>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  )
}
