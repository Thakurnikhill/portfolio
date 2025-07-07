import { ThemeProvider } from "./context/ThemeContext";
import useTouchScreen from "./hooks/useTouchScreen";
import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
// import AnimatedBackground from "./components/AnimatedBackground";

export default function App() {
  return (
    <ThemeProvider>
      {/* <AnimatedBackground /> */}
      {!useTouchScreen() && <CustomCursor />}

      <div className="relative">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}