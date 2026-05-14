import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-violet-200 to-violet-50">
      <Navbar />
      <div className="pt-16" />
      <Hero />
      <Footer />
    </div>
  );
}
