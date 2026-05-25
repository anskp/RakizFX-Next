"use client";
import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section
      className="relative min-h-[70vh] md:min-h-screen flex items-center justify-start overflow-hidden"
      style={{
        backgroundImage: 'url(/assets/herohome.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
      }}
    >

      {/* Overlay for mobile readability */}
      <div className="absolute inset-0 bg-white/60 md:bg-transparent pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-start text-left w-full max-w-2xl px-6 md:pl-24 lg:pl-32">

        {/* Headline */}
        <h1
          className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight uppercase leading-[0.95] mb-6 font-montreal text-[#0d1410]"
        >
          <span className="block mb-2">
            {"TRADE".split("").map((letter, i) => (
              <motion.span
                key={i}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: i * 0.05, type: "spring", stiffness: 150, damping: 25 }}
                className="inline-block"
              >
                {letter}
              </motion.span>
            ))}
          </span>
          <span
            className="block whitespace-nowrap text-[#004D34]"
          >
            {"BEYOND LIMITS".split("").map((letter, i) => (
              <motion.span
                key={i}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 + i * 0.04, type: "spring", stiffness: 150, damping: 25 }}
                className="inline-block whitespace-pre"
              >
                {letter}
              </motion.span>
            ))}
          </span>
        </h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="text-sm md:text-base lg:text-lg mb-10 max-w-2xl font-medium tracking-wide text-zinc-600"
        >
          Access 500+ global instruments with raw ECN spreads and ultra-fast execution.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="flex flex-wrap justify-start gap-4"
        >
          <button className="btn-primary rounded-xl px-8 py-3.5 flex items-center gap-2">
            Open Live Account <ArrowRight size={16} />
          </button>
          <button className="rounded-xl px-8 py-3.5 text-sm font-bold uppercase tracking-widest border border-zinc-300 bg-white text-zinc-800 transition hover:bg-zinc-100 hover:-translate-y-0.5">
            View Markets
          </button>
        </motion.div>
      </div>
    </section>
  );
}
