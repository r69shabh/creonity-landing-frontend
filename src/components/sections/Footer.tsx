"use client";

import Link from "next/link";

export function Footer() {
    return (
        <footer className="py-24 px-6 bg-black text-white">
            <div className="max-w-[1920px] mx-auto flex flex-col md:flex-row justify-between items-end">
                <div className="flex-1">
                    <h3 className="text-[15vw] leading-none font-black tracking-tighter text-white mix-blend-difference select-none hover:text-pink-500 transition-colors duration-0">
                        CREONITY
                    </h3>
                </div>
                
                <div className="flex flex-col items-end gap-4 text-right">
                    <div className="flex gap-4 font-mono text-sm font-bold uppercase">
                        <Link href="#" className="hover:text-yellow-300">Twitter</Link>
                        <Link href="#" className="hover:text-cyan-300">Instagram</Link>
                        <Link href="#" className="hover:text-pink-300">LinkedIn</Link>
                    </div>
                    <p className="font-mono text-xs text-gray-500">
                        © 2024 Creonity Inc. System v2.0
                    </p>
                </div>
            </div>
        </footer>
    );
}
