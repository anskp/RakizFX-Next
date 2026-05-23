"use client";
import React from 'react';
import { motion } from 'motion/react';

export function DeviceShowcase() {
  return (
    <section className="py-40 bg-zinc-950 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#020802]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 blur-[150px] rounded-full" />
      </div>

      <div className="max-w-[1400px] mx-auto px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="text-[10px] uppercase font-black tracking-[0.6em] text-primary mb-6">Global Connectivity</div>
            <h2 className="text-5xl md:text-7xl text-white leading-tight uppercase mb-8">
              Power Up Your Trading Experience with the <span className="text-nn">TradingView App</span>
            </h2>
            <p className="text-zinc-400 text-xl leading-relaxed mb-12 max-w-xl">
              Our mobile terminal is architected for high-fidelity execution. Manage your portfolio, execute complex orders, and analyze markets in real-time from anywhere in the world.
            </p>
            
            <div className="flex gap-4">
              <div className="bg-white/5 border border-white/10 p-6 rounded-xl flex items-center gap-4 group hover:bg-white/10 transition-all cursor-pointer">
                <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center text-primary">
                  <img src="https://www.vectorlogo.zone/logos/apple/apple-icon.svg" className="w-6 h-6" alt="Apple" />
                </div>
                <div>
                  <div className="text-[9px] text-zinc-500 uppercase font-black mb-1">Download on</div>
                  <div className="text-sm text-white font-black uppercase">App Store</div>
                </div>
              </div>
              <div className="bg-white/5 border border-white/10 p-6 rounded-xl flex items-center gap-4 group hover:bg-white/10 transition-all cursor-pointer">
                <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center text-primary">
                  <img src="https://www.vectorlogo.zone/logos/google_play/google_play-icon.svg" className="w-6 h-6" alt="Play Store" />
                </div>
                <div>
                  <div className="text-[9px] text-zinc-500 uppercase font-black mb-1">Get it on</div>
                  <div className="text-sm text-white font-black uppercase">Google Play</div>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative z-10 w-full max-w-[450px]">
              <div className="absolute inset-0 bg-nn/20 blur-[120px] rounded-full scale-75 -z-1" />
              <img 
                src="/assets/phone_trade.png" 
                alt="TradingView App" 
                className="w-full h-auto drop-shadow-[0_50px_100px_rgba(0,0,0,0.5)]" 
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
