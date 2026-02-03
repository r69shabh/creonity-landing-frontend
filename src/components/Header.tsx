"use client";

import Link from "next/link";

export function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b-2 border-black">
            {/* Top Marquee */}
            <div className="w-full bg-yellow-400 border-b-2 border-black py-1 overflow-hidden">
                <div className="animate-marquee whitespace-nowrap font-mono text-xs font-bold uppercase tracking-widest flex gap-8">
                    {[...Array(10)].map((_, i) => (
                        <span key={i}>● CREONITY: THE CREATOR OPERATING SYSTEM ● LIVE NOW ●</span>
                    ))}
                </div>
            </div>

            <div className="max-w-[1920px] mx-auto px-6 h-16 flex items-center justify-between">
                {/* Logo Area */}
                <Link href="/" className="group flex items-center gap-2">
                    <div className="w-8 h-8 bg-black group-hover:bg-pink-500 transition-colors duration-0" />
                    <span className="text-2xl font-black tracking-tighter uppercase italic">
                        Creonity
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8 h-full">
                    {["Manifesto", "Remix", "System"].map((item) => (
                        <Link 
                            key={item} 
                            href={`#${item.toLowerCase()}`}
                            className="h-full flex items-center px-4 border-x-2 border-transparent hover:border-black hover:bg-cyan-300 font-bold uppercase text-sm tracking-wide transition-all"
                        >
                            {item}
                        </Link>
                    ))}
                </nav>

                {/* CTA */}
                <div className="flex items-center gap-4">
                    <Link 
                        href="https://creonity-creator-dashboard-frontend.vercel.app" 
                        className="hidden md:block text-sm font-bold uppercase hover:underline"
                    >
                        Login
                    </Link>
                    <Link 
                        href="https://creonity-brand-dashboard-frontend.vercel.app"
                        className="px-6 py-2 bg-black text-white font-bold uppercase text-sm hover:bg-pink-500 hover:text-black transition-colors shadow-hard hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
                    >
                        Start
                    </Link>
                </div>
            </div>
        </header>
    );
}
