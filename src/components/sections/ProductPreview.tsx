"use client";

import Image from "next/image";
import Link from "next/link";
import { Spotlight } from "@/components/ui/spotlight";

export function ProductPreview() {
    return (
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
            <div className="max-w-6xl mx-auto relative">
                <Spotlight
                    className="absolute -top-40 left-1/2 -translate-x-1/2"
                    fill="rgba(255,255,255,0.1)"
                />

                <h2 className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-4">
                    Dashboards Built for Clarity
                </h2>
                <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
                    Purpose-built interfaces for creators and brands. No feature bloat.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Creator Dashboard */}
                    <Link
                        href="https://creonity-creator-dashboard-frontend.vercel.app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative rounded-xl overflow-hidden border border-muted bg-card/50 transition-all hover:border-foreground/20 hover:shadow-xl"
                    >
                        <div className="aspect-[16/10] relative overflow-hidden">
                            <Image
                                src="/images/creator-dashboard.png"
                                alt="Creonity Creator Dashboard"
                                fill
                                className="object-cover object-top transition-transform group-hover:scale-105"
                            />
                        </div>
                        <div className="p-4 border-t border-muted">
                            <h3 className="font-semibold text-foreground flex items-center gap-2">
                                For Creators
                                <svg
                                    className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                    />
                                </svg>
                            </h3>
                            <p className="text-sm text-muted-foreground mt-1">
                                Track earnings, manage campaigns, and analyze performance metrics.
                            </p>
                        </div>
                    </Link>

                    {/* Brand Dashboard */}
                    <Link
                        href="https://creonity-brand-dashboard-frontend.vercel.app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative rounded-xl overflow-hidden border border-muted bg-card/50 transition-all hover:border-foreground/20 hover:shadow-xl"
                    >
                        <div className="aspect-[16/10] relative overflow-hidden">
                            <Image
                                src="/images/brand-dashboard.png"
                                alt="Creonity Brand Dashboard"
                                fill
                                className="object-cover object-top transition-transform group-hover:scale-105"
                            />
                        </div>
                        <div className="p-4 border-t border-muted">
                            <h3 className="font-semibold text-foreground flex items-center gap-2">
                                For Brands
                                <svg
                                    className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                    />
                                </svg>
                            </h3>
                            <p className="text-sm text-muted-foreground mt-1">
                                Launch campaigns, review bids, and measure ROI in real-time.
                            </p>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
}
