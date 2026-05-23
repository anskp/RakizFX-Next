"use client";
import React, { useRef, useEffect, useCallback, useState } from 'react';
import { gsap } from 'gsap';
import './MagicBento.css';

/* ─── CONFIG ─────────────────────────────────────────────── */
const GLOW_COLOR = '0, 202, 115'; // RakizFX emerald
const SPOTLIGHT_RADIUS = 400;
const PARTICLE_COUNT = 10;
const MOBILE_BREAKPOINT = 768;

/* ─── HELPERS ────────────────────────────────────────────── */
const createParticle = (x: number, y: number) => {
  const el = document.createElement('div');
  el.style.cssText = `
    position:absolute;width:3px;height:3px;border-radius:50%;
    background:rgba(${GLOW_COLOR},1);
    box-shadow:0 0 6px rgba(${GLOW_COLOR},0.7);
    pointer-events:none;z-index:100;left:${x}px;top:${y}px;
  `;
  return el;
};

const updateGlow = (card: HTMLElement, mx: number, my: number, intensity: number, radius: number) => {
  const r = card.getBoundingClientRect();
  card.style.setProperty('--glow-x', `${((mx - r.left) / r.width) * 100}%`);
  card.style.setProperty('--glow-y', `${((my - r.top) / r.height) * 100}%`);
  card.style.setProperty('--glow-intensity', intensity.toString());
  card.style.setProperty('--glow-radius', `${radius}px`);
};

/* ─── PARTICLE CARD ──────────────────────────────────────── */
interface ParticleCardProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  disabled?: boolean;
  clickEffect?: boolean;
}

function ParticleCard({ children, className = '', style, disabled = false, clickEffect = true }: ParticleCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const particles = useRef<HTMLElement[]>([]);
  const timeouts = useRef<ReturnType<typeof setTimeout>[]>([]);
  const hovered = useRef(false);
  const initialized = useRef(false);
  const memoized = useRef<HTMLElement[]>([]);

  const init = useCallback(() => {
    if (initialized.current || !ref.current) return;
    const { width, height } = ref.current.getBoundingClientRect();
    memoized.current = Array.from({ length: PARTICLE_COUNT }, () =>
      createParticle(Math.random() * width, Math.random() * height)
    );
    initialized.current = true;
  }, []);

  const clear = useCallback(() => {
    timeouts.current.forEach(clearTimeout);
    timeouts.current = [];
    particles.current.forEach(p => {
      gsap.to(p, { scale: 0, opacity: 0, duration: 0.3, ease: 'back.in(1.7)', onComplete: () => p.parentNode?.removeChild(p) });
    });
    particles.current = [];
  }, []);

  const spawn = useCallback(() => {
    if (!ref.current || !hovered.current) return;
    if (!initialized.current) init();

    memoized.current.forEach((template, i) => {
      const tid = setTimeout(() => {
        if (!hovered.current || !ref.current) return;
        const clone = template.cloneNode(true) as HTMLElement;
        ref.current!.appendChild(clone);
        particles.current.push(clone);

        gsap.fromTo(clone, { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.3, ease: 'back.out(1.7)' });
        gsap.to(clone, { x: (Math.random() - 0.5) * 80, y: (Math.random() - 0.5) * 80, rotation: Math.random() * 360, duration: 2 + Math.random() * 2, ease: 'none', repeat: -1, yoyo: true });
        gsap.to(clone, { opacity: 0.25, duration: 1.5, ease: 'power2.inOut', repeat: -1, yoyo: true });
      }, i * 90);
      timeouts.current.push(tid);
    });
  }, [init]);

  useEffect(() => {
    if (disabled || !ref.current) return;
    const el = ref.current;

    const onEnter = () => { hovered.current = true; spawn(); };
    const onLeave = () => { hovered.current = false; clear(); };

    const onClick = (e: MouseEvent) => {
      if (!clickEffect) return;
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const d = Math.max(Math.hypot(x, y), Math.hypot(x - rect.width, y), Math.hypot(x, y - rect.height), Math.hypot(x - rect.width, y - rect.height));
      const ripple = document.createElement('div');
      ripple.style.cssText = `position:absolute;width:${d * 2}px;height:${d * 2}px;border-radius:50%;background:radial-gradient(circle,rgba(${GLOW_COLOR},0.35) 0%,rgba(${GLOW_COLOR},0.15) 30%,transparent 70%);left:${x - d}px;top:${y - d}px;pointer-events:none;z-index:999;`;
      el.appendChild(ripple);
      gsap.fromTo(ripple, { scale: 0, opacity: 1 }, { scale: 1, opacity: 0, duration: 0.7, ease: 'power2.out', onComplete: () => ripple.remove() });
    };

    el.addEventListener('mouseenter', onEnter);
    el.addEventListener('mouseleave', onLeave);
    el.addEventListener('click', onClick);
    return () => {
      hovered.current = false;
      el.removeEventListener('mouseenter', onEnter);
      el.removeEventListener('mouseleave', onLeave);
      el.removeEventListener('click', onClick);
      clear();
    };
  }, [spawn, clear, disabled, clickEffect]);

  return (
    <div ref={ref} className={`${className} particle-container magic-bento-card--border-glow`} style={{ position: 'relative', overflow: 'hidden', ...style }}>
      {children}
    </div>
  );
}

