"use client";

import { motion } from "framer-motion";
import { Award, GraduationCap, ExternalLink } from "lucide-react";

const education = [
  {
    school: "Vellore Institute of Technology",
    degree: "B.Tech in Computer Science Engineering",
    year: "2027",
    score: "",
    location: "Vellore, TN",
  },
  {
    school: "Lucknow Public School & College",
    degree: "Senior Secondary (Class 12)",
    year: "",
    score: "",
    location: "Lucknow, UP",
  },
  {
    school: "Amity International School",
    degree: "Higher Secondary (Class 10)",
    year: "",
    score: "",
    location: "Lucknow, UP",
  },
];

const certifications = [
  {
    name: "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
    link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=4034FFA5EECF79AD125A0CBA52C91A8FEA02371241AAFD4A318DE5912D744A0A",
  },
  {
    name: "Docker Certification (Simplilearn)",
    link: "https://drive.google.com/file/d/1FdJ3GS29ZhZKtNluGw0ObqJfbqP8tWiQ/view?usp=sharing",
  },
  {
    name: "Full Stack Web Development (Udemy)",
    link: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-a2dfb991-7dde-4d23-87cc-60c2d9ec0411.pdf",
  },
  {
    name: "AI Mastery Program",
    link: "https://drive.google.com/file/d/1YPdBt2b0JI_deOr3S-sh-oC5DJpqb4p1/view?usp=sharing",
  },
  {
    name: "WorldQuant Brain (Gold Level)",
    link: "https://drive.google.com/file/d/1DmaHY8Ht-JHRB1NjA7gqIYxwv-vmEW7O/view?usp=sharing",
  },
];

export default function CertificationsSection() {
  return (
    <section className="py-20 relative" id="certifications">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Education Column */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mb-12 flex items-center gap-4"
          >
            <GraduationCap className="w-8 h-8 text-brand-red" />
            <h2 className="text-3xl md:text-4xl font-display font-bold">Education</h2>
          </motion.div>

          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
            {education.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative flex items-start justify-between gap-6 md:justify-normal md:odd:flex-row-reverse group"
              >
                <div className="bg-card-bg border border-card-border p-6 rounded-2xl w-full backdrop-blur-sm group-hover:border-brand-red/30 transition-colors">
                  <h3 className="text-xl font-bold text-white mb-1">{item.school}</h3>
                  <p className="text-brand-red mb-2 text-sm">{item.degree}</p>
                  <div className="flex justify-between items-center text-sm text-gray-500 font-mono">
                    <span>{item.score}</span>
                    <span>{item.year || item.location}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications Column */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mb-12 flex items-center gap-4"
          >
            <Award className="w-8 h-8 text-brand-red" />
            <h2 className="text-3xl md:text-4xl font-display font-bold">Certifications</h2>
          </motion.div>

          <div className="grid grid-cols-1 gap-4">
            {certifications.map((cert, idx) => (
              <motion.a
                key={idx}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="group flex items-center justify-between p-5 bg-card-bg border border-card-border rounded-xl hover:border-brand-red hover:bg-brand-red/5 transition-all duration-300"
              >
                <span className="text-gray-300 font-medium group-hover:text-white pr-4">
                  {cert.name}
                </span>
                <ExternalLink className="w-5 h-5 text-gray-500 group-hover:text-brand-red transition-colors flex-shrink-0" />
              </motion.a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
