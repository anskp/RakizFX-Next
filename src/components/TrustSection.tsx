"use client";
import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Vault, Scale, CreditCard, Wallet, Banknote, Bitcoin, QrCode, Zap, CheckCircle2, Rocket, PlayCircle } from 'lucide-react';
import NeonWaveBackground from './NeonWaveBackground';

export function TrustSection() {
  return (
    <>
      {/* Payments Section */}
      <section id="payments" className="pt-0 pb-16 bg-white text-black">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-h2 mb-3">Fast, Secure & Flexible Payments</h2>
            <p className="text-zinc-500 text-sm font-medium max-w-2xl mx-auto">Multiple methods tailored for Asian traders. Most deposits processed instantly.</p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 lg:gap-14 mb-10 w-full">
            {[
              { logo: '/icons/bank-svgrepo-com.svg', name: 'Bank Transfer' },
              { logo: '/icons/visa-svgrepo-com (1).svg', name: 'Visa' },
              { logo: '/icons/mastercard-old-svgrepo-com.svg', name: 'Mastercard' },
              { logo: '/icons/bitcoin-svgrepo-com.svg', name: 'Bitcoin' },
              { logo: '/icons/apple-pay-svgrepo-com (1).svg', name: 'Apple Pay' },
            ].map((p, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -3, scale: 1.08 }}
                className="h-10 flex items-start justify-start transition-all cursor-default min-w-[80px]"
              >
                <div className="w-full h-full flex items-start justify-start">
                  <img src={p.logo} alt={p.name} className="max-w-full max-h-full object-contain filter opacity-80 hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center items-center gap-4 text-zinc-400 font-bold text-[10px]">
            <div className="flex items-center gap-2">
              <CheckCircle2 size={14} className="text-nn" />
              <span>Most deposits: Instant</span>
            </div>
            <div className="h-3 w-[1px] bg-zinc-200" />
            <span>Withdrawals: 1–24h</span>
            <div className="h-3 w-[1px] bg-zinc-200" />
            <span>Zero deposit fees</span>
          </div>
        </div>
      </section>



      {/* CTA Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#121212] border border-white/5 rounded-[2rem] md:rounded-[3rem] p-8 md:p-20 text-center relative overflow-hidden shadow-2xl"
          >
            <div className="relative z-10">
              <div className="text-[#00ca73] font-black text-[10px] uppercase tracking-[0.4em] mb-8 font-sans">Start Your Journey</div>
              <h2 className="text-4xl md:text-5xl font-semibold uppercase mb-12 tracking-tight leading-[0.9] text-white inline-block font-montreal">
                Start Your Journey
              </h2>
              
              <div className="flex flex-wrap justify-center gap-5">
                <button className="bg-primary text-black font-black px-10 py-5 text-xs uppercase tracking-widest rounded-2xl hover:scale-105 transition-transform shadow-lg cursor-pointer">
                  Open Live Account
                </button>
                <button className="bg-transparent border border-white/20 text-white font-black px-10 py-5 text-xs uppercase tracking-widest rounded-2xl hover:bg-white/5 transition-colors cursor-pointer">
                  Try Free Demo
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
