const clients = [
  {
    icon: "🏠",
    title: "Homeowners",
    desc: "Protect your investment. We seal driveways, patios, garage floors, and walkways — keeping your home looking pristine and structurally sound for years.",
    points: ["Driveway sealing", "Patio restoration", "Garage floor epoxy"],
    color: "from-red-500/20 to-transparent",
    accent: "red-500"
  },
  {
    icon: "🏢",
    title: "Small Businesses",
    desc: "First impressions matter. Keep your commercial entrances, parking areas, and interior floors professional and durable, reducing long-term maintenance costs.",
    points: ["Retail floor coatings", "Parking lot sealing", "Entrance restoration"],
    color: "from-yellow-400/20 to-transparent",
    accent: "yellow-400"
  },
  {
    icon: "🏭",
    title: "Industrial / Commercial",
    desc: "Heavy-duty solutions for warehouses, factories, and large commercial properties. Our industrial systems withstand forklifts, chemicals, and extreme wear.",
    points: ["Warehouse floor systems", "Chemical-resistant coatings", "Large-area projects"],
    color: "from-gray-600/30 to-transparent",
    accent: "gray-400"
  }
];

import { motion } from "framer-motion";
import { staggerContainer, fadeInUp, floatIn } from "../utils/animations";

export default function WhoWeHelp() {
  return (
    <section id="about" className="py-24 bg-gray-950">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16 flex flex-col items-center"
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 bg-gray-800 border border-gray-700 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">
            Who We Help
          </motion.div>
          <motion.h2 variants={fadeInUp} className="font-display font-black text-4xl lg:text-5xl text-white mb-4 text-center">
            Serving Every <span className="text-orange-500">Client Type</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-gray-500 max-w-xl text-center">From residential driveways to industrial complexes, we have the right solution for every project.</motion.p>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-6"
        >
          {clients.map((c, i) => (
            <motion.div
              variants={floatIn}
              key={i}
              className={`group relative bg-gradient-to-b ${c.color} bg-gray-900 border border-gray-800 rounded-2xl p-8 hover:border-gray-600 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl overflow-hidden`}
            >
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 bg-gradient-to-br from-red-500 to-yellow-400" />
              <div className="text-5xl mb-5">{c.icon}</div>
              <h3 className="font-display font-black text-xl text-white mb-3">{c.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-5">{c.desc}</p>
              <ul className="space-y-2">
                {c.points.map(p => (
                  <li key={p} className="flex items-center gap-2 text-gray-300 text-sm">
                    <span className="text-yellow-400 font-black">—</span>
                    {p}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}