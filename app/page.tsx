import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="bg-gradient-to-b from-[#e8b4ff] to-white">
        <Navbar />
        <div className="pt-16" />
        <Hero />
      </div>
      <FAQ />
      <Footer />
    </div>
  );
}
