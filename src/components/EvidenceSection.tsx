"use client";

import { useState } from "react";
import { EvidenceItem, ConfidenceLevel } from "@/types";

const confidenceStyle: Record<ConfidenceLevel, string> = {
  HIGH: "text-[#C0393D] bg-[#FFF0F0]",
  MEDIUM: "text-[#B8780A] bg-[#FFF7EC]",
  LOW: "text-[#5A6675] bg-[#F0F2F5]",
};

interface Props {
  items: EvidenceItem[];
}

export default function EvidenceSection({ items }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-t border-[#EDF0F3]">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="w-full flex items-center justify-between px-4 py-3 cursor-pointer bg-transparent"
      >
        <span className="font-display text-[12px] font-semibold text-[#5A6675] tracking-wide">
          View supporting evidence
        </span>
        <span
          className={`text-[#9AA3AE] text-sm transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          aria-hidden="true"
        >
          ▾
        </span>
      </button>

      {open && (
        <div className="px-4 pb-3.5 space-y-2">
          {items.map((item) => (
            <div
              key={item.id}
              className="rounded-lg bg-[#F7F8FA] border border-[#EDF0F3] px-3 py-2.5"
            >
              <p className="text-[11px] font-semibold text-[#9AA3AE] uppercase tracking-widest mb-1">
                {item.source}
              </p>
              <p className="text-[13px] text-[#3A4552] leading-snug">
                {item.text}
              </p>
              <span
                className={`inline-block mt-1.5 text-[11px] font-semibold rounded px-1.5 py-0.5 ${confidenceStyle[item.confidence]}`}
              >
                {item.confidence.charAt(0) + item.confidence.slice(1).toLowerCase()} confidence
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
