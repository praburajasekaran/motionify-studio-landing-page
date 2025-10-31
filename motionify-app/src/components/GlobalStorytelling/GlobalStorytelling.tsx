"use client";

import { useEffect, useId } from "react";
import { useWorldMap } from "./useWorldMap";

export default function GlobalStorytelling() {
  const id = useId();
  const svgId = `world-map-${id}`;
  const containerId = `global-map-container-${id}`;

  useWorldMap(`#${svgId}`, `#${containerId}`);

  useEffect(() => {}, []);

  return (
    <section className="relative overflow-hidden py-20 sm:py-28 text-white">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0" style={{
          background: "linear-gradient(135deg, rgba(15,23,42,1) 0%, rgba(30,27,75,1) 25%, rgba(49,46,129,1) 50%, rgba(30,27,75,1) 75%, rgba(15,23,42,1) 100%)",
        }} />
        <div className="absolute inset-0 opacity-40" style={{
          background: "radial-gradient(1200px 800px at 30% 30%, rgba(139,92,246,.25), transparent 60%), radial-gradient(1000px 900px at 70% 50%, rgba(192,132,252,.20), transparent 60%), radial-gradient(900px 700px at 50% 80%, rgba(245,158,11,.15), transparent 60%)",
          animation: 'panGradient 25s ease-in-out infinite'
        }} />
        <div className="absolute inset-0 opacity-10 globe-grid" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-[11px] text-white/80 ring-1 ring-white/10 backdrop-blur mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
            Global Reach
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight">Stories that Speak Every Language.</h2>
          <p className="text-lg sm:text-xl text-white/70 leading-relaxed max-w-3xl mx-auto">Our ideas travel farther than words — blending culture, emotion, and meaning across borders.</p>
        </div>

        <div className="relative mb-16 sm:mb-20">
          <div id={containerId} className="global-map-container relative rounded-3xl bg-slate-900/40 ring-1 ring-white/10 backdrop-blur-xl overflow-hidden" style={{ minHeight: 500 }}>
            <svg id={svgId} width="100%" height="500" className="w-full" />
            <div className="absolute -inset-4 bg-gradient-to-br from-amber-500/10 via-violet-600/10 to-cyan-500/10 blur-3xl -z-10 opacity-60" />
          </div>
          <svg className="absolute inset-0 pointer-events-none" style={{ mixBlendMode: 'screen', opacity: .4 }}>
            <defs>
              <linearGradient id="auroraGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{ stopColor: 'rgba(6,182,212,0)', stopOpacity: 0 }} />
                <stop offset="50%" style={{ stopColor: 'rgba(6,182,212,0.8)', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: 'rgba(139,92,246,0)', stopOpacity: 0 }} />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </section>
  );
}


