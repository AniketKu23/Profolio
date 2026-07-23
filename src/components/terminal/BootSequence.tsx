"use client";

import React, { useState, useEffect } from "react";
import { portfolioData } from "@/data/portfolio";

const ASCII_ART = `
    ___    _   __________ __________________
   /   |  / | / /  _/ //_// ____/_  __/ ___/
  / /| | /  |/ // // ,<  / __/   / /  \\__ \\ 
 / ___ |/ /|  // // /| |/ /___  / /  ___/ / 
/_/  |_/_/ |_/___/_/ |_/_____/ /_/  /____/  
`;

const BOOT_LOGS = [
  "Initializing portfolio environment...",
  "Loading core modules................... [OK]",
  "Mounting experience filesystem......... [OK]",
  "Establishing secure connection to GitHub...",
  "Fetching project repositories.......... [OK]",
  "Checking dependencies.................. [OK]",
  "Boot sequence complete.",
];

export default function BootSequence({ onComplete }: { onComplete: () => void }) {
  const [logs, setLogs] = useState<string[]>([]);
  const [showAscii, setShowAscii] = useState(false);

  useEffect(() => {
    let timeoutIds: NodeJS.Timeout[] = [];

    // Skip on key press
    const handleKeyDown = () => onComplete();
    window.addEventListener("keydown", handleKeyDown);

    // Sequence
    let delay = 0;
    
    // Show ASCII art first
    timeoutIds.push(
      setTimeout(() => setShowAscii(true), delay += 200)
    );

    // Show logs
    BOOT_LOGS.forEach((log) => {
      timeoutIds.push(
        setTimeout(() => {
          setLogs((prev) => [...prev, log]);
        }, delay += (Math.random() * 200 + 100))
      );
    });

    // Complete
    timeoutIds.push(
      setTimeout(() => onComplete(), delay += 600)
    );

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      timeoutIds.forEach(clearTimeout);
    };
  }, [onComplete]);

  return (
    <div className="min-h-screen p-4 md:p-8 flex flex-col max-w-5xl mx-auto crt-flicker">
      {showAscii && (
        <pre className="text-[#00FF41] text-xs md:text-sm whitespace-pre-wrap font-mono font-bold text-glow mb-8 overflow-hidden">
          {ASCII_ART}
          <div className="mt-2 text-white">Welcome, {portfolioData.about.name}</div>
        </pre>
      )}

      <div className="flex flex-col gap-1 text-sm md:text-base text-gray-400">
        {logs.map((log, i) => (
          <div key={i}>{log}</div>
        ))}
        <div className="mt-2 text-[#00FF41]">
          <span className="cursor-blink inline-block w-[0.6em] h-[1em] bg-[#00FF41] align-middle"></span>
        </div>
      </div>

      <div className="fixed bottom-4 right-4 text-xs text-gray-600">
        Press any key to skip
      </div>
    </div>
  );
}
