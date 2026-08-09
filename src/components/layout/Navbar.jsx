import { useState, useEffect } from "react";
import { Link } from "react-scroll";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-[#05091c]/90 backdrop-blur-md shadow-xl py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <img
          src={`${import.meta.env.BASE_URL}logo/LogoHori.png`}
          alt="SCL Solutions"
          className={`w-auto transition-all duration-300 ${
            scrolled ? "h-24" : "h-24"
          }`}
        />

        <nav className="hidden gap-10 font-semibold md:flex">
          <Link
            to="inicio"
            smooth
            duration={500}
            className="cursor-pointer text-white transition hover:text-green-400"
          >
            Inicio
          </Link>

          <Link
            to="servicios"
            smooth
            duration={500}
            className="cursor-pointer text-white transition hover:text-green-400"
          >
            Servicios
          </Link>

          <Link
            to="contacto"
            smooth
            duration={500}
            className="cursor-pointer text-white transition hover:text-green-400"
          >
            Contacto
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;