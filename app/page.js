import Hero from "./components/content/Hero";
import About from "./components/content/About";
import Interests from "./components/content/Interests";
import Skills from "./components/Skills";
import Projects from "./components/content/Projects";
import Contact from "./components/content/Contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Interests />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
