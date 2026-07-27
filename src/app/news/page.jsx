import Link from "next/link";

// Mock data array simulating content retrieved from an API or database
const dummyArticles = [
  {
    title: "Launching Phase 1: FLIPGATE's Digital Identity and Vision",
    slug: "launching-phase-1-digital-identity",
    excerpt:
      "Discover how FLIPGATE LTD is establishing a world-class digital ecosystem starting with structural national reorientation platforms.",
    date: "July 5, 2026",
    category: "Announcements",
  },
  {
    title: "The Pillars of National Reorientation: God, Law, and Governance",
    slug: "pillars-of-national-reorientation",
    excerpt:
      "An in-depth look at how structured corporate principles and civic guidelines drive sustainable community impact.",
    date: "June 28, 2026",
    category: "Insights",
  },
  {
    title: "Empowering the Next Generation via Skills and Strategic Training",
    slug: "empowering-next-generation-skills",
    excerpt:
      "How our upcoming Phase 2 training and certification modules plan to scale micro-development across Nigeria.",
    date: "June 14, 2026",
    category: "Education",
  },
];

export default function NewsHub() {
  return (
    <div className="w-full min-h-screen bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-extrabold text-[#046A55] mb-4">
            News & Insights
          </h1>
          <div className="h-1 w-20 bg-[#00E63A] mx-auto mb-4 rounded"></div>
          <p className="text-gray-600 max-w-xl mx-auto">
            Stay updated with official publications, strategy disclosures, and
            development stories from FLIPGATE.
          </p>
        </div>

        {/* Responsive Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dummyArticles.map((article) => (
            <article
              key={article.slug}
              className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="p-6">
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-xs font-bold text-[#046A55] uppercase tracking-wider bg-[#F4FDF9] px-3 py-1 rounded-full">
                    {article.category}
                  </span>
                  <span className="text-xs text-gray-400">{article.date}</span>
                </div>

                <h2 className="text-xl font-bold text-[#1F2937] mb-3 hover:text-[#046A55] transition-colors">
                  <Link href={`/news/${article.slug}`}>{article.title}</Link>
                </h2>

                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {article.excerpt}
                </p>
              </div>

              <div className="px-6 pb-6 pt-0">
                <Link
                  href={`/news/${article.slug}`}
                  className="inline-flex items-center text-sm font-bold text-[#046A55] hover:text-[#00E63A] transition-colors"
                >
                  Read Full Article &rarr;
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
