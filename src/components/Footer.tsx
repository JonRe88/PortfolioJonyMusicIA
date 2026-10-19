import { ArrowUpRight, Github, Linkedin, Music2 } from "lucide-react";

const SOCIAL_LINKS = [
  { label: "GitHub", href: "https://github.com/jonre88", icon: Github },
  { label: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
  {
    label: "Spotify",
    href: "https://open.spotify.com/artist/34X4pmiC1lKMz9dH1OEWy5",
    icon: Music2,
  },
];

export function Footer() {
  return (
    <footer className="relative z-10 overflow-hidden border-t border-white/[0.08] bg-neutral-950 px-5 py-8 sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
        <a
          href="#home"
          className="flex items-center gap-2 text-white transition-colors hover:text-violet-200"
        >
          <span className="font-display text-xl tracking-tight">Jony.Reyes</span>
          <span className="text-violet-300">*</span>
        </a>

        <p className="text-center text-xs text-neutral-500 md:text-left">
          © {new Date().getFullYear()} Jony Reyes. Todos los derechos reservados.
        </p>

        <nav aria-label="Redes sociales" className="flex items-center gap-3">
          {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-neutral-400 transition-all hover:border-violet-300/40 hover:bg-white/[0.04] hover:text-white"
            >
              <Icon size={17} />
            </a>
          ))}
          <a
            href="#home"
            aria-label="Volver al inicio"
            className="ml-2 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-neutral-500 transition-colors hover:text-white"
          >
            Inicio <ArrowUpRight size={13} />
          </a>
        </nav>
      </div>
    </footer>
  );
}
