import Link from "next/link";
import { notFound } from "next/navigation";
import { programs, programsList } from "@/lib/programs";
import Breadcrumbs from "@/components/Breadcrumbs";
import ProgramSwitcher from "@/components/ProgramSwitcher";
import GateRail from "@/components/GateRail";
import {
  programIcons,
  CheckCircleIcon,
  ArrowRightIcon,
} from "@/components/icons";

export function generateStaticParams() {
  return programsList.map((program) => ({ slug: program.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const program = programs[slug];
  if (!program) return {};
  return {
    title: `${program.title} | Our Programs`,
    description: program.tagline,
  };
}

export default async function ProgramPage({ params }) {
  const { slug } = await params;
  const program = programs[slug];
  if (!program) notFound();

  const Icon = programIcons[program.slug];
  const otherPrograms = programsList.filter((p) => p.slug !== program.slug);

  return (
    <main className="bg-[#F4FDF9] min-h-screen">
      {/* Utility bar: breadcrumbs + switcher */}
      <div className="border-b border-gray-100 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col gap-4">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Programs", href: "/#programs" },
              { label: program.navTitle },
            ]}
          />
          <ProgramSwitcher activeSlug={program.slug} />
        </div>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-12 items-center">
          <div>
            <GateRail className="mb-6" />
            <div className="text-xs font-bold text-[#046A55] tracking-widest uppercase mb-3">
              {program.pillarLabel} &middot; Flipgate Programs
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#1F2937] mb-6 tracking-tight leading-[1.1]">
              {program.title}
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
              {program.heroDesc}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href={`/enroll?program=${program.slug}`}
                className="inline-flex items-center gap-2 bg-[#046A55] hover:bg-[#00E63A] text-white font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                Enroll in {program.navTitle}
                <ArrowRightIcon className="w-4 h-4" />
              </Link>
              <a
                href="#details"
                className="inline-flex items-center gap-2 border border-gray-300 text-gray-700 hover:border-[#046A55] hover:text-[#046A55] font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                Read the details
              </a>
            </div>
          </div>

          {/* Icon panel */}
          <div className="hidden md:flex w-40 h-40 rounded-2xl bg-[#046A55] items-center justify-center shrink-0 shadow-lg shadow-[#046A55]/20">
            {Icon && (
              <Icon className="w-16 h-16 text-white" strokeWidth={1.5} />
            )}
          </div>
        </div>
      </section>

      <div id="details">
        {/* Crowdfunding categories */}
        {program.type === "crowdfunding" && (
          <section className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl font-bold text-[#1F2937] mb-8">
                Two Ways to Access Funding
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {program.categories.map((cat) => (
                  <div
                    key={cat.title}
                    className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
                  >
                    <h3 className="text-xl font-bold text-[#046A55] mb-3">
                      {cat.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {cat.desc}
                    </p>
                    <ul className="space-y-3">
                      {cat.points.map((point) => (
                        <li
                          key={point}
                          className="flex items-start gap-3 text-sm text-gray-600"
                        >
                          <CheckCircleIcon className="w-4 h-4 text-[#00E63A] mt-0.5 shrink-0" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Training skills grid */}
        {program.type === "training" && (
          <section className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl font-bold text-[#1F2937] mb-8">
                Hands-on Skills Offered
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {program.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-[#046A55]/30 hover:shadow-md transition-all"
                  >
                    <h3 className="text-lg font-bold text-[#046A55] mb-2">
                      {skill.name}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {skill.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Shared prose sections */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-y border-gray-100">
          <div className="max-w-3xl mx-auto space-y-12">
            {program.sections.map((sec) => (
              <div key={sec.heading} className="flex gap-5">
                <div className="w-1 shrink-0 rounded-full bg-[#00E63A]/40" />
                <div>
                  <h2 className="text-xl font-bold text-[#1F2937] mb-3">
                    {sec.heading}
                  </h2>
                  <p className="text-gray-600 leading-relaxed">{sec.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Explore other pillars */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl font-bold text-[#1F2937] mb-6">
            Explore the Other Pillars
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {otherPrograms.map((p) => {
              const OtherIcon = programIcons[p.slug];
              return (
                <Link
                  key={p.slug}
                  href={`/programs/${p.slug}`}
                  className="group bg-white p-6 rounded-2xl border border-gray-100 hover:border-[#046A55]/30 hover:shadow-md transition-all flex flex-col"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#F4FDF9] flex items-center justify-center mb-4">
                    {OtherIcon && (
                      <OtherIcon className="w-5 h-5 text-[#046A55]" />
                    )}
                  </div>
                  <h3 className="font-bold text-[#046A55] mb-2">
                    {p.navTitle}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed flex-grow">
                    {p.tagline}
                  </p>
                  <span className="mt-4 text-sm font-semibold text-[#046A55] group-hover:text-[#00E63A] transition-colors inline-flex items-center gap-1">
                    View program <ArrowRightIcon className="w-3.5 h-3.5" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#046A55]">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to enroll in {program.navTitle}?
          </h2>
          <p className="text-white/80 mb-8">
            Fill out our enrollment form and our team will reach out with next
            steps.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href={`/enroll?program=${program.slug}`}
              className="inline-flex items-center gap-2 bg-[#00E63A] hover:bg-white hover:text-[#046A55] text-[#046A55] font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              Enroll Now
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
            <Link
              href="/"
              className="inline-flex items-center gap-2 border border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
