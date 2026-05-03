import { motion } from "framer-motion";
import { Play, Music as MusicIcon, ExternalLink } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

export function Music() {
  return (
    <section
      id="music"
      className="py-24 bg-card/30 relative border-y border-white/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Mi Música" subtitle="Otras Pasiones" />

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-panel p-6 sm:p-8 rounded-3xl relative overflow-hidden"
          >
            {/* Ambient Background matching album art */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-primary/10 pointer-events-none" />

            <div className="relative z-10 flex flex-col sm:flex-row gap-8 items-center sm:items-stretch">
              {/* Album Art */}
              <div className="w-48 h-48 sm:w-56 sm:h-56 shrink-0 rounded-2xl overflow-hidden shadow-2xl relative group">
                <img
                  src={`${import.meta.env.BASE_URL}images/music-album.png`}
                  alt="Jony Reyes Album Art"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white pl-1 transform scale-75 group-hover:scale-100 transition-transform duration-300">
                    <Play size={28} />
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="flex flex-col justify-center text-center sm:text-left">
                <div className="inline-flex items-center justify-center sm:justify-start gap-2 text-primary font-medium text-sm mb-2">
                  <MusicIcon size={16} />
                  <span>Artista Verificado</span>
                </div>
                <h3 className="text-3xl sm:text-4xl font-bold mb-3 font-display">
                  Jony Reyes
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Cuando no estoy escribiendo código, exploro la frontera entre
                  la tecnología y el arte creando música impulsada por
                  Inteligencia Artificial.
                </p>

                <div className="mt-auto flex flex-col gap-3">
                  <a
                    href="https://open.spotify.com/embed/artist/34X4pmiC1lKMz9dH1OEWy5?utm_source=generator&theme=0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-6 py-3 bg-[#1DB954] hover:bg-[#1ed760] text-black font-bold rounded-full transition-colors duration-300 shadow-lg shadow-[#1DB954]/25"
                  >
                    Escuchar en Spotify
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Spotify Embed Player */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6"
          >
            <iframe
              data-testid="embed-iframe"
              style={{ borderRadius: "12px" }}
              src="https://open.spotify.com/embed/artist/34X4pmiC1lKMz9dH1OEWy5?utm_source=generator&theme=0"
              width="100%"
              height="152"
              frameBorder={0}
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
