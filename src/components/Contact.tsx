import type { FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

export function Contact() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const subject = `Nuevo proyecto — ${formData.get("name")}`;
    const body = [
      `Nombre: ${formData.get("name")}`,
      `Email: ${formData.get("email")}`,
      "",
      String(formData.get("message") ?? ""),
    ].join("\n");

    window.location.href = `mailto:jreyesdeveloper@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden px-5 py-24 sm:px-8 md:py-32 lg:px-12"
    >
      <div className="pointer-events-none absolute -right-24 top-1/3 h-80 w-80 rounded-full bg-violet-500/10 blur-[120px]" />
      <div className="relative mx-auto max-w-7xl">
        <SectionHeading title="Hagamos algo memorable" subtitle="05 / contacto" />

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <p className="mb-5 font-mono text-xs uppercase tracking-[0.24em] text-violet-300">
              ¿Tienes una idea?
            </p>
            <h3 className="max-w-xl text-4xl font-medium leading-tight tracking-tight text-white md:text-5xl">
              Convirtámosla en una experiencia digital.
            </h3>
            <p className="mt-6 max-w-lg text-lg font-light leading-relaxed text-neutral-400">
              Estoy disponible para proyectos freelance y nuevas
              oportunidades. Cuéntame qué tienes en mente y lo pensamos juntos.
            </p>

            <div className="mt-10 space-y-6">
              <a
                href="mailto:jreyesdeveloper@gmail.com"
                className="group flex items-center gap-4"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-violet-300 transition-colors group-hover:border-violet-300/30">
                  <Mail size={19} />
                </span>
                <span>
                  <span className="block text-xs text-neutral-500">Email</span>
                  <span className="mt-1 block text-base text-neutral-200 transition-colors group-hover:text-white">
                    jreyesdeveloper@gmail.com
                  </span>
                </span>
              </a>

              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-blue-300">
                  <MapPin size={19} />
                </span>
                <span>
                  <span className="block text-xs text-neutral-500">Modalidad</span>
                  <span className="mt-1 block text-base text-neutral-200">
                    Disponible en remoto
                  </span>
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form
              onSubmit={handleSubmit}
              className="relative flex flex-col gap-6 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl sm:p-8"
            >
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-neutral-300"
                >
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 text-white outline-none transition placeholder:text-neutral-600 focus:border-violet-300/50 focus:ring-2 focus:ring-violet-300/10"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-neutral-300"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 text-white outline-none transition placeholder:text-neutral-600 focus:border-violet-300/50 focus:ring-2 focus:ring-violet-300/10"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-neutral-300"
                >
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full resize-none rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 text-white outline-none transition placeholder:text-neutral-600 focus:border-violet-300/50 focus:ring-2 focus:ring-violet-300/10"
                  placeholder="Cuéntame sobre tu proyecto..."
                />
              </div>

              <button
                type="submit"
                className="mt-1 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-5 py-4 font-medium text-neutral-950 transition-colors hover:bg-neutral-200 disabled:cursor-not-allowed disabled:opacity-60"
              >
                Abrir correo para enviar <Send size={16} />
              </button>
              <p className="text-center text-xs text-neutral-600">
                También puedes escribirme directamente por email.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
