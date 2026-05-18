import React from 'react';
import { motion } from 'framer-motion';
import { SectionReveal } from '@/components/SectionReveal';
import { GlowButton } from '@/components/GlowButton';

const ContactPage = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row relative">
      {/* Background Split */}
      <div className="absolute inset-0 flex flex-col md:flex-row -z-10">
        <div className="flex-1 bg-[#EDE8D0]" />
        <div className="flex-1 bg-[#1E1515]" />
      </div>

      {/* Content Container */}
      <div className="w-full max-w-7xl mx-auto px-6 py-32 mt-16 grid grid-cols-1 md:grid-cols-2 gap-16 relative z-10">
        
        {/* Left Side: Info */}
        <div className="text-[#1A1A1A] flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-serif text-5xl md:text-7xl mb-6">Reach Out</h1>
            <p className="font-sans text-lg mb-12 opacity-80 max-w-md">
              Whether you have a question about the book, want to share how a poem impacted you, or are interested in literary events.
            </p>

            <div className="space-y-8 font-sans">
              <div>
                <h3 className="font-display text-sm tracking-widest uppercase text-[#6B000F] mb-2">Author</h3>
                <p className="text-xl">Andrew McClure</p>
              </div>
              <div>
                <h3 className="font-display text-sm tracking-widest uppercase text-[#6B000F] mb-2">Email</h3>
                <a href="mailto:andrewmcclure23@yahoo.com" className="text-xl hover:text-[#6B000F] transition-colors">andrewmcclure23@yahoo.com</a>
              </div>
              <div>
                <h3 className="font-display text-sm tracking-widest uppercase text-[#6B000F] mb-2">Phone</h3>
                <a href="tel:802-522-3245" className="text-xl hover:text-[#6B000F] transition-colors">802-522-3245</a>
              </div>
              <div>
                <h3 className="font-display text-sm tracking-widest uppercase text-[#6B000F] mb-2">Website</h3>
                <a href="http://www.Andrewpoetry.com" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-[#6B000F] transition-colors">www.Andrewpoetry.com</a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Form */}
        <div className="flex flex-col justify-center">
          <SectionReveal delay={0.2} direction="left">
            <div className="bg-black/20 backdrop-blur-xl border border-white/10 p-10 rounded-sm">
              <h2 className="font-serif text-3xl text-[#EDE8D0] mb-8">Send a Message</h2>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label htmlFor="name" className="block font-display text-xs tracking-widest text-[#EDE8D0]/60 uppercase mb-2">Name</label>
                  <input 
                    type="text" 
                    id="name"
                    className="w-full bg-white/5 border border-white/10 px-4 py-3 text-[#EDE8D0] focus:outline-none focus:border-[#C9A227] transition-colors font-sans"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block font-display text-xs tracking-widest text-[#EDE8D0]/60 uppercase mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email"
                    className="w-full bg-white/5 border border-white/10 px-4 py-3 text-[#EDE8D0] focus:outline-none focus:border-[#C9A227] transition-colors font-sans"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block font-display text-xs tracking-widest text-[#EDE8D0]/60 uppercase mb-2">Message</label>
                  <textarea 
                    id="message"
                    rows={5}
                    className="w-full bg-white/5 border border-white/10 px-4 py-3 text-[#EDE8D0] focus:outline-none focus:border-[#C9A227] transition-colors font-sans resize-none"
                  />
                </div>
                <button type="submit" className="w-full bg-[#6B000F] text-[#EDE8D0] py-4 font-display tracking-widest uppercase hover:bg-[#8A0018] transition-colors">
                  Send Message
                </button>
              </form>
            </div>
          </SectionReveal>
        </div>

      </div>
    </div>
  );
};

export default ContactPage;
