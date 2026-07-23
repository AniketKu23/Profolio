"use client";

import React from "react";

const NAV_ITEMS = [
  "about",
  "experience",
  "projects",
  "skills",
  "education",
  "certifications",
  "contact",
];

export default function TerminalNav({ onCommandClick }: { onCommandClick: (cmd: string) => void }) {
  return (
    <nav className="flex flex-wrap items-center gap-4 text-xs md:text-sm border-b border-[#33FF66]/20 pb-4 mb-4">
      <span className="text-gray-500 hidden md:inline-block">Quick Access:</span>
      {NAV_ITEMS.map((item) => (
        <button
          key={item}
          onClick={() => onCommandClick(item)}
          className="group flex items-center justify-center min-h-[44px] p-2 -m-2 text-[#4AF626] hover:text-[#00FF41] hover:text-glow transition-all"
        >
          <span className="opacity-0 group-hover:opacity-100 text-[#FFB000] mr-1 transition-opacity">{'>'}</span>
          [{item}]
        </button>
      ))}
      <a
        href="https://drive.google.com/file/d/1Y1tVpJRbbD6ODyv_y3gaMgWpk2rs_T3W/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center justify-center min-h-[44px] p-2 -m-2 text-[#4AF626] hover:text-[#00FF41] hover:text-glow transition-all ml-auto"
      >
        <span className="opacity-0 group-hover:opacity-100 text-[#FFB000] mr-1 transition-opacity">{'>'}</span>
        [resume]
      </a>
    </nav>
  );
}
