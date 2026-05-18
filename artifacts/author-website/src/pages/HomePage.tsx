import React from 'react';
import { motion } from 'framer-motion';
import { FloatingParticles } from '@/components/FloatingParticles';
import { GlowButton } from '@/components/GlowButton';
import { SectionReveal } from '@/components/SectionReveal';
import bookCover from '@assets/bok2_1779127987407.jpg';

const HomePage = () => {
  return (
    <div className="bg-[#1E1515] min-h-screen text-background">
      {/* HERO SECTION */}
      <section className="relative min-h-[100dvh] flex items-center overflow-hidden">
        <FloatingParticles />
        
        {/* Split Backgrounds */}
        <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-2">
          <div className="bg-background opacity-5" />
          <div className="bg-primary opacity-10" />
        </div>
        
        <div className="container relative z-10 mx-auto px-6 pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left">
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="font-serif text-5xl md:text-7xl lg:text-8xl leading-none text-[#EDE8D0] mb-6"
              >
                Where<br/><span className="text-[#C9A227] italic">Love</span><br/>Meets<br/><span className="text-primary font-bold">Hate</span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="font-display tracking-widest text-lg md:text-xl text-[#EDE8D0]/80 mb-10 uppercase"
              >
                Two Emotions. One Story.
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 w-full"
              >
                <GlowButton href="/book" variant="love" className="w-full sm:w-auto">Explore The Book</GlowButton>
              </motion.div>
            </div>

            {/* Center Book */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, delay: 0.4 }}
              className="lg:col-span-4 flex justify-center relative"
            >
              <div className="relative w-64 md:w-80 lg:w-full max-w-[400px] aspect-[2/3] shadow-[0_20px_50px_rgba(0,0,0,0.5)] group">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                <img 
                  src={bookCover} 
                  alt="Love & Hate by Andrew McClure" 
                  className="w-full h-full object-cover relative z-10"
                />
                <div className="absolute -inset-4 bg-gradient-to-b from-[#C9A227]/20 to-primary/30 blur-2xl -z-10 opacity-50 group-hover:opacity-80 transition-opacity duration-700" />
              </div>
            </motion.div>

            {/* Right Content */}
            <div className="lg:col-span-4 flex flex-col items-center lg:items-end text-center lg:text-right">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="space-y-6 max-w-sm"
              >
                <p className="font-sans text-xl leading-relaxed text-[#EDE8D0]/80">
                  Raw. Honest. Unfiltered. Poetry from the heart that reaches into your chest and refuses to let go.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-end">
                  <GlowButton href="/reviews" variant="hate" className="w-full sm:w-auto">Read Reviews</GlowButton>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* BOOK SHOWCASE - LIGHT SIDE */}
      <section className="py-32 bg-[#EDE8D0] text-[#1A1A1A] relative overflow-hidden">
        <div className="container mx-auto px-6">
          <SectionReveal className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="font-serif text-5xl md:text-7xl mb-8 leading-tight">The Light We <span className="italic text-[#C9A227]">Hold</span></h2>
              <p className="font-sans text-lg md:text-xl leading-relaxed mb-8 opacity-80">
                Discover the tender moments, the fragile beginnings, and the warm embrace of love. This collection explores the vulnerability of opening your heart after it has been closed for so long.
              </p>
              <GlowButton href="/book" className="bg-[#1A1A1A] text-[#EDE8D0] hover:bg-black border-transparent">
                Read the Synopsis
              </GlowButton>
            </div>
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[500px]">
                <img src={bookCover} alt="Book cover" className="w-full h-auto shadow-2xl" />
                <div className="absolute inset-0 bg-white/10 mix-blend-overlay" />
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* BOOK SHOWCASE - DARK SIDE */}
      <section className="py-32 bg-[#6B000F] text-[#EDE8D0] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(0,0,0,0.6)_0,transparent_100%)] pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <SectionReveal className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="flex justify-center lg:justify-start">
              <div className="relative w-full max-w-[500px]">
                <img src={bookCover} alt="Book cover" className="w-full h-auto shadow-[0_20px_60px_rgba(0,0,0,0.8)]" />
                <div className="absolute inset-0 bg-black/20 mix-blend-multiply" />
              </div>
            </div>
            <div>
              <h2 className="font-serif text-5xl md:text-7xl mb-8 leading-tight">The Dark We <span className="font-bold text-[#1E1515]">Fight</span></h2>
              <p className="font-sans text-lg md:text-xl leading-relaxed mb-8 opacity-90">
                Confront the burning embers of resentment, the sharp edges of betrayal, and the heavy weight of hate. These poems do not shy away from the ugly truths we hide in the shadows.
              </p>
              <GlowButton href="/book" variant="hate" className="border-[#EDE8D0]/30 hover:bg-[#1E1515]">
                Explore The Duality
              </GlowButton>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* REVIEWS TEASER */}
      <section className="py-32 bg-[#1E1515] relative overflow-hidden">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <SectionReveal>
            <h2 className="font-serif text-4xl md:text-5xl text-[#EDE8D0] mb-12">"This book shattered me and put me back together in the same breath."</h2>
            <GlowButton href="/reviews" variant="love">See More Reviews</GlowButton>
          </SectionReveal>
        </div>
      </section>

    </div>
  );
};

export default HomePage;
