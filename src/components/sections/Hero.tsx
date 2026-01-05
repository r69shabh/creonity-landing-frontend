"use client";

import { HeroHighlight } from "@/components/ui/hero-highlight";
import { Spotlight } from "@/components/ui/spotlight";
import { Button } from "@/components/ui/button";

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            <HeroHighlight containerClassName="min-h-screen w-full">
                <Spotlight
                    className="-top-40 left-0 md:left-60 md:-top-20"
                    fill="rgba(255,255,255,0.08)"
                />

                <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
                    <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-8">
                        Creator Marketing Platform
                    </p>

                    <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-light tracking-tight text-foreground leading-[1.1] mb-8">
                        Where trust
                        <span className="block mt-2 font-normal">meets transparency</span>
                    </h1>

                    <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-16 leading-relaxed font-light">
                        A platform for brands and creators to collaborate openly.
                        No agencies. No hidden fees. Just work.
                    </p>

                    <Button
                        size="lg"
                        className="px-12 py-6 text-base font-normal tracking-wide"
                    >
                        Enter Platform
                    </Button>
                </div>
            </HeroHighlight>
        </section>
    );
}
