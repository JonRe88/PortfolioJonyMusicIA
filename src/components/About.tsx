import { motion } from "framer-motion";
import { Monitor, Smartphone, Terminal } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Sobre Mí" subtitle="Conóceme" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image/Visual side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="aspect-square max-w-md mx-auto relative z-10 rounded-3xl overflow-hidden glass-panel p-2">
              <img
                src={`${import.meta.env.BASE_URL}images/profile.png`}
                alt="Jony Reyes"
                className="w-full h-full object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent pointer-events-none" />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-1/2 -translate-y-1/2 -left-10 w-32 h-32 bg-primary/30 blur-3xl rounded-full -z-10" />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-cyan-500/20 blur-3xl rounded-full -z-10" />
            
            <motion.div 
              animate={{ y: [0, -10, 0] }} 
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -right-4 top-1/4 glass-panel p-4 rounded-2xl flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                <Terminal size={20} />
              </div>
              <div>
                <p className="font-bold text-sm">Full-Stack</p>
                <p className="text-xs text-muted-foreground">Developer</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Text/Content side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl font-bold mb-4">Transformando ideas en código.</h3>
            <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
              Soy un desarrollador apasionado por crear experiencias digitales excepcionales. 
              Mi enfoque se centra en escribir código limpio, eficiente y escalable, 
              siempre manteniendo al usuario en el centro de la experiencia.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="glass-panel p-6 rounded-2xl hover:border-primary/50 transition-colors duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <Monitor size={24} />
                </div>
                <h4 className="text-lg font-bold mb-2">Desarrollo Web</h4>
                <p className="text-sm text-muted-foreground">
                  Especializado en React, Next.js y ecosistemas modernos para crear web apps rápidas y accesibles.
                </p>
              </div>

              <div className="glass-panel p-6 rounded-2xl hover:border-cyan-500/50 transition-colors duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-white transition-all duration-300">
                  <Smartphone size={24} />
                </div>
                <h4 className="text-lg font-bold mb-2">Desarrollo Móvil</h4>
                <p className="text-sm text-muted-foreground">
                  Experiencia creando aplicaciones nativas cross-platform fluidas usando React Native y Expo.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
