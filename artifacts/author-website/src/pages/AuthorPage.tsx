import React from 'react';
import { motion } from 'framer-motion';
import { SectionReveal } from '@/components/SectionReveal';

const AuthorPage = () => {
  return (
    <div className="bg-[#EDE8D0] min-h-screen text-[#1A1A1A]">
      {/* Banner */}
      <section className="bg-[#1E1515] text-[#EDE8D0] pt-40 pb-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(107,0,15,0.2)_0,transparent_100%)] pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="font-serif text-5xl md:text-7xl mb-8">Andrew McClure</h1>
            <p className="font-sans text-xl leading-relaxed opacity-80">
              "Raw. Honest. Unfiltered. Poetry from the heart."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Bio Content */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <SectionReveal className="mb-16">
              <h2 className="font-serif text-4xl text-[#6B000F] mb-6">The Man Behind The Words</h2>
              <div className="font-sans text-lg leading-loose space-y-6">
                <p>
                  Andrew McClure is a husband, father of twins, and Boston Celtics fan who spent a decade holding these poems close before sharing them with the world.
                </p>
                <p>
                  His passions are fishing, bowling, and family — but writing became a calling he could no longer ignore. For ten years, through the quiet moments of life and the chaotic storms of emotion, he chronicled the duality of the human experience.
                </p>
                <p>
                  <em>Love & Hate</em> represents a lifetime of observation, feeling, and brutal honesty. It is the culmination of a decade of silence, finally broken.
                </p>
              </div>
            </SectionReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-24">
              <SectionReveal direction="up" delay={0.1}>
                <div className="border border-[#1A1A1A]/10 p-8 h-full hover:bg-white/50 transition-colors">
                  <h3 className="font-display tracking-widest text-[#C9A227] uppercase mb-4 text-sm">Passions</h3>
                  <ul className="font-sans space-y-3 text-[#1A1A1A]/80">
                    <li>Family & Fatherhood</li>
                    <li>Fishing the quiet waters</li>
                    <li>Bowling leagues</li>
                    <li>Boston Celtics</li>
                  </ul>
                </div>
              </SectionReveal>
              <SectionReveal direction="up" delay={0.2}>
                <div className="border border-[#1A1A1A]/10 p-8 h-full hover:bg-white/50 transition-colors">
                  <h3 className="font-display tracking-widest text-[#6B000F] uppercase mb-4 text-sm">Publishing</h3>
                  <p className="font-sans text-[#1A1A1A]/80 mb-4">
                    Proudly published by Collingwood Press, bringing raw and unfiltered voices to the forefront of modern poetry.
                  </p>
                  <p className="font-serif italic text-lg">Decade in the making.</p>
                </div>
              </SectionReveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AuthorPage;
