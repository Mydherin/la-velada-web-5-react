import Navbar from "./Navbar";

type Fight = {
  number: string;
  red: string;
  blue: string;
  winner: string;
  result: string;
};

const fights: Fight[] = [
  { number: "01", red: "Peereira7", blue: "Rivaldios", winner: "Peereira7", result: "Decisión unánime" },
  { number: "02", red: "Alana", blue: "Ari Geli", winner: "Alana", result: "Decisión dividida" },
  { number: "03", red: "Perxitaa", blue: "Gaspi", winner: "Perxitaa", result: "KO técnico · R1" },
  { number: "04", red: "Abby", blue: "RoRo", winner: "Abby", result: "Decisión dividida" },
  { number: "05", red: "Viruzz", blue: "Tomás Mazza", winner: "Viruzz", result: "Decisión unánime" },
  { number: "06", red: "Andoni", blue: "Carlos Belcast", winner: "Andoni", result: "Decisión dividida" },
  { number: "07", red: "TheGrefg", blue: "Westcol", winner: "TheGrefg", result: "KO técnico · R3" },
];

const FightCard = ({ fight }: { fight: Fight }) => (
  <article className="relative rounded-2xl border border-white/15 bg-[#21131f]/90 p-4 shadow-[0_12px_35px_rgba(0,0,0,0.2)] sm:p-5">
    <div className="mb-3 flex items-center justify-between">
      <span className="text-[10px] font-bold tracking-[0.2em] text-[#f5a2cf]">COMBATE {fight.number}</span>
      <span className="rounded-full bg-white/10 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.12em] text-white/65">{fight.result}</span>
    </div>
    <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2">
      {[fight.red, fight.blue].map((name, index) => {
        const won = name === fight.winner;
        return (
          <div key={name} className={`min-h-[72px] rounded-xl border p-3 ${won ? "border-[#f08bc0]/70 bg-[#d63b83]/20" : "border-white/10 bg-white/[0.04]"} ${index === 1 ? "col-start-3 row-start-1 text-right" : "col-start-1 row-start-1"}`}>
            <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-white/40">{index === 0 ? "Esquina roja" : "Esquina azul"}</p>
            <p className={`mt-1 text-sm font-black leading-tight sm:text-base ${won ? "text-white" : "text-white/70"}`}>{name}</p>
            {won && <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.16em] text-[#ff9ccc]">Ganador</p>}
          </div>
        );
      })}
      <span className="col-start-2 row-start-1 text-[10px] font-black italic text-white/30">VS</span>
    </div>
  </article>
);

const Peleadores = () => (
  <div className="min-h-screen bg-[#160d17] text-white">
    <Navbar />
    <main className="relative isolate min-h-screen overflow-hidden px-4 pb-20 pt-32 sm:px-8 sm:pt-40">
      <div aria-hidden="true" className="absolute -left-40 top-28 -z-10 h-96 w-96 rounded-full bg-[#d63b83]/25 blur-[110px]" />
      <div aria-hidden="true" className="absolute -right-32 top-[30rem] -z-10 h-96 w-96 rounded-full bg-[#713c9c]/20 blur-[110px]" />
      <header className="mx-auto mb-12 max-w-6xl text-center sm:mb-16">
        <p className="mb-4 text-[11px] font-black uppercase tracking-[0.34em] text-[#ff9ccc]">La Cartuja · Sevilla · 26.07.2025</p>
        <h1 className="text-5xl font-black uppercase leading-[0.9] tracking-[-0.04em] sm:text-7xl md:text-8xl">Noche de<br /><span className="text-[#f08bc0]">combate</span></h1>
        <p className="mx-auto mt-6 max-w-xl text-sm leading-6 text-white/60 sm:text-base">14 creadores. 7 cruces. Una noche para la historia.<br className="hidden sm:block" /> Revive el bracket de La Velada del Año V.</p>
      </header>
      <section aria-label="Bracket de combates y resultados" className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {fights.map((fight) => <FightCard key={fight.number} fight={fight} />)}
      </section>
      <footer className="mx-auto mt-10 max-w-6xl text-center text-[10px] font-bold uppercase tracking-[0.2em] text-white/35">7 combates · 14 peleadores · 1 campeón por cruce</footer>
    </main>
  </div>
);

export default Peleadores;
