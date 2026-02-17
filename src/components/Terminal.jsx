import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Terminal = () => {
    const lines = [
        { text: "> initializing core_systems...", cmd: true, delay: 50 },
        { text: "  [OK] memory_integrity_check", cmd: false, color: "text-green-400/80", delay: 15 },
        { text: "  [OK] neural_link_established", cmd: false, color: "text-green-400/80", delay: 15 },
        { text: "> connecting to main_node...", cmd: true, delay: 40 },
        { text: "  ... handshake_verified", cmd: false, delay: 20 },
        { text: "  ... encryption_protocol: AES-256", cmd: false, delay: 20 },
        { text: "> deploying services...", cmd: true, delay: 40 },
        { text: "  [INFO] scaling_instances: 50+", cmd: false, color: "text-blue-400/80", delay: 20 },
        { text: "  [INFO] latency: <12ms", cmd: false, color: "text-blue-400/80", delay: 20 },
        { text: "> system_ready", cmd: true, delay: 40, color: "text-green-400" },
        { text: "_", cmd: false, infinite: true }
    ];

    const [displayedLines, setDisplayedLines] = useState([]);
    const [currentLineIndex, setCurrentLineIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        if (currentLineIndex >= lines.length) return;

        const currentLine = lines[currentLineIndex];

        if (currentLine.infinite) {
            // Blinking cursor logic could go here or be handled by CSS animation
            return;
        }

        if (charIndex < currentLine.text.length) {
            const timeout = setTimeout(() => {
                setDisplayedLines(prev => {
                    const newLines = [...prev];
                    if (!newLines[currentLineIndex]) {
                        newLines[currentLineIndex] = { ...currentLine, text: "" };
                    }
                    newLines[currentLineIndex].text = currentLine.text.substring(0, charIndex + 1);
                    return newLines;
                });
                setCharIndex(prev => prev + 1);
            }, currentLine.delay || 30);
            return () => clearTimeout(timeout);
        } else {
            const timeout = setTimeout(() => {
                setCurrentLineIndex(prev => prev + 1);
                setCharIndex(0);
            }, 300);
            return () => clearTimeout(timeout);
        }
    }, [currentLineIndex, charIndex]);

    return (
        <div className="w-full h-[400px] max-w-[600px] bg-[#1e1e1e]/90 backdrop-blur-xl rounded-xl shadow-2xl border border-white/10 flex flex-col overflow-hidden font-mono text-xs sm:text-sm">
            {/* Header */}
            <div className="h-8 bg-white/5 border-b border-white/5 flex items-center px-4 gap-2">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                <div className="flex-1 text-center text-white/30 text-[10px] font-semibold tracking-wider">
                    Terminal
                </div>
            </div>

            {/* Content */}
            <div className="flex-1 p-6 text-white/80 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 pointer-events-none"></div>

                <div className="flex flex-col gap-1 z-10 relative">
                    {displayedLines.map((line, i) => (
                        <div key={i} className={`${line.cmd ? 'mt-2' : ''} ${line.color || ''}`}>
                            {line.text}
                            {i === currentLineIndex && i !== lines.length - 1 && (
                                <span className="inline-block w-2 h-4 bg-white/50 align-middle ml-1 animate-pulse"></span>
                            )}
                            {line.infinite && (
                                <span className="animate-pulse">_</span>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Terminal;
