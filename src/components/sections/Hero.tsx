"use client";

import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "motion/react";
import { useRef, useState, useEffect, useCallback } from "react";
import Link from "next/link";

// Interactive terminal with typing effect
function InteractiveTerminal() {
    const [currentLine, setCurrentLine] = useState(0);
    const [displayedText, setDisplayedText] = useState("");
    const [showCursor, setShowCursor] = useState(true);

    const lines = [
        { type: "prompt", text: "creonity" },
        { type: "command", text: " init my-creative-project" },
        { type: "output", text: "" },
        { type: "output", text: "✓ Project initialized" },
        { type: "output", text: "✓ AI assistant connected" },
        { type: "output", text: "✓ Templates loaded" },
        { type: "output", text: "" },
        { type: "prompt", text: "creonity" },
        { type: "command", text: " create landing-page --style futuristic" },
        { type: "output", text: "" },
        { type: "output", text: "🚀 Generating with AI..." },
        { type: "success", text: "✨ Done! Your creation is ready." },
    ];

    useEffect(() => {
        const typeText = async () => {
            for (let i = 0; i < lines.length; i++) {
                setCurrentLine(i);
                const line = lines[i];
                const fullText = line.text;

                if (line.type === "command") {
                    // Type character by character
                    for (let j = 0; j <= fullText.length; j++) {
                        setDisplayedText(fullText.slice(0, j));
                        await new Promise(resolve => setTimeout(resolve, 50));
                    }
                    await new Promise(resolve => setTimeout(resolve, 500));
                } else {
                    setDisplayedText(fullText);
                    await new Promise(resolve => setTimeout(resolve, line.type === "output" ? 200 : 800));
                }
            }
            // Reset and loop
            await new Promise(resolve => setTimeout(resolve, 3000));
            setCurrentLine(0);
            setDisplayedText("");
        };

        typeText();
        const interval = setInterval(typeText, 15000);
        return () => clearInterval(interval);
    }, []);

    // Cursor blink
    useEffect(() => {
        const interval = setInterval(() => setShowCursor(v => !v), 500);
        return () => clearInterval(interval);
    }, []);

    return (
        <motion.div
            className="terminal-window w-full max-w-lg shadow-2xl"
            initial={{ opacity: 0, y: 40, rotateX: -15 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ delay: 0.5, duration: 0.8, type: "spring" }}
        >
            <div className="terminal-header">
                <div className="terminal-dot terminal-dot-red" />
                <div className="terminal-dot terminal-dot-yellow" />
                <div className="terminal-dot terminal-dot-green" />
                <span className="ml-4 text-xs text-muted-foreground font-mono">creonity-cli</span>
            </div>
            <div className="terminal-body min-h-[280px]">
                {lines.slice(0, currentLine + 1).map((line, i) => (
                    <div key={i} className="flex">
                        {line.type === "prompt" && (
                            <span className="terminal-prompt">❯ {line.text}</span>
                        )}
                        {line.type === "command" && (
                            <span className="text-neon-cyan">
                                {i === currentLine ? displayedText : line.text}
                                {i === currentLine && showCursor && (
                                    <span className="terminal-cursor" />
                                )}
                            </span>
                        )}
                        {line.type === "output" && (
                            <span className="terminal-output">{line.text}</span>
                        )}
                        {line.type === "success" && (
                            <motion.span
                                className="text-neon-emerald font-medium"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                            >
                                {line.text}
                            </motion.span>
                        )}
                    </div>
                ))}
            </div>
        </motion.div>
    );
}

// Morphing organic blob
function OrganicBlob({
    className,
    color,
    size = 400,
    delay = 0
}: {
    className?: string;
    color: "violet" | "cyan" | "amber";
    size?: number;
    delay?: number;
}) {
    const colors = {
        violet: "from-neon-violet/30 to-neon-violet/5",
        cyan: "from-neon-cyan/30 to-neon-cyan/5",
        amber: "from-neon-amber/30 to-neon-amber/5",
    };

    return (
        <motion.div
            className={`absolute bg-gradient-radial ${colors[color]} blur-3xl animate-float-organic ${className}`}
            style={{ width: size, height: size }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay, duration: 1.5 }}
        />
    );
}

// Glitch text effect
function GlitchText({ children, className }: { children: string; className?: string }) {
    const [isGlitching, setIsGlitching] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsGlitching(true);
            setTimeout(() => setIsGlitching(false), 200);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <span className={`relative inline-block ${className}`}>
            <span className={isGlitching ? "animate-glitch" : ""}>{children}</span>
            {isGlitching && (
                <>
                    <span
                        className="absolute inset-0 text-neon-cyan opacity-70"
                        style={{ clipPath: "inset(20% 0 30% 0)", transform: "translateX(-2px)" }}
                    >
                        {children}
                    </span>
                    <span
                        className="absolute inset-0 text-neon-rose opacity-70"
                        style={{ clipPath: "inset(50% 0 10% 0)", transform: "translateX(2px)" }}
                    >
                        {children}
                    </span>
                </>
            )}
        </span>
    );
}

