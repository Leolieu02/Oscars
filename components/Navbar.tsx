"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone, MapPin, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Hjem', href: '/' },
    { name: 'Om Oss', href: '/about' },
    { name: 'Kontakt', href: '/contact' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black backdrop-blur-md shadow-2xl border-b border-vintage-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0"
          >
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-12 h-12 bg-gradient-to-br from-vintage-gold to-vintage-bronze rounded-full flex items-center justify-center shadow-lg border-2 border-vintage-gold/30 group-hover:scale-110 transition-transform duration-300">
                <span className="text-black font-vintage font-bold text-xl">O</span>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-vintage text-2xl font-bold tracking-widest text-gold">
                  OSCAR'S
                </span>
                <span className="text-vintage-gold/80 font-body text-xs tracking-wider uppercase">
                  Est. 2012
                </span>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className="text-white hover:text-vintage-gold transition-all duration-300 font-vintage font-medium tracking-wider relative group text-lg"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-vintage-gold to-vintage-bronze transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-6">
            {<Button 
              variant="outline" 
              className="border-vintage-gold text-lg text-black hover:bg-vintage-gold hover:text-black transition-all duration-300 font-vintage tracking-wider shadow-lg"
            >
              Besøk RP kebab
            </Button> }
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-vintage-gold hover:bg-vintage-gold/10 border border-vintage-gold/30"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black/95 backdrop-blur-md border-t border-vintage-gold/20"
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-white hover:text-vintage-gold transition-colors duration-300 font-vintage text-lg tracking-wider"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              {/* <div className="pt-4 border-t border-vintage-gold/20">
                <div className="flex items-center space-x-2 text-vintage-gold/80 mb-3">
                  <Phone className="w-4 h-4" />
                  <span className="text-sm font-body">+47 638 30 103</span>
                </div>
                <div className="flex items-center space-x-2 text-vintage-gold/80 mb-4">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm font-body">Løvenstadtorget 19, 2006 Løvenstad</span>
                </div>
                <div className="flex items-center space-x-2 text-vintage-gold/80 mb-4">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm font-body">Åpen Daglig 13:00 - 23:00</span>
                </div>
              </div> */}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar 