import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Code2, Terminal, Braces, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import cutout from "@/assets/aditya-cutout.webp";

const roles = [
  "CSE Student",
  "Aspiring AI/ML Engineer",
  "Web Developer",
  "Problem Solver",
];

const floatingIcons = [
  { Icon: Code2, delay: 0, x: "4%", y: "18%" },
  { Icon: Terminal, delay: 0.5, x: "90%", y: "15%" },
  { Icon: Braces, delay: 1, x: "46%", y: "12%" },
];

export const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const currentRole = roles[roleIndex];

    if (isTyping) {
      if (displayText.length < currentRole.length) {
        const timeout = setTimeout(() => {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        }, 80);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => setIsTyping(false), 2000);
        return () => clearTimeout(timeout);
      }
    } else {
      if (displayText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 40);
        return () => clearTimeout(timeout);
      } else {
        setRoleIndex((prev) => (prev + 1) % roles.length);
        setIsTyping(true);
      }
    }
  }, [displayText, isTyping, roleIndex]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 dotted-bg opacity-40" />

      {/* Animated Blobs */}
      <div className="blob w-96 h-96 -top-48 -left-48" />
      <div className="blob w-80 h-80 -bottom-40 -right-40 animate-delay-200" />

      {/* Floating Icons */}
      {floatingIcons.map(({ Icon, delay, x, y }, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.2, scale: 1 }}
          transition={{ delay: delay + 0.5, duration: 0.5 }}
          className="absolute floating hidden md:block"
          style={{ left: x, top: y }}
        >
          <Icon className="w-12 h-12 text-primary/30" />
        </motion.div>
      ))}

      {/* Giant outline text behind the photo */}
      <div
        aria-hidden="true"
        className="hidden lg:block absolute bottom-0 left-1/2 -translate-x-1/2 select-none pointer-events-none whitespace-nowrap font-extrabold leading-none tracking-tight text-outline text-[19vw] opacity-70"
      >
        PORTFOLIO
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 w-full px-4 pt-28 lg:pt-20">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-center">
          {/* Text side */}
          <div className="text-center lg:text-left order-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-accent-foreground text-xs sm:text-sm font-medium">
                <GraduationCap className="w-4 h-4" />
                First Semester • CSE Foundations • Aspiring AI/ML Engineer
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
            >
              Hi, I'm{" "}
              <span className="text-gradient">Aditya Pandey</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="h-10 md:h-12 flex items-center justify-center lg:justify-start mb-6"
            >
              <span className="text-lg sm:text-xl md:text-2xl font-mono text-muted-foreground">
                {"<"}
                <span className="text-primary font-semibold">{displayText}</span>
                <span className="animate-pulse">|</span>
                {" />"}
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8"
            >
              A first-semester Computer Science Engineering student building strong
              programming and CS foundations, with a long-term goal of becoming an{" "}
              <span className="text-foreground font-medium">AI/ML engineer</span>.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <Button
                size="lg"
                className="group bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg rounded-full"
                asChild
              >
                <a href="#contact">
                  Let's Connect
                  <motion.span
                    className="ml-2 inline-block"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    →
                  </motion.span>
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-6 text-lg rounded-full border-2"
                asChild
              >
                <a href="#projects">View My Work</a>
              </Button>
            </motion.div>
          </div>

          {/* Photo side */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="order-2 relative flex items-end justify-center lg:justify-end"
          >
            <span
              aria-hidden="true"
              className="lg:hidden absolute left-1/2 -translate-x-1/2 bottom-[24%] select-none pointer-events-none whitespace-nowrap font-extrabold leading-none tracking-tight text-outline text-[24vw] opacity-80"
            >
              PORTFOLIO
            </span>
            <img
              src={cutout}
              alt="Aditya Pandey"
              className="relative z-10 h-[46vh] sm:h-[54vh] lg:h-[66vh] w-auto object-contain object-bottom drop-shadow-[0_10px_60px_hsl(262_83%_62%/0.35)]"
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="hidden md:block absolute bottom-6 left-10 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="text-sm font-medium">Scroll to explore</span>
          <ArrowDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
};
