"use client";

import { motion } from "framer-motion";
import { Terminal, Code, Cpu } from "lucide-react";

export default function AboutSection() {
  const stats = [
    { label: "Projects Shipped", value: "4", suffix: "+", icon: <Code className="w-5 h-5 text-brand-red" /> },
    { label: "Internships", value: "2", suffix: "", icon: <Cpu className="w-5 h-5 text-brand-red" /> },
  ];

  return (
    <section className="py-20 relative" id="about">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row gap-16 items-start"
        >
          {/* Text Content */}
          <div className="flex-1">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-8">
              <span className="text-brand-red">01.</span> About Me
            </h2>
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                I am a Computer Science Engineering student at Vellore Institute of Technology (Class of 2027), 
                deeply passionate about full-stack development, RESTful APIs, and the intersection of AI/ML with 
                scalable software systems.
              </p>
              <p>
                My journey involves architecting robust full-stack applications, optimizing databases, and deploying 
                machine learning models into production. I thrive in environments where I can tackle complex 
                problems and turn them into performant, elegant code.
              </p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="flex-1 w-full grid grid-cols-1 sm:grid-cols-2 gap-6 pt-12 md:pt-0">
            {stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-card-bg border border-card-border p-6 rounded-2xl backdrop-blur-sm hover:border-brand-red/50 hover:bg-brand-red/5 transition-all duration-300 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-brand-red/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="mb-4 bg-background w-12 h-12 rounded-xl flex items-center justify-center border border-white/5">
                    {stat.icon}
                  </div>
                  <h3 className="text-4xl font-display font-bold text-white mb-2 flex items-baseline">
                    {stat.value}
                    <span className="text-brand-red text-2xl">{stat.suffix}</span>
                  </h3>
                  <p className="text-gray-500 font-medium uppercase tracking-wider text-xs">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
