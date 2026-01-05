"use client";

import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";

const creatorBenefits = [
    "Browse transparent campaign opportunities with upfront pricing",
    "Submit competitive bids based on your rates and expertise",
    "Receive payments via escrow — no delayed payments",
    "Track performance analytics and build your reputation",
];

const brandBenefits = [
    "Post campaigns and receive bids from vetted creators",
    "Compare creators based on performance metrics, not just followers",
    "Secure funds in escrow before work begins",
    "Real-time ROI tracking and campaign analytics",
];

export function ForCreatorsAndBrands() {
    return (
        <section className="py-32 sm:py-40 px-6 sm:px-8 lg:px-12 bg-background">
            <div className="max-w-6xl mx-auto">
                <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-6 text-center">
                    Two Sides, One Platform
                </p>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-center text-foreground mb-24 tracking-tight">
                    Built for both
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
                    <div>
                        <h3 className="text-2xl sm:text-3xl font-light text-foreground mb-8 tracking-tight">
                            For{" "}
                            <AnimatedGradientText>Creators</AnimatedGradientText>
                        </h3>
                        <ul className="space-y-6">
                            {creatorBenefits.map((benefit, index) => (
                                <li
                                    key={index}
                                    className="flex items-start gap-4 text-muted-foreground"
                                >
                                    <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-foreground/40 mt-2.5" />
                                    <span className="text-lg leading-relaxed font-light">
                                        {benefit}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-2xl sm:text-3xl font-light text-foreground mb-8 tracking-tight">
                            For{" "}
                            <AnimatedGradientText>Brands</AnimatedGradientText>
                        </h3>
                        <ul className="space-y-6">
                            {brandBenefits.map((benefit, index) => (
                                <li
                                    key={index}
                                    className="flex items-start gap-4 text-muted-foreground"
                                >
                                    <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-foreground/40 mt-2.5" />
                                    <span className="text-lg leading-relaxed font-light">
                                        {benefit}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
