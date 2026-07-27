import Link from "next/link";
import { notFound } from "next/navigation";

// Static lookup to mimic fetch requests for explicit article information
const getArticleData = (slug) => {
  const repository = {
    "launching-phase-1-digital-identity": {
      title: "Launching Phase 1: FLIPGATE's Digital Identity and Vision",
      date: "July 5, 2026",
      category: "Announcements",
      content:
        "FLIPGATE LTD is scaling up operations to build a fully sustainable ecosystem. Phase 1 focuses on designing an absolute authority system for digital identification, community interface, and communication tracking. By building a high-speed modular frontend using tools like Next.js, we eliminate complete structural rebuild bottlenecks when transitioning into Phase 2 systems (Crowdfunding, Interactive Management Channels, and Digital Identity Vaults).",
    },
    "pillars-of-national-reorientation": {
      title: "The Pillars of National Reorientation: God, Law, and Governance",
      date: "June 28, 2026",
      category: "Insights",
      content:
        "Societal transformation is impossible without deliberate moral architectures and administrative boundaries. The core values of FLIPGATE—God, Law, Governance, Poetry & Education—serve as cohesive blueprints for sustainable institutional engineering. Our platform works to align digital assets with localized impact models that transform ideas into direct community developments.",
    },
    "empowering-next-generation-skills": {
      title: "Empowering the Next Generation via Skills and Strategic Training",
      date: "June 14, 2026",
      category: "Education",
      content:
        "Education is more than theory; it requires strategic optimization pipelines that give individuals immediate global leverage. This publication covers the foundational frameworks FLIPGATE is establishing behind the scenes to support automated verified learning tracks, interactive workshops, and developer resource pipelines across the continent.",
    },
  };

  return repository[slug] || null;
};

// Next.js Metadata Generator for Search Engine Optimization (SEO)
export async function generateMetadata({ params }) {
  const article = getArticleData(params.slug);
  if (!article) return { title: "Article Not Found" };

  return {
    title: `${article.title} | FLIPGATE Insights`,
    description: article.content.substring(0, 160),
  };
}

export default function ArticleView({ params }) {
  const article = getArticleData(params.slug);

  // Trigger standard Next.js 404 page if route does not exist
  if (!article) {
    notFound();
  }

  return (
    <article className="w-full min-h-screen bg-white py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Back Link */}
        <div className="mb-8">
          <Link
            href="/news"
            className="text-sm font-semibold text-[#046A55] hover:text-[#00E63A] transition-colors"
          >
            &larr; Back to News Hub
          </Link>
        </div>

        {/* Article Meta Headers */}
        <div className="flex items-center gap-4 mb-4">
          <span className="text-xs font-bold text-[#046A55] uppercase tracking-wider bg-[#F4FDF9] px-3 py-1 rounded-full">
            {article.category}
          </span>
          <span className="text-sm text-gray-500">{article.date}</span>
        </div>

        <h1 className="text-3xl md:text-5xl font-extrabold text-[#1F2937] mb-8 leading-tight">
          {article.title}
        </h1>

        {/* Main Body Text Container */}
        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6 border-t border-gray-100 pt-8">
          <p>{article.content}</p>
        </div>

        {/* Bottom CTA Card */}
        <div className="mt-16 p-8 bg-[#F4FDF9] rounded-2xl border border-gray-100 text-center">
          <h3 className="text-lg font-bold text-[#046A55] mb-2">
            Want to track more updates?
          </h3>
          <p className="text-sm text-gray-600 mb-6">
            Join our newsletter tracking pipeline directly from our connection
            layout.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#046A55] text-white font-bold px-6 py-3 rounded-lg hover:bg-[#00E63A] hover:text-[#046A55] transition"
          >
            Subscribe via WhatsApp
          </Link>
        </div>
      </div>
    </article>
  );
}
