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

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-xl bg-card p-6 shadow-card max-w-2xl"
        >
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
                Final-year student with a solid foundation in software development, information systems, and application design. Experienced in building applications through academic projects, with progressive growth from programming fundamentals to advanced system design.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
