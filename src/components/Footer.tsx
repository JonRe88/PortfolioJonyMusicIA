import { Github, Linkedin, Twitter, Code2 } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-foreground/15 py-10 bg-background relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        <div className="flex items-center gap-2">
          <Code2 className="text-primary" size={20} />
          <span className="font-display font-bold text-xl tracking-[-0.06em]">
            Jony.Reyes<span className="text-primary">*</span>
          </span>
        </div>

        <p className="text-sm text-muted-foreground text-center md:text-left">
          &copy; {new Date().getFullYear()} Jony Reyes. Todos los derechos reservados.
        </p>

        <div className="flex items-center gap-4">
          {[
            { icon: Github, href: "https://github.com/jonre88" },
            { icon: Linkedin, href: "https://linkedin.com" },
            { icon: Twitter, href: "https://twitter.com" },
          ].map((social, i) => (
            <a
              key={i}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground hover:scale-110 transition-all"
            >
              <social.icon size={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
