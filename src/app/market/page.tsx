"use client";

import React, { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { 
  LineChart, Building2, Activity, BarChart2, Boxes, Briefcase, 
  CheckCircle
} from 'lucide-react';
import { LiveMarketChart } from '@/components/LiveMarketChart';
import { TradingViewMarkets } from '@/components/TradingViewMarkets';

function EconomicCalendarWidget() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    container.innerHTML = '';

    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-events.js';
    script.async = true;
    script.innerHTML = JSON.stringify({
      colorTheme: 'light',
      isTransparent: true,
      width: '100%',
      height: '600',
      locale: 'en',
      importanceFilter: '-1,0,1',
      currencyFilter: 'USD,EUR,GBP,JPY,AUD,CAD,CHF,CNY',
    });
    container.appendChild(script);

    return () => { if (container) container.innerHTML = ''; };
  }, []);

  return (
    <div className="tradingview-widget-container" ref={containerRef} style={{ minHeight: '600px' }}>
      <div className="tradingview-widget-container__widget" />
    </div>
  );
}

export default function MarketPage() {
  // Sparkline generator helper
  const drawSparkline = (points: number[], colorClass: string) => {
    const width = 100;
    const height = 30;
    const max = Math.max(...points);
    const min = Math.min(...points);
    const spread = max - min === 0 ? 1 : max - min;
    const path = points
      .map((p, idx) => {
        const x = (idx / (points.length - 1)) * width;
        const y = height - ((p - min) / spread) * height;
        return `${idx === 0 ? 'M' : 'L'}${x.toFixed(1)},${y.toFixed(1)}`;
      })
      .join(' ');

    return (
      <svg className="w-24 h-8 overflow-visible" viewBox={`0 0 ${width} ${height}`}>
        <path d={path} fill="none" stroke="currentColor" strokeWidth="2.5" className={colorClass} strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  };

  const marketData = {
    forex: [
      { pair: 'EUR/USD', desc: 'Euro / US Dollar', price: '1.09247', change: '+0.18%', spark: [1.0905, 1.0912, 1.0918, 1.0921, 1.0925], isUp: true },
      { pair: 'GBP/USD', desc: 'Pound / US Dollar', price: '1.27364', change: '-0.22%', spark: [1.2765, 1.2752, 1.2745, 1.2741, 1.2736], isUp: false },
      { pair: 'USD/JPY', desc: 'US Dollar / Yen', price: '154.892', change: '+0.45%', spark: [154.25, 154.42, 154.65, 154.78, 154.89], isUp: true },
      { pair: 'AUD/USD', desc: 'Aussie / US Dollar', price: '0.66124', change: '+0.35%', spark: [0.6590, 0.6601, 0.6605, 0.6608, 0.6612], isUp: true },
      { pair: 'USD/CAD', desc: 'US Dollar / Loonie', price: '1.37245', change: '-0.08%', spark: [1.3735, 1.3732, 1.3728, 1.3726, 1.3725], isUp: false },
    ],
    shares: [
      { pair: 'Apple (AAPL)', desc: 'Apple Inc.', price: '212.34', change: '+0.85%', spark: [210.50, 211.20, 211.80, 212.10, 212.34], isUp: true },
      { pair: 'Tesla (TSLA)', desc: 'Tesla Inc.', price: '295.67', change: '-1.45%', spark: [300.20, 298.50, 297.10, 296.50, 295.67], isUp: false },
      { pair: 'Amazon (AMZN)', desc: 'Amazon.com Inc.', price: '205.42', change: '+1.22%', spark: [203.20, 204.10, 204.55, 205.10, 205.42], isUp: true },
      { pair: 'Nvidia (NVDA)', desc: 'NVIDIA Corporation', price: '1,156.30', change: '+2.35%', spark: [1130.50, 1140.20, 1148.50, 1152.80, 1156.30], isUp: true },
      { pair: 'Microsoft (MSFT)', desc: 'Microsoft Corporation', price: '458.92', change: '+0.78%', spark: [455.50, 456.80, 457.90, 458.50, 458.92], isUp: true },
    ],
    crypto: [
      { pair: 'Bitcoin (BTC)', desc: 'Bitcoin / USD', price: '74,250.00', change: '+3.25%', spark: [72000, 72500, 73200, 73800, 74250], isUp: true },
      { pair: 'Ethereum (ETH)', desc: 'Ethereum / USD', price: '4,125.40', change: '+2.65%', spark: [4020, 4060, 4090, 4110, 4125], isUp: true },
      { pair: 'Solana (SOL)', desc: 'Solana / USD', price: '218.75', change: '+6.80%', spark: [205.00, 210.50, 215.20, 217.40, 218.75], isUp: true },
      { pair: 'XRP (XRP)', desc: 'Ripple / USD', price: '0.5892', change: '-1.25%', spark: [0.597, 0.593, 0.591, 0.590, 0.589], isUp: false },
      { pair: 'Litecoin (LTC)', desc: 'Litecoin / USD', price: '94.65', change: '+1.85%', spark: [92.80, 93.50, 94.10, 94.45, 94.65], isUp: true },
    ],
    indices: [
      { pair: 'S&P 500', desc: 'US 500 Index', price: '5,847.25', change: '+0.58%', spark: [5805, 5820, 5835, 5842, 5847], isUp: true },
      { pair: 'NASDAQ 100', desc: 'US Tech 100 Index', price: '21,342.80', change: '+1.12%', spark: [21100, 21180, 21250, 21300, 21342], isUp: true },
      { pair: 'Dow Jones', desc: 'US 30 Index', price: '42,568.30', change: '-0.25%', spark: [42680, 42620, 42590, 42580, 42568], isUp: false },
      { pair: 'FTSE 100', desc: 'UK 100 Index', price: '8,756.40', change: '+0.38%', spark: [8720, 8735, 8745, 8752, 8756], isUp: true },
      { pair: 'DAX 40', desc: 'Germany 40 Index', price: '20,485.60', change: '+0.62%', spark: [20380, 20420, 20455, 20475, 20485], isUp: true },
    ],
    metals_energies: [
      { pair: 'Gold (XAU/USD)', desc: 'Gold Spot / USD', price: '2,516.40', change: '+0.95%', spark: [2492, 2501, 2508, 2512, 2516.4], isUp: true },
      { pair: 'Silver (XAG/USD)', desc: 'Silver Spot / USD', price: '32.18', change: '+1.85%', spark: [31.60, 31.80, 32.00, 32.10, 32.18], isUp: true },
      { pair: 'Brent Crude Oil', desc: 'Brent Crude Spot', price: '86.42', change: '-0.85%', spark: [87.15, 86.90, 86.65, 86.55, 86.42], isUp: false },
      { pair: 'WTI Crude Oil', desc: 'WTI Light Sweet Crude', price: '81.35', change: '-0.95%', spark: [82.05, 81.75, 81.50, 81.42, 81.35], isUp: false },
      { pair: 'Natural Gas', desc: 'Natural Gas Spot', price: '2.845', change: '+2.15%', spark: [2.785, 2.805, 2.820, 2.835, 2.845], isUp: true },
    ]
  };

  const marketSections = [
    {
      title: 'Forex',
      label: 'Currency Markets',
      desc: 'Trade major, minor, and exotic pairs with tight pricing, high liquidity, and fast 24/5 market access.',
      icon: <LineChart size={22} />,
      instruments: ['EUR/USD', 'GBP/USD', 'USD/JPY', 'AUD/USD'],
      tone: 'bg-[#eafaf1]',
      accent: 'text-[#004D34]'
    },
    {
      title: 'Shares CFDs',
      label: 'Global Equities',
      desc: 'Speculate on leading public companies across US, European, and Asian markets without owning the underlying stock.',
      icon: <Building2 size={22} />,
      instruments: ['AAPL', 'TSLA', 'AMZN', 'NVDA'],
      tone: 'bg-white',
      accent: 'text-zinc-900'
    },
    {
      title: 'Crypto CFDs',
      label: '24/7 Digital Assets',
      desc: 'Trade crypto price movements around the clock with advanced charting tools and no exchange wallet requirement.',
      icon: <Activity size={22} />,
      instruments: ['BTC/USD', 'ETH/USD', 'SOL/USD', 'XRP/USD'],
      tone: 'bg-[#121212]',
      accent: 'text-white'
    },
    {
      title: 'Indices',
      label: 'Benchmark Markets',
      desc: 'Access global benchmark indices and speculate on broad stock market performance with flexible CFD conditions.',
      icon: <BarChart2 size={22} />,
      instruments: ['S&P 500', 'NASDAQ 100', 'DAX 40', 'FTSE 100'],
      tone: 'bg-white',
      accent: 'text-zinc-900'
    },
    {
      title: 'Metals & Energies',
      label: 'Commodities',
      desc: 'Trade safe-haven metals and active energy markets including gold, silver, Brent, WTI, and natural gas.',
      icon: <Boxes size={22} />,
      instruments: ['Gold', 'Silver', 'Brent', 'Natural Gas'],
      tone: 'bg-[#f4f7f6]',
      accent: 'text-[#004D34]'
    },
    {
      title: 'ETFs',
      label: 'Sector Exposure',
      desc: 'Diversify across baskets of securities, sectors, and themes through flexible ETF CFD access.',
      icon: <Briefcase size={22} />,
      instruments: ['Tech', 'Energy', 'Healthcare', 'Global'],
      tone: 'bg-white',
      accent: 'text-zinc-900'
    },
    {
      title: 'Futures',
      label: 'Forward Markets',
      desc: 'Trade futures-linked CFDs across major commodities, indices, and financial products with deep liquidity support.',
      icon: <BarChart2 size={22} />,
      instruments: ['US Index', 'Oil', 'Metals', 'Rates'],
      tone: 'bg-[#eafaf1]',
      accent: 'text-[#004D34]'
    }
  ];

  return (
    <div className="bg-white text-black min-h-screen">
      
      {/* 1. Hero Section */}
      <section id="overview" className="relative pt-28 pb-16 md:pt-32 md:pb-20 overflow-hidden text-black min-h-[70vh] md:min-h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <img src="/assets/herooo.png" alt="Market Hero Background" className="w-full h-full object-cover object-center md:object-right" />
        </div>
        {/* Gradient: semi-transparent overlay on mobile, fades on desktop */}
        <div className="absolute inset-0 bg-white/40 md:bg-gradient-to-r md:from-white/90 md:via-white/50 md:to-transparent pointer-events-none" />

        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10 text-left w-full">
          <div className="max-w-2xl lg:max-w-3xl text-left">
            <motion.div 
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl lg:text-[clamp(3.5rem,4vw,4.5rem)] font-black uppercase tracking-tight mb-5 lg:mb-6 leading-tight lg:leading-[1.05] bg-gradient-to-r from-[#060F09] to-[#00ca73] bg-clip-text text-transparent inline-block font-montreal">
                Markets <br/>
                <span className="font-semibold">Across Global Markets</span>
              </h1>

              <p className="text-zinc-800 text-sm md:text-base lg:text-[clamp(1.125rem,1.5vw,1.25rem)] font-medium mb-8 lg:mb-10 leading-relaxed max-w-xl lg:max-w-2xl">
                Access over 1,000+ CFD instruments across Forex, Crypto, Stocks, and Commodities on premium ECN infrastructure.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <LiveMarketChart />

      <TradingViewMarkets />

      {/* 3. Market Sections */}
      <section id="instruments" className="py-10 bg-white text-black">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 space-y-7">
          {marketSections.map((market, idx) => (
            <motion.div
              key={market.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className={`${market.tone} rounded-[2rem] px-7 py-7 md:px-10 md:py-8`}
            >
              <div className={`grid grid-cols-1 lg:grid-cols-12 gap-6 items-center ${idx % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''}`}>
                <div className="lg:col-span-5">

                  <h3 className={`text-3xl md:text-4xl font-semibold uppercase tracking-tight mb-4 ${market.accent} font-montreal`}>{market.title}</h3>
                  <p className={`text-sm md:text-base leading-relaxed max-w-xl ${market.tone === 'bg-[#121212]' ? 'text-zinc-400' : 'text-zinc-600'}`}>
                    {market.desc}
                  </p>
                </div>

                <div className="lg:col-span-7">
                  <div className="flex flex-wrap gap-3 lg:justify-end">
                    {market.instruments.map((instrument) => (
                      <span
                        key={instrument}
                        className={`rounded-full px-5 py-3 text-xs font-black uppercase tracking-widest ${market.tone === 'bg-[#121212]' ? 'bg-white/10 text-white' : 'bg-white text-zinc-800 shadow-sm'}`}
                      >
                        {instrument}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. Transparent Pricing & Fees */}
      <section id="pricing" className="py-24 bg-zinc-50 border-b border-zinc-200">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            <div className="lg:col-span-5">
              <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight uppercase leading-[0.9] bg-gradient-to-r from-[#060F09] to-[#00ca73] bg-clip-text text-transparent inline-block font-montreal">
                We Believe in <br/>
                <span className="font-normal italic">Transparent Costs</span>
              </h2>
              <p className="text-zinc-600 text-base md:text-lg mb-8 leading-relaxed font-medium">
                Our pricing system ensures that your trading costs are always transparent and competitive. No hidden markups or sudden fees.
              </p>

              <ul className="space-y-4 mb-8">
                {[
                  'Competitive spreads', 'Low commissions', 'No hidden fees', 
                  'Swap-free account options', 'Clear overnight financing information'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-zinc-700">
                    <CheckCircle className="text-primary shrink-0" size={16} />
                    <span className="text-sm font-semibold">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: 'Spreads', desc: 'Ultra-low spreads starting from 0.0 pips across major trading instruments.', icon: "/icons/Spreads.png" },
                { title: 'Commissions', desc: 'Extremely competitive commission structures on raw-spread accounts from just $1.5.', icon: "/icons/Commissions.png" },
                { title: 'Overnight Swaps', desc: 'Clear, transparent swap costs computed directly inside the platform.', icon: "/icons/Overnight Swaps.png" },
                { title: 'Currency Conversion', desc: 'Transparent conversion rates with minimal margins applied on trades.', icon: "/icons/conversion.png" }
              ].map((fee, idx) => (
                <div key={idx} className="bg-white border border-zinc-200 rounded-3xl p-8 relative overflow-hidden shadow-sm hover:shadow-md transition-shadow group flex flex-col items-center text-center justify-center">
                  <div className="mb-6 group-hover:scale-110 transition-transform">
                    <img src={fee.icon} alt={fee.title} className="w-24 h-24 object-contain" />
                  </div>
                  <h4 className="text-lg font-black uppercase tracking-tight text-black mb-3">{fee.title}</h4>
                  <p className="text-zinc-600 text-sm leading-relaxed">{fee.desc}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* 5. Deposit & Withdrawal Section */}
      <section id="funding" className="py-24 bg-[#f4f7f6] text-black">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          
          <div className="text-center mb-16">

            <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight uppercase leading-[0.9] bg-gradient-to-r from-[#060F09] to-[#00ca73] bg-clip-text text-transparent inline-block font-montreal">
              Fast & Secure <span className="font-normal italic">Funding</span>
            </h2>
            <p className="text-zinc-500 text-lg md:text-xl font-medium max-w-2xl mx-auto">
              Fund your account instantly using trusted global and regional payment methods with zero deposit fees.
            </p>
          </div>

          {/* Payment Badges Grid */}
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 lg:gap-14 mb-16 w-full">
            {[
              { logo: '/icons/bank-svgrepo-com.svg', name: 'Bank Transfer' },
              { logo: '/icons/visa-svgrepo-com (1).svg', name: 'Visa' },
              { logo: '/icons/mastercard-old-svgrepo-com.svg', name: 'Mastercard' },
              { logo: '/icons/bitcoin-svgrepo-com.svg', name: 'Bitcoin' },
              { logo: '/icons/apple-pay-svgrepo-com (1).svg', name: 'Apple Pay' }
            ].map((pm, idx) => (
              <div key={idx} className="h-10 flex items-center justify-center transition-all cursor-default min-w-[80px]">
                <img src={pm.logo} alt={pm.name} className="max-w-full max-h-full object-contain filter opacity-80 hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>

          {/* Funding Benefits Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { title: 'Instant Deposits', desc: 'Fundings via cards or electronic payment systems hit your account instantly.' },
              { title: 'Fast Withdrawals', desc: 'Withdrawals are audited and processed rapidly within 1–24 hours.' },
              { title: 'Multi-Currencies', desc: 'Choose from multiple major base currencies (USD, EUR, GBP, BTC).' },
              { title: 'Zero Fees', desc: 'No transaction fees or surprise deductions applied on credit card deposits.' },
              { title: 'Global Accessibility', desc: 'Accessible worldwide with local bank integration setups.' }
            ].map((benefit, idx) => (
              <div key={idx} className="bg-white border border-zinc-100 rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <h4 className="text-sm font-bold uppercase tracking-tight text-zinc-800 mb-2">{benefit.title}</h4>
                <p className="text-zinc-500 text-xs leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

{/* 6. Economic Calendar & Events Section */}
       <section id="calendar-events" className="py-24 bg-white border-t border-zinc-200">
         <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
           <div className="text-center mb-12">
             <h2 className="text-h2 mb-6">
               Economic Calendar & Events
             </h2>
             <p className="text-zinc-600 text-base md:text-lg font-medium max-w-2xl mx-auto">
               Track key global economic events, central bank decisions, and market-moving releases in real time.
             </p>
           </div>

           <div className="bg-zinc-50 border border-zinc-200 rounded-[2rem] p-6 overflow-hidden" style={{ minHeight: '500px' }}>
             <EconomicCalendarWidget />
           </div>
         </div>
       </section>

{/* 7. VPS Showcase Section */}
       <section id="vps" className="py-24 bg-white border-t border-zinc-200">
         <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             <div className="order-2 lg:order-1 bg-zinc-50 border border-zinc-200 rounded-[2.5rem] p-6 relative overflow-hidden shadow-sm">
               <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 blur-[80px]" />
               <div className="flex items-center justify-between mb-8">
                 <div className="text-xs font-black uppercase tracking-wider text-zinc-500">Dedicated VPS Metrics</div>
                 <span className="w-2.5 h-2.5 rounded-full bg-primary animate-ping" />
               </div>

              <div className="space-y-6">
                {[
                  { label: 'Latency to RakizFX Servers', val: '< 0.8 ms', label2: 'Active EAs Running', val2: '99.99%' },
                  { label: 'Operating System Host', val: 'Windows Server 2022', label2: 'Virtual CPU Cores', val2: '4 Cores' }
                ].map((row, idx) => (
                  <div key={idx} className="grid grid-cols-2 gap-4 border-b border-zinc-200 pb-4 last:border-0 last:pb-0">
                    <div>
                      <div className="text-[10px] uppercase font-bold text-zinc-500 mb-1">{row.label}</div>
                      <div className="font-mono text-sm font-black text-black">{row.val}</div>
                    </div>
                    <div>
                      <div className="text-[10px] uppercase font-bold text-zinc-500 mb-1">{row.label2}</div>
                      <div className="font-mono text-sm font-black text-black">{row.val2}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h3 className="text-3xl md:text-5xl font-black uppercase mb-6 leading-tight bg-gradient-to-r from-[#060F09] to-[#00ca73] bg-clip-text text-transparent inline-block font-montreal">
                Automated Trading <br/><span className="font-normal italic">With Low Latency</span>
              </h3>
              <p className="text-zinc-600 text-base md:text-lg mb-8 leading-relaxed font-medium">
                Run Expert Advisors and automated strategies 24/7 using dedicated VPS infrastructure with reduced downtime and enhanced execution speed.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 8. Security Section */}
      <section id="security" className="py-24 relative overflow-hidden bg-white text-black border-t border-zinc-200">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight uppercase leading-[0.9] bg-gradient-to-r from-[#060F09] to-[#00ca73] bg-clip-text text-transparent inline-block font-montreal">
                Your Security <br/><span className="font-normal italic">Comes First</span>
              </h2>
              <p className="text-zinc-600 text-base md:text-lg mb-8 leading-relaxed font-medium">
                Our strict financial custody architectures safeguard your assets through regulatory segregations, encrypted networks, and real-time ledger reviews.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                "Segregated client funds",
                "Multi-layer encryption",
                "Two-factor authentication",
                "Negative balance protection",
                "Secure payment gateways"
              ].map((feat, idx) => (
                <div key={idx} className="bg-gradient-to-b from-white to-white hover:from-[#CDEEDB] hover:to-white border border-zinc-200/80 hover:border-[#CDEEDB]/60 shadow-[0_10px_30px_rgba(0,0,0,0.01)] transition-all duration-300 rounded-2xl p-6 flex items-start gap-4 cursor-default">
                  <CheckCircle className="text-[#00ca73] shrink-0 mt-0.5" size={16} />
                  <div>
                    <h4 className="text-sm font-black text-zinc-800 uppercase tracking-wider">{feat}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 9. CTA Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="bg-[#121212] border border-white/5 rounded-[2rem] md:rounded-[3rem] p-8 md:p-20 text-center relative overflow-hidden shadow-2xl">
            <div className="relative z-10">
              <div className="text-primary font-black text-[10px] uppercase tracking-[0.4em] mb-8">Start Your Journey</div>
              <h2 className="text-4xl md:text-7xl font-bold uppercase mb-6 tracking-tight leading-[0.9] bg-gradient-to-r from-white to-[#00ca73] bg-clip-text text-transparent inline-block font-montreal">
                Start Your Trading <br/>Journey Today
              </h2>
              <p className="text-zinc-400 text-lg md:text-xl font-medium mb-12 max-w-3xl mx-auto leading-relaxed">
                Open your live trading account and access global financial markets with professional trading tools, advanced platforms, and competitive conditions.
              </p>
              
              <div className="flex flex-wrap justify-center gap-5">
                <button className="bg-primary text-black font-black px-10 py-5 text-xs uppercase tracking-widest rounded-2xl hover:scale-105 transition-transform shadow-lg cursor-pointer">
                  Open Live Account
                </button>
                <button className="bg-transparent border border-white/20 text-white font-black px-10 py-5 text-xs uppercase tracking-widest rounded-2xl hover:bg-white/5 transition-colors cursor-pointer">
                  Try Free Demo
                </button>
                <button className="bg-white text-black font-black px-10 py-5 text-xs uppercase tracking-widest rounded-2xl hover:bg-zinc-100 transition-colors shadow-lg cursor-pointer">
                  Explore Markets
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Footer Risk Disclaimer */}
      <section className="py-12 bg-zinc-50 border-t border-zinc-200 text-zinc-500 text-xs">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center leading-relaxed">
          <p className="max-w-4xl mx-auto">
            Trading CFDs involves significant risk and may not be suitable for all investors. Leveraged products can result in losses exceeding deposits in certain jurisdictions. Please ensure you fully understand the risks involved before trading.
          </p>
        </div>
      </section>

    </div>
  );
}
