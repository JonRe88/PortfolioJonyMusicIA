import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { cn } from "@/lib/utils";

const CATEGORIES = ["Todos", "Mis Apps", "Web Apps", "Diseño"];

/** Archivos en `public/images/` — Vite los sirve como `/images/...`, nunca como `public/images/...`. */
function publicImage(filename: string) {
  const base = import.meta.env.BASE_URL;
  return `${base}images/${encodeURIComponent(filename)}`;
}

const PROJECTS = [
  {
    id: 1,
    title: 'ReparaYa',
    description: 'Aplicación móvil para servicios de reparación rápida y eficiente con geolocalización en tiempo real.',
    image: publicImage('ReparaYa.png'),
    category: 'Mobile Apps',
    tech: ['React Native', 'Expo', 'TypeScript'],
    url: 'https://reparaya--8qkapxnbi2.expo.app/'
  },
  {
    id: 2,
    title: 'Shotify',
    description: 'Juego interactivo de party game con preguntas dinámicas y mecánicas multijugador.',
    image: publicImage('SHOTIFY.png'),
    category: 'Web Apps',
    tech: ['React', 'Vite', 'Tailwind CSS'],
    url: 'https://verdad-o-shot-drinki-u20q.bolt.host/'
  },
  {
    id: 3,
    title: 'Dibuja y Juega',
    description: 'Plataforma creativa para dibujar y jugar en tiempo real. Similar a Pictionary con soporte multiplayer.',
    image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=800&q=80',
    category: 'Web Apps',
    tech: ['Next.js', 'Canvas API', 'WebSockets'],
    url: 'https://dibuja-y-juega.vercel.app/'
  },
  {
    id: 4,
    title: 'BioS3Lab',
    description: 'Sitio web institucional para laboratorio de biología con información y servicios.',
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80',
    category: 'Web Apps',
    tech: ['HTML', 'CSS', 'JavaScript'],
    url: 'https://jonre88.github.io/BioS3Lab/'
  },
  {
    id: 5,
    title: 'Solucontas',
    description: 'Identidad corporativa profesional para servicios contables y asesoramiento fiscal.',
    image: publicImage('LOGO SOLUCONTAS.jpg'),
    category: 'Diseño',
    tech: ['Branding', 'Logo Design', 'Color Theory'],
    url: '#'
  },
  {
    id: 6,
    title: 'Creativo',
    description: 'Diseño de marca moderna y minimalista con identidad visual única.',
    image: publicImage('Creativo.png'),
    category: 'Diseño',
    tech: ['Branding', 'Design System', 'Typography'],
    url: '#'
  },
  {
    id: 7,
    title: 'Press Pause',
    description: 'Aplicación que te ayuda a resolver conflictos de pareja de forma guiada y empática.',
    image: publicImage('cover.png'),
    category: 'Mis Apps',
    tech: ['React Native', 'Expo', 'TypeScript'],
    url: 'https://jonyrey-frontend--ag5xgezem5.expo.app/'
  },
  { 
    id: 8,
    title: 'RuletaShots',
    description: 'Aplicación para pasar una noche divetida con amigos todo con medida nada con exceso',
    image: publicImage('icon.png'),
    category: 'Mis Apps',
    tech: ['React Native', 'Expo', 'TypeScript'],
    url: 'https://ruletarusa.expo.app/'
  },    
];

export function Projects() {
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filteredProjects = PROJECTS.filter(p =>
    activeCategory === "Todos" ? true : p.category === activeCategory
  );

  // We re-initialize the carousel when the filtered list changes
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    skipSnaps: false,
    dragFree: true
  });

  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  // Re-init when projects change
  useEffect(() => {
    if (emblaApi) emblaApi.reInit();
  }, [filteredProjects, emblaApi]);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Decorative bg */}
      <div className="absolute top-40 right-0 w-96 h-96 bg-primary/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Proyectos Destacados" subtitle="Mi Portafolio" />

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {CATEGORIES.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300",
                activeCategory === category
                  ? "bg-primary text-white shadow-lg shadow-primary/25"
                  : "bg-card border border-white/5 text-muted-foreground hover:text-white hover:bg-card/80"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Carousel Area */}
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-4 touch-pan-y">
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="min-w-0 shrink-0 grow-0 basis-full md:basis-1/2 lg:basis-1/3 pl-4"
                  >
                    <div className="glass-panel rounded-2xl overflow-hidden h-full flex flex-col group hover:border-primary/30 transition-colors duration-300">
                      {/* Image container */}
                      <div className="relative h-56 overflow-hidden">
                        <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors z-10 duration-500" />
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                        />
                        <div className="absolute top-4 right-4 z-20">
                          <span className="px-3 py-1 text-xs font-semibold bg-black/60 backdrop-blur-md text-white rounded-full border border-white/10">
                            {project.category}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6 flex flex-col flex-grow">
                        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                        <p className="text-muted-foreground text-sm mb-6 flex-grow line-clamp-3">
                          {project.description}
                        </p>

                        <div className="mt-auto">
                          <div className="flex flex-wrap gap-2 mb-6">
                            {project.tech.map(tech => (
                              <span key={tech} className="text-xs px-2.5 py-1 bg-white/5 border border-white/10 rounded-md text-gray-300">
                                {tech}
                              </span>
                            ))}
                          </div>

                          <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex w-full items-center justify-center gap-2 px-4 py-3 bg-white/5 hover:bg-primary text-white text-sm font-medium rounded-xl transition-all duration-300"
                          >
                            Ver Proyecto
                            <ExternalLink size={16} />
                          </a>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>

          {/* Navigation Controls */}
          {filteredProjects.length > 0 && (
            <div className="flex items-center justify-center mt-10 gap-4">
              <button
                className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center glass-panel transition-all",
                  !prevBtnEnabled ? "opacity-50 cursor-not-allowed" : "hover:bg-primary/20 hover:text-primary"
                )}
                onClick={scrollPrev}
                disabled={!prevBtnEnabled}
                aria-label="Previous slide"
              >
                <ChevronLeft size={20} />
              </button>

              <div className="flex gap-2">
                {emblaApi?.scrollSnapList().map((_, index) => (
                  <button
                    key={index}
                    onClick={() => scrollTo(index)}
                    className={cn(
                      "w-2 h-2 rounded-full transition-all duration-300",
                      index === selectedIndex ? "w-6 bg-primary" : "bg-white/20 hover:bg-white/40"
                    )}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              <button
                className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center glass-panel transition-all",
                  !nextBtnEnabled ? "opacity-50 cursor-not-allowed" : "hover:bg-primary/20 hover:text-primary"
                )}
                onClick={scrollNext}
                disabled={!nextBtnEnabled}
                aria-label="Next slide"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
