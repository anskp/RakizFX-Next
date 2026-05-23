"use client";
import React from 'react';
import { Check, X } from 'lucide-react';

const features = [
  {
    name: 'EA Trading',
    rakiz: false,
    tradingView: false,
    mt4: true,
    mt5: true,
  },
  {
    name: 'Chart trading',
    rakiz: true,
    tradingView: true,
    mt4: true,
    mt5: true,
  },
  {
    name: 'DoM (Depth of Market)',
    rakiz: false,
    tradingView: true,
    mt4: false,
    mt5: true,
  },
  {
    name: '1 click trading',
    rakiz: true,
    tradingView: true,
    mt4: true,
    mt5: true,
  },
  {
    name: 'Indicators',
    rakiz: '50+',
    tradingView: '400+ (can add custom also)',
    mt4: '30 (can add custom also)',
    mt5: '35+ (can add custom also)',
  },
  {
    name: 'Pending order types',
    rakiz: '4',
    tradingView: '6',
    mt4: '4',
    mt5: '6',
  },
  {
    name: 'Trailing stop',
    rakiz: 'No',
    tradingView: 'Yes + Advanced take profit and breakeven stop loss',
    mt4: 'Yes',
    mt5: 'Yes',
  },
  {
    name: 'Price alerts',
    rakiz: 'Sound',
    tradingView: 'Sound, Email, Notification, SMS, URL',
    mt4: 'Sound, email, notification',
    mt5: 'Sound, email, notification',
  },
  {
    name: 'Chart types',
    rakiz: 'Line, Bar, candlesticks, Heiken Ashi, HLC & dots',
    tradingView: 'Line, Bar, Candlesticks, Heiken Ashi, HLC, HL Area, Renko, Range & more',
    mt4: 'Line, Bar, candlesticks',
    mt5: 'Line, Bar, candlesticks',
  },
  {
    name: 'Chart time frames',
    rakiz: '15',
    tradingView: '82',
    mt4: '9',
    mt5: '21',
  },
  {
    name: 'Trading Central Integration',
    rakiz: 'No',
    tradingView: 'No',
    mt4: 'Yes with plug in',
    mt5: 'Yes with plug in',
  },
  {
    name: 'Sentiment',
    rakiz: 'Only for majors',
    tradingView: 'Yes',
    mt4: 'No',
    mt5: 'No',
  },
  {
    name: 'Languages',
    rakiz: '29',
    tradingView: '19',
    mt4: '37',
    mt5: '49',
  },
  {
    name: 'Coding language',
    rakiz: 'N/A',
    tradingView: 'Pine Script™',
    mt4: 'MQL4',
    mt5: 'MQL5',
  },
  {
    name: 'Integrated Economic calendar',
    rakiz: true,
    tradingView: true,
    mt4: true,
    mt5: true,
  },
  {
    name: 'Detachable charts',
    rakiz: true,
    tradingView: true,
    mt4: true,
    mt5: true,
  }
];

const renderCell = (val: boolean | string) => {
  if (typeof val === 'boolean') {
    return val ? (
      <Check size={18} className="text-[#00ca73] mx-auto" />
    ) : (
      <X size={18} className="text-red-500 mx-auto" />
    );
  }
  return <span className="text-sm font-medium text-zinc-700">{val}</span>;
};

export function PlatformFeatures() {
  return (
    <div className="w-full overflow-x-auto bg-white border border-zinc-200 rounded-[2rem] shadow-sm">
      <table className="w-full text-left min-w-[900px] border-collapse">
        <thead>
          <tr>
            <th className="p-6 border-b border-zinc-200 bg-zinc-50/50 text-black font-black uppercase tracking-tight text-xl w-1/5 sticky left-0 z-10">
              Platform Features
            </th>
            <th className="p-6 border-b border-zinc-200 text-center text-lg font-bold uppercase text-black w-1/5">
              RakizFX Platform
            </th>
            <th className="p-6 border-b border-zinc-200 text-center text-lg font-bold uppercase text-black w-1/5">
              TradingView
            </th>
            <th className="p-6 border-b border-zinc-200 text-center text-lg font-bold uppercase text-black w-1/5">
              MetaTrader 4
            </th>
            <th className="p-6 border-b border-zinc-200 text-center text-lg font-bold uppercase text-black w-1/5">
              MetaTrader 5
            </th>
          </tr>
        </thead>
        <tbody>
          {features.map((feature, idx) => (
            <tr key={idx} className="hover:bg-zinc-50/50 transition-colors group">
              <td className="p-4 px-6 border-b border-zinc-100 text-sm font-bold text-zinc-800 sticky left-0 bg-white group-hover:bg-zinc-50/50 transition-colors z-10">
                {feature.name}
              </td>
              <td className="p-4 px-6 border-b border-zinc-100 text-center">
                {renderCell(feature.rakiz)}
              </td>
              <td className="p-4 px-6 border-b border-zinc-100 text-center">
                {renderCell(feature.tradingView)}
              </td>
              <td className="p-4 px-6 border-b border-zinc-100 text-center">
                {renderCell(feature.mt4)}
              </td>
              <td className="p-4 px-6 border-b border-zinc-100 text-center">
                {renderCell(feature.mt5)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
