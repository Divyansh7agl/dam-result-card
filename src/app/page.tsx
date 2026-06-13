import DAMResultCard from "@/components/DAMResultCard";
import { mockResult } from "@/lib/mockData";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F7F8FA] px-4 py-8">
      <DAMResultCard result={mockResult} simulateLoading={true} />
    </main>
  );
}
