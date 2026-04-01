import { useState, useEffect } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustedBy from "./components/TrustedBy";
import Services from "./components/Services";
import Methods from "./components/Methods";
import WhoWeHelp from "./components/WhoWeHelp";
import Process from "./components/Process";
import Industries from "./components/Industries";
import FAQ from "./components/FAQ";
import Trust from "./components/Trust";
import Contact from "./components/Contact";
import Blog from "./components/Blog";
import Footer from "./components/Footer";

export default function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <ThemeProvider>
      <div className="font-body overflow-x-hidden bg-white dark:bg-[#0d0d0d] text-gray-900 dark:text-white transition-colors duration-300">
        <Navbar />
        <main>
          <Hero />
          <TrustedBy />
          <Services />
          <Methods />
          <WhoWeHelp />
          <Process />
          <Industries />
          <Trust />
          <FAQ />
          <Blog />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}