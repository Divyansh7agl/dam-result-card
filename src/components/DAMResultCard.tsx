"use client";

import { useEffect, useState } from "react";
import { DAMResult } from "@/types";
import VerdictBadge from "./VerdictBadge";
import RiskSignsList from "./RiskSignsList";
import NextSteps from "./NextSteps";
import EvidenceSection from "./EvidenceSection";
import LoadingSkeleton from "./LoadingSkeleton";

interface Props {
  result: DAMResult;
  simulateLoading?: boolean;
}

export default function DAMResultCard({
  result,
  simulateLoading = true,
}: Props) {
  const [loading, setLoading] = useState(simulateLoading);

  useEffect(() => {
    if (!simulateLoading) return;
    const t = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(t);
  }, [simulateLoading]);

  return (
    <div className="bg-white rounded-[14px] overflow-hidden border border-[#E2E6EA] max-w-sm mx-auto">
      {loading ? (
        <LoadingSkeleton />
      ) : (
        <>
          <VerdictBadge
            level={result.verdict.level}
            label={result.verdict.label}
            claim={result.claim}
          />
          <RiskSignsList signs={result.riskSigns} />
          <NextSteps steps={result.nextSteps} />
          <EvidenceSection items={result.evidence} />
          <footer className="px-4 py-2.5 border-t border-[#EDF0F3] flex items-center justify-between">
            <span className="font-display text-[11px] font-bold text-[#0B1929] tracking-widest">
              DAM
            </span>
            <span className="text-[11px] text-[#9AA3AE]">
              Checked {result.checkedAt} · {result.analysisTimeMs / 1000}s
            </span>
          </footer>
        </>
      )}
    </div>
  );
}
