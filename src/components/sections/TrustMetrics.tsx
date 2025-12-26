"use client";

import { Card, CardContent } from "@/components/ui/card";

const metrics = [
    {
        value: "3x",
        label: "Faster Payments",
        description: "Average payment time vs. traditional agency models",
    },
    {
        value: "0%",
        label: "Creator Commissions",
        description: "Creators keep 100% of what they earn",
    },
    {
        value: "40%",
        label: "Better ROI",
        description: "Average improvement in campaign performance",
    },
];

export function TrustMetrics() {
    return (
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-4">
                    Results That Matter
                </h2>
                <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
                    Clear metrics. No inflated claims.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {metrics.map((metric) => (
                        <Card
                            key={metric.label}
                            className="bg-card border-muted text-center p-2"
                        >
                            <CardContent className="pt-8 pb-6">
                                <div className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent mb-3">
                                    {metric.value}
                                </div>
                                <div className="text-lg font-semibold text-foreground mb-2">
                                    {metric.label}
                                </div>
                                <p className="text-sm text-muted-foreground">
                                    {metric.description}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
