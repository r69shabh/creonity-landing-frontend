"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import Image from "next/image";
import { SocialSticker } from "@/components/ui/SocialElements";

export function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollY } = useScroll();
    
    const yLogo = useTransform(scrollY, [0, 500], [0, 100]);
    const rotateLogo = useTransform(scrollY, [0, 500], [0, 15]);

    return (
        <section ref={containerRef} className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden pt-20 border-b-2 border-black bg-white">
            
            {/* Grid Pattern Background */}
            <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:40px_40px]" />

            {/* Dither/Noise Elements */}
            <div className="absolute top-20 right-20 w-64 h-64 bg-cyan-300 rounded-full blur-[80px] opacity-50 mix-blend-multiply animate-pulse-slow" />
            <div className="absolute bottom-20 left-20 w-64 h-64 bg-yellow-300 rounded-full blur-[80px] opacity-50 mix-blend-multiply animate-pulse-slow" />

            <div className="relative z-10 w-full max-w-[1400px] flex flex-col items-center justify-center px-6">
                
                {/* --- MAIN TITLE BLOCK --- */}
                <motion.div 
                    className="relative z-20 text-center mb-12"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, ease: "circOut" }}
                >
                    <div className="inline-block px-4 py-1 bg-black text-white font-mono text-sm uppercase tracking-widest mb-4 transform -rotate-2">
                        System v2.0 Live
                    </div>
                    
                    <h1 className="text-[12vw] leading-[0.8] font-black tracking-tighter text-black mix-blend-multiply">
                        CREATOR <br />
                        <span className="text-transparent text-outline hover:text-pink-500 transition-colors duration-0 cursor-default">
                            CANVAS
                        </span>
                    </h1>
                </motion.div>

                {/* --- CENTRAL INTERACTION --- */}
                <div className="relative w-full max-w-2xl aspect-square md:aspect-[16/9] flex items-center justify-center">
                    
                    {/* The Centerpiece */}
                    <motion.div 
                        style={{ y: yLogo, rotate: rotateLogo }}
                        className="relative z-30 w-64 h-64 md:w-80 md:h-80 border-4 border-black bg-white p-4 shadow-hard-xl rotate-3"
                    >
                        <div className="w-full h-full relative overflow-hidden bg-gray-100 pattern-dots">
                            <Image 
                                src="/images/logo.png" 
                                alt="Creonity Logo" 
                                fill 
                                className="object-contain p-4 mix-blend-multiply"
                                priority
                            />
                        </div>
                        {/* Sticker Tape */}
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-24 h-8 bg-yellow-400/80 -rotate-2 border-l border-r border-white/20" />
                    </motion.div>

                    {/* Orbiting Elements */}
                    <motion.div className="absolute inset-0 pointer-events-none md:pointer-events-auto z-40">
                        <SocialSticker type="youtube" className="top-[10%] left-[5%] rotate-[-6deg] shadow-hard" />
                        <SocialSticker type="twitter" className="top-[20%] right-[0%] rotate-[8deg] shadow-hard" />
                        <SocialSticker type="tiktok" className="bottom-[10%] left-[10%] rotate-[-3deg] shadow-hard" />
                        
                        <div className="absolute bottom-[20%] right-[10%] bg-white border-2 border-black p-4 shadow-hard rotate-[4deg]">
                            <p className="font-mono text-xs font-bold">TOTAL EARNINGS</p>
                            <p className="text-3xl font-black text-green-600">$12,450</p>
                        </div>
                    </motion.div>

                </div>

                {/* --- SUBTEXT --- */}
                <div className="mt-16 max-w-xl text-center bg-white border-2 border-black p-6 shadow-hard relative">
                    <p className="text-lg font-bold uppercase leading-tight">
                        Merge your influence. Monetize your art. <br />
                        One dashboard to rule them all.
                    </p>
                    <div className="absolute -bottom-2 -right-2 w-full h-full bg-black -z-10" />
                </div>

            </div>
        </section>
    );
}