/* ─── GLOBAL SPOTLIGHT ───────────────────────────────────── */
function GlobalSpotlight({ gridRef, disabled }: { gridRef: React.RefObject<HTMLDivElement | null>; disabled: boolean }) {
  useEffect(() => {
    if (disabled || !gridRef?.current) return;

    const spot = document.createElement('div');
    spot.className = 'global-spotlight';
    spot.style.cssText = `position:fixed;width:700px;height:700px;border-radius:50%;pointer-events:none;background:radial-gradient(circle,rgba(${GLOW_COLOR},0.12) 0%,rgba(${GLOW_COLOR},0.06) 20%,rgba(${GLOW_COLOR},0.02) 40%,transparent 70%);z-index:200;opacity:0;transform:translate(-50%,-50%);mix-blend-mode:screen;`;
    document.body.appendChild(spot);

    const prox = SPOTLIGHT_RADIUS * 0.5;
    const fade = SPOTLIGHT_RADIUS * 0.75;

    const onMove = (e: MouseEvent) => {
      const grid = gridRef.current;
      if (!grid) return;

      const section = grid.closest('.bento-section');
      const rect = section?.getBoundingClientRect();
      const inside = rect && e.clientX >= rect.left && e.clientX <= rect.right && e.clientY >= rect.top && e.clientY <= rect.bottom;

      const cards = grid.querySelectorAll<HTMLElement>('.magic-bento-card, .card-small');

      if (!inside) {
        gsap.to(spot, { opacity: 0, duration: 0.3 });
        cards.forEach(c => c.style.setProperty('--glow-intensity', '0'));
        return;
      }

      let minDist = Infinity;
      cards.forEach(card => {
        const cr = card.getBoundingClientRect();
        const cx = cr.left + cr.width / 2;
        const cy = cr.top + cr.height / 2;
        const dist = Math.max(0, Math.hypot(e.clientX - cx, e.clientY - cy) - Math.max(cr.width, cr.height) / 2);
        minDist = Math.min(minDist, dist);
        const gi = dist <= prox ? 1 : dist <= fade ? (fade - dist) / (fade - prox) : 0;
        updateGlow(card, e.clientX, e.clientY, gi, SPOTLIGHT_RADIUS);
      });

      gsap.to(spot, { left: e.clientX, top: e.clientY, duration: 0.1, ease: 'power2.out' });
      const targetOp = minDist <= prox ? 0.9 : minDist <= fade ? ((fade - minDist) / (fade - prox)) * 0.9 : 0;
      gsap.to(spot, { opacity: targetOp, duration: targetOp > 0 ? 0.2 : 0.5, ease: 'power2.out' });
    };

    const onLeave = () => {
      gridRef.current?.querySelectorAll<HTMLElement>('.magic-bento-card, .card-small').forEach(c => c.style.setProperty('--glow-intensity', '0'));
      gsap.to(spot, { opacity: 0, duration: 0.3 });
    };

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseleave', onLeave);
    return () => {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseleave', onLeave);
      spot.parentNode?.removeChild(spot);
    };
  }, [gridRef, disabled]);

  return null;
}

