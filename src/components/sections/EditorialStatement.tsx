"use client";

import { motion, useInView } from "motion/react";
import { useRef, useState, useEffect } from "react";

// Typewriter effect for text
function TypewriterText({ text, className = "" }: { text: string; className?: string }) {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true });
    const [displayText, setDisplayText] = useState("");

    useEffect(() => {
        if (isInView) {
            let i = 0;
            const timer = setInterval(() => {
                if (i <= text.length) {
                    setDisplayText(text.slice(0, i));
                    i++;
                } else {
                    clearInterval(timer);
                }
            }, 50);
            return () => clearInterval(timer);
        }
    }, [isInView, text]);

    return (
        <span ref={ref} className={className}>
            {displayText}
            <motion.span
                className="inline-block w-[3px] h-[1em] bg-neon-violet ml-1 align-middle"
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
            />
        </span>
    );
}

export function EditorialStatement() {
    const ref = useRef<HTMLElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section ref={ref} className="py-32 sm:py-40 lg:py-48 px-6 bg-background relative overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-radial from-neon-violet/5 via-transparent to-transparent pointer-events-none" />

            {/* Dot pattern */}
            <div className="absolute inset-0 dot-pattern opacity-20" />

            <div className="max-w-5xl mx-auto text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-fluid-md font-light text-foreground leading-[1.3] tracking-tight">
                        Creator collaboration shouldn&apos;t feel{" "}
                        <span className="relative inline-block">
                            <span className="gradient-text-holographic animate-holographic font-medium">
                                opaque
                            </span>
                            {/* Underline */}
                            <motion.span
                                className="absolute -bottom-2 left-0 w-full h-px bg-gradient-to-r from-neon-violet to-neon-cyan"
                                initial={{ scaleX: 0 }}
                                animate={isInView ? { scaleX: 1 } : {}}
                                transition={{ delay: 0.5, duration: 0.8 }}
                                style={{ transformOrigin: "left" }}
                            />
                        </span>
                        .
                    </h2>
                </motion.div>

                <motion.p
                    className="mt-10 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3, duration: 0.6 }}
                >
                    We built Creonity because the creator economy deserves better infrastructure.
                    <br />
                    <span className="text-neon-violet">Clear pricing.</span>{" "}
                    <span className="text-neon-cyan">Secure payments.</span>{" "}
                    <span className="text-neon-amber">Mutual respect.</span>
                </motion.p>

                {/* Decorative elements */}
                <motion.div
                    className="absolute top-1/2 left-0 -translate-y-1/2 w-32 h-32 bg-neon-violet/10 rounded-full blur-3xl"
                    animate={{ scale: [1, 1.2, 1], x: [0, 20, 0] }}
                    transition={{ duration: 8, repeat: Infinity }}
                />
                <motion.div
                    className="absolute top-1/2 right-0 -translate-y-1/2 w-32 h-32 bg-neon-cyan/10 rounded-full blur-3xl"
                    animate={{ scale: [1.2, 1, 1.2], x: [0, -20, 0] }}
                    transition={{ duration: 8, repeat: Infinity, delay: 4 }}
                />
            </div>
        </section>
    );
}
