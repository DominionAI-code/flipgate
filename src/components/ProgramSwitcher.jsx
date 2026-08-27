// components/ProgramSwitcher.jsx
import Link from "next/link";
import { programsList } from "@/lib/programs";

export default function ProgramSwitcher({ activeSlug }) {
  return (
    <div className="flex flex-wrap gap-2">
      {programsList.map((p) => {
        const isActive = p.slug === activeSlug;
        return (
          <Link
            key={p.slug}
            href={`/programs/${p.slug}`}
            aria-current={isActive ? "page" : undefined}
            className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
              isActive
                ? "bg-[#046A55] border-[#046A55] text-white"
                : "bg-white border-gray-200 text-gray-600 hover:border-[#046A55] hover:text-[#046A55]"
            }`}
          >
            {p.navTitle}
          </Link>
        );
      })}
    </div>
  );
}
