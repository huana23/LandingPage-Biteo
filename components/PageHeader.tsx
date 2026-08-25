'use client'

import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

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
  const { t } = useLanguage()

  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className={`w-10 h-10 ${accentClass} rounded-xl flex items-center justify-center`}>
              <span className="text-white font-bold text-lg">B</span>
            </div>
            <span className={`text-2xl font-bold ${textClass}`}>Biteo</span>
          </Link>
          <Link
            href={backHref}
            className="flex items-center gap-2 text-gray-600 hover:text-green-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">{backLabel ?? t('back')}</span>
          </Link>
        </div>
      </div>
    </header>
  )
}