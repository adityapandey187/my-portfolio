import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Work", href: "#projects" },
  { name: "About", href: "#about" },
  { name: "Process", href: "#process" },
  { name: "Services", href: "#services" },
  { name: "Skills", href: "#skills" },
  { name: "FAQ", href: "#faq" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    window.history.pushState(null, "", href);
    window.setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }, 120);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || isOpen ? "bg-background/85 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <nav aria-label="Main" className="wrap flex h-16 items-center justify-between md:h-20">
        <a
          href="#home"
          onClick={(e) => go(e, "#home")}
          className="font-display text-lg font-bold tracking-tight"
          aria-label="Aditya Pandey, back to top"
        >
          Aditya Pandey<span className="text-brand">.</span>
        </a>

        <ul className="hidden items-center gap-9 md:flex">
          {navLinks.map((l) => (
            <li key={l.name}>
              <a href={l.href} onClick={(e) => go(e, l.href)} className="link-h text-[0.95rem] text-foreground/80 hover:text-foreground">
                {l.name}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a href="#contact" onClick={(e) => go(e, "#contact")} className="btn btn-solid hidden !py-2.5 md:inline-flex">
            Start a Project
          </a>
          <button
            className="-mr-2 p-2 md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35 }}
            className="overflow-hidden md:hidden"
          >
            <ul className="wrap pb-8 pt-2">
              {[{ name: "Home", href: "#home" }, ...navLinks, { name: "Contact", href: "#contact" }].map((l) => (
                <li key={l.name} className="border-t border-border">
                  <a
                    href={l.href}
                    onClick={(e) => go(e, l.href)}
                    className="block py-4 font-display text-2xl font-bold tracking-tight"
                  >
                    {l.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
