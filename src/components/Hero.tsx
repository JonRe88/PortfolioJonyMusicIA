import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] flex items-end pb-16 pt-32 overflow-hidden bg-grid-pattern">
      <div className="absolute right-[8%] top-[22%] w-32 h-32 rounded-full bg-primary mix-blend-multiply opacity-90" />
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10 w-full">
        <div className="flex flex-col items-start max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-10 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground"
          >
            <span className="h-2 w-2 rounded-full bg-primary" />
            <span>Diseñador de productos digitales · México</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[clamp(4.4rem,13vw,11rem)] leading-[0.82] font-semibold tracking-[-0.09em] mb-10"
          >
            Ideas <br className="hidden md:block" />
            <span className="text-primary">en movimiento.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl leading-relaxed"
          >
            Desarrollo experiencias digitales, marcas y productos que encuentran el punto exacto entre lo útil y lo memorable.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-5"
          >
            <a
              href="#projects"
              className="px-6 py-4 rounded-full font-semibold bg-foreground text-background hover:bg-primary transition-all duration-300 flex items-center gap-2"
            >
              Ver proyectos <ArrowUpRight size={18} />
            </a>
            
            <a href="#projects" className="flex items-center gap-2 text-sm font-mono uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"><ArrowDown size={18} /> Explorar trabajo</a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
