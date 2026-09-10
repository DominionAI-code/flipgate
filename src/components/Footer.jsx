import Link from "next/link";

export default function Footer() {
  const standardYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1F2937] text-white border-t-4 border-[#046A55] pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        {/* Brand identity */}
        <div>
          <h3 className="text-xl font-bold tracking-wider mb-4">
            FLIPE<span className="text-[#00E63A]">.</span>
          </h3>
          <p className="text-gray-400 text-xs md:text-sm leading-relaxed max-w-xs">
            Purpose-driven organization focused on national reorientation,
            community empowerment, and structural transformation.
          </p>
        </div>

        {/* Navigation Quicklinks */}
        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-[#00E63A] mb-4">
            Quick Links
          </h4>
          <div className="grid grid-cols-2 gap-2 text-sm text-gray-400">
            <Link href="/" className="hover:text-white transition">
              Home
            </Link>
            <Link href="/about" className="hover:text-white transition">
              About Us
            </Link>
            <Link href="/projects" className="hover:text-white transition">
              Projects
            </Link>
            <Link href="/volunteers" className="hover:text-white transition">
              Volunteers
            </Link>
            <Link href="/news" className="hover:text-white transition">
              News
            </Link>
            <Link href="/gallery" className="hover:text-white transition">
              Gallery
            </Link>
          </div>
        </div>

        {/* Communication Point */}
        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-[#00E63A] mb-4">
            Enquiries
          </h4>
          <p className="text-gray-400 text-sm mb-2">
            Connect instantly via our message routing pipelines.
          </p>
          <Link
            href="/contact"
            className="inline-block text-xs font-bold text-[#046A55] bg-[#00E63A] px-4 py-2 rounded hover:bg-white hover:text-[#046A55] transition"
          >
            Open Chat Contact
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-gray-800 pt-6 text-center text-xs text-gray-500">
        &copy; {standardYear} FLIPE LTD. All Rights Reserved. Engineered to
        World-Class Standards.
      </div>
    </footer>
  );
}
