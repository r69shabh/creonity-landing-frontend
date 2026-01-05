"use client";

import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

const liveItems = [
    {
        quote: "Active Campaign",
        name: "Summer Beauty Launch",
        title: "$2,500 - $5,000 budget",
    },
    {
        quote: "Creator Spotlight",
        name: "@lifestyle.maya",
        title: "98% completion rate",
    },
    {
        quote: "Recent Payout",
        name: "$3,200 settled",
        title: "Within 24 hours",
    },
    {
        quote: "Active Campaign",
        name: "Tech Product Review",
        title: "$1,800 - $3,500 budget",
    },
    {
        quote: "Creator Spotlight",
        name: "@fitness.collective",
        title: "47 campaigns completed",
    },
    {
        quote: "Recent Payout",
        name: "$5,100 settled",
        title: "Within 24 hours",
    },
];

export function WhyCreonity() {
    return (
        <section className="py-24 sm:py-32 bg-card/30">
            <div className="max-w-7xl mx-auto">
                <div className="px-6 sm:px-8 lg:px-12 mb-16">
                    <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-6 text-center">
                        Live Activity
                    </p>
                    <h2 className="text-2xl sm:text-3xl font-light text-center text-foreground tracking-tight">
                        The platform in motion
                    </h2>
                </div>

                <div className="overflow-hidden">
                    <InfiniteMovingCards
                        items={liveItems}
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
