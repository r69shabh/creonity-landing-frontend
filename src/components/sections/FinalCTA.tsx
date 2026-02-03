"use client";

import { motion, useInView, useMotionValue, useSpring } from "motion/react";
import { useRef, useState, useEffect } from "react";
import Link from "next/link";

// Magnetic CTA with holographic effect
function HolographicCTA({ children, href }: { children: React.ReactNode; href: string }) {
    const ref = useRef<HTMLAnchorElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const springConfig = { damping: 15, stiffness: 150 };
    const springX = useSpring(x, springConfig);
    const springY = useSpring(y, springConfig);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        x.set((e.clientX - centerX) * 0.4);
        y.set((e.clientY - centerY) * 0.4);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.a
            ref={ref}
            href={href}
            className="group relative inline-flex items-center gap-3 px-12 py-6 rounded-full text-lg font-semibold overflow-hidden"
            style={{ x: springX, y: springY }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
        >
            {/* Animated gradient background */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-r from-neon-violet via-neon-cyan to-neon-violet"
                animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                style={{ backgroundSize: "200% 200%" }}
            />

            {/* Holographic shimmer */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12"
                initial={{ x: "-100%" }}
                animate={{ x: "200%" }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            />

            {/* Glow effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-neon-violet via-neon-cyan to-neon-violet blur-xl" />

            {/* Content */}
            <span className="relative z-10 text-white">{children}</span>
            <motion.span
                className="relative z-10 text-white"
                animate={{ x: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
            >
                →
            </motion.span>

            {/* Pulse rings */}
            <motion.div
                className="absolute inset-0 rounded-full border-2 border-white/20"
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
            />
        </motion.a>
    );
}

// Animated text with character reveal
function AnimatedText({ children, className = "" }: { children: string; className?: string }) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true });

    return (
        <div ref={ref} className={`overflow-hidden ${className}`}>
            <motion.span
                className="block"
                initial={{ y: "100%" }}
                animate={isInView ? { y: 0 } : {}}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
                {children}
            </motion.span>
        </div>
    );
}

// Floating icons
function FloatingIcons() {
    const icons = [
        { emoji: "🎨", x: 15, y: 20, delay: 0 },
        { emoji: "✨", x: 85, y: 15, delay: 0.5 },
        { emoji: "🚀", x: 10, y: 70, delay: 1 },
        { emoji: "💎", x: 90, y: 75, delay: 1.5 },
        { emoji: "⚡", x: 50, y: 10, delay: 2 },
    ];

    return (
        <>
            {icons.map((icon, i) => (
                <motion.div
                    key={i}
                    className="absolute text-3xl opacity-30"
                    style={{ left: `${icon.x}%`, top: `${icon.y}%` }}
                    animate={{
                        y: [0, -20, 0],
                        rotate: [0, 10, -10, 0],
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        duration: 5,
                        delay: icon.delay,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                >
                    {icon.emoji}
                </motion.div>
            ))}
        </>
    );
}

export function FinalCTA() {
    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
    const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });

    const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePos({
            x: (e.clientX - rect.left) / rect.width,
            y: (e.clientY - rect.top) / rect.height,
        });
    };

    return (
        <section
            ref={sectionRef}
            className="relative py-40 lg:py-56 px-6 bg-background overflow-hidden"
            onMouseMove={handleMouseMove}
        >
            {/* Dynamic gradient background */}
            <div
                className="absolute inset-0 transition-all duration-1000 ease-out"
                style={{
                    background: `
                        radial-gradient(circle at ${mousePos.x * 100}% ${mousePos.y * 100}%,
                        hsl(263 90% 58% / 0.15) 0%,
                        hsl(187 95% 53% / 0.05) 30%,
                        transparent 60%)
                    `,
                }}
            />

            {/* Grid pattern */}
            <div className="absolute inset-0 grid-pattern opacity-20" />

            {/* Floating icons */}
            <FloatingIcons />

            {/* Animated orbs */}
            <motion.div
                className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-violet/10 rounded-full blur-3xl"
                animate={{
                    scale: [1, 1.3, 1],
                    x: [0, 50, 0],
                    y: [0, -30, 0],
                }}
                transition={{ duration: 12, repeat: Infinity }}
            />
            <motion.div
                className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-cyan/10 rounded-full blur-3xl"
                animate={{
                    scale: [1.2, 1, 1.2],
                    x: [0, -50, 0],
                    y: [0, 30, 0],
                }}
                transition={{ duration: 12, repeat: Infinity, delay: 6 }}
            />

            {/* Content */}
            <div className="relative z-10 max-w-4xl mx-auto text-center">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neon-violet/10 border border-neon-violet/20 text-neon-violet text-sm font-mono">
                        <motion.span
                            className="w-2 h-2 rounded-full bg-neon-violet"
                            animate={{ opacity: [1, 0.5, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        />
                        Join 10,000+ creators
                    </span>
                </motion.div>

                {/* Headline */}
                <motion.h2
                    className="text-fluid-lg font-bold mt-8 mb-6 leading-[1.1]"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    Ready to{" "}
                    <span className="gradient-text-holographic animate-holographic">
                        transform
                    </span>
                    <br />
                    your creative work?
                </motion.h2>

                {/* Description */}
                <motion.p
                    className="text-xl text-muted-foreground max-w-xl mx-auto mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    Join the platform where trust comes first. No agencies. No hidden fees.
                    Just pure collaboration.
                </motion.p>

                {/* CTA buttons */}
                <motion.div
                    className="flex flex-col sm:flex-row items-center justify-center gap-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <HolographicCTA href="https://creonity-creator-dashboard-frontend.vercel.app">
                        Start Creating
                    </HolographicCTA>

                    <motion.a
                        href="https://creonity-brand-dashboard-frontend.vercel.app"
                        className="group flex items-center gap-2 px-8 py-4 rounded-full border border-border text-foreground hover:border-neon-cyan/50 hover:bg-neon-cyan/5 transition-all"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <span>I'm a Brand</span>
                        <motion.svg
                            className="w-4 h-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </motion.svg>
                    </motion.a>
                </motion.div>

                {/* Trust indicators */}
                <motion.div
                    className="flex flex-wrap items-center justify-center gap-8 mt-16 pt-8 border-t border-border/50"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.5 }}
                >
                    {[
                        { icon: "🔒", text: "Secure Escrow", color: "text-neon-violet" },
                        { icon: "⚡", text: "Fast Payouts", color: "text-neon-amber" },
                        { icon: "✨", text: "No Hidden Fees", color: "text-neon-cyan" },
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            className="flex items-center gap-2 text-sm text-muted-foreground"
                            whileHover={{ scale: 1.05 }}
                        >
                            <span className="text-lg">{item.icon}</span>
                            <span className={`hover:${item.color} transition-colors`}>{item.text}</span>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
