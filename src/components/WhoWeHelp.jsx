import { motion } from "framer-motion";
import { staggerContainer, fadeInUp, floatIn } from "../utils/animations";

const clients = [
  {
    icon: "🏠",
    title: "Homeowners",
    desc: "Protect your investment. We seal driveways, patios, garage floors, and walkways — keeping your home looking pristine and structurally sound for years.",
    points: ["Driveway sealing", "Patio restoration", "Garage floor epoxy"],
  },
  {
    icon: "🏢",
    title: "Small Businesses",
    desc: "First impressions matter. Keep your commercial entrances, parking areas, and interior floors professional and durable, reducing long-term maintenance costs.",
    points: ["Retail floor coatings", "Parking lot sealing", "Entrance restoration"],
  },
  {
    icon: "🏭",
    title: "Industrial / Commercial",
    desc: "Heavy-duty solutions for warehouses, factories, and large commercial properties. Our industrial systems withstand forklifts, chemicals, and extreme wear.",
    points: ["Warehouse floor systems", "Chemical-resistant coatings", "Large-area projects"],
  }
];

export default function WhoWeHelp() {
  return (
    <section id="about" className="py-24 bg-orange-500 relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-white/10 -translate-x-1/2 -translate-y-1/2 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-black/10 translate-x-1/2 translate-y-1/2 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16 flex flex-col items-center"
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 bg-white/20 border border-white/40 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white mb-4">
            Who We Help
          </motion.div>
          <motion.h2 variants={fadeInUp} className="font-black text-5xl lg:text-6xl text-white mb-4 leading-tight">
            Who Can We <span className="text-gray-900">Help?</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-orange-100 max-w-xl text-center text-lg">
            From residential driveways to industrial complexes, we have the right solution for every project.
          </motion.p>
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
              className="bg-white rounded-3xl p-8 hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl"
            >
              <div className="text-5xl mb-5">{c.icon}</div>
              <h3 className="font-black text-2xl text-gray-900 mb-3">{c.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-5">{c.desc}</p>
              <ul className="space-y-2">
                {c.points.map(p => (
                  <li key={p} className="flex items-center gap-2 text-gray-700 text-sm font-medium">
                    <div className="w-4 h-4 rounded-full bg-orange-500 flex items-center justify-center shrink-0">
                      <span className="text-white text-[10px] font-black">✓</span>
                    </div>
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