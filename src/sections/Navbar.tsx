const links = [
  { label: "Inicio", href: "#inicio" },
  { label: "Quiénes somos", href: "#info" },
  { label: "Redes", href: "#redes" },
];

const Navbar = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-8 sm:pt-6">
      <nav
        aria-label="Navegación principal"
        className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/40 bg-[#fff7fb]/80 px-5 py-3 text-[#4c1737] shadow-[0_8px_32px_rgba(67,18,49,0.12)] backdrop-blur-md sm:px-8"
      >
        <a
          href="#inicio"
          className="text-sm font-black uppercase tracking-[0.16em] transition-opacity hover:opacity-70 sm:text-base"
        >
          La Velada <span className="text-[#d63b83]">· VI</span>
        </a>
        <ul className="flex items-center gap-4 text-[11px] font-bold uppercase tracking-[0.12em] sm:gap-8 sm:text-xs">
          {links.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className="rounded-full py-2 transition-colors hover:text-[#d63b83] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d63b83]"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
