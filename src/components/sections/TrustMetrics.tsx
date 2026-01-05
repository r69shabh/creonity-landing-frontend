"use client";

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
        <section className="py-32 sm:py-40 px-6 sm:px-8 lg:px-12 bg-card/30">
            <div className="max-w-5xl mx-auto">
                <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-6 text-center">
                    The Numbers
                </p>
                <h2 className="text-2xl sm:text-3xl font-light text-center text-foreground mb-20 tracking-tight">
                    Clear metrics. No inflated claims.
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
                    {metrics.map((metric) => (
                        <div key={metric.label} className="text-center">
                            <div className="text-5xl sm:text-6xl lg:text-7xl font-extralight text-foreground mb-4 tracking-tight">
                                {metric.value}
                            </div>
                            <div className="text-lg font-normal text-foreground mb-2">
                                {metric.label}
                            </div>
                            <p className="text-sm text-muted-foreground font-light leading-relaxed max-w-[200px] mx-auto">
                                {metric.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
