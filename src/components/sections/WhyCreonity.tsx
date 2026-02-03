"use client";

import { motion, useInView } from "motion/react";
import { useRef, useEffect, useState } from "react";

// Live activity notification card
function ActivityCard({
    avatar,
    action,
    detail,
    time,
    color,
}: {
    avatar: string;
    action: string;
    detail: string;
    time: string;
    color: "violet" | "cyan" | "amber" | "emerald";
}) {
    const colorClasses = {
        violet: "border-neon-violet/30 bg-neon-violet/5",
        cyan: "border-neon-cyan/30 bg-neon-cyan/5",
        amber: "border-neon-amber/30 bg-neon-amber/5",
        emerald: "border-neon-emerald/30 bg-neon-emerald/5",
    };

    const dotColors = {
        violet: "bg-neon-violet",
        cyan: "bg-neon-cyan",
        amber: "bg-neon-amber",
        emerald: "bg-neon-emerald",
    };

    return (
        <div
            className={`flex items-center gap-4 px-6 py-4 rounded-2xl border ${colorClasses[color]} backdrop-blur-sm min-w-[320px] transition-all hover:scale-105`}
        >
            <div className="text-2xl">{avatar}</div>
            <div className="flex-1">
                <p className="text-sm text-foreground font-medium">{action}</p>
                <p className="text-xs text-muted-foreground">{detail}</p>
            </div>
            <div className="flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${dotColors[color]} animate-pulse`} />
                <span className="text-xs text-muted-foreground">{time}</span>
            </div>
        </div>
    );
}

// Infinite scrolling marquee
function Marquee({
    children,
    direction = "left",
    speed = 40,
}: {
    children: React.ReactNode;
    direction?: "left" | "right";
    speed?: number;
}) {
    return (
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
            <motion.div
                className="flex gap-4"
                animate={{
                    x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
                }}
                transition={{
                    x: {
                        duration: speed,
                        repeat: Infinity,
                        ease: "linear",
                    },
                }}
            >
                {children}
                {children}
            </motion.div>
        </div>
    );
}

export function WhyCreonity() {
    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    const activities = [
        {
            avatar: "👩‍🎨",
            action: "Sarah just completed a campaign",
            detail: "Fashion Nova • $2,500",
            time: "2m ago",
            color: "violet" as const,
        },
        {
            avatar: "🏢",
            action: "TechStart posted a new campaign",
            detail: "Looking for tech reviewers",
            time: "5m ago",
            color: "cyan" as const,
        },
        {
            avatar: "👨‍💻",
            action: "Mike received payment",
            detail: "SaaS Review • $1,800",
            time: "8m ago",
            color: "emerald" as const,
        },
        {
            avatar: "🎬",
            action: "Emma submitted a bid",
            detail: "Travel vlog campaign",
            time: "12m ago",
            color: "amber" as const,
        },
        {
            avatar: "🛍️",
            action: "BeautyBrand approved content",
            detail: "Skincare routine video",
            time: "15m ago",
            color: "violet" as const,
        },
        {
            avatar: "📸",
            action: "Alex completed verification",
            detail: "Now a verified creator",
            time: "20m ago",
            color: "cyan" as const,
        },
    ];

    const features = [
        {
            icon: "🔍",
            title: "Complete Transparency",
            description: "Every campaign shows full budget, requirements, and timeline upfront.",
            color: "violet" as const,
        },
        {
            icon: "🔐",
            title: "Escrow Protection",
            description: "Funds are secured before work begins, released on approval.",
            color: "cyan" as const,
        },
        {
            icon: "📊",
            title: "Performance-Based",
            description: "Match with brands based on actual metrics, not just follower count.",
            color: "amber" as const,
        },
        {
            icon: "⚡",
            title: "Instant Payments",
            description: "Get paid within 24 hours of content approval.",
            color: "emerald" as const,
        },
    ];

    return (
        <section
            ref={sectionRef}
            className="py-32 bg-background relative overflow-hidden"
        >
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-radial from-neon-cyan/5 via-transparent to-transparent pointer-events-none" />

            {/* Header */}
            <div className="px-6 mb-16">
                <motion.div
                    className="max-w-4xl mx-auto text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                >
                    <div className="flex items-center justify-center gap-4 mb-6">
                        <div className="w-12 h-px bg-gradient-to-r from-transparent to-neon-cyan" />
                        <span className="text-xs uppercase tracking-[0.3em] text-neon-cyan font-mono">
                            Live Platform
                        </span>
                        <div className="w-12 h-px bg-gradient-to-l from-transparent to-neon-cyan" />
                    </div>
                    <h2 className="text-fluid-lg font-bold mb-6">
                        Why creators love{" "}
                        <span className="gradient-text-neon">Creonity</span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Join thousands of creators and brands building transparent partnerships.
                    </p>
                </motion.div>
            </div>

            {/* Live activity marquee */}
            <div className="mb-20 space-y-4">
                <Marquee direction="left" speed={50}>
                    {activities.slice(0, 3).map((activity, i) => (
                        <ActivityCard key={i} {...activity} />
                    ))}
                </Marquee>
                <Marquee direction="right" speed={45}>
                    {activities.slice(3).map((activity, i) => (
                        <ActivityCard key={i} {...activity} />
                    ))}
                </Marquee>
            </div>

            {/* Features grid */}
            <div className="px-6">
                <div className="max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {features.map((feature, i) => (
                            <motion.div
                                key={feature.title}
                                className="group relative p-6 rounded-2xl bg-card/40 border border-border hover:border-neon-violet/30 transition-all duration-300"
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: 0.1 * i }}
                                whileHover={{ y: -5 }}
                            >
                                {/* Hover glow */}
                                <div className="absolute inset-0 rounded-2xl bg-gradient-radial from-neon-violet/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="relative z-10 flex items-start gap-4">
                                    <motion.div
                                        className="text-3xl"
                                        whileHover={{ scale: 1.2, rotate: 10 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                    >
                                        {feature.icon}
                                    </motion.div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-foreground mb-2">
                                            {feature.title}
                                        </h3>
                                        <p className="text-sm text-muted-foreground leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
