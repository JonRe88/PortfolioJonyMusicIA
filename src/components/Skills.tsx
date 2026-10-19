import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

const SKILLS = [
  { name: "React", level: "Avanzado", letter: "R", color: "#61DAFB" },
  { name: "TypeScript", level: "Avanzado", letter: "T", color: "#3178C6" },
  { name: "Next.js", level: "Intermedio", letter: "N", color: "#ffffff" },
  { name: "React Native", level: "Avanzado", letter: "RN", color: "#61DAFB" },
  { name: "Node.js", level: "Intermedio", letter: "N", color: "#83CD29" },
  { name: "Tailwind CSS", level: "Avanzado", letter: "TW", color: "#38BDF8" },
  { name: "Figma", level: "Intermedio", letter: "F", color: "#F24E1E" },
  { name: "Git / GitHub", level: "Avanzado", letter: "G", color: "#F05032" },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.07 },
  },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 280, damping: 24 },
  },
};

export function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden border-y border-white/[0.06] bg-white/[0.02] px-5 py-24 sm:px-8 md:py-32 lg:px-12"
    >
      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          title="Herramientas para crear"
          subtitle="03 / habilidades"
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4"
        >
          {SKILLS.map((skill) => (
            <motion.div
              key={skill.name}
              variants={item}
              className="group relative min-h-40 overflow-hidden rounded-2xl border border-white/[0.08] bg-neutral-900/70 p-5 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-neutral-900 sm:p-6"
            >
              <div
                className="mb-8 flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-sm font-semibold transition-transform duration-300 group-hover:scale-105"
                style={{ color: skill.color }}
                aria-hidden="true"
              >
                {skill.letter}
              </div>
              <h3 className="text-sm font-medium text-white sm:text-base">
                {skill.name}
              </h3>
              <p className="mt-1 text-xs text-neutral-500">{skill.level}</p>
              <div
                className="absolute -right-8 -top-8 h-24 w-24 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-20"
                style={{ backgroundColor: skill.color }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
