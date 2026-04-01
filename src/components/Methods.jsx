const methods = [
  { icon: "🔬", title: "Penetrating Sealers", desc: "Deep-penetrating silane/siloxane formulas that chemically bond to concrete" },
  { icon: "🎨", title: "Acrylic Coatings", desc: "Fast-drying, UV-stable surface coatings with aesthetic enhancement options" },
  { icon: "⚗️", title: "Epoxy Systems", desc: "Two-component epoxy for maximum durability and chemical resistance" },
  { icon: "🧪", title: "Polyurethane Sealants", desc: "Flexible, elastic sealants for joints, cracks, and expansion gaps" },
  { icon: "⚙️", title: "Industrial Equipment", desc: "Commercial-grade grinders, shot blasters, and spray systems for prep & apply" },
];

export default function Methods() {
  return (
    <section className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-yellow-400 mb-4">
            Technology & Methods
          </div>
          <h2 className="font-display font-black text-4xl lg:text-5xl text-white mb-4 text-center">
            Tools of the <span className="text-orange-500">Trade</span>
          </h2>
          <p className="text-gray-500 max-w-xl text-center">We use only the most advanced, industry-tested materials and equipment to deliver lasting results.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {methods.map((m, i) => (
            <div
              key={i}
              className="group bg-gray-950 border border-gray-800 rounded-2xl p-6 flex flex-col items-center text-center hover:border-red-500/40 hover:bg-gray-900 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-red-500/10"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-200">{m.icon}</div>
              <h3 className="font-bold text-white text-sm mb-2">{m.title}</h3>
              <p className="text-gray-500 text-xs leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}