'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowLeft, ChevronDown, Download, Globe, Menu, X } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

type Language = 'vi' | 'en'

const LANGUAGES: Array<{ code: Language; label: string }> = [
  { code: 'vi', label: 'Tiếng Việt' },
  { code: 'en', label: 'English' },
]

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
    href: '/#partners',
  },
  {
    label: 'Trung tâm Hỗ trợ',
    href: '/#support',
  },
]

function LanguagePicker({ align = 'right' }: { align?: 'left' | 'right' }) {
  const [open, setOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
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

interface PageHeaderProps {
  /** Optional accent color class for the logo square, defaults to green */
  accentClass?: string

  /** Optional accent text color class for the brand wordmark, defaults to green */
  textClass?: string

  /** Optional back link override; defaults to home anchor #ecosystem */
  backHref?: string

  /** Back link label override, defaults to translation key "back" */
  backLabel?: string
}

export default function PageHeader({
  accentClass = 'bg-green-600',
  textClass = 'text-green-600',
  backHref = '/#ecosystem',
  backLabel,
}: PageHeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const { t } = useLanguage()

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  return (
    <>
      <header className="bg-white/95 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Left side */}
            <div className="flex items-center gap-4 sm:gap-6">
              {/* Menu button */}
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

              {/* Logo */}
              <Link href="/" className="flex items-center gap-2">
                <div
                  className={`w-10 h-10 ${accentClass} rounded-xl flex items-center justify-center`}
                >
                  <span className="text-white font-bold text-lg">B</span>
                </div>

                <span className={`text-2xl font-bold ${textClass}`}>
                  Biteo
                </span>
              </Link>
            </div>

            {/* Desktop right side */}
            <div className="hidden md:flex items-center gap-5">

              <Link
                href={backHref}
                className="flex items-center gap-2 text-gray-600 hover:text-green-600 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />

                <span className="text-sm font-medium">
                  {backLabel ?? t('back')}
                </span>
              </Link>
              <LanguagePicker />

            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/50 z-[60]"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-hidden
            />

            {/* Drawer */}
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
              aria-label={t('menu')}
            >
              <div className="flex flex-col h-full p-6">
                {/* Drawer header */}
                <div className="flex items-center justify-between pb-6 border-b border-gray-100">
                  <Link
                    href="/"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center gap-2"
                  >
                    <div
                      className={`w-9 h-9 ${accentClass} rounded-lg flex items-center justify-center`}
                    >
                      <span className="text-white font-bold">
                        B
                      </span>
                    </div>

                    <span className={`text-xl font-bold ${textClass}`}>
                      Biteo
                    </span>
                  </Link>

                  <button
                    type="button"
                    onClick={() => setIsMobileMenuOpen(false)}
                    aria-label={t('closeMenu')}
                    className="p-2 rounded-lg text-gray-600 hover:bg-gray-100 hover:text-green-600 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Navigation */}
                <nav className="flex-1 py-6 overflow-y-auto">
                  <div className="space-y-1">
                    {navLinks.map((link, index) => (
                      <motion.div
                        key={link.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: index * 0.05,
                        }}
                      >
                        <Link
                          href={link.href}
                          onClick={() => setIsMobileMenuOpen(false)}
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

                    {/* Language */}
                    <div className="pt-4 mt-2 border-t border-gray-100">
                      <LanguagePicker align="left" />
                    </div>
                  </div>
                </nav>

                {/* Bottom actions */}
                <div className="space-y-3 pt-6 border-t border-gray-100">
                  {/* Back */}
                  <Link
                    href={backHref}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center justify-center gap-2 w-full py-3.5 text-sm font-semibold text-gray-600 border border-gray-200 rounded-xl hover:border-green-600 hover:text-green-600 transition-all"
                  >
                    <ArrowLeft className="w-4 h-4" />

                    {backLabel ?? t('back')}
                  </Link>

                  {/* Download */}
                  <Link
                    href="/#download"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center justify-center gap-2 w-full py-3.5 text-sm font-semibold text-green-600 border-2 border-green-600 rounded-xl hover:bg-green-600 hover:text-white transition-all"
                  >
                    <Download className="w-4 h-4" />

                    {t('downloadApp')}
                  </Link>

                  {/* Join */}
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
