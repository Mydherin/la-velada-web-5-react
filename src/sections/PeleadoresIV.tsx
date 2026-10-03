import { withBase } from "../paths";

const fights = [
  { number: "01", left: "Carrera", right: "Agustín51", winner: "Agustín51", result: "Victoria" },
  { number: "02", left: "Guanyar", right: "La Cobra", winner: "La Cobra", result: "KO técnico" },
  { number: "03", left: "Zeling · Nissaxter", right: "Amablitz · Alana", winner: "Amablitz · Alana", result: "Combate por parejas" },
  { number: "04", left: "Viruzz", right: "Shelao", winner: "Viruzz", result: "Decisión unánime" },
  { number: "06", left: "El Mariana", right: "Plex", winner: "Plex", result: "Decisión unánime · combate estelar" },
];

const pista = ["Roberto Cein", "Peldanyos", "Aldo Geo", "Unicornio", "Folagor", "Skain", "Karchez", "Sezar Blue", "Pelicanger", "Will"];

const PeleadoresIV = () => (
  <main className="min-h-screen overflow-hidden bg-[#160d18] text-white selection:bg-[#ff5b9a] selection:text-[#160d18]">
    <header className="fixed inset-x-0 top-0 z-20 px-4 pt-4 sm:px-8 sm:pt-6">
      <nav aria-label="Navegación principal" className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/15 bg-[#211522]/85 px-5 py-3 shadow-xl backdrop-blur-md sm:px-8">
        <a href={withBase("/")} className="text-sm font-black uppercase tracking-[0.16em] sm:text-base">La Velada <span className="text-[#ff5b9a]">· VI</span></a>
        <a href={withBase("/")} className="rounded-full px-4 py-2 text-[11px] font-bold uppercase tracking-[0.12em] text-white/75 transition hover:text-[#ff8db6] sm:text-xs">← Volver al inicio</a>
      </nav>
    </header>

    <section className="relative px-5 pb-20 pt-36 sm:px-8 sm:pt-44">
      <div aria-hidden="true" className="pointer-events-none absolute -right-36 top-16 h-[32rem] w-[32rem] rounded-full bg-[#d92b73]/15 blur-[120px]" />
      <div className="relative mx-auto max-w-6xl">
        <p className="text-xs font-bold uppercase tracking-[0.38em] text-[#ff83b0]">Santiago Bernabéu · 13.07.2024</p>
        <div className="mt-5 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <h1 className="max-w-3xl text-5xl font-black uppercase leading-[0.92] tracking-[0.035em] sm:text-7xl md:text-8xl">Los<br/><span className="text-[#ff5b9a]">peleadores</span><br/>de la IV</h1>
          <p className="max-w-xs text-sm leading-6 text-white/60 sm:text-base">Seis combates. Veintidós participantes. Una noche para recordar.</p>
        </div>

        <div className="mt-16 flex items-center gap-4">
          <span className="text-xs font-black uppercase tracking-[0.28em] text-white/50">Cartelera</span>
          <span className="h-px flex-1 bg-white/15" />
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#ff83b0]">01 — 06</span>
        </div>

        <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {fights.map((fight) => (
            <article key={fight.number} className={`group relative flex min-h-64 flex-col justify-between overflow-hidden rounded-2xl border p-6 transition duration-300 hover:-translate-y-1 ${fight.number === "06" ? "border-[#ff5b9a]/55 bg-gradient-to-br from-[#521d3c] to-[#261326] sm:col-span-2 lg:col-span-2" : "border-white/10 bg-white/[0.045] hover:border-[#ff5b9a]/40 hover:bg-white/[0.07]"}`}>
              <span aria-hidden="true" className="absolute -right-3 -top-10 text-[9rem] font-black leading-none text-white/[0.035]">{fight.number}</span>
              <div className="relative flex items-center justify-between">
                <span className="text-xs font-black tracking-[0.2em] text-[#ff83b0]">COMBATE {fight.number}</span>
                {fight.number === "06" && <span className="rounded-full bg-[#ff5b9a] px-3 py-1 text-[9px] font-black uppercase tracking-[0.14em] text-[#260f20]">Estelar</span>}
              </div>
              <div className="relative my-8 flex items-center justify-between gap-3">
                <span className={`flex-1 text-xl font-black uppercase leading-tight sm:text-2xl ${fight.winner === fight.left ? "text-white" : "text-white/55"}`}>{fight.left}</span>
                <span className="text-xs font-black italic text-[#ff5b9a]">VS</span>
                <span className={`flex-1 text-right text-xl font-black uppercase leading-tight sm:text-2xl ${fight.winner === fight.right ? "text-white" : "text-white/55"}`}>{fight.right}</span>
              </div>
              <div className="relative flex items-center justify-between border-t border-white/10 pt-4 text-[10px] font-bold uppercase tracking-[0.14em]">
                <span className="text-white/45">{fight.result}</span><span className="text-[#ff83b0]">Ganador · {fight.winner}</span>
              </div>
            </article>
          ))}
          <article className="relative flex min-h-64 flex-col justify-between overflow-hidden rounded-2xl border border-[#ffb54e]/35 bg-gradient-to-br from-[#34251b] to-[#1d1518] p-6 sm:col-span-2 lg:col-span-1">
            <div className="flex items-start justify-between gap-4"><div><span className="text-xs font-black tracking-[0.2em] text-[#ffc06a]">COMBATE 05</span><h2 className="mt-3 text-2xl font-black uppercase">Rey de<br/>la pista</h2></div><span className="text-4xl">♛</span></div>
            <p className="mt-5 text-xs leading-5 text-white/55">Diez boxeadores. Solo uno se corona.</p>
            <div className="mt-5 flex flex-wrap gap-2">{pista.map((name) => <span key={name} className={`rounded-full border px-2.5 py-1 text-[10px] font-bold ${name === "Karchez" ? "border-[#ffc06a]/60 bg-[#ffc06a]/15 text-[#ffd494]" : "border-white/10 bg-white/[0.04] text-white/65"}`}>{name}</span>)}</div>
            <p className="mt-4 border-t border-white/10 pt-3 text-[10px] font-bold uppercase tracking-[0.12em] text-[#ffd494]">Oro · Karchez</p>
          </article>
        </div>

        <footer className="mt-14 flex flex-col gap-2 border-t border-white/10 pt-5 text-[10px] text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <span>La Velada del Año IV · Madrid, 2024</span>
          <a className="underline decoration-white/20 underline-offset-4 transition hover:text-white/70" href="https://www.tycsports.com/gaming/cartelera-de-la-velada-del-ano-4-de-ibai-las-peleas-una-por-una-id595668.html" target="_blank" rel="noreferrer">Cartelera y resultados</a>
        </footer>
      </div>
    </section>
  </main>
);

export default PeleadoresIV;
