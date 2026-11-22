import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { Reveal } from "./Reveal";

const faqs = [
  {
    q: "What types of websites can you build?",
    a: "Business websites, personal portfolio websites and landing pages. If you need something close to these, such as a redesign of an existing site, tell me about it and we can see if it fits.",
  },
  {
    q: "How much does a website cost?",
    a: "My introductory estimates start from ₹1,500 for business websites and ₹1,000 for portfolio websites and landing pages. These are starting points. The final quotation depends on requirements, functionality, content and deployment costs, and I'll confirm it with you before work begins.",
  },
  {
    q: "How long does a project take?",
    a: "It depends on the scope and how ready your content is. I don't promise a fixed timeline up front. After I understand what you need, I'll give you an honest estimate.",
  },
  {
    q: "Can you redesign an existing website?",
    a: "Yes, Website Redesign is one of the project types in the inquiry form. Share the current site and what you'd like to improve.",
  },
  {
    q: "Do you provide revisions?",
    a: "Getting a design right usually takes feedback, so I'll agree how revisions work with you before starting. I haven't set a fixed revision policy, so it's discussed per project.",
  },
  {
    q: "Can I request a custom design?",
    a: "Yes. The aim is a design tailored to your content and goals rather than a generic template. Tell me what you have in mind, or what you like and dislike.",
  },
  {
    q: "How can I start a project?",
    a: "Use the inquiry form below, or email me. Describe what you want to build, pick a project type and a rough budget (\"Not Sure Yet\" is fine), and I'll reply by email.",
  },
];

export const Faq = () => {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" aria-labelledby="faq-heading" className="section-space hairline">
      <div className="wrap grid gap-12 md:grid-cols-12 md:gap-16">
        <Reveal className="md:col-span-4">
          <p className="eyebrow mb-5">FAQ</p>
          <h2 id="faq-heading" className="display-lg">
            Questions.
          </h2>
          <p className="mt-6 max-w-xs text-muted-foreground">
            Something not covered here? Ask in the inquiry form below.
          </p>
        </Reveal>

        <div className="md:col-span-8">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q} delay={i * 0.03}>
                <div className="border-t border-border last:border-b">
                  <h3>
                    <button
                      id={`faq-btn-${i}`}
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${i}`}
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="group flex w-full items-center justify-between gap-6 py-6 text-left"
                    >
                      <span className="font-display text-xl md:text-2xl">{f.q}</span>
                      <Plus
                        aria-hidden="true"
                        className={`h-5 w-5 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-45 text-brand" : ""}`}
                      />
                    </button>
                  </h3>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-panel-${i}`}
                        role="region"
                        aria-labelledby={`faq-btn-${i}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="max-w-2xl pb-7 text-muted-foreground">{f.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
