"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

const steps = [
    {
        number: "01",
        title: "Brands create campaigns",
        description:
            "Define your campaign goals, budget, and target audience. Set clear deliverables and timelines.",
    },
    {
        number: "02",
        title: "Creators bid transparently",
        description:
            "Browse open campaigns and submit competitive bids. Full visibility into pricing and requirements.",
    },
    {
        number: "03",
        title: "Payments via escrow",
        description:
            "Funds secured upfront. Released automatically upon approval. No chasing payments.",
    },
];

export function HowItWorks() {
    return (
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-4">
                    How Creonity Works
                </h2>
                <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
                    A simple, transparent process for brands and creators alike.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {steps.map((step) => (
                        <HoverBorderGradient
                            key={step.number}
                            as="div"
                            containerClassName="w-full h-full rounded-2xl"
                            className="w-full h-full bg-card rounded-2xl p-0"
                        >
                            <Card className="border-0 bg-transparent h-full">
                                <CardHeader>
                                    <span className="text-5xl font-bold text-muted-foreground/30 mb-2">
                                        {step.number}
                                    </span>
                                    <CardTitle className="text-xl text-foreground">
                                        {step.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">{step.description}</p>
                                </CardContent>
                            </Card>
                        </HoverBorderGradient>
                    ))}
                </div>
            </div>
        </section>
    );
}
