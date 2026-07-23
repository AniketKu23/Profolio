"use client";

import React, { useState, useRef, useEffect } from "react";

const AVAILABLE_COMMANDS = [
  "help",
  "about",
  "experience",
  "projects",
  "skills",
  "education",
  "certifications",
  "contact",
  "resume",
  "clear",
  "sudo hire-me",
];

interface Props {
  onSubmit: (cmd: string) => void;
}

export default function CommandInput({ onSubmit }: Props) {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);

  // Focus input on mount and clicks
  useEffect(() => {
    inputRef.current?.focus();
    const handleGlobalClick = () => {
      // Only focus if they aren't selecting text
      if (window.getSelection()?.toString() === "") {
        inputRef.current?.focus();
      }
    };
    window.addEventListener("click", handleGlobalClick);
    return () => window.removeEventListener("click", handleGlobalClick);
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const trimmed = input.trim();
      if (trimmed) {
        setHistory((prev) => [...prev, trimmed]);
      }
      setHistoryIndex(-1);
      onSubmit(input);
      setInput("");
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (history.length > 0) {
        const nextIndex = historyIndex < history.length - 1 ? historyIndex + 1 : historyIndex;
        setHistoryIndex(nextIndex);
        setInput(history[history.length - 1 - nextIndex]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex > 0) {
        const nextIndex = historyIndex - 1;
        setHistoryIndex(nextIndex);
        setInput(history[history.length - 1 - nextIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput("");
      }
    } else if (e.key === "Tab") {
      e.preventDefault();
      const match = AVAILABLE_COMMANDS.find((cmd) => cmd.startsWith(input.toLowerCase()));
      if (match) {
        setInput(match);
      }
    }
  };

  return (
    <div className="flex items-center gap-2 relative">
      <span className="text-[#00FF41] whitespace-nowrap">guest@aniket-portfolio:~$</span>
      <div className="relative flex-1 flex items-center">
        <span className="text-white invisible whitespace-pre">{input}</span>
        <span className="absolute left-0 text-white whitespace-pre pointer-events-none">
          {input}<span className="text-[#00FF41] cursor-blink inline-block w-[0.6em] h-[1em] bg-[#00FF41] ml-px align-middle"></span>
        </span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="absolute inset-0 opacity-0 cursor-text outline-none text-base"
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck="false"
        />
      </div>
    </div>
  );
}
