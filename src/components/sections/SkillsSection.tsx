"use client";

import { motion } from "framer-motion";

const skillsData = [
  {
    category: "Languages",
    skills: ["C++", "Java", "Python", "JavaScript", "SQL", "HTML", "CSS"],
  },
  {
    category: "Frontend",
    skills: ["React.js", "Redux", "React Router"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express.js", "Flask", "RESTful APIs"],
  },
  {
    category: "Databases",
    skills: ["MongoDB", "PostgreSQL", "MySQL", "Redis"],
  },
  {
    category: "Cloud & DevOps",
    skills: ["Docker", "AWS EC2", "Git", "GitHub Actions", "Postman"],
  },
  {
    category: "AI/ML",
    skills: ["Machine Learning", "Deep Learning", "NLP", "Computer Vision", "TensorFlow", "PyTorch", "scikit-learn", "OpenCV"],
  },
  {
    category: "Core Concepts",
    skills: ["Data Structures & Algorithms", "OOP", "DBMS", "Operating Systems", "Computer Networks", "Auth & RBAC", "CI/CD"],
  },
];

export default function SkillsSection() {
  return (
    <section className="py-20 relative" id="skills">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            <span className="text-brand-red">04.</span> Skills & Arsenal
          </h2>
          <p className="text-gray-400 max-w-2xl text-lg">
            Technologies, frameworks, and concepts I use to build scalable systems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((group, idx) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-card-bg border border-card-border p-6 rounded-2xl relative overflow-hidden group hover:border-brand-red/30 transition-colors"
            >
              <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none text-9xl font-display font-black -translate-y-6 translate-x-4 group-hover:text-brand-red transition-colors duration-500">
                0{idx + 1}
              </div>
              <h3 className="text-xl font-bold text-white mb-6 relative z-10 flex items-center gap-3">
                <span className="w-8 h-[1px] bg-brand-red inline-block"></span>
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-3 relative z-10">
                {group.skills.map((skill) => (
                  <div
                    key={skill}
                    className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-gray-300 hover:text-white hover:border-brand-red hover:bg-brand-red/20 transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
