'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import {
  MapPin,
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
  ArrowRight,
  Handshake,
  Video,
  Compass,
  Building,
  Utensils,
  Plane,
  Gift,
  Camera,
  Clock,
  Package,
  Globe,
  Bed,
  Camera as CameraAlt,
  GalleryHorizontal,
} from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import PageHeader from '@/components/PageHeader'
import BlogImg1 from '../../../assets/images/blogs/Tourism/img-1.jpeg'
import BlogImg2 from '../../../assets/images/blogs/Tourism/img-2.jpeg'
import BlogImg3 from '../../../assets/images/blogs/Tourism/img-3.jpeg'
import Regions1 from '../../../assets/images/blogs/Tourism/mien-bac.webp'
import Regions2 from '../../../assets/images/blogs/Tourism/mien-trung.webp'
import Regions3 from '../../../assets/images/blogs/Tourism/mien-nam.webp'
import Regions4 from '../../../assets/images/blogs/Tourism/tay-bac.jpg'
import Regions5 from '../../../assets/images/blogs/Tourism/dong-bac.webp'
import Regions6 from '../../../assets/images/blogs/Tourism/nam-trung-bo.webp'
import FeaturedLocations1 from '../../../assets/images/blogs/Tourism/quang-ninh.jpg'
import FeaturedLocations2 from '../../../assets/images/blogs/Tourism/phu-quoc.jpg'
import FeaturedLocations3 from '../../../assets/images/blogs/Tourism/da-lat.jpg'
import FeaturedLocations4 from '../../../assets/images/blogs/Tourism/hoi-an.jpg'
import FeaturedLocations5 from '../../../assets/images/blogs/Tourism/sapa.jpg'
import FeaturedLocations6 from '../../../assets/images/blogs/Tourism/nha-trang.jpg'
import TypesTourism1 from '../../../assets/images/blogs/Tourism/leo-nui.jpg'
import TypesTourism2 from '../../../assets/images/blogs/Tourism/bien-dao.webp'
import TypesTourism3 from '../../../assets/images/blogs/Tourism/city-tuor.webp'
import TypesTourism4 from '../../../assets/images/blogs/Tourism/cam-trai.webp'
import TypesTourism5 from '../../../assets/images/blogs/Tourism/nghi-duong.webp'
import TypesTourism6 from '../../../assets/images/blogs/Tourism/di-san.webp'




const exploreItems = [
  'travelS1Item1',
  'travelS1Item2',
  'travelS1Item3',
  'travelS1Item4',
  'travelS1Item5',
  'travelS1Item6',
  'travelS1Item7',
  'travelS1Item8',
]

const accommodationItems = [
  'travelS2Item1',
  'travelS2Item2',
  'travelS2Item3',
  'travelS2Item4',
  'travelS2Item5',
  'travelS2Item6',
]

const localExploreItems = [
  'travelS3Item1',
  'travelS3Item2',
  'travelS3Item3',
  'travelS3Item4',
  'travelS3Item5',
  'travelS3Item6',
]

const cuisineItems = [
  'travelS4Item1',
  'travelS4Item2',
  'travelS4Item3',
  'travelS4Item4',
  'travelS4Item5',
  'travelS4Item6',
]

const videoItems = [
  'travelS5Item1',
  'travelS5Item2',
  'travelS5Item3',
  'travelS5Item4',
  'travelS5Item5',
  'travelS5Item6',
]

