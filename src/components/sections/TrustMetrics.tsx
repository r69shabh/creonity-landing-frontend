"use client";

import { motion, useInView } from "motion/react";
import { useRef, useState, useEffect } from "react";

// Animated counter with scroll-triggered animation
function AnimatedMetric({
    value,
    label,
    description,
    delay = 0,
    color = "violet",
}: {
    value: string;
    label: string;
    description: string;
    delay?: number;
    color?: "violet" | "cyan" | "amber" | "emerald";
}) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true });
    const [displayValue, setDisplayValue] = useState("0");

    const colors = {
        violet: "from-neon-violet to-purple-400",
        cyan: "from-neon-cyan to-blue-400",
        amber: "from-neon-amber to-orange-400",
        emerald: "from-neon-emerald to-green-400",
    };

    useEffect(() => {
        if (isInView) {
            // Parse the numeric part
            const numericMatch = value.match(/[\d.]+/);
            const targetNum = numericMatch ? parseFloat(numericMatch[0]) : 0;
            const suffix = value.replace(/[\d.]+/, "");

            let start = 0;
            const duration = 2000;
            const steps = 60;
            const increment = targetNum / steps;

            const timer = setInterval(() => {
                start += increment;
                if (start >= targetNum) {
                    setDisplayValue(value);
                    clearInterval(timer);
                } else {
                    setDisplayValue(Math.floor(start) + suffix);
                }
            }, duration / steps);

            return () => clearInterval(timer);
        }
    }, [isInView, value]);

    return (
        <motion.div
            ref={ref}
            className="relative text-center group"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay }}
        >
            {/* Glow background on hover */}
            <div
                className={`absolute inset-0 bg-gradient-radial ${colors[color].split(" ")[0]} to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-3xl`}
            />

            {/* Value */}
            <motion.div
                className={`text-6xl sm:text-7xl lg:text-8xl font-extralight bg-gradient-to-br ${colors[color]} bg-clip-text text-transparent tracking-tight`}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
            >
                {isInView ? displayValue : "0"}
            </motion.div>

            {/* Label */}
            <div className="text-lg font-medium text-foreground mt-4 mb-2">
                {label}
            </div>

            {/* Description */}
            <p className="text-sm text-muted-foreground max-w-[200px] mx-auto leading-relaxed">
                {description}
            </p>
        </motion.div>
    );
}

export function TrustMetrics() {
    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    const metrics = [
        {
            value: "3x",
            label: "Faster Payments",
            description: "Average payment time vs. traditional agency models",
            color: "violet" as const,
        },
        {
            value: "0%",
            label: "Creator Commissions",
            description: "Creators keep 100% of what they earn",
            color: "cyan" as const,
        },
        {
            value: "40%",
            label: "Better ROI",
            description: "Average improvement in campaign performance",
            color: "amber" as const,
        },
    ];

    return (
        <section
            ref={sectionRef}
            className="py-32 sm:py-40 px-6 bg-card/30 relative overflow-hidden"
        >
            {/* Background pattern */}
            <div className="absolute inset-0 grid-pattern opacity-20" />

            {/* Gradient orbs */}
            <motion.div
                className="absolute top-0 left-1/4 w-64 h-64 bg-neon-violet/10 rounded-full blur-3xl"
                animate={{ y: [0, 30, 0], scale: [1, 1.1, 1] }}
                transition={{ duration: 10, repeat: Infinity }}
            />
            <motion.div
                className="absolute bottom-0 right-1/4 w-64 h-64 bg-neon-cyan/10 rounded-full blur-3xl"
                animate={{ y: [0, -30, 0], scale: [1.1, 1, 1.1] }}
                transition={{ duration: 10, repeat: Infinity, delay: 5 }}
            />

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Header */}
                <motion.div
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                >
                    <div className="flex items-center justify-center gap-4 mb-6">
                        <div className="w-12 h-px bg-gradient-to-r from-transparent to-neon-violet" />
                        <span className="text-xs uppercase tracking-[0.3em] text-neon-violet font-mono">
                            The Numbers
                        </span>
                        <div className="w-12 h-px bg-gradient-to-l from-transparent to-neon-violet" />
                    </div>
                    <h2 className="text-fluid-md font-bold mb-6">
                        Clear metrics.{" "}
                        <span className="gradient-text-neon">No inflated claims.</span>
                    </h2>
                </motion.div>

                {/* Metrics grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
                    {metrics.map((metric, i) => (
                        <AnimatedMetric
                            key={metric.label}
                            value={metric.value}
                            label={metric.label}
                            description={metric.description}
                            color={metric.color}
                            delay={0.1 * i}
                        />
                    ))}
                </div>

                {/* Bottom divider */}
                <motion.div
                    className="mt-20 flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.5 }}
                >
                    <div className="w-24 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
                </motion.div>
            </div>
        </section>
    );
}
