import { useState } from "react";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";

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

const field =
  "mt-2 w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-base text-foreground placeholder:text-muted-foreground/70 transition-colors focus:border-white/60 focus:outline-none focus-visible:outline-none";

export const Contact = () => {
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

  const Err = ({ id, msg }: { id: string; msg?: string }) =>
    msg ? (
      <p id={id} role="alert" className="mt-2 text-sm text-destructive">
        {msg}
      </p>
    ) : null;

  return (
    <section id="contact" aria-labelledby="contact-heading" className="px-3 py-8 md:px-5 md:py-14">
      <div className="panel mx-auto max-w-[1360px]">
        <Reveal className="flex flex-col items-center text-center">
          <p className="eyebrow">Contact</p>
          <h2 id="contact-heading" className="display-lg mt-7 max-w-[18ch]">
            Have a project in mind? Let's build something meaningful.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-12 md:mt-20 md:grid-cols-12 md:gap-14">
          <Reveal className="md:col-span-4">
            <p className="max-w-xs text-muted-foreground">
              Tell me about your project and I'll get back to you by email.
            </p>
            <ul className="mt-10 space-y-6">
              <li>
                <p className="mb-1 text-sm text-muted-foreground">Email</p>
                <a href={`mailto:${EMAIL}`} className="link-u break-all">
                  {EMAIL}
                </a>
              </li>
              <li>
                <p className="mb-1 text-sm text-muted-foreground">GitHub</p>
                <a href="https://github.com/adityapandey187" target="_blank" rel="noopener noreferrer" className="link-u">
                  github.com/adityapandey187 <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </li>
              <li>
                <p className="mb-1 text-sm text-muted-foreground">LinkedIn</p>
                <a
                  href="https://www.linkedin.com/in/aditya-pandey-0ba208427/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-u"
                >
                  Aditya Pandey <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </Reveal>

          <Reveal delay={0.1} className="md:col-span-8">
            <form onSubmit={handleSubmit} noValidate className="card-dark relative space-y-8 p-6 md:p-10">
              <div className="grid gap-8 sm:grid-cols-2">
                <div>
                  <label htmlFor="contact-name" className="text-sm text-muted-foreground">Full Name *</label>
                  <input
                    id="contact-name"
                    className={field}
                    value={formData.name}
                    onChange={set("name")}
                    placeholder="Your name"
                    autoComplete="name"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "err-name" : undefined}
                  />
                  <Err id="err-name" msg={errors.name} />
                </div>
                <div>
                  <label htmlFor="contact-email" className="text-sm text-muted-foreground">Email Address *</label>
                  <input
                    id="contact-email"
                    type="email"
                    className={field}
                    value={formData.email}
                    onChange={set("email")}
                    placeholder="you@example.com"
                    autoComplete="email"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "err-email" : undefined}
                  />
                  <Err id="err-email" msg={errors.email} />
                </div>
              </div>

              <div className="grid gap-8 sm:grid-cols-2">
                <div>
                  <label htmlFor="contact-type" className="text-sm text-muted-foreground">Project Type *</label>
                  <select
                    id="contact-type"
                    className={field}
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
                  <Err id="err-type" msg={errors.projectType} />
                </div>
                <div>
                  <label htmlFor="contact-budget" className="text-sm text-muted-foreground">Estimated Budget *</label>
                  <select
                    id="contact-budget"
                    className={field}
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
                  <Err id="err-budget" msg={errors.budget} />
                </div>
              </div>

              <div>
                <label htmlFor="contact-message" className="text-sm text-muted-foreground">Project Description *</label>
                <textarea
                  id="contact-message"
                  className={`${field} resize-y`}
                  rows={4}
                  value={formData.message}
                  onChange={set("message")}
                  placeholder="What do you want to build? A sentence or two is enough to start."
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? "err-message" : undefined}
                />
                <Err id="err-message" msg={errors.message} />
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

              <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
                <button type="submit" disabled={submitting} className="btn btn-solid disabled:opacity-60">
                  {submitting ? "Preparing your email..." : (
                    <>
                      Send Project Inquiry <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </>
                  )}
                </button>
                <p className="max-w-xs text-xs text-muted-foreground">
                  This opens your email app with the message filled in. It is only sent when you press send there.
                </p>
              </div>
              {status === "opened" && (
                <p role="status" className="text-sm text-foreground">
                  Your email app should have opened with your message filled in. Press send there to deliver it.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
