"use client";
import React from 'react';
import { motion } from 'motion/react';
import { DollarSign, Euro, PoundSterling } from 'lucide-react';

const assets = [
  { symbol: 'NZD', name: 'USD', price: '0.5841', color: 'bg-pink-500', Icon: DollarSign },
  { symbol: 'USD', name: 'CHF', price: '0.7865', color: 'bg-blue-600', Icon: DollarSign },
  { symbol: 'USD', name: 'CAD', price: '1.3758', color: 'bg-blue-500', Icon: DollarSign },
  { symbol: 'AUD', name: 'USD', price: '0.7149', color: 'bg-yellow-500', Icon: DollarSign },
  { symbol: 'EUR', name: 'USD', price: '1.1628', color: 'bg-purple-600', Icon: Euro },
  { symbol: 'GBP', name: 'JPY', price: '211.7011', color: 'bg-emerald-600', Icon: PoundSterling },
  { symbol: 'USD', name: 'JPY', price: '158.5420', color: 'bg-blue-700', Icon: DollarSign },
  { symbol: 'MXN', name: 'USD', price: '17.3619', color: 'bg-cyan-600', Icon: DollarSign },
];

export function Ticker() {
  return (
    <div className="flex gap-4 overflow-hidden relative py-4 bg-black border-y border-white/5">
      <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-r from-black via-transparent to-black" />
      <motion.div 
        animate={{ x: [0, -1000] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="flex gap-6 whitespace-nowrap"
      >
        {[...assets, ...assets, ...assets].map((asset, i) => (
          <div 
            key={i} 
            className="bg-zinc-900/50 border border-white/5 rounded-full px-6 py-3 flex items-center gap-4 hover:bg-zinc-800 transition-colors cursor-default"
          >
            <div className={`w-8 h-8 rounded-full ${asset.color} flex items-center justify-center text-white`}>
              <asset.Icon size={14} strokeWidth={3} />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-white uppercase tracking-wider">{asset.symbol}</span>
                <span className="text-[10px] text-zinc-500 font-bold">{asset.name}</span>
              </div>
              <div className="text-xs font-mono text-zinc-400">{asset.price}</div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
