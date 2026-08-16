export type CaseStudy = {
  slug: string;
  name: string;
  tagline: string;
  stack: string[];
  links: { label: string; href: string }[];
  overview: string;
  highlights: string[];
  diagrams: { src: string; caption: string }[];
  heroImage?: string;
};

export const caseStudies: Record<string, CaseStudy> = {
  peernest: {
    slug: "peernest",
    name: "PeerNest \u2014 Mentoring Platform",
    tagline: "1-on-1 video mentoring: mentor discovery, session booking, and real-time WebRTC video/chat, built end-to-end.",
    stack: ["React", "TypeScript", "Spring Boot", "Spring Security", "WebRTC", "WebSocket (STOMP)", "PostgreSQL", "JWT"],
    links: [
      { label: "Live demo", href: "https://mentoringplatform-client.onrender.com/" },
      { label: "Source", href: "https://github.com/rahulkr2511/MentoringPlatform" },
      { label: "HLD doc", href: "https://github.com/rahulkr2511/MentoringPlatform/blob/main/Documentation/HLD_MentoringPlatform.md" },
      { label: "Demo video", href: "https://github.com/rahulkr2511/MentoringPlatform/blob/main/Documentation/Demo-Mentoring-Platform.mp4" },
    ],
    heroImage: "/projects/peernest/landing.jpg",
    overview:
      "A React client talks to a Spring Boot backend over REST for auth, profiles, and session booking, and over WebSocket (STOMP) for real-time signaling and chat. Video itself is peer-to-peer WebRTC \u2014 the server's job is just getting two peers to find each other and exchange offers/candidates.",
    highlights: [
      "JWT auth with role-based access for two roles \u2014 mentor and mentee \u2014 each with a distinct dashboard",
      "Mentor discovery, availability management, and session booking with history tracking",
      "WebRTC video calls with deterministic-initiator renegotiation to avoid glare, automatic ICE restart on failed/disconnected states, and exponential-backoff signaling reconnects",
      "Session-scoped real-time chat over the same STOMP WebSocket layer",
      "PostgreSQL schema across users, sessions, availability, and notification tables via JPA",
    ],
    diagrams: [
      { src: "/case-studies/peernest/architecture.png", caption: "End-to-end system architecture \u2014 React/TypeScript client, Spring Boot backend, PostgreSQL, WebRTC/STOMP real-time layer" },
    ],
  },
};
