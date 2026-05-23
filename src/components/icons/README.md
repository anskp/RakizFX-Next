# RakizFX Custom SVG Icons Folder

This folder is dedicated to hosting custom SVG icons and React icon components for the RakizFX trading platform.

## Usage

Create `.tsx` files for custom icons (e.g. `MetaTraderLogo.tsx`, `TradingViewLogo.tsx`) inside this folder and export them as functional React components.

Example structure:
```tsx
import React from 'react';

export function CustomIcon({ size = 24, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      {/* paths */}
    </svg>
  );
}
```
