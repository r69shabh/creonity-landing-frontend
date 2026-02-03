"use client";

import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";
import Link from "next/link";

const creatorBenefits = [
    {
        icon: "🎯",
        title: "Discover Campaigns",
        description: "Browse transparent opportunities with upfront pricing",
    },
    {
        icon: "💰",
        title: "Set Your Rates",
        description: "Submit competitive bids based on your expertise",
    },
    {
        icon: "🔒",
        title: "Secure Payments",
        description: "Escrow protection — never chase invoices again",
    },
    {
        icon: "📊",
        title: "Build Reputation",
        description: "Track performance and grow your verified portfolio",
    },
];

const brandBenefits = [
    {
        icon: "🚀",
        title: "Post Campaigns",
        description: "Receive bids from vetted, talented creators",
    },
    {
        icon: "🎯",
        title: "Smart Matching",
        description: "Compare creators by performance, not just followers",
    },
    {
        icon: "✅",
        title: "Risk-Free",
        description: "Escrow funds released only on approval",
    },
    {
        icon: "📈",
        title: "Track ROI",
        description: "Real-time campaign analytics and reporting",
    },
];

function SideCard({
    type,
    benefits,
    isActive,
    onHover,
}: {
    type: "creator" | "brand";
    benefits: typeof creatorBenefits;
    isActive: boolean;
    onHover: () => void;
}) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const isCreator = type === "creator";
    const gradientClass = isCreator
        ? "from-neon-violet to-purple-600"
        : "from-neon-cyan to-blue-600";
    const dashboardUrl = isCreator
        ? "https://creonity-creator-dashboard-frontend.vercel.app"
        : "https://creonity-brand-dashboard-frontend.vercel.app";
    const activeColor = isCreator ? "neon-violet" : "neon-cyan";

    return (
        <motion.div
            ref={ref}
            className={`relative flex-1 rounded-3xl transition-all duration-500 overflow-hidden ${
                isActive
                    ? `bg-gradient-to-br ${gradientClass} shadow-2xl`
                    : "bg-card/40 border border-border hover:border-border/80"
            }`}
            initial={{ opacity: 0, x: isCreator ? -50 : 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: isCreator ? 0.1 : 0.2 }}
            onMouseEnter={onHover}
            whileHover={{ scale: isActive ? 1 : 1.02 }}
        >
            {/* Dot pattern background */}
            {isActive && (
                <div
                    className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
                        backgroundSize: "24px 24px",
                    }}
                />
            )}

            <div className="relative z-10 p-8 md:p-12">
                {/* Header */}
                <div className="flex items-center gap-4 mb-8">
                    <motion.div
                        className={`text-4xl ${isActive ? "" : "grayscale opacity-50"}`}
                        animate={{ scale: isActive ? [1, 1.1, 1] : 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        {isCreator ? "🎨" : "🏢"}
                    </motion.div>
                    <div>
                        <h3
                            className={`text-2xl md:text-3xl font-bold ${
                                isActive ? "text-white" : "text-foreground"
                            }`}
                        >
                            For {isCreator ? "Creators" : "Brands"}
                        </h3>
                        <p
                            className={`text-sm ${
                                isActive ? "text-white/70" : "text-muted-foreground"
                            }`}
                        >
                            {isCreator ? "Monetize your influence" : "Find the perfect match"}
                        </p>
                    </div>
                </div>

                {/* Benefits */}
                <div className="space-y-4 mb-8">
                    {benefits.map((benefit, i) => (
                        <motion.div
                            key={i}
                            className={`flex items-start gap-4 p-4 rounded-xl transition-colors ${
                                isActive ? "bg-white/10 backdrop-blur-sm" : "bg-card/50"
                            }`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.3 + i * 0.1 }}
                        >
                            <span className={`text-xl ${isActive ? "" : "grayscale"}`}>
                                {benefit.icon}
                            </span>
                            <div>
                                <h4
                                    className={`font-medium ${
                                        isActive ? "text-white" : "text-foreground"
                                    }`}
                                >
                                    {benefit.title}
                                </h4>
                                <p
                                    className={`text-sm ${
                                        isActive ? "text-white/70" : "text-muted-foreground"
                                    }`}
                                >
                                    {benefit.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <motion.a
                    href={dashboardUrl}
                    className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all ${
                        isActive
                            ? "bg-white text-gray-900 hover:bg-white/90"
                            : `bg-gradient-to-r ${gradientClass} text-white hover:shadow-lg`
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                >
                    {isCreator ? "Start Creating" : "Post Campaign"}
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                    </svg>
                </motion.a>
            </div>

            {/* Decorative orbs */}
            {isActive && (
                <>
                    <motion.div
                        className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full blur-3xl"
                        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                        transition={{ duration: 4, repeat: Infinity }}
                    />
                    <motion.div
                        className="absolute -bottom-20 -left-20 w-40 h-40 bg-white/10 rounded-full blur-3xl"
                        animate={{ scale: [1.2, 1, 1.2], opacity: [0.5, 0.8, 0.5] }}
                        transition={{ duration: 4, repeat: Infinity, delay: 2 }}
                    />
                </>
            )}
        </motion.div>
    );
}

export function ForCreatorsAndBrands() {
    const [activeType, setActiveType] = useState<"creator" | "brand">("creator");
    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    return (
        <section ref={sectionRef} className="py-32 px-6 bg-background relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-radial from-neon-violet/5 via-transparent to-transparent pointer-events-none" />
            <div className="absolute inset-0 dot-pattern opacity-20" />

            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                >
                    <div className="flex items-center justify-center gap-4 mb-6">
                        <div className="w-12 h-px bg-gradient-to-r from-transparent to-neon-violet" />
                        <span className="text-xs uppercase tracking-[0.3em] text-neon-violet font-mono">
                            Two Sides, One Platform
                        </span>
                        <div className="w-12 h-px bg-gradient-to-l from-transparent to-neon-violet" />
                    </div>
                    <h2 className="text-fluid-lg font-bold mb-6">
                        Built for <span className="gradient-text-neon">both</span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Whether you create content or need it created, Creonity brings both worlds
                        together seamlessly.
                    </p>
                </motion.div>

                {/* Split cards */}
                <div className="flex flex-col lg:flex-row gap-6">
                    <SideCard
                        type="creator"
                        benefits={creatorBenefits}
                        isActive={activeType === "creator"}
                        onHover={() => setActiveType("creator")}
                    />
                    <SideCard
                        type="brand"
                        benefits={brandBenefits}
                        isActive={activeType === "brand"}
                        onHover={() => setActiveType("brand")}
                    />
                </div>

                {/* Bottom connector */}
                <motion.div
                    className="flex items-center justify-center mt-16"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.5 }}
                >
                    <div className="flex items-center gap-4 px-6 py-3 rounded-full bg-card/50 border border-border">
                        <span className="text-2xl">🤝</span>
                        <span className="text-muted-foreground">
                            Where creators and brands connect{" "}
                            <span className="text-neon-violet font-medium">transparently</span>
                        </span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
