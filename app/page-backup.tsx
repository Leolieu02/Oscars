"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Clock, MapPin, Phone, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Navbar from '@/components/Navbar'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/background.jpg"
            alt="Oscar's Bar Interiør"
            fill
            className="object-cover"
            priority
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="inline-block mb-4"
              >
              </motion.div>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-vintage font-bold mb-10 tracking-widest text-gold text-vintage">
              OSCAR'S CAFÉ & BAR
            </h1>
            <p className="text-lg md:text-xl mb-12 font-body text-vintage-cream/90 max-w-2xl mx-auto leading-relaxed">
              Siden 1923 har vi skapt den perfekte atmosfæren for de som setter pris på 
              de finere ting i livet. Velkommen til Oscar's.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Simple test section */}
      <section className="py-24 bg-black text-white text-center">
        <h2 className="text-4xl font-vintage text-gold">Test Section</h2>
        <p className="text-xl mt-4">This is a simplified version to test the build</p>
      </section>
    </main>
  )
}