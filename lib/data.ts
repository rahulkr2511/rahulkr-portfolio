// Edit everything in this file to update your site's content.

export const profile = {
  name: "Rahul K R",
  role: "Full-Stack Software Engineer",
  tagline: "React/Next.js on the frontend, Spring Boot & Node.js on the backend.",
  location: "Bengaluru, India",
  email: "krahulrajank@gmail.com",
  github: "https://github.com/rahulkr2511",
  linkedin: "https://www.linkedin.com/in/rahul-k-r-08b2b61b5/",
  resumeUrl: "/resume.pdf",
  photoUrl: "/Photo.png",
  availability: "Actively seeking opportunities \u00b7 Open to remote & relocation \u00b7 IST (UTC+5:30)",
  summary:
    "Senior Software Engineer specializing in modern frontend systems, performance optimization, and real-time architectures. Over the past 4 years, I\u2019ve designed micro-frontend ecosystems, cut bundle sizes by 35%, and built high-concurrency SaaS interfaces that handle thousands of real-time agent sessions without missing a beat. While my core focus is delivering polished, accessible (WCAG 2.1), and bulletproof React/TypeScript UIs, I work seamlessly across the full stack\u2014from Spring Boot microservices and Node.js down to WebSockets and PostgreSQL. I build systems designed for scale, speed, and exceptional developer experience.",
};

export const experience = [
  {
    hash: "e4a9f21",
    company: "Exotel Techcom Pvt Ltd",
    title: "Member of Technical Staff - 1 -- Senior Software Engineer Equivalent",
    period: "Jul 2024 \u2014 Present",
    message: "feat: deliver end-to-end SaaS architecture, high-concurrency UI & Java microservices",
    details: [
      "Led sprint planning, Architecture Decision Records (ADRs), and release delivery for ~80% of core modules on a high-concurrency SaaS platform, keeping delivery slippage under 10%",
      "Led frontend engineering for the Omnichannel (Voice & Chat) platform — a responsive, Redux-driven UI with optimistic updates supporting 10k+ concurrent users for enterprise clients including QIIC, Blue Dart, and Tafaseel",
      "Engineered backend modules in Java, OSGi, and Spring Boot, building localized REST APIs with internationalization (i18n) support to enable multi-locale formatting across the platform",
      "Cut bundle size by 35% via code-splitting, caching, lazy-loading, and memoization, driving measurable Core Web Vitals gains tracked via Grafana RUM",
      "Adopted GenAI-assisted engineering workflows using MCP (Model Context Protocol) with Cursor to automate PostgreSQL debugging and Confluence updates, and built Cursor skills for automated code reviews and Playwright E2E test generation, cutting code review effort by 6 hrs/week."
    ],
  },
  {
    hash: "9c2b7de",
    company: "Exotel Techcom Pvt Ltd",
    title: "Member of Technical Staff - 1",
    period: "Jul 2022 \u2014 Jun 2024",
    message: "feat: build real-time distributed pipelines, micro-frontends & microservice integrations",
    details: [
      "Engineered a micro-frontend framework using cross-domain messaging patterns, enabling 3+ independent module deployment pipelines and secure runtime integration across legacy (GWT) and modern UI applications",
      "Conducted root cause analysis (RCA) on 100+ critical production issues, establishing preventive action plans (POA) to ensure minimal service disruption across enterprise accounts",
      "Integrated UI workflows with 7+ Spring Boot microservices via API Gateway (REST, JWT auth) and gRPC, consuming Kafka events over WebSockets for real-time state sync across high-concurrency sessions",
      "Maintained infrastructure observability with Kubernetes, ArgoCD, Prometheus, and Grafana (RUM) to drive 99%+ service uptime",
      "Engineered custom keyboard navigation loops and shortcuts across the core voice interface, improving WCAG 2.1 accessibility (a11y) and reducing agent task completion time",
      "Delivered architecture POCs and mentored team members on best practices, eliminating XSS vulnerabilities via DOMPurify and Content Security Policy (CSP) while driving UI performance optimizations across core modules.",
    ],
  },
];

type Project = {
  slug: string;
  name: string;
  blurb: string;
  stack: string[];
  impact: string;
  link: string;
  demo?: string;
  caseStudySlug?: string;
  images?: string[];
  linkLabel?: string;
};

