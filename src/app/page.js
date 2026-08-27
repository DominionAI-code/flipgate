import Link from "next/link";
import { programsList } from "@/lib/programs";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-white">
      {/* --- HERO SECTION --- */}
      <section className="relative bg-[#046A55] text-white py-24 md:py-36 overflow-hidden">
        {/* Abstract Background Design Elements */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute -top-10 -left-10 w-96 h-96 rounded-full border-2 border-white"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full border-2 border-white"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="text-[#00E63A] font-semibold tracking-wider uppercase text-sm block mb-3">
              Introducing Flipgate Ltd
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
              Inspiring National Reorientation &{" "}
              <span className="text-[#00E63A]">Sustainable Impact.</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed">
              We are a purpose-driven organization dedicated to community
              development, empowering individuals through structural skills, and
              building a transformative digital ecosystem across Nigeria and
              beyond.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/volunteers"
                className="inline-block text-center bg-[#00E63A] text-[#046A55] font-bold px-8 py-4 rounded-md shadow-lg hover:bg-white hover:text-[#046A55] transition-all duration-300"
              >
                Join As A Volunteer
              </Link>
              <Link
                href="/about"
                className="inline-block text-center border-2 border-white text-white font-semibold px-8 py-4 rounded-md hover:bg-white hover:text-[#046A55] transition-all duration-300"
              >
                Explore Our Vision
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* --- CORE PILLARS SECTION --- */}
      <section className="py-20 bg-[#F4FDF9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F2937] mb-4">
              Our Foundational Pillars
            </h2>
            <div className="h-1 w-20 bg-[#00E63A] mx-auto mb-4 rounded"></div>
            <p className="text-gray-600">
              The core principles driving our mission towards transformation and
              societal change.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {programsList.map((program) => (
              <Link
                key={program.slug}
                href={`/programs/${program.slug}`}
                className="group bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                <div className="text-xs font-bold text-[#00E63A]/80 tracking-widest uppercase mb-2">
                  {program.pillarLabel}
                </div>
                <h3 className="text-xl font-bold text-[#046A55] mb-3">
                  {program.navTitle}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                  {program.tagline}
                </p>
                <span className="mt-4 text-sm font-semibold text-[#046A55] group-hover:text-[#00E63A] transition-colors">
                  Learn more &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* --- BRIEF MISSION TEASER --- */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1F2937] mb-6">
            Ready to make a sustainable difference?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
            Phase 1 is laying the technical groundwork for a massive digital
            framework including crowdfunding, verified training certification,
            and interactive strategic corporate pipelines.
          </p>
          <Link
            href="/contact"
            className="inline-block text-[#046A55] font-bold hover:text-[#00E63A] underline underline-offset-8 transition-colors"
          >
            Get in Touch With Us &rarr;
          </Link>
        </div>
      </section>
    </div>
  );
}
