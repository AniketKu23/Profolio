"use client";

import React, { useState, useRef, useEffect } from "react";
import TypewriterText from "./TypewriterText";
import { portfolioData } from "@/data/portfolio";

export default function ContactOutput() {
  const [step, setStep] = useState<"intro" | "name" | "email" | "message" | "sending" | "sent" | "error">("intro");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (step === "name" || step === "email" || step === "message") {
      inputRef.current?.focus();
    }
  }, [step]);

  const handleKeyDown = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const val = inputValue.trim();
      if (!val) return;

      if (step === "name") {
        setFormData(prev => ({ ...prev, name: val }));
        setInputValue("");
        setStep("email");
      } else if (step === "email") {
        setFormData(prev => ({ ...prev, email: val }));
        setInputValue("");
        setStep("message");
      } else if (step === "message") {
        const finalData = { ...formData, message: val };
        setFormData(finalData);
        setInputValue("");
        setStep("sending");

        try {
          const res = await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(finalData),
          });
          if (!res.ok) throw new Error("Failed");
          setStep("sent");
        } catch (err) {
          setStep("error");
        }
      }
    }
  };

  return (
    <div className="flex flex-col gap-2 max-w-3xl text-gray-300">
      <div className="text-[#00FF41] mb-2 font-bold text-glow">$ ./contact.sh</div>
      
      {step === "intro" && (
        <TypewriterText 
          text="Initializing secure contact protocol... please provide your details below." 
          speed={20}
          onComplete={() => setStep("name")}
        />
      )}

      {(step !== "intro") && (
        <div className="flex flex-col gap-2">
          <div className="text-gray-400">Initializing secure contact protocol... please provide your details below.</div>
          
          <div className="flex items-center gap-2">
            <span className="text-[#00FFFF]">&gt; Enter your name:</span>
            {step === "name" ? (
              <div className="relative flex-1">
                <span className="text-white invisible whitespace-pre">{inputValue}</span>
                <span className="absolute left-0 text-white whitespace-pre pointer-events-none">
                  {inputValue}<span className="text-[#00FF41] cursor-blink inline-block w-[0.6em] h-[1em] bg-[#00FF41] ml-px align-middle"></span>
                </span>
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={e => setInputValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="absolute inset-0 opacity-0 cursor-text outline-none text-[16px]"
                  autoComplete="off"
                />
              </div>
            ) : (
              <span className="text-white">{formData.name}</span>
            )}
          </div>

          {(step === "email" || step === "message" || step === "sending" || step === "sent" || step === "error") && (
            <div className="flex items-center gap-2">
              <span className="text-[#00FFFF]">&gt; Enter your email:</span>
              {step === "email" ? (
                <div className="relative flex-1">
                  <span className="text-white invisible whitespace-pre">{inputValue}</span>
                  <span className="absolute left-0 text-white whitespace-pre pointer-events-none">
                    {inputValue}<span className="text-[#00FF41] cursor-blink inline-block w-[0.6em] h-[1em] bg-[#00FF41] ml-px align-middle"></span>
                  </span>
                  <input
                    ref={inputRef}
                    type="email"
                    value={inputValue}
                    onChange={e => setInputValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="absolute inset-0 opacity-0 cursor-text outline-none text-[16px]"
                    autoComplete="off"
                  />
                </div>
              ) : (
                <span className="text-white">{formData.email}</span>
              )}
            </div>
          )}

          {(step === "message" || step === "sending" || step === "sent" || step === "error") && (
            <div className="flex items-center gap-2">
              <span className="text-[#00FFFF]">&gt; Enter your message:</span>
              {step === "message" ? (
                <div className="relative flex-1">
                  <span className="text-white invisible whitespace-pre">{inputValue}</span>
                  <span className="absolute left-0 text-white whitespace-pre pointer-events-none">
                    {inputValue}<span className="text-[#00FF41] cursor-blink inline-block w-[0.6em] h-[1em] bg-[#00FF41] ml-px align-middle"></span>
                  </span>
                  <input
                    ref={inputRef}
                    type="text"
                    value={inputValue}
                    onChange={e => setInputValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="absolute inset-0 opacity-0 cursor-text outline-none text-[16px]"
                    autoComplete="off"
                  />
                </div>
              ) : (
                <span className="text-white">{formData.message}</span>
              )}
            </div>
          )}

          {step === "sending" && <div className="text-[#FFB000]">Sending message...</div>}
          {step === "sent" && <div className="text-[#00FF41] font-bold">[OK] Message transmitted successfully.</div>}
          {step === "error" && <div className="text-red-500 font-bold">[ERROR] Transmission failed. Please try again.</div>}
        </div>
      )}

      <div className="mt-6 border-t border-gray-800 pt-4 text-sm flex flex-col gap-1">
        <div className="text-gray-500">--- Alternative Contact Methods ---</div>
        <div>Email: <a href={`mailto:${portfolioData.about.links.email}`} className="text-white hover:text-[#00FF41] hover:underline">{portfolioData.about.links.email}</a></div>
        <div>GitHub: <a href={portfolioData.about.links.github} target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#00FF41] hover:underline">{portfolioData.about.links.github}</a></div>
        <div>LinkedIn: <a href={portfolioData.about.links.linkedin} target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#00FF41] hover:underline">{portfolioData.about.links.linkedin}</a></div>
      </div>
    </div>
  );
}
