const files = import.meta.glob("../assets/projects/*.webp", { eager: true, query: "?url", import: "default" });
const asset = (name) => files[`../assets/projects/${name}.webp`];

// Personal and university projects, newest first.
export const projects = [
  {
    id: "precalculus-tutor",
    title: "Precalculus Autonomous AI Tutor",
    category: "EdTech | Final Degree Project",
    year: "2023",
    summary:
      "An autonomous tutor that teaches Precalculus, combining NLP with math-expression parsing into expression trees.",
    tags: ["React 18", "TypeScript", "Python", "FastAPI", "NLP", "NumPy", "TensorFlow / Keras"],
    cover: asset("precalculus-ai-tutor"),
    links: { video: "https://www.youtube.com/watch?v=1Jl0W3WYxO0" },
  },
  {
    id: "photography-platform",
    title: "Microservices Photography Platform",
    category: "Distributed Systems | University Project",
    year: "2021",
    summary:
      "A photography-services platform built on a microservices architecture with service discovery, centralized configuration and an API gateway, fully containerized.",
    tags: ["Java", "Spring Boot", "Spring Cloud Gateway", "Eureka", "Config Server", "MySQL", "Docker"],
    cover: asset("microservices-photography-platform"),
    links: {
      video: "https://www.youtube.com/watch?v=tw6RCLD3xQA",
      repo: "https://github.com/Audric1Rosario/eventos-santiago",
    },
  },
  {
    id: "link-shortener",
    title: "Link Shortener",
    category: "Web Development | University Project",
    year: "2021",
    summary:
      "A URL-shortening website with client-side storage (LocalStorage and IndexedDB), Service Workers and SOAP, REST and gRPC services.",
    tags: ["Java", "Javalin", "H2", "IndexedDB", "Service Workers", "SOAP", "REST", "gRPC"],
    cover: asset("link-shortener"),
    links: {
      video: "https://www.youtube.com/watch?v=ehyupnTtSqw",
      repo: "https://github.com/Audric1Rosario/acortador-enlaces",
    },
  },
  {
    id: "pharmaceutical-sales",
    title: "Pharmaceutical Sales Platform",
    category: "E-commerce | University Project",
    year: "2021",
    summary: "An e-commerce platform for pharmaceutical products, with payments through the PayPal sandbox API.",
    tags: ["Java", "Spring Boot", "SQL Server", "PayPal API"],
    cover: asset("pharmaceutical-sales"),
    links: { repo: "https://github.com/Audric1Rosario/ing-software-mango-slr" },
  },
  {
    id: "little-rpg",
    title: "Little RPG",
    category: "Game Development",
    year: "2020",
    summary:
      "A 2D role-playing game with a storyline, items, power-ups, health and magic systems, enemies, a boss fight and scoring.",
    tags: ["C#", "Unity"],
    cover: asset("little-rpg"),
    links: { video: "https://www.youtube.com/watch?v=vz3eyy8x6Os" },
  },
  {
    id: "flow-free",
    title: "Flow Free",
    category: "Game Development",
    year: "2020",
    summary: "A 2D connect-the-dots puzzle game.",
    tags: ["C#", "Unity"],
    cover: asset("flow-free"),
    links: {
      video: "https://www.youtube.com/watch?v=V9N8SpRGCfI",
      repo: "https://github.com/Audric1Rosario/flow-free",
    },
  },
];
