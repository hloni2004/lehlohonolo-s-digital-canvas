import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  index: string;
  title: string;
  tagline: string;
  description: string;
  highlights: string[];
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  backendGithubUrl?: string;
  isWinner?: boolean;
  status: string;
  year: string;
}

const projects: Project[] = [
  {
    index: "01",
    title: "SkillLink Africa",
    tagline: "Decentralized freelance marketplace powered by blockchain",
    description:
      "A decentralized platform connecting African freelancers with clients using secure blockchain-based payments and escrow systems.",
    highlights: [
      "🥇 Winner of 2025 Stellar Blockchain Hackathon",
      "Built smart contracts using Soroban (Rust)",
      "Implemented escrow system for trustless transactions",
      "Enabled secure XLM payments via Stellar network",
      "Designed full-stack architecture with React + Node.js",
    ],
    techStack: ["React", "Node.js", "Express", "TypeScript", "Stellar", "Soroban", "Rust", "Supabase"],
    githubUrl: "https://github.com/hloni2004/StellarAchievements",
    isWinner: true,
    status: "WINNER",
    year: "2025",
  },
  {
    index: "02",
    title: "LL Burger",
    tagline: "Production-style full-stack ordering platform with real-time operations",
    description:
      "A full-stack burger ordering system with customer and admin experiences, secure role-based authentication, real-time status updates, and event-driven backend workflows.",
    highlights: [
      "Implemented role-based security for CUSTOMER, ADMIN, and SUPER users",
      "Built JWT access and refresh-token authentication flow with secure refresh handling",
      "Enabled real-time order and business updates via WebSocket/STOMP",
      "Integrated RabbitMQ and Redis for async processing and caching",
      "Designed admin workflows for catalog, users, orders, and audit logs",
    ],
    techStack: ["React", "TypeScript", "Vite", "Java", "Spring Boot", "PostgreSQL", "Redis", "RabbitMQ", "WebSocket", "JWT", "Docker"],
    liveUrl: "https://llburgers-prompt-art.vercel.app",
    githubUrl: "https://github.com/hloni2004/llburgers-prompt-art.git",
    backendGithubUrl: "https://github.com/hloni2004/FoodMarket.git",
    isWinner: false,
    status: "DEPLOYED",
    year: "2026",
  },
  {
    index: "03",
    title: "Client Hub Portal",
    tagline: "Scalable e-commerce platform with real-time system updates",
    description:
      "Full-stack e-commerce application supporting product browsing, cart management, secure checkout, and real-time order and inventory updates.",
    highlights: [
      "Built with React + TypeScript and Spring Boot (Java)",
      "Designed secure REST APIs with system security controls",
      "Implemented hardened backend security practices",
      "Integrated AWS S3 for media storage",
      "Real-time order and inventory tracking",
    ],
    techStack: ["React", "TypeScript", "Tailwind", "Java", "Spring Boot", "PostgreSQL", "AWS S3", "System Security"],
    liveUrl: "https://client-hub-portal.vercel.app",
    githubUrl: "https://github.com/hloni2004/client-hub-portal-e5248649.git",
    backendGithubUrl: "https://github.com/hloni2004/E_Commerce.git",
    isWinner: false,
    status: "LIVE",
    year: "2025",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const } },
};

const Projects = () => {
  return (
    <section id="projects" className="py-24">
      <div className="container">
        <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-2">
          Featured Work
        </p>
        <h2 className="text-3xl font-semibold tracking-tight mb-12">Projects</h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-6"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={item}
              whileHover={{ y: -4 }}
              className="group relative rounded-xl bg-card p-6 shadow-card transition-shadow duration-200 hover:shadow-card-hover"
            >
              {/* Status Bar */}
              <div className="flex justify-between items-start mb-4">
                <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">
                  Project // {project.index}
                </span>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">
                    {project.status} // {project.year}
                  </span>
                  {project.isWinner && (
                    <span className="bg-primary-muted text-primary border border-primary/10 px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wide">
                      🏆 Hackathon Winner
                    </span>
                  )}
                </div>
              </div>

              <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-200">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground mt-1 font-medium">{project.tagline}</p>
              <p className="text-sm text-muted-foreground mt-3 leading-relaxed" style={{ textWrap: "pretty" } as React.CSSProperties}>
                {project.description}
              </p>

              <ul className="mt-4 space-y-1">
                {project.highlights.map((h) => (
                  <li key={h} className="text-sm text-foreground/70">
                    • {h}
                  </li>
                ))}
              </ul>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-1.5 mt-6">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground bg-muted px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-3 mt-6 pt-4 border-t border-border">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                    Live Demo
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
                  >
                    <Github className="h-3.5 w-3.5" />
                    Frontend GitHub
                  </a>
                )}
                {project.backendGithubUrl && (
                  <a
                    href={project.backendGithubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
                  >
                    <Github className="h-3.5 w-3.5" />
                    Backend GitHub
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
