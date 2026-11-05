import { ArrowUpRight, Clock3 } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { SpotlightCard } from "./ui/SpotlightCard";

function publicImage(filename: string) {
  return `${import.meta.env.BASE_URL}images/${encodeURIComponent(filename)}`;
}

const PROJECTS = [
  {
    title: "CHKDor",
    type: "Producto digital · Web",
    description:
      "Reloj checador conectado con WhatsApp para organizar horarios y consultar la asistencia del equipo.",
    image: undefined,
    url: "https://chkdor.web.app/",
    tone: "bg-[#101525]",
  },
  {
    title: "XIMNANZAS",
    type: "Producto digital · Web",
    description:
      "Experiencia digital para orientar decisiones de retiro, seguros e inversión con claridad.",
    image: publicImage("ximnanzas-preview.png"),
    url: "https://ximnanzas.com/",
    tone: "bg-[#dce7df]",
  },
  {
    title: "ReparaYa",
    type: "Producto digital · Mobile",
    description:
      "Una experiencia directa para conectar personas con servicios de reparación.",
    image: publicImage("ReparaYa.png"),
    url: "https://reparaya--8qkapxnbi2.expo.app/",
    tone: "bg-[#d4efdd]",
  },
  {
    title: "Shotify",
    type: "Juego · Web app",
    description:
      "Party game diseñado para que la conversación nunca se detenga.",
    image: publicImage("SHOTIFY.png"),
    url: "https://shotify.expo.app/",
    tone: "bg-[#f3d5b5]",
  },
  {
    title: "Press Pause",
    type: "Producto digital · Mobile",
    description: "Una pausa guiada para resolver conflictos con más empatía.",
    image: publicImage("cover.png"),
    url: "https://jonyrey-frontend--ag5xgezem5.expo.app/",
    tone: "bg-[#ded7f5]",
  },
  {
    title: "Solucontas",
    type: "Identidad · Branding",
    description:
      "Una identidad profesional construida para hacer simple lo complejo.",
    image: publicImage("LOGO SOLUCONTAS.jpg"),
    url: "#",
    tone: "bg-[#e8d8c3]",
  },
  {
    title: "Creativo",
    type: "Identidad · Dirección de arte",
    description: "Sistema visual minimalista con una voz propia.",
    image: publicImage("Creativo.png"),
    url: "#",
    tone: "bg-[#d9e6e6]",
  },
  {
    title: "RuletaShots",
    type: "Producto digital · Mobile",
    description: "Una noche entre amigos, convertida en una experiencia.",
    image: publicImage("icon.png"),
    url: "https://ruletarusa.expo.app/",
    tone: "bg-[#f1c9c1]",
  },
];

export function Projects() {
  return (
    <section
      id="projects"
      className="relative px-5 py-24 sm:px-8 md:py-32 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          title="Ideas hechas realidad"
          subtitle="01 / proyectos seleccionados"
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 md:gap-y-20">
          {PROJECTS.map((project, index) => (
            <article
              key={project.title}
              data-anime-reveal
              className={index % 3 === 0 ? "md:pt-12" : ""}
            >
              <a
                href={project.url}
                target={project.url === "#" ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="group block"
                aria-label={`${project.title}: ${project.description}`}
              >
                <SpotlightCard
                  className={`aspect-[1.35/1] overflow-hidden rounded-2xl border border-white/10 ${project.tone}`}
                >
                  {project.image ? (
                    <img
                      src={project.image}
                      alt=""
                      loading="lazy"
                      className="h-full w-full object-contain p-8 mix-blend-multiply transition-transform duration-700 group-hover:scale-[1.04] md:p-12"
                    />
                  ) : (
                    <div className="flex h-full flex-col justify-between bg-[radial-gradient(ellipse_at_80%_10%,rgba(99,102,241,0.28),transparent_45%),linear-gradient(135deg,#101525,#171d31)] p-7 text-white sm:p-10 md:p-12">
                      <div className="flex items-center gap-3">
                        <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06] text-indigo-200">
                          <Clock3 size={19} />
                        </span>
                        <span className="font-mono text-xs font-semibold tracking-[0.24em]">
                          CHKDOR
                        </span>
                      </div>
                      <div>
                        <p className="mb-3 font-mono text-[9px] uppercase tracking-[0.22em] text-indigo-200 sm:text-[10px]">
                          Reloj checador + WhatsApp
                        </p>
                        <p className="text-3xl font-medium leading-[0.98] tracking-tight sm:text-4xl md:text-5xl">
                          Tu equipo checa.
                          <br />
                          <span className="font-serif italic text-indigo-200">
                            Tu empresa avanza.
                          </span>
                        </p>
                        <p className="mt-4 max-w-xs text-xs leading-relaxed text-white/55 sm:text-sm">
                          Asistencia más clara y cerca para cada jornada.
                        </p>
                      </div>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-60" />
                  <div className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white/80 text-neutral-900 opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <ArrowUpRight size={18} />
                  </div>
                </SpotlightCard>

                <div className="mt-5 flex items-start justify-between gap-4 border-t border-white/10 pt-4">
                  <div>
                    <h3 className="text-2xl font-medium tracking-tight text-white transition-colors group-hover:text-violet-200">
                      {project.title}
                    </h3>
                    <p className="mt-2 max-w-sm text-sm leading-relaxed text-neutral-400">
                      {project.description}
                    </p>
                  </div>
                  <span className="shrink-0 pt-2 text-right font-mono text-[10px] uppercase leading-relaxed tracking-widest text-neutral-500">
                    {project.type}
                  </span>
                </div>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
