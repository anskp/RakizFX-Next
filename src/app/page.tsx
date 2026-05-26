import { Hero } from "@/components/Hero";
import { Ticker } from "@/components/Ticker";
import { Markets } from "@/components/Markets";
import { AccountTypes } from "@/components/AccountTypes";
import { MarketGrowth } from "@/components/MarketGrowth";
import { WhyRakiz } from "@/components/WhyRakiz";
import { TrustSection } from "@/components/TrustSection";

export default function Home() {
  return (
    <>
      <Hero />
      <Ticker />
      <Markets />
      {/* <TradingViewMarkets /> Hidden from Home, placed on Market page */}
      {/* <PowerfulPlatforms /> Hidden for now as requested */}
      {/* <CopyTrading /> Hidden from Home */}
      <AccountTypes />
      <MarketGrowth />
      <WhyRakiz />
      {/* <BlogSection /> Hidden for now as requested */}
      <TrustSection />
    </>
  );
}
