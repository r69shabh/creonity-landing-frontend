"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";

interface AnimatedGradientTextProps {
    children: React.ReactNode;
    className?: string;
}

export function AnimatedGradientText({
    children,
    className,
}: AnimatedGradientTextProps) {
    return (
        <motion.span
            className={cn(
                "inline-block bg-gradient-to-r from-neutral-100 via-neutral-400 to-neutral-100 bg-[length:200%_100%] bg-clip-text text-transparent",
                className
            )}
            animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
                duration: 5,
                ease: "linear",
                repeat: Infinity,
            }}
        >
            {children}
        </motion.span>
    );
}
