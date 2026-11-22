import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, User, LayoutTemplate, ArrowRight } from "lucide-react";

const services = [
  {
    title: "Business Websites",
    description: "Responsive websites for small businesses and professionals.",
    price: "Starting from ₹1,500",
    icon: Briefcase,
  },
  {
    title: "Personal Portfolio Websites",
    description: "Professional portfolio websites for students, creators and individuals.",
    price: "Starting from ₹1,000",
    icon: User,
  },
  {
    title: "Landing Page Development",
    description: "Focused landing pages for products, services and campaigns.",
    price: "Starting from ₹1,000",
    icon: LayoutTemplate,
  },
];

export const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" aria-labelledby="services-heading" className="section-padding relative" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
            Services
          </span>
          <h2 id="services-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            What I Can <span className="text-gradient">Build For You</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Modern, responsive and thoughtfully designed digital experiences tailored to your needs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6 rounded-2xl glow-card h-full flex flex-col"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-5">
                <service.icon className="w-5 h-5 text-primary-foreground" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-sm mb-4 flex-1">{service.description}</p>
              <p className="text-primary font-semibold">{service.price}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center max-w-2xl mx-auto"
        >
          <p className="text-muted-foreground text-sm mb-6">
            Prices are introductory estimates. Final quotations depend on requirements, functionality,
            content and deployment costs.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
          >
            Discuss Your Project
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
