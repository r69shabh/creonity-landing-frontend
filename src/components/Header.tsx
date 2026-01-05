"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const navLinks = [
    { label: "Features", href: "#how-it-works" },
    { label: "For Creators", href: "#for-creators-and-brands" },
    { label: "For Brands", href: "#for-creators-and-brands" },
    { label: "Pricing", href: "#" },
];

export function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-xl border-b border-border/50">
            <nav className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
                <div className="flex items-center justify-between h-20">
                    <Link href="/" className="flex items-center gap-3">
                        <Image
                            src="/images/logo.png"
                            alt="Creonity Logo"
                            width={28}
                            height={28}
                            className="w-7 h-7"
                        />
                        <span className="text-lg font-normal tracking-tight text-foreground">
                            Creonity
                        </span>
                    </Link>

                    <div className="hidden md:flex items-center gap-10">
                        {navLinks.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                className="text-sm text-muted-foreground hover:text-foreground transition-colors tracking-wide"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    <div className="hidden md:flex items-center gap-4">
                        <Button variant="ghost" size="sm" className="text-sm font-normal" asChild>
                            <Link href="https://creonity-creator-dashboard-frontend.vercel.app">
                                Creator Login
                            </Link>
                        </Button>
                        <Button size="sm" className="text-sm font-normal px-6" asChild>
                            <Link href="https://creonity-brand-dashboard-frontend.vercel.app">
                                Brand Login
                            </Link>
                        </Button>
                    </div>

                    <button
                        className="md:hidden p-2 text-muted-foreground hover:text-foreground"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? (
                            <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={1.5}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={1.5}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        )}
                    </button>
                </div>

                {mobileMenuOpen && (
                    <div className="md:hidden py-6 border-t border-border/50">
                        <div className="flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    className="py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <div className="flex gap-3 pt-4 border-t border-border/50">
                                <Button variant="ghost" size="sm" className="flex-1 text-sm font-normal" asChild>
                                    <Link href="https://creonity-creator-dashboard-frontend.vercel.app">
                                        Creator Login
                                    </Link>
                                </Button>
                                <Button size="sm" className="flex-1 text-sm font-normal" asChild>
                                    <Link href="https://creonity-brand-dashboard-frontend.vercel.app">
                                        Brand Login
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
}
