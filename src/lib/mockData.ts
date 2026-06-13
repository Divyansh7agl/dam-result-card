import { DAMResult } from "@/types";

export const mockResult: DAMResult = {
  claim:
    '"RBI has announced a full refund of ₹2,300 crore to UPI users who were overcharged between 2021–2024. Click this link to claim your refund before 15 June."',
  verdict: {
    level: "HIGH_RISK",
    label: "High risk · Likely scam",
  },
  riskSigns: [
    {
      id: "1",
      icon: "⚠️",
      title: "Unverified government impersonation",
      description:
        "No RBI press release or official channel confirms this announcement.",
    },
    {
      id: "2",
      icon: "🔗",
      title: "Suspicious link domain",
      description:
        "Link leads to rbi-refund-claim[.]in — not an official .gov.in domain.",
    },
    {
      id: "3",
      icon: "⏰",
      title: "Artificial urgency tactic",
      description:
        'Deadline pressure ("before 15 June") is a known phishing technique.',
    },
  ],
  nextSteps: [
    "Do not click the link or enter any personal or banking details.",
    "Report this message on WhatsApp and warn the person who sent it.",
    "Verify any RBI announcements only at rbi.org.in or the official RBI app.",
  ],
  evidence: [
    {
      id: "e1",
      source: "RBI Official Site",
      text: "No press release matching this claim found on rbi.org.in between Jan 2021 – Jun 2026.",
      confidence: "HIGH",
    },
    {
      id: "e2",
      source: "Domain Analysis",
      text: "rbi-refund-claim[.]in registered May 2026. Hosting: shared server, no SSL cert chain to govt authority.",
      confidence: "MEDIUM",
    },
    {
      id: "e3",
      source: "Pattern Match",
      text: "Message matches 14 previously flagged UPI refund scam templates in DAM's database.",
      confidence: "HIGH",
    },
  ],
  checkedAt: "12 Jun 2026",
  analysisTimeMs: 800,
};
