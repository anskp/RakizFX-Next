"use client";
import React from 'react';
import { motion } from 'motion/react';
import { Users, Wallet, ArrowRight, UserPlus } from 'lucide-react';

const traders = [
  {
    name: 'Alexander K.',
    strategy: 'Forex · Swing · 14mo',
    profit: '+24.3%',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80'
  },
  {
    name: 'Sarah M.',
    strategy: 'Gold · Scalp · 9mo',
    profit: '+31.8%',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&q=80'
  },
  {
    name: 'Wei L.',
    strategy: 'Indices · Intraday · 20mo',
    profit: '+16.5%',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&q=80'
  },
  {
    name: 'Priya R.',
    strategy: 'Crypto · Position · 6mo',
    profit: '+42.1%',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&q=80'
  }
];

export function CopyTrading() {
  return (
    <section id="copy-trading" className="py-12 bg-white relative overflow-hidden">
      <div className="container-standard relative z-10">

        {/* First: Centered Heading */}
        <div className="text-center mb-4 relative z-20">
          <h2 className="text-h2 mb-4 max-w-4xl mx-auto">
            Top Traders. <br />
            <span className="text-nn">Copy Their Profits.</span>
          </h2>
          <p className="text-body text-zinc-500 mx-auto">
            Choose from verified strategy managers, set your risk, and let their trades work for you. Perfect for both beginners and experienced managers looking for PAMM/MAM solutions.
          </p>
        </div>

        {/* Second: Big Centered Image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative max-w-6xl mx-auto -mt-10 -mb-4 flex justify-center lg:translate-x-12 md:translate-x-6 z-0 pointer-events-none"
        >
          <div className="relative z-10 w-full flex justify-center">
            <img
              src="/assets/Frame 2.png"
              alt="Copy Trading Terminal"
              className="max-w-5xl w-full h-auto object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.15)]"
            />
          </div>
        </motion.div>

        {/* Third: Trader Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto px-4 md:px-0 relative z-10">
          {traders.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-b from-white to-white hover:from-[#CDEEDB] hover:to-white border border-zinc-200/80 hover:border-[#CDEEDB]/60 shadow-[0_10px_30px_rgba(0,0,0,0.01)] hover:shadow-[0_20px_45px_rgba(0,77,52,0.03)] transition-all duration-500 rounded-[2rem] p-4 md:p-6 group cursor-pointer"
            >
              <div className="flex flex-col items-center text-center">
                <img src={t.image} alt={t.name} className="w-12 h-12 md:w-16 md:h-16 rounded-2xl object-cover mb-3 border border-zinc-100 shadow-sm" />
                <h4 className="text-[#004D34] text-xs md:text-sm font-extrabold tracking-tight mb-0.5">{t.name}</h4>
                <p className="text-[8px] md:text-[10px] text-zinc-500 font-bold mb-2 md:mb-3">{t.strategy}</p>

                <div className="w-full h-px bg-zinc-100 mb-2 md:mb-3" />

                <div className="text-[#00ca73] font-mono font-black text-base md:text-2xl mb-0.5">{t.profit}</div>
                <div className="text-[7px] md:text-[8px] text-zinc-400 uppercase font-black tracking-widest mb-3 md:mb-4">30d Return</div>

                <button className="w-full bg-[#004D34] hover:bg-[#00ca73] text-white hover:text-black font-extrabold py-3 px-3 rounded-xl text-[8px] md:text-[10px] uppercase tracking-wider transition-all duration-300 shadow-[0_5px_15px_rgba(0,77,52,0.05)] cursor-pointer">
                  Copy
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
