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
      "height": 660,
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
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="container-standard relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-end gap-12 mb-16">
          <div className="max-w-3xl text-center lg:text-left">
            <h2 className="text-h2 mb-6 mt-2">
              Every market is <br/>
              waiting for you
            </h2>
            <p className="text-body text-zinc-500">
              Institutional-grade pricing and analysis powered by TradingView. Access over 500+ instruments with millisecond-perfect execution protocols.
            </p>
          </div>
          <button className="bg-zinc-100 border border-zinc-200 text-zinc-800 px-10 py-5 text-[12px] uppercase font-bold tracking-[0.3em] hover:bg-primary hover:text-black hover:border-primary transition-all flex items-center gap-4 rounded-xl shadow-sm hover:shadow-[0_10px_20px_rgba(0,202,115,0.2)] group cursor-pointer">
             Explore All Asset Groups <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="relative w-full">
          <div className="absolute -top-10 right-0 z-10">
            <span className="text-[10px] text-zinc-400 font-bold uppercase tracking-widest">Indicative Pricing Only</span>
          </div>
          <div className="tradingview-widget-container w-full" ref={containerRef}>
            <div className="tradingview-widget-container__widget"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
