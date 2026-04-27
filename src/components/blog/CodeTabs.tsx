import { Children, isValidElement, useState } from "react";

interface CodeTabsProps {
  labels: string[];
  children: React.ReactNode;
}

export default function CodeTabs({ labels, children }: CodeTabsProps) {
  const [active, setActive] = useState(0);
  const blocks = Children.toArray(children).filter(isValidElement);

  return (
    <div className="not-prose my-6 rounded-xl overflow-hidden border border-slate-700 bg-slate-900">
      {/* Tab bar */}
      <div className="flex bg-slate-800/80 border-b border-slate-700">
        {labels.map((label, i) => (
          <button
            key={label}
            onClick={() => setActive(i)}
            className={`px-4 py-2 text-sm font-medium transition-colors border-b-2 -mb-px cursor-pointer ${
              active === i
                ? "border-cyan-400 text-cyan-400"
                : "border-transparent text-slate-400 hover:text-white"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Active code block */}
      <div className="overflow-x-auto [&_pre]:m-0! [&_pre]:rounded-none! [&_pre]:p-5 [&_figure]:m-0!">
        {blocks[active]}
      </div>
    </div>
  );
}
