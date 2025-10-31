"use client";

import { useEffect, useMemo, useRef, useState } from "react";

export default function ProcessTimeline() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [cardWidth, setCardWidth] = useState(344);
  const steps = useMemo(() => processSteps, []);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const firstCard = track.querySelector<HTMLDivElement>(".process-step");
    const update = () => {
      const gap = parseInt(window.getComputedStyle(track).gap || "24", 10) || 24;
      const w = firstCard?.getBoundingClientRect().width ?? 320;
      setCardWidth(w + gap);
    };
    update();
    const onResize = () => update();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let t: number | undefined;
    const onScroll = () => {
      if (t) window.clearTimeout(t);
      t = window.setTimeout(() => {
        const index = Math.round(track.scrollLeft / cardWidth);
        setActive(Math.max(0, Math.min(index, steps.length - 1)));
      }, 80);
    };
    track.addEventListener("scroll", onScroll);
    return () => track.removeEventListener("scroll", onScroll);
  }, [cardWidth, steps.length]);

  const scrollBy = (dir: -1 | 1) => {
    trackRef.current?.scrollBy({ left: dir * cardWidth, behavior: "smooth" });
  };

  const scrollToIndex = (i: number) => {
    trackRef.current?.scrollTo({ left: i * cardWidth, behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden py-20 sm:py-28 bg-gray-50 text-gray-900">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0" style={{ background: "linear-gradient(120deg, rgba(99,102,241,0.06), rgba(59,130,246,0.06) 40%, rgba(168,85,247,0.06))", animation: 'panGradient 22s ease-in-out infinite' }} />
        <div className="absolute inset-0 opacity-60" style={{ backgroundImage: "repeating-linear-gradient(0deg, rgba(17,24,39,0.03) 0px, rgba(17,24,39,0.03) 1px, transparent 1px, transparent 3px)" }} />
      </div>

      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 rounded-full bg-gray-900/5 px-3 py-1 text-[11px] text-gray-700 ring-1 ring-gray-900/10 backdrop-blur mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-500" />
              Your Journey with Motionify
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">From Idea to Impact</h2>
            <p className="mt-4 text-base sm:text-lg text-gray-700 max-w-2xl mx-auto">Every frame, every milestone — crafted with clarity, creativity, and care.</p>
          </div>

          <div className="absolute -top-16 right-0 flex items-center gap-2 z-10">
            <button type="button" aria-label="Previous step" onClick={() => scrollBy(-1)} className="process-prev-btn h-10 w-10 rounded-full bg-gray-900/10 ring-1 ring-gray-900/20 text-gray-900 backdrop-blur hover:bg-gray-900/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900/40 flex items-center justify-center transition">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
            </button>
            <button type="button" aria-label="Next step" onClick={() => scrollBy(1)} className="process-next-btn h-10 w-10 rounded-full bg-gray-900/10 ring-1 ring-gray-900/20 text-gray-900 backdrop-blur hover:bg-gray-900/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900/40 flex items-center justify-center transition">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            </button>
          </div>

          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-gray-50 to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-gray-50 to-transparent z-10" />

          <div ref={trackRef} id="processTrack" className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 scroll-smooth process-track-scrollbar" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {steps.map((s, idx) => (
              <div key={s.title} className="process-step snap-start shrink-0 w-[280px] sm:w-[320px] relative group">
                <div className={`absolute -top-3 -left-3 h-12 w-12 rounded-full ${s.badgeBg} flex items-center justify-center text-white font-bold text-lg shadow-lg ring-4 ring-gray-100 z-10`}>
                  <span>{idx + 1}</span>
                  <div className={`absolute inset-0 rounded-full ${s.badgeBg} blur-md opacity-60 animate-pulse`} />
                </div>

                <div className="process-card rounded-3xl bg-white ring-1 ring-gray-200 backdrop-blur p-6 sm:p-8 min-h-[320px] flex flex-col transition-all duration-300 hover:bg-gray-50 hover:ring-gray-300 hover:shadow-2xl hover:-translate-y-1">
                  <div className="h-14 w-14 rounded-2xl bg-gray-900/5 ring-1 ring-gray-900/10 backdrop-blur flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110" dangerouslySetInnerHTML={{ __html: s.icon }} />
                  <h3 className="text-xl sm:text-2xl font-semibold mb-3">{s.title}</h3>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center items-center gap-3 mt-12">
            {steps.map((_, i) => (
              <button key={i} type="button" aria-label={`Go to step ${i+1}`} className={`process-dot h-2 ${active === i ? 'active' : ''}`} onClick={() => scrollToIndex(i)} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const processSteps = [
  {
    title: 'Choose & Customize',
    desc: 'Pick your video style and tailor it to your brand.',
    badgeBg: 'bg-gradient-to-br from-fuchsia-500 to-violet-600',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="text-gray-700"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"></path><circle cx="12" cy="13" r="3"></circle></svg>`
  },
  {
    title: 'Submit Your Brief',
    desc: 'Share goals, tone, and creative direction.',
    badgeBg: 'bg-gradient-to-br from-violet-500 to-blue-600',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="text-gray-700"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" x2="8" y1="13" y2="13"></line><line x1="16" x2="8" y1="17" y2="17"></line><line x1="10" x2="8" y1="9" y2="9"></line></svg>`
  },
  {
    title: 'Add-Ons',
    desc: 'Scriptwriting, multilingual voiceovers, localization, subtitles.',
    badgeBg: 'bg-gradient-to-br from-blue-500 to-cyan-600',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="text-gray-700"><path d="M12 5v14"></path><path d="M5 12h14"></path><circle cx="12" cy="12" r="10"></circle></svg>`
  },
  {
    title: 'Track Progress',
    desc: 'Access milestones, previews, and feedback loops.',
    badgeBg: 'bg-gradient-to-br from-cyan-500 to-teal-600',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="text-gray-700"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>`
  },
  {
    title: 'Download & Shine',
    desc: 'Get final assets ready for every platform.',
    badgeBg: 'bg-gradient-to-br from-teal-500 to-emerald-600',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="text-gray-700"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>`
  },
];


