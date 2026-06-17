import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { GlowCard } from 'glow-card/react'

const SKILLS = [
  { name: "React",        level: "Avanzado",   letter: "R",  color: "#61DAFB", glowColor: "blue"   as const },
  { name: "TypeScript",   level: "Avanzado",   letter: "T",  color: "#3178C6", glowColor: "blue"   as const },
  { name: "Next.js",      level: "Intermedio", letter: "N",  color: "#ffffff", glowColor: "blue"   as const },
  { name: "React Native", level: "Avanzado",   letter: "RN", color: "#61DAFB", glowColor: "blue"   as const },
  { name: "Node.js",      level: "Intermedio", letter: "No", color: "#339933", glowColor: "green"  as const },
  { name: "TailwindCSS",  level: "Avanzado",   letter: "TW", color: "#38B2AC", glowColor: "blue"   as const },
  { name: "Figma",        level: "Intermedio", letter: "Fi", color: "#F24E1E", glowColor: "orange" as const },
  { name: "Git/GitHub",   level: "Avanzado",   letter: "G",  color: "#F05032", glowColor: "red"    as const },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
};

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-card/30 relative border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Mis Habilidades" subtitle="Tech Stack" />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
        >
          {SKILLS.map((skill) => (
            <motion.div key={skill.name} variants={item}>
              <GlowCard
                glowColor={skill.glowColor}
                customSize
                className="w-full hover:-translate-y-2 transition-transform duration-300"
              >
                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-xl font-bold group-hover:scale-110 transition-transform duration-300"
                  style={{
                    background:
                      skill.color === "#ffffff"
                        ? "rgba(255,255,255,0.1)"
                        : `${skill.color}18`,
                    color: skill.color,
                  }}
                >
                  {skill.letter}
                </div>

                {/* Text */}
                <div className="flex flex-col items-center gap-1">
                  <h4 className="font-bold text-foreground text-sm">{skill.name}</h4>
                  <p className="text-xs text-muted-foreground">{skill.level}</p>
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

