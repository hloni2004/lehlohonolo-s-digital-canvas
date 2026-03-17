import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="py-24">
      <div className="container">
        <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-2">
          Academic Background
        </p>
        <h2 className="text-3xl font-semibold tracking-tight mb-12">Education</h2>

        <div className="relative max-w-3xl pl-10">
          <div className="absolute left-4 top-6 bottom-6 w-px bg-gradient-to-b from-primary/20 via-primary/70 to-primary/20" aria-hidden="true" />
          <div className="absolute left-[13px] top-6 bottom-6 w-[3px] bg-gradient-to-b from-transparent via-primary/20 to-transparent blur-[2px]" aria-hidden="true" />

          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" aria-hidden="true" />
            <span className="font-mono text-[10px] uppercase tracking-widest text-primary">Learning Journey</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -4 }}
            className="relative mb-4 overflow-hidden rounded-2xl border border-primary/15 bg-card/95 p-6 shadow-card"
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.12),transparent_40%)]" aria-hidden="true" />
            <span className="absolute -left-[22px] top-9 h-4 w-4 rounded-full border-2 border-background bg-primary shadow-[0_0_0_6px_rgba(59,130,246,0.15)]" aria-hidden="true" />
            <div className="flex items-start gap-4">
              <div className="rounded-lg bg-primary-muted p-2.5 mt-0.5">
                <GraduationCap className="h-5 w-5 text-primary" />
              </div>
              <div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
                  <h3 className="text-lg font-semibold">Advanced Diploma in Application Development</h3>
                  <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest whitespace-nowrap">
                    2026 — Present
                  </span>
                </div>
                <span className="inline-block mt-2 rounded-md bg-primary/10 px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-primary">
                  Current Focus
                </span>
                <p className="text-sm font-medium text-primary mt-0.5">
                  Cape Peninsula University of Technology (CPUT), Cape Town
                </p>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed" style={{ textWrap: "pretty" } as React.CSSProperties}>
                  I am currently completing my Advanced Diploma in Application Development, with a strong foundation in advanced data structures, software design principles, and modern development practices. I have also gained an introduction to research methodology, enabling me to approach problems analytically and refine solutions effectively. I am passionate about building scalable, efficient, and secure applications, and I am eager to apply my technical skills in real-world software development projects.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -4 }}
            className="relative overflow-hidden rounded-2xl border border-border/70 bg-card p-6 shadow-card"
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.08),transparent_45%)]" aria-hidden="true" />
            <span className="absolute -left-[22px] top-9 h-4 w-4 rounded-full border-2 border-background bg-primary/85 shadow-[0_0_0_6px_rgba(59,130,246,0.12)]" aria-hidden="true" />
            <div className="flex items-start gap-4">
              <div className="rounded-lg bg-primary-muted p-2.5 mt-0.5">
                <GraduationCap className="h-5 w-5 text-primary" />
              </div>
              <div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
                  <h3 className="text-lg font-semibold">Diploma in Application Development</h3>
                  <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest whitespace-nowrap">
                    2022 — 2025
                  </span>
                </div>
                <p className="text-sm font-medium text-primary mt-0.5">
                  Cape Peninsula University of Technology (CPUT), Cape Town
                </p>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed" style={{ textWrap: "pretty" } as React.CSSProperties}>
                  Diploma graduate with a solid foundation in software development, information systems, and application design. Experienced in building applications through academic projects, with continuous growth from programming fundamentals to advanced system design.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
