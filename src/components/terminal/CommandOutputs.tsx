"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import TypewriterText from "./TypewriterText";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0 },
};

export function AboutOutput() {
  const [showStats, setShowStats] = useState(false);
  
  return (
    <div className="flex flex-col gap-4 text-gray-300">
      <div className="text-white text-xl font-bold">
        <TypewriterText text={portfolioData.about.title} speed={30} />
      </div>
      
      <div className="flex flex-col gap-2 max-w-3xl">
        <TypewriterText 
          text={portfolioData.about.bio[0]} 
          onComplete={() => setShowStats(true)}
        />
        {showStats && (
          <TypewriterText text={portfolioData.about.bio[1]} />
        )}
      </div>

      {showStats && (
        <motion.div 
          variants={containerVariants} 
          initial="hidden" 
          animate="visible"
          className="mt-4 border border-[#33FF66]/30 p-4 max-w-sm"
        >
          <div className="text-[#00FF41] mb-2 font-bold text-glow">$ whoami --stats</div>
          {portfolioData.about.stats.map(stat => (
            <motion.div variants={itemVariants} key={stat.label} className="flex justify-between">
              <span>{stat.label}:</span>
              <span className="text-white">{stat.value}{stat.suffix}</span>
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
}

export function ExperienceOutput() {
  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible" className="flex flex-col gap-6 max-w-4xl">
      <div className="text-[#00FF41] mb-2 font-bold text-glow">$ git log --author="Aniket Kumar"</div>
      
      {portfolioData.experience.map((exp, i) => (
        <motion.div variants={itemVariants} key={i} className="border-l-2 border-[#00FF41]/50 pl-4 py-1">
          <div className="text-[#FFB000]">commit {Math.random().toString(16).substring(2, 9)}</div>
          <div className="text-white font-bold text-lg mt-1">{exp.role} @ {exp.company}</div>
          <div className="text-gray-500 text-sm mb-2">Date: {exp.period}</div>
          
          <ul className="flex flex-col gap-1 text-gray-300">
            {exp.achievements.map((ach, j) => (
              <li key={j} className="flex gap-2">
                <span className="text-[#00FF41]">-</span>
                <span>{ach}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </motion.div>
  );
}

export function ProjectsOutput() {
  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible" className="flex flex-col gap-6 max-w-5xl">
      <div className="text-[#00FF41] mb-2 font-bold text-glow">$ ls -la ./projects/</div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {portfolioData.projects.map((proj, i) => (
          <motion.div variants={itemVariants} key={i} className="border border-[#33FF66]/20 p-4 hover:border-[#00FF41] transition-colors group">
            <div className="text-white font-bold text-lg mb-2 flex items-center gap-2">
              <span className="text-[#00FFFF]">d</span>
              <span className="text-[#00FF41] group-hover:text-glow">rwxr-xr-x</span>
              <span>{proj.title.split(":")[0].replace(/\s+/g, '-').toLowerCase()}</span>
            </div>
            <div className="text-gray-300 text-sm mb-4 h-20 overflow-hidden text-ellipsis">
              {proj.description}
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              {proj.tech.map(t => (
                <span key={t} className="text-xs text-[#00FFFF] border border-[#00FFFF]/30 px-1">[{t}]</span>
              ))}
            </div>
            <div className="flex gap-4 text-sm mt-auto">
              <a href={proj.github} target="_blank" rel="noopener noreferrer" className="text-[#FFB000] hover:underline flex items-center gap-1 hover:text-glow-amber">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity">&gt;</span> source
              </a>
              {proj.live && (
                <a href={proj.live} target="_blank" rel="noopener noreferrer" className="text-[#FFB000] hover:underline flex items-center gap-1 hover:text-glow-amber">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity">&gt;</span> live_demo
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export function SkillsOutput() {
  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible" className="flex flex-col gap-2 max-w-3xl text-gray-300">
      <div className="text-[#00FF41] mb-2 font-bold text-glow">$ tree ./skills</div>
      <div className="text-[#00FFFF]">.</div>
      
      {portfolioData.skills.map((group, i) => (
        <motion.div variants={itemVariants} key={group.category} className="ml-4 border-l border-gray-600 pl-4 py-1 relative">
          <div className="absolute w-4 border-b border-gray-600 top-4 -left-px"></div>
          <div className="text-white font-bold text-[#00FF41] mb-1">├── {group.category}/</div>
          <div className="ml-8 flex flex-wrap gap-x-4 gap-y-1">
            {group.skills.map((skill, j) => (
              <span key={skill} className={j === group.skills.length - 1 ? "text-gray-400" : "text-gray-400"}>
                {j === group.skills.length - 1 ? "└── " : "├── "}{skill}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}

export function EducationOutput() {
  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible" className="flex flex-col gap-4 max-w-3xl">
      <div className="text-[#00FF41] mb-2 font-bold text-glow">$ cat ~/education.txt</div>
      {portfolioData.education.map((edu, i) => (
        <motion.div variants={itemVariants} key={i} className="flex flex-col border-l-2 border-white/20 pl-4">
          <div className="text-white font-bold">{edu.school}</div>
          <div className="text-[#FFB000]">{edu.degree}</div>
          <div className="text-gray-500 text-sm">{edu.year || edu.location} {edu.score && `| ${edu.score}`}</div>
        </motion.div>
      ))}
    </motion.div>
  );
}

export function CertificationsOutput() {
  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible" className="flex flex-col gap-3 max-w-3xl">
      <div className="text-[#00FF41] mb-2 font-bold text-glow">$ ls -l ./certifications/</div>
      {portfolioData.certifications.map((cert, i) => (
        <motion.a 
          variants={itemVariants} 
          key={i} 
          href={cert.link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex gap-4 hover:bg-white/5 p-2 transition-colors group text-gray-300"
        >
          <span className="text-[#00FF41]">[✓]</span>
          <span className="group-hover:text-white group-hover:underline">{cert.name}</span>
          <span className="text-[#00FFFF] ml-auto opacity-0 group-hover:opacity-100 transition-opacity">view</span>
        </motion.a>
      ))}
    </motion.div>
  );
}
