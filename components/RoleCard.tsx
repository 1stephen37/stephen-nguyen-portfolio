"use client";

import { useEffect, useState } from "react";

export default function RoleCard() {
    const fullText = '"Fullstack Developer"';
    const [displayedText, setDisplayedText] = useState("");
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const startDelay = setTimeout(() => {
            if (index < fullText.length) {
                const typing = setInterval(() => {
                    setDisplayedText((prev) => prev + fullText.charAt(prev.length));
                    setIndex((i) => i + 1);
                }, 100); // tốc độ gõ (ms)

                return () => clearInterval(typing);
            }
        }, 2500);
        return () => clearTimeout(startDelay);
    }, [index]);

    return (
        <div className="bg-[#0f172a] rounded-xl shadow-lg overflow-hidden w-full border border-gray-700">
            <div className="flex items-center gap-2 px-4 py-3 bg-[#1e293b] text-gray-300 text-md font-mono">
                <span className="w-5 h-5 rounded-full bg-red-500"></span>
                <span className="w-5 h-5 rounded-full bg-yellow-500"></span>
                <span className="w-5 h-5 rounded-full bg-green-500"></span>
                <span className="ml-5">role.ts</span>
            </div>

            {/* Code area */}
            <div className="px-6 py-6 font-mono text-lg bg-[#0f172a] flex">
                <span className="text-sky-400">const</span>&nbsp;
                <span className="text-orange-400">role</span>&nbsp;=
                <span className="text-green-400">&nbsp;{displayedText}</span>
                <span className="text-white animate-blink">|</span>
            </div>
        </div>
    );
}
