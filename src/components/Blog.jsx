import { motion } from "framer-motion";
import { staggerContainer, fadeInUp, floatIn } from "../utils/animations";

const posts = [
  { emoji: "🛡️", tag: "Education", date: "Mar 15, 2025", title: "Why Concrete Sealing is Essential for Every Property Owner", excerpt: "Unsealed concrete absorbs water, oil, and chemicals — leading to costly repairs. Here's what you need to know about protecting your investment before it's too late.", read: "4 min read" },
  { emoji: "🔧", tag: "Tips & Tricks", date: "Feb 28, 2025", title: "Top 5 Concrete Maintenance Tips to Extend Surface Life", excerpt: "Simple maintenance habits can double the lifespan of your sealed concrete. From seasonal inspections to cleaning protocols, here's what the pros do.", read: "3 min read" },
  { emoji: "⚗️", tag: "Product Guide", date: "Feb 10, 2025", title: "Epoxy vs. Traditional Sealers: Which Is Right for You?", excerpt: "Not all sealers are created equal. We break down the key differences in durability, aesthetics, cost, and application for residential and commercial projects.", read: "5 min read" }
];

export default function Blog() {
  return (
    <section className="py-24 bg-white dark:bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col items-center text-center gap-4 mb-12"
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 bg-orange-100 dark:bg-orange-900/30 border border-orange-300 dark:border-orange-700 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-orange-600 dark:text-orange-400 mb-2">
            Insights
          </motion.div>
          <motion.h2 variants={fadeInUp} className="font-black text-5xl lg:text-6xl text-gray-900 dark:text-white leading-tight">
            From the <span className="text-orange-500">Field</span>
          </motion.h2>
          <motion.a variants={fadeInUp} href="#" className="text-orange-500 hover:text-orange-600 text-sm font-bold uppercase tracking-wide transition-colors mt-2">
            View All Articles →
          </motion.a>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-6"
        >
          {posts.map((post, i) => (
            <motion.article
              variants={floatIn}
              key={i}
              className="group bg-white dark:bg-[#1e1e1e] border-2 border-gray-100 dark:border-gray-700 rounded-2xl overflow-hidden hover:border-orange-400 hover:-translate-y-2 transition-all duration-300 hover:shadow-xl hover:shadow-orange-100 dark:hover:shadow-orange-900/20 cursor-pointer"
            >
              <div className="bg-orange-50 dark:bg-orange-900/20 p-8 text-5xl group-hover:bg-orange-100 dark:group-hover:bg-orange-900/30 transition-all duration-300">
                {post.emoji}
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 text-xs font-black px-2.5 py-1 rounded-full uppercase tracking-wide">{post.tag}</span>
                  <span className="text-gray-400 dark:text-gray-500 text-xs">{post.date}</span>
                </div>
                <h3 className="font-black text-gray-900 dark:text-white text-base mb-3 leading-tight group-hover:text-orange-500 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between text-xs text-gray-400">
                  <span>{post.read}</span>
                  <span className="group-hover:text-orange-500 transition-colors font-black text-orange-400">Read More →</span>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}