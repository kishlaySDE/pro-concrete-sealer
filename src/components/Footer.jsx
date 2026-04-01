import { useState } from "react";
import { supabase } from "../lib/supabase";

const footerLinks = {
  Services: ["Concrete Sealing", "Driveway Protection", "Waterproof Coatings", "Epoxy Flooring", "Crack Repair"],
  Company: ["About Us", "Our Projects", "Blog & Insights", "Careers", "Contact"],
  Support: ["Get a Free Quote", "FAQ", "Warranty Info", "Service Areas", "Privacy Policy"],
};

export default function Footer() {
  const [email, setEmail] = useState("");
  const [sub, setSub] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubscribe = async () => {
    if (!email) return;
    setIsSubmitting(true);
    try {
      const { error: dbError } = await supabase.from('email_subscribers').insert([{ email }]);
      if (dbError && dbError.code !== '23505') throw dbError;
      setSub(true);
    } catch (err) {
      console.error('Newsletter error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-gray-900 dark:bg-[#080808] text-white border-t border-gray-800 dark:border-gray-900">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-8 h-8 bg-orange-500 rounded-sm flex items-center justify-center font-black text-white text-sm">P</div>
              <span className="font-black text-lg">
                <span className="text-white">Pro</span>
                <span className="text-orange-500"> Concrete</span>
                <span className="text-gray-300"> Sealer</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-xs">
              Professional-grade concrete sealing and surface protection services. Serving residential and commercial clients since 2014.
            </p>

            {/* Newsletter */}
            <div>
              <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-3">Stay Updated</p>
              {sub ? (
                <p className="text-green-400 text-sm font-medium">✓ You're subscribed!</p>
              ) : (
                <div className="flex gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white text-sm placeholder:text-gray-500 focus:outline-none focus:border-orange-500 transition-colors"
                  />
                  <button
                    disabled={isSubmitting}
                    onClick={handleSubscribe}
                    className="bg-orange-500 hover:bg-orange-600 text-white font-black px-4 py-2 rounded-lg text-xs uppercase transition disabled:opacity-50 min-w-[40px] flex items-center justify-center"
                  >
                    {isSubmitting ? '...' : '→'}
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="font-black text-white text-sm uppercase tracking-widest mb-5">{section}</h4>
              <ul className="space-y-3">
                {links.map(link => {
                  const toLower = link.toLowerCase();
                  let href = "#";
                  if (toLower.includes("about")) href = "#about";
                  else if (toLower.includes("project")) href = "#projects";
                  else if (toLower.includes("quote") || toLower.includes("contact")) href = "#contact";
                  else if (toLower.includes("service")) href = "#services";
                  return (
                    <li key={link}>
                      <a href={href} className="text-gray-500 hover:text-orange-400 text-sm transition-colors">
                        {link}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800 px-6 py-5">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-600">
          <p>© 2025 Pro Concrete Sealer. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gray-400 transition-colors">Terms</a>
            <a href="#" className="hover:text-gray-400 transition-colors">Privacy</a>
            <a href="#" className="hover:text-gray-400 transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
