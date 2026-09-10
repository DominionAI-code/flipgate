// components/GateRail.jsx
// Decorative vertical bars echoing the Flipe logo mark. Purely visual.

export default function GateRail({ className = "" }) {
  return (
    <div className={`flex items-end gap-1.5 ${className}`} aria-hidden="true">
      <span className="w-1.5 h-6 bg-[#00E63A] rounded-full" />
      <span className="w-1.5 h-10 bg-[#046A55] rounded-full" />
      <span className="w-1.5 h-4 bg-[#00E63A]/60 rounded-full" />
    </div>
  );
}
