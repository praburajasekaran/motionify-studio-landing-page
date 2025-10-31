import Image from "next/image";

export default function Header() {
  return (
    <header className="relative z-20 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-5">
          <a href="#" className="inline-flex items-center gap-3 group">
            <Image
              src="/motionify-light-logo.png"
              alt="Motionify.Studio"
              width={120}
              height={36}
              className="h-8 sm:h-9 w-auto transition-opacity group-hover:opacity-90"
              priority
            />
          </a>
          <div className="hidden sm:flex items-center gap-3">
            <a href="#" className="text-sm text-white/80 hover:text-white transition">Work</a>
            <a href="#" className="text-sm text-white/80 hover:text-white transition">Approach</a>
            <a href="#" className="text-sm text-white/80 hover:text-white transition">Pricing</a>
            <a href="#" className="inline-flex items-center gap-2 rounded-full bg-white text-gray-900 px-4 py-2 text-sm font-medium hover:bg-gray-100 transition shadow">
              Get in touch
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
            </a>
          </div>
          <button aria-label="Open menu" className="sm:hidden inline-flex items-center bg-gradient-to-r from-violet-600 to-blue-600 text-white px-2.5 py-2 rounded-md hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-300 transition">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
          </button>
        </div>
      </div>
    </header>
  );
}


