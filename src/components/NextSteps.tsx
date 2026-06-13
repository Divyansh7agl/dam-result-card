interface Props {
  steps: string[];
}

export default function NextSteps({ steps }: Props) {
  return (
    <section className="px-4 py-3.5 border-t border-[#EDF0F3]">
      <h2 className="text-[11px] font-semibold tracking-widest text-[#9AA3AE] uppercase mb-2.5 font-display">
        What to do
      </h2>
      <ol className="space-y-2">
        {steps.map((step, i) => (
          <li key={i} className="flex items-start gap-2.5">
            <span className="w-5 h-5 rounded-full bg-[#0B1929] text-white text-[10px] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
              {i + 1}
            </span>
            <p className="text-[13px] text-[#3A4552] leading-snug">{step}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
