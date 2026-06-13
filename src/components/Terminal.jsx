import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Terminal = () => {
  const lines = [
    {
      text: "last login: Mon Jun 9 09:41:22 on ttys001",
      cmd: false,
      delay: 200,
      render: () => <span className="text-white/40">last login: Mon Jun 9 09:41:22 on ttys001</span>,
    },
    {
      text: "",
      cmd: false,
      delay: 50,
      render: () => <div className="h-2"></div>,
    },
    {
      text: "git clone https://github.com/ofzen/your-idea.git",
      cmd: true,
      delay: 20,
    },
    {
      text: "Cloning into 'your-idea'...",
      cmd: false,
      delay: 150,
      render: () => (
        <span className="text-white/60">
          Cloning into <span className="text-yellow-400">'your-idea'</span>...
        </span>
      ),
    },
    {
      text: "remote: Enumerating objects: 1, done.",
      cmd: false,
      delay: 100,
      render: () => <span className="text-white/60">remote: Enumerating objects: 1, done.</span>,
    },
    {
      text: "✓ Receiving objects: 100% – idea locked in.",
      cmd: false,
      delay: 300,
      render: () => (
        <span className="text-white/60">
          <span className="text-emerald-400">✓</span> Receiving objects: 100% – idea locked in.
        </span>
      ),
    },
    {
      text: "",
      cmd: false,
      delay: 50,
      render: () => <div className="h-2"></div>,
    },
    {
      text: "npm install design ux engineering strategy",
      cmd: true,
      delay: 20,
    },
    {
      text: "added 4 expertise modules ✓",
      cmd: false,
      delay: 150,
      render: () => (
        <span className="text-white/60">
          added <span className="text-yellow-400 font-bold">4</span> expertise modules <span className="text-emerald-400 font-bold">✓</span>
        </span>
      ),
    },
    {
      text: "resolved 0 conflicts – zero friction guaranteed.",
      cmd: false,
      delay: 300,
      render: () => (
        <span className="text-white/60">
          resolved <span className="text-yellow-400 font-bold">0</span> conflicts – <span className="text-emerald-400 font-bold">zero friction guaranteed.</span>
        </span>
      ),
    },
    {
      text: "",
      cmd: false,
      delay: 50,
      render: () => <div className="h-2"></div>,
    },
    {
      text: "./build.sh --platform web,mobile --client startup",
      cmd: true,
      delay: 20,
    },
    {
      text: "► Compiling React + Next.js... done",
      cmd: false,
      delay: 100,
      render: () => (
        <span className="text-white/60">
          <span className="text-blue-500 font-black">►</span> Compiling React + Next.js... <span className="text-emerald-400 font-bold">done</span>
        </span>
      ),
    },
    {
      text: "► Bundling mobile (iOS + Android)... done",
      cmd: false,
      delay: 100,
      render: () => (
        <span className="text-white/60">
          <span className="text-blue-500 font-black">►</span> Bundling mobile (iOS + Android)... <span className="text-emerald-400 font-bold">done</span>
        </span>
      ),
    },
    {
      text: "► Running UI/UX polish pass... done",
      cmd: false,
      delay: 150,
      render: () => (
        <span className="text-white/60">
          <span className="text-blue-500 font-black">►</span> Running UI/UX polish pass... <span className="text-emerald-400 font-bold">done</span>
        </span>
      ),
    },
    {
      text: "► Build size: lean. Performance score: 98/100",
      cmd: false,
      delay: 300,
      render: () => (
        <span className="text-white/60">
          <span className="text-blue-500 font-black">►</span> Build size: <span className="text-emerald-400 font-bold">lean</span>. Performance score: <span className="text-emerald-400 font-bold">98/100</span>
        </span>
      ),
    },
    {
      text: "",
      cmd: false,
      delay: 50,
      render: () => <div className="h-2"></div>,
    },
    {
      text: "./deploy.sh --target production --region IN",
      cmd: true,
      delay: 20,
    },
    {
      text: "► Health check... ✓ passing",
      cmd: false,
      delay: 150,
      render: () => (
        <span className="text-white/60">
          <span className="text-blue-500 font-black">►</span> Health check... <span className="text-emerald-400 font-bold">✓ passing</span>
        </span>
      ),
    },
    {
      text: "► Latency: <12ms · Uptime: 99.9% · Instances: 50+",
      cmd: false,
      delay: 150,
      render: () => (
        <span className="text-white/60">
          <span className="text-blue-500 font-black">►</span> Latency: <span className="text-emerald-400 font-bold">&lt;12ms</span> · Uptime: <span className="text-emerald-400 font-bold">99.9%</span> · Instances: 50+
        </span>
      ),
    },
    {
      text: "✓ Deployed to production. Your users won't know what hit them.",
      cmd: false,
      delay: 400,
      render: () => (
        <div className="flex flex-col">
          <span className="text-emerald-400 font-bold">
            ✓ Deployed to production. <span className="text-white/40 font-normal">Your users won't know what hit them.</span>
          </span>
        </div>
      ),
    },
    {
      text: "",
      cmd: false,
      delay: 50,
      render: () => <div className="h-2"></div>,
    },
    {
      text: "open https://ofzen.in # ready to build yours?",
      cmd: true,
      delay: 20,
      renderText: (typedText) => {
        const commentIndex = typedText.indexOf("#");
        if (commentIndex !== -1) {
          const cmdPart = typedText.substring(0, commentIndex);
          const commentPart = typedText.substring(commentIndex);
          return (
            <span>
              {cmdPart}
              <span className="text-white/40">{commentPart}</span>
            </span>
          );
        }
        return typedText;
      }
    },
    { text: "_", cmd: false, infinite: true },
  ];

  const [displayedLines, setDisplayedLines] = useState([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (currentLineIndex >= lines.length) return;

    const currentLine = lines[currentLineIndex];

    if (currentLine.infinite) {
      return;
    }

    // If it's an output line (not a command), render it immediately
    if (!currentLine.cmd) {
      setDisplayedLines((prev) => {
        const newLines = [...prev];
        newLines[currentLineIndex] = { ...currentLine };
        return newLines;
      });
      const timeout = setTimeout(() => {
        setCurrentLineIndex((prev) => prev + 1);
        setCharIndex(0);
      }, currentLine.delay !== undefined ? currentLine.delay : 100);
      return () => clearTimeout(timeout);
    }

    // Typing behavior for commands
    if (charIndex < currentLine.text.length) {
      const timeout = setTimeout(() => {
        setDisplayedLines((prev) => {
          const newLines = [...prev];
          if (!newLines[currentLineIndex]) {
            newLines[currentLineIndex] = { ...currentLine, text: "" };
          }
          newLines[currentLineIndex].text = currentLine.text.substring(
            0,
            charIndex + 1,
          );
          return newLines;
        });
        setCharIndex((prev) => prev + 1);
      }, currentLine.delay || 30);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCurrentLineIndex((prev) => prev + 1);
        setCharIndex(0);
      }, 500); // pause after command typing finished
      return () => clearTimeout(timeout);
    }
  }, [currentLineIndex, charIndex]);

  return (
    <div className="w-full h-[470px] max-w-[550px] bg-[#1a1c23]/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/10 flex flex-col overflow-hidden font-mono text-[10.5px] sm:text-xs leading-relaxed">
      {/* Header */}
      <div className="h-10 bg-[#16181f] border-b border-white/5 flex items-center px-4 gap-2">
        <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
        <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
        <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
        <div className="flex-1 text-center text-white/30 text-[10px] font-semibold tracking-wider">
          ofzen — bash
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-6 text-white/80 overflow-y-auto relative scrollbar-none">
        <div className="absolute inset-0 bg-linear-to-b from-transparent to-black/20 pointer-events-none"></div>

        <div className="flex flex-col gap-1.5 z-10 relative">
          {displayedLines.map((line, i) => (
            <div
              key={i}
              className={`${line.cmd ? "mt-1" : ""} ${line.color || ""}`}
            >
              {line.cmd && (
                <span className="text-[#10b981] font-bold mr-2">
                  ofzen<span className="text-white/40">@studio</span>{" "}
                  <span className="text-white/60">~ $</span>
                </span>
              )}
              
              {line.cmd ? (
                line.renderText ? line.renderText(line.text) : line.text
              ) : (
                line.render ? line.render() : line.text
              )}

              {i === currentLineIndex && (
                <span className="inline-block w-2 h-4 bg-emerald-400 align-middle ml-1 animate-pulse"></span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Terminal;
