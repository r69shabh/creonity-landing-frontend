"use client";

import { Button as MovingBorderButton } from "@/components/ui/moving-border";

export function FinalCTA() {
    return (
        <section className="py-32 sm:py-40 lg:py-48 px-6 sm:px-8 lg:px-12 bg-background">
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-foreground mb-8 tracking-tight leading-[1.2]">
                    Ready to work differently?
                </h2>
                <p className="text-lg text-muted-foreground mb-16 max-w-xl mx-auto leading-relaxed font-light">
                    Join the platform where trust comes first.
                </p>

                <MovingBorderButton
                    borderRadius="0.75rem"
                    className="px-12 py-4 text-base font-normal tracking-wide"
                    containerClassName="h-16"
                    duration={4000}
                >
                    Get Started
                </MovingBorderButton>
            </div>
        </section>
    );
}
