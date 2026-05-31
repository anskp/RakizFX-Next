"use client";

import React from 'react';
import { motion } from 'motion/react';
import {
  Users, Handshake, Percent, TrendingUp, BarChart3,
  Globe, CheckCircle, ArrowRight, Award
} from 'lucide-react';

export default function PartnersPage() {
  return (
    <div className="bg-white text-zinc-900 min-h-screen">

      {/* 2. Partnership Programs Grid (LIGHT STYLE) */}
      <section id="programs" className="pt-40 pb-20 section-bg-tactile border-b border-zinc-100">
        <div className="container-standard">

          <div className="text-center mb-20">
            <h2 className="text-h2 mb-6">
              Our Partnership <br /><span className="font-normal italic">Channels</span>
            </h2>
            <p className="text-zinc-500 text-lg md:text-xl font-medium max-w-2xl mx-auto">
              Select the professional growth model that aligns with your network and business strategy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Introducing Broker (IB)",
                desc: "Earn high rebate yields on every single trade referred. Access customized client spreads, multi-level payment setups, and premium backend dashboards.",
                perks: ["per standard lot rebate", "Multi-tiered affiliate structures", "Daily rebate payouts directly in app"]
              },
              {
                title: "CPA Affiliate Program",
                desc: "Get industry-leading fixed payouts for introducing active depositors. Benefit from advanced landing pages, high-converting banners, and weekly audits.",
                perks: ["High CPA commission per active user", "Exclusive localized marketing packs", "Dedicated individual account manager"]
              }
            ].map((program, idx) => (
              <div key={idx} className="card-3d-apple p-8 md:p-10 flex flex-col justify-between group cursor-default">
                <div>
                  <h3 className="text-2xl font-bold uppercase tracking-tight mb-4 text-black inline-block font-montreal">{program.title}</h3>
                  <p className="text-zinc-600 text-sm leading-relaxed mb-8">{program.desc}</p>
                </div>

                <div>
                  <ul className="space-y-3 mb-8 border-t border-zinc-200/80 pt-6">
                    {program.perks.map((perk, pIdx) => (
                      <li key={pIdx} className="flex items-center gap-3 text-zinc-700 text-xs font-semibold">
                        <CheckCircle className="text-primary shrink-0" size={14} />
                        <span>{perk}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center gap-2 text-zinc-900 font-bold text-xs uppercase tracking-widest group-hover:text-primary transition-colors cursor-pointer">
                    <span>Apply to Channel</span>
                    <ArrowRight size={14} />
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. Partner Tracking Dashboard (LIGHT STYLE) */}
      <section className="section-padding section-bg-tactile">
        <div className="container-standard">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

            <div className="lg:col-span-5">
              <h2 className="text-h2 mb-6">
                Advanced Partner <br /><span className="font-normal italic">Portal</span>
              </h2>
              <p className="text-zinc-600 text-base md:text-lg mb-8 leading-relaxed font-medium">
                Our leading affiliate portal gives you real-time data visualizers, transparent payout calculations, and customizable localized resources to supercharge your client conversions.
              </p>

              <div className="space-y-4">
                {[
                  "Real-time referral link metrics",
                  "Transparent multi-tier payout matrices",
                  "Fast automated weekly reward audits",
                  "Multilingual marketing material templates"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-zinc-700">
                    <CheckCircle className="text-primary shrink-0" size={16} />
                    <span className="text-sm font-semibold">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Mock Dashboard Widget (LIGHT CONTAINER WITH SHADOW) */}
            <div className="lg:col-span-7 card-3d-apple overflow-hidden relative p-0 flex items-center justify-center min-h-[450px] aspect-[4/3]">
              <img
                src="/assets/partnerDashboard_bgless.png"
                alt="RakizFX Institutional Partner Portal Dashboard"
                className="w-full h-full object-cover"
              />
            </div>

          </div>
        </div>
      </section>

      {/* 4. Why Partner With Us (LIGHT STYLE) */}
      <section className="section-padding section-bg-tactile border-t border-zinc-200/50">
        <div className="container-standard">

          <div className="text-center mb-20">
            <h2 className="text-h2 mb-6">
              Why Partner With <span className="font-normal italic">RakizFX</span>
            </h2>
            <p className="text-zinc-500 text-lg md:text-xl font-medium max-w-3xl mx-auto">
              Our institutional reputation, deep liquidity, and support mechanisms form a foundation for your business growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "/icons/Leading_Reputation.png",
                title: "Leading Reputation",
                desc: "Partner with a highly trusted multi-asset broker. Premium security standards and operational transparency."
              },
              {
                icon: "/icons/Flexible_Rebate_Schemes.png",
                title: "Flexible Rebate Schemes",
                desc: "Bespoke commission systems custom-tailored to suit different client strategies and referrers' business plans."
              },
              {
                icon: "/icons/Premium_Reporting.png",
                title: "Premium Reporting",
                desc: "Fully detailed analytical panels to trace click conversions, active deposits, volume generated, and commissions."
              },
              {
                icon: "/icons/Dedicated_Support_Team.png",
                title: "Dedicated Support Team",
                desc: "Experienced individual partner advisors available 24/7 to support campaigns and operational demands."
              }
            ].map((card, idx) => (
              <div key={idx} className="card-3d-apple p-8 flex flex-col items-center justify-center text-center cursor-default">
                <img src={card.icon} alt={card.title} className="w-24 h-24 object-contain mb-6 mx-auto" />
                <h3 className="text-lg font-bold uppercase tracking-tight text-zinc-900 mb-3 font-montreal">{card.title}</h3>
                <p className="text-[#66666f] text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. CTA Section */}
      <section className="py-24 px-6 section-bg-tactile">
        <div className="max-w-[1200px] mx-auto">
          <div className="bg-gradient-to-b from-[#060F09] to-black border border-white/5 rounded-[3rem] p-10 md:p-20 text-center relative overflow-hidden shadow-2xl text-white">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 blur-[120px] pointer-events-none rounded-full" />
            <div className="relative z-10">
              <h2 className="text-h2-light mb-6 text-white">
                Start Your Partnership <br />Journey Today
              </h2>
              <p className="text-zinc-400 text-lg md:text-xl font-medium mb-12 max-w-3xl mx-auto leading-relaxed">
                Contact our relationship team and custom design a premium compensation model that matches your volume and targets.
              </p>

              <div className="flex flex-wrap justify-center gap-5">
                <button className="bg-primary text-black font-black px-10 py-5 text-xs uppercase tracking-widest rounded-2xl shadow-lg cursor-pointer">
                  Become a Partner
                </button>
                <button className="bg-transparent border border-white/20 text-white font-black px-10 py-5 text-xs uppercase tracking-widest rounded-2xl hover:bg-white/5 transition-colors cursor-pointer">
                  Contact Relationship Desk
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
