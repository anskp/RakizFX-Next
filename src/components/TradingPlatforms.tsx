"use client";
import React from 'react';
import { motion } from 'motion/react';
import { Download, Monitor, Smartphone, Globe } from 'lucide-react';

export function TradingPlatforms() {
  const platforms = [
    {
      id: 'mt4',
      name: 'MetaTrader 4',
      tag: 'Classic Performance',
      desc: 'The industry standard for forex trading. Optimized for high-frequency execution and deep analytical depth.',
      image: '/assets/metatrader4.png',
      features: ['Advanced Charts', 'Expert Advisors', 'One-Click Trading'],
    },
    {
      id: 'mt5',
      name: 'MetaTrader 5',
      tag: 'Modern Architecture',
      desc: 'The next generation of multi-asset trading. Expanded timeframes, economic calendar integration, and superior order types.',
      image: '/assets/metatrader5.png',
      features: ['Multi-Asset Support', 'Market Depth', 'Enhanced Testing'],
    }
  ];

  return (
    <section id="trading-platforms" className="py-40 bg-zinc-950 text-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-12">
        <div className="text-center mb-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block bg-primary/10 border border-primary/20 px-6 py-2 rounded-full text-primary text-[10px] font-black uppercase tracking-[0.4em] mb-8"
          >
            Trading Ecology
          </motion.div>
          <h2 className="text-5xl md:text-7xl uppercase mb-6 leading-tight text-white">Elite Terminals.</h2>
          <p className="text-zinc-500 text-xl max-w-3xl mx-auto leading-relaxed font-medium">
            Deploy your strategies on a high-availability infrastructure. Our hosting protocols are co-located with major liquidity providers in NY4 and LD5 data centers, ensuring millisecond-perfect execution for every trade order.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-32">
          {platforms.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="bg-[#080808] border border-white/5 rounded-3xl p-12 lg:p-20 group hover:border-primary/20 transition-all relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[100px] -mr-32 -mt-32 rounded-full" />
              
              <div className="relative z-10">
                <div className="text-primary font-black text-xs uppercase tracking-[0.4em] mb-6">{p.tag}</div>
                <h3 className="text-3xl md:text-5xl uppercase mb-8">{p.name}</h3>
                <p className="text-zinc-400 text-lg leading-relaxed mb-10 max-w-md">{p.desc}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                  {p.features.map((f, j) => (
                    <div key={j} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      <span className="text-[11px] font-black uppercase tracking-widest text-zinc-500">{f}</span>
                    </div>
                  ))}
                </div>

                <div className="flex gap-4">
                  <button className="bg-primary text-white px-10 py-5 rounded-xl font-black text-[10px] uppercase tracking-widest flex items-center gap-3 hover:brightness-110 transition-all shadow-[0_15px_30px_rgba(133,191,93,0.3)]">
                    <Download size={16} /> Download Platform
                  </button>
                  <button className="bg-white/5 border border-white/10 text-white px-10 py-5 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-white/10 transition-all">
                    Web Terminal
                  </button>
                </div>
              </div>

              <div className="mt-16 relative">
                 <div className="absolute top-0 left-0 w-full p-8 flex justify-between items-center z-20">
                    <div className="flex gap-3">
                       <span className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[10px] font-black text-primary">NY4</span>
                       <span className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[10px] font-black text-primary">LD5</span>
                    </div>
                    <div className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">Low Latency Enabled</div>
                 </div>
                 <div className="absolute inset-0 bg-primary/20 blur-[100px] scale-50 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                 <img 
                   src={p.image} 
                   alt={p.name} 
                   className="w-full h-auto rounded-2xl shadow-2xl relative z-10 transition-all duration-700 hover:scale-[1.02]"
                 />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dummy Mockup Section */}
        <motion.div
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="bg-[#050505] border border-white/5 rounded-[3rem] p-12 lg:p-32 flex flex-col lg:flex-row items-center gap-20"
        >
          <div className="lg:w-1/2">
            <div className="text-primary font-black text-[10px] uppercase tracking-[0.5em] mb-8">Unified Gateway</div>
            <h3 className="text-4xl md:text-6xl uppercase leading-[0.85] mb-10 text-white">Advanced <br/>Market Sync.</h3>
            <p className="text-zinc-500 text-xl leading-relaxed mb-12 font-medium">
              Experience total ecosystem parity across all devices. Your analysis stays persistent, whether you're behind the terminal or on the move.
            </p>
            <div className="flex flex-wrap gap-8">
               <div className="flex items-center gap-4">
                 <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-primary border border-white/10">
                   <Monitor size={24} />
                 </div>
                 <span className="font-black text-[11px] uppercase tracking-widest text-zinc-400">Desktop</span>
               </div>
               <div className="flex items-center gap-4">
                 <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-primary border border-white/10">
                   <Smartphone size={24} />
                 </div>
                 <span className="font-black text-[11px] uppercase tracking-widest text-zinc-400">Mobile</span>
               </div>
               <div className="flex items-center gap-4">
                 <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-primary border border-white/10">
                   <Globe size={24} />
                 </div>
                 <span className="font-black text-[11px] uppercase tracking-widest text-zinc-400">Web</span>
               </div>
            </div>
          </div>
          <div className="lg:w-1/2">
             <div className="relative group">
                <div className="absolute inset-0 bg-primary/10 blur-[120px] scale-75" />
                <img 
                  src="/assets/dummy.png" 
                  alt="Terminal Mockup" 
                  className="relative z-10 w-full h-auto rounded-3xl shadow-[0_50px_100px_rgba(0,0,0,0.5)] border border-white/5 transition-all duration-1000"
                />
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
