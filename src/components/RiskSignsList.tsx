import { RiskSign } from "@/types";

interface Props {
  signs: RiskSign[];
}

export default function RiskSignsList({ signs }: Props) {
  return (
    <section className="px-4 py-3.5 border-t border-[#EDF0F3]">
      <h2 className="text-[11px] font-semibold tracking-widest text-[#9AA3AE] uppercase mb-2.5 font-display">
        Risk signals
      </h2>
      <ul className="space-y-2.5">
        {signs.map((sign) => (
          <li key={sign.id} className="flex items-start gap-2.5">
            <span
              className="w-7 h-7 rounded-lg bg-[#FFF0F0] flex items-center justify-center flex-shrink-0 text-[13px]"
              aria-hidden="true"
            >
              {sign.icon}
            </span>
            <div>
              <p className="text-[13px] font-medium text-[#1C2733] leading-snug">
                {sign.title}
              </p>
              <p className="text-[12px] text-[#7A8594] mt-0.5 leading-snug">
                {sign.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
