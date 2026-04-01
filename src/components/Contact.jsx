import { useState } from "react";
import { motion } from "framer-motion";
import { staggerContainer, fadeInUp, floatIn } from "../utils/animations";
import { supabase } from "../lib/supabase";

const locations = [
  { flag: "🇮🇳", country: "India", city: "Mumbai, Maharashtra", phone: "+91 98765 43210", email: "india@proconcrete.com" },
  { flag: "🇺🇸", country: "USA", city: "Dallas, Texas", phone: "+1 (800) PRO-SEAL", email: "usa@proconcrete.com" },
  { flag: "🇨🇦", country: "Canada", city: "Toronto, Ontario", phone: "+1 (416) 555-0199", email: "canada@proconcrete.com" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const { error: dbError } = await supabase
        .from('quote_requests')
        .insert([
          { 
            full_name: form.name, 
            phone: form.phone, 
            email: form.email, 
            message: form.message 
          }
        ]);

      if (dbError) throw dbError;
      
      setSent(true);
    } catch (err) {
      console.error('Error submitting form:', err);
      setError('Something went wrong. Please try again or call us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-gray-900 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-red-500/5 blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-yellow-400/5 blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16 flex flex-col items-center"
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/30 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-red-400 mb-4">
            Get In Touch
          </motion.div>
          <motion.h2 variants={fadeInUp} className="font-display font-black text-4xl lg:text-5xl text-white mb-4 text-center">
            Request a <span className="text-orange-500">Free Quote</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-gray-500 max-w-xl text-center">No pressure, no obligation. Just an honest assessment and a competitive price.</motion.p>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid lg:grid-cols-5 gap-12"
        >
          {/* Form */}
          <motion.div variants={floatIn} className="lg:col-span-3">
            {sent ? (
              <div className="bg-gradient-to-br from-green-500/20 to-green-500/5 border border-green-500/30 rounded-2xl p-12 text-center">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="font-display font-black text-2xl text-white mb-2">Message Sent!</h3>
                <p className="text-gray-400">We'll get back to you within 1 business day with a free quote.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-gray-400 text-xs font-bold uppercase tracking-widest mb-2">Full Name *</label>
                    <input
                      required
                      type="text"
                      value={form.name}
                      onChange={e => setForm({...form, name: e.target.value})}
                      placeholder="Kishlay Raj"
                      className="w-full bg-gray-950 border border-gray-700 rounded-xl px-4 py-3 text-white text-sm placeholder:text-gray-600 focus:outline-none focus:border-red-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 text-xs font-bold uppercase tracking-widest mb-2">Phone Number *</label>
                    <input
                      required
                      type="tel"
                      value={form.phone}
                      onChange={e => setForm({...form, phone: e.target.value})}
                      placeholder="+1 (111) 000-7047"
                      className="w-full bg-gray-950 border border-gray-700 rounded-xl px-4 py-3 text-white text-sm placeholder:text-gray-600 focus:outline-none focus:border-red-500 transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-400 text-xs font-bold uppercase tracking-widest mb-2">Email Address *</label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={e => setForm({...form, email: e.target.value})}
                    placeholder="kishlay258@gmail.com"
                    className="w-full bg-gray-950 border border-gray-700 rounded-xl px-4 py-3 text-white text-sm placeholder:text-gray-600 focus:outline-none focus:border-red-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 text-xs font-bold uppercase tracking-widest mb-2">Project Details</label>
                  <textarea
                    rows={5}
                    value={form.message}
                    onChange={e => setForm({...form, message: e.target.value})}
                    placeholder="Describe your project - surface type, approximate size, location, timeline."
                    className="w-full bg-gray-950 border border-gray-700 rounded-xl px-4 py-3 text-white text-sm placeholder:text-gray-600 focus:outline-none focus:border-red-500 transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-orange-500 text-white font-black py-4 rounded-xl hover:scale-[1.02] hover:shadow-2xl hover:shadow-orange-500/30 transition-all duration-200 uppercase tracking-wide text-sm disabled:opacity-50 disabled:hover:scale-100 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending Request...' : 'Request a Free Quote →'}
                </button>
                {error && <p className="text-red-500 text-sm text-center mt-2">{error}</p>}
              </form>
            )}
          </motion.div>

          {/* Right info */}
          <motion.div variants={floatIn} className="lg:col-span-2 space-y-6 flex flex-col h-full">
            <div className="bg-gray-950 border border-gray-800 rounded-2xl p-6 flex flex-col">
              <h3 className="font-display font-black text-white text-lg mb-5">Our Locations</h3>
              <div className="space-y-5 mb-6">
                {locations.map((loc, i) => (
                  <div key={i} className="flex gap-3 pb-5 border-b border-gray-800 last:border-0 last:pb-0">
                    <span className="text-2xl">{loc.flag}</span>
                    <div>
                      <div className="font-bold text-white text-sm">{loc.country}</div>
                      <div className="text-gray-500 text-xs mb-1">{loc.city}</div>
                      <div className="text-red-400 text-xs font-medium">{loc.phone}</div>
                      <div className="text-gray-500 text-xs">{loc.email}</div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Google Maps Integration - Default Dallas, TX */}
              <div className="w-full h-48 rounded-xl overflow-hidden border border-gray-800 shrink-0">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d214631.97746816918!2d-96.89209594042878!3d32.81056586389255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c19f77b45974b%3A0xb9ec9ba4f647678f!2sDallas%2C%20TX!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{border: 0}} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="office-location"
                ></iframe>
              </div>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 shrink-0 mt-auto">
              <div className="font-display font-black text-white text-lg mb-2">⚡ Fast Response</div>
              <p className="text-gray-400 text-sm leading-relaxed">We respond to all quote requests within 4 business hours. Emergency services available 24/7.</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}