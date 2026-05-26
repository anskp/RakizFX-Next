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
    <section id="copy-trading" className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="container-standard relative z-10">

        {/* Top: Split Grid (Left Text, Right Very Big Image) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16 md:mb-20">

          {/* Left: Heading & Description */}
          <div className="lg:col-span-5 flex flex-col justify-center text-left relative z-20">
            <h2 className="text-h2 mb-6 leading-tight">
              Top Traders. <br />
              <span className="font-semibold">Copy Their Profits.</span>
            </h2>
            <p className="text-zinc-600 text-sm md:text-base leading-relaxed max-w-xl">
              Choose from verified strategy managers, set your risk, and let their trades work for you. Perfect for both beginners and experienced managers looking for PAMM/MAM solutions.
            </p>

            {/* Premium Copy Trading Benefits */}
            <div className="mt-8 space-y-4 max-w-md">
              {[
                {
                  title: "Real-time Trade Replication",
                  desc: "Copy strategy providers with ultra-low latency and zero margin slippage."
                },
                {
                  title: "Advanced Risk Mitigation",
                  desc: "Protect your capital with custom maximum drawdowns and absolute stop-loss controls."
                }

              ].map((feat, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00ca73] mt-2 shrink-0 animate-pulse" />
                  <div>
                    <h4 className="text-zinc-900 font-extrabold text-xs md:text-sm leading-tight">{feat.title}</h4>
                    <p className="text-zinc-500 text-[10px] md:text-xs mt-1 leading-relaxed">{feat.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Very Big Image */}
          <div className="lg:col-span-7 w-full flex justify-center items-center relative z-10">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full"
            >
              <img
                src="/assets/Frame 2.png"
                alt="Copy Trading Terminal"
                className="w-full max-w-xl md:max-w-2xl lg:max-w-none h-auto object-contain drop-shadow-[0_20px_45px_rgba(0,0,0,0.12)] md:drop-shadow-[0_30px_70px_rgba(0,0,0,0.15)] mx-auto lg:translate-x-[8%]"
              />
            </motion.div>
          </div>
        </div>

        {/* Bottom: Trader Cards as a Line Underneath (Compact & Short) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 max-w-4xl mx-auto relative z-10">
          {traders.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
              className="bg-gradient-to-b from-white to-white hover:from-[#CDEEDB] hover:to-white border border-zinc-200/80 hover:border-[#CDEEDB]/60 shadow-[0_10px_20px_rgba(0,0,0,0.01)] hover:shadow-[0_15px_35px_rgba(0,77,52,0.03)] transition-all duration-500 rounded-2xl p-3 md:p-4 group cursor-pointer"
            >
              <div className="flex flex-col items-center text-center">
                <img src={t.image} alt={t.name} className="w-9 h-9 md:w-11 md:h-11 rounded-xl object-cover mb-2 border border-zinc-100 shadow-sm shrink-0" />
                <h4 className="text-[#004D34] text-[10px] md:text-xs font-black tracking-tight mb-0.5">{t.name}</h4>
                <p className="text-[7px] md:text-[8px] text-zinc-500 font-bold mb-1 md:mb-1.5">{t.strategy}</p>

                <div className="w-full h-px bg-zinc-100 mb-1 md:mb-1.5" />

                <div className="text-[#00ca73] font-mono font-black text-xs md:text-lg mb-0.5">{t.profit}</div>
                <div className="text-[6px] md:text-[7px] text-zinc-400 uppercase font-black tracking-widest mb-1.5 md:mb-2">30d Return</div>

                <button className="w-full bg-[#004D34] hover:bg-[#00ca73] text-white hover:text-black font-extrabold py-1.5 px-3 rounded-md text-[7px] md:text-[8px] uppercase tracking-wider transition-all duration-300 shadow-[0_5px_15px_rgba(0,77,52,0.05)] cursor-pointer">
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
