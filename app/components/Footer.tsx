"use client";

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Twitter, Github, Linkedin, ArrowUp } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import Logo from './Logo'

const Footer = () => {
  const { t } = useLanguage();
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const footerLinks = {
    company: [
      { label: t('footer.aboutUs'), href: '#about' },
      { label: t('footer.ourTeam'), href: '#team' },
      { label: t('footer.careers'), href: '#careers' },
      { label: t('footer.news'), href: '#news' }
    ],
    services: [
      { label: t('footer.aiLab'), href: '#ai-lab' },
      { label: t('footer.blockchainRD'), href: '#blockchain' },
      { label: t('footer.digitalCapital'), href: '#investment' },
      { label: t('footer.consulting'), href: '#consulting' }
    ],
    resources: [
      { label: t('footer.documentation'), href: '#docs' },
      { label: t('footer.apiReference'), href: '#api' },
      { label: t('footer.whitePapers'), href: '#papers' },
      { label: t('footer.blog'), href: '#blog' }
    ],
    legal: [
      { label: t('footer.privacyPolicy'), href: '#privacy' },
      { label: t('footer.termsOfService'), href: '#terms' },
      { label: t('footer.cookiePolicy'), href: '#cookies' },
      { label: t('footer.disclaimer'), href: '#disclaimer' }
    ]
  }

  const socialLinks = [
    { icon: Twitter, href: 'https://twitter.com/abundracapital', label: 'Twitter' },
    { icon: Github, href: 'https://github.com/abundracapital', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/company/abundracapital', label: 'LinkedIn' }
  ]

  const contactInfo = [
    { icon: Mail, value: 'hello@abundra.com', href: 'mailto:hello@abundra.com' },
    { icon: Phone, value: '+1 (647) 555-0123', href: 'tel:+16475550123' },
    { icon: MapPin, value: t('contact.address'), href: '#' }
  ]

  return (
    <footer id="contact" className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border border-white rounded-full" />
        <div className="absolute bottom-10 right-10 w-48 h-48 border border-white rounded-full" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-white rounded-full" />
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
          {/* Top Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid lg:grid-cols-5 gap-12 mb-16"
          >
            {/* Company Info */}
            <div className="lg:col-span-2 space-y-6">
              <Logo size="md" variant="white" />
              
              <p className="text-gray-300 leading-relaxed max-w-md">
                {t('footer.description')}
              </p>

              <div className="space-y-3">
                {contactInfo.map((contact, index) => {
                  const Icon = contact.icon
                  return (
                    <motion.a
                      key={contact.value}
                      href={contact.href}
                      className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-200"
                      whileHover={{ x: 5 }}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Icon size={18} />
                      <span>{contact.value}</span>
                    </motion.a>
                  )
                })}
              </div>
            </div>

            {/* Links Sections */}
            <div className="lg:col-span-3 grid md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">{t('footer.company')}</h3>
                <ul className="space-y-3">
                  {footerLinks.company.map((link, index) => (
                    <motion.li
                      key={link.label}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                    >
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-white transition-colors duration-200"
                      >
                        {link.label}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">{t('footer.services')}</h3>
                <ul className="space-y-3">
                  {footerLinks.services.map((link, index) => (
                    <motion.li
                      key={link.label}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                    >
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-white transition-colors duration-200"
                      >
                        {link.label}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">{t('footer.resources')}</h3>
                <ul className="space-y-3">
                  {footerLinks.resources.map((link, index) => (
                    <motion.li
                      key={link.label}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                    >
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-white transition-colors duration-200"
                      >
                        {link.label}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">{t('footer.legal')}</h3>
                <ul className="space-y-3">
                  {footerLinks.legal.map((link, index) => (
                    <motion.li
                      key={link.label}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                    >
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-white transition-colors duration-200"
                      >
                        {link.label}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Newsletter Signup */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-8 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-3xl border border-gray-700 mb-12"
          >
            <div className="max-w-2xl mx-auto text-center">
              <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
              <p className="text-gray-300 mb-6">
                Get the latest insights on AI, blockchain, and digital capital innovations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-full bg-gray-800 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors duration-200"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
                >
                  Subscribe
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Bottom Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-gray-700"
          >
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <p className="text-gray-400">
                © 2024 Abundra Capital Inc. All rights reserved.
              </p>
            </div>

            <div className="flex items-center space-x-6">
              {/* Social Links */}
              <div className="flex items-center space-x-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors duration-200"
                      whileHover={{ scale: 1.1, y: -2 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <Icon size={18} />
                    </motion.a>
                  )
                })}
              </div>

              {/* Back to Top */}
              <motion.button
                onClick={scrollToTop}
                className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <ArrowUp size={18} />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
