import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "VEXA | GAFAS IA",
  description: "High-end AI Glasses",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans tracking-tighter bg-[#ECECEC] text-[#0A0A0A] overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
