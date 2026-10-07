import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

function publicImage(filename: string) { return `${import.meta.env.BASE_URL}images/${encodeURIComponent(filename)}`; }

const PROJECTS = [
  { title: "XIMNANZAS", type: "Producto digital · Web", description: "Experiencia digital para orientar decisiones de retiro, seguros e inversión con claridad.", image: publicImage("ximnanzas-preview.png"), url: "https://ximnanzas.com/", tone: "bg-[#dce7df]" },
  { title: "ReparaYa", type: "Producto digital · Mobile", description: "Una experiencia directa para conectar personas con servicios de reparación.", image: publicImage("ReparaYa.png"), url: "https://reparaya--8qkapxnbi2.expo.app/", tone: "bg-[#d4efdd]" },
  { title: "Shotify", type: "Juego · Web app", description: "Party game diseñado para que la conversación nunca se detenga.", image: publicImage("SHOTIFY.png"), url: "https://shotify.expo.app/", tone: "bg-[#f3d5b5]" },
  { title: "Press Pause", type: "Producto digital · Mobile", description: "Una pausa guiada para resolver conflictos con más empatía.", image: publicImage("cover.png"), url: "https://jonyrey-frontend--ag5xgezem5.expo.app/", tone: "bg-[#ded7f5]" },
  { title: "Solucontas", type: "Identidad · Branding", description: "Una identidad profesional construida para hacer simple lo complejo.", image: publicImage("LOGO SOLUCONTAS.jpg"), url: "#", tone: "bg-[#e8d8c3]" },
  { title: "Creativo", type: "Identidad · Dirección de arte", description: "Sistema visual minimalista con una voz propia.", image: publicImage("Creativo.png"), url: "#", tone: "bg-[#d9e6e6]" },
  { title: "RuletaShots", type: "Producto digital · Mobile", description: "Una noche entre amigos, convertida en una experiencia.", image: publicImage("icon.png"), url: "https://ruletarusa.expo.app/", tone: "bg-[#f1c9c1]" },
];

export function Projects() {
  return (
    <section id="projects" className="relative px-5 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <SectionHeading title="Trabajo seleccionado" subtitle="01 / proyectos" />
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2">
          {PROJECTS.map((project, index) => (
            <motion.article key={project.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ delay: index * 0.06 }} className={index % 3 === 0 ? "md:pt-12" : ""}>
              <a href={project.url} target={project.url === "#" ? undefined : "_blank"} rel="noopener noreferrer" className="group block">
                <div className={`relative aspect-[1.35/1] overflow-hidden ${project.tone}`}>
                  <img src={project.image} alt={project.title} className="h-full w-full object-contain p-8 mix-blend-multiply transition-transform duration-700 group-hover:scale-105 md:p-12" />
                  <div className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-foreground text-background opacity-0 transition-all duration-300 group-hover:opacity-100"><ArrowUpRight size={18} /></div>
                </div>
                <div className="mt-4 flex items-start justify-between gap-4 border-t border-foreground/15 pt-3">
                  <div><h3 className="font-display text-2xl font-semibold tracking-[-0.05em]">{project.title}</h3><p className="mt-1 max-w-sm text-sm text-muted-foreground">{project.description}</p></div>
                  <span className="shrink-0 pt-1 text-right font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{project.type}</span>
                </div>
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
