import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

const SKILLS = [
  { name: "React", level: "Avanzado", color: "text-[#61DAFB]", bg: "bg-[#61DAFB]/10", border: "hover:border-[#61DAFB]/50" },
  { name: "TypeScript", level: "Avanzado", color: "text-[#3178C6]", bg: "bg-[#3178C6]/10", border: "hover:border-[#3178C6]/50" },
  { name: "Next.js", level: "Intermedio", color: "text-white", bg: "bg-white/10", border: "hover:border-white/50" },
  { name: "React Native", level: "Avanzado", color: "text-[#61DAFB]", bg: "bg-[#61DAFB]/10", border: "hover:border-[#61DAFB]/50" },
  { name: "Node.js", level: "Intermedio", color: "text-[#339933]", bg: "bg-[#339933]/10", border: "hover:border-[#339933]/50" },
  { name: "TailwindCSS", level: "Avanzado", color: "text-[#38B2AC]", bg: "bg-[#38B2AC]/10", border: "hover:border-[#38B2AC]/50" },
  { name: "Figma", level: "Intermedio", color: "text-[#F24E1E]", bg: "bg-[#F24E1E]/10", border: "hover:border-[#F24E1E]/50" },
  { name: "Git/GitHub", level: "Avanzado", color: "text-[#F05032]", bg: "bg-[#F05032]/10", border: "hover:border-[#F05032]/50" },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
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
            <motion.div
              key={skill.name}
              variants={item}
              className={`glass-panel p-6 rounded-2xl flex flex-col items-center justify-center text-center transition-all duration-300 group cursor-default ${skill.border} hover:-translate-y-2`}
            >
              <div className={`w-16 h-16 rounded-2xl ${skill.bg} ${skill.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <span className="font-display font-bold text-2xl">{skill.name.charAt(0)}</span>
              </div>
              <h4 className="font-bold text-foreground">{skill.name}</h4>
              <p className="text-xs text-muted-foreground mt-1">{skill.level}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
