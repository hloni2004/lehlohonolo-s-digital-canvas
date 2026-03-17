import { motion } from "framer-motion";
import { Award, BarChart3 } from "lucide-react";

const achievements = [
  {
    icon: Award,
    title: "2025 Stellar Blockchain Hackathon Winner",
    description: "Built SkillLink Africa, a decentralized freelance platform. Recognized for innovation in blockchain and financial inclusion.",
    badge: "🥇 Winner",
    verifyUrl: "/stellar.pdf",
    linkLabel: "View Certificate",
  },
  {
    icon: BarChart3,
    title: "CompTIA Data+ Certified (2025)",
    description: "Demonstrates skills in data analysis, visualization, and data-driven decision-making.",
    badge: "📊 Certified",
    verifyUrl: "https://www.credly.com/badges/1f256da7-209e-4dad-907d-1f9cc4bd05be",
    linkLabel: "Verify Credential",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] as const } },
};

const Achievements = () => {
  return (
    <section id="achievements" className="py-24">
      <div className="container">
        <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-2">
          Recognition
        </p>
        <h2 className="text-3xl font-semibold tracking-tight mb-12">Achievements & Certifications</h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-6 max-w-3xl"
        >
          {achievements.map((a) => (
            <motion.div
              key={a.title}
              variants={item}
              className="rounded-xl bg-card p-6 shadow-card"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="rounded-lg bg-primary-muted p-2.5">
                  <a.icon className="h-5 w-5 text-primary" />
                </div>
                <span className="bg-primary-muted text-primary border border-primary/10 px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wide">
                  {a.badge}
                </span>
              </div>
              <h3 className="text-base font-semibold mt-2">{a.title}</h3>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{a.description}</p>
              {a.verifyUrl && (
                <a
                  href={a.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex mt-3 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                >
                  {a.linkLabel || "Verify Credential"}
                </a>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
