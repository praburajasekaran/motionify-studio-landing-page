import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative bg-gray-950 border-t border-white/5 text-white">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex flex-col items-center md:items-start gap-6 text-center md:text-left">
            <Image src="/motionify-light-logo.png" alt="Motionify.Studio" width={120} height={32} />
            <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
              F Block, Plot No: 264, Door No: F/22, 2nd Floor,<br />
              3rd, 2nd Main Rd, Block F, Anna Nagar,<br />
              Chennai - 600102
            </p>
          </div>
          <div className="flex flex-col items-center gap-8">
            <a href="#" className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <span>Get Started</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </a>
            <div className="flex items-center gap-4">
              {['IN.','LI.','FB.','YT.'].map((s) => (
                <a key={s} href="#" className="text-gray-400 hover:text-white text-sm font-medium tracking-wide transition-colors duration-300">{s}</a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/5 text-center">
          <p className="text-gray-500 text-sm">© 2025 Motionify.Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}


