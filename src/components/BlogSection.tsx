"use client";
import React from 'react';

export function BlogSection() {
  return (
    <section id="blog" className="py-24 bg-white border-t border-zinc-200">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
        <h2 className="text-4xl md:text-5xl font-semibold mb-16 tracking-tight uppercase text-[#004D34] leading-tight mt-2">
          Our Blog
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {[
            {
              category: "Breaking News",
              title: "Putin Lands In Beijing Seeking Gas Deals, Trade Lifelines, And A Diplomatic Win",
              tag: "Breaking News",
              meta: "Market News • May 20, 2026",
              image: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=800&q=80"
            },
            {
              category: "Articles",
              title: "How Long Does It Really Take to Become a Profitable Forex Trader?",
              tag: "Book of the Week",
              meta: "Articles • May 14, 2026",
              image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80"
            },
            {
              category: "Articles",
              title: "Forex Trading Hours: When To Trade",
              tag: "Topic of the Week",
              meta: "Articles • May 13, 2026",
              image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=800&q=80"
            }
          ].map((post, idx) => (
            <div key={idx} className="group cursor-pointer flex flex-col h-full bg-white border border-zinc-200/80 hover:border-zinc-300 rounded-[2rem] overflow-hidden transition-all duration-300">
              {/* Image container */}
              <div className="relative h-[220px] w-full overflow-hidden bg-zinc-100 shrink-0">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                {/* Red badge */}
                <div className="absolute top-4 left-4 bg-[#FF453A] text-white text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg shadow-sm">
                  {post.tag}
                </div>
                {/* Bottom "Read The Full Blog" overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-4 left-4 text-white text-[10px] font-black uppercase tracking-widest leading-none drop-shadow-sm">
                  Read The Full Blog
                </div>
              </div>
              {/* Content */}
              <div className="p-8 flex flex-col justify-between flex-grow">
                <h3 className="text-xl font-bold uppercase tracking-tight text-black line-clamp-2 leading-snug mb-4 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <div className="text-zinc-500 text-xs font-semibold uppercase tracking-wider mt-auto">
                  {post.meta}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <button className="bg-zinc-100 hover:bg-zinc-200 text-zinc-800 font-bold px-10 py-4.5 rounded-full text-xs uppercase tracking-widest transition-colors shadow-sm">
            Read more
          </button>
        </div>
      </div>
    </section>
  );
}
