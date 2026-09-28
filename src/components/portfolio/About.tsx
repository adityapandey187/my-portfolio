import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, BookOpen, Cpu, Network, Sparkles } from "lucide-react";
import avatar from "@/assets/aditya-avatar.jpg";

const highlights = [
  { label: "First Semester", note: "Starting my CSE degree", icon: BookOpen },
  { label: "CSE Student", note: "Bachelor's degree in progress", icon: Cpu },
  { label: "AI/ML Goal", note: "Long-term career direction", icon: Network },
  { label: "Always Learning", note: "Consistency over shortcuts", icon: Sparkles },
];

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding relative overflow-hidden" ref={ref}>
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image/Visual Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-[3/4] max-w-sm mx-auto">
              {/* Background decoration*/}
              <div className="absolute inset-4 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl rotate-6" />
              <div className="absolute inset-4 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-3xl -rotate-3" />

              {/* Avatar container */}
              <div className="relative glass-card rounded-3xl overflow-hidden aspect-[3/4] border border-white/10 bg-transparent backdrop-blur-sm">
                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    src={avatar}
                    alt="Aditya Pandey"
                    className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-110"
                  />
                </div>
              </div>

              {/* floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5, type: "spring" }}
                className="absolute -bottom-4 -right-4 bg-background/80 backdrop-blur-md border border-border/50 px-4 py-2 rounded-full flex items-center gap-2 shadow-xl"
              >
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">Greater Noida, India</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4"
            >
              About Me
            </motion.span>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Strong basics first,{" "}
              <span className="text-gradient">big goals next</span>
            </h2>

            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed mb-8">
              <p>
                I'm <span className="text-foreground font-semibold">Aditya Pandey</span>,
                a first-semester Computer Science Engineering student at the beginning of my
                B.Tech journey. Right now, my focus is on building strong basics instead of
                pretending to know everything too early.
              </p>
              <p>
                I'm learning programming fundamentals, problem solving, computer science
                concepts, and the habits needed to study technical subjects consistently. I
                want to understand each concept properly and grow step by step.
              </p>
              <p>
                My long-term career goal is to become an AI/ML engineer. For now, that means
                strengthening the maths, programming, and computer science foundation that
                artificial intelligence and machine learning are built on.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="p-4 rounded-2xl bg-muted/50 hover:bg-accent transition-colors group"
                >
                  <item.icon className="w-6 h-6 mb-2 text-primary group-hover:scale-110 transition-transform" />
                  <div className="font-bold text-foreground">{item.label}</div>
                  <div className="text-xs md:text-sm text-muted-foreground">{item.note}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
