import Hero from "./components/content/Hero";
import About from "./components/content/About";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Skills />
    </main>
  );
}
