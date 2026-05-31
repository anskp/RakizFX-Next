"use client";
import React, { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Activity } from 'lucide-react';

export function TradingViewMarkets() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    // Clear previous widget
    containerRef.current.innerHTML = '';
    
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js';
    script.type = 'text/javascript';
    script.async = true;
    script.innerHTML = JSON.stringify({
      "colorTheme": "light",
      "dateRange": "12M",
      "showChart": true,
      "locale": "en",
      "width": "100%",
      "height": 550,
      "largeChartUrl": "",
      "isTransparent": false,
      "showSymbolLogo": true,
      "showFloatingTooltip": false,
      "plotLineColorGrowing": "rgba(0, 202, 115, 1)",
      "plotLineColorFalling": "rgba(239, 68, 68, 1)",
      "gridLineColor": "rgba(0, 0, 0, 0.05)",
      "scaleFontColor": "#71717a",
      "belowLineFillColorGrowing": "rgba(0, 202, 115, 0.12)",
      "belowLineFillColorFalling": "rgba(239, 68, 68, 0.12)",
      "belowLineFillColorGrowingBottom": "rgba(0, 202, 115, 0)",
      "belowLineFillColorFallingBottom": "rgba(239, 68, 68, 0)",
      "symbolActiveColor": "rgba(0, 202, 115, 0.08)",
      "tabs": [
        {
          "title": "Forex",
          "symbols": [
            { "s": "FX:EURUSD", "d": "EUR to USD" },
            { "s": "FX:GBPUSD", "d": "GBP to USD" },
            { "s": "FX:USDJPY", "d": "USD to JPY" },
            { "s": "FX:AUDUSD", "d": "AUD to USD" },
            { "s": "FX:USDCAD", "d": "USD to CAD" }
          ]
        },
        {
          "title": "Indices",
          "symbols": [
            { "s": "FOREXCOM:SPXUSD", "d": "S&P 500" },
            { "s": "FOREXCOM:NSXUSD", "d": "Nasdaq 100" },
            { "s": "FOREXCOM:DJI", "d": "Dow 30" },
            { "s": "INDEX:DEU40", "d": "DAX 40" }
          ]
        },
        {
          "title": "Commodities",
          "symbols": [
            { "s": "TVC:GOLD", "d": "Gold" },
            { "s": "TVC:SILVER", "d": "Silver" },
            { "s": "EASYMARKETS:OILUSD", "d": "Crude Oil" }
          ]
        },
        {
          "title": "Crypto",
          "symbols": [
            { "s": "BITSTAMP:BTCUSD", "d": "Bitcoin" },
            { "s": "BITSTAMP:ETHUSD", "d": "Ethereum" },
            { "s": "BINANCE:SOLUSDT", "d": "Solana" }
          ]
        }
      ]
    });
    
    containerRef.current.appendChild(script);
  }, []);

  return (
    <section className="py-24 section-bg-tactile relative overflow-hidden border-t border-zinc-200">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Text */}
          <div className="lg:col-span-5 flex flex-col justify-center text-left relative z-20">
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-[#00ca73] text-[10px] font-black uppercase tracking-[0.3em] block mb-3">
                Live Pricing Rails
              </span>
              <h2 className="text-h2 mb-6 uppercase">
                Every market is <br/>
                <span className="font-normal italic">waiting for you</span>
              </h2>
              <p className="text-zinc-600 text-base md:text-lg mb-10 leading-relaxed font-medium">
                Institutional-grade pricing and analysis powered by TradingView. Access over 500+ instruments with millisecond-perfect execution protocols and sub-10ms latency.
              </p>
              <button className="bg-black text-white px-8 py-5 text-xs uppercase font-bold tracking-widest hover:bg-primary hover:text-black transition-all flex items-center gap-3 rounded-xl shadow-md group cursor-pointer self-start">
                Explore All Asset Groups <ArrowRight size={16} />
              </button>
            </motion.div>
          </div>

          {/* Right Chart */}
          <div className="lg:col-span-7 w-full relative z-20">
            <div className="absolute -top-6 right-2 z-30">
              <span className="text-[9px] text-zinc-400 font-bold uppercase tracking-widest bg-white px-2 py-0.5 rounded shadow-sm border border-zinc-150">Indicative Pricing Only</span>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="card-3d-apple overflow-hidden p-1 relative w-full"
            >
              <div className="tradingview-widget-container w-full rounded-2xl overflow-hidden" ref={containerRef}>
                <div className="tradingview-widget-container__widget"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
