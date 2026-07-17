// ============================================================
// portfolioData.js — Centralized configuration for Shawaiz Irshad's Portfolio
// All external links, personal info, and content in one place.
// Update this file to change any content across the entire site.
// ============================================================

export const personalInfo = {
  name: "Shawaiz Irshad",
  firstName: "Shawaiz Irshad",
  brandName: "Shawaiz Irshad",
  title: "Full Stack & Java Developer",
  location: "Lahore, Pakistan",
  phone: "+92 322 4921883",
  emails: {
    primary: "shawaizirshad00@gmail.com",
    secondary: "alberteinstein98.34@gmail.com",
  },
  summary:
    "Best software engineer and motivated BBIT & Computer Science student with solid skills in Javascript, html, css, Bootstrap, React js, and Python. Passionate about building scalable full-stack applications with clean architecture and modern tech stacks.",
  resumeUrl: "/Shawaiz_Resume_2026.pdf",
};


export const socialLinks = {
  github: "https://github.com/alberteinstein9834-ai",
  linkedin: "https://linkedin.com/",
  instagram: "https://www.instagram.com/_syedshazzy?igsh=MWRwOTlpZjkwdzA1aA==",
};

export const heroContent = {
  greeting: "Hi, I'm Shawaiz",
  titleHighlight: "Full Stack Developer",
  subtitle:
    "I build fast, scalable applications using Javascript, html, css, Bootstrap, React js, and Python.",
  ctaPrimary: { text: "View My Work", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: "#contact",
  },
  ctaResume: { text: "Download Resume", href: "/Resume_Shahwaiz.pdf" },
};

