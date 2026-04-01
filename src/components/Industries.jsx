import { motion } from "framer-motion";
import { staggerContainer, fadeInUp, floatIn } from "../utils/animations";

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

export default function Industries() {
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
            Industries
          </motion.div>
          <motion.h2 variants={fadeInUp} className="font-black text-5xl lg:text-6xl text-gray-900 dark:text-white mb-4 leading-tight">
            Industries We <span className="text-orange-500">Serve</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-gray-500 dark:text-gray-400 max-w-xl text-center text-lg">
            No project is too big or too small. We bring the same level of expertise to every sector.
          </motion.p>
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
              className="group bg-white dark:bg-[#1e1e1e] border-2 border-transparent hover:border-orange-400 rounded-2xl p-6 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-default"
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-200">{ind.icon}</div>
              <div className="font-black text-gray-900 dark:text-white text-sm mb-1 uppercase tracking-wide">{ind.label}</div>
              <div className="text-gray-500 dark:text-gray-400 text-xs">{ind.desc}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}