"use client";

import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

const differentiators = [
    {
        quote: "See exactly how much creators earn and brands pay. No hidden markups or agency fees.",
        name: "Transparent Auctions",
        title: "Full pricing visibility",
    },
    {
        quote: "Funds released immediately upon campaign approval. No NET-30 or NET-60 waiting periods.",
        name: "Instant Settlements",
        title: "Get paid when work is done",
    },
    {
        quote: "Zero platform fees on creator earnings. Brands pay a flat service fee, creators keep 100%.",
        name: "No Hidden Commissions",
        title: "Keep what you earn",
    },
    {
        quote: "Manage campaigns, messaging, contracts, and payments all in one place. No tool juggling.",
        name: "Unified Workflow",
        title: "Everything in one platform",
    },
    {
        quote: "AI-powered recommendations match creators to campaigns based on performance, not follower count.",
        name: "Analytics-Driven Matching",
        title: "Data-backed partnerships",
    },
];

export function WhyCreonity() {
    return (
        <section className="py-24 bg-card/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-4">
                    Why Creonity
                </h2>
                <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
                    Built different. No fluff. Just fundamentals that matter.
                </p>

                <div className="overflow-hidden">
                    <InfiniteMovingCards
                        items={differentiators}
                        direction="left"
                        speed="slow"
                        pauseOnHover={true}
                        className="py-4"
                    />
                </div>
            </div>
        </section>
    );
}
