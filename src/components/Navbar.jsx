import React, {useState} from "react";
import { Link } from "react-scroll";
import "../App.css";
export function Navbar() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const URL_CV =
    "https://drive.google.com/uc?export=download&id=1AoEZpzjodozG2a4CSNDIixb8Nd_xiEpI";

  const handleDescargarCV = () => {
    // Simplemente redirecciona al usuario a la URL de descarga del CV
    window.location.href = URL_CV;
  };

  const navList = <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256"><path fill="white" d="M228 128a12 12 0 0 1-12 12H40a12 12 0 0 1 0-24h176a12 12 0 0 1 12 12M40 76h176a12 12 0 0 0 0-24H40a12 12 0 0 0 0 24m176 104H40a12 12 0 0 0 0 24h176a12 12 0 0 0 0-24"/></svg>;

  const navItems = [
    { href: "#home", label: "Inicio" },
    { href: "#proyects", label: "Proyects" },
    { href: "#skills", label: "Skills" },
    { href: "#services", label: "Services" },
    { href: "#contact", label: "Contact" },
    { href: "#cv", label: "Download CV" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="fixed top-0 w-full z-1000 bg-transparent">
      <header className="flex justify-between items-center p-5 text-white font-itim cursor-pointer">
        <div className="text-4xl">
          <span className="text-[#05F9F6]">Junior</span> Developer
        </div>
        <nav className="hidden lg:block">
          <ul className="list-none flex gap-5">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="text-white no-underline hover:no-underline">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-white">
            <p>Menu </p> 
          </button>
        </div>
      </header>
      {isMenuOpen && (
        <div className="lg:hidden fixed right-0 top-0 h-1/2 w-1/3 bg-gray-800 p-5">
          <button onClick={toggleMenu} className="text-white text-2xl mb-5">
            X 
          </button>
          <ul className="list-none flex flex-col gap-5">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="text-white no-underline hover:no-underline" onClick={toggleMenu}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
