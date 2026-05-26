"use client";
import React, { useState } from 'react';
import { motion } from 'motion/react';

interface AccountConfig {
  id: string;
  badge?: string;
  subBadge?: string;
  title: string;
  tagline: string;
  price: string;
  priceLabel: string;
  isPopular: boolean;
  isElite?: boolean;
  details: { label: string; value: string }[];
  buttonText: string;
}

export function AccountTypes({ className }: { className?: string }) {
  const accountsData: AccountConfig[] = [
    {
      id: 'standard',
      badge: 'Best for beginners',
      title: 'Standard',
      tagline: 'Easy start. Everything you need to begin your trading journey.',
      price: '$50',
      priceLabel: 'minimum deposit',
      isPopular: false,
      details: [
        { label: 'Spread', value: 'Standard' },
        { label: 'Leverage', value: 'Up to 1:400' },
        { label: 'Commission', value: 'Zero' },
        { label: 'Swap-free', value: 'Adjustable' },
        { label: 'Support', value: '24/7 Technical' }
      ],
      buttonText: 'Open Standard'
    },
    {
      id: 'pro',
      badge: 'POPULAR',
      subBadge: 'Best for regular traders',
      title: 'Pro',
      tagline: 'Faster execution, priority support and advanced conditions.',
      price: '$200',
      priceLabel: 'minimum deposit',
      isPopular: true,
      details: [
        { label: 'Spread', value: 'From 0.6 pips' },
        { label: 'Leverage', value: 'Up to 1:500' },
        { label: 'Commission', value: 'Zero' },
        { label: 'Swap-free', value: 'Adjustable' },
        { label: 'Support', value: '24/7 Priority' }
      ],
      buttonText: 'Open Pro'
    },
    {
      id: 'elite',
      badge: 'VIP',
      subBadge: 'Best for VIP / high-volume traders',
      title: 'Elite',
      tagline: 'VIP treatment. Exclusive support. Built for serious traders.',
      price: '$2,000',
      priceLabel: 'minimum deposit',
      isPopular: false,
      isElite: true,
      details: [
        { label: 'Spread', value: 'Raw from 0.0 pips' },
        { label: 'Leverage', value: 'Custom' },
        { label: 'Commission', value: 'Zero' },
        { label: 'Swap-free', value: 'Adjustable' },
        { label: 'Support', value: '24/7 Dedicated VIP' }
      ],
      buttonText: 'Open Elite'
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const scrollLeft = e.currentTarget.scrollLeft;
    const width = e.currentTarget.offsetWidth;
    const index = Math.round(scrollLeft / width);
    setActiveIndex(index);
  };

  return (
    <section id="accounts" className={`section-padding relative overflow-hidden ${className || 'bg-white'}`}>
      <div className="container-standard">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-h2 mb-4">
            Account Types
          </h2>
          <p className="text-body text-zinc-500 max-w-2xl mx-auto">
            Choose the perfect account type that matches your trading style, from beginner-friendly standard accounts to institutional-grade Elite conditions.
          </p>
        </div>

        {/* Mobile Pagination Indicator */}
        <div className="flex md:hidden justify-center items-center gap-2 mb-6">
          {accountsData.map((_, i) => (
            <div key={i} className={`h-2 rounded-full transition-all duration-300 ${activeIndex === i ? 'w-6 bg-[#004D34]' : 'w-2 bg-zinc-300'}`} />
          ))}
        </div>

        <div 
          className="flex overflow-x-auto snap-x snap-mandatory md:grid md:grid-cols-3 gap-6 md:gap-8 lg:gap-8 items-stretch max-w-7xl mx-auto pb-8 md:pb-0 hide-scrollbar px-4 md:px-0"
          onScroll={handleScroll}
        >
          {accountsData.map((acc, index) => {
            return (
              <motion.div
                key={acc.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -8 }}
                className={`relative overflow-hidden rounded-[2.5rem] p-6 md:p-8 flex flex-col justify-between transition-all duration-500 w-full shrink-0 snap-center min-w-[85vw] sm:min-w-[60vw] md:min-w-0 shadow-sm border ${
                  acc.isElite
                    ? 'bg-[#0B1510] border-zinc-800/80 hover:shadow-[0_20px_45px_rgba(0,0,0,0.25)]'
                    : acc.isPopular
                      ? 'bg-[#F3FDF7] border-[#00ca73] hover:shadow-[0_20px_45px_rgba(0,202,115,0.06)]'
                      : 'bg-white border-zinc-200/80 hover:shadow-[0_20px_40px_rgba(0,0,0,0.03)]'
                }`}
              >
                {/* Top Section */}
                <div>
                  <div className="flex flex-col items-start gap-1 mb-4">
                    {/* Badge */}
                    {acc.badge && (
                      <span className={`font-black text-[9px] tracking-wider uppercase py-1 px-3 rounded-full inline-block ${
                        acc.isElite
                          ? 'bg-[#06180F] text-[#00ca73] border border-[#00ca73]/30'
                          : acc.isPopular
                            ? 'bg-[#00ca73] text-black shadow-[0_4px_12px_rgba(0,202,115,0.25)]'
                            : 'bg-[#CDEEDB] text-[#004D34]'
                      }`}>
                        {acc.badge}
                      </span>
                    )}
                    {acc.subBadge && (
                      <span className="text-[10px] text-zinc-400 font-bold mt-1">
                        {acc.subBadge}
                      </span>
                    )}
                  </div>

                  <h3 className={`text-2xl md:text-3xl font-black uppercase tracking-tight mb-3 ${
                    acc.isElite 
                      ? 'bg-gradient-to-r from-white to-[#00ca73] bg-clip-text text-transparent inline-block font-montreal' 
                      : 'bg-gradient-to-r from-[#060F09] to-[#00ca73] bg-clip-text text-transparent inline-block font-montreal'
                  }`}>
                    {acc.title}
                  </h3>

                  <p className={`text-xs leading-relaxed mb-6 font-medium min-h-[40px] ${acc.isElite ? 'text-zinc-400' : 'text-zinc-500'}`}>
                    {acc.tagline}
                  </p>

                  {/* Price Block */}
                  <div className={`my-4 py-3 border-t border-b flex items-baseline gap-2 ${acc.isElite ? 'border-zinc-800' : 'border-zinc-100/80'}`}>
                    <span className={`text-3xl md:text-4xl font-black font-mono tracking-tight ${acc.isElite ? 'text-white' : 'text-[#004D34]'}`}>{acc.price}</span>
                    <span className="text-zinc-400 text-[10px] font-black uppercase tracking-wider">{acc.priceLabel}</span>
                  </div>

                  {/* Specifications List */}
                  <div className="flex flex-col gap-2 mb-6">
                    {acc.details.map((d, idx) => (
                      <div key={idx} className={`flex justify-between items-center w-full py-1.5 border-b last:border-0 ${acc.isElite ? 'border-zinc-800' : 'border-zinc-100'}`}>
                        <span className="text-[9px] font-black uppercase tracking-wider text-zinc-400">
                          {d.label}
                        </span>
                        <span className={`text-[10px] md:text-[11px] font-extrabold text-right ${acc.isElite ? 'text-white' : 'text-[#004D34]'}`}>
                          {d.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Button */}
                <div>
                  {acc.isElite || acc.isPopular ? (
                    <button className="w-full bg-[#00ca73] hover:bg-[#00b064] text-black font-extrabold py-4 px-6 rounded-2xl text-xs uppercase tracking-widest transition-all shadow-[0_6px_20px_rgba(0,202,115,0.2)] cursor-pointer">
                      {acc.buttonText}
                    </button>
                  ) : (
                    <button className="w-full bg-transparent border border-[#004D34] text-[#004D34] hover:bg-[#004D34] hover:text-white font-extrabold py-4 px-6 rounded-2xl text-xs uppercase tracking-widest transition-all cursor-pointer">
                      {acc.buttonText}
                    </button>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
