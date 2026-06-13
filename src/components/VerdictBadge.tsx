import { VerdictLevel } from "@/types";

const config: Record<
  VerdictLevel,
  { bar: string; badge: string; dot: string; text: string }
> = {
  HIGH_RISK: {
    bar: "border-l-[5px] border-[#E5484D]",
    badge: "bg-[#FFF0F0] border-[#F9CBCB]",
    dot: "bg-[#E5484D]",
    text: "text-[#C0393D]",
  },
  MEDIUM_RISK: {
    bar: "border-l-[5px] border-[#F5A623]",
    badge: "bg-[#FFF7EC] border-[#FAD89A]",
    dot: "bg-[#F5A623]",
    text: "text-[#B8780A]",
  },
  SAFE: {
    bar: "border-l-[5px] border-[#2D9D6F]",
    badge: "bg-[#EAF9F3] border-[#A8DEC9]",
    dot: "bg-[#2D9D6F]",
    text: "text-[#1E7A53]",
  },
};

interface Props {
  level: VerdictLevel;
  label: string;
  claim: string;
}

export default function VerdictBadge({ level, label, claim }: Props) {
  const c = config[level];
  return (
    <div className={`flex items-stretch ${c.bar}`}>
      <div className="px-4 pt-[18px] pb-[14px] flex-1">
        <p className="text-[11px] font-semibold tracking-widest text-[#9AA3AE] uppercase mb-1.5">
          Claim being checked
        </p>
        <p className="text-[14px] text-[#3A4552] leading-snug italic">{claim}</p>
        <div
          className={`inline-flex items-center gap-1.5 mt-3.5 px-3 py-1.5 rounded-full border ${c.badge}`}
        >
          <span className={`w-2 h-2 rounded-full flex-shrink-0 ${c.dot}`} />
          <span
            className={`font-display text-[13px] font-bold tracking-wide uppercase ${c.text}`}
          >
            {label}
          </span>
        </div>
      </div>
    </div>
  );
}
