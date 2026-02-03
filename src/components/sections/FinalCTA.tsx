"use client";

import { motion } from "motion/react";

export function FinalCTA() {
    return (
        <section className="py-32 px-6 border-b-2 border-black bg-pink-500 overflow-hidden relative">
            <div className="absolute inset-0 pattern-lines opacity-10" />
            
            <div className="max-w-5xl mx-auto text-center relative z-10">
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", bounce: 0.5 }}
                    className="bg-white border-4 border-black p-12 md:p-24 shadow-hard-xl"
                >
                    <h2 className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-[0.8] mb-8">
                        Drop <br/> The Link.
                    </h2>
                    <p className="text-xl font-bold font-mono mb-12 max-w-xl mx-auto">
                        Join the operating system for the next generation of creative capital.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <a href="https://creonity-creator-dashboard-frontend.vercel.app" className="px-8 py-4 bg-yellow-300 border-2 border-black font-black text-xl uppercase shadow-hard hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
                            Start Creating
                        </a>
                        <a href="https://creonity-brand-dashboard-frontend.vercel.app" className="px-8 py-4 bg-cyan-300 border-2 border-black font-black text-xl uppercase shadow-hard hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
                            Start Hiring
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
