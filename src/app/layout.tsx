import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Creonity – Create Without Limits",
  description: "The creator platform powered by AI. Build, automate, and scale your creative work through AI-assisted development.",
  keywords: ["creator platform", "AI development", "Claude Code", "creative automation", "no-code AI"],
  openGraph: {
    title: "Creonity – Create Without Limits",
    description: "The creator platform powered by AI. Build, automate, and scale your creative work.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Creonity – Create Without Limits",
    description: "The creator platform powered by AI.",
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
        className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased bg-background text-foreground font-display`}
      >
        <div className="noise-overlay" />
        {children}
      </body>
    </html>
  );
}
