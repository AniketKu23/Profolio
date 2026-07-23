"use client";

import React, { useState, useRef, useEffect } from "react";
import BootSequence from "./BootSequence";
import TerminalNav from "./TerminalNav";
import CommandInput from "./CommandInput";
import CommandRegistry from "./CommandRegistry";
import MatrixRain from "./MatrixRain";
import { portfolioData } from "@/data/portfolio";

export type HistoryEntry = {
  id: string;
  command: string;
  output: React.ReactNode;
};

export default function Terminal() {
  const [booted, setBooted] = useState(false);
  const [history, setHistory] = useState<HistoryEntry[]>([]);
  const bottomRef = useRef<HTMLDivElement>(null);

  // Auto scroll to bottom whenever history changes
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim();
    if (!trimmedCmd) return;

    if (trimmedCmd.toLowerCase() === "clear") {
      setHistory([]);
      return;
    }

    const output = CommandRegistry.execute(trimmedCmd, handleCommand);

    setHistory((prev) => [
      ...prev,
      {
        id: Math.random().toString(36).substring(7),
        command: trimmedCmd,
        output,
      },
    ]);
  };

  const skipBoot = () => setBooted(true);

  if (!booted) {
    return <BootSequence onComplete={skipBoot} />;
  }

  return (
    <>
      <MatrixRain />
      <div className="min-h-[100dvh] p-4 md:p-8 flex flex-col max-w-5xl mx-auto crt-flicker relative z-10">
        <TerminalNav onCommandClick={handleCommand} />
      
      <div className="flex-1 mt-6 flex flex-col gap-4 text-sm md:text-base pb-24">
        {/* Welcome message */}
        {history.length === 0 && (
          <div className="text-gray-400 mb-4">
            Type <span className="text-[#00FF41]">help</span> to see available commands.
            <br />
            Or use the navigation bar above.
          </div>
        )}

        {/* History */}
        {history.map((entry) => (
          <div key={entry.id} className="flex flex-col gap-2">
            <div className="flex items-center gap-2 text-gray-300">
              <span className="text-[#00FF41]">guest@aniket-portfolio:~$</span>
              <span className="text-white">{entry.command}</span>
            </div>
            <div className="pl-0 md:pl-2">
              {entry.output}
            </div>
          </div>
        ))}
        
        {/* Active Input */}
        <CommandInput onSubmit={handleCommand} />
        
        <div ref={bottomRef} />
      </div>
      </div>
    </>
  );
}
