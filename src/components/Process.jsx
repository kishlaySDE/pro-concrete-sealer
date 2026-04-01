const steps = [
  {
    num: "01",
    icon: "🔍",
    title: "Inspection",
    desc: "Free on-site assessment of your concrete's condition, identifying cracks, porosity, stains, and the best treatment approach."
  },
  {
    num: "02",
    icon: "🧹",
    title: "Surface Preparation",
    desc: "Professional grinding, shot blasting, and cleaning to ensure optimal adhesion and a flawless base for all coatings."
  },
  {
    num: "03",
    icon: "🖌️",
    title: "Sealing Application",
    desc: "Precise, even application of your chosen sealer system using professional equipment — ensuring complete, uniform coverage."
  },
  {
    num: "04",
    icon: "✅",
    title: "Final Finish & QC",
    desc: "Thorough quality inspection, clean-up, and cure time guidance. We don't leave until the job exceeds your expectations."
  }
];

import { motion } from "framer-motion";
import { staggerContainer, fadeInUp, floatIn } from "../utils/animations";

export default function Process() {
  return (
    <section id="projects" className="py-24 bg-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16 flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/30 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-red-400 mb-4">
            Our Process
          </div>
          <h2 className="font-display font-black text-4xl lg:text-5xl text-white mb-4 text-center">
            How We <span className="text-orange-500">Work</span>
          </h2>
          <motion.p variants={fadeInUp} className="text-gray-500 max-w-xl text-center">A proven 4-step process built around quality, efficiency, and zero surprises.</motion.p>
        </motion.div>

        {/* Timeline */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative"
        >
          {/* Connecting line - desktop */}
          <motion.div variants={fadeInUp} className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-red-500 via-yellow-400 to-red-500 opacity-30" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <motion.div variants={floatIn} key={i} className="relative group">
                {/* Step number circle */}
                <div className="relative z-10 w-14 h-14 rounded-full bg-gradient-to-br from-red-500 to-yellow-400 flex items-center justify-center font-display font-black text-white text-sm shadow-lg shadow-red-500/30 mb-6 group-hover:scale-110 transition-transform duration-200">
                  {step.num}
                </div>

                <div className="bg-gray-950 border border-gray-800 rounded-2xl p-6 hover:border-red-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-red-500/5">
                  <div className="text-3xl mb-3">{step.icon}</div>
                  <h3 className="font-display font-black text-lg text-white mb-2">{step.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}