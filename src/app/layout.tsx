import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Creonity – Transparent Creator Marketing Platform",
  description: "Creonity helps brands and creators collaborate through transparent auctions, escrow-based payments, and performance analytics.",
  keywords: ["creator marketplace", "influencer marketing platform", "transparent creator campaigns", "escrow payments for creators", "brand creator collaborations"],
  openGraph: {
    title: "Creonity – Transparent Creator Marketing Platform",
    description: "Creonity helps brands and creators collaborate through transparent auctions, escrow-based payments, and performance analytics.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Creonity – Transparent Creator Marketing Platform",
    description: "Creonity helps brands and creators collaborate through transparent auctions, escrow-based payments, and performance analytics.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
