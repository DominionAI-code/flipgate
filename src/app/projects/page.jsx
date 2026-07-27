import Link from "next/link";

const projects = [
  {
    id: "national-reorientation-campaign",
    title: "The National Reorientation Initiative",
    pillar: "God & Governance",
    status: "Active Campaign",
    description:
      "A country-wide civic alignment program designed to restore moral accountability, ethical leadership, and communal responsibility. Through localized town halls and digital content pipelines, we push for structural mind-shift transformations across all levels of society.",
    impact: "Over 15 localized communities engaged across regional hubs.",
  },
  {
    id: "civic-education-legal-awareness",
    title: "Project Jurisprudence & Civic Literacy",
    pillar: "Law & Education",
    status: "Ongoing Program",
    description:
      "Democratizing legal literacy and constitutional awareness for ordinary citizens. This program breaks down foundational laws, civil rights, and community governance guidelines into accessible, multilingual educational toolkits.",
    impact:
      "Distributed thousands of free digital civic guidelines and handbooks.",
  },
  {
    id: "poetry-cultural-empowerment-hubs",
    title: "Syllables of Change: Creative Arts & Skills Hubs",
    pillar: "Poetry & Education",
    status: "Deploying Phase 1",
    description:
      "Harnessing the emotional and intellectual power of poetry, literature, and creative arts to drive advocacy. These hubs double as skill acquisition incubators where youth are trained in modern technical skills, media management, and communication.",
    impact:
      "Empowering youth to merge cultural advocacy with digital livelihood infrastructure.",
  },
];

export default function Projects() {
  return (
    <div className="w-full min-h-screen bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-extrabold text-[#046A55] mb-4">
            Our Strategic Projects
          </h1>
          <div className="h-1 w-20 bg-[#00E63A] mx-auto mb-4 rounded"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore how FLIPGATE LTD turns structural values into direct,
            sustainable field projects and digital transformation pipelines.
          </p>
        </div>

        {/* Projects Layout Stack */}
        <div className="space-y-12">
          {projects.map((project, idx) => (
            <div
              key={project.id}
              className={`flex flex-col lg:flex-row gap-8 items-stretch p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all bg-white ${
                idx % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Visual Decorative Identifier */}
              <div className="w-full lg:w-1/3 bg-[#F4FDF9] rounded-xl p-8 flex flex-col justify-between border-l-4 border-[#00E63A]">
                <div>
                  <span className="text-xs font-bold text-[#046A55] uppercase tracking-widest bg-white shadow-sm px-3 py-1 rounded-full border border-gray-100">
                    {project.pillar}
                  </span>
                  <h3 className="text-2xl font-bold text-[#046A55] mt-4">
                    {project.title}
                  </h3>
                </div>
                <div className="mt-6">
                  <span className="inline-block text-xs font-semibold px-2.5 py-1 rounded-md bg-[#00E63A]/10 text-[#046A55]">
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Core Project Copy */}
              <div className="w-full lg:w-2/3 flex flex-col justify-between">
                <div>
                  <h4 className="text-lg font-bold text-[#1F2937] mb-2">
                    Project Overview
                  </h4>
                  <p className="text-gray-600 leading-relaxed text-base mb-6">
                    {project.description}
                  </p>

                  <div className="bg-[#F4FDF9]/50 p-4 rounded-lg border border-[#046A55]/5">
                    <span className="text-xs font-bold text-[#046A55] block mb-1 uppercase tracking-wider">
                      Recorded Impact Focus
                    </span>
                    <p className="text-sm font-medium text-[#1F2937]">
                      {project.impact}
                    </p>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-gray-50 flex items-center justify-between">
                  <Link
                    href="/volunteers"
                    className="bg-[#046A55] text-white font-bold px-6 py-3 rounded-lg text-sm hover:bg-[#00E63A] hover:text-[#046A55] transition shadow-sm"
                  >
                    Support This Initiative
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
