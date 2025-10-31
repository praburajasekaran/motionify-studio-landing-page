import Image from "next/image";

export default function PortfolioGrid() {
  const cards = [
    {
      title: "Fitch Learning",
      subtitle: "Educational Video Series",
      img: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=1400&auto=format&fit=crop",
      accent: "from-indigo-500/35 via-blue-500/20",
    },
    {
      title: "Indospace",
      subtitle: "3D Simulation Walkthrough",
      img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1400&auto=format&fit=crop",
      accent: "from-cyan-500/35 via-blue-500/20",
    },
    {
      title: "TVS Credit",
      subtitle: "Financial Product Explainer",
      img: "https://images.unsplash.com/photo-1553729784-e91953dec042?q=80&w=1400&auto=format&fit=crop",
      accent: "from-emerald-500/35 via-teal-500/20",
    },
    {
      title: "Wild Watches",
      subtitle: "Animated Brand Promo",
      img: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=1400&auto=format&fit=crop",
      accent: "from-amber-500/35 via-rose-500/20",
    },
    {
      title: "Dopplr",
      subtitle: "SaaS Launch Story",
      img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1400&auto=format&fit=crop",
      accent: "from-violet-600/35 via-indigo-500/20",
    },
  ];

  return (
    <section className="relative overflow-hidden py-16 sm:py-20 bg-gray-50 text-gray-900">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0" style={{ background: "linear-gradient(120deg, rgba(99,102,241,0.06), rgba(59,130,246,0.06) 40%, rgba(168,85,247,0.06))", animation: "panGradient 22s ease-in-out infinite" }} />
        <div className="absolute inset-0 opacity-60" style={{ backgroundImage: "repeating-linear-gradient(0deg, rgba(17,24,39,0.03) 0px, rgba(17,24,39,0.03) 1px, transparent 1px, transparent 3px)" }} />
        <div className="absolute -inset-x-20 -top-24 h-56 rounded-full blur-3xl opacity-40" style={{ background: "radial-gradient(60% 120% at 50% 0%, rgba(99,102,241,0.20), rgba(99,102,241,0))" }} />
        <div className="absolute -inset-x-24 -bottom-28 h-72 rounded-full blur-3xl opacity-35" style={{ background: "radial-gradient(80% 140% at 50% 100%, rgba(59,130,246,0.16), rgba(59,130,246,0))" }} />
      </div>

      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <div className="flex items-end justify-between mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight">See Creativity in Motion.</h2>
          </div>

          <div className="relative">
            <div className="pointer-events-none absolute -inset-x-10 -top-6 h-24 rounded-full blur-2xl opacity-70" style={{ background: "radial-gradient(60% 100% at 50% 50%, rgba(99,102,241,0.18), rgba(99,102,241,0))" }} />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6">
              {cards.map((c, i) => (
                <a key={c.title} href="#" className="group relative rounded-2xl overflow-hidden bg-white/60 ring-1 ring-gray-200 shadow-sm hover:shadow-xl transition">
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent to-transparent" />
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image src={c.img} alt={c.title} width={1280} height={800} className="w-full h-full object-cover transition duration-500 ease-out group-hover:scale-[1.04]" />
                    <div className={`absolute inset-0 bg-gradient-to-tr ${c.accent} to-transparent opacity-70 transition duration-300 group-hover:opacity-80`} />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition duration-300">
                        <div className="h-11 w-11 rounded-full bg-white/90 ring-1 ring-black/5 shadow-lg flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-3 sm:p-4">
                    <p className="text-sm font-medium tracking-tight">{c.title}</p>
                    <p className="text-xs text-gray-600 mt-0.5">{c.subtitle}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-8 sm:mt-10 flex justify-center">
              <a href="#" className="inline-flex items-center gap-2 sm:px-6 hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-300 text-sm font-medium text-white bg-gradient-to-r from-violet-600 to-blue-600 rounded-full pt-3 pr-5 pb-3 pl-5 shadow-[0_8px_24px_rgba(99,102,241,0.25)]">
                Explore Full Portfolio
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


