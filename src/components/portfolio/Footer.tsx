import { Github, Linkedin, Instagram, Mail } from "lucide-react";

const socials = [
  { icon: Github, href: "https://github.com/adityapandey187", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/aditya-pandey-0ba208427/", label: "LinkedIn" },
  { icon: Instagram, href: "https://www.instagram.com/adityapandey0.7", label: "Instagram" },
  { icon: Mail, href: "mailto:adityapandey451807@gmail.com", label: "Email" },
];

const links = [
  { name: "Home", href: "#home" },
  { name: "Work", href: "#projects" },
  { name: "About", href: "#about" },
  { name: "Process", href: "#process" },
  { name: "Services", href: "#services" },
  { name: "Skills", href: "#skills" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#contact" },
];

export const Footer = () => (
  <footer className="border-t border-border">
    <div className="wrap py-14 md:py-20">
      <div className="grid gap-12 md:grid-cols-12">
        <div className="md:col-span-6">
          <a href="#home" className="font-display text-4xl font-bold tracking-tight md:text-6xl">
            Aditya Pandey<span className="text-brand">.</span>
          </a>
          <p className="mt-5 max-w-sm text-muted-foreground">
            Web developer building modern, responsive websites for individuals and small businesses. B.Tech CSE
            student.
          </p>
          <a href="#contact" className="btn btn-solid mt-8">
            Start a Project
          </a>
        </div>
        <nav aria-label="Footer" className="md:col-span-3">
          <p className="eyebrow mb-4">Navigate</p>
          <ul className="space-y-2.5">
            {links.map((l) => (
              <li key={l.name}>
                <a href={l.href} className="link-h text-foreground/85 hover:text-foreground">
                  {l.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="md:col-span-3">
          <p className="eyebrow mb-4">Elsewhere</p>
          <ul className="space-y-2.5">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="link-h inline-flex items-center gap-2 text-foreground/85 hover:text-foreground"
                >
                  <s.icon className="h-4 w-4" aria-hidden="true" />
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className="mt-16 border-t border-border pt-6 text-sm text-muted-foreground">
        © {new Date().getFullYear()} Aditya Pandey. Built with React.
      </p>
    </div>
  </footer>
);
