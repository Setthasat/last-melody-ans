import React from "react";
import Navbar from "../components/Navbar";
import { characters } from "../data/character";

function Page() {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-neutral-900 via-neutral-900 to-neutral-800 text-neutral-100 py-12 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <header className="mb-12 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-3 bg-gradient-to-r from-neutral-100 to-neutral-400 bg-clip-text text-transparent">
              ตัวละคร
            </h1>
          </header>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {characters.map((char) => (
              <article
                key={char.name}
                className="group bg-neutral-800/40 backdrop-blur-sm border border-neutral-700/50 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:border-neutral-600 transition-all duration-300 hover:-translate-y-1"
              >
                {char.img && char.img.length > 0 && (
                  <div className="relative bg-neutral-900/50">
                    <div className="grid grid-cols-1 gap-2 p-2">
                      {char.img.map((src, index) => (
                        <div
                          key={index}
                          className="relative w-full aspect-square overflow-hidden rounded-lg"
                        >
                          <img
                            src={src}
                            alt={`${char.name} - image ${index + 1}`}
                            className="w-full h-full object-contain bg-neutral-900 transition-transform duration-300 group-hover:scale-105"
                            loading="lazy"
                          />
                        </div>
                      ))}
                    </div>
                    <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-neutral-800/80 to-transparent pointer-events-none" />
                  </div>
                )}
                <div className="p-6">
                  <header className="mb-4">
                    <div className="flex w-full justify-between">
                      <h2 className="text-2xl font-bold tracking-tight mb-2 group-hover:text-neutral-50 transition-colors">
                        {char.name}
                      </h2>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-neutral-700/50 text-neutral-200 border border-neutral-600">
                        {char.team}
                      </span>
                    </div>
                  </header>
                  <p className="text-sm text-neutral-300 leading-relaxed mb-3">
                    {char.description}
                  </p>
                  {char.skill && (
                    <div className="mt-4 pt-4 border-t border-neutral-700/50">
                      <p className="text-xs uppercase tracking-wider text-neutral-500 mb-1 font-semibold">
                        Special Ability
                      </p>
                      <p className="text-sm text-neutral-400 italic">
                        {char.skill}
                      </p>
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
          {characters.length === 0 && (
            <div className="text-center py-20">
              <p className="text-neutral-500 text-lg">No characters found</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Page;
