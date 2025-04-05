import GHIcon from "../icons/GHIcon";
import InstaIcon from "../icons/InstaIcon";
import XIcon from "../icons/XIcon";

const Footer = () => {
  return (
    <footer className="relative h-[400px] flex justify-center">
      <div className="absolute inset-0 bg-[url('/images/footer.webp')] bg-cover bg-bottom mask-fade-top" />
      <div className="z-10 lowercase">
        <p>2025 La Velada del Año. Todos los derechos reservados.</p>
        <div className="flex gap-x-2 justify-center items-center">
          <a
            href="https://x.com/infolavelada"
            target="_blank"
            rel="noopener noreferrer"
          >
            <XIcon className="hover:scale-120 transition duration-200" />
          </a>
          <a
            href="https://www.instagram.com/infoLaVelada/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstaIcon className="hover:scale-120 transition duration-200" />
          </a>
          <a
            href="https://github.com/midudev/la-velada-web-oficial"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GHIcon className="hover:scale-120 transition duration-200" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
