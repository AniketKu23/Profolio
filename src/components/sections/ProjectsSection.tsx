"use client";

import { motion } from "framer-motion";
import { ExternalLink, FolderGit2 } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "AE-MAP: Autoencoder-Based Multi-Omics Analysis Platform",
    description: "Deep multi-view autoencoder integrating genomics, transcriptomics, and proteomics data into a unified latent representation, reducing data dimensionality by 75%. End-to-end pipeline processing 1,000+ samples to identify 4 distinct disease subtypes.",
    tech: ["Python", "PyTorch", "TensorFlow", "Streamlit"],
    github: "https://github.com/AniketKu23/AE-MAP",
    live: null,
  },
  {
    title: "Dynamic PDF Template Management System",
    description: "Architected a backend system supporting 4+ document types for dynamic PDF generation. Delivered 10+ reusable RESTful API endpoints with Swagger documentation, cutting new-template creation time by 40%.",
    tech: ["Node.js", "Express.js", "MongoDB"],
    github: "https://github.com/AniketKu23/DynamicPdfManagementSystem",
    live: "https://dynamic-pdf-management-system-front.vercel.app/",
  },
  {
    title: "Aircraft Seat Map Manager",
    description: "Built a backend service supporting configurable seat maps for 5+ aircraft types and airline-specific configurations. Designed 8+ REST API endpoints and scalable MongoDB schemas supporting multi-currency pricing across 5 currencies.",
    tech: ["Node.js", "Express.js", "MongoDB"],
    github: "https://github.com/AniketKu23/Aircraft-Seat-Map",
    live: "https://endearing-horse-7e5123.netlify.app/",
  },
  {
    title: "Multilingual Language Translator API",
    description: "Implemented a RESTful API supporting translation across 10+ languages for structured JSON and CSV files while preserving original formatting. Modular workflows with 6+ validation rules reduced errors by 35%.",
    tech: ["Node.js", "Express.js"],
    github: "https://github.com/AniketKu23/Multilingual-Language-Translator-API",
    live: "https://multilingual-language-translator-ap.vercel.app/",
  },
];

export default function ProjectsSection() {
  return (
    <section className="py-20 relative" id="projects">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
              <span className="text-brand-red">03.</span> Featured Projects
            </h2>
            <p className="text-gray-400 max-w-2xl text-lg">
              A selection of my recent work focusing on scalable backend architectures and AI-driven systems.
            </p>
          </div>
          <a
            href="https://github.com/aniketku23"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-brand-red font-mono hover:text-white transition-colors"
          >
            View all on GitHub 
            <ExternalLink className="w-4 h-4 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-card-bg border border-card-border p-8 rounded-2xl flex flex-col h-full group relative overflow-hidden transition-colors hover:border-brand-red/40 hover:bg-white/[0.04]"
            >
              {/* Glow Effect */}
              <div className="absolute -inset-px bg-gradient-to-r from-brand-red/50 to-transparent opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-500 rounded-2xl pointer-events-none"></div>

              <div className="flex justify-between items-start mb-6 relative z-10">
                <FolderGit2 className="w-10 h-10 text-brand-red" />
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-brand-red transition-colors"
                    aria-label="GitHub Repository"
                  >
                    <FaGithub className="w-5 h-5" />
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-brand-red transition-colors"
                      aria-label="Live Demo"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>

              <div className="relative z-10 flex-grow flex flex-col">
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-brand-red transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 leading-relaxed mb-8 flex-grow text-sm md:text-base">
                  {project.description}
                </p>
                <ul className="flex flex-wrap gap-3 mt-auto">
                  {project.tech.map((tech, i) => (
                    <li
                      key={i}
                      className="text-xs font-mono text-brand-red bg-brand-red/10 px-3 py-1 rounded-full border border-brand-red/20"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
