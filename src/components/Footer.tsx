"use client";

import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 border-t border-white/10 relative z-10 bg-background/50 backdrop-blur-sm mt-12">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-gray-500 text-sm font-medium">
          &copy; {currentYear} Aniket Kumar. All rights reserved.
        </div>
        <div className="flex items-center gap-6 text-sm text-gray-500 font-medium">
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#hero")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="hover:text-brand-red transition-colors"
          >
            Back to Top
          </a>
        </div>
      </div>
    </footer>
  );
}
