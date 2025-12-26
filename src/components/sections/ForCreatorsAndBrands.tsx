"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const creatorBenefits = [
    "Browse transparent campaign opportunities with upfront pricing",
    "Submit competitive bids based on your rates and expertise",
    "Receive payments via escrow — no delayed payments",
    "Track performance analytics and build your reputation",
];

const brandBenefits = [
    "Post campaigns and receive bids from vetted creators",
    "Compare creators based on performance metrics, not just followers",
    "Secure funds in escrow before work begins",
    "Real-time ROI tracking and campaign analytics",
];

export function ForCreatorsAndBrands() {
    return (
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-card/30">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-4">
                    Built for Creators & Brands
                </h2>
                <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
                    Two sides of the marketplace, one unified platform.
                </p>

                <Tabs defaultValue="creators" className="w-full">
                    <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-8">
                        <TabsTrigger
                            value="creators"
                            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                        >
                            Creators
                        </TabsTrigger>
                        <TabsTrigger
                            value="brands"
                            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                        >
                            Brands
                        </TabsTrigger>
                    </TabsList>

                    <TabsContent value="creators" className="mt-0">
                        <div className="bg-card border border-muted rounded-xl p-8">
                            <h3 className="text-xl font-semibold text-foreground mb-6">
                                For Creators
                            </h3>
                            <ul className="space-y-4">
                                {creatorBenefits.map((benefit, index) => (
                                    <li
                                        key={index}
                                        className="flex items-start gap-3 text-muted-foreground"
                                    >
                                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                                            <svg
                                                className="w-4 h-4 text-primary"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M5 13l4 4L19 7"
                                                />
                                            </svg>
                                        </span>
                                        {benefit}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </TabsContent>

                    <TabsContent value="brands" className="mt-0">
                        <div className="bg-card border border-muted rounded-xl p-8">
                            <h3 className="text-xl font-semibold text-foreground mb-6">
                                For Brands
                            </h3>
                            <ul className="space-y-4">
                                {brandBenefits.map((benefit, index) => (
                                    <li
                                        key={index}
                                        className="flex items-start gap-3 text-muted-foreground"
                                    >
                                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                                            <svg
                                                className="w-4 h-4 text-primary"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M5 13l4 4L19 7"
                                                />
                                            </svg>
                                        </span>
                                        {benefit}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </section>
    );
}
