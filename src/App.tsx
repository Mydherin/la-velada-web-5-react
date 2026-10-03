import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Location from "./sections/Location";
import Navbar from "./sections/Navbar";
import Peleadores from "./sections/Peleadores";
import PeleadoresIV from "./sections/PeleadoresIV";
import { currentPath } from "./paths";

const App = () => {
  const pathname = currentPath();

  if (pathname === "/peleadores") {
    return <Peleadores />;
  }
  if (pathname === "/peleadores-iv") {
    return <PeleadoresIV />;
  }

  return (
    <div className="min-h-full scroll-smooth bg-velada-pink">
      <Navbar />
      <Hero />
      <section
        id="info"
        aria-labelledby="about-title"
        className="relative isolate flex min-h-[480px] w-full items-center justify-center overflow-hidden px-6 py-20 scroll-mt-28 sm:min-h-[560px]"
      >
        <div aria-hidden="true" className="absolute -left-24 top-12 -z-10 h-64 w-64 rounded-full bg-white/20 blur-3xl" />
        <div aria-hidden="true" className="absolute -right-20 bottom-0 -z-10 h-72 w-72 rounded-full bg-[#d63b83]/20 blur-3xl" />
        <div className="mx-auto max-w-3xl text-center text-[#4c1737]">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-[#8f285c] sm:text-sm">
            Detrás del espectáculo
          </p>
          <h2 id="about-title" className="text-4xl font-black uppercase tracking-[0.06em] sm:text-6xl">
            Quiénes somos
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 sm:text-lg sm:leading-8">
            Somos un equipo apasionado por el entretenimiento, el deporte y las grandes historias. Creamos un espacio para reunir a creadores y comunidades en una experiencia única, llena de emoción, respeto y energía.
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-[#672346]/85 sm:text-base sm:leading-7">
            Cada edición nace del trabajo en equipo y de las ganas de sorprender. Nos mueve compartir momentos inolvidables con quienes hacen posible esta celebración: participantes, público y personas que nos acompañan desde casa.
          </p>
        </div>
      </section>
      <Location />
      <div id="redes" className="scroll-mt-28">
        <Footer />
      </div>
    </div>
  );
};

export default App;
