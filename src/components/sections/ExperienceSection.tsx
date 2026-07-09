"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    role: "Software Development Intern",
    company: "IT4T Solutions",
    period: "May 2026 – Jul 2026",
    achievements: [
      "Engineered secure authentication workflows and database integrations, reducing unauthorized access attempts by 15% and strengthening overall data integrity.",
      "Designed and implemented 15+ RESTful API endpoints powering 4 core application modules, documented using Swagger for team-wide reference.",
      "Collaborated with a 5-member cross-functional team across 2-week Agile sprints, contributing to testing, debugging, and iterative feature delivery.",
      "Optimized backend performance, cutting average API response time by 20% through query and code-level improvements.",
    ],
  },
  {
    role: "Software Development Intern",
    company: "Uttar Pradesh Metro Rail Corporation (UPMRCL)",
    period: "May 2025 – Jun 2025",
    achievements: [
      "Built an internal IT ticketing platform used by 150+ employees, streamlining issue tracking and support workflows across 6 departments.",
      "Developed RESTful APIs and implemented role-based access control (RBAC) across 3 permission tiers with priority-based ticket routing, cutting average resolution time by 30%.",
      "Enhanced backend performance using Redis caching, reducing response latency by 25%, and deployed Dockerized services on AWS EC2.",
      "Partnered with a 5-member Agile team across 4 sprint cycles, from design and testing to deployment and maintenance.",
    ],
  },
];

export default function ExperienceSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="py-20 relative" id="experience">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold">
            <span className="text-brand-red">02.</span> Experience
          </h2>
        </motion.div>

        <div className="relative max-w-4xl mx-auto" ref={containerRef}>
          {/* Timeline Line */}
          <div className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-[2px] bg-white/10 md:-translate-x-1/2"></div>
          <motion.div
            className="absolute left-[15px] md:left-1/2 top-0 w-[2px] bg-brand-red md:-translate-x-1/2 origin-top"
            style={{ height: lineHeight }}
          ></motion.div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {experiences.map((exp, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div key={idx} className="relative flex flex-col md:flex-row items-center justify-between group">
                  {/* Timeline Node */}
                  <div className="absolute left-[11px] md:left-1/2 w-2.5 h-2.5 rounded-full bg-brand-red md:-translate-x-1/2 shadow-[0_0_15px_rgba(225,6,0,0.8)] z-10"></div>
                  
                  {/* Content Container */}
                  <div className={`w-full md:w-[45%] pl-10 md:pl-0 ${isEven ? "md:pr-12 md:text-right" : "md:pl-12 md:ml-auto"}`}>
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="bg-card-bg border border-card-border p-8 rounded-2xl backdrop-blur-sm hover:border-brand-red/30 transition-colors"
                    >
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-1">{exp.role}</h3>
                      <div className="text-brand-red font-medium mb-2">{exp.company}</div>
                      <div className="text-sm text-gray-500 font-mono mb-6">{exp.period}</div>
                      <ul className={`space-y-3 text-gray-400 text-sm md:text-base leading-relaxed ${isEven ? "md:text-right" : "text-left"}`}>
                        {exp.achievements.map((item, i) => (
                          <li key={i} className={`flex items-start gap-3 ${isEven ? "md:flex-row-reverse" : "flex-row"}`}>
                            <span className="text-brand-red mt-1.5 opacity-50">▹</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
