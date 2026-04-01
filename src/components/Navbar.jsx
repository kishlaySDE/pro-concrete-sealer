import { useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";

const links = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { dark, toggle } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white dark:bg-gray-950 shadow-md dark:shadow-black/50"
          : "bg-transparent backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#" className="flex items-center h-full">
          <img
            src="/logocmpny.png"
            alt="logo"
            className="h-10 md:h-12 w-auto object-contain"
          />
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {links.map(link => (
            <a
              key={link.label}
              href={link.href}
              className={`text-sm font-semibold uppercase tracking-wider transition hover:text-orange-500 ${
                scrolled
                  ? "text-gray-800 dark:text-gray-100"
                  : "text-gray-200"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right: Theme Toggle + CTA */}
        <div className="hidden md:flex items-center gap-3">
          {/* 🌙/☀️ Toggle */}
          <button
            onClick={toggle}
            aria-label="Toggle dark mode"
            className={`w-10 h-10 rounded-full flex items-center justify-center text-lg transition-all hover:scale-110 ${
              scrolled
                ? "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200"
                : "bg-white/15 text-white hover:bg-white/25"
            }`}
          >
            {dark ? "☀️" : "🌙"}
          </button>

          <a
            href="#contact"
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm px-6 py-2.5 rounded-lg transition uppercase tracking-wide shadow-md hover:shadow-orange-400/40"
          >
            Get Free Quote
          </a>
        </div>

        {/* Mobile */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggle}
            className={`w-9 h-9 rounded-full flex items-center justify-center text-base transition ${
              scrolled ? "bg-gray-100 dark:bg-gray-800" : "bg-white/15"
            }`}
          >
            {dark ? "☀️" : "🌙"}
          </button>
          <button
            onClick={() => setOpen(!open)}
            className={`text-2xl transition ${scrolled ? "text-gray-800 dark:text-gray-100" : "text-white"}`}
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Bottom border */}
      <div className={`w-full h-[1px] transition-all ${scrolled ? "bg-gray-200 dark:bg-gray-800" : "bg-white/20"}`} />

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ${
          open
            ? "max-h-96 py-6 bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 shadow-lg"
            : "max-h-0 overflow-hidden"
        }`}
      >
        <div className="flex flex-col items-center gap-6">
          {links.map(link => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-gray-800 dark:text-gray-100 hover:text-orange-500 uppercase text-sm font-semibold"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-orange-500 text-white font-bold text-sm px-6 py-3 rounded-lg uppercase"
          >
            Get Free Quote
          </a>
        </div>
      </div>
    </nav>
  );
}