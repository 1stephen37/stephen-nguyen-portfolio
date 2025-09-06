"use client";

import { useEffect, useState } from "react";
import TerminalLine from "@/components/TerminalLine";

const lines = [
    "$ npm run dev --mode=production",
    "> Building for production...",
    "> Server running on https://localhost:3000",
    "> Ready for connections! 🚀",
];

export default function TerminalCard() {
    const [displayedLines, setDisplayedLines] = useState<string[]>([]);
    const [currentLine, setCurrentLine] = useState("");
    const [lineIndex, setLineIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [started, setStarted] = useState(false);

    useEffect(() => {
        // ⏳ delay 1.5s trước khi bắt đầu typing
        const startTimer = setTimeout(() => setStarted(true), 1500);
        return () => clearTimeout(startTimer);
    }, []);

    useEffect(() => {
        if (!started) return;

        if (lineIndex < lines.length) {
            if (charIndex < lines[lineIndex].length) {
                const typing = setTimeout(() => {
                    setCurrentLine((prev) => prev + lines[lineIndex][charIndex]);
                    setCharIndex((c) => c + 1);
                }, 50);
                return () => clearTimeout(typing);
            } else {
                const lineTimeout = setTimeout(() => {
                    setDisplayedLines((prev) => [...prev, lines[lineIndex]]);
                    setCurrentLine("");
                    setCharIndex(0);
                    setLineIndex((i) => i + 1);
                }, 400);
                return () => clearTimeout(lineTimeout);
            }
        }
    }, [charIndex, lineIndex, started]);

    return (
        <div className="bg-[#0f172a] rounded-xl shadow-lg overflow-hidden w-full border border-gray-700 font-mono text-sm text-green-400">
            {/* Thanh tiêu đề */}
            <div className="flex items-center gap-2 px-4 py-2 bg-[#1e293b] text-gray-300">
                <span className="w-3 h-3 rounded-full bg-red-500"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                <span className="w-3 h-3 rounded-full bg-green-500"></span>
                <span className="ml-3 text-sky-400">developer@terminal:~$</span>
            </div>

            {/* Nội dung terminal */}
            <div className="px-4 py-3 bg-[#0f172a] min-h-[180px]">
                {displayedLines.map((line, i) => (
                    <TerminalLine key={i} text={line} />
                ))}

                {started && lineIndex < lines.length && (
                    <TerminalLine text={currentLine} cursor />
                )}

                {started && lineIndex === lines.length && (
                    <span className="text-green-400 animate-blink">▮</span>
                )}
            </div>
        </div>
    );
}