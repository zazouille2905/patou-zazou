/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ShoppingBag, 
  User, 
  ArrowRight, 
  Calendar, 
  Sparkles, 
  Instagram, 
  Facebook, 
  Twitter,
  Menu,
  X,
  ChevronRight,
  Wine
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled ? 'bg-cream/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center text-primary">
        <div className="flex items-center gap-12">
          <a href="/" className="font-serif text-2xl font-bold tracking-tight">
            Patou & Zazou
          </a>
          <div className="hidden lg:flex items-center gap-8 text-[11px] uppercase tracking-[0.2em] font-medium opacity-80">
            <a href="#" className="hover:opacity-100 transition-opacity border-b border-transparent hover:border-primary pb-1">Shop</a>
            <a href="#" className="hover:opacity-100 transition-opacity border-b border-transparent hover:border-primary pb-1">Club</a>
            <a href="#" className="hover:opacity-100 transition-opacity border-b border-transparent hover:border-primary pb-1">About</a>
            <a href="#" className="hover:opacity-100 transition-opacity border-b border-transparent hover:border-primary pb-1">Events</a>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <button className="hidden sm:block bg-primary text-cream px-6 py-2.5 rounded-full text-[10px] uppercase tracking-widest font-bold hover:scale-105 transition-transform active:scale-95">
            Join Club
          </button>
          <div className="flex items-center gap-4">
            <button className="hover:opacity-60 transition-opacity">
              <ShoppingBag size={20} strokeWidth={1.5} />
            </button>
            <button className="hover:opacity-60 transition-opacity">
              <User size={20} strokeWidth={1.5} />
            </button>
            <button 
              className="lg:hidden hover:opacity-60 transition-opacity"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu size={24} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-cream z-[60] flex flex-col p-8"
          >
            <div className="flex justify-between items-center mb-16">
              <span className="font-serif text-2xl font-bold">Patou & Zazou</span>
              <button onClick={() => setMobileMenuOpen(false)}>
                <X size={32} strokeWidth={1} />
              </button>
            </div>
            <div className="flex flex-col gap-8 text-4xl font-serif">
              <a href="#" onClick={() => setMobileMenuOpen(false)}>Shop</a>
              <a href="#" onClick={() => setMobileMenuOpen(false)}>Club</a>
              <a href="#" onClick={() => setMobileMenuOpen(false)}>About</a>
              <a href="#" onClick={() => setMobileMenuOpen(false)}>Events</a>
            </div>
            <div className="mt-auto">
              <button className="w-full bg-primary text-cream py-5 rounded-full text-xs uppercase tracking-widest font-bold">
                Join Club
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default function App() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }
    }
  };

  return (
    <div className="min-h-screen selection:bg-secondary/20">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0 scale-105">
          <img 
            src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=2000" 
            alt="Vintage Wine Cellar"
            className="w-full h-full object-cover brightness-[0.7]"
          />
          <div className="absolute inset-0 bg-primary/20 backdrop-brightness-75" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full text-cream">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="max-w-3xl"
          >
            <motion.h1 variants={itemVariants} className="font-serif text-5xl md:text-8xl leading-[1.05] tracking-tight mb-8">
              Vous êtes enfin arrivés au bon endroit.
            </motion.h1>
            <motion.p variants={itemVariants} className="text-lg md:text-xl font-light text-cream/80 mb-12 max-w-xl">
              Du bon vin et des produits vrais: le secret du bonheur est ici. Bienvenue chez Patou & Zazou.
            </motion.p>
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gold text-primary px-10 py-5 rounded-lg text-xs uppercase tracking-widest font-bold hover:bg-gold/90 transition-colors">
                Reserve a Table
              </button>
              <button className="border border-cream/30 backdrop-blur-sm px-10 py-5 rounded-lg text-xs uppercase tracking-widest font-bold hover:bg-cream/10 transition-colors">
                Discover Our Menu
              </button>
            </motion.div>
          </motion.div>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-4 text-cream/40 text-[10px] uppercase tracking-[0.3em]">
          <div className="w-12 h-px bg-cream/20" />
          <span>The Tipsy Staffy</span>
          <div className="w-12 h-px bg-cream/20" />
        </div>
      </section>

      {/* editorial Section */}
      <section className="py-32 md:py-64 bg-cream overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="order-2 lg:order-1"
            >
              <h2 className="font-serif text-4xl md:text-6xl text-primary leading-tight mb-8">
                Laissez le monde derrière vous.
              </h2>
              <p className="text-lg text-primary/60 font-light leading-relaxed mb-10 max-w-lg">
                An invitation to discover the bar, where time slows down to the rhythm of the pour. Our cellar is a sanctuary for those who appreciate the quiet conversation between a vintage and its glass. Step into a world where every bottle tells a story of soil, sweat, and soul.
              </p>
              <a href="#" className="inline-flex items-center gap-3 text-secondary text-[11px] uppercase tracking-widest font-bold group">
                Experience Patou & Zazou
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                <div className="absolute bottom-0 left-0 w-full h-px bg-secondary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </a>
            </motion.div>

            <div className="relative order-1 lg:order-2">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="aspect-[4/5] overflow-hidden rounded-sm shadow-2xl relative z-10"
              >
                <img 
                  src="https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?auto=format&fit=crop&q=80&w=1000" 
                  alt="Patou & Zazou Wine Shop"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 }}
                className="absolute -bottom-10 -left-10 bg-cream-dark p-10 hidden md:block z-20 border border-primary/5"
              >
                <span className="font-serif text-4xl block text-secondary mb-1">1854</span>
                <span className="text-[10px] uppercase tracking-widest font-bold opacity-40">Legacy Cellars</span>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Bento Spaces Grid */}
      <section className="py-32 bg-cream-dark">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center mb-24">
          <span className="text-[11px] uppercase tracking-[0.3em] font-bold text-secondary mb-6 block">The Spaces</span>
          <h2 className="font-serif text-4xl md:text-6xl text-primary">Where Memories Are Decanted</h2>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-8">
          {/* Card 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group bg-cream p-4 rounded-lg border border-primary/5 hover:shadow-xl transition-all duration-500"
          >
            <div className="aspect-video overflow-hidden rounded-md mb-8">
              <img 
                src="https://images.unsplash.com/photo-1543412849-c4ade4477d47?auto=format&fit=crop&q=80&w=1000" 
                alt="Le Comptoir des Amis"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="p-4">
              <h3 className="font-serif text-3xl mb-4">Le Comptoir des Amis</h3>
              <p className="text-primary/60 font-light mb-8">
                Our vibrant communal bar where the pulse of the evening begins. Perfect for spontaneous tastings and shared laughter among friends old and new.
              </p>
              <button className="bg-primary text-cream w-full py-4 rounded text-xs uppercase tracking-widest font-bold hover:shadow-lg transition-all active:scale-95">
                Book the Counter
              </button>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="group bg-cream p-4 rounded-lg border border-primary/5 hover:shadow-xl transition-all duration-500"
          >
            <div className="aspect-video overflow-hidden rounded-md mb-8">
              <img 
                src="https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&q=80&w=1000" 
                alt="Le Salon Intime"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
              />
            </div>
            <div className="p-4">
              <h3 className="font-serif text-3xl mb-4">Le Salon Intime</h3>
              <p className="text-primary/60 font-light mb-8">
                A secluded sanctuary designed for deep conversation and the focused appreciation of rare vintages. Low lighting, soft textures, and absolute privacy.
              </p>
              <button className="border border-primary text-primary w-full py-4 rounded text-xs uppercase tracking-widest font-bold hover:bg-primary hover:text-cream transition-all active:scale-95">
                Reserve the Salon
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Wine Bottles Display */}
      <section className="py-32 bg-cream">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center mb-24">
          <span className="text-[11px] uppercase tracking-[0.3em] font-bold text-secondary mb-6 block">Our Cellar</span>
          <h2 className="font-serif text-4xl md:text-6xl text-primary">Curated Vintages</h2>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {[
            { name: "La Réserve du Patou", year: "2018", type: "Red", price: "€45", img: "https://images.unsplash.com/photo-1584916201218-f4242ceb4809?auto=format&fit=crop&q=80&w=600" },
            { name: "Blanc Héritage", year: "2021", type: "White", price: "€38", img: "https://images.unsplash.com/photo-1553361371-9bb22026829b?auto=format&fit=crop&q=80&w=600" },
            { name: "Sélection Zazou", year: "2019", type: "Rosé", price: "€32", img: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=600" },
            { name: "Cuvée Prestige", year: "2015", type: "Grand Cru", price: "€120", img: "https://images.unsplash.com/photo-1559113513-d5e09c114952?auto=format&fit=crop&q=80&w=600" }
          ].map((wine, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[2/3] overflow-hidden bg-cream-dark rounded mb-6 relative">
                <img 
                  src={wine.img} 
                  alt={wine.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 group-hover:brightness-90"
                />
                <div className="absolute top-4 right-4 bg-primary text-cream w-10 h-10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ShoppingBag size={14} />
                </div>
              </div>
              <div className="text-center">
                <span className="text-[10px] uppercase tracking-widest text-secondary font-bold mb-1 block">{wine.type} • {wine.year}</span>
                <h3 className="font-serif text-xl mb-1">{wine.name}</h3>
                <p className="text-primary/40 text-sm font-medium">{wine.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Wine Club Membership */}
      <section className="py-32 bg-primary text-cream">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="mb-12 inline-block p-4 border border-cream/10 rounded-full bg-cream/5"
          >
            <Wine size={48} strokeWidth={1} className="text-gold" />
          </motion.div>
          
          <h2 className="font-serif text-4xl md:text-6xl mb-8 leading-tight">The Patou & Zazou Club</h2>
          <p className="text-lg text-cream/70 font-light mb-16 leading-relaxed">
            Join our inner circle for exclusive access to rare allocations, member-only tasting events, and the story behind every bottle we select. The club is more than a membership; it's a shared journey through the world's most exceptional vineyards.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            <div className="flex items-start gap-5 p-6 rounded bg-cream/5 border border-cream/10 text-left">
              <Sparkles size={24} className="text-secondary shrink-0" />
              <div>
                <span className="block font-bold text-xs uppercase tracking-widest mb-1 text-gold">Priority Access</span>
                <p className="text-sm text-cream/60">Early alerts on rare vintages and hard-to-find allocations.</p>
              </div>
            </div>
            <div className="flex items-start gap-5 p-6 rounded bg-cream/5 border border-cream/10 text-left">
              <Calendar size={24} className="text-secondary shrink-0" />
              <div>
                <span className="block font-bold text-xs uppercase tracking-widest mb-1 text-gold">Private Events</span>
                <p className="text-sm text-cream/60">Invitations to exclusive tastings and winemaker dinners.</p>
              </div>
            </div>
          </div>

          <button className="bg-gold text-primary px-16 py-6 rounded-full text-xs uppercase tracking-[0.2em] font-bold hover:scale-105 transition-transform active:scale-95 shadow-2xl">
            Apply for Membership
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-cream-dark pt-32 pb-12">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
            <div className="md:col-span-1">
              <h2 className="font-serif text-3xl mb-8">Patou & Zazou</h2>
              <p className="text-primary/60 font-light leading-relaxed">
                Experience the true secret of happiness through exceptional wines and authentic products.
              </p>
              <div className="flex gap-4 mt-8 opacity-40">
                <Instagram size={20} className="hover:opacity-100 cursor-pointer" />
                <Facebook size={20} className="hover:opacity-100 cursor-pointer" />
                <Twitter size={20} className="hover:opacity-100 cursor-pointer" />
              </div>
            </div>
            
            <div>
              <h4 className="text-[10px] uppercase tracking-widest font-bold text-secondary mb-10">Explore</h4>
              <ul className="flex flex-col gap-6 text-[13px] font-medium opacity-70">
                <li><a href="#" className="hover:opacity-100 transition-opacity">Shop Catalgue</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">Member Club</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">The Team</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">Gift Cards</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-[10px] uppercase tracking-widest font-bold text-secondary mb-10">Support</h4>
              <ul className="flex flex-col gap-6 text-[13px] font-medium opacity-70">
                <li><a href="#" className="hover:opacity-100 transition-opacity">Shipping & Service</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">Privacy Policy</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">Wholesale</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">Contact Us</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-[10px] uppercase tracking-widest font-bold text-secondary mb-10">Newsletter</h4>
              <p className="text-[13px] opacity-70 mb-8">The latest vintages and stories, directly to your inbox.</p>
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Email Address"
                  className="w-full bg-transparent border-b border-primary/20 pb-4 text-sm focus:outline-none focus:border-primary transition-colors placeholder:opacity-30"
                />
                <button className="absolute right-0 bottom-4 hover:translate-x-1 transition-transform">
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-primary/5 text-[10px] uppercase tracking-widest opacity-40 gap-4">
            <span>© 2024 Patou & Zazou. All Rights Reserved.</span>
            <div className="flex gap-8">
              <a href="#">Cookies</a>
              <a href="#">Impressum</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
