"use client";

import { motion } from "motion/react";

const steps = [
    { num: "01", title: "Brief", desc: "Brands post specs. No fluff. Just specs.", color: "bg-white" },
    { num: "02", title: "Create", desc: "You do the work. We handle the admin.", color: "bg-yellow-300" },
    { num: "03", title: "Sync", desc: "Upload assets. Get feedback instantly.", color: "bg-pink-300" },
    { num: "04", title: "Paid", desc: "Funds release. Money in bank.", color: "bg-cyan-300" }
];

export function HowItWorks() {
    return (
        <section id="remix" className="py-24 px-6 border-b-2 border-black bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16 border-b-2 border-black pb-8">
                    <h2 className="text-6xl font-black uppercase tracking-tighter">The System</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {steps.map((step, i) => (
                        <motion.div
                            key={step.num}
                            className={`border-2 border-black p-6 shadow-hard hover-lift ${step.color}`}
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.4, delay: i * 0.1 }}
                        >
                            <span className="font-black text-4xl mb-4 block opacity-20">{step.num}</span>
                            <h3 className="text-2xl font-black uppercase mb-4 border-b-2 border-black pb-2 inline-block">
                                {step.title}
                            </h3>
                            <p className="font-mono text-sm font-bold leading-tight">
                                {step.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
