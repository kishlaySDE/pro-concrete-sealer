import { useState, useEffect } from "react";
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
    <div className="font-body bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-950 to-black text-white overflow-x-hidden">
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
  );
}