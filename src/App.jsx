import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Problem from "./components/Problem";
import Principles from "./components/Principles";
import HowItWorks from "./components/HowItWorks";
import Competitions from "./components/Competitions";
import Revenue from "./components/Revenue";
import Expansion from "./components/Expansion";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-paper text-ink font-body">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Principles />
        <HowItWorks />
        <Competitions />
        <Revenue />
        <Expansion />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
