import { motion, useScroll, useTransform } from "framer-motion";
import { staggerContainer, fadeInUp } from "../utils/animations";

export default function Hero() {
  const { scrollY } = useScroll();
  const yBg = useTransform(scrollY, [0, 1000], [0, 300]);

  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden">

      {/* Background with Parallax */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/house-bg.jpg')", y: yBg }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/75" />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center min-h-screen">
        <div className="w-full max-w-7xl mx-auto px-6">
          {/* 🔥 LEFT ALIGNED STAGGERED BLOCK */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-2xl text-left text-white space-y-8 mt-20 md:mt-24"
          >

            {/* Tagline */}
            <motion.p variants={fadeInUp} className="text-sm tracking-widest uppercase text-orange-400">
              Seal. Protect. Enhance →
            </motion.p>

            {/* Heading */}
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1]">
              Transform Your
              <br />
              <span className="text-orange-400">Concrete Surfaces</span>
              <br />
              Into Long-Lasting Assets
            </motion.h1>

            {/* Description */}
            <motion.p variants={fadeInUp} className="text-gray-300 text-lg leading-relaxed max-w-xl">
              High-performance concrete sealing solutions designed to resist cracks,
              stains, and harsh weather conditions for long-term durability.
            </motion.p>

            {/* 🔥 SINGLE CLEAN CTA */}
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 mt-8">
              <a
                href="#projects"
                className="inline-block bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-lg font-semibold transition hover:-translate-y-1 hover:shadow-[0_10px_40px_-10px_rgba(249,115,22,0.8)]"
              >
                View Process →
              </a>
              <a
                href="#contact"
                className="inline-block bg-white/10 hover:bg-white/20 px-8 py-4 rounded-lg font-semibold transition backdrop-blur-sm border border-white/10 hover:-translate-y-1 hover:shadow-lg"
              >
                Get Free Quote
              </a>
            </motion.div>

          </motion.div>
        </div>
      </div>

    </section>
  );
}