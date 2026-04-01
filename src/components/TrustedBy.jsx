const clients = [
  "HomeDepot Partner",
  "BuildRight Co.",
  "UrbanSpace LLC",
  "CityPave Inc.",
  "GroundWorks",
  "MetroBuild",
  "SteelFrame Corp",
  "UrbanLiving",
];

export default function TrustedBy() {
  return (
    <section className="w-full bg-black border-y border-gray-800 py-10 overflow-hidden">

      {/* Heading */}
      <p className="text-center text-gray-400 text-xs uppercase tracking-widest font-bold mb-8">
        Trusted by Leading Companies
      </p>

      {/* Slider */}
      <div className="relative w-full overflow-hidden">

        <div className="flex w-max animate-scroll gap-10 px-6">

          {[...clients, ...clients].map((c, i) => (
            <div
              key={i}
              className="bg-white/90 text-black rounded-xl px-6 py-3 flex items-center gap-2 font-semibold text-sm uppercase tracking-wide min-w-[200px] justify-center shadow-md"
            >
              <span className="w-2 h-2 rounded-full bg-orange-500" />
              {c}
            </div>
          ))}

        </div>
      </div>

      {/* Animation */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .animate-scroll {
          animation: scroll 25s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}