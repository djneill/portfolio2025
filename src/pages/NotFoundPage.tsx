import { useState } from "react";
import { useNavigate } from "react-router";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Button from "../components/ui/Button";
import ErrorTerminal from "../components/ui/ErrorTerminal";
import { usePageMeta } from "../hooks/usePageMeta";

export default function NotFoundPage() {
  usePageMeta({ noIndex: true });
  const [panicked, setPanicked] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col circuitBackground">
      <Navigation />
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-24 text-center gap-8">
        <div
          className="glitch-wrapper cursor-pointer select-none"
          onClick={() => setPanicked((p) => !p)}
          title="don't click this"
        >
          <span
            className="glitch font-black leading-none"
            data-text="404"
            style={{
              fontSize: "clamp(6rem, 20vw, 14rem)",
              color: panicked ? "#ef4444" : "#ffffff",
              textShadow: panicked
                ? "0 0 20px #ef4444, 0 0 60px #ef4444"
                : undefined,
              animationDuration: panicked ? "0.2s" : undefined,
            }}
          >
            404
          </span>
        </div>

        <div className="space-y-2">
          <h1 className="text-2xl sm:text-3xl font-bold text-white">
            {panicked
              ? "PANIC MODE ACTIVATED"
              : "FATAL ERROR: Route Not Found"}
          </h1>
          <p className="text-slate-400 text-sm">
            {panicked
              ? "You clicked the 404. That's somehow worse."
              : "The page you're looking for has been lost in the void."}
          </p>
          {!panicked && (
            <p className="text-slate-600 text-xs font-mono mt-1">
              hint: try clicking the 404
            </p>
          )}
        </div>

        <ErrorTerminal />

        <Button
          variant="primary"
          size="lg"
          onClick={() => navigate("/")}
          className="shadow-xl shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-shadow cursor-pointer"
        >
          Take Me Home
        </Button>
      </main>
      <Footer />
    </div>
  );
}
