"use client";
import React from 'react';
import { motion } from 'motion/react';
import { Building2, ShieldCheck, Headset, Zap, Activity } from 'lucide-react';
import MagicBento from './MagicBento';

const trustItems = [
  { iconSrc: '/icons/Copilot_20260519_185446.png', title: 'Regulated Broker', sub: 'Multi-license security' },
  { iconSrc: '/icons/Copilot_20260519_184916.png', title: 'Tier-1 Execution', sub: 'Deep market access' },
  { iconSrc: '/icons/Copilot_20260519_184534.png', title: 'Segregated Funds', sub: 'Top-tier bank protection' },
  { iconSrc: '/icons/Copilot_20260519_191940.png', title: 'Raw Pricing', sub: 'Institutional liquidity' },
  { iconSrc: '/icons/Copilot_20260519_183232.png', title: '24/7 Support', sub: 'Multi-lingual team' },
];

export function TrustBar() {
  return (
    <div className="bg-[#052410] border-y border-white/5 py-10">
      <div className="container-standard overflow-x-auto no-scrollbar">
        <div className="flex items-center justify-between gap-16 min-w-max">
          {trustItems.map((item, i) => (
            <div key={i} className="flex items-center gap-4 shrink-0">
              <div className="text-primary flex items-center justify-center">
                {item.iconSrc && (
                  <img src={item.iconSrc} alt={item.title} className="w-8 h-8 object-contain" />
                )}
              </div>
              <div>
                <div className="text-white text-[11px] font-black uppercase tracking-widest leading-none mb-1">{item.title}</div>
                <div className="text-zinc-600 text-[9px] uppercase tracking-[0.2em]">{item.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const marketCards = [
  {
    title: 'Forex Assets',
    desc: '60+ major and exotic currency pairs with high-frequency liquidity.',
    stat: '0.0 pips',
    icon: 'FX',
  },
  {
    title: 'Precious Metals',
    desc: 'XAU & XAG indicators with architectural pricing precision.',
    stat: '0.15 pips',
    icon: 'AU',
  },
  {
    title: 'Global Indices',
    desc: 'Top 50 global equity indices with institutional foresight.',
    stat: '0.4 pts',
    icon: 'IDX',
  },
  {
    title: 'Digital Liquidity',
    desc: 'BTC & ETH derivative markets for the modern equity narrative.',
    stat: '$0.50',
    icon: 'BTC',
  },
];

export function Markets() {
  const stats = [
    { val: '$12.5B', lab: 'Average Daily Volume', sub: 'Institutional Liquidity' },
    { val: '40ms', lab: 'Average Execution', sub: 'Low-Latency Infrastructure' },
    { val: '800k+', lab: 'Active Terminals', sub: 'Global Client Base' },
    { val: '24/7', lab: 'Market Access', sub: 'Multi-Asset Support' },
  ];

  return (
    <section id="markets" className="section-padding bg-white flex flex-col items-center overflow-hidden relative">
      <div className="container-standard relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-h2 mb-4">
            Global Markets
          </h2>
          <p className="text-body text-zinc-500 max-w-2xl mx-auto">
            Trade forex, indices, commodities, and cryptocurrencies with tight spreads and deep liquidity on our award-winning platform.
          </p>
        </div>

        {/* Interactive Bento Grid */}
        <MagicBento noPadding />


      </div>
    </section>
  );
}
