import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Mail, MapPin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const EMAIL = "adityapandey451807@gmail.com";

const PROJECT_TYPES = [
  "Business Website",
  "Portfolio Website",
  "Landing Page",
  "Website Redesign",
  "Other",
];

const BUDGETS = [
  "Under ₹1,500",
  "₹1,500-₹3,000",
  "₹3,000-₹5,000",
  "Above ₹5,000",
  "Not Sure Yet",
];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Errors = Partial<Record<"name" | "email" | "projectType" | "budget" | "message", string>>;

const selectClass =
  "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2";

export const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    budget: "",
    message: "",
    // Honeypot: invisible to humans, bots fill it.
    company: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "opened">("idle");

  const set = (key: keyof typeof formData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((d) => ({ ...d, [key]: e.target.value }));
    setErrors((prev) => ({ ...prev, [key === "company" ? "" : key]: undefined }));
    setStatus("idle");
  };

  const validate = (): Errors => {
    const errs: Errors = {};
    if (!formData.name.trim()) errs.name = "Please enter your name.";
    if (!formData.email.trim()) errs.email = "Please enter your email address.";
    else if (!EMAIL_RE.test(formData.email.trim()))
      errs.email = "That doesn't look like a valid email address.";
    if (!formData.projectType) errs.projectType = "Please choose a project type.";
    if (!formData.budget) errs.budget = "Please choose a budget range (Not Sure Yet is fine).";
    if (!formData.message.trim()) errs.message = "Please describe your project in a few words.";
    return errs;
  };

  // No backend on a static site: open the visitor's email app with everything prefilled.
  // We never claim the message was sent; delivery happens in their email app.
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.company) return; // bot caught by the honeypot
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;
    setSubmitting(true);
    const subject = encodeURIComponent(
      `Project inquiry: ${formData.projectType} - ${formData.name}`
    );
    const body = encodeURIComponent(
      `Project type: ${formData.projectType}\nEstimated budget: ${formData.budget}\n\n${formData.message}\n\n- ${formData.name} (${formData.email})`
    );
    const mailto = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    window.setTimeout(() => {
      window.open(mailto, "_self");
      setSubmitting(false);
      setStatus("opened");
    }, 400);
  };

  const contactInfo = [
    { icon: Mail, label: "Email", href: `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}` },
    { icon: MapPin, label: "Location", href: "https://www.google.com/maps/search/?api=1&query=Greater%20Noida%2C%20Uttar%20Pradesh" },
    { icon: Github, label: "GitHub", href: "https://github.com/adityapandey187" },
  ];

  return (
    <section id="contact" aria-labelledby="contact-heading" className="section-padding relative overflow-hidden" ref={ref}>
      <div className="blob w-96 h-96 -bottom-48 -left-48 opacity-20" />
      <div className="blob w-80 h-80 -top-40 -right-40 opacity-20 animate-delay-300" />

      <div className="container-custom relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
            Get In Touch
          </span>
          <h2 id="contact-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Have an Idea? <span className="text-gradient">Let's Build It Together.</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Tell me about your project and I'll get back to you by email.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Always happy to talk
              </h3>
              <p className="text-muted-foreground">
                Whether it's a website for your business, a portfolio, a landing page, or just a
                question about my projects, my inbox is open.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <a
                    href={info.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={info.label}
                    className="flex items-center gap-4 p-4 rounded-xl bg-muted/50 hover:bg-accent transition-colors group"
                  >
                    <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <info.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{info.label}</p>
                    </div>
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} noValidate className="glass-card p-8 rounded-2xl space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="contact-name" className="text-sm font-medium text-foreground">
                    Full Name *
                  </label>
                  <Input
                    id="contact-name"
                    value={formData.name}
                    onChange={set("name")}
                    placeholder="Your name"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "err-name" : undefined}
                  />
                  {errors.name && (
                    <p id="err-name" role="alert" className="text-sm text-destructive">{errors.name}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <label htmlFor="contact-email" className="text-sm font-medium text-foreground">
                    Email Address *
                  </label>
                  <Input
                    id="contact-email"
                    type="email"
                    value={formData.email}
                    onChange={set("email")}
                    placeholder="you@example.com"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "err-email" : undefined}
                  />
                  {errors.email && (
                    <p id="err-email" role="alert" className="text-sm text-destructive">{errors.email}</p>
                  )}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="contact-type" className="text-sm font-medium text-foreground">
                    Project Type *
                  </label>
                  <select
                    id="contact-type"
                    className={selectClass}
                    value={formData.projectType}
                    onChange={set("projectType")}
                    aria-invalid={!!errors.projectType}
                    aria-describedby={errors.projectType ? "err-type" : undefined}
                  >
                    <option value="">Choose one...</option>
                    {PROJECT_TYPES.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                  {errors.projectType && (
                    <p id="err-type" role="alert" className="text-sm text-destructive">{errors.projectType}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <label htmlFor="contact-budget" className="text-sm font-medium text-foreground">
                    Estimated Budget *
                  </label>
                  <select
                    id="contact-budget"
                    className={selectClass}
                    value={formData.budget}
                    onChange={set("budget")}
                    aria-invalid={!!errors.budget}
                    aria-describedby={errors.budget ? "err-budget" : undefined}
                  >
                    <option value="">Choose one...</option>
                    {BUDGETS.map((b) => (
                      <option key={b} value={b}>{b}</option>
                    ))}
                  </select>
                  {errors.budget && (
                    <p id="err-budget" role="alert" className="text-sm text-destructive">{errors.budget}</p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="contact-message" className="text-sm font-medium text-foreground">
                  Project Description *
                </label>
                <Textarea
                  id="contact-message"
                  value={formData.message}
                  onChange={set("message")}
                  placeholder="What do you want to build? A sentence or two is enough to start."
                  rows={5}
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? "err-message" : undefined}
                />
                {errors.message && (
                  <p id="err-message" role="alert" className="text-sm text-destructive">{errors.message}</p>
                )}
              </div>

              {/* Honeypot field - hidden from humans */}
              <div aria-hidden="true" className="absolute -left-[9999px] top-0 h-0 w-0 overflow-hidden">
                <label htmlFor="contact-company">Company</label>
                <input
                  id="contact-company"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={formData.company}
                  onChange={set("company")}
                />
              </div>

              <Button type="submit" size="lg" disabled={submitting} className="w-full">
                {submitting ? "Preparing your email..." : (
                  <>
                    <Send className="w-4 h-4 mr-2" aria-hidden="true" />
                    Send Project Inquiry
                  </>
                )}
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                This opens your email app with the message filled in - the message is only sent
                when you press send there.
              </p>
              {status === "opened" && (
                <p role="status" className="text-sm text-primary text-center">
                  Your email app should have opened with your message filled in. Press send there
                  to deliver it.
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
