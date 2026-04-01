import { useState } from "react";
import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "../utils/animations";

const faqs = [
  { q: "How long does concrete sealing last?", a: "Most professional-grade sealers last 3–5 years for surface coatings and up to 10+ years for penetrating sealers, depending on traffic, UV exposure, and maintenance. We offer re-sealing programs to keep your surfaces protected year-round." },
  { q: "Is sealing necessary for new concrete?", a: "Absolutely. New concrete is especially porous and vulnerable. Sealing within the first 28 days (after full cure) prevents moisture intrusion, freeze-thaw damage, stains, and surface degradation — potentially doubling the concrete's usable life." },
  { q: "What does concrete sealing cost?", a: "Pricing depends on square footage, surface condition, and the type of sealer used. Residential projects typically range from $0.50–$2.50/sq ft for penetrating sealers, and $3–$12/sq ft for epoxy systems. We provide free, no-obligation on-site estimates." },
  { q: "How long before I can use the surface after sealing?", a: "Light foot traffic is typically safe after 24 hours. Vehicle traffic should wait 48–72 hours. Full chemical cure for epoxy systems takes 7 days. We'll provide exact timelines based on the product used and weather conditions during your project." },
  { q: "Do you offer warranties on your work?", a: "Yes. We offer workmanship warranties ranging from 1–5 years depending on the service. Many of our product manufacturers also offer material warranties. Details are provided in writing before any project begins." },
  { q: "Can you seal concrete that already has cracks?", a: "Yes — but we recommend crack repair prior to or during sealing. Our team handles structural crack injection and surface patching as part of our restoration packages, ensuring a uniform, fully protected surface." }
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section className="py-24 bg-[#f5f5f5] dark:bg-[#1a1a1a]">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16 flex flex-col items-center"
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 bg-orange-100 dark:bg-orange-900/30 border border-orange-300 dark:border-orange-700 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-orange-600 dark:text-orange-400 mb-4">
            FAQ
          </motion.div>
          <motion.h2 variants={fadeInUp} className="font-black text-5xl lg:text-6xl text-gray-900 dark:text-white mb-4 leading-tight">
            Frequently Asked <span className="text-orange-500">Questions</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-gray-500 dark:text-gray-400 text-center text-lg">Everything you need to know before getting started.</motion.p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`border-2 rounded-2xl overflow-hidden transition-all duration-200 ${
                open === i
                  ? "border-orange-400 bg-white dark:bg-[#1e1e1e] shadow-lg shadow-orange-100 dark:shadow-orange-900/10"
                  : "border-gray-200 dark:border-gray-700 bg-white dark:bg-[#1e1e1e] hover:border-orange-200 dark:hover:border-orange-700"
              }`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left"
              >
                <span className={`font-bold text-sm ${open === i ? "text-orange-500" : "text-gray-800 dark:text-gray-100"}`}>
                  {faq.q}
                </span>
                <span className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ml-4 font-black text-lg transition-all duration-200 ${
                  open === i
                    ? "bg-orange-500 text-white rotate-45"
                    : "bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-300"
                }`}>
                  +
                </span>
              </button>
              {open === i && (
                <div className="px-6 pb-6 text-gray-500 dark:text-gray-400 text-sm leading-relaxed border-t border-gray-100 dark:border-gray-700 pt-4">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
