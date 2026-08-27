// components/Breadcrumbs.jsx
import Link from "next/link";

// items: [{ label: "Home", href: "/" }, { label: "Programs" }, { label: "Reorientation" }]
// The last item should have no href — it renders as the current page.
export default function Breadcrumbs({ items }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm">
      <ol className="flex flex-wrap items-center gap-1.5 text-gray-500">
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          return (
            <li key={item.label} className="flex items-center gap-1.5">
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="hover:text-[#046A55] transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <span className={isLast ? "text-[#046A55] font-medium" : ""}>
                  {item.label}
                </span>
              )}
              {!isLast && <span className="text-gray-300">/</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
