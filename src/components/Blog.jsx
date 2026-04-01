const posts = [
  {
    emoji: "🛡️",
    tag: "Education",
    date: "Mar 15, 2025",
    title: "Why Concrete Sealing is Essential for Every Property Owner",
    excerpt: "Unsealed concrete absorbs water, oil, and chemicals — leading to costly repairs. Here's what you need to know about protecting your investment before it's too late.",
    read: "4 min read"
  },
  {
    emoji: "🔧",
    tag: "Tips & Tricks",
    date: "Feb 28, 2025",
    title: "Top 5 Concrete Maintenance Tips to Extend Surface Life",
    excerpt: "Simple maintenance habits can double the lifespan of your sealed concrete. From seasonal inspections to cleaning protocols, here's what the pros do.",
    read: "3 min read"
  },
  {
    emoji: "⚗️",
    tag: "Product Guide",
    date: "Feb 10, 2025",
    title: "Epoxy vs. Traditional Sealers: Which Is Right for You?",
    excerpt: "Not all sealers are created equal. We break down the key differences in durability, aesthetics, cost, and application for residential and commercial projects.",
    read: "5 min read"
  }
];

export default function Blog() {
  return (
    <section className="py-24 bg-gray-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center gap-4 mb-12">
          <div className="inline-flex items-center gap-2 bg-gray-800 border border-gray-700 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">
            Insights
          </div>
          <h2 className="font-display font-black text-4xl lg:text-5xl text-white">
            From the <span className="text-orange-500">Field</span>
          </h2>
          <a href="#" className="text-orange-500 hover:text-orange-400 text-sm font-bold uppercase tracking-wide transition-colors mt-2">
            View All Articles →
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <article
              key={i}
              className="group bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden hover:border-gray-600 hover:-translate-y-1 transition-all duration-300 hover:shadow-2xl cursor-pointer"
            >
              <div className="bg-gray-800 p-8 text-5xl group-hover:bg-gray-700 transition-all duration-300">
                {post.emoji}
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-red-500/20 text-red-400 text-xs font-bold px-2.5 py-1 rounded-full">{post.tag}</span>
                  <span className="text-gray-600 text-xs">{post.date}</span>
                </div>
                <h3 className="font-display font-black text-white text-base mb-3 leading-tight group-hover:text-yellow-400 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between text-xs text-gray-600">
                  <span>{post.read}</span>
                  <span className="group-hover:text-red-400 transition-colors font-bold">Read More →</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}