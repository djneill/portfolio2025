import { useEffect, useState } from "react";

const LOG_LINES = [
  { text: "> Initializing route resolver...", delay: 300 },
  { text: "> Scanning filesystem...                    [OK]", delay: 800 },
  { text: "> Checking DNS cache...                     [OK]", delay: 1200 },
  { text: "> Consulting the Stack Overflow oracle...", delay: 1700 },
  {
    text: ">                                      [TIMEOUT]",
    delay: 2400,
    className: "text-yellow-400",
  },
  { text: "> Running git blame...", delay: 2900 },
  {
    text: "> Error: no commit found matching this URL",
    delay: 3400,
    className: "text-red-400",
  },
  { text: "> Attempting to summon page from the void...", delay: 4000 },
  {
    text: "> Failed. (The void is unresponsive.)",
    delay: 4700,
    className: "text-red-400",
  },
  {
    text: "> Have you tried turning it off and on again?",
    delay: 5500,
  },
  { text: "> ...", delay: 6500 },
  { text: "> Still 404.", delay: 7200, className: "text-red-400" },
  {
    text: "> Suggestion: use the button below.",
    delay: 8000,
    className: "text-cyan-400",
  },
];

export default function ErrorTerminal() {
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    const timers = LOG_LINES.map((_, i) =>
      setTimeout(() => setVisibleCount(i + 1), LOG_LINES[i].delay)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="terminal-window w-full max-w-xl">
      <div className="terminal-header">
        <div className="terminal-dot bg-red-500" />
        <div className="terminal-dot bg-yellow-500" />
        <div className="terminal-dot bg-green-500" />
        <span className="text-slate-400 text-xs ml-2">error.log</span>
      </div>
      <div className="terminal-content text-xs sm:text-sm space-y-1">
        {LOG_LINES.slice(0, visibleCount).map((line, i) => (
          <div
            key={i}
            className={`${line.className ?? "text-slate-300"}`}
          >
            {line.text}
          </div>
        ))}
        {visibleCount < LOG_LINES.length && (
          <span className="inline-block w-2 h-4 bg-cyan-400 animate-pulse" />
        )}
      </div>
    </div>
  );
}
