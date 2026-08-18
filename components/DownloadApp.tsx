'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'

export default function DownloadApp() {
  const { t } = useLanguage()

  return (
    <section id="download" className="py-20 md:py-28 bg-biteo-green overflow-hidden relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-40 h-40 border-4 border-white rounded-full" />
        <div className="absolute top-40 right-20 w-60 h-60 border-4 border-white rounded-full" />
        <div className="absolute bottom-20 left-1/4 w-48 h-48 border-4 border-white rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Biteo – {t('platformExperiences')}
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-lg">
              {t('downloadDesc')}
            </p>

            {/* App Store Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <motion.a
                href="https://apps.apple.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-3 px-6 py-3.5 bg-white text-biteo-dark-text rounded-xl hover:bg-gray-100 transition-colors shadow-lg"
              >
                <svg viewBox="0 0 24 24" className="w-7 h-7" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <div className="text-left">
                  <p className="text-xs text-biteo-secondary">{t('downloadOn')}</p>
                  <p className="font-semibold">App Store</p>
                </div>
              </motion.a>

              <motion.a
                href="https://play.google.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-3 px-6 py-3.5 bg-white text-biteo-dark-text rounded-xl hover:bg-gray-100 transition-colors shadow-lg"
              >
                <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 9.99l-2.302 2.302-8.634-8.634z"/>
                </svg>
                <div className="text-left">
                  <p className="text-xs text-biteo-secondary">{t('availableOn')}</p>
                  <p className="font-semibold">Google Play</p>
                </div>
              </motion.a>
            </div>

            {/* QR Code placeholder */}
            <div className="inline-flex items-center gap-4 px-5 py-4 bg-white/10 backdrop-blur-sm rounded-xl">
              <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-10 h-10 text-biteo-green">
                  <rect x="3" y="3" width="7" height="7" fill="currentColor"/>
                  <rect x="14" y="3" width="7" height="7" fill="currentColor"/>
                  <rect x="3" y="14" width="7" height="7" fill="currentColor"/>
                  <rect x="5" y="5" width="3" height="3" fill="white"/>
                  <rect x="16" y="5" width="3" height="3" fill="white"/>
                  <rect x="5" y="16" width="3" height="3" fill="white"/>
                  <rect x="17" y="15" width="1" height="1" fill="currentColor"/>
                  <rect x="19" y="13" width="1" height="1" fill="currentColor"/>
                  <rect x="18" y="17" width="2" height="2" fill="currentColor"/>
                  <rect x="17" y="19" width="1" height="1" fill="currentColor"/>
                  <rect x="14" y="17" width="1" height="1" fill="currentColor"/>
                </svg>
              </div>
              <div className="text-white">
                <p className="font-semibold">{t('scanQR')}</p>
                <p className="text-sm text-white/70">{t('scanQRDesc')}</p>
              </div>
            </div>
          </motion.div>

          {/* Right - Phone Mockups */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            {/* iPhone */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="relative z-10"
            >
              <div className="w-56 sm:w-64 bg-biteo-dark-text rounded-[2.5rem] p-2 shadow-2xl">
                <div className="bg-white rounded-[2rem] overflow-hidden">
                  <div className="h-6 bg-biteo-dark-text rounded-b-xl" />
                  <div className="p-3">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-8 h-8 bg-biteo-green rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-xs">B</span>
                      </div>
                      <span className="font-semibold text-xs">Biteo</span>
                    </div>
                    <div className="grid grid-cols-4 gap-1.5 mb-3">
                      {['🎬', '🍜', '✈️', '🛍️', '🛒', '📍', '🏨', '☕'].map((emoji, i) => (
                        <div key={i} className="aspect-square bg-gray-50 rounded-lg flex items-center justify-center text-sm">
                          {emoji}
                        </div>
                      ))}
                    </div>
                    <div className="bg-gradient-to-br from-biteo-green/10 to-biteo-lime/10 rounded-xl h-20 mb-2" />
                    <div className="bg-white rounded-lg p-2 shadow-sm">
                      <p className="text-xs font-medium">{t('topRestaurants')}</p>
                      <p className="text-[10px] text-gray-400">{t('nearYou')}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-biteo-lime/30 px-4 py-1 rounded-full">
                <span className="text-xs font-medium text-white flex items-center gap-1">
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                  {t('iosAndroid')}
                </span>
              </div>
            </motion.div>

            {/* Android */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="absolute -right-8 top-8 hidden lg:block"
            >
              <div className="w-48 bg-biteo-dark-text rounded-[2rem] p-1.5 shadow-2xl opacity-80">
                <div className="bg-white rounded-[1.75rem] overflow-hidden">
                  <div className="h-5 bg-biteo-dark-text rounded-b-xl" />
                  <div className="p-2">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-6 h-6 bg-biteo-green rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-[10px]">B</span>
                      </div>
                      <span className="font-semibold text-[10px]">Biteo</span>
                    </div>
                    <div className="grid grid-cols-4 gap-1 mb-2">
                      {['🎬', '🍜', '✈️', '🛍️', '🛒', '📍', '🏨', '☕'].map((emoji, i) => (
                        <div key={i} className="aspect-square bg-gray-50 rounded-lg flex items-center justify-center text-[10px]">
                          {emoji}
                        </div>
                      ))}
                    </div>
                    <div className="bg-gradient-to-br from-biteo-green/10 to-biteo-lime/10 rounded-lg h-14" />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Decorative */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-biteo-lime/20 rounded-full blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
