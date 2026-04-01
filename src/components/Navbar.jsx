import { useState, useEffect } from "react";

const links = ["Home", "Services", "Projects", "About", "Contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/85 backdrop-blur-md shadow-md"
          : "bg-transparent backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-14 md:h-16">

        {/* 🔥 Bigger Logo */}
        <a href="#" className="flex items-center h-full">
          <img
            src="/logocmpny.png"
            alt="logo"
            className="h-10 md:h-12 w-auto object-contain"
          />
        </a>

        {/* Links */}
        <div className="hidden md:flex items-center gap-12">
          {links.map(link => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-gray-200 hover:text-orange-400 text-sm uppercase tracking-wider transition"
            >
              {link}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex">
          <a
            href="#contact"
            className="bg-orange-500 hover:bg-orange-600 text-white text-sm px-6 py-2.5 rounded-lg transition uppercase"
          >
            Get Free Quote
          </a>
        </div>

        {/* Mobile */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-200 text-2xl"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* 🔥 Dynamic Bottom Line */}
      <div
        className={`w-full h-[1px] transition-all duration-300 ${
          scrolled
            ? "bg-gray-700 opacity-100"
            : "bg-white/20 opacity-60"
        }`}
      />

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ${
          open
            ? "max-h-96 py-6 bg-black/95 backdrop-blur-md border-t border-gray-800"
            : "max-h-0 overflow-hidden"
        }`}
      >
        <div className="flex flex-col items-center gap-6">
          {links.map(link => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="text-gray-300 hover:text-orange-400 uppercase text-sm"
            >
              {link}
            </a>
          ))}

          <a
            href="#contact"
            className="bg-orange-500 text-white text-sm px-6 py-3 rounded-lg uppercase"
          >
            Get Free Quote
          </a>
        </div>
      </div>
    </nav>
  );
}