import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Target } from "lucide-react";

const education = [
  {
    institution: "B.Tech, Computer Science Engineering",
    degree: "First-semester student building foundations in programming and computer science",
    period: "Present",
    icon: GraduationCap,
    highlights: ["First Semester", "Programming Fundamentals", "Mathematics for CS"],
    isCurrent: true,
  },
  {
    institution: "Career Goal",
    degree: "Aspiring AI/ML Engineer - long-term goal in artificial intelligence and machine learning",
    period: "Future",
    icon: Target,
    highlights: ["Artificial Intelligence", "Machine Learning", "Maths + Python Foundation"],
    isCurrent: false,
  },
];

export const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="section-padding relative" ref={ref}>
      {/* Background decoration */}
      <div className="absolute inset-0 dotted-bg opacity-30" />

      <div className="container-custom relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
            Academic Background
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-gradient">Education</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Where I am right now, and where I'm heading.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative"
            >
              {/* Connector line */}
              {index !== education.length - 1 && (
                <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 to-border" />
              )}

              <div className="flex gap-6 pb-12">
                {/* Icon */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ delay: index * 0.15 + 0.3, type: "spring" }}
                  className={`relative z-10 flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${edu.isCurrent
                    ? "bg-gradient-to-br from-primary to-secondary animate-pulse-glow"
                    : "bg-muted"
                    }`}
                >
                  <edu.icon className={`w-5 h-5 ${edu.isCurrent ? "text-primary-foreground" : "text-muted-foreground"}`} />
                </motion.div>

                {/* Content */}
                <div className="flex-1 glass-card p-6 rounded-2xl group hover:border-primary/30 transition-colors">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-1">{edu.institution}</h3>
                      <p className="text-muted-foreground">{edu.degree}</p>
                    </div>
                    <div className="text-right">
                      <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${edu.isCurrent
                        ? "bg-primary/10 text-primary"
                        : "bg-muted text-muted-foreground"
                        }`}>
                        {edu.period}
                      </span>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2">
                    {edu.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="px-3 py-1 text-xs rounded-full bg-accent text-accent-foreground"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
