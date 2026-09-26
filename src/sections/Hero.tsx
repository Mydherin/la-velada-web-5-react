const Hero = () => {
  return (
    <section id="inicio" className="relative flex min-h-screen w-full items-center justify-center overflow-hidden scroll-mt-28">
      <div className="absolute inset-0 bg-[url('/images/hero.avif')] bg-cover bg-center mask-fade-bottom" />
      <h1 className="relative z-10 px-6 text-center text-5xl font-black uppercase tracking-[0.08em] text-white drop-shadow-[0_4px_18px_rgba(0,0,0,0.45)] sm:text-7xl md:text-8xl">
        La Velada VII
      </h1>
    </section>
  );
};

export default Hero;
