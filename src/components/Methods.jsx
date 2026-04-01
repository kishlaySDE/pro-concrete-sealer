import { motion } from "framer-motion";
import { staggerContainer, fadeInUp, floatIn } from "../utils/animations";

const methods = [
  { icon: "🔬", title: "Penetrating Sealers", desc: "Deep-penetrating silane/siloxane formulas that chemically bond to concrete" },
  { icon: "🎨", title: "Acrylic Coatings", desc: "Fast-drying, UV-stable surface coatings with aesthetic enhancement options" },
  { icon: "⚗️", title: "Epoxy Systems", desc: "Two-component epoxy for maximum durability and chemical resistance" },
  { icon: "🧪", title: "Polyurethane Sealants", desc: "Flexible, elastic sealants for joints, cracks, and expansion gaps" },
  { icon: "⚙️", title: "Industrial Equipment", desc: "Commercial-grade grinders, shot blasters, and spray systems for prep & apply" },
];

export default function Methods() {
  return (
    <section className="py-24 bg-[#f5f5f5] dark:bg-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16 flex flex-col items-center"
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 bg-orange-100 dark:bg-orange-900/30 border border-orange-300 dark:border-orange-700 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-orange-600 dark:text-orange-400 mb-4">
            Technology & Methods
          </motion.div>
          <motion.h2 variants={fadeInUp} className="font-black text-5xl lg:text-6xl text-gray-900 dark:text-white mb-4 leading-tight">
            Tools of the <span className="text-orange-500">Trade</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-gray-500 dark:text-gray-400 max-w-xl text-center text-lg">
            We use only the most advanced, industry-tested materials and equipment to deliver lasting results.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5"
        >
          {methods.map((m, i) => (
            <motion.div
              variants={floatIn}
              key={i}
              className="group bg-white dark:bg-[#1e1e1e] border-2 border-transparent hover:border-orange-400 rounded-2xl p-6 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-orange-100 dark:hover:shadow-orange-900/20 cursor-default"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-200">{m.icon}</div>
              <h3 className="font-black text-gray-900 dark:text-white text-sm mb-2 uppercase tracking-wide">{m.title}</h3>
              <p className="text-gray-500 dark:text-gray-400 text-xs leading-relaxed">{m.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}