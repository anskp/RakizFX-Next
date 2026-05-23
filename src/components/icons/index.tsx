"use client";
import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

// 1. MetaTrader 5 Logo (Custom SVG)
export const MetaTrader5Logo: React.FC<IconProps> = ({ size = 24, className = '', ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.5 12h-7v-1h7v1zm0-3h-7v-1h7v1zm0-3h-7V7h7v1z" opacity=".2" />
    <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm4 11.5c0 .28-.22.5-.5.5h-7c-.28 0-.5-.22-.5-.5v-1c0-.28.22-.5.5-.5h7c.28 0 .5.22.5.5v1zm0-3c0 .28-.22.5-.5.5h-7c-.28 0-.5-.22-.5-.5v-1c0-.28.22-.5.5-.5h7c.28 0 .5.22.5.5v1zm0-3c0 .28-.22.5-.5.5h-7c-.28 0-.5-.22-.5-.5V8c0-.28.22-.5.5-.5h7c.28 0 .5.22.5.5v1z" fill="#3B82F6" />
    <text x="12" y="16.5" fontSize="12" fontWeight="black" fontFamily="system-ui, sans-serif" textAnchor="middle" fill="#FFFFFF">5</text>
  </svg>
);

// 2. MetaTrader 4 Logo
export const MetaTrader4Logo: React.FC<IconProps> = ({ size = 24, className = '', ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
    <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm4 11.5c0 .28-.22.5-.5.5h-7c-.28 0-.5-.22-.5-.5v-1c0-.28.22-.5.5-.5h7c.28 0 .5.22.5.5v1zm0-3c0 .28-.22.5-.5.5h-7c-.28 0-.5-.22-.5-.5v-1c0-.28.22-.5.5-.5h7c.28 0 .5.22.5.5v1zm0-3c0 .28-.22.5-.5.5h-7c-.28 0-.5-.22-.5-.5V8c0-.28.22-.5.5-.5h7c.28 0 .5.22.5.5v1z" fill="#10B981" />
    <text x="12" y="16.5" fontSize="12" fontWeight="black" fontFamily="system-ui, sans-serif" textAnchor="middle" fill="#FFFFFF">4</text>
  </svg>
);

// 3. TradingView Logo (Minimalist precise vector)
export const TradingViewLogo: React.FC<IconProps> = ({ size = 24, className = '', ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <path d="M3 3v18h18" stroke="#3B82F6" />
    <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3" stroke="#10B981" />
  </svg>
);

// 4. Visa Logo
export const VisaLogo: React.FC<IconProps> = ({ size = 24, className = '', ...props }) => (
  <svg width={size} height={size * 0.32} viewBox="0 0 100 32" fill="currentColor" className={className} {...props}>
    <path d="M15.4 31.1l7-20.2h-4.9L13 24.3l-.7-3.9c-.8-3-3.6-6.2-7.1-7.8l-.1-.1 9.4 36.6 5.8-28.2h-4.9z" fill="#1A1F71" />
    <path d="M35.6 11.2H25.3c-.9 0-1.8.6-2.2 1.5L14.7 31.1h5.8l1.2-3.1h7.1l.7 3.1h5.1L35.6 11.2zm-6 13h-4.8l2.4-6.4 2.4 6.4z" fill="#F7B600" />
    <path d="M51.6 19.3c0-3.1-4.2-3.3-4.2-4.7 0-.4.5-.9 1.4-.9 1.7-.2 3.3.3 4 .6l.7-4.3c-1.1-.4-2.8-.7-4.6-.7-5.3 0-9 2.8-9 6.8 0 5 6.9 5.3 6.9 8.1 0 .8-.9 1.4-2.1 1.4-2.4 0-4.2-.7-5.4-1.2l-.8 4.4c1.5.7 3.8 1.1 6.1 1.1 5.6.1 9.4-2.7 9.4-6.9z" fill="#1A1F71" />
    <path d="M68.3 11.2L63.5 31.1H59l-4.8-19.9h5.3l2.2 12.3 2.6-12.3h4z" fill="#1A1F71" />
  </svg>
);

// 5. Mastercard Logo
export const MastercardLogo: React.FC<IconProps> = ({ size = 24, className = '', ...props }) => (
  <svg width={size} height={size * 0.6} viewBox="0 0 50 30" className={className} {...props}>
    <circle cx="16" cy="15" r="14" fill="#EB001B" />
    <circle cx="34" cy="15" r="14" fill="#F79E1B" fillOpacity="0.85" />
  </svg>
);

// 6. Bitcoin Logo
export const BitcoinLogo: React.FC<IconProps> = ({ size = 24, className = '', ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
    <path d="M23.6 12.6c0 6.4-5.2 11.6-11.6 11.6S.4 19 .4 12.6 5.6 1 12 1s11.6 5.2 11.6 11.6z" fill="#F7931A" />
    <path d="M16.3 9.4c.3-1.8-1.1-2.8-3-3.4l.6-2.5-1.5-.4-.6 2.5c-.4-.1-.8-.2-1.2-.3l.6-2.5-1.5-.4-.6 2.5c-.3-.1-.7-.2-1.1-.3l-2.1-.5-.4 1.7s1.1.3 1.1.3c.6.2.7.5.7.8l-.8 3.4c0 0-1.3-.3-1.3-.3L5.4 12l1.3.3c.1 0 .2.2.2.3l.8 3.3c0 .1.1.2 0 .2l-1.3-.3-.4 1.7 2.1.5c.4.1.8.2 1.2.3l-.6 2.6 1.5.4.6-2.5c.4.1.8.2 1.2.2l-.6 2.5 1.5.4.6-2.5c2.6.5 4.5.3 5.3-2.1.7-1.9-.1-3-1.5-3.7 1-.3 1.8-1 2-2.7zm-3.6 5.9c-.5 1.9-3.7 1-4.8.7l.8-3.4c1.1.3 4.5.8 4 2.7zm.5-3.9c-.4 1.8-3 1-3.9.7l.8-3.1c.9.2 3.6.7 3.1 2.4z" fill="#FFF" />
  </svg>
);

// 7. USDT (Tether) Logo
export const UsdtLogo: React.FC<IconProps> = ({ size = 24, className = '', ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
    <path d="M12 24c6.6 0 12-5.4 12-12S18.6 0 12 0 0 5.4 0 12s5.4 12 12 12z" fill="#26A17B" />
    <path d="M12.9 8.2h4.5V6H6.6v2.2h4.5v5.3c-2.8.2-4.9.7-4.9 1.3 0 .6 2.1 1.1 4.9 1.3v3.2h1.8v-3.2c2.8-.2 4.9-.7 4.9-1.3 0-.6-2.1-1.1-4.9-1.3V8.2zm0 8v.1c-.1 0-.1 0 0 0-2.3-.1-4.1-.5-4.1-.9 0-.4 1.8-.8 4.1-.9v1.8z" fill="#FFF" />
  </svg>
);

// 8. Apple Logo
export const AppleLogo: React.FC<IconProps> = ({ size = 24, className = '', ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-1 .04-2.2.67-2.92 1.49-.62.71-1.16 1.85-1.02 2.96 1.11.09 2.26-.57 2.95-1.39" />
  </svg>
);

// 9. Windows Logo
export const WindowsLogo: React.FC<IconProps> = ({ size = 24, className = '', ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
    <path d="M0 3.449L9.75 2.1v9.45H0V3.449zM0 12.45h9.75v9.45L0 20.551v-8.102zM10.8 1.95L24 0v11.55H10.8V1.95zM10.8 12.45H24v11.55l-13.2-1.95V12.45z" />
  </svg>
);

// 10. Android Logo
export const AndroidLogo: React.FC<IconProps> = ({ size = 24, className = '', ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
    <path d="M17.523 15.3c-.477 0-.863-.386-.863-.863 0-.477.386-.862.863-.862.477 0 .862.385.862.862 0 .477-.385.863-.862.863zm-11.046 0c-.477 0-.862-.386-.862-.863 0-.477.385-.862.862-.862.477 0 .863.385.863.862 0 .477-.386.863-.863.863zm11.36-4.664l1.83-3.17c.106-.183.043-.417-.14-.523-.183-.106-.417-.043-.523.14l-1.854 3.21a10.024 10.024 0 00-10.4 0L5.047 7.083c-.106-.183-.34-.246-.523-.14-.183.106-.246.34-.14.523l1.83 3.17A9.957 9.957 0 001.2 18.064h21.6a9.957 9.957 0 00-4.84-7.428z" />
  </svg>
);
