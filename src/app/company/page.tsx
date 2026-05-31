"use client";

import React from 'react';
import { motion } from 'motion/react';
import { 
  Building2, Shield, Users, Award, 
  MapPin, CheckCircle, ArrowRight, Cpu 
} from 'lucide-react';

export default function CompanyPage() {
  return (
    <div className="bg-white text-zinc-900 min-h-screen">
      
      {/* 2. Core Corporate Values (LIGHT STYLE) */}
      <section className="pt-40 pb-20 md:pb-24 section-bg-tactile">
        <div className="container-standard">
          
          <div className="text-center mb-20">
            <h2 className="text-h2 mb-6">
              Built On <span className="font-normal italic">Solid Principles</span>
            </h2>
            <p className="text-zinc-500 text-lg md:text-xl font-medium max-w-2xl mx-auto">
              Our trading solutions are centered around security, latency optimization, and absolute clarity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: "/icons/Absolute_Transparency.png",
                title: "Absolute Transparency",
                desc: "Every transaction, custody pool, and overnight calculation is handled with strict accounting standards. Client assets are kept completely segregated at tier-1 custodial global banking groups, fully separated from corporate accounts."
              },
              {
                icon: "/icons/Engineered_Performance.png",
                title: "Engineered Performance",
                desc: "We focus heavily on technical infrastructure. Our servers maintain high-speed fiber interlinkages to aggregate liquidity feeds directly from global LPs, allowing execution metrics to comfortably sit below the 40ms threshold."
              },
              {
                icon: "/icons/Institutional_Custody.png",
                title: "Institutional Custody",
                desc: "Client funds are secured with deep multi-layer encryption architectures. We utilize leading regulatory protocols, negative balance safety nets, and strict withdrawal audits to protect active capital pools."
              },
              {
                icon: "/icons/Regulatory_Standards.png",
                title: "Regulatory Standards",
                desc: "Adhering to clean global financial guidelines and anti-money laundering policies. Our operations undergo routine third-party audits to secure and maintain institutional licensing compliance."
              }
            ].map((card, idx) => (
              <div key={idx} className="card-3d-apple p-8 md:p-12 flex flex-col items-center justify-center text-center cursor-default">
                <div>
                  <img src={card.icon} alt={card.title} className="w-24 h-24 object-contain mb-6 mx-auto" />
                  <h3 className="text-2xl font-bold uppercase tracking-tight mb-4 text-black inline-block font-montreal">{card.title}</h3>
                  <p className="text-[#66666f] text-sm leading-relaxed">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Global Locations (LIGHT STYLE) */}
      <section id="contact" className="section-padding section-bg-tactile border-t border-zinc-200/50">
        <div className="container-standard">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-h2 mb-6">
                Our Global <br/><span className="font-normal italic">Presence</span>
              </h2>
              <p className="text-zinc-600 text-base md:text-lg mb-8 leading-relaxed font-medium">
                With corporate offices, support centers, and server nodes located across major global trading regions, we maintain low-latency connections and localized 24/7 service hubs.
              </p>

              <div className="space-y-4">
                {[
                  "Server centers in London (LD4) and New York (NY4)",
                  "Customer experience and strategy desks in Singapore",
                  "Algorithmic support networks in Tokyo",
                  "Compliance audits based in Sydney"
                ].map((loc, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-zinc-700">
                    <CheckCircle className="text-primary shrink-0" size={16} />
                    <span className="text-sm font-semibold">{loc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual World Map Mock (LIGHT CARD SHADOW) */}
            <div className="card-3d-apple overflow-hidden relative p-0 flex items-center justify-center min-h-[450px] aspect-[4/3] w-full">
              <img 
                src="/assets/latency_map.png" 
                alt="RakizFX Global Low-Latency Node Network" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </section>

      {/* 5. Careers Section (LIGHT STYLE) */}
      <section id="careers" className="section-padding section-bg-tactile border-t border-zinc-200/50">
        <div className="container-standard">
          
          <div className="text-center mb-20">
            <h2 className="text-h2 mb-6">
              Join Our <span className="font-normal italic">Innovators</span>
            </h2>
            <p className="text-zinc-500 text-lg md:text-xl font-medium max-w-3xl mx-auto">
              We are constantly seeking outstanding compliance minds, network engineers, and client strategists to accelerate global infrastructure growth.
            </p>
          </div>

          <div className="space-y-4 max-w-4xl mx-auto">
            {[
              { role: "Infrastructure Systems Engineer", dept: "Engineering / Server Ops", location: "London / Singapore" },
              { role: "Institutional Account Executive", dept: "Desk Support / Strategy", location: "Tokyo / Sydney" },
              { role: "Corporate Compliance Lead", dept: "Legal & Audits / Compliance", location: "Singapore" }
            ].map((job, idx) => (
              <div key={idx} className="bg-white border border-zinc-200 rounded-2xl p-6 flex flex-wrap justify-between items-center cursor-pointer group hover:border-primary/40 transition-colors shadow-sm">
                <div>
                  <h4 className="text-lg font-bold uppercase tracking-wider mb-1 text-black inline-block font-montreal">{job.role}</h4>
                  <div className="text-zinc-500 text-[10px] uppercase font-black tracking-widest mt-1">
                    {job.dept} <span className="text-zinc-600 px-1.5">•</span> {job.location}
                  </div>
                </div>
                <div className="flex items-center gap-2 text-zinc-900 font-bold text-xs uppercase tracking-widest group-hover:text-primary transition-colors">
                  <span>Apply Role</span>
                  <ArrowRight size={14} />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
