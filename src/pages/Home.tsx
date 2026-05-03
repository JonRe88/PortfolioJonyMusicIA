import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Music } from "@/components/Music";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { MarqueeBackground } from "@/components/MarqueeBackground";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 font-sans relative">
      <MarqueeBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Music />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
