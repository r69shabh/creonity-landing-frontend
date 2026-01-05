"use client";

import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

const capabilities = [
    {
        number: "01",
        title: "Campaign Discovery",
        description:
            "Browse open campaigns with complete transparency. See budgets, requirements, and timelines upfront before you commit.",
    },
    {
        number: "02",
        title: "Transparent Bidding",
        description:
            "Submit competitive bids based on your rates. No hidden negotiations. Full visibility into what brands are willing to pay.",
    },
    {
        number: "03",
        title: "Escrow Payments",
        description:
            "Funds secured before work begins. Released automatically upon approval. No more chasing invoices or waiting 60 days.",
    },
    {
        number: "04",
        title: "Performance Tracking",
        description:
            "Real-time analytics on campaign performance. Build your reputation with verified metrics, not just follower counts.",
    },
];

export function HowItWorks() {
    return (
        <section className="py-32 sm:py-40 px-6 sm:px-8 lg:px-12 bg-background">
            <div className="max-w-4xl mx-auto">
                <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-6 text-center">
                    How It Works
                </p>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-center text-foreground mb-24 tracking-tight">
                    Platform Capabilities
                </h2>

                <div className="space-y-20">
                    {capabilities.map((capability, index) => (
                        <div
                            key={capability.number}
                            className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start"
                        >
                            <div className="md:col-span-2">
                                <span className="text-6xl font-extralight text-muted-foreground/30">
                                    {capability.number}
                                </span>
                            </div>
                            <div className="md:col-span-10">
                                <h3 className="text-2xl sm:text-3xl font-light text-foreground mb-4 tracking-tight">
                                    {capability.title}
                                </h3>
                                <p className="text-lg text-muted-foreground leading-relaxed font-light max-w-2xl">
                                    {capability.description}
                                </p>
                                {index === 0 && (
                                    <div className="mt-8">
                                        <HoverBorderGradient
                                            as="span"
                                            containerClassName="rounded-full"
                                            className="text-sm px-6 py-2"
                                        >
                                            Explore Campaigns
                                        </HoverBorderGradient>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
