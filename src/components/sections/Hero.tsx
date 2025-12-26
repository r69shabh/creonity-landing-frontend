"use client";

import { HeroHighlight } from "@/components/ui/hero-highlight";
import { Spotlight } from "@/components/ui/spotlight";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Button } from "@/components/ui/button";

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            <HeroHighlight containerClassName="min-h-screen w-full">
                {/* Spotlight effect - very subtle */}
                <Spotlight
                    className="-top-40 left-0 md:left-60 md:-top-20"
                    fill="rgba(255,255,255,0.15)"
                />

                {/* BackgroundBeams with low opacity */}
                <div className="absolute inset-0 opacity-[0.15] pointer-events-none">
                    <BackgroundBeams />
                </div>

                {/* Content */}
                <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
                        Transparent creator marketing.{" "}
                        <span className="block mt-2">Built for trust.</span>
                    </h1>

                    <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
                        Run campaigns, place bids, and get paid on time — without agencies.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Button size="lg" className="px-8 py-6 text-base font-medium">
                            Get Started
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            className="px-8 py-6 text-base font-medium"
                        >
                            View Demo
                        </Button>
                    </div>
                </div>
            </HeroHighlight>
        </section>
    );
}
