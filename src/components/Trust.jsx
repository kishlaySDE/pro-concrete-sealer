const stats = [
  { num: "500+", label: "Projects Completed", icon: "🏗️" },
  { num: "10+", label: "Years Experience", icon: "📅" },
  { num: "98%", label: "Client Satisfaction", icon: "⭐" },
  { num: "15+", label: "States Served", icon: "📍" },
];

import { motion } from "framer-motion";
import { staggerContainer, fadeInUp, floatIn } from "../utils/animations";

export default function Trust() {
  return (
    <section className="py-24 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(230,57,70,0.08)_0%,_transparent_70%)]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left */}
          <motion.div variants={fadeInUp}>
            <div className="inline-flex items-center gap-2 bg-gray-800 border border-gray-700 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-gray-400 mb-6 flex-wrap">
              Why Choose Us
            </div>
            <h2 className="font-display font-black text-4xl lg:text-5xl text-white mb-6 leading-tight">
              A Decade of <br />
              <span className="text-orange-500">Proven Results</span>
            </h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              Since 2014, Pro Concrete Sealer has built a reputation on one simple promise: deliver exceptional quality on every project. Our certified technicians use only the finest materials, and we back every job with our industry-leading satisfaction guarantee.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              Whether it's a 400 sq ft driveway or a 40,000 sq ft warehouse floor, we approach every project with the same rigorous standards and attention to detail.
            </p>
            <div className="flex flex-wrap gap-3">
              {["Licensed & Insured", "EPA Compliant", "Certified Applicators", "Free Estimates"].map(badge => (
                <span key={badge} className="bg-gray-800 border border-gray-700 text-gray-300 text-xs font-bold px-3 py-1.5 rounded-full">
                  ✓ {badge}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right - Stats */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                variants={floatIn}
                className="bg-gray-950 border border-gray-800 rounded-2xl p-6 hover:border-red-500/30 transition-all duration-300 group"
              >
                <div className="text-3xl mb-3">{s.icon}</div>
                <div className="font-display font-black text-4xl text-orange-500 mb-1">
                  {s.num}
                </div>
                <div className="text-gray-500 text-sm font-medium uppercase tracking-wide">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}