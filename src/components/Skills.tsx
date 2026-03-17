import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Languages",
    skills: ["Java", "Python", "SQL", "TypeScript"],
  },
  {
    title: "Frontend",
    skills: ["React", "Tailwind CSS", "Vite"],
  },
  {
    title: "Backend",
    skills: ["Spring Boot", "Node.js", "Express"],
  },
  {
    title: "Tools & Platforms",
    skills: ["Docker", "AWS S3", "Supabase", "Git", "Postman", "Power BI"],
  },
  {
    title: "Concepts",
    skills: ["RESTful APIs", "JWT Auth", "System Design", "Cloud Storage", "TDD (JUnit)"],
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } },
};

const Skills = () => {
  return (
    <section id="skills" className="py-24">
      <div className="container">
        <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-2">
          Capabilities
        </p>
        <h2 className="text-3xl font-semibold tracking-tight mb-12">Skills & Technologies</h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8"
        >
          {skillCategories.map((category) => (
            <motion.div key={category.title} variants={item}>
              <h3 className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground mb-4">
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="text-sm text-foreground/80 hover:text-primary transition-colors duration-200 cursor-default"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
