"use client";

import { motion, useInView, useMotionValue, useTransform } from "motion/react";
import { useRef, useState, useEffect } from "react";

// Interactive bento card with hover glow
function BentoCard({
    children,
    className = "",
    delay = 0,
    glowColor = "violet",
    interactive = true
}: {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    glowColor?: "violet" | "cyan" | "amber" | "emerald";
    interactive?: boolean;
}) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    const glowColors = {
        violet: "hsl(263 90% 58% / 0.2)",
        cyan: "hsl(187 95% 53% / 0.2)",
        amber: "hsl(38 95% 55% / 0.2)",
        emerald: "hsl(160 90% 45% / 0.2)",
    };

    const borderColors = {
        violet: "hsl(263 90% 58% / 0.5)",
        cyan: "hsl(187 95% 53% / 0.5)",
        amber: "hsl(38 95% 55% / 0.5)",
        emerald: "hsl(160 90% 45% / 0.5)",
    };

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!interactive) return;
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePos({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    return (
        <motion.div
            ref={ref}
            className={`group relative overflow-hidden rounded-2xl bg-card/60 backdrop-blur-sm border border-border transition-all duration-500 ${className}`}
            style={{
                borderColor: isHovered ? borderColors[glowColor] : undefined,
            }}
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.6, delay }}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Hover glow effect */}
            {interactive && (
                <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                        background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, ${glowColors[glowColor]}, transparent 40%)`,
                    }}
                />
            )}

            {/* Content */}
            <div className="relative z-10 h-full">{children}</div>

            {/* Animated corner accent */}
            <motion.div
                className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                    background: `linear-gradient(135deg, transparent 50%, ${glowColors[glowColor]} 100%)`,
                }}
            />
        </motion.div>
    );
}

// Animated step number
function StepNumber({ number, color }: { number: string; color: string }) {
    return (
        <div className={`relative w-12 h-12 rounded-xl flex items-center justify-center ${color}`}>
            <span className="text-lg font-bold font-mono">{number}</span>
            <motion.div
                className="absolute inset-0 rounded-xl"
                style={{ background: "inherit", opacity: 0.3 }}
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
            />
        </div>
    );
}

// Animated counter
function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true });
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
        if (isInView) {
            const duration = 2000;
            const steps = 60;
            const increment = value / steps;
            let current = 0;

            const timer = setInterval(() => {
                current += increment;
                if (current >= value) {
                    setDisplayValue(value);
                    clearInterval(timer);
                } else {
                    setDisplayValue(Math.floor(current));
                }
            }, duration / steps);

            return () => clearInterval(timer);
        }
    }, [isInView, value]);

    return (
        <span ref={ref}>
            {displayValue.toLocaleString()}{suffix}
        </span>
    );
}

// Feature icon with animation
function FeatureIcon({ children, color }: { children: React.ReactNode; color: string }) {
    return (
        <motion.div
            className={`w-14 h-14 rounded-2xl flex items-center justify-center ${color}`}
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
        >
            {children}
        </motion.div>
    );
}

// Journey connector line
function JourneyConnector({ className = "" }: { className?: string }) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true });

    return (
        <motion.div
            ref={ref}
            className={`absolute hidden lg:block ${className}`}
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
            style={{ transformOrigin: "left" }}
        >
            <div className="h-px w-full bg-gradient-to-r from-neon-violet via-neon-cyan to-neon-violet" />
        </motion.div>
    );
}

export function HowItWorks() {
    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    const steps = [
        {
            number: "01",
            title: "Discover",
            description: "Browse open campaigns with complete transparency. See budgets, requirements, and timelines upfront.",
            icon: (
                <svg className="w-7 h-7 text-neon-violet" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            ),
            color: "bg-neon-violet/10",
            glowColor: "violet" as const,
            tags: ["Fashion", "Tech", "Lifestyle", "Food"],
        },
        {
            number: "02",
            title: "Bid",
            description: "Submit competitive bids based on your rates. No hidden negotiations or middlemen.",
            icon: (
                <svg className="w-7 h-7 text-neon-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            color: "bg-neon-cyan/10",
            glowColor: "cyan" as const,
            stats: [85, 65, 45],
        },
        {
            number: "03",
            title: "Create",
            description: "Work directly with brands. All communication and deliverables in one place.",
            icon: (
                <svg className="w-7 h-7 text-neon-amber" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
            ),
            color: "bg-neon-amber/10",
            glowColor: "amber" as const,
        },
        {
            number: "04",
            title: "Get Paid",
            description: "Funds secured in escrow, released automatically on approval. Fast, secure, guaranteed.",
            icon: (
                <svg className="w-7 h-7 text-neon-emerald" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            color: "bg-neon-emerald/10",
            glowColor: "emerald" as const,
        },
    ];

    return (
        <section ref={sectionRef} className="py-32 px-6 bg-background relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-neon-violet/5 to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-radial from-neon-cyan/5 to-transparent pointer-events-none" />
            <div className="absolute inset-0 dot-pattern opacity-30" />

            <div className="max-w-7xl mx-auto relative">
                {/* Section header */}
                <motion.div
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <div className="flex items-center justify-center gap-4 mb-6">
                        <div className="w-12 h-px bg-gradient-to-r from-transparent to-neon-violet" />
                        <span className="text-xs uppercase tracking-[0.3em] text-neon-violet font-mono">
                            How It Works
                        </span>
                        <div className="w-12 h-px bg-gradient-to-l from-transparent to-neon-violet" />
                    </div>
                    <h2 className="text-fluid-lg font-bold mb-6">
                        From <span className="gradient-text-neon">idea</span> to{" "}
                        <span className="gradient-text-neon">income</span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        A complete ecosystem for creators and brands to connect, collaborate, and create value together.
                    </p>
                </motion.div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[200px]">
                    {/* Large card - Discovery */}
                    <BentoCard
                        className="lg:col-span-2 lg:row-span-2"
                        delay={0.1}
                        glowColor="violet"
                    >
                        <div className="p-8 h-full flex flex-col">
                            <div className="flex items-start justify-between mb-6">
                                <FeatureIcon color="bg-neon-violet/10">
                                    {steps[0].icon}
                                </FeatureIcon>
                                <StepNumber number="01" color="bg-neon-violet/10 text-neon-violet" />
                            </div>

                            <h3 className="text-2xl md:text-3xl font-semibold mb-3">
                                Campaign Discovery
                            </h3>
                            <p className="text-muted-foreground flex-grow">
                                Browse open campaigns with complete transparency. See budgets, requirements, and timelines upfront before you commit.
                            </p>

                            {/* Animated tags */}
                            <div className="mt-6 flex flex-wrap gap-2">
                                {steps[0].tags?.map((tag, i) => (
                                    <motion.span
                                        key={tag}
                                        className="px-3 py-1 rounded-full text-xs bg-neon-violet/10 text-neon-violet border border-neon-violet/20"
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                        transition={{ delay: 0.4 + i * 0.1 }}
                                        whileHover={{ scale: 1.05, backgroundColor: "hsl(263 90% 58% / 0.2)" }}
                                    >
                                        {tag}
                                    </motion.span>
                                ))}
                            </div>
                        </div>
                    </BentoCard>

                    {/* Tall card - Bidding */}
                    <BentoCard
                        className="lg:row-span-2"
                        delay={0.2}
                        glowColor="cyan"
                    >
                        <div className="p-6 h-full flex flex-col">
                            <div className="flex items-start justify-between mb-4">
                                <FeatureIcon color="bg-neon-cyan/10">
                                    {steps[1].icon}
                                </FeatureIcon>
                                <StepNumber number="02" color="bg-neon-cyan/10 text-neon-cyan" />
                            </div>

                            <h3 className="text-xl font-semibold mb-2">
                                Transparent Bidding
                            </h3>
                            <p className="text-sm text-muted-foreground flex-grow">
                                Submit competitive bids based on your rates. No hidden negotiations.
                            </p>

                            {/* Animated progress bars */}
                            <div className="mt-auto space-y-3">
                                {[85, 65, 45].map((width, i) => (
                                    <motion.div
                                        key={i}
                                        className="h-2 rounded-full bg-border overflow-hidden"
                                        initial={{ opacity: 0 }}
                                        animate={isInView ? { opacity: 1 } : {}}
                                        transition={{ delay: 0.5 + i * 0.1 }}
                                    >
                                        <motion.div
                                            className="h-full rounded-full bg-gradient-to-r from-neon-cyan to-neon-violet"
                                            initial={{ width: 0 }}
                                            animate={isInView ? { width: `${width}%` } : {}}
                                            transition={{ delay: 0.7 + i * 0.1, duration: 0.8 }}
                                        />
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </BentoCard>

                    {/* Small card - Escrow */}
                    <BentoCard delay={0.3} glowColor="amber">
                        <div className="p-6 h-full flex flex-col">
                            <div className="flex items-center gap-3 mb-3">
                                <FeatureIcon color="bg-neon-amber/10">
                                    <svg className="w-6 h-6 text-neon-amber" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                    </svg>
                                </FeatureIcon>
                                <StepNumber number="03" color="bg-neon-amber/10 text-neon-amber" />
                            </div>
                            <h3 className="text-lg font-semibold mb-1">Escrow Payments</h3>
                            <p className="text-sm text-muted-foreground">
                                Funds secured before work begins
                            </p>
                            <motion.div
                                className="mt-auto flex items-center gap-2 text-neon-amber text-sm font-medium"
                                initial={{ opacity: 0 }}
                                animate={isInView ? { opacity: 1 } : {}}
                                transition={{ delay: 0.8 }}
                            >
                                <span className="w-2 h-2 rounded-full bg-neon-amber animate-pulse" />
                                100% Secure
                            </motion.div>
                        </div>
                    </BentoCard>

                    {/* Small card - Analytics */}
                    <BentoCard delay={0.4} glowColor="emerald">
                        <div className="p-6 h-full flex flex-col">
                            <div className="flex items-center gap-3 mb-3">
                                <FeatureIcon color="bg-neon-emerald/10">
                                    <svg className="w-6 h-6 text-neon-emerald" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                    </svg>
                                </FeatureIcon>
                                <StepNumber number="04" color="bg-neon-emerald/10 text-neon-emerald" />
                            </div>
                            <h3 className="text-lg font-semibold mb-1">Real-Time Analytics</h3>
                            <p className="text-sm text-muted-foreground">
                                Track performance live
                            </p>
                            {/* Mini chart animation */}
                            <motion.div
                                className="mt-auto flex items-end gap-1 h-8"
                                initial={{ opacity: 0 }}
                                animate={isInView ? { opacity: 1 } : {}}
                                transition={{ delay: 0.9 }}
                            >
                                {[30, 50, 35, 65, 45, 80, 60].map((height, i) => (
                                    <motion.div
                                        key={i}
                                        className="flex-1 rounded-t bg-gradient-to-t from-neon-emerald/50 to-neon-emerald"
                                        initial={{ height: 0 }}
                                        animate={isInView ? { height: `${height}%` } : {}}
                                        transition={{ delay: 1 + i * 0.05, duration: 0.5 }}
                                    />
                                ))}
                            </motion.div>
                        </div>
                    </BentoCard>

                    {/* Wide stats card */}
                    <BentoCard
                        className="md:col-span-2"
                        delay={0.5}
                        glowColor="violet"
                    >
                        <div className="p-6 h-full flex items-center justify-around">
                            <div className="text-center">
                                <div className="text-3xl md:text-4xl font-bold gradient-text-neon">
                                    <AnimatedCounter value={2000} suffix="+" />
                                </div>
                                <div className="text-sm text-muted-foreground mt-1">Active Campaigns</div>
                            </div>
                            <div className="w-px h-12 bg-border" />
                            <div className="text-center">
                                <div className="text-3xl md:text-4xl font-bold gradient-text-neon">
                                    <AnimatedCounter value={98} suffix="%" />
                                </div>
                                <div className="text-sm text-muted-foreground mt-1">Success Rate</div>
                            </div>
                            <div className="w-px h-12 bg-border" />
                            <div className="text-center">
                                <div className="text-3xl md:text-4xl font-bold gradient-text-neon">
                                    24h
                                </div>
                                <div className="text-sm text-muted-foreground mt-1">Avg. Response</div>
                            </div>
                        </div>
                    </BentoCard>
                </div>
            </div>
        </section>
    );
}