const travelDemoImages = [
  { id: 1, title: 'Vịnh Hạ Long', category: 'Quảng Ninh', src: 'https://images.unsplash.com/photo-1528127269322-539801943592?w=600&q=80', alt: 'Ha Long Bay Vietnam' },
  { id: 2, title: 'Phú Quốc', category: 'Kiên Giang', src: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=600&q=80', alt: 'Phu Quoc Island Vietnam' },
  { id: 3, title: 'Đà Lạt', category: 'Lâm Đồng', src: 'https://images.unsplash.com/photo-1590418606746-018840f9cd0f?w=600&q=80', alt: 'Da Lat Vietnam' },
  { id: 4, title: 'Hội An', category: 'Quảng Nam', src: 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=600&q=80', alt: 'Hoi An Ancient Town Vietnam' },
  { id: 5, title: 'Sapa', category: 'Lào Cai', src: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=600&q=80', alt: 'Sapa Rice Terraces Vietnam' },
  { id: 6, title: 'Nha Trang', category: 'Khánh Hòa', src: 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=600&q=80', alt: 'Nha Trang Beach Vietnam' },
]

const heroImages = [
  { id: 1, title: 'Khám Phá Địa Điểm', src: BlogImg1, alt: 'Mountain landscape travel' },
  { id: 2, title: 'Đặt Phòng Khách Sạn', src: BlogImg2, alt: 'Luxury hotel room' },
  { id: 3, title: 'Trải Nghiệm Địa Phương', src: BlogImg3, alt: 'Local culture experience' },
]

export default function DuLichBlogPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      <PageHeader />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Plane className="w-4 h-4" />
            {t('travelHero')}
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            {t('travelPageTitle')}
          </h1>
          <p className="text-lg text-blue-500 font-medium mb-8">
            {t('travelPageHeroTag')}
          </p>

          {/* Hero Image Gallery */}
          <div className="grid grid-cols-3 gap-4">
            {[
              { src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80', alt: 'Mountain landscape travel', title: t('blogHeroTimKiem'), priority: true },
              { src: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80', alt: 'Luxury hotel room', title: t('blogHeroDatBan'), priority: false },
              { src: 'https://images.unsplash.com/photo-1533900298318-6b8da08a523e?w=600&q=80', alt: 'Local culture experience', title: t('culinaryS3Item1'), priority: false },
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
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                <GalleryHorizontal className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-gray-900">
                  {t('blogVungMienDuLich')}
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
              {[
                { src: Regions1, alt: 'Northern Vietnam mountains', title: t('blogMienBac') },
                { src: Regions2, alt: 'Central Vietnam beaches', title: t('blogMienTrung') },
                { src: Regions3, alt: 'Southern Vietnam islands', title: t('blogMienNam') },
                { src: Regions4, alt: 'Northwest Vietnam landscapes', title: t('blogTayBac') },
                { src: Regions5, alt: 'Northeast Vietnam mountains', title: t('blogDongBac') },
                { src: Regions6, alt: 'South Central Vietnam coast', title: t('blogNamTrungBo') },
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

        {/* Demo Images Gallery Section 2 */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                <GalleryHorizontal className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-gray-900">
                  {t('blogDiaDiemNoiBat')}
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { id: 1, src: FeaturedLocations1, alt: 'Ha Long Bay Vietnam UNESCO World Heritage', title: t('travelS1Item1'), category: t('blogQuangNinh') },
                { id: 2, src: FeaturedLocations2, alt: 'Phu Quoc Island tropical beach', title: 'Phú Quốc', category: t('blogKienGiang') },
                { id: 3, src: FeaturedLocations3, alt: 'Da Lat city flowers and landscapes', title: 'Đà Lạt', category: t('blogLamDong') },
                { id: 4, src: FeaturedLocations4, alt: 'Hoi An Ancient Town lantern light', title: 'Hội An', category: t('blogQuangNam') },
                { id: 5, src: FeaturedLocations5, alt: 'Sapa rice terraces mountains', title: 'Sapa', category: t('blogLaoCai') },
                { id: 6, src: FeaturedLocations6, alt: 'Nha Trang beach island view', title: 'Nha Trang', category: t('blogKhanhHoa') },
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
              {t('travelPageIntroTitle')}
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              {t('travelPageIntroDesc')}
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              {t('travelPageIntroText1')}
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              {t('travelPageIntroText2')}
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              {t('travelPageIntroText3')}
            </p>
            <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-2xl p-5 my-6 text-center font-semibold">
              {t('travelPageSlogan')}
            </div>
            <div className="bg-blue-50 rounded-2xl p-5 my-6">
              <p className="text-gray-700 leading-relaxed">
                🗺️ {t('travelPageIntroText4')}
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                🏨 {t('travelPageIntroText5')}
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                🍜 {t('travelPageIntroText6')}
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                🎒 {t('travelPageIntroText7')}
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                ❤️ {t('travelPageIntroText8')}
              </p>
            </div>
            <p className="text-gray-900 font-semibold mb-4">
              {t('travelPageIntroText9')}
            </p>
            <p className="text-gray-600 leading-relaxed">
              {t('travelPageIntroText10')}
            </p>
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
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                <GalleryHorizontal className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-gray-900">
                  {t('blogLoaiHinhDuLich')}
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
              {[
                { src: TypesTourism1, alt: 'Mountain hiking trekking', title: t('blogLeoNui') },
                { src: TypesTourism2, alt: 'Tropical beach island resort', title: t('blogBienDao') },
                { src: TypesTourism3, alt: 'City skyline urban tourism', title: t('blogCityTour') },
                { src: TypesTourism4, alt: 'Camping outdoor adventure', title: t('blogCamTri') },
                { src: TypesTourism5, alt: 'Luxury resort spa relaxation', title: t('blogNghiDuong') },
                { src: TypesTourism6, alt: 'UNESCO World Heritage Vietnam', title: t('blogDiSan') },
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

        {/* Section 1: Explore Destinations */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 lg:p-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                <Compass className="w-7 h-7 text-white" />
              </div>
              <div>
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
                  {t('travelS1Title')}
                </h2>
                <p className="text-blue-600 font-medium">{t('travelS1SubTitle')}</p>
              </div>
            </div>
            <p className="text-gray-600 mb-4 leading-relaxed">
              {t('travelS1Desc')}
            </p>
            <p className="text-gray-700 font-medium mb-6">
              {t('travelS1SubDesc')}
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
              {exploreItems.map((key, idx) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="bg-blue-50 rounded-xl p-4 flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0" />
                  <span className="text-gray-800 text-sm">{t(key)}</span>
                </motion.div>
              ))}
            </div>
            <div className="bg-blue-50 rounded-2xl p-5 border-l-4 border-blue-500">
              <p className="text-gray-700 leading-relaxed italic">
                💡 {t('travelS1Note')}
              </p>
            </div>
          </div>
        </motion.section>

        {/* Section 2: Find Accommodation */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-3xl p-6 sm:p-8 lg:p-10">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Bed className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
                {t('travelS2Title')}
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                {t('travelS2Desc')}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6 max-w-4xl mx-auto">
              {accommodationItems.map((key, idx) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="bg-white rounded-xl p-4 flex items-center gap-3 shadow-sm"
                >
                  <CheckCircle2 className="w-5 h-5 text-purple-500 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">{t(key)}</span>
                </motion.div>
              ))}
            </div>

            <div className="bg-white rounded-2xl p-5 shadow-sm border-l-4 border-purple-500 max-w-3xl mx-auto">
              <p className="text-gray-700 leading-relaxed italic">
                💡 {t('travelS2Note')}
              </p>
            </div>
          </div>
        </motion.section>

        {/* Section 3: Explore by Local */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="text-center mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
              {t('travelS3Title')}
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              {t('travelS3Desc')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-br from-teal-100 to-cyan-100 rounded-2xl p-6"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4">
                <MapPin className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                {t('travelS3SubTitle')}
              </h3>
              <div className="space-y-2">
                {localExploreItems.slice(0, 3).map((key) => (
                  <div key={key} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-500" />
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
              className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl p-6"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center mb-4">
                <Building className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                {t('travelS3SubTitle')}
              </h3>
              <div className="space-y-2">
                {localExploreItems.slice(3).map((key) => (
                  <div key={key} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-500" />
                    <span className="text-gray-700 text-sm">{t(key)}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-2xl p-5 text-center font-semibold max-w-3xl mx-auto">
            {t('travelS3Flow')}
          </div>
        </motion.section>

        {/* Section 4: Explore Local Cuisine */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 lg:p-10">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Utensils className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
                {t('travelS4Title')}
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                {t('travelS4Desc')}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6 max-w-4xl mx-auto">
              {cuisineItems.map((key, idx) => (
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

            <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-5 border-l-4 border-amber-500 max-w-3xl mx-auto">
              <p className="text-gray-700 leading-relaxed italic">
                💡 {t('travelS4Note')}
              </p>
            </div>
          </div>
        </motion.section>

        {/* Section 5: Watch Videos and Experiences */}
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
                <Video className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
                {t('travelS5Title')}
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                {t('travelS5Desc')}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6 max-w-4xl mx-auto">
              {videoItems.map((key, idx) => (
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
                💡 {t('travelS5Note')}
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
            { value: '63', labelKey: 'provinces', icon: MapPin },
            { value: '500+', labelKey: 'destinations', icon: Compass },
            { value: '10K+', labelKey: 'accommodations', icon: Bed },
            { value: '5M+', labelKey: 'appUsers', icon: Users },
          ].map((stat, index) => (
            <motion.div
              key={stat.labelKey}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-card text-center"
            >
              <stat.icon className="w-8 h-8 text-blue-500 mx-auto mb-3" />
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
          className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl p-8 lg:p-12 text-center text-white"
        >
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">
            {t('readyTravel')}
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            {t('readyTravelDesc')}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-gray-100 transition-all flex items-center gap-2">
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
