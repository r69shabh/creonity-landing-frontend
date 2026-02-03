"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export function EditorialStatement() {
    const ref = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const xMove = useTransform(scrollYProgress, [0, 1], [0, -50]);

    return (
        <section ref={ref} id="manifesto" className="py-24 px-6 border-b-2 border-black bg-yellow-50 relative overflow-hidden">
            <div className="absolute inset-0 pattern-dots opacity-10" />
            
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                
                {/* Left: Type Block */}
                <div className="bg-white border-2 border-black p-8 shadow-hard-lg">
                    <span className="bg-black text-white px-3 py-1 font-mono text-xs uppercase mb-6 inline-block">
                        Manifesto.txt
                    </span>
                    <h2 className="text-5xl md:text-7xl font-black uppercase leading-[0.9] mb-8">
                        The Internet <br />
                        Is <span className="bg-pink-500 text-white px-2">Fragmented.</span>
                    </h2>
                    <p className="text-xl font-bold font-mono border-l-4 border-black pl-6">
                        Your value shouldn&apos;t be. We unify the chaotic creator stack into a single, brutalist operating system.
                    </p>
                </div>

                {/* Right: Graphic */}
                <motion.div 
                    style={{ x: xMove }}
                    className="relative bg-cyan-300 border-2 border-black aspect-square flex items-center justify-center p-8 shadow-hard-xl rotate-2"
                >
                    <div className="absolute inset-0 pattern-lines opacity-20" />
                    <div className="text-center bg-white border-2 border-black p-8 relative z-10">
                        <p className="font-black text-6xl mb-2">100%</p>
                        <p className="font-mono text-sm uppercase">Transparency</p>
                    </div>
                    {/* Decorative Elements */}
                    <div className="absolute top-4 left-4 w-4 h-4 bg-black rounded-full" />
                    <div className="absolute top-4 right-4 w-4 h-4 bg-black rounded-full" />
                    <div className="absolute bottom-4 left-4 w-4 h-4 bg-black rounded-full" />
                    <div className="absolute bottom-4 right-4 w-4 h-4 bg-black rounded-full" />
                </motion.div>

            </div>
        </section>
    );
}
