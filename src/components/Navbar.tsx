"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, BarChart2, Boxes, LineChart, Users, BadgeDollarSign, Wallet, Monitor, Copy, Activity, Handshake, Percent, Building2, Headset, Briefcase, User, LogIn, Search, Download } from 'lucide-react';
import { cn } from '@/lib/utils';

interface NavLink {
  name: string;
  href: string;
  dropdown?: {
    title: string;
    desc: string;
    icon: React.ReactNode;
    badge?: string;
    href?: string;
  }[];
}

const LogoSVG = ({ isDark }: { isDark: boolean }) => (
  <svg 
    id="Layer_1" 
    data-name="Layer 1" 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="108 114 230 46"  
    className="h-6 md:h-8 w-auto block transition-all duration-300"
  >
    <g className={isDark ? "fill-zinc-800" : "fill-white"}>
      <path d="M174.54,157.15v-36.11h13.64c7.74,0,12.34,4.1,12.34,10.84,0,4.99-2.5,8.59-6.99,10.04l7.34,15.23h-5.44l-6.74-14.28h-9.24v14.28h-4.89ZM179.44,138.52h8.79c4.55,0,7.14-2.45,7.14-6.59s-2.7-6.49-7.19-6.49h-8.74v13.09Z"/>
      <path d="M204.21,150.36c0-4.5,3.35-7.29,9.09-7.74l7.69-.6v-.7c0-4.1-2.45-5.54-5.74-5.54-3.95,0-6.19,1.75-6.19,4.69h-4.1c0-5.09,4.2-8.44,10.49-8.44s10.14,3.2,10.14,9.79v15.33h-4l-.5-3.95c-1.25,2.8-4.6,4.55-8.54,4.55-5.24,0-8.34-2.95-8.34-7.39ZM221.04,146.61v-1.3l-6.24.5c-4.15.4-5.84,2-5.84,4.4,0,2.6,1.9,3.9,4.94,3.9,4.45,0,7.14-2.9,7.14-7.49Z"/>
      <polygon points="252.61 132.73 246.72 132.73 235.88 144.21 235.88 120.39 231.18 120.39 231.18 157.15 235.88 157.15 235.88 150.21 240.02 145.86 252.61 132.73"/>
      <polygon points="240.02 145.86 247.17 157.15 252.56 157.15 245.42 145.86 240.02 145.86"/>
      <path d="M255.66,123.84c0-1.75,1.4-3.1,3.1-3.1s3.1,1.35,3.1,3.1-1.4,3.1-3.1,3.1-3.1-1.4-3.1-3.1ZM256.46,132.73h4.69v24.42h-4.69v-24.42Z"/>
      <path d="M266.45,157.15v-3.8l13.19-16.68h-13.19v-3.95h19.03v3.85l-13.29,16.63h13.29v3.95h-19.03Z"/>
      <path d="M296.46,141.82v15.33h-4.89v-36.11h21.78v4.5h-16.88v11.84h14.19v4.45h-14.19Z"/>
      <g>
        <polygon points="331.3 148.63 325.95 148.63 332.11 157.15 337.46 157.15 331.3 148.63"/>
        <polygon points="336.45 132.73 336.45 132.73 332.14 132.73 326.1 141.82 319.9 132.73 314.46 132.73 322.95 145.06 314.41 157.15 316.42 157.15 319.04 157.15 319.78 157.15 337.46 132.73 336.45 132.73"/>
      </g>
      <path d="M157.19,157.15h-10.66l-16.62-16.64v-6.61h10.04c3.15,0,5.71-2.56,5.71-5.71s-2.56-5.71-5.71-5.71h-24.07l-7.55-7.55h31.61c7.31,0,13.26,5.95,13.26,13.26,0,6.8-5.16,12.43-11.77,13.17l15.76,15.79Z"/>
    </g>
    <g className="fill-[#00ca73]">
      <polygon points="126.66 125.91 126.66 157.15 119.12 157.15 119.12 131.54 126.66 125.91"/>
      <polygon points="115.88 133.93 115.88 157.15 108.33 157.15 108.33 139.56 115.88 133.93"/>
    </g>
  </svg>
);

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  const isLightBgPage = pathname === '/partners' || pathname === '/company' || pathname === '/market' || pathname === '/trading';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: NavLink[] = [
    {
      name: 'Trading',
      href: '/trading',
      dropdown: [
        { title: 'Overview', desc: 'Access 1,000+ CFDs across global markets', icon: <BarChart2 size={20} strokeWidth={1.5} />, href: '/trading#overview' },
        { title: 'Trading Accounts', desc: 'Standard, Raw Spread, and Islamic accounts', icon: <Users size={20} strokeWidth={1.5} />, href: '/trading#accounts' },
        { title: 'Platforms', desc: 'Trade on MT4, MT5, TradingView & WebTrader', icon: <Monitor size={20} strokeWidth={1.5} />, href: '/trading#platforms' },
        { title: 'Copy Trading', desc: 'Copy, trade, and earn from top strategy providers', icon: <Copy size={20} strokeWidth={1.5} />, href: '/trading#copy-trading' },
        { title: 'Trading Fees', desc: 'Competitive spreads, commissions, and zero hidden fees', icon: <BadgeDollarSign size={20} strokeWidth={1.5} />, href: '/market#pricing' },
        { title: 'Deposit and Withdrawal', desc: 'Fast & secure deposits and withdrawals', icon: <Wallet size={20} strokeWidth={1.5} />, href: '/market#funding' },
      ]
    },
    {
      name: 'Market',
      href: '/market',
      dropdown: [
        { title: 'Forex', desc: 'Trade major, minor, and exotic currency pairs', icon: <LineChart size={20} strokeWidth={1.5} />, href: '/market#instruments' },
        { title: 'Shares CFDs', desc: 'Trade CFDs on global company blue-chip stocks', icon: <Building2 size={20} strokeWidth={1.5} />, href: '/market#instruments' },
        { title: 'Crypto CFDs', desc: 'Trade popular cryptocurrencies with 24/7 exposure', icon: <Activity size={20} strokeWidth={1.5} />, href: '/market#instruments' },
        { title: 'Indices', desc: 'Speculate on major global stock market indices', icon: <BarChart2 size={20} strokeWidth={1.5} />, href: '/market#instruments' },
        { title: 'Metals & Energies', desc: 'Trade precious safe-haven metals and oil markets', icon: <Boxes size={20} strokeWidth={1.5} />, href: '/market#instruments' },
        { title: 'ETFs & Futures', desc: 'Diversify your portfolio with sector-specific products', icon: <Briefcase size={20} strokeWidth={1.5} />, href: '/market#instruments' },
      ]
    },
    {
      name: 'Partners',
      href: '/partners',
      dropdown: [
        { title: 'Overview', desc: 'Transform your expertise into potential earnings', icon: <Handshake size={20} strokeWidth={1.5} />, href: '/partners#overview' },
        { title: 'Introducing Brokers', desc: 'Partner with RakizFx for top-tier IB commissions', icon: <Percent size={20} strokeWidth={1.5} />, href: '/partners#programs' },
        { title: 'CPA Affiliate', desc: 'Refer clients and earn industry-leading commissions', icon: <Users size={20} strokeWidth={1.5} />, href: '/partners#programs' },
      ]
    },
    {
      name: 'Company',
      href: '/company',
      dropdown: [
        { title: 'About Us', desc: 'Learn about our institutional-grade legacy', icon: <Building2 size={20} strokeWidth={1.5} />, href: '/company#about' },
        { title: 'Contact', desc: 'Get in touch with our global support team', icon: <Headset size={20} strokeWidth={1.5} />, href: '/company#contact' },
        { title: 'Careers', desc: 'Join our team of global innovators', icon: <Briefcase size={20} strokeWidth={1.5} />, href: '/company#careers' },
      ]
    }
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-xl border-b border-zinc-200 shadow-sm"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <div className="container-standard flex items-center justify-between h-20">

        {/* Logo */}
        <a href="/" className="flex items-center group h-full">
          <LogoSVG isDark={isScrolled || isLightBgPage} />
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-2 h-full">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group h-full flex items-center">
              <Link
                href={link.href}
                className={cn(
                  "px-5 py-2 text-[14px] font-bold uppercase tracking-wider hover:text-primary transition-colors flex items-center gap-1",
                  (isScrolled || isLightBgPage) ? "text-zinc-800" : "text-white"
                )}
              >
                {link.name}
              </Link>

              {/* Dropdown */}
              {link.dropdown && (
                <div className="absolute top-[80px] left-1/2 -translate-x-1/2 w-[340px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  <div className="bg-white rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.10)] border border-zinc-200 p-3 flex flex-col gap-1 relative
                    before:absolute before:-top-[9px] before:left-1/2 before:-translate-x-1/2
                    before:w-4 before:h-4 before:bg-white before:rotate-45
                    before:border-l before:border-t before:border-zinc-200">
                    {link.dropdown.map((item, i) => (
                      <Link
                        key={i}
                        href={item.href || link.href}
                        className="flex items-start gap-4 p-3 rounded-xl hover:bg-zinc-50 transition-colors group/item relative z-10"
                      >
                        <div className="mt-0.5 text-zinc-400 group-hover/item:text-primary transition-colors shrink-0">
                          {item.icon}
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-0.5">
                            <span className="text-sm font-bold text-zinc-800 group-hover/item:text-primary transition-colors">
                              {item.title}
                            </span>
                            {item.badge && (
                              <span className="bg-[#f05a28] text-white text-[9px] font-black uppercase tracking-wider px-1.5 py-0.5 rounded">
                                {item.badge}
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-zinc-500 font-medium leading-relaxed">{item.desc}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Desktop CTA Buttons & Icons (Theme Styled) */}
        <div className="hidden md:flex items-center gap-6">
          {/* Register Button */}
          <Link 
            href="/register" 
            className="flex items-center gap-2 group cursor-pointer transition-colors"
          >
            <div className={cn(
              "w-8 h-8 rounded-full flex items-center justify-center transition-all",
              (isScrolled || isLightBgPage)
                ? "bg-[#004D34] text-white"
                : "bg-[#00ca73] text-black"
            )}>
              <User size={16} strokeWidth={2.5} />
            </div>
            <span className={cn(
              "text-sm font-bold tracking-wide transition-colors group-hover:text-primary",
              (isScrolled || isLightBgPage) ? "text-[#004D34]" : "text-[#00ca73]"
            )}>
              Register
            </span>
          </Link>

          {/* Login Button */}
          <Link 
            href="/login" 
            className={cn(
              "flex items-center gap-2 group cursor-pointer transition-colors hover:text-primary",
              (isScrolled || isLightBgPage) ? "text-zinc-800" : "text-white"
            )}
          >
            <LogIn size={20} className="transition-transform group-hover:translate-x-0.5" />
            <span className="text-sm font-bold tracking-wide">
              Login
            </span>
          </Link>

          {/* Separator */}
          <span className={cn(
            "text-base select-none",
            (isScrolled || isLightBgPage) ? "text-zinc-300" : "text-white/20"
          )}>
            |
          </span>

          {/* Language Selector */}
          <button className={cn(
            "text-xs font-bold tracking-widest hover:text-primary transition-colors cursor-pointer",
            (isScrolled || isLightBgPage) ? "text-zinc-800" : "text-white"
          )}>
            EN
          </button>

          {/* Search Icon */}
          <button className={cn(
            "hover:text-primary transition-colors cursor-pointer",
            (isScrolled || isLightBgPage) ? "text-zinc-800" : "text-white"
          )}>
            <Search size={20} strokeWidth={2} />
          </button>

          {/* Download Icon */}
          <button className={cn(
            "hover:text-primary transition-colors cursor-pointer",
            (isScrolled || isLightBgPage) ? "text-zinc-800" : "text-white"
          )}>
            <Download size={20} strokeWidth={2} />
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className={cn("md:hidden", (isScrolled || isLightBgPage) ? "text-zinc-700" : "text-white")}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-zinc-200 p-6 shadow-lg animate-in slide-in-from-top duration-300">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              link.href.startsWith('/#') ? (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-lg font-semibold text-zinc-700 hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-lg font-semibold text-zinc-700 hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              )
            ))}
            <hr className="border-zinc-200 my-2" />
            <Link 
              href="/login" 
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3 text-zinc-700 font-semibold border border-zinc-300 rounded-xl hover:border-primary hover:text-primary transition-all flex items-center justify-center gap-2"
            >
              <LogIn size={18} />
              <span>Login</span>
            </Link>
            <Link 
              href="/register"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full bg-primary py-4 rounded-xl text-black font-semibold flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(0,202,115,0.25)] hover:bg-[#00b365] transition-all"
            >
              <User size={18} />
              <span>Register</span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
