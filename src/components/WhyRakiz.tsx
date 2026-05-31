"use client";
import React from 'react';
import { motion } from 'motion/react';

export function WhyRakiz() {
  const reasons = [
    {
      icon: "/icons/instant.png",
      title: "Ultra-Low Latency",
      desc: "Experience millisecond-perfect execution speeds under 0.8ms on our optimized ECN bridge networks."
    },
    {
      icon: "/icons/lockerrr.png",
      title: "Segregated Tier-1 Custody",
      desc: "Your capital is kept fully segregated with top-tier global banks, ensuring maximum asset protection."
    },
    {
      icon: "/icons/globally.png",
      title: "Institutional Raw Spreads",
      desc: "Access wholesale financial market pricing with raw spreads starting from 0.0 pips and direct ECN routing."
    },
    {
      icon: "/icons/24x7mic.png",
      title: "24/7 Expert Support",
      desc: "Professional multi-lingual support engineers are always on standby to resolve technical queries in real-time."
    }
  ];

  return (
    <section id="why-rakiz" className="py-24 section-bg-tactile relative overflow-hidden border-t border-zinc-200/50">
      {/* Premium accent lights */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#CDEEDB]/10 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-primary/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="container-standard relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">

          <h2 className="text-h2 mb-5 uppercase text-black">
            Why RakizFx?
          </h2>
          <p className="text-body text-zinc-600">
            We combine high-performance trading infrastructure with institutional-grade security architecture to deliver an unmatched workspace for modern global investors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="card-3d-apple p-8 flex flex-col items-center justify-center text-center cursor-default"
            >
              <div className="mb-6 transition-transform">
                <img src={r.icon} alt={r.title} className="w-24 h-24 object-contain" />
              </div>

              <h3 className="text-lg font-bold uppercase tracking-tight text-zinc-900 mb-3 font-montreal">
                {r.title}
              </h3>

              <p className="text-zinc-600 text-sm leading-relaxed">
                {r.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
