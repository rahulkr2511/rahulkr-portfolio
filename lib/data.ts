// Edit everything in this file to update your site's content.

export const profile = {
  name: "Rahul K R",
  role: "Full-Stack Software Engineer",
  tagline: "React/Next.js on the frontend, Spring Boot & Node.js on the backend.",
  location: "Bengaluru, India",
  email: "krahulrajank@gmail.com",
  github: "https://github.com/rahulkr2511",
  linkedin: "https://linkedin.com/in/rahul-kr-08b2b61b5",
  resumeUrl: "/resume.pdf",
  availability: "Immediately available \u00b7 Open to remote & relocation \u00b7 IST (UTC+5:30)",
  summary:
    "Senior Software Engineer specializing in modern frontend systems, performance optimization, and real-time architectures. Over the past 4 years, I\u2019ve designed micro-frontend ecosystems, cut bundle sizes by 35%, and built high-concurrency SaaS interfaces that handle thousands of real-time agent sessions without missing a beat. While my core focus is delivering polished, accessible (WCAG 2.1), and bulletproof React/TypeScript UIs, I work seamlessly across the full stack\u2014from Spring Boot microservices and Node.js down to WebSockets and PostgreSQL. I build systems designed for scale, speed, and exceptional developer experience.",
};

export const experience = [
  {
    hash: "e4a9f21",
    company: "Exotel Techcom Pvt Ltd",
    title: "Member of Technical Staff-1 (Senior Engineer)",
    period: "Jul 2024 \u2014 Jul 2026",
    message: "feat: drive frontend performance, architecture & delivery at enterprise scale",
    details: [
      "Led frontend development of a real-time voice & chat SaaS platform with integrated AI, used by enterprise clients including Bluedart, QIIC, and Tafaseel",
      "Cut bundle size 35% via code-splitting, caching, lazy-loading, and memoization, with measurable Core Web Vitals gains",
      "Owned delivery across ~80% of core product modules on a platform serving thousands of concurrent agent sessions, holding delivery slippage under 10%",
      "Led sprint planning and wrote Architecture Decision Records (ADRs) guiding monthly release delivery",
      "Ran root-cause analysis on 100+ customer issues, shipping fixes and preventive measures across enterprise accounts",
    ],
  },
  {
    hash: "9c2b7de",
    company: "Exotel Techcom Pvt Ltd",
    title: "Member of Technical Staff-1",
    period: "Jul 2022 \u2014 Jun 2024",
    message: "feat: architect the real-time backbone connecting UI to 7+ backend services",
    details: [
      "Integrated the UI with 7+ Spring Boot microservices via API Gateway (REST, JWT) and internal gRPC, consuming Kafka events over WebSockets for real-time state sync across high-concurrency sessions",
      "Debugged and resolved production issues spanning the full stack \u2014 tracing failures from frontend UI through Java microservices to root cause",
      "Built a Node.js BFF on Fastify with HttpOnly-cookie session handling and a Redis pub/sub relay for sub-second cross-server notifications",
      "Architected a micro-frontend framework with cross-domain messaging, enabling 3+ independently deployable modules",
      "Watched service health via Kubernetes, ArgoCD, and Grafana/Prometheus, helping catch 98%+ of incidents before customers reported them, and wrote JUnit coverage for critical service paths",
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
    images: ["/projects/peernest/landing.jpg"],
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
    slug: "finance-automation",
    name: "SBI Finance Automation",
    blurb: "Bank-statement analyzer with auto-categorized spending charts.",
    stack: ["Python", "Streamlit", "Pandas", "Plotly"],
    impact: "Turns a raw bank statement CSV into categorized, interactive spend charts",
    link: "https://github.com/rahulkr2511/Finance-Automation",
    images: ["/projects/finance-automation/dashboard.jpg"],
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
    items: ["Node.js", "Spring Boot", "Spring Security", "JWT", "Java", "REST APIs", "gRPC", "Python", "Flask"],
  },
  {
    layer: "Data & Infra",
    items: ["PostgreSQL", "JPA/Hibernate", "Kafka", "Redis", "Kubernetes", "ArgoCD", "AWS", "CI/CD", "Linux"],
  },
  {
    layer: "Testing & Tooling",
    items: ["Git", "Jest", "React Testing Library", "Playwright", "JUnit", "Postman", "Swagger/OpenAPI", "Prometheus", "Grafana", "Figma"],
  },
  {
    layer: "Practice",
    items: ["Web Performance (Core Web Vitals)", "Accessibility (WCAG 2.1)", "System Design & ADRs", "WebRTC", "WebSockets", "Web Workers", "Micro-Frontends", "Responsive Design", "Agile/Scrum"],
  },
];

export const awards = [
  "Certificate of Appreciation from Exotel's SVP of Engineering for technical contributions and impact",
  "Recognized in the company-wide quarterly achievement list for consistent high performance",
];

export const education = {
  school: "National Institute of Technology, Calicut",
  degree: "B.Tech, Electronics & Communication Engineering",
  period: "Apr 2018 \u2014 Jun 2022",
};
