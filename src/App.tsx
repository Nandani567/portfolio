import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div
      className="
        min-h-screen text-white
        bg-gradient-to-br 
        from-[#020617] via-[#0f172a] to-black
      "
    >
      <Navbar />

      <main className="space-y-32 pt-24 px-6 md:px-16">

        <section id="home">
          <Hero />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="contact">
          <Contact />
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default App;