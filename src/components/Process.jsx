import { motion } from "framer-motion";
import { staggerContainer, fadeInUp, floatIn } from "../utils/animations";

const steps = [
  { num: "01", icon: "🔍", title: "Inspection", desc: "Free on-site assessment of your concrete's condition, identifying cracks, porosity, stains, and the best treatment approach." },
  { num: "02", icon: "🧹", title: "Surface Prep", desc: "Professional grinding, shot blasting, and cleaning to ensure optimal adhesion and a flawless base for all coatings." },
  { num: "03", icon: "🖌️", title: "Application", desc: "Precise, even application of your chosen sealer system using professional equipment — ensuring complete, uniform coverage." },
  { num: "04", icon: "✅", title: "Final QC", desc: "Thorough quality inspection, clean-up, and cure time guidance. We don't leave until the job exceeds your expectations." }
];

export default function Process() {
  return (
    <section id="projects" className="py-24 bg-white dark:bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20 flex flex-col items-center"
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 bg-orange-100 dark:bg-orange-900/30 border border-orange-300 dark:border-orange-700 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-orange-600 dark:text-orange-400 mb-4">
            Our Process
          </motion.div>
          <motion.h2 variants={fadeInUp} className="font-black text-5xl lg:text-6xl text-gray-900 dark:text-white mb-4 leading-tight">
            How We <span className="text-orange-500">Work?</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-gray-500 dark:text-gray-400 max-w-xl text-center text-lg">
            A proven 4-step process built around quality, efficiency, and zero surprises.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative"
        >
          {/* Top row */}
          <div className="flex items-center justify-center gap-0 mb-8 flex-wrap lg:flex-nowrap">
            <motion.div variants={floatIn} className="w-20 h-20 rounded-full bg-orange-500 flex items-center justify-center font-black text-white text-sm uppercase shadow-lg shadow-orange-300 shrink-0 z-10">
              START
            </motion.div>

            {steps.slice(0, 2).map((step, i) => (
              <div key={i} className="flex items-center">
                <div className="w-8 lg:w-16 border-t-2 border-dashed border-orange-400" />
                <motion.div variants={floatIn} className="bg-white dark:bg-[#1e1e1e] border-2 border-orange-400 rounded-2xl p-5 flex flex-col items-center text-center w-40 lg:w-44 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className="text-2xl mb-2">{step.icon}</div>
                  <div className="font-black text-xs uppercase tracking-wide text-gray-900 dark:text-white">{step.title}</div>
                </motion.div>
              </div>
            ))}

            <div className="hidden lg:block w-8 lg:w-16 border-t-2 border-dashed border-orange-400" />
          </div>

          {/* U-turn connector */}
          <div className="hidden lg:flex justify-end pr-20 mb-8">
            <div className="w-0.5 h-12 border-r-2 border-dashed border-orange-400" />
          </div>

          {/* Bottom row */}
          <div className="flex items-center justify-center gap-0 flex-wrap lg:flex-nowrap lg:flex-row-reverse">
            <motion.div variants={floatIn} className="w-20 h-20 rounded-full bg-orange-500 flex items-center justify-center font-black text-white text-sm uppercase shadow-lg shadow-orange-300 shrink-0 z-10">
              DONE
            </motion.div>

            {steps.slice(2).map((step, i) => (
              <div key={i} className="flex items-center flex-row-reverse">
                <div className="w-8 lg:w-16 border-t-2 border-dashed border-orange-400" />
                <motion.div variants={floatIn} className="bg-white dark:bg-[#1e1e1e] border-2 border-orange-400 rounded-2xl p-5 flex flex-col items-center text-center w-40 lg:w-44 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className="text-2xl mb-2">{step.icon}</div>
                  <div className="font-black text-xs uppercase tracking-wide text-gray-900 dark:text-white">{step.title}</div>
                </motion.div>
              </div>
            ))}

            <div className="hidden lg:block w-8 lg:w-16 border-t-2 border-dashed border-orange-400" />
          </div>

          {/* Step details */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16"
          >
            {steps.map((step, i) => (
              <motion.div variants={floatIn} key={i} className="bg-[#f5f5f5] dark:bg-[#1e1e1e] rounded-2xl p-6">
                <div className="font-black text-orange-500 text-2xl mb-2">{step.num}</div>
                <h3 className="font-black text-gray-900 dark:text-white text-lg mb-2">{step.title}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}