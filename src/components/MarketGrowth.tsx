"use client";
import React from 'react';
import { motion } from 'motion/react';

export function MarketGrowth() {
  return (
    <section id="platforms" className="section-padding bg-white overflow-hidden">
      <div className="container-standard">
        <div className="text-center mb-16 relative z-10">
          <h2 className="text-h2 mb-4 tracking-tight uppercase leading-[0.85]">
            Invest in Top Assets
          </h2>
          <p className="text-body text-zinc-500 max-w-2xl mx-auto">
            Diversify your portfolio with direct access to top-performing assets, backed by real-time market data and professional trading tools.
          </p>
        </div>

        {/* Promo Card */}
        <div className="relative overflow-hidden rounded-[3rem] bg-gradient-to-b from-[#CDEEDB] to-white border border-[#CDEEDB]/60 p-8 md:p-16 lg:p-24 flex flex-col md:flex-row items-center gap-16 group shadow-[0_30px_60px_rgba(0,77,52,0.04)]">

          <div className="flex-1 relative z-10 text-center md:text-left">
            <h3 className="text-3xl md:text-5xl text-black inline-block mb-6 leading-tight uppercase font-black tracking-tight font-montreal">
              Get <span className="font-black">RakizFx MT5</span> <br />on Your Preferred Platforms
            </h3>

            <p className="text-zinc-600 text-base md:text-lg mb-8 max-w-xl leading-relaxed mx-auto md:mx-0 font-medium">
              Access your RakizFx MT5 account across devices with a unified, secure experience. Stay connected to your market activity, insights, and portfolio contex anytime, anywhere.
            </p>

            <div className="text-[10px] sm:text-xs font-black text-black tracking-widest uppercase mb-4 text-center md:text-left">
              Get it on
            </div>
            <div className="flex flex-row gap-6 justify-center md:justify-start items-center">
              {/* App Store */}
              <a href="#" className="transition-all duration-300 hover:scale-110 active:scale-95 block">
                <img src="/icons/app-store-svgrepo-com (1).svg" alt="Apple App Store" className="w-12 h-12 md:w-14 md:h-14 object-contain drop-shadow-[0_4px_10px_rgba(0,0,0,0.06)]" />
              </a>

              {/* Google Play */}
              <a href="#" className="transition-all duration-300 hover:scale-110 active:scale-95 block">
                <img src="/icons/google-play-store-svgrepo-com.svg" alt="Google Play Store" className="w-12 h-12 md:w-14 md:h-14 object-contain drop-shadow-[0_4px_10px_rgba(0,0,0,0.06)]" />
              </a>

              {/* Windows */}
              <a href="#" className="transition-all duration-300 hover:scale-110 active:scale-95 block">
                <img src="/icons/windows-svgrepo-com.svg" alt="Windows" className="w-12 h-12 md:w-14 md:h-14 object-contain drop-shadow-[0_4px_10px_rgba(0,0,0,0.06)]" />
              </a>
            </div>
          </div>

          <div className="flex-1 relative mt-4 md:mt-0 flex justify-center lg:justify-end">
            <div className="relative w-full lg:w-[130%] lg:translate-x-12">
              <img
                src="/assets/MT5-Features-Desktop-Mobile-V6-e1758285344952.png"
                alt="RakizFx MT5 App"
                className="relative z-10 w-full h-auto drop-shadow-[0_80px_160px_rgba(0,77,52,0.06)] transition-transform duration-1000 group-hover:scale-[1.03]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
