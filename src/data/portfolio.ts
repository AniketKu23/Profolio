export const portfolioData = {
  about: {
    name: "Aniket Kumar",
    title: "Software & AI Developer",
    bio: [
      "I am a Computer Science Engineering student at Vellore Institute of Technology (Class of 2027), deeply passionate about full-stack development, RESTful APIs, and the intersection of AI/ML with scalable software systems.",
      "My journey involves architecting robust full-stack applications, optimizing databases, and deploying machine learning models into production. I thrive in environments where I can tackle complex problems and turn them into performant, elegant code."
    ],
    stats: [
      { label: "Projects Shipped", value: "4", suffix: "+" },
      { label: "Internships", value: "2", suffix: "" }
    ],
    links: {
      github: "https://github.com/aniketku23",
      linkedin: "https://www.linkedin.com/in/aniketku23",
      email: "kkaniket23@gmail.com",
      resume: "https://drive.google.com/file/d/1Y1tVpJRbbD6ODyv_y3gaMgWpk2rs_T3W/view?usp=sharing"
    }
  },
  experience: [
    {
      role: "Software Development Intern",
      company: "IT4T Solutions",
      period: "May 2026 – Jul 2026",
      achievements: [
        "Engineered secure authentication workflows and database integrations, reducing unauthorized access attempts by 15% and strengthening overall data integrity.",
        "Designed and implemented 15+ RESTful API endpoints powering 4 core application modules, documented using Swagger for team-wide reference.",
        "Collaborated with a 5-member cross-functional team across 2-week Agile sprints, contributing to testing, debugging, and iterative feature delivery.",
        "Optimized backend performance, cutting average API response time by 20% through query and code-level improvements."
      ]
    },
    {
      role: "Software Development Intern",
      company: "Uttar Pradesh Metro Rail Corporation (UPMRCL)",
      period: "May 2025 – Jun 2025",
      achievements: [
        "Built an internal IT ticketing platform used by 150+ employees, streamlining issue tracking and support workflows across 6 departments.",
        "Developed RESTful APIs and implemented role-based access control (RBAC) across 3 permission tiers with priority-based ticket routing, cutting average resolution time by 30%.",
        "Enhanced backend performance using Redis caching, reducing response latency by 25%, and deployed Dockerized services on AWS EC2.",
        "Partnered with a 5-member Agile team across 4 sprint cycles, from design and testing to deployment and maintenance."
      ]
    }
  ],
  projects: [
    {
      title: "AE-MAP: Autoencoder-Based Multi-Omics Analysis Platform",
      description: "Deep multi-view autoencoder integrating genomics, transcriptomics, and proteomics data into a unified latent representation, reducing data dimensionality by 75%. End-to-end pipeline processing 1,000+ samples to identify 4 distinct disease subtypes.",
      tech: ["Python", "PyTorch", "TensorFlow", "Streamlit"],
      github: "https://github.com/AniketKu23/AE-MAP",
      live: null
    },
    {
      title: "Dynamic PDF Template Management System",
      description: "Architected a backend system supporting 4+ document types for dynamic PDF generation. Delivered 10+ reusable RESTful API endpoints with Swagger documentation, cutting new-template creation time by 40%.",
      tech: ["Node.js", "Express.js", "MongoDB"],
      github: "https://github.com/AniketKu23/DynamicPdfManagementSystem",
      live: "https://dynamic-pdf-management-system-front.vercel.app/"
    },
    {
      title: "Aircraft Seat Map Manager",
      description: "Built a backend service supporting configurable seat maps for 5+ aircraft types and airline-specific configurations. Designed 8+ REST API endpoints and scalable MongoDB schemas supporting multi-currency pricing across 5 currencies.",
      tech: ["Node.js", "Express.js", "MongoDB"],
      github: "https://github.com/AniketKu23/Aircraft-Seat-Map",
      live: "https://endearing-horse-7e5123.netlify.app/"
    },
    {
      title: "Multilingual Language Translator API",
      description: "Implemented a RESTful API supporting translation across 10+ languages for structured JSON and CSV files while preserving original formatting. Modular workflows with 6+ validation rules reduced errors by 35%.",
      tech: ["Node.js", "Express.js"],
      github: "https://github.com/AniketKu23/Multilingual-Language-Translator-API",
      live: "https://multilingual-language-translator-ap.vercel.app/"
    }
  ],
  skills: [
    {
      category: "Languages",
      skills: ["C++", "Java", "Python", "JavaScript", "SQL", "HTML", "CSS"]
    },
    {
      category: "Frontend",
      skills: ["React.js", "Redux", "React Router"]
    },
    {
      category: "Backend",
      skills: ["Node.js", "Express.js", "Flask", "RESTful APIs"]
    },
    {
      category: "Databases",
      skills: ["MongoDB", "PostgreSQL", "MySQL", "Redis"]
    },
    {
      category: "Cloud & DevOps",
      skills: ["Docker", "AWS EC2", "Git", "GitHub Actions", "Postman"]
    },
    {
      category: "AI/ML",
      skills: ["Machine Learning", "Deep Learning", "NLP", "Computer Vision", "TensorFlow", "PyTorch", "scikit-learn", "OpenCV"]
    },
    {
      category: "Core Concepts",
      skills: ["Data Structures & Algorithms", "OOP", "DBMS", "Operating Systems", "Computer Networks", "Auth & RBAC", "CI/CD"]
    }
  ],
  education: [
    {
      school: "Vellore Institute of Technology",
      degree: "B.Tech in Computer Science Engineering",
      year: "2027",
      score: "",
      location: "Vellore, TN"
    },
    {
      school: "Lucknow Public School & College",
      degree: "Senior Secondary (Class 12)",
      year: "",
      score: "",
      location: "Lucknow, UP"
    },
    {
      school: "Amity International School",
      degree: "Higher Secondary (Class 10)",
      year: "",
      score: "",
      location: "Lucknow, UP"
    }
  ],
  certifications: [
    {
      name: "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
      link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=4034FFA5EECF79AD125A0CBA52C91A8FEA02371241AAFD4A318DE5912D744A0A"
    },
    {
      name: "Docker Certification (Simplilearn)",
      link: "https://drive.google.com/file/d/1FdJ3GS29ZhZKtNluGw0ObqJfbqP8tWiQ/view?usp=sharing"
    },
    {
      name: "Full Stack Web Development (Udemy)",
      link: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-a2dfb991-7dde-4d23-87cc-60c2d9ec0411.pdf"
    },
    {
      name: "AI Mastery Program",
      link: "https://drive.google.com/file/d/1YPdBt2b0JI_deOr3S-sh-oC5DJpqb4p1/view?usp=sharing"
    },
    {
      name: "WorldQuant Brain (Gold Level)",
      link: "https://drive.google.com/file/d/1DmaHY8Ht-JHRB1NjA7gqIYxwv-vmEW7O/view?usp=sharing"
    }
  ]
};
