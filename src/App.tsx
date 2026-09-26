import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";

const App = () => {
  return (
    <div className="min-h-full scroll-smooth bg-velada-pink">
      <Navbar />
      <Hero />
      <section id="info" aria-label="Información" className="h-[400px] w-full scroll-mt-28" />
      <div id="redes" className="scroll-mt-28">
        <Footer />
      </div>
    </div>
  );
};

export default App;
