const industries = [
  { icon: "🏡", label: "Residential", desc: "Homes, condos, townhomes" },
  { icon: "🏢", label: "Commercial Buildings", desc: "Offices, banks, hotels" },
  { icon: "🏭", label: "Warehouses", desc: "Logistics & storage facilities" },
  { icon: "🅿️", label: "Parking Lots", desc: "Multi-level & surface lots" },
  { icon: "🛍️", label: "Retail Spaces", desc: "Showrooms & storefronts" },
  { icon: "🏗️", label: "New Construction", desc: "Post-build sealing & protection" },
  { icon: "🏥", label: "Healthcare", desc: "Clinics & medical facilities" },
  { icon: "🎓", label: "Education", desc: "Schools & campuses" },
];

import { motion } from "framer-motion";
import { staggerContainer, fadeInUp, floatIn } from "../utils/animations";

export default function Industries() {
  return (
    <section className="py-24 bg-gray-950">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16 flex flex-col items-center"
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-yellow-400 mb-4">
            Industries
          </motion.div>
          <motion.h2 variants={fadeInUp} className="font-display font-black text-4xl lg:text-5xl text-white mb-4">
            Industries We <span className="text-orange-500">Serve</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-gray-500 max-w-xl text-center">No project is too big or too small. We bring the same level of expertise to every sector.</motion.p>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {industries.map((ind, i) => (
            <motion.div
              variants={floatIn}
              key={i}
              className="group bg-gray-900 border border-gray-800 rounded-2xl p-6 text-center hover:bg-gradient-to-b hover:from-red-500/10 hover:to-transparent hover:border-red-500/40 transition-all duration-300 hover:-translate-y-1 cursor-default"
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-200">{ind.icon}</div>
              <div className="font-bold text-white text-sm mb-1">{ind.label}</div>
              <div className="text-gray-600 text-xs">{ind.desc}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}