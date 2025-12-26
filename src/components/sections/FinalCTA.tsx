"use client";

import { Button as MovingBorderButton } from "@/components/ui/moving-border";

export function FinalCTA() {
    return (
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-card/50">
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                    Ready for Transparent Marketing?
                </h2>
                <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
                    Join the platform where trust comes first. No hidden fees.
                    No delayed payments. Just creators and brands working together.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <MovingBorderButton
                        borderRadius="0.75rem"
                        className="px-8 py-3 text-base font-medium"
                        containerClassName="h-14"
                        duration={3000}
                    >
                        Start for Free
                    </MovingBorderButton>

                    <p className="text-sm text-muted-foreground">
                        No credit card required
                    </p>
                </div>
            </div>
        </section>
    );
}
