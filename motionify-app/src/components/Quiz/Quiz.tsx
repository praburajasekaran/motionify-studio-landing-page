"use client";

import { useEffect, useMemo, useRef } from "react";
import { useQuiz } from "./useQuiz";
import { generateRecommendation } from "./recommendation";

type Option = { key: keyof ReturnType<typeof useQuiz>["selections"]; value: string; label: string };

export default function Quiz() {
  const { current, total, selections, select, setCurrent, isComplete } = useQuiz();
  const placeholderRef = useRef<HTMLDivElement | null>(null);
  const cardRef = useRef<HTMLDivElement | null>(null);

  const recommendation = useMemo(() => {
    return isComplete ? generateRecommendation(selections) : null;
  }, [isComplete, selections]);

  useEffect(() => {
    if (!recommendation) return;
    if (placeholderRef.current && cardRef.current) {
      placeholderRef.current.style.opacity = "0";
      setTimeout(() => {
        if (!placeholderRef.current || !cardRef.current) return;
        placeholderRef.current.style.display = "none";
        cardRef.current.style.display = "block";
        requestAnimationFrame(() => {
          if (cardRef.current) cardRef.current.style.opacity = "1";
        });
      }, 300);
    }
  }, [recommendation]);

  const questions: { title: string; help: string; key: Option["key"]; options: string[] }[] = [
    { title: "What's your niche?", help: "Help us understand your industry", key: "niche", options: ["Tech","Healthcare","Retail","Real Estate","Education","Other"] },
    { title: "Who's your target audience?", help: "Who are you trying to reach?", key: "audience", options: ["Consumers","Businesses","Investors","Employees","Students"] },
    { title: "What kind of video style appeals to you?", help: "Choose your preferred visual approach", key: "style", options: ["Live Action","Animation","Mixed Media","Motion Graphics","Minimal Explainer"] },
    { title: "What mood or tone best fits your message?", help: "Set the emotional direction", key: "mood", options: ["Emotional","Playful","Inspirational","Corporate","Bold"] },
    { title: "What's your ideal duration?", help: "Choose the length that fits your goals", key: "duration", options: ["Reels","Explainer","Demo","Any"] },
  ];

  return (
    <section id="video-style-quiz" className="relative py-20 sm:py-28 overflow-hidden text-white">
      {/* Dark animated background matching original with base fill */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gray-950 -z-20" />
        <div className="absolute inset-0 opacity-[0.85]" style={{
          background:
            "radial-gradient(1200px 600px at 20% 20%, rgba(168,85,247,0.20), transparent 60%)," +
            "radial-gradient(1000px 800px at 80% 30%, rgba(59,130,246,0.18), transparent 60%)," +
            "radial-gradient(900px 700px at 40% 80%, rgba(14,165,233,0.16), transparent 60%)",
          filter: "blur(0px)",
        }} />
        <div className="absolute inset-0" style={{
          background:
            "linear-gradient(120deg, rgba(186,123,255,0.14), rgba(59,130,246,0.12) 40%, rgba(99,102,241,0.12) 70%, rgba(14,165,233,0.10))",
          animation: "panGradient 16s ease-in-out infinite",
        }} />
        <div className="absolute -top-24 left-1/4 h-[28rem] w-[28rem] rounded-full blur-3xl opacity-30" style={{ background: "radial-gradient(circle at 30% 30%, rgba(168,85,247,0.35), rgba(168,85,247,0) 60%)" }} />
        <div className="absolute top-1/2 right-1/4 h-[26rem] w-[26rem] rounded-full blur-3xl opacity-25" style={{ background: "radial-gradient(circle at 70% 70%, rgba(59,130,246,0.35), rgba(59,130,246,0) 60%)" }} />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-7">
            <div id="quiz-progress" className="flex items-center gap-3 mb-8 opacity-100 transition-opacity duration-500">
              <div className="flex-1 h-1.5 bg-white/10 rounded-full overflow-hidden">
                <div id="progress-bar" className="h-full bg-gradient-to-r from-fuchsia-500 via-violet-500 to-blue-500 transition-all duration-500 ease-out" style={{ width: `${((Math.min(current, total-1)+1)/total)*100}%` }} />
              </div>
              <span id="progress-text" className="text-sm text-white/60 font-medium">{Math.min(current+1,total)} of {total}</span>
            </div>

            <div className="space-y-8">
              {questions.map((q, idx) => (
                <div key={q.title} className={`${idx === current ? 'block quiz-question active' : 'hidden opacity-0'}`}>
                  <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-6 sm:p-8">
                    <h3 className="text-2xl sm:text-3xl font-semibold mb-2">{q.title}</h3>
                    <p className="text-white/60 text-sm mb-6">{q.help}</p>
                    <div className="flex flex-wrap gap-3">
                      {q.options.map((opt) => (
                        <button
                          key={opt}
                          className={`quiz-option ${selections[q.key] === opt ? 'selected' : ''}`}
                          onClick={() => select(q.key, opt)}
                        >
                          {labelFor(q.key, opt)}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="sticky top-8">
              <div ref={placeholderRef} className="rounded-3xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8 text-center min-h-[400px] flex flex-col items-center justify-center transition-opacity duration-500">
                <div className="h-16 w-16 rounded-2xl bg-white/10 ring-1 ring-white/10 backdrop-blur flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white/60"><path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72"></path><path d="m14 7 3 3"></path><path d="M5 6v4"></path><path d="M19 14v4"></path><path d="M10 2v2"></path><path d="M7 8H3"></path><path d="M21 16h-4"></path><path d="M11 3H9"></path></svg>
                </div>
                <h3 className="text-lg font-medium text-white/80 mb-2">Your Recommendation</h3>
                <p className="text-sm text-white/50">Complete the quiz to discover your perfect video style</p>
              </div>

              <div ref={cardRef} className="rounded-3xl bg-white/5 ring-1 ring-white/10 backdrop-blur overflow-hidden opacity-0 transition-opacity duration-500" style={{ display: 'none' }}>
                <div className="aspect-video relative overflow-hidden" style={{ background: recommendation?.gradient }}>
                  <div className="absolute inset-0" style={{ animation: 'panGradient 12s ease-in-out infinite' }} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-14 w-14 rounded-2xl bg-white/20 ring-1 ring-white/20 backdrop-blur flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
                    </div>
                  </div>
                </div>
                <div className="p-6 sm:p-8">
                  <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-xs text-emerald-300 ring-1 ring-emerald-500/20 backdrop-blur mb-4">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    Our Recommendation
                  </div>
                  <h3 className="text-xl sm:text-2xl font-semibold mb-2">{recommendation?.title}</h3>
                  <p className="text-base text-white/70 font-medium mb-3">{recommendation?.subtitle}</p>
                  <p className="text-sm text-white/60 leading-relaxed mb-6">{recommendation?.description}</p>
                  <a href="#" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-fuchsia-500 via-violet-500 to-blue-500 px-6 py-3 text-sm font-medium text-white shadow-lg hover:brightness-110 transition">
                    <span>Start This Project</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function labelFor(key: keyof ReturnType<typeof useQuiz>["selections"], opt: string) {
  if (key === 'duration') {
    if (opt === 'Reels') return 'Reels (<1 min)';
    if (opt === 'Explainer') return 'Explainer (1–2 min)';
    if (opt === 'Demo') return 'Demo (2–5 min)';
  }
  return opt;
}


