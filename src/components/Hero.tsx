import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();

  const yText = useTransform(scrollY, [0, 500], [0, 200]);
  const yBg = useTransform(scrollY, [0, 500], [0, 100]);
  const opacityText = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-neutral-950 px-6 pb-24 pt-24 text-white md:py-28"
    >
      <motion.div
        style={{ y: yBg }}
        className="pointer-events-none absolute inset-0 z-0"
        aria-hidden="true"
      >
        <div className="hero-grain absolute inset-0 opacity-[0.05] mix-blend-overlay" />
        <div className="absolute left-[20%] top-[-20%] h-[60vw] w-[60vw] animate-pulse rounded-full bg-violet-900/20 blur-[120px] duration-[8000ms] mix-blend-screen" />
        <div className="absolute bottom-[-20%] right-[20%] h-[50vw] w-[50vw] animate-pulse rounded-full bg-blue-900/20 blur-[120px] duration-[10000ms] mix-blend-screen" />
      </motion.div>

      <div
        className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)]"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center overflow-hidden"
        aria-hidden="true"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute h-[600px] w-[600px] rounded-full border border-dashed border-white/10 opacity-50 md:h-[800px] md:w-[800px]"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          className="absolute h-[450px] w-[450px] rounded-full border border-white/10 opacity-40 md:h-[600px] md:w-[600px]"
        >
          <div className="absolute left-0 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)]" />
        </motion.div>
        <motion.div
          animate={{ rotate: 180 }}
          transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
          className="absolute h-[800px] w-[800px] rounded-full border border-dotted border-white/5 opacity-50 md:h-[1100px] md:w-[1100px]"
        />
      </div>

      <motion.div
        style={{ y: yText, opacity: opacityText }}
        className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center text-center"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-8 md:mb-10"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-mono uppercase tracking-widest text-neutral-400 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </span>
            Disponible para nuevos proyectos
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 text-[clamp(3rem,9vw,10rem)] font-medium leading-[0.85] tracking-tighter text-white mix-blend-difference md:mb-10"
        >
          Ideas <br />
          <span className="font-serif italic text-neutral-500">en movimiento.</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto flex max-w-4xl flex-col items-center gap-5 text-base font-light text-neutral-400 md:flex-row md:gap-16 md:text-lg"
        >
          <p className="flex-1 leading-relaxed md:text-right">
            Diseño y desarrollo experiencias digitales,
            <br className="hidden md:block" /> marcas y productos memorables.
          </p>
          <div className="hidden h-16 w-px bg-white/10 md:block" />
          <p className="flex-1 leading-relaxed md:text-left">
            Creatividad, tecnología y música
            <br className="hidden md:block" /> en constante exploración.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 flex flex-col items-center gap-4 sm:flex-row"
        >
          <a
            href="#projects"
            className="flex items-center gap-2 rounded-full bg-white px-6 py-4 font-medium text-neutral-950 transition-colors hover:bg-neutral-200"
          >
            Ver proyectos <ArrowUpRight size={18} />
          </a>
          <a
            href="#contact"
            className="flex items-center gap-2 text-sm font-mono uppercase tracking-widest text-neutral-400 transition-colors hover:text-white"
          >
            Hablemos <ArrowUpRight size={16} />
          </a>
        </motion.div>
      </motion.div>

      <motion.a
        href="#projects"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-5 z-10 flex flex-col items-center gap-3 md:bottom-8"
        aria-label="Desplazarse a proyectos"
      >
        <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-600">
          Explorar
        </span>
        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-neutral-400 transition-colors hover:border-white/30 hover:text-white">
          <ArrowDown size={16} />
        </div>
      </motion.a>
    </section>
  );
}
