import { useState } from "react";
import { motion } from "framer-motion";
import { staggerContainer, fadeInUp, floatIn } from "../utils/animations";
import { supabase } from "../lib/supabase";
import emailjs from '@emailjs/browser';

// Initialize EmailJS
emailjs.init('QReouiaQymcMUwE2P....');

const locations = [
  { flag: "🇨🇦", country: "Canada", city: "Edmonton, Alberta", phone: "+1 (825) 889-0005", email: "Prosealer780@gmail.com" },
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
      const { error: dbError } = await supabase.from('quote_requests').insert([{ full_name: form.name, phone: form.phone, email: form.email, message: form.message }]);
      if (dbError) throw dbError;

      // Send email via EmailJS
      try {
        await emailjs.send(
          'service_jilb7dp',
          'template_3rjazye',
          {
            from_name: form.name,
            from_email: form.email,
            phone: form.phone,
            message: form.message,
          }
        );
      } catch (emailError) {
        console.error('Email sending failed:', emailError);
        // Don't throw error, as data is saved
      }

      setSent(true);
    } catch (err) {
      console.error('Error submitting form:', err);
      setError('Something went wrong. Please try again or call us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#f5f5f5] dark:bg-[#1a1a1a] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-orange-500/5 blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-orange-500/5 blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16 flex flex-col items-center"
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 bg-orange-100 dark:bg-orange-900/30 border border-orange-300 dark:border-orange-700 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-orange-600 dark:text-orange-400 mb-4">
            Get In Touch
          </motion.div>
          <motion.h2 variants={fadeInUp} className="font-black text-5xl lg:text-6xl text-gray-900 dark:text-white mb-4 text-center leading-tight">
            Request a <span className="text-orange-500">Free Quote</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-gray-500 dark:text-gray-400 max-w-xl text-center text-lg">No pressure, no obligation. Just an honest assessment and a competitive price.</motion.p>
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
              <div className="bg-green-50 dark:bg-green-900/20 border-2 border-green-400 rounded-2xl p-12 text-center">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="font-black text-2xl text-gray-900 dark:text-white mb-2">Message Sent!</h3>
                <p className="text-gray-500 dark:text-gray-400">We'll get back to you within 1 business day with a free quote.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-gray-700 dark:text-gray-300 text-xs font-black uppercase tracking-widest mb-2">Full Name *</label>
                    <input required type="text" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Your Name"
                      className="w-full bg-white dark:bg-[#1e1e1e] border-2 border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 text-gray-900 dark:text-white text-sm placeholder:text-gray-400 focus:outline-none focus:border-orange-500 transition-colors" />
                  </div>
                  <div>
                    <label className="block text-gray-700 dark:text-gray-300 text-xs font-black uppercase tracking-widest mb-2">Phone Number *</label>
                    <input required type="tel" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} placeholder="+1 (111) 000-7047"
                      className="w-full bg-white dark:bg-[#1e1e1e] border-2 border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 text-gray-900 dark:text-white text-sm placeholder:text-gray-400 focus:outline-none focus:border-orange-500 transition-colors" />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700 dark:text-gray-300 text-xs font-black uppercase tracking-widest mb-2">Email Address *</label>
                  <input required type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="you@example.com"
                    className="w-full bg-white dark:bg-[#1e1e1e] border-2 border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 text-gray-900 dark:text-white text-sm placeholder:text-gray-400 focus:outline-none focus:border-orange-500 transition-colors" />
                </div>
                <div>
                  <label className="block text-gray-700 dark:text-gray-300 text-xs font-black uppercase tracking-widest mb-2">Project Details</label>
                  <textarea rows={5} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} placeholder="Describe your project - surface type, approximate size, location, timeline."
                    className="w-full bg-white dark:bg-[#1e1e1e] border-2 border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 text-gray-900 dark:text-white text-sm placeholder:text-gray-400 focus:outline-none focus:border-orange-500 transition-colors resize-none" />
                </div>
                <button type="submit" disabled={isSubmitting}
                  className="w-full bg-orange-500 text-white font-black py-4 rounded-xl hover:scale-[1.02] hover:shadow-2xl hover:shadow-orange-500/30 transition-all duration-200 uppercase tracking-wide text-sm disabled:opacity-50 disabled:hover:scale-100 disabled:cursor-not-allowed">
                  {isSubmitting ? 'Sending Request...' : 'Request a Free Quote →'}
                </button>
                {error && <p className="text-red-500 text-sm text-center mt-2">{error}</p>}
              </form>
            )}
          </motion.div>

          {/* Right info */}
          <motion.div variants={floatIn} className="lg:col-span-2 space-y-6">
            <div className="bg-white dark:bg-[#1e1e1e] border-2 border-gray-200 dark:border-gray-700 rounded-2xl p-6">
              <h3 className="font-black text-gray-900 dark:text-white text-lg mb-5">Our Locations</h3>
              <div className="space-y-5">
                {locations.map((loc, i) => (
                  <div key={i} className="flex gap-3 pb-5 border-b border-gray-200 dark:border-gray-700 last:border-0 last:pb-0">
                    <span className="text-2xl">{loc.flag}</span>
                    <div>
                      <div className="font-black text-gray-900 dark:text-white text-sm">{loc.country}</div>
                      <div className="text-gray-500 dark:text-gray-400 text-xs mb-1">{loc.city}</div>
                      <div className="text-orange-500 text-xs font-bold">{loc.phone}</div>
                      <div className="text-gray-500 dark:text-gray-400 text-xs">{loc.email}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-orange-500 rounded-2xl p-6 text-white">
              <div className="text-3xl mb-3">📞</div>
              <h3 className="font-black text-lg mb-2">Prefer to Call?</h3>
              <p className="text-orange-100 text-sm mb-4">Our team is available Mon–Sat, 8am–6pm across all time zones.</p>
              <a href="tel:+1 (825) 889-0005" className="inline-block bg-white text-orange-600 font-black px-5 py-2.5 rounded-xl text-sm hover:bg-orange-50 transition">
                +1 (800) PRO-SEAL
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}