export const aboutContent = {
  heading: "Hello!",
  bio: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Shawaiz</span>, an aspiring software engineer based in Lahore, Pakistan, dedicated to crafting clean, functional, and highly scalable full-stack applications.`,
  techStack: ["Javascript", "HTML", "CSS", "Bootstrap", "React js", "Python"],
};

export const skillsContent = {
  badge: "My Process",
  heading: "Here's how I turn ideas into real-world applications",
  description:
    "I follow a structured, creative, and highly technical approach to turn ideas into robust full-stack applications.",
  cards: [
    {
      number: "01",
      title: "Research",
      text: "I start by understanding goals, user requirements, and technical constraints to lay a rock-solid foundation for the project.",
    },
    {
      number: "02",
      title: "Design",
      text: "Crafting clean architecture, intuitive interfaces, and pixel-perfect wireframes that guarantee an engaging and accessible user experience.",
    },
    {
      number: "03",
      title: "Develop",
      text: "Building scalable backends and responsive frontends using modern tech stacks and best practices.",
    },
    {
      number: "04",
      title: "Deploy",
      text: "Rigorous testing, performance optimization, and seamless deployment to cloud infrastructure, followed by ongoing support.",
    },
  ],
  endText: "Ready to ship!",
};

// Brand New Technical Skills Data
export const technicalSkills = {
  categories: [
    {
      title: "Programming Languages",
      skills: [
        { name: "Java", level: 90 },
        { name: "C++", level: 85 },
        { name: "Python", level: 75 }
      ]
    },
    {
      title: "Full Stack",
      skills: [
        { name: "MERN Stack", level: 90 },
        { name: "HTML", level: 95 },
        { name: "CSS", level: 90 },
        { name: "JavaScript", level: 92 }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Spring Boot", level: 88 },
        { name: "FastAPI", level: 75 },
        { name: "REST APIs", level: 90 }
      ]
    },
    {
      title: "Databases",
      skills: [
        { name: "MongoDB", level: 88 },
        { name: "MySQL", level: 85 },
        { name: "Firebase", level: 80 }
      ]
    },
    {
      title: "Tools ",
      skills: [
        { name: "Git & GitHub", level: 90 },
        { name: "VS Code", level: 95 },
        { name: "Antigravity", level: 80 },
        { name: "Codex", level: 75 }
      ]
    },
    {
      title: "Computer Science Concepts",
      skills: [
        { name: "Data Structures", level: 88 },
        { name: "Algorithms", level: 85 },
        { name: "DBMS", level: 86 },
        { name: "OOP", level: 90 },
        { name: "Software Engineering", level: 84 }
      ]
    }
  ]
};

// Brand New Content Creation Data
export const contentCreation = {
  badge: "Cinematic Content",
  heading: "Creative Direction & Cinematic Edits",
  description: "Beyond coding, I craft visual stories with premium editing, color grading, and creative pacing.",
  categories: [
    {
      title: "Cinematic Reels",
      description: "Visual stories crafted with cinematic lighting, premium color grading, and high-impact sound design.",
      stats: "50+ Reels Created",
      icon: "🎥"
    },
    {
      title: "Travel Videos",
      description: "Immersive travel vlogs and aesthetic edits capturing cultures, landscapes, and visual rhythms.",
      stats: "15+ Countries/Cities",
      icon: "✈️"
    },
    {
      title: "Educational Reels",
      description: "Fast-paced tech tutorials and educational content designed to simplify coding and software engineering.",
      stats: "100k+ Views",
      icon: "🧠"
    },
    {
      title: "My Own Creative Edits",
      description: "Experimental transitions, 3D overlays, and trendsetting visual effects that push creative bounds.",
      stats: "Personal Projects",
      icon: "⚡"
    }
  ]
};




// Brand New Internships Data
export const internshipsList = [
  {
    organization: "Techstem, Lahore",
    role: "FULL STACK DEVELOPER INTERN",
    duration: "MARCH 2026 - MAY 2026",
    skills: ["Data Analytics", "Business Intelligence", "EMAIL TEMPLATES", "WEB DEVELOPMENT"],
    tech: ["FIREBASE", "MySQL", "Excel"]
  },
  {
    organization: "Canva",
    role: "Visual Content Creator & Designer",
    duration: "May 2024 - June 2024",
    skills: ["Visual Designing", "Poster Design", "Team Branding", "Asset Creation"],
    tech: ["Canva Pro", "Figma", "Canva Design Suite"]
  },
  {
    organization: "CollegeTips.in",
    role: "Web Development Intern",
    duration: "1 Month (Offline)",
    skills: ["Frontend Development", "Responsive Layouts", "API Testing", "Web Performance"],
    tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap"]
  }
];

// Brand New Soft Skills Data
export const softSkillsList = [
  { name: "Leadership", icon: "👑", desc: "Guiding teams, managing tasks, and driving project completion with shared vision." },
  { name: "Public Speaking", icon: "🎤", desc: "Confident stage presence, anchoring summits, and delivering articulate technical ideas." },
  { name: "Team Collaboration", icon: "🤝", desc: "Collaborating across fields, building racing carts, and engineering code in sync." },
  { name: "Communication", icon: "💬", desc: "Clear, concise, and structured interactions in both business and technical contexts." },
  { name: "Problem Solving", icon: "🧩", desc: "Breaking down complex engineering tasks into clean, logical, and modular pieces." },
  { name: "Adaptability", icon: "🌟", desc: "Quick to pick up new frameworks like FastAPI, Spring Boot, or automation tools like n8n." },
  { name: "Creativity", icon: "🎨", desc: "Blending cinematic aesthetics with software structure to build premium experiences." },
  { name: "Time Management", icon: "⏰", desc: "Balancing B.Tech studies, event hosting, and developing robust software platforms." }
];

export const projects = [
  {
    id: "E-commerce",
    number: "01",
    badge: "🚀 Flagship Project",
    title: "E-commerce",
    description:
      "E-commerce — This e-commerce website is designed to provide customers with a modern, fast, and secure online shopping experience. The platform allows users to browse products, view detailed descriptions, add items to their cart, and complete purchases through a simple and user-friendly interface. Built with React js, Node.js, Firebase, Bootstrap, Tailwind and CSS.",
    techTags: [
      "React js",
      "Node.js",
      "Firebase",
      "Bootstrap",
      "Tailwind",
      "CSS",
      
    ],
    links: {
      github: "https://github.com/alberteinstein9834-ai",
      demo: "https://my-accessories.vercel.app/",
    },
    isFlagship: true,
  },
  {
    id: "practice-portfolio",
    number: "02",
    badge: null,
    title: "Practice Portfolio",
    description:
      "A platform connecting local skilled workers with customers, featuring real-time search, worker profiles, and booking management with full database integration.",
    techTags: ["React", "Node.js", "MongoDB", "Express", "REST API"],
    links: {
      github: "https://github.com/alberteinstein9834-ai",
      frontendDemo: "https://shawaiz-ten.vercel.app/",
      
    },
    isFlagship: false,
  },
  {
    id: "sentiment-analysis",
    number: "03",
    badge: null,
    title: "AI-Powered Sentiment Analysis",
    description:
      "A full-stack web application that analyzes citizen feedback using Artificial Intelligence to classify sentiments as positive, negative, or neutral. Features a responsive React frontend, a Node.js backend, MongoDB for data storage, and n8n automation for workflow orchestration — enabling real-time insights and efficient feedback management.",
    techTags: ["React", "Node.js", "MongoDB", "n8n", "AI/ML", "REST API"],
    links: {
      github: "https://github.com/alberteinstein9834-ai", // Update when available
    },
    isFlagship: false,
  },
];

export const certificates = {
  featured: [
    {
      name: "Oracle Cloud Infrastructure 2025",
      issuer: "Oracle",
      icon: "☁️",
    },
    {
      name: "Programming in Javascript (94%)",
      issuer: "Techstem",
      icon: "☕",
    },
    {
      name: "C Programming & Assembly Language",
      issuer: "Kst learning",
      icon: "⚙️",
    },
    {
      name: "Technology Job Simulation",
      issuer: "Shoaib raza",
      icon: "💼",
    },
    {
      name: "Career Edge – IT Primer",
      issuer: "TCS iON",
      icon: "🎓",
    },
    {
      name: "Fundamentals of BI & Analytics",
      issuer: "Youtube",
      icon: "📊",
    },
  ],
  viewAllUrl:
    "https://drive.google.com/file/d/1ObdGWtVSx8SsfR4AcbCySSd9LFXcAs9f/view?usp=sharing",
};

export const education = {
  degree: "BBIT – BACCHELOR IN BUSINESS & INFORMATION TECHNOLOGY",
  institution: "VIRTUAL UNIVERSITY OF PAKISTAN",
  cgpa: "2.66",
  graduation: "2028",
  twelfth: "12th ENGINEERING – 48%",
  tenth: "10th COMPUTER – 70%",
};

export const footerContent = {
  taglines: [
    "Software Engineering & Web Dev",
    "Javascript · React · Python",
    "Full Stack Applications",
  ],
  credential: "BBIT · CGPA 2.66",
  copyright: `© ${new Date().getFullYear()} Shawaiz irshad | Built with React`,
};

// EmailJS Configuration
// Will read directly from environment variables in Vite (starting with VITE_)
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "Shazzy123$",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "wazee123$",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "OspQWmRzsflbM7zm7",
};
