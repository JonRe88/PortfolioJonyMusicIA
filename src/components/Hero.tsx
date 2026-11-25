import Elias from "@/components/ui/elias-author-hero";
import type { EliasBook } from "@/components/ui/elias-author-hero";

function publicImage(filename: string) {
  return `${import.meta.env.BASE_URL}images/${encodeURIComponent(filename)}`;
}

const BOOKS: EliasBook[] = [
  {
    label: "Proyecto destacado",
    title: "Ximnanzas",
    coverLines: ["Una", "vida", "con rumbo"],
    topics: ["Producto", "Fintech"],
    art: "sunrise",
    colors: { cover: "#dce7df", type: "#17201b", spine: "#91a99b" },
    chapter: "Capítulo uno",
    chapterTitle: "Decidir con claridad",
    text: "Una experiencia digital que transforma decisiones complejas de retiro, seguros e inversión en pasos claros y humanos.",
  },
  {
    label: "Proyecto móvil",
    title: "ReparaYa",
    coverLines: ["Ayuda", "a", "tiempo"],
    topics: ["Servicios", "Mobile"],
    art: "path",
    colors: { cover: "#d4efdd", type: "#183026", spine: "#7ba98b" },
    chapter: "Capítulo dos",
    chapterTitle: "Soluciones cercanas",
    text: "Diseñé una conexión directa y confiable entre personas que necesitan ayuda y profesionales disponibles.",
  },
  {
    label: "Experiencia creativa",
    title: "Shotify",
    coverLines: ["Que", "no pare", "la noche"],
    topics: ["Juego", "Social"],
    art: "lamp",
    colors: { cover: "#f3d5b5", type: "#2d2118", spine: "#c29a72" },
    chapter: "Capítulo tres",
    chapterTitle: "Romper el hielo",
    text: "Un party game creado para convertir cada reunión en una conversación memorable.",
  },
];

export function Hero() {
  return (
    <Elias
      brand={{ name: "Jony Reyes", href: "#home" }}
      navLinks={{
        left: [
          { label: "Inicio", href: "#home", active: true },
          { label: "Sobre mí", href: "#about" },
        ],
        right: [
          { label: "Proyectos", href: "#projects" },
          { label: "Música", href: "#music" },
        ],
      }}
      navCta={{ label: "Contacto", href: "#contact" }}
      navStatus={{ label: "Disponible", detail: "Nuevos proyectos" }}
      name={{ first: "Jony", last: "Reyes" }}
      intro={{
        roles: ["Diseño", "Tecnología", "Música"],
        headline: ["Ideas hechas", "para crear", "movimiento."],
        description:
          "Diseño y desarrollo experiencias digitales, marcas y productos memorables.",
      }}
      portrait={{
        src: publicImage("profile_sin_fondo.png"),
        width: 800,
        height: 1000,
        alt: "Retrato de Jony Reyes",
      }}
      books={BOOKS}
      bookCard={{
        href: "#projects",
        open: "Abrir",
        close: "Cerrar y mostrar el siguiente proyecto",
        folio: "1",
      }}
      letter={{
        eyebrow: "Una nota para mañana",
        greeting: "Querido mañana,",
        stamp: "Sellar",
        postmark: "Mañana",
        seal: "JR",
        sealing: "Sellado para mañana",
        messages: [
          "Crearé una experiencia que haga la tecnología sentir más humana.",
          "Escucharé ideas nuevas antes de decidir cuál vale la pena.",
          "Haré una pausa para convertir la curiosidad en algo tangible.",
          "Buscaré el detalle pequeño que transforme un buen trabajo en uno memorable.",
        ],
        counter: "Nota",
      }}
      socialLinks={[
        { label: "LinkedIn", href: "https://www.linkedin.com" },
        { label: "Instagram", href: "https://www.instagram.com" },
      ]}
      className="elias-portfolio"
    />
  );
}

