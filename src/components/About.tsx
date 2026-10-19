import { motion } from "framer-motion";
import { ArrowUpRight, Code2, Layers3, Music2 } from "lucide-react";

const FOCUS_AREAS = [
  {
    icon: Layers3,
    title: "Diseño de producto",
    description: "Interfaces claras, pensadas desde las personas.",
  },
  {
    icon: Code2,
    title: "Desarrollo web y móvil",
    description: "Ideas que toman forma y funcionan en el mundo real.",
  },
  {
    icon: Music2,
    title: "Exploración creativa",
    description: "Un cruce constante entre tecnología, música e IA.",
  },
];

export function About() {
  const profileImage = `${import.meta.env.BASE_URL}images/profile.png`;

  return (
    <section id="about" className="relative overflow-hidden px-5 py-24 sm:px-8 md:py-32 lg:px-12">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"
      />
      <div className="relative mx-auto max-w-7xl">
        <div className="mb-14 flex items-center gap-5 md:mb-20">
          <span className="font-serif text-lg italic text-white">02</span>
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-neutral-500">
            Sobre mí
          </span>
          <span className="h-px w-24 bg-gradient-to-r from-white/30 to-transparent" />
        </div>

        <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
          <div className="relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="mb-8 text-5xl font-medium leading-[0.95] tracking-tight text-white sm:text-6xl md:text-8xl"
            >
              Tecnología con{" "}
              <span className="font-serif italic text-neutral-500">intención.</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.7 }}
              className="max-w-2xl space-y-5 text-lg font-light leading-relaxed text-neutral-400"
            >
              <p>
                Soy Jony Reyes, diseñador y desarrollador de productos
                digitales. Me gusta convertir ideas complejas en experiencias
                simples, útiles y memorables.
              </p>
              <p>
                Trabajo entre diseño, código y nuevas herramientas creativas,
                cuidando tanto los detalles visuales como la forma en que cada
                producto se siente al usarlo.
              </p>
            </motion.div>

            <div className="mt-12 grid gap-4 border-t border-white/10 pt-8 sm:grid-cols-3">
              {FOCUS_AREAS.map(({ icon: Icon, title, description }, index) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                  className="border-l border-white/10 pl-4"
                >
                  <Icon size={18} className="mb-4 text-violet-300" />
                  <h3 className="mb-2 text-sm font-medium text-white">{title}</h3>
                  <p className="text-sm leading-relaxed text-neutral-500">
                    {description}
                  </p>
                </motion.div>
              ))}
            </div>

            <a
              href="#contact"
              className="mt-10 inline-flex items-center gap-2 text-sm font-mono uppercase tracking-widest text-neutral-300 transition-colors hover:text-white"
            >
              Conoce mi trabajo <ArrowUpRight size={16} />
            </a>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative mx-auto w-full max-w-md lg:ml-auto"
          >
            <div className="absolute -inset-4 rounded-[2rem] border border-white/10" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] border border-white/10 bg-neutral-900">
              <img
                src={profileImage}
                alt="Jony Reyes"
                className="h-full w-full object-cover object-center grayscale transition duration-700 hover:scale-[1.03] hover:grayscale-0"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="text-xs font-mono uppercase tracking-[0.25em] text-neutral-400">
                  Diseñador · Desarrollador
                </p>
                <p className="mt-2 text-2xl font-medium text-white">Jony Reyes</p>
              </div>
            </div>
            <div className="absolute -bottom-5 -right-5 -z-10 h-32 w-32 rounded-full bg-violet-500/20 blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
