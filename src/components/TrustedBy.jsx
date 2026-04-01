const clients = [
  { name: "MetroBuild", abbr: "MB" },
  { name: "SteelFrame Corp", abbr: "SF" },
  { name: "UrbanLiving", abbr: "UL" },
  { name: "HomeDepot Partner", abbr: "HD" },
  { name: "BuildRight Co.", abbr: "BR" },
  { name: "CityPave Inc.", abbr: "CP" },
  { name: "GroundWorks", abbr: "GW" },
  { name: "ProSeal Alliance", abbr: "PS" },
];

export default function TrustedBy() {
  const all = [...clients, ...clients, ...clients];

  return (
    <section className="w-full overflow-hidden bg-[#1a1a2e] dark:bg-[#050510]" style={{ borderBottom: "3px solid #f97316" }}>

      {/* Heading */}
      <p className="text-center text-white text-base font-semibold py-5 tracking-wide">
        Our Brand Work for
      </p>

      {/* Divider */}
      <div className="w-full h-px bg-gray-700/50" />

      {/* Slider track */}
      <div className="relative w-full overflow-hidden py-5">
        {/* Edge fades */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#1a1a2e] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#1a1a2e] to-transparent z-10 pointer-events-none" />

        <div className="flex w-max animate-trusted gap-5">
          {all.map((c, i) => (
            <div
              key={i}
              className="bg-white rounded-xl flex items-center gap-3 px-6 py-4 shrink-0 shadow-lg"
              style={{ minWidth: 180 }}
            >
              {/* Letter logo placeholder */}
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center text-white font-black text-sm shrink-0"
                style={{ background: `hsl(${(i * 47) % 360}, 60%, 45%)` }}
              >
                {c.abbr}
              </div>
              <span className="text-gray-800 font-bold text-sm leading-tight">{c.name}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes trusted {
          0%   { transform: translateX(0); }
          100% { transform: translateX(calc(-33.333% - 7px)); }
        }
        .animate-trusted {
          animation: trusted 28s linear infinite;
        }
        .animate-trusted:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}