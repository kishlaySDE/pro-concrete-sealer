export default function Insights() {
  const data = [
    {
      title: "Why Concrete Sealing is Essential",
      desc: "Prevent cracks, water damage, and surface wear with proper sealing techniques.",
    },
    {
      title: "Extend Lifespan of Your Driveway",
      desc: "Professional sealing can increase durability by up to 5x.",
    },
    {
      title: "Boost Property Value Instantly",
      desc: "Clean, sealed concrete improves curb appeal and aesthetics.",
    },
  ];

  return (
    <section className="bg-black py-20 px-6 md:px-16">

      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Insights & Expertise
        </h2>
        <p className="text-gray-400 mt-4 max-w-xl mx-auto">
          Industry knowledge to protect and enhance your surfaces.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {data.map((item, i) => (
          <div
            key={i}
            className="bg-white/5 border border-gray-800 rounded-2xl p-8 hover:border-orange-400 transition"
          >
            <h3 className="text-xl font-semibold text-white mb-4">
              {item.title}
            </h3>
            <p className="text-gray-400 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>

    </section>
  );
}
