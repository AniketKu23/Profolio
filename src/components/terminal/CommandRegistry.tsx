import React from "react";
import {
  AboutOutput,
  ExperienceOutput,
  ProjectsOutput,
  SkillsOutput,
  EducationOutput,
  CertificationsOutput,
} from "./CommandOutputs";
import ContactOutput from "./ContactOutput";
import TypewriterText from "./TypewriterText";
import { portfolioData } from "@/data/portfolio";

function HelpOutput() {
  return (
    <div className="flex flex-col gap-2 max-w-2xl text-gray-300">
      <div className="text-white mb-2">Available commands:</div>
      <div className="grid grid-cols-[150px_1fr] gap-2">
        <span className="text-[#00FFFF]">about</span><span>Show biography and stats</span>
        <span className="text-[#00FFFF]">experience</span><span>View work history</span>
        <span className="text-[#00FFFF]">projects</span><span>List featured projects</span>
        <span className="text-[#00FFFF]">skills</span><span>Display technical skills tree</span>
        <span className="text-[#00FFFF]">education</span><span>View academic background</span>
        <span className="text-[#00FFFF]">certifications</span><span>List verified certifications</span>
        <span className="text-[#00FFFF]">contact</span><span>Open secure contact protocol</span>
        <span className="text-[#00FFFF]">resume</span><span>Download resume PDF</span>
        <span className="text-[#00FFFF]">clear</span><span>Clear terminal output</span>
      </div>
    </div>
  );
}

function SudoOutput() {
  return (
    <div className="text-[#FFB000]">
      <TypewriterText text="[!] Authorization granted. Initiating highly lucrative job offer protocol..." speed={40} />
      <div className="mt-2 text-white animate-pulse">Contacting recruiter...</div>
    </div>
  );
}

const CommandRegistry = {
  execute: (cmd: string, onCommand?: (cmd: string) => void): React.ReactNode => {
    const lowerCmd = cmd.toLowerCase().trim();

    switch (lowerCmd) {
      case "help":
        return <HelpOutput />;
      case "about":
        return <AboutOutput />;
      case "experience":
        return <ExperienceOutput />;
      case "projects":
        return <ProjectsOutput />;
      case "skills":
        return <SkillsOutput />;
      case "education":
        return <EducationOutput />;
      case "certifications":
        return <CertificationsOutput />;
      case "contact":
        return <ContactOutput />;
      case "resume":
        // Trigger download via window
        setTimeout(() => {
          window.open(portfolioData.about.links.resume, "_blank");
        }, 1000);
        return <TypewriterText text="Downloading resume..." />;
      case "sudo hire-me":
        return <SudoOutput />;
      case "ls":
        return <div className="text-gray-300">about.txt  experience.log  projects/  skills/  contact.sh  resume.pdf</div>;
      case "whoami":
        return <div className="text-white">guest</div>;
      case "date":
        return <div className="text-white">{new Date().toString()}</div>;
      default:
        return (
          <div className="text-red-500">
            command not found: {cmd}. Type <span className="text-[#00FF41]">help</span> for a list of commands.
          </div>
        );
    }
  },
};

export default CommandRegistry;
