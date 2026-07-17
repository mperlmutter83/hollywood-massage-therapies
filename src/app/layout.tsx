import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: { default: "Hollywood Massage Therapies | Professional Massage Services in Hollywood", template: "%s | Hollywood Massage Therapies" },
  description: "Professional massage therapy services in Hollywood, CA. Swedish, deep tissue, sports, and therapeutic massage. Call (310) 694-5261.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body className={`${inter.variable} font-sans antialiased`}><Header /><main>{children}</main><Footer /></body></html>;
}