// Magnetic button with physics
function MagneticButton({
    children,
    href,
    variant = "primary"
}: {
    children: React.ReactNode;
    href: string;
    variant?: "primary" | "secondary";
}) {
    const ref = useRef<HTMLAnchorElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const springConfig = { damping: 15, stiffness: 150 };
    const springX = useSpring(x, springConfig);
    const springY = useSpring(y, springConfig);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        x.set((e.clientX - centerX) * 0.3);
        y.set((e.clientY - centerY) * 0.3);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    const baseClasses = "group relative inline-flex items-center gap-3 px-8 py-4 rounded-full font-medium overflow-hidden transition-all duration-300";
    const primaryClasses = "bg-gradient-to-r from-neon-violet to-purple-600 text-white hover:shadow-[0_0_40px_rgba(139,92,246,0.4)]";
    const secondaryClasses = "bg-transparent border border-border text-foreground hover:border-neon-violet/50 hover:bg-neon-violet/5";

    return (
        <motion.a
            ref={ref}
            href={href}
            className={`${baseClasses} ${variant === "primary" ? primaryClasses : secondaryClasses}`}
            style={{ x: springX, y: springY }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
        >
            <span className="relative z-10">{children}</span>
            {variant === "primary" && (
                <>
                    <motion.span
                        className="relative z-10"
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    >
                        →
                    </motion.span>
                    <div className="absolute inset-0 bg-gradient-to-r from-neon-violet to-neon-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {/* Shimmer effect */}
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                        initial={{ x: "-100%" }}
                        animate={{ x: "200%" }}
                        transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                    />
                </>
            )}
        </motion.a>
    );
}

// Floating particles
function FloatingParticles() {
    const particles = Array.from({ length: 30 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 1,
        duration: Math.random() * 10 + 10,
        delay: Math.random() * 5,
    }));

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {particles.map((particle) => (
                <motion.div
                    key={particle.id}
                    className="absolute rounded-full bg-neon-violet/30"
                    style={{
                        width: particle.size,
                        height: particle.size,
                        left: `${particle.x}%`,
                        top: `${particle.y}%`,
                    }}
                    animate={{
                        y: [0, -100, 0],
                        opacity: [0, 1, 0],
                    }}
                    transition={{
                        duration: particle.duration,
                        delay: particle.delay,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            ))}
        </div>
    );
}

// Animated word reveal
function AnimatedHeadline() {
    const words = ["Create", "Without", "Limits"];

    return (
        <h1 className="text-fluid-xl font-bold leading-[0.9] tracking-tighter">
            {words.map((word, i) => (
                <motion.span
                    key={word}
                    className={`block ${i === 2 ? "gradient-text-neon glow-text-violet" : ""}`}
                    initial={{ opacity: 0, y: 50, rotateX: -90 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{
                        delay: 0.2 + i * 0.15,
                        duration: 0.8,
                        type: "spring",
                        stiffness: 100,
                    }}
                >
                    {word}
                </motion.span>
            ))}
        </h1>
    );
}

// Mouse follower gradient
function MouseGradient() {
    const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePos({
                x: (e.clientX / window.innerWidth) * 100,
                y: (e.clientY / window.innerHeight) * 100,
            });
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div
            className="absolute inset-0 opacity-40 transition-all duration-1000 ease-out pointer-events-none"
            style={{
                background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%,
                    hsl(263 90% 58% / 0.15) 0%,
                    hsl(187 95% 53% / 0.05) 25%,
                    transparent 50%)`,
            }}
        />
    );
}

export function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen flex items-center overflow-hidden bg-background"
        >
            {/* Background layers */}
            <MouseGradient />
            <FloatingParticles />

            {/* Grid pattern overlay */}
            <div className="absolute inset-0 grid-pattern opacity-30" />

            {/* Organic blobs */}
            <OrganicBlob className="top-0 left-0 -translate-x-1/2 -translate-y-1/2" color="violet" size={600} delay={0} />
            <OrganicBlob className="bottom-0 right-0 translate-x-1/3 translate-y-1/3" color="cyan" size={500} delay={0.3} />
            <OrganicBlob className="top-1/2 right-1/4" color="amber" size={300} delay={0.6} />

            {/* Main content - Split screen */}
            <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-12 py-20">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left side - Typography */}
                    <div className="order-2 lg:order-1">
                        {/* Label */}
                        <motion.div
                            className="flex items-center gap-3 mb-8"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 }}
                        >
                            <div className="w-12 h-px bg-gradient-to-r from-neon-violet to-transparent" />
                            <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-mono">
                                AI-Powered Creator Platform
                            </span>
                        </motion.div>

                        {/* Headline */}
                        <AnimatedHeadline />

                        {/* Description */}
                        <motion.p
                            className="mt-8 text-lg lg:text-xl text-muted-foreground max-w-lg leading-relaxed"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                        >
                            Build, automate, and scale your creative work through{" "}
                            <GlitchText className="text-neon-cyan font-medium">AI-assisted</GlitchText>{" "}
                            development. No code required.
                        </motion.p>

                        {/* CTA buttons */}
                        <motion.div
                            className="flex flex-wrap items-center gap-4 mt-10"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 }}
                        >
                            <MagneticButton href="https://creonity-creator-dashboard-frontend.vercel.app" variant="primary">
                                Start Creating
                            </MagneticButton>
                            <MagneticButton href="#how-it-works" variant="secondary">
                                See How It Works
                            </MagneticButton>
                        </motion.div>

                        {/* Stats */}
                        <motion.div
                            className="flex items-center gap-8 mt-12 pt-8 border-t border-border/50"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1 }}
                        >
                            {[
                                { value: "10K+", label: "Creators" },
                                { value: "500+", label: "Brands" },
                                { value: "$2M+", label: "Paid Out" },
                            ].map((stat, i) => (
                                <div key={i} className="text-center">
                                    <div className="text-2xl font-bold gradient-text-neon">{stat.value}</div>
                                    <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Right side - Interactive terminal */}
                    <div className="order-1 lg:order-2 perspective-1000">
                        <InteractiveTerminal />
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 }}
            >
                <span className="text-xs uppercase tracking-widest text-muted-foreground font-mono">Scroll</span>
                <motion.div
                    className="w-px h-8 bg-gradient-to-b from-neon-violet to-transparent"
                    animate={{ scaleY: [1, 0.5, 1], opacity: [1, 0.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                />
            </motion.div>

            {/* Bottom gradient fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
        </section>
    );
}
