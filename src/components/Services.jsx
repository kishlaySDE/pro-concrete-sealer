import { useState } from "react";
import { motion } from "framer-motion";
import { staggerContainer, fadeInUp, floatIn } from "../utils/animations";

const services = [
  {
    id: "aggregate",
    label: "Exposed Aggregate",
    icon: "🪨",
    title: "Exposed Aggregate Finish",
    desc: "Decorative concrete finish that reveals natural stones for a textured, slip-resistant surface. Ideal for driveways, patios, and walkways with high durability.",
    features: ["Slip-resistant surface", "High durability", "Natural stone appearance", "Low maintenance"],
    tag: "Popular"
  },
  {
    id: "broom",
    label: "Broom Finish",
    icon: "🧹",
    title: "Broom Finish Concrete",
    desc: "Classic brushed concrete finish providing excellent traction and clean appearance. Perfect for sidewalks, driveways, and outdoor surfaces.",
    features: ["Anti-slip texture", "Cost-effective solution", "Durable finish", "Clean and simple look"],
    tag: null
  },
  {
    id: "stamped",
    label: "Stamped Concrete",
    icon: "🧱",
    title: "Stamped Concrete Design",
    desc: "Premium decorative concrete that mimics brick, stone, or tile patterns. Enhances property aesthetics while maintaining strength and longevity.",
    features: ["Custom patterns & textures", "High-end appearance", "Long-lasting finish", "Color options available"],
    tag: "Premium"
  },
  {
    id: "paving",
    label: "Paving Stones",
    icon: "🧩",
    title: "Paving Stone Installation",
    desc: "Interlocking pavers designed for flexibility, strength, and visual appeal. Easy to repair and ideal for driveways, patios, and pathways.",
    features: ["Interlocking system", "Easy maintenance", "Strong load capacity", "Elegant design options"],
    tag: null
  },
  {
    id: "epoxy",
    label: "Epoxy Flooring",
    icon: "✨",
    title: "Epoxy Floor Coating",
    desc: "Seamless, glossy flooring solution for garages and commercial spaces. Resistant to chemicals, stains, and heavy wear.",
    features: ["High-gloss finish", "Chemical resistant", "Easy to clean", "Long-lasting durability"],
    tag: "High Demand"
  }
];

export default function Services() {
  const [active, setActive] = useState(services[0]);

  return (
    <section id="services" className="py-24 bg-white dark:bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16 flex flex-col items-center"
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 bg-orange-100 dark:bg-orange-900/30 border border-orange-300 dark:border-orange-700 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-orange-600 dark:text-orange-400 mb-4">
            What We Offer
          </motion.div>
          <motion.h2 variants={fadeInUp} className="font-black text-5xl lg:text-6xl text-gray-900 dark:text-white mb-4 leading-tight">
            Our <span className="text-orange-500">Services</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-gray-500 dark:text-gray-400 max-w-xl text-center text-lg">
            Expert concrete solutions for every surface, project, and budget.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid lg:grid-cols-5 gap-8"
        >
          {/* Left Tabs */}
          <motion.div variants={floatIn} className="lg:col-span-2 flex flex-col gap-2">
            {services.map(s => (
              <button
                key={s.id}
                onClick={() => setActive(s)}
                className={`flex items-center gap-3 px-5 py-4 rounded-xl border-2 text-left font-semibold transition-all ${
                  active.id === s.id
                    ? "bg-orange-500 border-orange-500 text-white shadow-lg shadow-orange-200"
                    : "border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 bg-white dark:bg-[#1e1e1e] hover:border-orange-300 hover:text-orange-500"
                }`}
              >
                <span className="text-xl">{s.icon}</span>
                <span>{s.label}</span>
                {s.tag && (
                  <span className={`ml-auto text-xs px-2 py-0.5 rounded-full font-bold ${active.id === s.id ? "bg-white/20 text-white" : "bg-orange-100 dark:bg-orange-900/40 text-orange-600 dark:text-orange-400"}`}>
                    {s.tag}
                  </span>
                )}
              </button>
            ))}
          </motion.div>

          {/* Right Content */}
          <motion.div variants={floatIn} className="lg:col-span-3 bg-gradient-to-br from-gray-50 to-orange-50 dark:from-[#1e1e1e] dark:to-[#2a1a0a] rounded-3xl p-10 border-2 border-orange-100 dark:border-orange-900/40 shadow-xl">
            <div className="text-4xl mb-4">{active.icon}</div>
            <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-3">
              {active.title}
            </h3>
            <p className="text-gray-500 dark:text-gray-400 mb-8 leading-relaxed">
              {active.desc}
            </p>
            <ul className="space-y-3">
              {active.features.map(f => (
                <li key={f} className="flex items-center gap-3 text-gray-700 dark:text-gray-200 font-medium">
                  <div className="w-5 h-5 rounded-full bg-orange-500 flex items-center justify-center shrink-0">
                    <span className="text-white text-xs font-black">✓</span>
                  </div>
                  {f}
                </li>
              ))}
            </ul>
            <a href="#contact" className="inline-block mt-8 bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-3 rounded-xl transition shadow-lg shadow-orange-200/50 uppercase tracking-wide text-sm">
              Get a Quote →
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}