"use client";
import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';
import './AccountTypes.css';

interface AccountConfig {
  id: string;
  badge: string;
  title: string;
  tagline: string;
  price: string;
  priceLabel: string;
  isPopular: boolean;
  isElite?: boolean;
  details: { label: string; value: string }[];
  buttonText: string;
}

export function AccountTypes({ className }: { className?: string }) {
  const accountsData: AccountConfig[] = [
    {
      id: 'standard',
      badge: 'STANDARD',
      title: 'Standard',
      tagline: 'Everything you need to start trading.',
      price: '$50',
      priceLabel: 'Minimum deposit',
      isPopular: false,
      details: [
        { label: 'Spread', value: 'Standard' },
        { label: 'Leverage', value: 'Up to 1:400' },
        { label: 'Commission', value: 'Zero' },
        { label: 'Swap-free', value: 'Adjustable' },
        { label: 'Support', value: '24/7 Technical' }
      ],
      buttonText: 'Open Standard'
    },
    {
      id: 'pro',
      badge: 'PRO',
      title: 'Pro',
      tagline: 'Faster execution and advanced conditions.',
      price: '$200',
      priceLabel: 'Minimum deposit',
      isPopular: true,
      details: [
        { label: 'Spread', value: 'From 0.6 pips' },
        { label: 'Leverage', value: 'Up to 1:500' },
        { label: 'Commission', value: 'Zero' },
        { label: 'Swap-free', value: 'Adjustable' },
        { label: 'Support', value: '24/7 Priority' }
      ],
      buttonText: 'Open Pro'
    },
    {
      id: 'elite',
      badge: 'ELITE',
      title: 'Elite',
      tagline: 'VIP treatment built for serious traders.',
      price: '$2,000',
      priceLabel: 'Minimum deposit',
      isPopular: false,
      isElite: true,
      details: [
        { label: 'Spread', value: 'Raw from 0.0 pips' },
        { label: 'Leverage', value: 'Custom' },
        { label: 'Commission', value: 'Zero' },
        { label: 'Swap-free', value: 'Adjustable' },
        { label: 'Support', value: '24/7 Dedicated VIP' }
      ],
      buttonText: 'Open Elite'
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const gridRef = useRef<HTMLDivElement>(null);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const scrollLeft = e.currentTarget.scrollLeft;
    const width = e.currentTarget.offsetWidth;
    if (width > 0) {
      const index = Math.round(scrollLeft / width);
      if (index >= 0 && index < accountsData.length) {
        setActiveIndex(index);
      }
    }
  };

  const handleDotClick = (index: number) => {
    if (gridRef.current) {
      const cardElement = gridRef.current.children[index] as HTMLElement;
      if (cardElement) {
        cardElement.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center'
        });
        setActiveIndex(index);
      }
    }
  };

  return (
    <section id="accounts" className={`section-padding relative overflow-hidden account-types-section ${className || ''}`}>
      <div className="container-standard">
        {/* Title and Tagline (Unchanged as requested) */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-h2 mb-4">
            Account Types
          </h2>
          <p className="text-body max-w-2xl mx-auto">
            Choose the perfect account type that matches your trading style, from beginner-friendly standard accounts to institutional-grade Elite conditions.
          </p>
        </div>

        {/* 3D pricing cards with Swiper functionality */}
        <div className="swiper-container">
          
          {/* The Swiper Pagination Moved to the TOP */}
          <div className="swiper-pagination">
            {accountsData.map((_, index) => (
              <div
                key={index}
                className={`dot ${activeIndex === index ? 'active' : ''}`}
                onClick={() => handleDotClick(index)}
              />
            ))}
          </div>

          <div 
            ref={gridRef}
            className="pricing-grid"
            onScroll={handleScroll}
          >
            {accountsData.map((acc, index) => {
              const isPro = acc.isPopular;
              return (
                <motion.div
                  key={acc.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="card"
                >
                  <div className={`inner-top ${isPro ? 'highlight' : ''}`}>
                    <div className={`badge ${isPro ? 'highlight-badge' : ''}`}>
                      {acc.badge}
                    </div>
                    <div className="price-container">
                      <div className="price">{acc.price}</div>
                      <div className="price-sub">{acc.priceLabel}</div>
                    </div>
                  </div>

                  <div className="desc">{acc.tagline}</div>

                  <ul className="features">
                    {acc.details.map((detail, idx) => (
                      <li key={idx}>
                        <div>
                          <span className="feat-label">{detail.label}:</span>{" "}
                          {detail.value}
                        </div>
                      </li>
                    ))}
                  </ul>

                  <div className="btn-wrapper">
                    <a href="#" className="btn">
                      {acc.buttonText}
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
