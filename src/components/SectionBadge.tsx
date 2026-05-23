"use client";
import React from 'react';

interface SectionBadgeProps {
  icon: React.ReactNode;
  text: string;
}

export function SectionBadge({ icon, text }: SectionBadgeProps) {
  return (
    <div className="inline-flex items-center gap-2 bg-transparent border border-zinc-200 rounded-full px-4 py-1.5 mb-6">
      <span className="text-zinc-400 flex items-center justify-center shrink-0">{icon}</span>
      <span className="text-[10px] uppercase font-semibold tracking-widest text-zinc-400">{text}</span>
    </div>
  );
}
