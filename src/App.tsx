import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Portfolio } from './components/Portfolio';
import { Startups } from './components/Startups';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Education } from './components/Education';   // ✅ NEW
import { Achievements } from './components/Achievements';
import { Testimonials } from './components/Testimonials';
import { Gallery } from './components/Gallery';
import { Blog } from './components/Blog';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingContact } from './components/FloatingContact';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <Startups />
        <Skills />
        <Experience />

        <Education />   {/* ✅ ADDED HERE IN PAGE FLOW */}

        <Achievements />
        <Testimonials />
        <Gallery />
        <Blog />
        <Contact />
      </main>
      <Footer />
      <FloatingContact />
    </div>
  );
}

export default App;
