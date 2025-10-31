"use client";

import { useEffect, useMemo, useRef, useState } from "react";

export default function SolutionsSlider() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [cardWidth, setCardWidth] = useState(320 + 20);
  const dots = useMemo(() => [0, 1, 2], []);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const firstCard = track.querySelector<HTMLDivElement>(".snap-start");
    const update = () => {
      const gap = parseInt(window.getComputedStyle(track).gap || "16", 10) || 16;
      const w = firstCard?.getBoundingClientRect().width ?? 300;
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
        setActive(Math.max(0, Math.min(index, dots.length - 1)));
      }, 80);
    };
    track.addEventListener("scroll", onScroll);
    return () => track.removeEventListener("scroll", onScroll);
  }, [cardWidth, dots.length]);

  const scrollBy = (dir: -1 | 1) => {
    trackRef.current?.scrollBy({ left: dir * cardWidth, behavior: "smooth" });
  };

  const scrollToIndex = (i: number) => {
    trackRef.current?.scrollTo({ left: i * cardWidth, behavior: "smooth" });
  };

  return (
    <section className="overflow-hidden sm:py-20 bg-gradient-to-br from-white via-gray-50 to-indigo-50 pt-16 pb-16 relative text-gray-900">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      <div className="pointer-events-none absolute -inset-x-24 -top-24 h-64 blur-3xl opacity-60" style={{ background: "radial-gradient(60% 120% at 50% 0%, rgba(99,102,241,0.18), rgba(99,102,241,0))" }} />
      <div className="pointer-events-none absolute -inset-x-24 -bottom-28 h-72 blur-3xl opacity-50" style={{ background: "radial-gradient(80% 140% at 50% 100%, rgba(59,130,246,0.16), rgba(59,130,246,0))" }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-3 sm:gap-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight">Solutions, Not Just Services.</h2>
          <p className="text-xl sm:text-2xl font-semibold tracking-tight text-gray-700">Every brand is unique. We craft videos that move people — and metrics.</p>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl">From awareness to conversions, our solutions grow with your goals.</p>
        </div>

        <div className="mt-8 relative">
          <div className="absolute -top-12 right-0 flex items-center gap-2">
            <button type="button" aria-label="Previous" onClick={() => scrollBy(-1)} className="h-9 w-9 rounded-full border border-gray-200 bg-white text-gray-700 shadow-sm hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-300 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
            </button>
            <button type="button" aria-label="Next" onClick={() => scrollBy(1)} className="hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-300 flex text-gray-700 bg-white w-9 h-9 border-gray-200 border rounded-full shadow-sm items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            </button>
          </div>

          <div ref={trackRef} id="solutionsTrack" className="flex gap-4 sm:gap-5 overflow-x-auto snap-x snap-mandatory pb-2 scroll-smooth" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            <style>{`#solutionsTrack::-webkit-scrollbar{display:none;}`}</style>

            {solutions.map((s, i) => (
              <div key={s.title} className="snap-start shrink-0 w-[260px] sm:w-[300px] md:w-[320px] rounded-2xl bg-white ring-1 ring-gray-200 shadow-sm hover:shadow-xl transition ease-out hover:-translate-y-0.5" style={{ viewTimelineName: `--reveal${i+1}`, viewTimelineAxis: 'block', animationTimeline: `--reveal${i+1}`, animationName: i % 2 === 0 ? 'fadeUp' : 'slideIn', animationRange: 'entry 15% cover 30%', animationFillMode: 'both' }}>
                <div className="p-5">
                  <div className={`h-10 w-10 rounded-xl ring-1 ring-gray-200 flex items-center justify-center ${s.iconBg} ${s.iconColor}`}>
                    {s.icon}
                  </div>
                  <h3 className="mt-3 text-base font-medium tracking-tight">{s.title}</h3>
                  <p className="mt-1 text-sm text-gray-600">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {dots.map((i) => (
              <button key={i} onClick={() => scrollToIndex(i)} className={`solution-dot h-1.5 w-1.5 rounded-full ${active === i ? 'active bg-gray-600' : 'bg-gray-300 hover:bg-gray-400'}`} aria-label={`Go to slide ${i+1}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const solutions = [
  {
    title: "Brand Awareness",
    desc: "Build your identity and capture attention.",
    iconBg: "bg-gradient-to-tr from-violet-50 to-teal-50",
    iconColor: "text-violet-600",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"/><path d="M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14"/><path d="M8 6v8"/></svg>
    ),
  },
  {
    title: "Product Launch",
    desc: "Generate buzz and showcase innovation.",
    iconBg: "bg-gradient-to-tr from-indigo-50 to-emerald-50",
    iconColor: "text-indigo-600",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>
    ),
  },
  {
    title: "Training & Education",
    desc: "Simplify complex ideas.",
    iconBg: "bg-gradient-to-tr from-cyan-50 to-fuchsia-50",
    iconColor: "text-cyan-600",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"/><path d="M22 10v6"/><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/></svg>
    ),
  },
];


