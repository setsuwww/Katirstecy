import dynamic from "next/dynamic";
import Hero from "./components/Hero/Hero";

const About = dynamic(() => import("./components/About/About"), {
  loading: () => <div className="h-screen bg-[#F2F2EB]" />,
});
const Skills = dynamic(() => import("./components/Skills/Skills"), {
  loading: () => <div className="h-96 bg-[#F2F2EB]" />,
});
const Projects = dynamic(() => import("./components/Projects/Projects"), {
  loading: () => <div className="h-screen bg-[#F2F2EB]" />,
});
const Contact = dynamic(() => import("./components/Contact/Contact"), {
  loading: () => <div className="h-96 bg-[#F2F2EB]" />,
});

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
