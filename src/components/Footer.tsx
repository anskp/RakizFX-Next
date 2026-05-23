"use client";
import React from 'react';
import { CreditCard, Landmark, Bitcoin, QrCode, Zap, Wallet, ShieldEllipsis, ShieldCheck, Landmark as BankIcon, Scale } from 'lucide-react';
import { motion } from 'motion/react';
import Galaxy from './Galaxy';

export function Payments() {
  const partners = [
    'nab', 'DBS', 'Maybank', 'PayPal', 'NETELLER', 'Skrill', 'VISA', 'Mastercard', 'Perfect Money'
  ];

  return (
    <section id="payments" className="py-24 bg-[#121212] border-b border-white/5">
      <div className="max-w-[1400px] mx-auto px-12">
        <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-10 transition-all duration-500">
          {partners.map((p) => (
            <span key={p} className="text-2xl font-black tracking-tighter text-white uppercase italic">{p}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ArchitectureReliability() {
  const pillars = [
    { title: 'Best Trading Experience', img: '/assets/1_Best_Trading_Experience.png' },
    { title: 'Lowest Spreads', img: '/assets/2_Lowest_Spreads.png' },
    { title: 'Excellent Trading Conditions', img: '/assets/3_Excellent_Trading_Conditions.png' },
    { title: 'Wide Selection of Instruments', img: '/assets/4_Wide_Selection_of_Instruments.png' },
    { title: 'Dedicated Customer Support', img: '/assets/5_Dedicated_Customer_Support.png' },
  ];

  return (
    <section id="regulation" className="py-40 bg-white relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-12 relative z-10">
        <div className="max-w-3xl mb-32">
          <h2 className="text-5xl md:text-7xl font-bold text-black leading-tight uppercase mb-8 tracking-tighter">
            Architectural <br/>
            Platform Reliability
          </h2>
          <div className="w-24 h-1.5 bg-primary mb-10" />
          <p className="text-zinc-500 text-xl leading-relaxed font-medium">5 Pillars of Our Institutional Core. We stand on a foundation of transparency, technology, and trust.</p>
        </div>

        <div className="flex flex-col gap-10">
          {pillars.map((p, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-[2.5rem] shadow-2xl transition-all duration-700 hover:-translate-y-2"
            >
              <img 
                src={p.img} 
                alt={p.title} 
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.02]" 
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Send, Globe, MessageCircle } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#121212] pt-24 pb-12 border-t border-white/5 relative z-10 font-sans">
      <div className="max-w-[1400px] mx-auto px-8 md:px-12">
        
        {/* Main Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-x-8 gap-y-16 mb-20">
          
          {/* Column 1: Logo & Contact */}
          <div className="lg:col-span-1">
            <img src="/assets/logo_main logo( white text).svg" alt="RakizFx Logo" className="h-12 w-auto mb-8" />
            <div className="text-zinc-400 text-sm leading-relaxed mb-8">
              RakizFx<br/>
              8th floor, CI Tower<br/>
              Corniche Road<br/>
              PO Box 93894<br/>
              Abu Dhabi<br/>
              United Arab Emirates
            </div>
            <div className="text-zinc-400 text-sm leading-relaxed mb-8">
              Trading Services<br/>
              <a href="mailto:ts@rakizfx.com" className="text-primary hover:text-primary/80 transition-colors">ts@rakizfx.com</a><br/>
              +971 2 657 2414
            </div>
            <a href="#" className="text-white font-bold text-sm hover:text-primary transition-colors">Contact RakizFx</a>
          </div>

          {/* Column 2: Trade */}
          <div>
            <h4 className="text-white font-bold text-base mb-6">Trade</h4>
            <ul className="flex flex-col gap-4">
              {['Platforms', 'High-volume rebates', 'Demo account', 'MT5', 'MT4', 'Analysis tools', 'Institutional', 'Partnerships'].map(link => (
                <li key={link}><a href="#" className="text-zinc-400 hover:text-white text-sm transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>

          {/* Column 3: Markets */}
          <div>
            <h4 className="text-white font-bold text-base mb-6">Markets</h4>
            <ul className="flex flex-col gap-4">
              {['Stock investing', 'Indices', 'Forex', 'Equities & ETFs', 'Cryptos', 'Bonds', 'Commodities', 'Market information'].map(link => (
                <li key={link}><a href="#" className="text-zinc-400 hover:text-white text-sm transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>

          {/* Column 4: Learn */}
          <div>
            <h4 className="text-white font-bold text-base mb-6">Learn</h4>
            <ul className="flex flex-col gap-4">
              {['How to trade', 'Video library', 'MT5 tutorials', 'MT4 tutorials', 'RakizFx platform tutorials', 'Platform user guide', 'Financial glossary', 'FAQs'].map(link => (
                <li key={link}><a href="#" className="text-zinc-400 hover:text-white text-sm transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>

          {/* Column 5: Company */}
          <div>
            <h4 className="text-white font-bold text-base mb-6">Company</h4>
            <ul className="flex flex-col gap-4">
              {['Careers', 'Contact', 'Speak up'].map(link => (
                <li key={link}><a href="#" className="text-zinc-400 hover:text-white text-sm transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider & Sub Footer */}
        <div className="border-t border-white/10 py-8 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            {[
              { icon: Globe, href: '#' },
              { icon: MessageCircle, href: '#' },
              { icon: Send, href: '#' },
            ].map((social, i) => (
              <a key={i} href={social.href} className="w-8 h-8 bg-zinc-200 text-black rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <social.icon size={14} fill="currentColor" />
              </a>
            ))}
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm">
            {['Legal', 'Cookies', 'Privacy policy', 'Fraud warning', 'Regulation', 'User terms'].map(link => (
              <a key={link} href="#" className="text-zinc-300 hover:text-white transition-colors">{link}</a>
            ))}
          </div>

          <div className="text-zinc-400 text-sm">
            &copy; RakizFx 2026
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div className="border-t border-white/10 pt-10 text-[11px] text-zinc-500 leading-[1.8] space-y-4 text-justify">
          <p>
            Investing in CFDs involves a high degree of risk that you will lose your money due to the use of leverage, particularly in fast moving markets, where a relatively small movement in the price can lead to a proportionately larger movement in the value of your investment. This can result in loses that exceed the funds in your account. You should consider whether you understand how CFDs work and you should seek independent advice if necessary.
          </p>
          <p>
            RakizFx L.L.C – S.P.C (“RakizFx”), a limited liability company – sole proprietorship company incorporated under United Arab Emirates law. Registered under Commercial License No.1190047. RakizFx L.L.C S.P.C is regulated and authorised in the UAE by the Capital Market Authority (CMA) under Category 1 License No.305027 (Trading Broker, Trading and Clearing Broker, Trading Broker in the International Markets, Trading Broker of OTC Derivatives and Currencies in the Spot Market, Financial Products Dealer) and Category 5 License No.20200000217 (Introduction). Registered Office: 8th Floor, CI Tower, Corniche Road, P.O. Box 93894, Abu Dhabi, United Arab Emirates.
          </p>
          <p>
            The information presented is not directed at residents of any particular country outside the United Arab Emirates and is not intended for distribution to, or use by, any person in any country where the distribution or use is contrary to local law or regulation.
          </p>
          <p>
            RakizFx is an execution only service provider and does not provide advice. RakizFx may publish general market commentary from time to time. Where it does, the material published does not constitute advice, or a solicitation, or a recommendation to a transaction in any financial instrument. RakizFx accepts no responsibility for any use of the content presented and any consequences of that use. No representation or warranty is given as to the completeness of this information. Anyone acting on the information provided does so at their own risk.
          </p>
        </div>

      </div>
    </footer>
  );
}
