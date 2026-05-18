import React from 'react';
import { motion } from 'framer-motion';
import { SectionReveal } from '@/components/SectionReveal';

const reviews = [
  {
    quote: "Raw, unfiltered poetry that reaches into your chest and refuses to let go.",
    author: "Sarah M.",
    emotion: "love"
  },
  {
    quote: "Every poem feels like a conversation I've needed to have for years.",
    author: "James K.",
    emotion: "hate"
  },
  {
    quote: "McClure writes with the kind of honesty that makes you uncomfortable and grateful at once.",
    author: "Rachel T.",
    emotion: "love"
  },
  {
    quote: "I read it in one sitting. My hands were shaking by the end.",
    author: "David L.",
    emotion: "hate"
  },
  {
    quote: "This book shattered me and put me back together in the same breath.",
    author: "Emily R.",
    emotion: "love"
  },
  {
    quote: "The duality in every poem is breathtaking — you feel both emotions simultaneously.",
    author: "Michael B.",
    emotion: "hate"
  }
];

const ReviewsPage = () => {
  return (
    <div className="bg-gradient-to-b from-[#1E1515] to-[#0A0707] min-h-screen text-[#EDE8D0] pt-40 pb-32">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl mb-6 text-[#EDE8D0]">Words of<br/>Readers</h1>
          <div className="w-24 h-1 bg-[#6B000F] mx-auto mt-8" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <SectionReveal key={idx} delay={idx * 0.1}>
              <div 
                className={`relative p-8 h-full rounded-sm border ${
                  review.emotion === 'love' 
                    ? 'border-[#C9A227]/20 bg-[#EDE8D0]/5 hover:bg-[#EDE8D0]/10' 
                    : 'border-[#6B000F]/30 bg-[#6B000F]/10 hover:bg-[#6B000F]/20'
                } backdrop-blur-md transition-colors duration-500 flex flex-col justify-between group`}
              >
                <div className="absolute top-4 left-4 text-4xl font-serif opacity-20">"</div>
                <p className="font-sans text-lg leading-relaxed relative z-10 mb-8 pt-4">
                  {review.quote}
                </p>
                <div className="flex items-center gap-4 relative z-10">
                  <div className={`h-px w-8 ${review.emotion === 'love' ? 'bg-[#C9A227]' : 'bg-[#6B000F]'}`} />
                  <span className="font-display tracking-wider uppercase text-sm">{review.author}</span>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>

        <SectionReveal delay={0.4} className="mt-32 text-center">
          <div className="max-w-3xl mx-auto p-12 border border-white/10 bg-black/40 backdrop-blur-sm relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#6B000F]/20 to-transparent pointer-events-none" />
            <h2 className="font-serif text-3xl md:text-4xl mb-6 relative z-10 text-[#EDE8D0]">Have you read Love & Hate?</h2>
            <p className="font-sans text-[#EDE8D0]/70 mb-8 relative z-10">Leave a review on Amazon and share your experience with the world.</p>
            <a href="#" className="inline-block border border-[#C9A227] text-[#C9A227] px-8 py-3 font-display tracking-widest uppercase hover:bg-[#C9A227] hover:text-[#1E1515] transition-colors relative z-10">
              Review on Amazon
            </a>
          </div>
        </SectionReveal>
      </div>
    </div>
  );
};

export default ReviewsPage;
