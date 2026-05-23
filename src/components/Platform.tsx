"use client";
import React from 'react';
import { Monitor, Smartphone, Globe, Bot, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { AreaChart, Area, ResponsiveContainer } from 'recharts';
import { cn } from '@/lib/utils';

const spreadsData = [
  { sym: 'EUR/USD', bid: '1.08541', ask: '1.08543', spr: '0.2', ch: '+0.35%', up: true, data: [{v:10},{v:12},{v:11},{v:14},{v:13},{v:16}] },
  { sym: 'GBP/USD', bid: '1.26872', ask: '1.26876', spr: '0.4', ch: '-0.12%', up: false, data: [{v:16},{v:14},{v:15},{v:13},{v:14},{v:10}] },
  { sym: 'XAU/USD', bid: '2,648.35', ask: '2,648.65', spr: '0.3', ch: '+0.42%', up: true, data: [{v:10},{v:13},{v:12},{v:15},{v:14},{v:18}] },
  { sym: 'USD/JPY', bid: '154.320', ask: '154.324', spr: '0.4', ch: '+0.18%', up: true, data: [{v:10},{v:11},{v:12},{v:11},{v:13},{v:14}] },
  { sym: 'NAS100', bid: '19,840.5', ask: '19,841.8', spr: '1.3', ch: '+0.65%', up: true, data: [{v:10},{v:14},{v:13},{v:17},{v:15},{v:20}] },
];

export function Platform() {
  const features = [
    { icon: Monitor, title: 'Desktop Architecture', desc: 'The definitive trading terminal with advanced high-frequency analytical timeframes.' },
    { icon: Smartphone, title: 'Mobile Foresight', desc: 'Narrate the market narrative from any mobile portal with instant execution parity.' },
    { icon: Globe, title: 'Web Protocol', desc: 'Direct browser access to universal liquidity pools with architectural precision.' },
    { icon: Bot, title: 'Algorithmic Intent', desc: 'Automated intent with Expert Advisors running on optimized institutional VPS.' },
  ];

  return (
    <section id="platforms" className="pt-32 pb-20 lg:pt-44 lg:pb-32 bg-black min-h-[70vh] lg:min-h-[80vh] flex items-center">
      <div className="max-w-[1400px] mx-auto px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-[10px] uppercase font-black tracking-[0.4em] text-zinc-600 mb-6">Technologies</div>
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-12 leading-[0.85] tracking-tighter uppercase">Architectural <br/>MetaTrader Presence.</h2>
            
            <div className="grid grid-cols-1 gap-12">
              {features.map((f, i) => (
                <div key={i} className="flex gap-10 group">
                  <div className="w-14 h-14 shrink-0 border border-white/10 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                    <f.icon size={28} strokeWidth={1.5} />
                  </div>
                  <div className="pt-2">
                    <h4 className="text-white font-bold text-xl mb-3 uppercase tracking-tight">{f.title}</h4>
                    <p className="text-zinc-500 text-base leading-relaxed max-w-sm font-medium">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="mt-20 bg-primary text-white px-12 py-6 text-[12px] uppercase font-bold tracking-[0.3em] hover:brightness-110 transition-all flex items-center gap-4 cursor-pointer shadow-[0_20px_40px_rgba(133,190,93,0.3)]">
              Download Terminal Protocol
            </button>
          </motion.div>

          <div className="relative">
            <div className="bg-zinc-900 border border-white/5 p-12 lg:p-20 relative overflow-hidden group rounded-xl">
              <div className="absolute inset-0 bg-primary/5 blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              <div className="aspect-[4/5] bg-black overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.8)] relative z-10 border border-white/10 rounded-xl">
                <img 
                  src="/assets/trader-bg.jpg" 
                  alt="Platform UI" 
                  className="w-full h-full object-cover transition-all duration-1000 scale-110 group-hover:scale-100"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                <div className="absolute bottom-12 left-12 right-12 p-10 border border-white/10 backdrop-blur-2xl bg-white/5 rounded-xl">
                  <div className="text-[10px] uppercase font-black tracking-[0.4em] text-primary mb-3">Protocol / Version 5.0</div>
                  <div className="text-white font-serif italic text-3xl tracking-tight">The Institutional Standard.</div>
                </div>
              </div>
              {/* Decorative side text */}
              <div className="absolute top-1/2 -right-8 translate-y-1/2 rotate-90 text-[11px] text-white/5 font-black tracking-[1.5em] whitespace-nowrap uppercase pointer-events-none">
                Architecture • Performance • Core
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
