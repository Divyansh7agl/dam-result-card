function Skel({ w = "100%", h = 14 }: { w?: string; h?: number }) {
  return (
    <div
      className="bg-[#EDF0F3] rounded animate-pulse"
      style={{ width: w, height: h }}
    />
  );
}

export default function LoadingSkeleton() {
  return (
    <div className="p-4 space-y-3" role="status" aria-label="Analysing claim…">
      <Skel w="40%" h={12} />
      <Skel h={18} />
      <Skel w="80%" />
      <Skel w="65%" />
      <div className="pt-2 space-y-2">
        <Skel w="35%" h={12} />
        <Skel />
        <Skel w="88%" />
        <Skel w="72%" />
      </div>
      <div className="pt-2 space-y-2">
        <Skel w="30%" h={12} />
        <Skel w="90%" />
        <Skel w="60%" />
      </div>
    </div>
  );
}
