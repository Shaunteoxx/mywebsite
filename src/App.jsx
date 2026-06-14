import Navbar from "./components/Navbar";
import ScrollProgress from "./components/ScrollProgress";
import CursorGlow from "./components/CursorGlow";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Wins from "./components/Wins";
import Projects from "./components/Projects";
import About from "./components/About";
import Photography from "./components/Photography";
import Contact from "./components/Contact";

export default function App() {
  return (
    <>
      <a
        href="#work"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:font-display focus:text-sand"
      >
        Skip to content
      </a>
      <CursorGlow />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Wins />
        <Projects />
        <About />
        <Photography />
      </main>
      <Contact />
    </>
  );
}
