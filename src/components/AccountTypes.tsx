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
        { label: 'Spread', value: 'Standard spreads' },
        { label: 'Leverage', value: 'Up to 1:400' },
        { label: 'Commission', value: 'Zero commission on trades' },
        { label: 'Swap-free', value: 'Adjustable swap-free option' },
        { label: 'Funding', value: 'Instant deposit & faster withdrawal' },
        { label: 'Platform', value: 'MetaTrader 5' },
        { label: 'Support', value: '24/7 technical support' }
      ],
      buttonText: 'Open Standard'
    },
    {
      id: 'pro',
      badge: 'POPULAR',
      subBadge: 'Best for regular traders',
      title: 'Pro',
      tagline: 'Faster execution, priority support and advanced trading conditions.',
      price: '$200',
      priceLabel: 'minimum deposit',
      isPopular: true,
      details: [
        { label: 'Spread', value: 'Low, competitive spreads' },
        { label: 'Leverage', value: 'Up to 1:500' },
        { label: 'Commission', value: 'Zero commission on trades' },
        { label: 'Swap-free', value: 'Adjustable swap-free option' },
        { label: 'Funding', value: 'Instant deposit & faster withdrawal' },
        { label: 'Platform', value: 'MetaTrader 5' },
        { label: 'Support', value: '24×7 priority support' }
      ],
      buttonText: 'Open Pro'
    },
    {
      id: 'elite',
      badge: 'VIP',
      subBadge: 'Best for VIP / high-volume traders',
      title: 'Elite',
      tagline: 'VIP treatment. Exclusive support. Built for serious traders who expect the best.',
      price: '$2,000',
      priceLabel: 'minimum deposit',
      isPopular: false,
      isElite: true,
      details: [
        { label: 'Spread', value: 'Ultra-low, raw spreads' },
        { label: 'Leverage', value: 'Custom leverage' },
        { label: 'Commission', value: 'Zero commission on trades' },
        { label: 'Swap-free', value: 'Adjustable swap-free option' },
        { label: 'VIP perks', value: 'Relationship manager & VIP events' },
        { label: 'Platform', value: 'Advanced MT5 integration' },
        { label: 'Support', value: '24/7 dedicated VIP support' }
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
                className={`relative overflow-hidden rounded-[3rem] p-8 md:p-10 flex flex-col justify-between transition-all duration-500 w-full shrink-0 snap-center min-w-[85vw] sm:min-w-[60vw] md:min-w-0 bg-gradient-to-b from-white to-white hover:from-[#CDEEDB] hover:to-white border ${
                  acc.isPopular 
                    ? 'border-[#004D34] shadow-[0_20px_50px_rgba(0,77,52,0.06)]' 
                    : 'border-zinc-200/80 hover:border-[#CDEEDB]/60 shadow-[0_10px_30px_rgba(0,0,0,0.01)]'
                }`}
              >
                {/* Top Section */}
                <div>
                  <div className="flex flex-col items-start gap-1 mb-4">
                    {/* Badge */}
                    {acc.badge && (
                      <span className={`font-black text-[9px] tracking-wider uppercase py-1 px-3 rounded-full inline-block ${
                        acc.isPopular 
                          ? 'bg-[#004D34] text-white' 
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

                  <h3 className="text-2xl md:text-3xl font-black uppercase text-[#004D34] tracking-tight mb-3">
                    {acc.title}
                  </h3>

                  <p className="text-xs text-zinc-500 leading-relaxed mb-6 font-medium min-h-[40px]">
                    {acc.tagline}
                  </p>

                  {/* Price Block */}
                  <div className="my-6 py-4 border-t border-b border-zinc-100/80 flex items-baseline gap-2">
                    <span className="text-4xl md:text-5xl font-black text-[#004D34] font-mono tracking-tight">{acc.price}</span>
                    <span className="text-zinc-400 text-[10px] font-black uppercase tracking-wider">{acc.priceLabel}</span>
                  </div>

                  {/* Specifications List */}
                  <div className="flex flex-col gap-4 mb-10">
                    {acc.details.map((d, idx) => (
                      <div key={idx} className="flex justify-between items-center w-full py-2 border-b border-zinc-100 last:border-0">
                        <span className="text-[9px] font-black uppercase tracking-wider text-zinc-400">
                          {d.label}
                        </span>
                        <span className="text-[10px] md:text-[11px] font-extrabold text-[#004D34] text-right">
                          {d.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Button */}
                <div>
                  {acc.isPopular ? (
                    <button className="w-full bg-[#004D34] hover:bg-[#00ca73] hover:text-black text-white font-extrabold py-4 px-6 rounded-2xl text-xs uppercase tracking-widest transition-all shadow-[0_10px_20px_rgba(0,77,52,0.15)] cursor-pointer">
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
