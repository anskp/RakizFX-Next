import { Hero } from "@/components/Hero";
import { Ticker } from "@/components/Ticker";
import { Markets } from "@/components/Markets";
import { TradingViewMarkets } from "@/components/TradingViewMarkets";
import { CopyTrading } from "@/components/CopyTrading";
import { AccountTypes } from "@/components/AccountTypes";
import { MarketGrowth } from "@/components/MarketGrowth";
import { TrustSection } from "@/components/TrustSection";

export default function Home() {
  return (
    <>
      <Hero />
      <Ticker />
      <Markets />
      <TradingViewMarkets />
      {/* <PowerfulPlatforms /> Hidden for now as requested */}
      <CopyTrading />
      <AccountTypes />
      <MarketGrowth />
      {/* <BlogSection /> Hidden for now as requested */}
      <TrustSection />
    </>
  );
}
