"use client";
import React, { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { BarChart2 } from 'lucide-react';

declare global {
  interface Window {
    TradingView: any;
  }
}

export function LiveMarketChart() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only load script if not already loaded
    if (!document.getElementById('tradingview-widget-script')) {
      const script = document.createElement('script');
      script.id = 'tradingview-widget-script';
      script.src = 'https://s3.tradingview.com/tv.js';
      script.async = true;
      script.onload = initWidget;
      document.head.appendChild(script);
    } else {
      initWidget();
    }

    function initWidget() {
      if (window.TradingView && containerRef.current) {
        new window.TradingView.widget({
          "autosize": true,
          "symbol": "FX:EURUSD",
          "interval": "60",
          "timezone": "Etc/UTC",
          "theme": "light",
          "style": "1",
          "locale": "en",
          "enable_publishing": false,
          "backgroundColor": "rgba(255, 255, 255, 1)",
          "gridColor": "rgba(240, 243, 250, 0)",
          "hide_top_toolbar": false,
          "hide_legend": false,
          "save_image": false,
          "container_id": containerRef.current.id,
          "allow_symbol_change": true,
          "calendar": false,
          "studies": [
            "Volume@tv-basicstudies"
          ]
        });
      }
    }
  }, []);

  return (
    <section className="py-24 bg-white relative overflow-hidden border-t border-zinc-200">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Text */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight uppercase leading-[1.1] text-black">
                Track Real-Time <br/>
                <span className="text-[#00ca73] font-normal italic">Market Movements</span>
              </h2>
              <p className="text-zinc-600 text-base md:text-lg mb-8 leading-relaxed font-medium">
                Access professional-grade candlestick charts with multiple timeframes, from 1-minute scalping to daily analysis. Draw, analyze, and execute with precision directly from our advanced interface.
              </p>
              <button className="bg-black text-white px-8 py-4 text-xs uppercase font-bold tracking-widest hover:bg-[#00ca73] transition-colors flex items-center gap-3 rounded-xl shadow-md group cursor-pointer">
                Open Full Chart <BarChart2 size={16} className="group-hover:scale-110 transition-transform" />
              </button>
            </motion.div>
          </div>

          {/* Right Chart */}
          <div className="lg:col-span-8 h-[500px] md:h-[600px] bg-white rounded-3xl border border-zinc-200 shadow-xl overflow-hidden p-1 relative z-20">
            <div id="tv_chart_container_markets" ref={containerRef} className="w-full h-full rounded-2xl overflow-hidden" />
          </div>
        </div>
      </div>
    </section>
  );
}
