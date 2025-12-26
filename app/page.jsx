import React from "react";
import Link from "next/link";

function Home() {
  return (
    <div className="flex flex-col w-screen h-screen items-center justify-center bg-gradient-to-br from-neutral-900 via-neutral-900 to-neutral-800 text-neutral-100 px-4">
      {/* Title */}
      <div className="text-center mb-16 animate-fade-in">
        <h1 className="font-bold text-5xl sm:text-7xl tracking-tight mb-4 bg-gradient-to-r from-neutral-100 via-neutral-300 to-neutral-400 bg-clip-text text-transparent">
          The Last Melody
        </h1>
        
      </div>

      {/* Navigation Links */}
      <nav className="flex flex-col gap-4 w-full max-w-md">
        <Link
          href="/characters"
          className="group relative bg-neutral-800/40 backdrop-blur-sm border border-neutral-700/50 rounded-xl px-8 py-6 text-center text-xl font-semibold tracking-wide transition-all duration-300 hover:border-neutral-600 hover:bg-neutral-800/60 hover:-translate-y-1 hover:shadow-2xl overflow-hidden"
        >
          <span className="relative z-10">CHARACTERS</span>
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-700/0 via-neutral-700/10 to-neutral-700/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
        </Link>

        <Link
          href="/answers"
          className="group relative bg-neutral-800/40 backdrop-blur-sm border border-neutral-700/50 rounded-xl px-8 py-6 text-center text-xl font-semibold tracking-wide transition-all duration-300 hover:border-neutral-600 hover:bg-neutral-800/60 hover:-translate-y-1 hover:shadow-2xl overflow-hidden"
        >
          <span className="relative z-10">ANSWERS</span>
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-700/0 via-neutral-700/10 to-neutral-700/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
        </Link>

        <Link
          href="/how"
          className="group relative bg-neutral-800/40 backdrop-blur-sm border border-neutral-700/50 rounded-xl px-8 py-6 text-center text-xl font-semibold tracking-wide transition-all duration-300 hover:border-neutral-600 hover:bg-neutral-800/60 hover:-translate-y-1 hover:shadow-2xl overflow-hidden"
        >
          <span className="relative z-10">HOW TO PLAY</span>
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-700/0 via-neutral-700/10 to-neutral-700/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
        </Link>
      </nav>

      {/* Footer */}
      <div className="absolute bottom-8 text-neutral-500 text-sm">
        <p>Choose your path wisely</p>
      </div>
    </div>
  );
}

export default Home;
