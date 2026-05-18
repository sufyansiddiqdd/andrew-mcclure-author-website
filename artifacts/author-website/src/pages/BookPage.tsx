import React from 'react';
import { motion } from 'framer-motion';
import { SectionReveal } from '@/components/SectionReveal';
import { FloatingParticles } from '@/components/FloatingParticles';
import bookFull from '@assets/bok_1779127987406.jpg';

const BookPage = () => {
  return (
    <div className="bg-[#1E1515] min-h-screen text-[#EDE8D0]">
      {/* Banner */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <FloatingParticles />
        <div className="absolute inset-0 bg-gradient-to-b from-[#6B000F]/20 to-transparent pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl mb-6"
          >
            About The Book
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display tracking-widest text-xl text-[#C9A227] uppercase"
          >
            Love & Hate
          </motion.p>
        </div>
      </section>

      {/* Full Spread Image */}
      <section className="py-12 bg-[#0A0707]">
        <div className="container mx-auto px-6">
          <SectionReveal>
            <div className="w-full max-w-6xl mx-auto shadow-2xl overflow-hidden rounded-sm relative group">
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
              <img 
                src={bookFull} 
                alt="Love & Hate Full Book Spread" 
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-1000"
              />
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Synopsis */}
      <section className="py-24 bg-[#EDE8D0] text-[#1A1A1A]">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <SectionReveal>
            <h2 className="font-serif text-4xl mb-8">The Story Within</h2>
            <div className="font-sans text-lg md:text-xl leading-relaxed space-y-6 opacity-90">
              <p>
                In <em>Love & Hate</em>, Andrew McClure strips away the polite fictions of romance to expose the raw, beating heart underneath. This collection of poetry is not just about falling in love; it is about the brutal reality of holding onto it, losing it, and sometimes, learning to despise what you once cherished.
              </p>
              <p>
                Held close for a decade before finally being shared with the world, these poems map the chaotic terrain between our two most powerful emotions. One side of the book offers warm amber candlelight—poems of devotion, delicate beginnings, and profound connection. The other side smolders with dark red embers—verses forged in betrayal, heartbreak, and the furious heat of resentment.
              </p>
              <p className="font-serif italic text-2xl pt-6 text-[#6B000F]">
                "Every page is a war. Every line is a surrender."
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Split Quotes */}
      <section className="grid grid-cols-1 md:grid-cols-2 min-h-[70vh]">
        <div className="bg-[#EDE8D0] text-[#1A1A1A] flex flex-col justify-center px-12 py-24 relative overflow-hidden">
          <div className="absolute -left-10 -top-10 opacity-10 text-[20rem] font-serif leading-none">"</div>
          <SectionReveal direction="left" className="relative z-10 max-w-md mx-auto">
            <h3 className="font-display tracking-widest text-sm text-[#C9A227] uppercase mb-8">The Love</h3>
            <p className="font-serif text-3xl md:text-4xl leading-tight mb-8">
              "I built a cathedral out of the quiet moments you gave me."
            </p>
            <div className="h-px w-20 bg-[#1A1A1A]/20" />
          </SectionReveal>
        </div>
        <div className="bg-[#6B000F] text-[#EDE8D0] flex flex-col justify-center px-12 py-24 relative overflow-hidden">
          <div className="absolute -right-10 -top-10 opacity-10 text-[20rem] font-serif leading-none">"</div>
          <SectionReveal direction="right" className="relative z-10 max-w-md mx-auto">
            <h3 className="font-display tracking-widest text-sm text-[#EDE8D0]/50 uppercase mb-8">The Hate</h3>
            <p className="font-serif text-3xl md:text-4xl leading-tight mb-8">
              "You left ashes where I once planted seeds, and wondered why I stopped growing."
            </p>
            <div className="h-px w-20 bg-[#EDE8D0]/20" />
          </SectionReveal>
        </div>
      </section>
    </div>
  );
};

export default BookPage;
