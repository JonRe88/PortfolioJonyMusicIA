import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Music } from "@/components/Music";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { MarqueeBackground } from "@/components/MarqueeBackground";

function Preloader({ onDone }: { onDone: () => void }) {
  useEffect(() => {
    const timeoutId = window.setTimeout(onDone, 2200);
    return () => window.clearTimeout(timeoutId);
  }, [onDone]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
      role="status"
      aria-label="Cargando el portafolio de Jony Reyes"
      className="fixed inset-0 z-[999] flex items-end justify-between bg-neutral-950 px-8 pb-10 text-white md:px-16 md:pb-16"
    >
      <motion.div
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="text-5xl font-semibold leading-none tracking-tighter md:text-8xl"
      >
        JONY
        <br />
        <span className="font-serif font-normal italic text-violet-300">
          REYES
        </span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="font-mono text-xs uppercase leading-relaxed tracking-[0.2em] text-neutral-500 md:text-sm"
      >
        Portafolio
        <br />
        2026
      </motion.div>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.3, duration: 1.6, ease: [0.76, 0, 0.24, 1] }}
        style={{ originX: 0 }}
        className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-violet-400 via-blue-400 to-violet-400"
      />
    </motion.div>
  );
}

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 font-sans relative">
      <AnimatePresence>
        {isLoading && (
          <Preloader key="preloader" onDone={() => setIsLoading(false)} />
        )}
      </AnimatePresence>
      <MarqueeBackground />
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <About />
        <Skills />
        <Music />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
