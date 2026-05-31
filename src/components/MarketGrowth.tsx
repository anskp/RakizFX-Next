"use client";
import React from 'react';
import { motion } from 'motion/react';

export function MarketGrowth() {
  return (
    <section id="platforms" className="section-padding section-bg-tactile overflow-hidden">
      <div className="container-standard">
        <div className="text-center mb-16 relative z-10">
          <h2 className="text-h2 mb-4 tracking-tight uppercase leading-[0.85] text-black">
            Invest in Top Assets
          </h2>
          <p className="text-body text-zinc-600 max-w-2xl mx-auto">
            Diversify your portfolio with direct access to top-performing assets, backed by real-time market data and professional trading tools.
          </p>
        </div>

        {/* Promo Card */}
        <div className="relative overflow-hidden card-3d-apple p-8 md:p-16 lg:p-24 flex flex-col md:flex-row items-center gap-16">

          <div className="flex-1 relative z-10 text-center md:text-left">
            <h3 className="text-3xl md:text-5xl text-black inline-block mb-6 leading-tight uppercase font-black tracking-tight font-montreal">
              Get <span className="font-black">RakizFx MT5</span> <br />on Your Preferred Platforms
            </h3>

            <p className="text-zinc-600 text-base md:text-lg mb-8 max-w-xl leading-relaxed mx-auto md:mx-0 font-medium">
              Access your RakizFx MT5 account across devices with a unified, secure experience. Stay connected to your market activity, insights, and portfolio contex anytime, anywhere.
            </p>

            <div className="flex flex-row gap-6 justify-center md:justify-start items-center">
              <a href="#" className="transition-all duration-300 block max-w-[450px]">
                <img src="/assets/download_buttonss.png" alt="Download RakizFx MT5 Platforms" className="w-full h-auto object-contain" />
              </a>
            </div>
          </div>

          <div className="flex-1 relative mt-4 md:mt-0 flex justify-center lg:justify-end">
            <div className="relative w-full lg:w-[130%] lg:translate-x-12">
              <img
                src="/assets/MT5-Features-Desktop-Mobile-V6-e1758285344952.png"
                alt="RakizFx MT5 App"
                className="relative z-10 w-full h-auto drop-shadow-[0_80px_160px_rgba(0,77,52,0.06)] transition-transform duration-1000"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
