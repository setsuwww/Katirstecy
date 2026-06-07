import Hero from "./components/content/Hero";
import About from "./components/content/About";
import Skills from "./components/Skills";
import Projects from "./components/content/Projects";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Skills />
      <Projects />
    </main>
  );
}
