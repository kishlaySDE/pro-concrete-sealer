import { motion } from "framer-motion";
import { staggerContainer, fadeInUp, floatIn } from "../utils/animations";

const stats = [
  { num: "500+", label: "Projects Completed", icon: "🏗️" },
  { num: "10+", label: "Years Experience", icon: "📅" },
  { num: "98%", label: "Client Satisfaction", icon: "⭐" },
  { num: "15+", label: "States Served", icon: "📍" },
];

export default function Trust() {
  return (
    <section className="py-24 bg-white dark:bg-[#0d0d0d] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(249,115,22,0.04)_0%,_transparent_70%)]" />
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
            <div className="inline-flex items-center gap-2 bg-orange-100 dark:bg-orange-900/30 border border-orange-300 dark:border-orange-700 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-orange-600 dark:text-orange-400 mb-6">
              Why Choose Us
            </div>
            <h2 className="font-black text-5xl lg:text-6xl text-gray-900 dark:text-white mb-6 leading-tight">
              A Decade of <br />
              <span className="text-orange-500">Proven Results</span>
            </h2>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-6 text-lg">
              Since 2014, Pro Concrete Sealer has built a reputation on one simple promise: deliver exceptional quality on every project. Our certified technicians use only the finest materials, and we back every job with our industry-leading satisfaction guarantee.
            </p>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-8">
              Whether it's a 400 sq ft driveway or a 40,000 sq ft warehouse floor, we approach every project with the same rigorous standards and attention to detail.
            </p>
            <div className="flex flex-wrap gap-3">
              {["Licensed & Insured", "EPA Compliant", "Certified Applicators", "Free Estimates"].map(badge => (
                <span key={badge} className="bg-orange-50 dark:bg-orange-900/30 border-2 border-orange-200 dark:border-orange-700 text-orange-700 dark:text-orange-400 text-xs font-black px-4 py-2 rounded-full uppercase tracking-wide">
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
                className="bg-[#f5f5f5] dark:bg-[#1e1e1e] border-2 border-transparent hover:border-orange-400 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="text-3xl mb-3">{s.icon}</div>
                <div className="font-black text-4xl text-orange-500 mb-1">{s.num}</div>
                <div className="text-gray-600 dark:text-gray-400 text-sm font-semibold uppercase tracking-wide">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}