import { motion } from "framer-motion";
import { ArrowDown, FileText, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-[76vh] flex items-center">
      <div className="container">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-flex items-center gap-2 rounded-lg bg-primary-muted px-3 py-1.5 font-mono text-[11px] uppercase tracking-widest text-primary mb-6">
              🏆 2025 Stellar Hackathon Winner
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] mt-6"
          >
            Lehlohonolo Mokoena
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-mono text-xs uppercase tracking-widest text-muted-foreground mt-4"
          >
            Full-Stack Software Developer · Backend & Data Enthusiast
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="text-muted-foreground text-lg mt-6 leading-relaxed max-w-2xl"
            style={{ textWrap: "pretty" } as React.CSSProperties}
          >
            I build scalable full-stack applications, secure APIs, and data-driven systems that solve real-world problems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap gap-3 mt-10"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
            >
              <ArrowDown className="h-4 w-4" />
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted"
            >
              <Mail className="h-4 w-4" />
              Contact Me
            </a>
            <a
              href="/LehlohonoloMokoena-Cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted"
            >
              <FileText className="h-4 w-4" />
              Download CV
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
