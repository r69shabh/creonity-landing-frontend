"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useScroll, useTransform } from "motion/react";
import { useState, useEffect, useRef } from "react";

const navLinks = [
    { label: "Features", href: "#how-it-works" },
    { label: "For Creators", href: "#for-creators-and-brands" },
    { label: "For Brands", href: "#for-creators-and-brands" },
];

// Magnetic nav link
function MagneticLink({ href, children, onClick }: { href: string; children: React.ReactNode; onClick?: () => void }) {
    const ref = useRef<HTMLAnchorElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const springConfig = { damping: 20, stiffness: 300 };
    const springX = useSpring(x, springConfig);
    const springY = useSpring(y, springConfig);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        x.set((e.clientX - centerX) * 0.15);
        y.set((e.clientY - centerY) * 0.15);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.a
            ref={ref}
            href={href}
            onClick={onClick}
            className="relative text-sm text-muted-foreground hover:text-foreground transition-colors tracking-wide link-underline py-2"
            style={{ x: springX, y: springY }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            {children}
        </motion.a>
    );
}

export function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const { scrollY } = useScroll();

    // Track scroll position
    useEffect(() => {
        const unsubscribe = scrollY.on("change", (latest) => {
            setIsScrolled(latest > 50);
        });
        return () => unsubscribe();
    }, [scrollY]);

    return (
        <motion.header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                isScrolled
                    ? "bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-lg shadow-background/20"
                    : "bg-transparent"
            }`}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
        >
            <nav className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <motion.div
                            className="relative w-8 h-8"
                            whileHover={{ scale: 1.1, rotate: 10 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <Image
                                src="/images/logo.png"
                                alt="Creonity"
                                width={32}
                                height={32}
                                className="w-8 h-8"
                            />
                            {/* Glow effect on hover */}
                            <div className="absolute inset-0 bg-neon-violet/30 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                        </motion.div>
                        <span className="text-lg font-medium tracking-tight">
                            Creon<span className="gradient-text-neon">ity</span>
                        </span>
                    </Link>

                    {/* Desktop navigation */}
                    <div className="hidden md:flex items-center gap-10">
                        {navLinks.map((link) => (
                            <MagneticLink key={link.label} href={link.href}>
                                {link.label}
                            </MagneticLink>
                        ))}
                    </div>

                    {/* CTA buttons */}
                    <div className="hidden md:flex items-center gap-3">
                        <motion.a
                            href="https://creonity-creator-dashboard-frontend.vercel.app"
                            className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Creator Login
                        </motion.a>
                        <motion.a
                            href="https://creonity-brand-dashboard-frontend.vercel.app"
                            className="group relative px-5 py-2.5 text-sm font-medium rounded-full overflow-hidden"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {/* Animated gradient background */}
                            <div className="absolute inset-0 bg-gradient-to-r from-neon-violet to-neon-cyan opacity-90 group-hover:opacity-100 transition-opacity" />
                            <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan to-neon-violet opacity-0 group-hover:opacity-100 transition-opacity" />
                            <span className="relative z-10 text-white">Brand Login</span>
                        </motion.a>
                    </div>

                    {/* Mobile menu button */}
                    <motion.button
                        className="md:hidden p-2 text-muted-foreground hover:text-foreground"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        whileTap={{ scale: 0.9 }}
                        aria-label="Toggle menu"
                    >
                        <motion.div
                            className="w-6 h-5 flex flex-col justify-between"
                            animate={mobileMenuOpen ? "open" : "closed"}
                        >
                            <motion.span
                                className="w-full h-0.5 bg-current origin-left"
                                variants={{
                                    open: { rotate: 45, y: -2 },
                                    closed: { rotate: 0, y: 0 },
                                }}
                            />
                            <motion.span
                                className="w-full h-0.5 bg-current"
                                variants={{
                                    open: { opacity: 0, x: -20 },
                                    closed: { opacity: 1, x: 0 },
                                }}
                            />
                            <motion.span
                                className="w-full h-0.5 bg-current origin-left"
                                variants={{
                                    open: { rotate: -45, y: 2 },
                                    closed: { rotate: 0, y: 0 },
                                }}
                            />
                        </motion.div>
                    </motion.button>
                </div>

                {/* Mobile menu */}
                <motion.div
                    className="md:hidden overflow-hidden"
                    initial={false}
                    animate={{
                        height: mobileMenuOpen ? "auto" : 0,
                        opacity: mobileMenuOpen ? 1 : 0,
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                    <div className="py-6 border-t border-border/50">
                        <div className="flex flex-col gap-4">
                            {navLinks.map((link, i) => (
                                <motion.div
                                    key={link.label}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={mobileMenuOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                                    transition={{ delay: i * 0.1 }}
                                >
                                    <Link
                                        href={link.href}
                                        className="block py-2 text-foreground hover:text-neon-violet transition-colors"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        {link.label}
                                    </Link>
                                </motion.div>
                            ))}
                            <div className="flex gap-3 pt-4 border-t border-border/50">
                                <a
                                    href="https://creonity-creator-dashboard-frontend.vercel.app"
                                    className="flex-1 py-3 text-center text-sm border border-border rounded-full hover:border-neon-violet/50 transition-colors"
                                >
                                    Creator Login
                                </a>
                                <a
                                    href="https://creonity-brand-dashboard-frontend.vercel.app"
                                    className="flex-1 py-3 text-center text-sm bg-gradient-to-r from-neon-violet to-neon-cyan text-white rounded-full"
                                >
                                    Brand Login
                                </a>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </nav>
        </motion.header>
    );
}
