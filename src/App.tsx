import { About } from "./components/About";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Languages } from "./components/Languages";
import { Proficiency } from "./components/Proficiency";
import { Projects } from "./components/Projects";
import { Ventures } from "./components/Ventures";

export default function App() {
  return (
    <div id="top" className="relative min-h-dvh bg-ink text-paper">
      <a
        href="#about"
        className="absolute left-4 top-0 z-50 -translate-y-full bg-paper px-3 py-2 text-sm text-ink focus:translate-y-4"
      >
        Skip to content
      </a>
      <Header />
      <main>
        <Hero />
        <About />
        <Ventures />
        <Projects />
        <Proficiency />
        <Languages />
        <Footer />
      </main>
    </div>
  );
}
