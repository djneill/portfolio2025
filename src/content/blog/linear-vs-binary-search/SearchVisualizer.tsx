import { useState, useEffect, useRef, useCallback } from "react";
import {
  FiPlay,
  FiPause,
  FiRefreshCw,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";

const ARRAY = [2, 5, 8, 12, 16, 23, 38, 45, 56, 72];
const PRESETS = [16, 38, 7, 56, 1];

type Algorithm = "linear" | "binary";

interface SearchStep {
  active: number;
  left: number;
  right: number;
  mid: number | null;
  eliminated: number[];
  found: boolean;
  notFound: boolean;
  description: string;
}

function buildLinearSteps(arr: number[], target: number): SearchStep[] {
  const steps: SearchStep[] = [];
  const eliminated: number[] = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      steps.push({
        active: i,
        left: 0,
        right: arr.length - 1,
        mid: null,
        eliminated: [...eliminated],
        found: true,
        notFound: false,
        description: `Step ${steps.length + 1}: index ${i} → ${arr[i]} matches ${target}. Found!`,
      });
      return steps;
    }
    steps.push({
      active: i,
      left: 0,
      right: arr.length - 1,
      mid: null,
      eliminated: [...eliminated],
      found: false,
      notFound: false,
      description: `Step ${steps.length + 1}: index ${i} → ${arr[i]} ≠ ${target}, keep going`,
    });
    eliminated.push(i);
  }

  steps.push({
    active: -1,
    left: 0,
    right: arr.length - 1,
    mid: null,
    eliminated: [...eliminated],
    found: false,
    notFound: true,
    description: `Checked all ${arr.length} elements — ${target} is not in this array`,
  });

  return steps;
}

function buildBinarySteps(arr: number[], target: number): SearchStep[] {
  const steps: SearchStep[] = [];
  let left = 0;
  let right = arr.length - 1;
  const eliminated: number[] = [];

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      steps.push({
        active: mid,
        left,
        right,
        mid,
        eliminated: [...eliminated],
        found: true,
        notFound: false,
        description: `Step ${steps.length + 1}: mid=index ${mid}, value ${arr[mid]} matches ${target}. Found!`,
      });
      return steps;
    }

    if (arr[mid] < target) {
      steps.push({
        active: mid,
        left,
        right,
        mid,
        eliminated: [...eliminated],
        found: false,
        notFound: false,
        description: `Step ${steps.length + 1}: mid=index ${mid}, ${arr[mid]} < ${target} — discard left half, search right`,
      });
      for (let i = left; i <= mid; i++) eliminated.push(i);
      left = mid + 1;
    } else {
      steps.push({
        active: mid,
        left,
        right,
        mid,
        eliminated: [...eliminated],
        found: false,
        notFound: false,
        description: `Step ${steps.length + 1}: mid=index ${mid}, ${arr[mid]} > ${target} — discard right half, search left`,
      });
      for (let i = mid; i <= right; i++) eliminated.push(i);
      right = mid - 1;
    }
  }

  steps.push({
    active: -1,
    left,
    right,
    mid: null,
    eliminated: [...eliminated],
    found: false,
    notFound: true,
    description: `Search window is empty — ${target} is not in this array`,
  });

  return steps;
}

