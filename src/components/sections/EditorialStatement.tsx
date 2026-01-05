"use client";

import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";

export function EditorialStatement() {
    return (
        <section className="py-32 sm:py-40 lg:py-48 px-6 sm:px-8 lg:px-12 bg-background">
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light text-foreground leading-[1.3] tracking-tight">
                    Creator collaboration shouldn&apos;t feel{" "}
                    <AnimatedGradientText className="font-normal">
                        opaque
                    </AnimatedGradientText>
                    .
                </h2>
                <p className="mt-10 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-light">
                    We built Creonity because the creator economy deserves better infrastructure.
                    Clear pricing. Secure payments. Mutual respect.
                </p>
            </div>
        </section>
    );
}