export const projects: Project[] = [
  {
    slug: "peernest",
    name: "PeerNest \u2014 Mentoring Platform",
    blurb: "1-on-1 video mentoring app: mentor discovery, booking, and live sessions.",
    stack: ["React", "Spring Boot", "WebRTC", "WebSocket", "PostgreSQL", "JWT"],
    impact: "Full end-to-end build \u2014 RBAC auth, real-time signaling, dual-stream video & screen share",
    link: "https://github.com/rahulkr2511/MentoringPlatform",
    demo: "https://mentoringplatform-client.onrender.com/",
    caseStudySlug: "peernest",
    images: ["/projects/peernest/preview.png"],
  },
  {
    slug: "craftmycv",
    name: "CraftMyCV",
    blurb: "Resume builder with customizable templates and PDF export.",
    stack: ["React", "TypeScript", "Redux", "Rich Text Editor"],
    impact: "Modular Redux architecture with middleware for state-transition debugging",
    link: "https://github.com/rahulkr2511/ResumeBuilder",
    demo: "https://rahulkr2511.github.io/ResumeBuilder/",
    images: ["/projects/craftmycv/craftmycv.jpg"],
  },
  {
  slug: "product-manager-app",
  name: "Product Manager App",
  blurb: "Full-stack inventory/product management tool with CRUD operations, image uploads, and search.",
  stack: ["Spring Boot", "Spring Security", "Spring Data JPA", "H2","React", "Vite", "CSS", "HTML", "BLOB storage"],
  impact: "Basic-auth-protected REST API (public browsing, authenticated mutations) backing a card-based product catalog UI with image upload, search, and CRUD operations.",
  link: "https://github.com/rahulkr2511/product-manager-app",
  images: ["/projects/product-manager/preview.png"],
  },
  {
    slug: "emotion-game",
    name: "Emotion-Based Cognitive Game for Children",
    blurb: "CNN-driven game that reads a child's mood and adapts gameplay in real time.",
    stack: ["Python", "TensorFlow/Keras", "CNN", "OpenCV", "Flask", "Unity"],
    impact: "90.6% accuracy across 5 emotion classes \u2014 published as a co-authored conference paper (NIT Calicut)",
    link: "/projects/emotion-game/paper.pdf",
    linkLabel: "View paper",
    images: ["/projects/emotion-game/entertainment-game.jpg", "/projects/emotion-game/skill-game.jpg"],
  }
];

export const stack = [
  {
    layer: "Frontend",
    items: ["JavaScript (ES6+)", "TypeScript", "React.js", "Next.js", "Redux", "React Router", "Tailwind", "Material-UI", "GWT"],
  },
  {
    layer: "Backend",
    items: ["Node.js", "Spring Boot", "Spring Security", "JWT", "OAuth2", "Java", "REST APIs", "gRPC", "Python", "Flask"],
  },
  {
    layer: "Data & Infra",
    items: ["PostgreSQL", "JPA/Hibernate", "Kafka", "Redis", "Kubernetes", "ArgoCD", "AWS", "CI/CD", "Linux"],
  },
  {
    layer: "Testing & Tooling",
    items: ["Git", "Jest", "Cypress", "React Testing Library", "Playwright", "JUnit", "Postman", "Swagger/OpenAPI", "Prometheus", "Grafana", "Elasticsearch", "Figma", "Vite", "Cursor (GenAI-assisted workflows)", "MCP (Model Context Protocol)"],
  },
  {
    layer: "Practice",
    items: ["Web Performance (Core Web Vitals)", "Accessibility (WCAG 2.1)", "System Design & ADRs", "WebRTC", "WebSockets", "Web Workers", "Micro-Frontends", "Responsive Design", "Agile/Scrum", "i18n"],
  },
];

type Award = {
  text: string;
  link?: string;
  linkLabel?: string;
};

export const awards: Award[] = [
  {
    text: "Certificate of Appreciation from Exotel's SVP of Engineering for technical contributions and impact",
    link: "https://www.linkedin.com/posts/rahul-k-r-08b2b61b5_i-am-extremely-happy-to-share-that-ive-received-share-6956495779930787840-crEA/?utm_source=share&utm_medium=member_desktop&rcm=ACoAADIOS-sBJcMfAoSLCAYDHNngTqrua3ITDjA",
    linkLabel: "View certificate",
  },
  {
    text: "Recognized in the company-wide quarterly achievement list for consistent high performance",
  },
];

export const education = {
  school: "National Institute of Technology, Calicut",
  degree: "B.Tech, Electronics & Communication Engineering",
  period: "Apr 2018 \u2014 Jun 2022",
};