export default function SearchVisualizer() {
  const [algorithm, setAlgorithm] = useState<Algorithm>("linear");
  const [target, setTarget] = useState(16);
  const [customInput, setCustomInput] = useState("");
  const [steps, setSteps] = useState<SearchStep[]>([]);
  const [currentStep, setCurrentStep] = useState(-1);
  const [isPlaying, setIsPlaying] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const built =
      algorithm === "linear"
        ? buildLinearSteps(ARRAY, target)
        : buildBinarySteps(ARRAY, target);
    setSteps(built);
    setCurrentStep(-1);
    setIsPlaying(false);
  }, [algorithm, target]);

  useEffect(() => {
    if (!isPlaying) return;
    intervalRef.current = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev >= steps.length - 1) {
          setIsPlaying(false);
          return prev;
        }
        return prev + 1;
      });
    }, 850);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPlaying, steps.length]);

  const reset = useCallback(() => {
    setCurrentStep(-1);
    setIsPlaying(false);
  }, []);

  const step = currentStep >= 0 ? steps[currentStep] : null;
  const isAtEnd = steps.length > 0 && currentStep === steps.length - 1;

  const cellClass = (i: number) => {
    const base =
      "flex items-center justify-center w-10 h-10 rounded-lg border-2 text-sm font-bold transition-all duration-300 select-none";

    if (!step) return `${base} bg-slate-700 border-slate-600 text-slate-200`;

    if (step.found && i === step.active)
      return `${base} bg-emerald-500 border-emerald-400 text-white scale-110 shadow-lg shadow-emerald-500/25`;

    if (step.eliminated.includes(i))
      return `${base} bg-slate-800/60 border-slate-700 text-slate-600`;

    if (i === step.active)
      return `${base} bg-amber-500 border-amber-400 text-slate-900 scale-110 shadow-lg shadow-amber-500/25`;

    if (algorithm === "binary" && i >= step.left && i <= step.right)
      return `${base} bg-slate-600 border-slate-500 text-slate-100`;

    return `${base} bg-slate-700 border-slate-600 text-slate-200`;
  };

  return (
    <div className="not-prose my-8 rounded-2xl bg-slate-800/50 border border-slate-700/50 p-5 sm:p-6">
      {/* Header row */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
        <span className="text-sm font-semibold text-white">
          Search Visualizer
        </span>
        <div className="flex rounded-lg overflow-hidden border border-slate-600 text-sm">
          {(["linear", "binary"] as Algorithm[]).map((alg) => (
            <button
              key={alg}
              onClick={() => setAlgorithm(alg)}
              className={`px-4 py-1.5 font-medium capitalize transition-colors cursor-pointer ${
                algorithm === alg
                  ? "bg-cyan-500 text-white"
                  : "bg-slate-700 text-slate-300 hover:bg-slate-600"
              }`}
            >
              {alg}
            </button>
          ))}
        </div>
      </div>

      {/* Target picker */}
      <div className="flex flex-wrap items-center gap-2 mb-6">
        <span className="text-xs text-slate-400 uppercase tracking-wide">
          Target
        </span>
        {PRESETS.map((t) => (
          <button
            key={t}
            onClick={() => {
              setTarget(t);
              setCustomInput("");
            }}
            className={`px-3 py-1 rounded-full text-sm font-mono transition-colors cursor-pointer ${
              target === t && !customInput
                ? "bg-cyan-500 text-white"
                : "bg-slate-700 text-slate-300 hover:bg-slate-600"
            }`}
          >
            {t}
          </button>
        ))}
        <input
          type="number"
          placeholder="custom"
          value={customInput}
          onChange={(e) => {
            setCustomInput(e.target.value);
            const v = parseInt(e.target.value);
            if (!isNaN(v)) setTarget(v);
          }}
          className="w-20 px-3 py-1 rounded-full text-sm font-mono bg-slate-700 border border-slate-600 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500"
        />
      </div>

      {/* Array cells */}
      <div className="flex flex-wrap justify-center gap-2 mb-1">
        {ARRAY.map((val, i) => (
          <div key={i} className="flex flex-col items-center gap-1">
            {/* Pointer labels */}
            <div className="h-5 flex items-center justify-center gap-0.5 text-xs font-bold leading-none">
              {step && algorithm === "binary" && (
                <>
                  {i === step.left && (
                    <span className="text-cyan-400">L</span>
                  )}
                  {step.mid !== null && i === step.mid && (
                    <span className="text-amber-400">M</span>
                  )}
                  {i === step.right && (
                    <span className="text-violet-400">R</span>
                  )}
                </>
              )}
            </div>
            <div className={cellClass(i)}>{val}</div>
            <div className="text-[10px] text-slate-600 leading-none">{i}</div>
          </div>
        ))}
      </div>

      {/* Binary pointer legend */}
      {algorithm === "binary" && step && (
        <div className="flex justify-center gap-4 mt-2 text-xs font-bold">
          <span className="text-cyan-400">L = left</span>
          <span className="text-amber-400">M = mid</span>
          <span className="text-violet-400">R = right</span>
        </div>
      )}

      {/* Description */}
      <div className="min-h-10 flex items-center justify-center my-4 px-2">
        {step ? (
          <p
            className={`text-sm text-center font-medium ${
              step.found
                ? "text-emerald-400"
                : step.notFound
                  ? "text-red-400"
                  : "text-slate-300"
            }`}
          >
            {step.description}
          </p>
        ) : (
          <p className="text-sm text-slate-500 text-center">
            Pick a target and press play, or step through manually
          </p>
        )}
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-2">
        <button
          onClick={reset}
          className="p-2 rounded-lg bg-slate-700 text-slate-400 hover:text-white hover:bg-slate-600 transition-colors cursor-pointer"
          title="Reset"
        >
          <FiRefreshCw className="w-4 h-4" />
        </button>

        <button
          onClick={() => {
            setIsPlaying(false);
            setCurrentStep((prev) => Math.max(-1, prev - 1));
          }}
          disabled={currentStep <= -1}
          className="p-2 rounded-lg bg-slate-700 text-slate-400 hover:text-white hover:bg-slate-600 transition-colors disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
        >
          <FiChevronLeft className="w-4 h-4" />
        </button>

        <button
          onClick={() => {
            if (isAtEnd) {
              reset();
              return;
            }
            if (currentStep === -1) setCurrentStep(0);
            setIsPlaying((p) => !p);
          }}
          className="px-5 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-white font-medium text-sm flex items-center gap-2 transition-colors cursor-pointer"
        >
          {isPlaying ? (
            <FiPause className="w-4 h-4" />
          ) : (
            <FiPlay className="w-4 h-4" />
          )}
          {isAtEnd
            ? "Replay"
            : isPlaying
              ? "Pause"
              : currentStep < 0
                ? "Play"
                : "Resume"}
        </button>

        <button
          onClick={() => {
            setIsPlaying(false);
            setCurrentStep((prev) => Math.min(steps.length - 1, prev + 1));
          }}
          disabled={isAtEnd}
          className="p-2 rounded-lg bg-slate-700 text-slate-400 hover:text-white hover:bg-slate-600 transition-colors disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
        >
          <FiChevronRight className="w-4 h-4" />
        </button>
      </div>

      {steps.length > 0 && (
        <p className="text-center text-xs text-slate-600 mt-3">
          {currentStep < 0
            ? `${steps.length} steps total`
            : `Step ${currentStep + 1} of ${steps.length}`}
        </p>
      )}
    </div>
  );
}
