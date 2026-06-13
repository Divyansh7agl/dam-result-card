export type VerdictLevel = "HIGH_RISK" | "MEDIUM_RISK" | "SAFE";
export type ConfidenceLevel = "HIGH" | "MEDIUM" | "LOW";

export interface RiskSign {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface EvidenceItem {
  id: string;
  source: string;
  text: string;
  confidence: ConfidenceLevel;
}

export interface DAMResult {
  claim: string;
  verdict: {
    level: VerdictLevel;
    label: string;
  };
  riskSigns: RiskSign[];
  nextSteps: string[];
  evidence: EvidenceItem[];
  checkedAt: string;
  analysisTimeMs: number;
}
