import { motion } from "framer-motion";

const Experience = () => {
  return (
    <section id="experience" className="py-24">
      <div className="container">
        <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-2">
          Work History
        </p>
        <h2 className="text-3xl font-semibold tracking-tight mb-12">Experience</h2>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-xl bg-card p-6 shadow-card max-w-2xl"
        >
          <div className="flex justify-between items-start mb-1">
            <h3 className="text-lg font-semibold">Data Analyst</h3>
            <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">
              2025 — Present
            </span>
          </div>
          <p className="text-sm font-medium text-primary mb-4">Capaciti</p>

          <ul className="space-y-2">
            {[
              "Cleaned and validated large datasets using SQL and Excel",
              "Optimized database queries for performance",
              "Built Power BI dashboards to track KPIs",
              "Translated data into actionable business insights",
            ].map((item) => (
              <li key={item} className="text-sm text-muted-foreground leading-relaxed">
                • {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
