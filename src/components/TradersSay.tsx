"use client";
import React from 'react';
import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  location: string;
  flag: string;
  image: string;
}

export function TradersSay() {
  const testimonials: Testimonial[] = [
    {
      quote: "Spreads on USD/JPY are tight even during the Tokyo open. Execution is fast and I've never had a requote. The ECN Pro account is exactly what I needed for my EA strategies.",
      name: "Kenji Watanabe",
      role: "Algorithmic Trader",
      location: "Tokyo, Japan",
      flag: "🇯🇵",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face"
    },
    {
      quote: "Deposits via local bank transfer are fast and the support team responds quickly in Chinese. Withdrawals arrived within 24 hours — refreshing for this industry.",
      name: "Wei Ling Tan",
      role: "Swing Trader",
      location: "Singapore",
      flag: "🇸🇬",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face"
    },
    {
      quote: "Clear pricing, no maintenance fees, and the MT5 setup was seamless. Prime account gives me everything I need — tight spreads and free VPS for running my bots 24/5.",
      name: "Liam Nguyen",
      role: "EA Developer",
      location: "Sydney, Australia",
      flag: "🇦🇺",
      image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&h=150&fit=crop&crop=face"
    }
  ];

  return (
    <section className="pt-4 pb-24 bg-white border-t border-zinc-100 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">

        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >

            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-[#004D34]">
              Trusted Across <span className="text-[#00ca73] font-normal italic">Traders</span>
            </h2>
          </motion.div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="bg-gradient-to-b from-white to-white hover:from-[#CDEEDB] hover:to-white border border-zinc-200/80 hover:border-[#CDEEDB]/60 shadow-[0_10px_30px_rgba(0,0,0,0.01)] hover:shadow-[0_20px_45px_rgba(0,77,52,0.03)] transition-all duration-500 rounded-[2.5rem] p-8 md:p-10 relative overflow-hidden group flex flex-col justify-between cursor-default"
            >
              {/* Quote Mark Icon */}
              <div className="absolute top-6 right-8 text-[#00ca73]/10 group-hover:text-[#00ca73]/20 transition-colors pointer-events-none">
                <Quote size={56} strokeWidth={1.5} />
              </div>

              <div>
                {/* Quote Text */}
                <p className="text-zinc-600 text-sm md:text-base leading-relaxed mb-10 font-medium italic relative z-10 pt-4">
                  "{t.quote}"
                </p>
              </div>

              {/* Author Profile */}
              <div className="flex items-center gap-4 border-t border-zinc-100 pt-6 mt-auto">
                {/* Sharp, elegant trader profile image */}
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-12 h-12 rounded-2xl object-cover border border-zinc-100 shadow-sm shrink-0"
                />

                <div className="overflow-hidden">
                  <div className="flex items-center gap-2">
                    <span className="font-extrabold text-[#004D34] text-sm uppercase tracking-wide truncate">{t.name}</span>
                    <span className="text-base shrink-0">{t.flag}</span>
                  </div>
                  <div className="text-zinc-500 text-[10px] uppercase font-bold tracking-wider mt-1 truncate">
                    {t.role} <span className="text-zinc-300 px-1">•</span> {t.location}
                  </div>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
