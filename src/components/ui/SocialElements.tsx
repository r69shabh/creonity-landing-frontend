"use client";

import { motion } from "motion/react";

// Types for different social stickers
type SocialType = "youtube" | "twitter" | "instagram" | "tiktok";

interface SocialStickerProps {
    type: SocialType;
    className?: string;
    delay?: number;
    rotation?: number;
}

export function SocialSticker({ type, className = "", delay = 0, rotation = 0 }: SocialStickerProps) {
    const renderContent = () => {
        switch (type) {
            case "youtube":
                return (
                    <div className="flex items-center gap-3 px-4 py-3 bg-white text-black rounded-xl border border-gray-200 shadow-sm">
                        <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center text-white">▶</div>
                        <div className="flex flex-col">
                            <span className="text-xs font-bold uppercase tracking-wide">Subscribe</span>
                            <span className="text-[10px] text-gray-500">1.2M Views</span>
                        </div>
                    </div>
                );
            case "twitter":
                return (
                    <div className="flex flex-col gap-2 p-4 bg-black text-white rounded-xl shadow-sm w-48">
                        <div className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded-full bg-gray-800" />
                            <div className="flex flex-col">
                                <span className="text-xs font-bold">Creator</span>
                                <span className="text-[10px] text-gray-400">@creative_mind</span>
                            </div>
                        </div>
                        <p className="text-xs leading-relaxed">Just launched the new campaign 🚀 #creonity</p>
                    </div>
                );
            case "instagram":
                return (
                    <div className="relative w-40 aspect-[4/5] bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 p-1 rounded-2xl">
                        <div className="absolute inset-1 bg-white/20 backdrop-blur-sm rounded-xl" />
                        <div className="relative z-10 h-full flex flex-col justify-end p-3 text-white">
                            <div className="flex items-center gap-2 mb-2">
                                <span className="text-xl">♥</span>
                                <span className="text-xs font-medium">45.2k</span>
                            </div>
                        </div>
                    </div>
                );
            case "tiktok":
                return (
                    <div className="flex items-center gap-2 px-3 py-2 bg-black/90 text-white rounded-full border border-gray-800 backdrop-blur-md">
                        <span className="text-cyan-400 font-bold text-sm">♪</span>
                        <span className="text-xs">Original Sound - Viral Hit</span>
                    </div>
                );
        }
    };

    return (
        <motion.div
            className={`absolute cursor-pointer hover:z-50 ${className}`}
            initial={{ opacity: 0, scale: 0.8, rotate: rotation - 10 }}
            animate={{ opacity: 1, scale: 1, rotate: rotation }}
            whileHover={{ scale: 1.1, rotate: 0 }}
            transition={{ duration: 0.8, delay, type: "spring" }}
            drag
            dragConstraints={{ left: -50, right: 50, top: -50, bottom: 50 }}
        >
            {renderContent()}
        </motion.div>
    );
}
