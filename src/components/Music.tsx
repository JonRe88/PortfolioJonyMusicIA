import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, Music2 } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const SPOTIFY_URL =
  "https://open.spotify.com/artist/34X4pmiC1lKMz9dH1OEWy5";

function publicImage(filename: string) {
  return `${import.meta.env.BASE_URL}images/${filename}`;
}

export function Music() {
  return (
    <section
      id="music"
      className="relative isolate overflow-hidden border-y border-white/[0.06] bg-neutral-950 px-5 py-24 sm:px-8 md:py-32 lg:px-12"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_70%_50%,rgba(91,33,182,0.16),transparent_50%),radial-gradient(ellipse_at_20%_80%,rgba(29,78,216,0.1),transparent_45%)]"
      />

      <div className="mx-auto max-w-7xl">
        <SectionHeading
          title="Música en otra frecuencia"
          subtitle="04 / laboratorio sonoro"
        />

        <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            <p className="mb-5 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.22em] text-violet-300">
              <Music2 size={15} /> Proyecto musical
            </p>
            <h3 className="max-w-xl text-4xl font-medium leading-[1.02] tracking-tight text-white md:text-6xl">
              Donde el código encuentra{" "}
              <span className="font-serif italic text-neutral-500">el ritmo.</span>
            </h3>
            <p className="mt-6 max-w-lg text-lg font-light leading-relaxed text-neutral-400">
              También exploro la creatividad a través de la música. Un espacio
              para experimentar con sonidos, tecnología e inteligencia
              artificial.
            </p>
            <a
              href={SPOTIFY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-8 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/[0.04] px-5 py-3 text-sm font-medium text-white transition-all hover:border-violet-300/40 hover:bg-white/[0.08]"
            >
              Escuchar en Spotify
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </motion.div>

          <motion.article
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="group relative mx-auto w-full max-w-lg overflow-hidden rounded-3xl border border-white/10 bg-neutral-900/80 shadow-2xl shadow-violet-950/20 backdrop-blur-xl"
          >
            <a
              href={SPOTIFY_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Abrir la música de Jony Reyes en Spotify"
              className="relative block aspect-[16/10] overflow-hidden"
            >
              <img
                src={publicImage("music-album.png")}
                alt="Arte visual del proyecto musical de Jony Reyes"
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/10 to-neutral-950/10" />
              <div className="absolute left-5 top-5 rounded-full border border-white/15 bg-black/30 px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest text-white/80 backdrop-blur-md">
                Sonido en movimiento
              </div>
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-violet-200">
                    Música experimental
                  </p>
                  <h4 className="mt-2 text-2xl font-medium text-white">
                    Jony Reyes
                  </h4>
                </div>
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-neutral-950 transition-transform group-hover:scale-105">
                  <ExternalLink size={18} />
                </span>
              </div>
            </a>

            <div className="flex items-center justify-between gap-4 p-5 sm:p-6">
              <div className="min-w-0">
                <p className="truncate text-sm font-medium text-white">
                  Creatividad, música e IA
                </p>
                <p className="mt-1 text-xs text-neutral-500">
                  Escucha el proyecto en Spotify
                </p>
              </div>
              <div
                aria-hidden="true"
                className="flex h-8 shrink-0 items-center gap-1"
              >
                {[14, 23, 17, 29, 12, 25, 18, 30, 14, 22, 16, 27].map(
                  (height, index) => (
                    <motion.span
                      key={index}
                      animate={{ scaleY: [0.45, 1, 0.6] }}
                      transition={{
                        duration: 0.8 + (index % 4) * 0.2,
                        repeat: Infinity,
                        repeatType: "mirror",
                        delay: index * 0.04,
                        ease: "easeInOut",
                      }}
                      style={{ height }}
                      className="w-1 origin-center rounded-full bg-gradient-to-t from-blue-400 to-violet-300"
                    />
                  ),
                )}
              </div>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
