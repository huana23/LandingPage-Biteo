'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import {
  MapPin,
  Search,
  Sparkles,
  Compass,
  Store,
  Hotel,
  Heart,
  Users,
  Globe,
  Video,
  Star,
  Bookmark,
  ShoppingBag,
  ChefHat,
  Coffee,
  Utensils,
  Camera,
  Play,
  Navigation,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  Target,
  GalleryHorizontal,
} from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import PageHeader from '@/components/PageHeader'

import BlogImg1 from '../../../assets/images/blogs/Explore/img-1.jpg'
import BlogImg2 from '../../../assets/images/blogs/Explore/img-2.jpg'
import BlogImg3 from '../../../assets/images/blogs/Explore/img-3.jpg'
import FeaturedLocations1 from '../../../assets/images/blogs/Explore/cau-rong.jpg'
import FeaturedLocations2 from '../../../assets/images/blogs/Explore/hang-son-doong.jpg'
import FeaturedLocations3 from '../../../assets/images/blogs/Explore/cho-noi.jpg'
import FeaturedLocations4 from '../../../assets/images/blogs/Explore/pansipang.jpg'
import FeaturedLocations5 from '../../../assets/images/blogs/Explore/hoi-am.jpg'
import FeaturedLocations6 from '../../../assets/images/blogs/Explore/bien-nha-trang.webp'


export default function KhamPhaDiaPhuongBlogPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-cyan-50">
      <PageHeader accentClass="bg-teal-600" textClass="text-teal-600" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <MapPin className="w-4 h-4" />
            {t('localHero')}
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            {t('localPageTitle')}
          </h1>
          <p className="text-lg text-teal-500 font-medium mb-8">
            {t('localPageHeroTag')}
          </p>

          {/* Hero Image Gallery */}
          <div className="grid grid-cols-3 gap-4">
            {[
              { src: BlogImg1, alt: 'Local cultural exploration Vietnam', title: t('blogHeroTimKiem'), priority: true },
              { src: BlogImg2, alt: 'Cultural immersion experience', title: t('culinaryS3Item1'), priority: false },
              { src: BlogImg3, alt: 'Community sharing travel', title: t('blogCatCongDong'), priority: false },
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
              <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center">
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
                { id: 1, src: FeaturedLocations1, alt: 'Japanese Bridge Hoi An UNESCO Heritage', title: 'Cầu Rồng', category: t('blogDiSan') },
                { id: 2, src: FeaturedLocations2, alt: 'Son Doong Cave largest cave in world', title: 'Hang Sơn Đoòng', category: t('blogThienNhien') },
                { id: 3, src: FeaturedLocations3, alt: 'Floating market Cai Rang Mekong', title: 'Chợ Nổi Cái Răng', category: t('blogVanHoa') },
                { id: 4, src: FeaturedLocations4, alt: 'Fansipan peak highest mountain Vietnam', title: 'Đỉnh Fansipan', category: t('blogNuiNon') },
                { id: 5, src: FeaturedLocations5, alt: 'Hoi An ancient town lantern street', title: 'Phố Cổ Hội An', category: t('blogLichSu') },
                { id: 6, src: FeaturedLocations6, alt: 'Nha Trang beautiful beach coastline', title: 'Biển Nha Trang', category: t('blogBoBien') },
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
              {t('localPageIntroTitle')}
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              {t('localPageIntroDesc')}
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              {t('localPageIntroText1')}
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              {t('localPageIntroText2')}
            </p>
            <div className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-2xl p-5 my-6 text-center font-semibold">
              {t('localPageSlogan')}
            </div>
            <p className="text-gray-900 font-semibold mb-4">
              {t('localPageIntroText3')}
            </p>
            <p className="text-gray-600 leading-relaxed">
              {t('localPageIntroText4')}
            </p>
          </div>
        </motion.section>


        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              {t('localCtaTitle')}
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              {t('localCtaDesc')}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-500 to-cyan-500 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-shadow"
              >
                <MapPin className="w-5 h-5" />
                {t('localCtaButton1')}
              </Link>
              <Link
                href="/am-thuc"
                className="inline-flex items-center gap-2 bg-gray-100 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:bg-gray-200 transition-colors"
              >
                <Utensils className="w-5 h-5" />
                {t('localCtaButton2')}
              </Link>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  )
}
