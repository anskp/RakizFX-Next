import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { TradersSay } from "@/components/TradersSay";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RakizFx Trading",
  description: "High-performance institutional trading platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased no-scrollbar`}>
      <body className="min-h-full flex flex-col bg-dk text-tx selection:bg-nn/20 selection:text-nn no-scrollbar">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <TradersSay />
        <Footer />
      </body>
    </html>
  );
}
