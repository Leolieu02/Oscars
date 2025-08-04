"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Clock, MapPin, Phone, Star, UtensilsCrossed, Users } from 'lucide-react'
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
          {/* Try regular img tag first for debugging */}
          <img
            src="/images/background.jpg"
            alt="Oscar's Bar Interiør"
            className="absolute inset-0 w-full h-full object-cover"
            onError={(e) => {
              console.error('Background image failed to load:', e);
            }}
            onLoad={() => {
              console.log('Background image loaded successfully');
            }}
          />
          {/* Next.js Image as backup */}
          {/* <Image
            src="/images/background.jpg"
            alt="Oscar's Bar Interiør"
            fill
            className="object-cover"
            priority
            onError={(e) => {
              console.error('Background image failed to load:', e);
            }}
            onLoad={() => {
              console.log('Background image loaded successfully');
            }}
          /> */}
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
            
            <h1 className="text-7xl md:text-7xl font-vintage font-bold mb-4 tracking-widest text-gold text-vintage">
              OSCAR'S CAFÉ & BAR
            </h1>
            <p className="text-lg md:text-2xl mb-12 font-body text-vintage-cream/90 max-w-2xl mx-auto leading-relaxed">
              Den perfekte atmosfæren for de som setter pris på 
              de finere ting i livet. Velkommen til Oscar's.
            </p>
            
            {/* <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-vintage-gold to-vintage-bronze hover:from-vintage-bronze hover:to-vintage-gold text-black px-10 py-4 text-xl font-vintage font-bold tracking-wider shadow-2xl border-2 border-vintage-gold/30"
              >
                Se Meny
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-vintage-gold text-vintage-gold hover:bg-vintage-gold hover:text-black px-10 py-4 text-xl font-vintage font-bold tracking-wider shadow-2xl"
              >
                Reserver Bord
              </Button>
            </div> */}
          </motion.div>
        </div>
      </section>

      {/* Simple Separator */}
      <div className="bg-black border-t border-vintage-gold/40"></div>

      {/* About Section */}
      <section className="flex flex-col md:flex-row">
        {/* Left Side - Text with Background */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 bg-gradient-to-b from-black to-gray-900 text-white py-12 md:py-24 px-6 md:px-12 flex items-center"
        >
          <div className="max-w-lg">
            <h2 className="text-5xl font-vintage font-bold mb-8 text-gold">
            Oscar’s – God Mat og Drikke i Løvenstad
            </h2>
            <p className="text-xl text-vintage-cream/90 mb-8 leading-relaxed font-body">
              Siden 2012 har Oscar's vært en del av byen i Løvenstads sentrum. 
              Vi bevarer den tidløse kunsten å servere god mat og drikke, samtidig som vi opprettholder 
              den autentiske atmosfæren fra en bar.
            </p>
            <p className="text-xl text-vintage-cream/90 mb-10 leading-relaxed font-body">
            Gjennom årene har Oscar’s vokst til å bli mer enn bare et sted å spise og drikke
            – det har blitt et samlingspunkt for venner, naboer og reisende. 
            Her kan du nyte smakfulle retter laget med lokale råvarer, 
            et bredt utvalg av god øl, og et personlig vertskap. 
            Velkommen til et sted der gode minner og smakfulle opplevelser skapes, kveld etter kveld.
            </p>
          </div>
        </motion.div>

        {/* Right Side - Video Background */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 relative overflow-hidden"
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="w-full h-full object-cover min-h-screen"
            onError={() => console.log('Video failed to load')}
          >
            <source src="/videos/beer.mp4" type="video/mp4" />
            {/* Fallback for browsers that don't support video */}
            <div className="w-full h-full">
              <Image
                src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Oscar's Bar Interiør Detalj"
                fill
                className="object-cover"
              />
            </div>
          </video>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="flex flex-col md:flex-row">
        {/* Left Side - Atmosphere Video */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 relative overflow-hidden"
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="w-full h-full object-cover min-h-screen"
            onError={() => console.log('Atmosphere video failed to load')}
          >
            <source src="/videos/atmosphere.mp4" type="video/mp4" />
            {/* Fallback for browsers that don't support video */}
            <div className="w-full h-full">
              <Image
                src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Oscar's Bar Detaljer"
                fill
                className="object-cover"
              />
            </div>
          </video>
        </motion.div>

        {/* Right Side - Text with Background */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 bg-vintage-parchment texture-paper py-12 md:py-24 px-6 md:px-12 flex items-center"
        >
          <div className="max-w-lg">
            <h2 className="text-5xl font-vintage font-bold mb-8 text-black">
              Hvorfor Velge Oscar's?
            </h2>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed font-body">
              Opplev den perfekte blandingen av tradisjon, håndverk og moderne sofistikasjon
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-vintage-gold to-vintage-bronze rounded-full flex items-center justify-center shadow-lg border-2 border-vintage-gold/30 flex-shrink-0">
                  <UtensilsCrossed className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="text-xl font-vintage font-bold mb-2 text-black">Smakfull mat og øl</h3>
                  <p className="text-gray-700 font-body leading-relaxed"> Våre retter utfyller ølen perfekt, da vi serverer alt fra saftige burgere til lette småretter. </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-vintage-gold to-vintage-bronze rounded-full flex items-center justify-center shadow-lg border-2 border-vintage-gold/30 flex-shrink-0">
                  <Users className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="text-xl font-vintage font-bold mb-2 text-black">Innbydende Atmosfære</h3>
                  <p className="text-gray-700 font-body leading-relaxed">Vårt personale ønsker deg velkommen med et smil, gir anbefalinger til øl og mat, og sørger for at du føler deg hjemme fra første stund.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-vintage-gold to-vintage-bronze rounded-full flex items-center justify-center shadow-lg border-2 border-vintage-gold/30 flex-shrink-0">
                  <MapPin className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="text-xl font-vintage font-bold mb-2 text-black">Historisk Beliggenhet</h3>
                  <p className="text-gray-700 font-body leading-relaxed">Lokalisert i hjertet av Løvenstad, har vårt lokale vært et landemerke i over 10 år</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-vintage font-bold mb-8 text-gold">
              Besøk Oss I Dag
            </h2>
            <p className="text-2xl text-vintage-cream/90 mb-12 font-body">
              Opplev Oscar's tidløse eleganse
            </p>
            
            <div className="grid md:grid-cols-3 gap-12 mb-12">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gradient-to-br from-vintage-gold to-vintage-bronze rounded-full flex items-center justify-center mb-4 shadow-lg border-2 border-vintage-gold/30">
                  <MapPin className="w-8 h-8 text-black" />
                </div>
                <h3 className="font-vintage font-bold mb-3 text-xl">Beliggenhet</h3>
                <p className="text-vintage-cream/80 font-body">Løvenstadtorget 19, 2006 Løvenstad</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gradient-to-br from-vintage-gold to-vintage-bronze rounded-full flex items-center justify-center mb-4 shadow-lg border-2 border-vintage-gold/30">
                  <Clock className="w-8 h-8 text-black" />
                </div>
                <h3 className="font-vintage font-bold mb-3 text-xl">Åpningstider</h3>
                <p className="text-vintage-cream/80 font-body">Daglig<br />13:00 - 23:00</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gradient-to-br from-vintage-gold to-vintage-bronze rounded-full flex items-center justify-center mb-4 shadow-lg border-2 border-vintage-gold/30">
                  <Phone className="w-8 h-8 text-black" />
                </div>
                <h3 className="font-vintage font-bold mb-3 text-xl">Kontakt</h3>
                <p className="text-vintage-cream/80 font-body">+47 638 30 103</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
} 