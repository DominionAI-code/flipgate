import Link from "next/link";

export default function About() {
  const values = [
    {
      name: "Integrity",
      desc: "Absolute ethical transparency across civic reorientation frameworks.",
    },
    {
      name: "Empowerment",
      desc: "Providing accessible, high-yield tools, education, and development opportunities.",
    },
    {
      name: "Sustainability",
      desc: "Engineering social solutions with robust digital foundations for long-term scalability.",
    },
    {
      name: "Community Focus",
      desc: "Prioritizing localized growth patterns to lift people across Nigeria and beyond.",
    },
  ];

  const programs = [
    {
      title: "Civic & Moral Reorientation",
      desc: "Deliberate engagement campaigns aimed at restoring core ethical values, legal adherence, and clean administrative mindset patterns.",
    },
    {
      title: "Skills Acquisition & Professional Training",
      desc: "Structured training channels designed to empower youth with competitive, futureproof competencies to excel in the global labor market.",
    },
    {
      title: "Digital Ecosystem Incubation",
      desc: "Laying technical pipelines for upcoming crowdfunding, secure micro-certifications, and collaborative public partnership systems.",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-white">
      {/* --- TOP PROFILE HERO --- */}
      <section className="bg-[#046A55] text-white py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[#00E63A] font-bold uppercase tracking-wider text-xs block mb-2">
            Our Corporate Manifesto
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6">
            About FLIPE LTD
          </h1>
          <p className="text-lg text-white/90 max-w-3xl mx-auto leading-relaxed">
            FLIPE LTD is a purpose-driven organization built to spearhead
            structural national reorientation, advance community development,
            and empower individuals through sustainable, world-class technical
            ecosystems.
          </p>
        </div>
      </section>

      {/* --- VISION & MISSION STRATEGY blocks --- */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-[#F4FDF9] p-8 md:p-10 rounded-2xl border border-gray-100 flex flex-col justify-between">
            <div>
              <div className="text-xs font-bold text-[#046A55] uppercase tracking-widest mb-2">
                The Ultimate Goal
              </div>
              <h2 className="text-2xl font-bold text-[#1F2937] mb-4">
                Our Vision
              </h2>
              <p className="text-gray-600 leading-relaxed">
                To inspire nationwide civic transformation and establish a
                highly scalable digital network that empowers grassroots
                communities, optimizes human capital, and seeds sustainable
                social change across developing regions.
              </p>
            </div>
            <div className="h-1.5 w-16 bg-[#00E63A] mt-6 rounded"></div>
          </div>

          <div className="bg-[#F4FDF9] p-8 md:p-10 rounded-2xl border border-gray-100 flex flex-col justify-between">
            <div>
              <div className="text-xs font-bold text-[#046A55] uppercase tracking-widest mb-2">
                The Action Plan
              </div>
              <h2 className="text-2xl font-bold text-[#1F2937] mb-4">
                Our Mission
              </h2>
              <p className="text-gray-600 leading-relaxed">
                To build modern, accessible digital identities and deployment
                infrastructures that clearly communicate values, streamline
                volunteer mobilization, attract global strategic collaborators,
                and deliver impactful, structural training programs.
              </p>
            </div>
            <div className="h-1.5 w-16 bg-[#046A55] mt-6 rounded"></div>
          </div>
        </div>
      </section>

      {/* --- MEET OUR TEAM --- */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Heading */}
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-[#046A55] font-bold uppercase tracking-widest text-xs">
              The People Behind the Mission
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-[#1F2937] mt-3 mb-4">
              Meet Our Team
            </h2>

            <div className="h-1 w-16 bg-[#00E63A] mx-auto mb-6"></div>

            <p className="text-gray-600 leading-relaxed">
              FLIPE LTD is driven by a multidisciplinary team committed to
              building meaningful solutions, empowering communities, and
              advancing sustainable social and digital development.
            </p>
          </div>

          {/* Team Members */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Kemi",
                role: "Executive & Programme Lead",
                image: "/kemi.png",
                bio: "Provides strategic direction and supports the development and execution of initiatives that advance FLIPE LTD's social impact objectives.",
              },
              {
                name: "Eri",
                role: "Operations & Partnerships",
                image: "/eri.png",
                bio: "Supports operational coordination and stakeholder engagement, helping transform organizational objectives into effective programmes and partnerships.",
              },
              {
                name: "Ayooluwa John Adebisi",
                role: "Technology & Digital Strategy Lead",
                image: "/ayo.png",
                bio: "Leads the organization's technology strategy and digital infrastructure, driving the development of scalable solutions that support FLIPE LTD's long-term objectives.",
              },
            ].map((member, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                {/* Image */}
                <div className="relative bg-[#F4FDF9] overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-[360px] object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#00E63A]"></div>
                </div>

                {/* Content */}
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-[#1F2937] mb-1">
                    {member.name}
                  </h3>

                  <p className="text-[#046A55] text-sm font-semibold mb-4">
                    {member.role}
                  </p>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Team Statement */}
          <div className="max-w-3xl mx-auto mt-14 text-center">
            <p className="text-sm md:text-base text-gray-500 leading-relaxed">
              Our strength lies in collaboration. By bringing together strategic
              leadership, operational expertise, community engagement, and
              technology, we work collectively to create solutions that are
              practical, scalable, and built for lasting impact.
            </p>
          </div>
        </div>
      </section>

      {/* --- CORE CORPORATE VALUES --- */}
      <section className="py-20 bg-[#F4FDF9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-[#1F2937] mb-4">
              Our Core Values
            </h2>
            <div className="h-1 w-16 bg-[#00E63A] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm"
              >
                <h3 className="text-lg font-bold text-[#046A55] mb-2">
                  {v.name}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- DETAILED CORE PROGRAMS --- */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#1F2937] mb-4">
              Our Action Programs
            </h2>
            <p className="text-gray-500 text-sm">
              Strategic operational pillars deployed to enforce sustainable
              local evolution.
            </p>
          </div>

          <div className="space-y-6">
            {programs.map((p, idx) => (
              <div
                key={idx}
                className="p-6 md:p-8 bg-white border border-gray-100 rounded-xl shadow-sm hover:border-[#046A55]/20 transition-all"
              >
                <h3 className="text-xl font-bold text-[#046A55] mb-2">
                  {p.title}
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom Call to Action Line */}
          <div className="mt-16 text-center">
            <Link
              href="/volunteers"
              className="inline-block bg-[#046A55] text-white font-bold px-8 py-4 rounded-lg shadow-md hover:bg-[#00E63A] hover:text-[#046A55] transition-all"
            >
              Partner With Us Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
