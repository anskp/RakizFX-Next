"use client";

import React from 'react';
import { motion } from 'motion/react';
import { 
  Shield, Layers, DollarSign, 
  Activity, CheckCircle, Smartphone, Globe, Award, PlayCircle,
  Sparkles, TrendingUp, UserCheck, BookOpen, Star, Wallet, Users, UserPlus
} from 'lucide-react';
import { AccountTypes } from '@/components/AccountTypes';
import { PlatformFeatures } from '@/components/PlatformFeatures';

function TradingCopySection() {
  return (
    <section id="copy-trading" className="pt-0 pb-12 bg-white relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-0">
          <h2 className="text-h2 mb-2">
            Copy Trading
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center mt-6 mb-8"
        >
          <div className="lg:col-span-5 text-center lg:text-left flex flex-col items-center lg:items-start">
            <h3 className="text-3xl md:text-4xl font-black uppercase leading-tight mb-3 text-black inline-block font-montreal">
              Follow verified providers <br/><span className="font-normal italic">and mirror their trades</span>
            </h3>
            <p className="text-zinc-600 text-sm md:text-base leading-relaxed mb-4 max-w-lg mx-auto lg:mx-0">
              Fund your account, compare trader performance, then subscribe to a strategy. Once active, copied trades run automatically with your own allocation and risk controls.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-3">
              {["Fund", "Choose", "Copy"].map((item) => (
                <span key={item} className="rounded-full bg-[#eafaf1] px-5 py-3 text-[10px] font-black uppercase tracking-widest text-[#00ca73]">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 flex justify-center lg:justify-end">
            <img
              src="/assets/copytrading01.png"
              alt="Copy Trading Terminal"
              className="w-full max-w-2xl h-auto object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.15)] -my-24 md:-my-40 lg:-my-48"
            />
          </div>
        </motion.div>

        <div className="text-center mb-10 mt-6">
          <h3 className="text-[10px] font-black uppercase tracking-widest text-[#00ca73] mb-2">How to Start</h3>
          <h4 className="text-3xl md:text-4xl font-black uppercase leading-tight text-black inline-block font-montreal">
            Start copying top trades <br/><span className="font-normal italic">in a few steps</span>
          </h4>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
            {[
              {
                title: "Sign Up & Fund",
                time: "Create your account",
                desc: "Open your Client Portal account and add funds using cards, eWallets, or local payment methods.",
                icon: <Wallet size={42} strokeWidth={1.6} />
              },
              {
                title: "Choose a Trader",
                time: "Review performance",
                desc: "Browse verified providers, compare returns and risk profiles, then select the strategy that fits you.",
                icon: <TrendingUp size={42} strokeWidth={1.6} />
              },
              {
                title: "Start Copying",
                time: "Trades run automatically",
                desc: "Subscribe, set your allocation and risk controls, and mirror provider trades inside your own account.",
                icon: <Users size={42} strokeWidth={1.6} />
              }
            ].map((step, idx) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.12 }}
                className="text-center"
              >
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-3xl bg-white text-black shadow-[0_10px_30px_rgba(0,0,0,0.06)]">
                  {step.icon}
                </div>
                <h5 className="text-xl md:text-2xl font-black uppercase tracking-tight mb-2 text-black inline-block font-montreal">
                  {step.title}
                </h5>
                <div className="text-[10px] font-black text-[#00ca73] mb-4 uppercase tracking-widest">
                  {step.time}
                </div>
                <p className="max-w-xs mx-auto text-zinc-500 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="hidden md:block relative mt-8 h-14">
            <div className="absolute left-0 right-0 top-1/2 h-4 -translate-y-1/2 rounded-full bg-zinc-100" />
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="absolute left-0 top-1/2 h-4 -translate-y-1/2 rounded-full bg-[#00ca73]"
            />

            {[16.666, 50, 83.333].map((position, idx) => (
              <motion.div
                key={position}
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + idx * 0.15 }}
                className="absolute top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white ring-8 ring-[#00ca73] shadow-[0_8px_24px_rgba(0,202,115,0.18)]"
                style={{ left: `${position}%` }}
              >
                <CheckCircle className="text-black" size={24} strokeWidth={2.2} />
              </motion.div>
            ))}
          </div>

          <button className="mx-auto mt-6 flex items-center justify-center rounded-full bg-[#004D34] px-10 py-4 text-sm font-black uppercase tracking-widest text-white transition-transform hover:scale-105">
            Start Copying
          </button>
        </div>
      </div>
    </section>
  );
}

export default function TradingPage() {
  return (
    <div className="bg-white text-black min-h-screen">
      
      {/* 1. Hero Section */}
      <section id="overview" className="relative pt-28 pb-16 md:pt-32 md:pb-20 overflow-hidden text-black min-h-[70vh] md:min-h-screen flex items-center">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-100 pointer-events-none"
          style={{ backgroundImage: "url('/assets/tradinghero02.png')" }}
        />
        {/* Light gradient fade to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/70 to-transparent pointer-events-none" />

        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10 w-full">
          <div className="max-w-2xl lg:max-w-3xl text-left">
            <motion.div 
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl lg:text-[clamp(3.5rem,4vw,4.5rem)] font-black uppercase tracking-tight mb-5 lg:mb-6 leading-tight lg:leading-[1.05] text-black inline-block font-montreal">
                Trade Global Markets <br/>
                <span className="font-semibold">With Confidence</span>
              </h1>

              <p className="text-zinc-800 text-sm md:text-base lg:text-[clamp(1.125rem,1.5vw,1.25rem)] font-medium mb-8 lg:mb-10 leading-relaxed max-w-xl lg:max-w-2xl">
                Access 1,000+ CFD instruments across Forex, Crypto, Stocks, and Commodities with ultra-fast execution, deep institutional liquidity, and advanced charting tools designed for modern traders.
              </p>

              <div className="flex flex-wrap gap-4 lg:gap-5 justify-start items-center">
                <button className="bg-nn hover:bg-nnl text-dk px-6 py-3 text-[11px] font-bold uppercase tracking-[0.2em] rounded-xl transition-all cursor-pointer shadow-[0_5px_15px_rgba(0,202,115,0.2)] hover:scale-105">
                  Start Trading Today
                </button>
                <button className="px-6 py-3 text-[11px] font-bold uppercase tracking-[0.2em] hover:text-primary border hover:border-primary rounded-xl transition-all cursor-pointer flex items-center justify-center text-zinc-800 border-zinc-300 bg-white">
                  Try Free Demo
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Why Trade With Us */}
      <section id="benefits" className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-h2 mb-4">
              Why Trade With Us
            </h2>
            <p className="max-w-2xl mx-auto text-zinc-600 text-base leading-relaxed">
              Experience unparalleled trading conditions with our cutting-edge infrastructure, deep liquidity, and award-winning customer support designed for serious traders.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Large Feature 1 */}
            <div className="md:col-span-8 relative overflow-hidden rounded-[2rem] md:rounded-[2.5rem] bg-zinc-900 group flex flex-col items-center text-center justify-center p-10 md:p-12 min-h-[320px] md:min-h-[400px]">
              <div className="absolute inset-0 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&w=1200&q=80" 
                  alt="Precision Execution" 
                  className="w-full h-full object-cover opacity-30 group-hover:scale-105 group-hover:opacity-20 transition-all duration-700" 
                />
                <div className="absolute inset-0 bg-black/50" />
              </div>
              <div className="relative z-10 flex flex-col items-center">
                <div className="mb-6 group-hover:scale-110 transition-transform">
                  <img src="/icons/Precision_Execution.png" alt="Precision Execution" className="w-28 h-28 object-contain" />
                </div>
                <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-4 text-white inline-block font-montreal">
                  Precision <span className="font-normal italic">Execution</span>
                </h3>
                <p className="text-zinc-300 text-base md:text-lg max-w-xl font-medium leading-relaxed font-sans">
                  Sub-10ms execution architecture connected to institutional liquidity venues.
                </p>
              </div>
            </div>

            {/* Medium Feature 1 */}
            <div className="md:col-span-4 relative overflow-hidden rounded-[2rem] md:rounded-[2.5rem] bg-gradient-to-b from-white to-zinc-50 group p-8 md:p-12 flex flex-col items-center justify-center text-center min-h-[320px] md:min-h-[400px] border border-zinc-200 shadow-sm">
              <div className="relative z-10 flex flex-col items-center">
                <div className="mb-6 group-hover:scale-110 transition-transform">
                  <img src="/icons/Multi-Asset_Markets.png" alt="Multi-Asset Markets" className="w-28 h-28 object-contain" />
                </div>
                <h3 className="text-2xl font-black uppercase tracking-tight mb-4 text-black inline-block font-montreal font-black">Multi-Asset <br/>Markets</h3>
                <p className="text-zinc-600 text-sm font-medium leading-relaxed max-w-[250px] font-sans">
                  Trade forex, crypto, equities, commodities, indices, and ETFs through one ecosystem.
                </p>
              </div>
            </div>

            {/* Medium Feature 2 */}
            <div className="md:col-span-4 relative overflow-hidden rounded-[2rem] md:rounded-[2.5rem] bg-[#121212] group p-8 md:p-10 flex flex-col items-center justify-center text-center min-h-[260px] md:min-h-[350px]">
              <div className="relative z-10 flex flex-col items-center">
                <div className="mb-6 group-hover:scale-110 transition-transform">
                  <img src="/icons/Professional_Platforms.png" alt="Professional Platforms" className="w-28 h-28 object-contain" />
                </div>
                <h3 className="text-2xl font-black uppercase tracking-tight mb-3 text-white inline-block font-montreal">Professional Platforms</h3>
                <p className="text-zinc-400 text-sm leading-relaxed max-w-[250px] font-sans">
                  MT4, mt5, TradingView, WebTrader, and mobile trading environments.
                </p>
              </div>
            </div>

            {/* Medium Feature 3 */}
            <div className="md:col-span-4 relative overflow-hidden rounded-[2rem] md:rounded-[2.5rem] bg-gradient-to-b from-[#eafaf1] to-white group p-8 md:p-10 flex flex-col items-center justify-center text-center min-h-[260px] md:min-h-[350px] border border-[#CDEEDB]/60">
              <div className="relative z-10 flex flex-col items-center">
                <div className="mb-6 group-hover:scale-110 transition-transform">
                  <img src="/icons/Capital_Protection.png" alt="Capital Protection" className="w-28 h-28 object-contain" />
                </div>
                <h3 className="text-2xl font-black uppercase tracking-tight mb-3 text-black inline-block font-montreal font-black">Capital Protection</h3>
                <p className="text-[#004D34]/80 text-sm font-medium leading-relaxed max-w-[250px] font-sans">
                  Enterprise-grade security, segregated client funds, and multi-layer compliance systems.
                </p>
              </div>
            </div>

            {/* Medium Feature 4 */}
            <div className="md:col-span-4 relative overflow-hidden rounded-[2rem] md:rounded-[2.5rem] bg-white group flex flex-col items-center justify-center text-center p-8 md:p-10 min-h-[260px] md:min-h-[350px] hover:shadow-xl transition-all border border-zinc-200 shadow-sm">
              <div className="mb-6 group-hover:scale-110 transition-transform">
                <img src="/icons/Global_Funding_Rails.png" alt="Global Funding Rails" className="w-28 h-28 object-contain" />
              </div>
              <h3 className="text-xl font-black uppercase tracking-tight mb-3 text-black inline-block font-montreal">Global Funding Rails</h3>
              <p className="text-zinc-500 text-sm leading-relaxed max-w-[250px] font-sans">
                Fast deposits and withdrawals through banking, cards, crypto, and regional payment networks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Trading Overview Bento Grid */}
      <section id="markets" className="py-24 bg-white text-black border-b border-zinc-200">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-h2 mb-4">
              Trading Ecosystem
            </h2>
            <p className="max-w-2xl mx-auto text-zinc-600 text-base leading-relaxed font-sans">
              Access a comprehensive suite of financial instruments and professional tools within a single, unified environment built for performance.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Available Markets Column */}
            <div className="lg:col-span-7 bg-gradient-to-b from-white to-white hover:from-[#CDEEDB] hover:to-white border border-zinc-200/80 hover:border-[#CDEEDB]/60 shadow-[0_10px_30px_rgba(0,0,0,0.01)] transition-all duration-300 rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden flex flex-col justify-between">
              <div>
                <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-6 text-black inline-block font-montreal">Available Markets</h3>
                <p className="text-zinc-600 text-sm mb-10 max-w-md font-sans">
                  Diversify your trading portfolio across a complete suite of underlying financial asset categories with high-speed execution.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                {[
                  'Forex', 'Shares', 'Indices', 'Commodities', 
                  'Metals', 'Energies', 'Cryptocurrencies', 'ETFs', 'Futures'
                ].map((market, idx) => (
                  <span key={idx} className="bg-zinc-50 border border-zinc-200 px-5 py-3 rounded-full text-xs font-black uppercase tracking-wider text-zinc-800 hover:border-primary/30 transition-all cursor-default">
                    {market}
                  </span>
                ))}
              </div>
            </div>

            {/* What You Get Column */}
            <div className="lg:col-span-5 bg-gradient-to-b from-white to-white hover:from-[#CDEEDB] hover:to-white border border-zinc-200/80 hover:border-[#CDEEDB]/60 shadow-[0_10px_30px_rgba(0,0,0,0.01)] transition-all duration-300 rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden">
              <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-6 text-black inline-block font-montreal">What You Get</h3>
              
              <ul className="space-y-4">
                {[
                  'Tight spreads', 'Fast execution', 'Advanced charting', 
                  'Real-time pricing', 'Negative balance protection', 
                  'Professional trading tools', 'Multi-device trading access'
                ].map((benefit, idx) => (
                  <li key={idx} className="flex items-center gap-4 text-zinc-800 font-medium">
                    <CheckCircle className="text-primary shrink-0" size={16} />
                    <span className="text-sm">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Trading Accounts */}
      <div className="border-y border-zinc-200">
        <AccountTypes className="bg-white" />
      </div>

      {/* 5. Trading Platforms */}
      <section id="platforms" className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-10">
            <h2 className="text-h2 mb-4">
              Trading Platforms
            </h2>
            <p className="mx-auto max-w-2xl text-zinc-600 text-base leading-relaxed font-sans">
              Trade with professional-grade terminals designed for clarity, speed and reliability. Each platform card includes a simple title and short description only.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                title: "MetaTrader 5",
                desc: "Advanced charting, automated strategies and full market depth in a polished terminal.",
                image: "/assets/metatrader5.png"
              },
              {
                title: "Web Trader",
                desc: "Access trading directly from your browser with no download required.",
                image: "/assets/web-trading-main_2xh.png"
              }
            ].map((platform, idx) => (
              <div key={idx} className="relative overflow-visible px-6 pt-10 pb-6 text-center">
                <div className="mx-auto mb-8 w-full max-w-[420px]">
                  <img
                    src={platform.image}
                    alt={platform.title}
                    className="mx-auto h-64 w-auto object-contain transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <h3 className="text-2xl md:text-3xl font-semibold tracking-tight mb-3 text-black inline-block font-montreal">
                  {platform.title}
                </h3>
                <p className="text-zinc-600 text-sm leading-relaxed font-sans">
                  {platform.desc}
                </p>
              </div>
            ))}
          </div>
          
          {/* Platform Features Comparison Table */}
          <div className="mt-20 hidden">
            <div className="text-center mb-10">
              <h3 className="text-3xl md:text-4xl font-semibold tracking-tight uppercase text-[#004D34]">
                Compare Platforms
              </h3>
            </div>
            <PlatformFeatures />
          </div>
        </div>
      </section>

      {/* 6. Social Trading Section */}
      {/* <TradingCopySection /> */}

      {/* 7. Security Section */}
      <section id="security" className="pt-20 pb-10 relative overflow-hidden bg-white text-black border-t border-zinc-200">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div>
              <h2 className="text-h2 mb-6">
                Account Security
              </h2>
              <p className="max-w-2xl mx-auto text-zinc-600 text-sm md:text-base leading-relaxed mb-10 font-sans">
                Client protection comes first, with secure infrastructure, safeguarded funds, and platform-level controls designed to keep your trading environment resilient.
              </p>

              <div className="mx-auto max-w-4xl rounded-[2rem] bg-[#031610] overflow-hidden border border-[#0b3b2c]/60 shadow-[0_20px_60px_rgba(0,0,0,0.08)] hidden">
                <img
                  src="/assets/svgviewer-output.svg"
                  alt="Crypto asset security illustration"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. CTA Section */}
      <section className="pt-10 pb-24 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="bg-[#121212] border border-white/5 rounded-[2rem] md:rounded-[3rem] p-8 md:p-20 text-center relative overflow-hidden shadow-2xl">
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
          </div>
        </div>
      </section>



    </div>
  );
}