/* ─── MAIN COMPONENT ─────────────────────────────────────── */
export default function MagicBento({ noPadding = false }: { noPadding?: boolean }) {
  const gridRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const disabled = isMobile;

  const cardClass = 'magic-bento-card';

  return (
    <div className={`bento-section ${noPadding ? '' : 'py-20 px-6 lg:px-12'}`}>
      <GlobalSpotlight gridRef={gridRef} disabled={disabled} />

      <div className="rakiz-bento-grid" ref={gridRef}>

        {/* ── HERO: Forex Core ── */}
        <ParticleCard className={`${cardClass} card-hero`} disabled={disabled}>
          <img src="/assets/forex_core01.png" className="absolute right-[-4%] top-0 bottom-0 w-[55%] h-[90%] my-auto object-contain opacity-100 z-0 pointer-events-none" alt="Forex" />

          <div className="absolute left-6 top-6 z-10 text-left">
            <div className="text-2xl md:text-4xl font-black uppercase tracking-tight text-[#0d1410] leading-none">
              Forex Core
            </div>
          </div>

          <div className="absolute left-6 bottom-6 z-10 text-left max-w-[45%]">
            <p className="text-xs text-zinc-600 font-semibold leading-relaxed">
              Raw spreads starting from 0.0 pips. Engineered for high-volume execution, deep liquidity, and institutional-grade trading precision.
            </p>
          </div>
        </ParticleCard>

        {/* ── TWO SMALLS (Commodities & Indices) ── */}
        <div className="card-smalls-row">
          <ParticleCard className="card-small card-small--border-glow" disabled={disabled} style={{ overflow: 'visible' }}>
            <img src="/assets/goldandsilver01.png" className="absolute right-[-5%] bottom-[0%] w-[75%] h-[110%] object-contain z-0 pointer-events-none" alt="Commodities" />
            <div className="absolute left-6 bottom-6 z-10 text-left">
              <div className="text-xs md:text-sm font-black uppercase tracking-widest text-[#0d1410] leading-none">
                Commodities
              </div>
            </div>
          </ParticleCard>

          <ParticleCard className="card-small card-small--border-glow" disabled={disabled} style={{ overflow: 'visible' }}>
            <img src="/assets/indices01.png" className="absolute right-[-5%] bottom-[0%] w-[75%] h-[110%] object-contain z-0 pointer-events-none" alt="Indices" />
            <div className="absolute left-6 bottom-6 z-10 text-left">
              <div className="text-xs md:text-sm font-black uppercase tracking-widest text-[#0d1410] leading-none">
                Indices
              </div>
            </div>
          </ParticleCard>
        </div>

        {/* ── RIGHT TALL: Crypto ── */}
        <ParticleCard className={`${cardClass} card-right`} disabled={disabled}>
          <img src="/assets/cryptocoins01.png" className="absolute inset-0 m-auto w-[90%] h-[90%] object-contain z-0" alt="Crypto" />
          
          <div className="absolute left-6 top-6 z-10 text-left">
            <div className="text-lg md:text-2xl font-black uppercase tracking-tight text-[#0d1410] leading-none">
              Crypto
            </div>
            <div className="text-[10px] text-emerald-700 italic mt-1 font-semibold">
              "24/7 Market Access"
            </div>
          </div>

          <div className="absolute left-6 bottom-6 z-10 text-left max-w-[85%]">
            <div className="text-[10px] font-black uppercase tracking-widest text-[#00ca73] mb-1">
              Next-Gen Liquidity
            </div>
            <p className="text-[11px] text-emerald-950 font-semibold leading-normal">
              Trade major pairs including BTC and ETH with competitive spreads, no exchange wallet required, and lightning-fast execution.
            </p>
          </div>
        </ParticleCard>

      </div>
    </div>
  );
}
