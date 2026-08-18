'use client'

import Link from 'next/link'
import { Github, Twitter, Linkedin, Facebook } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

const socialLinks = [
  { icon: Facebook, href: 'https://facebook.com/biteo', label: 'Facebook' },
  { icon: Twitter, href: 'https://twitter.com/biteo', label: 'Twitter' },
  { icon: Linkedin, href: 'https://linkedin.com/company/biteo', label: 'LinkedIn' },
  { icon: Github, href: 'https://github.com/biteo', label: 'Github' },
]

export default function Footer() {
  const { t } = useLanguage()

  const footerLinks = {
    biteo: [
      { label: t('aboutBiteo'), href: '#about' },
      { label: t('contact'), href: '/contact' },
    ],
    services: [
      { label: t('video'), href: '/#ecosystem' },
      { label: t('culinary'), href: '/#ecosystem' },
      { label: t('travel'), href: '/#ecosystem' },
      { label: t('shopping'), href: '/#ecosystem' },
      { label: t('groceryShopping'), href: '/#ecosystem' },
    ],
    partners: [
      { label: t('registerBusiness'), href: '/#business' },
      { label: t('collaborators'), href: '/dang-ky-nhan-vien-di-cho-ho' },
      { label: t('supportCenter'), href: '/contact' },
    ],
    legal: [
      { label: t('termsOfUse'), href: '/terms' },
      { label: t('privacyPolicy'), href: '/privacy' },
      { label: t('partnerPolicy'), href: '/partner-policy' },
    ],
  }

  return (
    <footer className="bg-biteo-footer text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-bold text-biteo-green">Biteo</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              {t('footerDesc')}
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center hover:bg-biteo-green transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Biteo Links */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">{t('biteo')}</h4>
            <ul className="space-y-3">
              {footerLinks.biteo.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">{t('services')}</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Partners Links */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">{t('partners')}</h4>
            <ul className="space-y-3">
              {footerLinks.partners.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">{t('legal')}</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2026 Biteo. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
