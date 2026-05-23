"use client";
import React from 'react';
import { motion } from 'motion/react';
import { Monitor, Smartphone, Globe, Cpu, Download, ArrowRight } from 'lucide-react';

export function PowerfulPlatforms() {
  return (
    <section id="platforms" className="py-40 bg-zinc-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-nn/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
      
      <div className="max-w-[1400px] mx-auto px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="flex items-center gap-4 mb-8">
              <img src="/assets/mt5_icon.jpg" alt="MT5 Icon" className="w-12 h-12 rounded-xl object-cover shadow-lg border border-white/10" />
              <div className="text-nn font-black text-[10px] uppercase tracking-[0.4em]">Execution Infrastructure</div>
            </div>
            <h2 className="text-5xl md:text-7xl text-white leading-[0.85] uppercase mb-10">
              Powerful Platforms. <br/>
              Built for Performance.
            </h2>
            <p className="text-zinc-400 text-xl font-medium max-w-xl mb-12">
              MetaTrader 5 — the industry standard, powered by RakizFx. Capture every opportunity with institutional-grade tools.
            </p>
            <button className="bg-white text-black px-12 py-6 rounded-xl font-black text-sm uppercase tracking-widest flex items-center gap-4 hover:bg-nn hover:text-white transition-all shadow-[0_20px_50px_rgba(255,255,255,0.05)]">
              Download MT5 <Download size={20} />
            </button>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 20 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-nn/20 blur-[100px] rounded-full opacity-30" />
            <img 
              src="/assets/MT501.png" 
              alt="RakizFx MT5 Terminal" 
              className="relative z-10 w-full h-auto drop-shadow-[0_50px_100px_rgba(0,0,0,0.5)] transition-transform duration-700 hover:scale-[1.02]" 
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
