import { useState } from "react";

const faqs = [
  {
    q: "How long does concrete sealing last?",
    a: "Most professional-grade sealers last 3–5 years for surface coatings and up to 10+ years for penetrating sealers, depending on traffic, UV exposure, and maintenance. We offer re-sealing programs to keep your surfaces protected year-round."
  },
  {
    q: "Is sealing necessary for new concrete?",
    a: "Absolutely. New concrete is especially porous and vulnerable. Sealing within the first 28 days (after full cure) prevents moisture intrusion, freeze-thaw damage, stains, and surface degradation — potentially doubling the concrete's usable life."
  },
  {
    q: "What does concrete sealing cost?",
    a: "Pricing depends on square footage, surface condition, and the type of sealer used. Residential projects typically range from $0.50–$2.50/sq ft for penetrating sealers, and $3–$12/sq ft for epoxy systems. We provide free, no-obligation on-site estimates."
  },
  {
    q: "How long before I can use the surface after sealing?",
    a: "Light foot traffic is typically safe after 24 hours. Vehicle traffic should wait 48–72 hours. Full chemical cure for epoxy systems takes 7 days. We'll provide exact timelines based on the product used and weather conditions during your project."
  },
  {
    q: "Do you offer warranties on your work?",
    a: "Yes. We offer workmanship warranties ranging from 1–5 years depending on the service. Many of our product manufacturers also offer material warranties. Details are provided in writing before any project begins."
  },
  {
    q: "Can you seal concrete that already has cracks?",
    a: "Yes — but we recommend crack repair prior to or during sealing. Our team handles structural crack injection and surface patching as part of our restoration packages, ensuring a uniform, fully protected surface."
  }
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section className="py-24 bg-gray-950">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 bg-gray-800 border border-gray-700 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">
            FAQ
          </div>
          <h2 className="font-display font-black text-4xl lg:text-5xl text-white mb-4 text-center">
            Common <span className="text-orange-500">Questions</span>
          </h2>
          <p className="text-gray-500 text-center">Everything you need to know before getting started.</p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`border rounded-2xl overflow-hidden transition-all duration-200 ${
                open === i ? "border-red-500/40 bg-gray-900" : "border-gray-800 bg-gray-900/50"
              }`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left"
              >
                <span className={`font-bold text-sm ${open === i ? "text-white" : "text-gray-300"}`}>
                  {faq.q}
                </span>
                <span className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ml-4 transition-all duration-200 ${
                  open === i
                    ? "bg-gradient-to-br from-red-500 to-yellow-400 text-white rotate-45"
                    : "bg-gray-800 text-gray-400"
                }`}>
                  +
                </span>
              </button>
              {open === i && (
                <div className="px-6 pb-6 text-gray-400 text-sm leading-relaxed border-t border-gray-800 pt-4">
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
