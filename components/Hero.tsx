'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Download, Play, Sparkles, X } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import HeroImage from '../assets/images/Hero-phone.png'
import BGHero from '../assets/images/BG-Hero.jpg'
import { useLanguage } from '@/context/LanguageContext'

export default function Hero() {
  const [isVideoOpen, setIsVideoOpen] = useState(false)
  const { t } = useLanguage()

  const videoUrl = 'https://www.youtube.com/embed/LkJ6qJhqVF4?autoplay=1'

  const stats = [
    { value: '500K+', label: t('users') },
    { value: '4.9★', label: t('rating') },
    { value: '24/7', label: t('support') },
  ]

  const featureCards = [
    {
      icon: '🍜',
      label: t('orderFood'),
      color: 'from-orange-400 to-rose-400',
      position: 'top-[4%] -left-12 lg:-left-20',
    },
    {
      icon: '🛒',
      label: t('groceryShopping'),
      color: 'from-emerald-400 to-teal-400',
      position: 'top-[24%] -right-10 lg:-right-16',
    },
    {
      icon: '✈️',
      label: t('travel'),
      color: 'from-sky-400 to-indigo-400',
      position: 'bottom-[26%] -left-14 lg:-left-24',
    },
    {
      icon: '📍',
      label: t('explore'),
      color: 'from-pink-400 to-fuchsia-400',
      position: 'bottom-[6%] -right-8 lg:-right-12',
    },
  ]

  return (
    <>
      <section className="relative isolate hidden w-full overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-green-950 lg:flex lg:min-h-[calc(100vh+4rem)]">
      {/* Background image */}
      <img
        src={BGHero.src}
        alt="Biteo Super App Hero Banner"
        className="absolute inset-0 h-full w-full object-cover object-center opacity-30"
      />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-950/95 via-gray-950/80 to-gray-950/40" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-950/80" />

      {/* Soft colored glows */}
      <div className="pointer-events-none absolute -left-32 top-1/4 h-[520px] w-[520px] -translate-y-1/2 rounded-full bg-green-500/15 blur-[140px]" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-[420px] w-[420px] rounded-full bg-emerald-400/10 blur-[120px]" />

      {/* Subtle grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-6 py-10 lg:grid-cols-[1.05fr_1fr] lg:gap-12 lg:px-8 lg:py-12">
        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="flex flex-col text-center lg:text-left"
        >
          {/* Badge */}
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="mb-6 inline-flex w-fit items-center gap-2 self-center rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white shadow-lg backdrop-blur-md lg:self-start"
          >
            <Sparkles className="h-4 w-4 text-green-400" />
            {t('heroBadge')}
          </motion.span>

          {/* Heading */}
          <h1 className="mb-5 text-4xl font-bold leading-[1.1] tracking-tight text-white drop-shadow-2xl sm:text-5xl lg:text-[3.5rem] lg:leading-[1.08] xl:text-[4rem]">
            <span className="block">
              Biteo<span className="text-green-400">.</span>
            </span>
            <span className="mt-2 block bg-gradient-to-r from-green-300 via-emerald-400 to-teal-300 bg-clip-text text-transparent">
              {t('heroTitle')}
            </span>
            <span className="mt-2 block text-white/95">{t('heroSubtitle')}</span>
          </h1>

          {/* Description */}
          <p className="mx-auto mb-8 max-w-lg text-base font-medium leading-relaxed text-white/80 sm:text-lg lg:mx-0">
            {t('heroDescription')}
          </p>

          {/* Buttons */}
          <div className="mb-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4 lg:items-start lg:justify-start">
            <a
              href="#download"
              className="group inline-flex w-full items-center justify-center rounded-2xl bg-white px-7 py-4 text-base font-semibold text-green-600 shadow-[0_10px_40px_-10px_rgba(34,197,94,0.6)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-green-50 hover:shadow-[0_15px_50px_-10px_rgba(34,197,94,0.7)] sm:w-auto"
            >
              <Download className="mr-2 h-5 w-5 transition-transform group-hover:-translate-y-0.5" />
              {t('downloadNow')}
            </a>

            <button
              onClick={() => setIsVideoOpen(true)}
              className="group inline-flex w-full items-center justify-center rounded-2xl border border-white/25 bg-white/5 px-7 py-4 text-base font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-white/50 hover:bg-white/10 sm:w-auto"
            >
              <span className="mr-2 flex h-7 w-7 items-center justify-center rounded-full bg-white/15 transition-colors group-hover:bg-green-500/80">
                <Play className="h-3 w-3 fill-white text-white" />
              </span>
              {t('watchIntro')}
            </button>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex items-center justify-center gap-8 border-t border-white/10 pt-6 sm:gap-12 lg:justify-start"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="text-center lg:text-left">
                <div className="bg-gradient-to-br from-white to-white/70 bg-clip-text text-2xl font-bold text-transparent sm:text-3xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs font-medium uppercase tracking-wider text-white/60 sm:text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right side - App mockup */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: 'easeOut',
          }}
          className="relative mx-auto w-full max-w-[280px] sm:max-w-xs lg:max-w-sm"
        >
          {/* Background glow */}
          <div className="absolute inset-x-0 top-1/2 -z-10 mx-auto h-[80%] w-[60%] -translate-y-1/2 rounded-full bg-gradient-to-br from-green-400/30 to-emerald-500/20 blur-3xl" />

          {/* Decorative ring */}
          <div className="absolute inset-0 -z-10 m-auto h-[105%] w-[80%] rounded-[3rem] border border-white/5" />

          {/* Floating feature cards */}
          {featureCards.map((card, index) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, scale: 0.6, y: 20 }}
              animate={{
                opacity: 1,
                scale: 1,
                y: [0, -10, 0],
              }}
              transition={{
                opacity: { duration: 0.5, delay: 0.9 + index * 0.1 },
                scale: { duration: 0.5, delay: 0.9 + index * 0.1 },
                y: {
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: index * 0.3,
                },
              }}
              className={`absolute z-30 hidden items-center gap-2.5 rounded-2xl border border-white/20 bg-white/95 px-4 py-2.5 shadow-2xl shadow-gray-950/40 backdrop-blur-md md:flex ${card.position}`}
            >
              <div
                className={`flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br text-base shadow-md ${card.color}`}
              >
                <span>{card.icon}</span>
              </div>
              <span className="whitespace-nowrap text-sm font-semibold text-gray-800">
                {card.label}
              </span>
            </motion.div>
          ))}

          {/* App image */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="relative"
          >
            <img
              src={HeroImage.src}
              alt="Biteo App Preview"
              className="relative z-10 mx-auto block h-auto w-auto max-h-[68vh] max-w-full rounded-[2.25rem] border-[6px] border-white/10 object-contain shadow-2xl"
            />

            {/* Subtle inner border glow */}
            <div className="pointer-events-none absolute inset-0 z-20 rounded-[2.25rem] ring-1 ring-inset ring-white/20" />
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 z-0 h-24 bg-gradient-to-t from-gray-950/60 to-transparent" />
      </section>

      {/* Video Modal */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsVideoOpen(false)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', duration: 0.5 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl aspect-video rounded-2xl overflow-hidden shadow-2xl"
            >
              <button
                onClick={() => setIsVideoOpen(false)}
                className="absolute -top-12 right-0 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-all hover:bg-white/20 z-10"
              >
                <X className="h-5 w-5" />
              </button>
              <iframe
                src={videoUrl}
                title="Biteo Introduction Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="h-full w-full"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
