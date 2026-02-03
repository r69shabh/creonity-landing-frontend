"use client";

import { motion } from "motion/react";

export function ForCreatorsAndBrands() {
    return (
        <section id="system" className="py-24 px-6 border-b-2 border-black bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-8">
                    
                    {/* Creator Card */}
                    <div className="bg-white border-2 border-black shadow-hard-xl p-8 md:p-12 relative overflow-hidden group hover:bg-black hover:text-white transition-colors duration-300">
                        <div className="relative z-10">
                            <span className="border-2 border-current px-3 py-1 font-bold text-xs uppercase mb-6 inline-block">
                                Mode: Artist
                            </span>
                            <h3 className="text-6xl font-black uppercase mb-8">Make.</h3>
                            <ul className="space-y-4 font-mono font-bold text-lg">
                                <li className="flex items-center gap-2">→ Find Briefs</li>
                                <li className="flex items-center gap-2">→ Set Rates</li>
                                <li className="flex items-center gap-2">→ Get Paid</li>
                            </ul>
                            <a href="https://creonity-creator-dashboard-frontend.vercel.app" className="mt-8 inline-block border-b-4 border-current pb-1 font-black text-xl uppercase">
                                Enter Studio
                            </a>
                        </div>
                        <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-300 rounded-full blur-[60px] opacity-50 group-hover:bg-pink-500 transition-colors" />
                    </div>

                    {/* Brand Card */}
                    <div className="bg-black text-white border-2 border-black shadow-hard-xl p-8 md:p-12 relative overflow-hidden group hover:bg-white hover:text-black transition-colors duration-300">
                        <div className="relative z-10">
                            <span className="border-2 border-current px-3 py-1 font-bold text-xs uppercase mb-6 inline-block">
                                Mode: Business
                            </span>
                            <h3 className="text-6xl font-black uppercase mb-8">Scale.</h3>
                            <ul className="space-y-4 font-mono font-bold text-lg">
                                <li className="flex items-center gap-2">→ Hire Talent</li>
                                <li className="flex items-center gap-2">→ Track ROI</li>
                                <li className="flex items-center gap-2">→ Automate Ops</li>
                            </ul>
                            <a href="https://creonity-brand-dashboard-frontend.vercel.app" className="mt-8 inline-block border-b-4 border-current pb-1 font-black text-xl uppercase">
                                Launch Campaign
                            </a>
                        </div>
                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-cyan-300 rounded-full blur-[60px] opacity-50" />
                    </div>

                </div>
            </div>
        </section>
    );
}
