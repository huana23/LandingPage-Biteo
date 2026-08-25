'use client'

import { useEffect, useState, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import { ChevronDown, Download, Globe, Menu, X } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

type Language = 'vi' | 'en'

const LANGUAGES: Array<{ code: Language; label: string }> = [
  { code: 'vi', label: 'Tiếng Việt' },
  { code: 'en', label: 'English' },
]

function LanguagePicker({ align = 'right' }: { align?: 'left' | 'right' }) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const { language, setLanguage, t } = useLanguage()

  useEffect(() => {
    if (!open) return
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [open])

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={t('openMenu')}
        aria-expanded={open}
        className="flex items-center text-sm font-medium text-gray-600 hover:text-green-600 transition-colors"
      >
        <Globe className="mr-1.5 w-4 h-4" />
        {language === 'vi' ? t('vietnamese') : t('english')}
        <ChevronDown className="ml-1 w-3.5 h-3.5" />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.15 }}
            className={`absolute top-full mt-2 w-40 bg-white rounded-lg shadow-lg border border-gray-100 py-1 z-50 ${
              align === 'right' ? 'right-0' : 'left-0'
            }`}
          >
            {LANGUAGES.map((lang) => (
              <button
                key={lang.code}
                type="button"
                onClick={() => {
                  setLanguage(lang.code)
                  setOpen(false)
                }}
                className={`w-full text-left px-4 py-2 text-sm transition-colors ${
                  language === lang.code
                    ? 'text-green-600 bg-green-50 font-medium'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                {lang.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

const navLinks = [
  {
    label: 'Nhân viên đi chợ hộ',
    href: '/dang-ky-nhan-vien-di-cho-ho',
    description: 'Đăng ký hỗ trợ mua sắm',
  },
  {
    label: 'CTV của Biteo',
    href: '/dang-ky-ctv',
    description: 'Trở thành cộng tác viên',
  },
  {
    label: 'Đăng ký Cửa hàng',
    href: '/dang-ky-cua-hang',
    description: 'Hợp tác kinh doanh cùng Biteo',
  },
  {
    label: 'Creator / Tiếp thị',
    href: '/dang-ky-creator-tiep-thi',
    description: 'Content & Marketing',
  },
  {
    label: 'Trở thành Đối tác',
    href: '#partners',
  },
  {
    label: 'Trung tâm Hỗ trợ',
    href: '/#support',
  },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-white/95 backdrop-blur-md border-b border-gray-100 ${
          isScrolled ? 'shadow-sm' : ''
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Left side */}
            <div className="flex items-center gap-4 sm:gap-6">
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(true)}
                aria-label={t('openMenu')}
                aria-expanded={isMobileMenuOpen}
                className="flex flex-col items-center justify-center p-2 text-gray-600 hover:text-green-600 transition-colors group"
              >
                <Menu className="w-6 h-6 group-hover:scale-110 transition-transform" />
                <span className="mt-0.5 text-[10px] font-medium uppercase tracking-wider">
                  {t('menu')}
                </span>
              </button>

              <Link
                href="/"
                className="flex-shrink-0 text-3xl font-bold text-green-600 tracking-tight"
              >
                Biteo
              </Link>
            </div>

            {/* Desktop navigation */}
            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              <nav className="flex items-center gap-5 lg:gap-6">
                <div className="relative group">
                  <button
                    type="button"
                    className="flex items-center text-sm font-medium text-gray-600 hover:text-green-600 transition-colors py-2"
                  >
                    {t('registerConsultation')}
                    <ChevronDown className="ml-1 w-4 h-4" />
                  </button>

                  <div className="absolute left-0 top-full pt-2 opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200">
                    <div className="w-60 rounded-xl border border-gray-100 bg-white p-2 shadow-xl">
                      <a
                        href="/dang-ky-nhan-vien-di-cho-ho"
                        className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm text-gray-600 hover:bg-green-50 hover:text-green-600 transition-colors"
                      >
                        <span className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                          <span className="text-base">🛒</span>
                        </span>
                        <div>
                          <div className="font-medium">{t('shopperStaff')}</div>
                          <div className="text-xs text-gray-400">{t('shoppingAssistant')}</div>
                        </div>
                      </a>

                      <a
                        href="/dang-ky-ctv"
                        className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                      >
                        <span className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                          <span className="text-base">🚗</span>
                        </span>
                        <div>
                          <div className="font-medium">{t('biteoAffiliate')}</div>
                          <div className="text-xs text-gray-400">{t('collaborator')}</div>
                        </div>
                      </a>

                      <a
                        href="/dang-ky-cua-hang"
                        className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm text-gray-600 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                      >
                        <span className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                          <span className="text-base">🏪</span>
                        </span>
                        <div>
                          <div className="font-medium">{t('registerStore')}</div>
                          <div className="text-xs text-gray-400">{t('businessPartner')}</div>
                        </div>
                      </a>

                      <a
                        href="/dang-ky-creator-tiep-thi"
                        className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm text-gray-600 hover:bg-purple-50 hover:text-purple-600 transition-colors"
                      >
                        <span className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                          <span className="text-base">📱</span>
                        </span>
                        <div>
                          <div className="font-medium">{t('creatorMarketing')}</div>
                          <div className="text-xs text-gray-400">{t('contentMarketing')}</div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>

                <a
                  href="/#support"
                  className="text-sm font-medium text-gray-600 hover:text-green-600 transition-colors py-2"
                >
                  {t('supportCenter')}
                </a>
              </nav>

              <div className="flex items-center gap-3 lg:gap-4 border-l border-gray-200 pl-5 lg:pl-6">
                <LanguagePicker />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/50 z-[60]"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-hidden
            />

            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{
                type: 'spring',
                damping: 28,
                stiffness: 260,
              }}
              className="fixed top-0 right-0 bottom-0 w-[320px] max-w-[85vw] bg-white z-[70] shadow-2xl"
              role="dialog"
              aria-modal="true"
            >
              <div className="flex flex-col h-full p-6">
                <div className="flex items-center justify-between pb-6 border-b border-gray-100">
                  <Link
                    href="/"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-2xl font-bold text-green-600"
                  >
                    Biteo
                  </Link>

                  <button
                    type="button"
                    onClick={() => setIsMobileMenuOpen(false)}
                    aria-label={t('closeMenu')}
                    className="p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <nav className="flex-1 py-6">
                  <div className="space-y-1">
                    {navLinks.map((link, index) => (
                      <motion.div
                        key={link.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: index * 0.05,
                        }}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <Link
                          href={link.href}
                          className="block px-4 py-3.5 rounded-xl text-base font-medium text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors"
                        >
                          {link.label}
                          {link.description && (
                            <span className="block text-xs text-gray-400 font-normal mt-0.5">
                              {link.description}
                            </span>
                          )}
                        </Link>
                      </motion.div>
                    ))}

                    <div className="pt-4 mt-2 border-t border-gray-100">
                      <LanguagePicker align="left" />
                    </div>
                  </div>
                </nav>

                <div className="space-y-3 pt-6 border-t border-gray-100">
                  <Link
                    href="/#download"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center justify-center gap-2 w-full py-3.5 text-sm font-semibold text-green-600 border-2 border-green-600 rounded-xl hover:bg-green-600 hover:text-white transition-all"
                  >
                    <Download className="w-4 h-4" />
                    {t('downloadApp')}
                  </Link>

                  <Link
                    href="/#join"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block w-full py-3.5 text-center text-sm font-semibold text-white bg-green-600 rounded-xl hover:bg-green-700 transition-colors"
                  >
                    {t('joinBiteo')}
                  </Link>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  )
}