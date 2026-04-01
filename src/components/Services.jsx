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
    features: [
      "Slip-resistant surface",
      "High durability",
      "Natural stone appearance",
      "Low maintenance"
    ],
    tag: "Popular"
  },
  {
    id: "broom",
    label: "Broom Finish",
    icon: "🧹",
    title: "Broom Finish Concrete",
    desc: "Classic brushed concrete finish providing excellent traction and clean appearance. Perfect for sidewalks, driveways, and outdoor surfaces.",
    features: [
      "Anti-slip texture",
      "Cost-effective solution",
      "Durable finish",
      "Clean and simple look"
    ],
    tag: null
  },
  {
    id: "stamped",
    label: "Stamped Concrete",
    icon: "🧱",
    title: "Stamped Concrete Design",
    desc: "Premium decorative concrete that mimics brick, stone, or tile patterns. Enhances property aesthetics while maintaining strength and longevity.",
    features: [
      "Custom patterns & textures",
      "High-end appearance",
      "Long-lasting finish",
      "Color options available"
    ],
    tag: "Premium"
  },
  {
    id: "paving",
    label: "Paving Stones",
    icon: "🧩",
    title: "Paving Stone Installation",
    desc: "Interlocking pavers designed for flexibility, strength, and visual appeal. Easy to repair and ideal for driveways, patios, and pathways.",
    features: [
      "Interlocking system",
      "Easy maintenance",
      "Strong load capacity",
      "Elegant design options"
    ],
    tag: null
  },
  {
    id: "epoxy",
    label: "Epoxy Flooring",
    icon: "✨",
    title: "Epoxy Floor Coating",
    desc: "Seamless, glossy flooring solution for garages and commercial spaces. Resistant to chemicals, stains, and heavy wear.",
    features: [
      "High-gloss finish",
      "Chemical resistant",
      "Easy to clean",
      "Long-lasting durability"
    ],
    tag: "High Demand"
  }
];

export default function Services() {
  const [active, setActive] = useState(services[0]);

  return (
    <section id="services" className="py-24 bg-gray-950">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.h2 variants={fadeInUp} className="text-4xl font-black text-white mb-4">
            Our <span className="text-orange-400">Services</span>
          </motion.h2>
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
                className={`flex items-center gap-3 px-5 py-4 rounded-xl border transition ${
                  active.id === s.id
                    ? "bg-red-500/20 border-red-500 text-white"
                    : "border-gray-800 text-gray-400 hover:text-white"
                }`}
              >
                <span>{s.icon}</span>
                <span>{s.label}</span>
              </button>
            ))}
          </motion.div>

          {/* Right Content */}
          <motion.div variants={floatIn} className="lg:col-span-3 bg-gray-900 rounded-2xl p-8 border border-gray-800">
            <h3 className="text-2xl font-bold text-white mb-3">
              {active.title}
            </h3>

            <p className="text-gray-400 mb-6">
              {active.desc}
            </p>

            <ul className="space-y-2">
              {active.features.map(f => (
                <li key={f} className="text-gray-300 text-sm">
                  ✔ {f}
                </li>
              ))}
            </ul>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}