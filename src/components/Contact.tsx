import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24">
      <div className="container">
        <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-2">
          Get In Touch
        </p>
        <h2 className="text-3xl font-semibold tracking-tight mb-12">Contact</h2>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-xl"
        >
          <p className="text-muted-foreground leading-relaxed mb-8">
            Interested in working together or have a question? Feel free to reach out.
          </p>

          <div className="flex flex-col gap-4">
            <a
              href="mailto:hloniyacho@gmail.com"
              className="inline-flex items-center gap-3 rounded-xl bg-card p-4 shadow-card hover:shadow-card-hover transition-shadow duration-200 group"
            >
              <div className="rounded-lg bg-primary-muted p-2.5">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Email</p>
                <p className="text-sm font-medium group-hover:text-primary transition-colors">hloniyacho@gmail.com</p>
              </div>
            </a>

            <div className="flex gap-3">
              <a
                href="https://github.com/hloni2004"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-card p-4 shadow-card hover:shadow-card-hover transition-shadow duration-200 flex-1 group"
              >
                <Github className="h-5 w-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                <span className="text-sm font-medium group-hover:text-primary transition-colors">GitHub</span>
              </a>

              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-card p-4 shadow-card hover:shadow-card-hover transition-shadow duration-200 flex-1 group"
              >
                <Linkedin className="h-5 w-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                <span className="text-sm font-medium group-hover:text-primary transition-colors">LinkedIn</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
