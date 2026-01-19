"use client";
import React, { useState, useEffect } from "react";
import { hows } from "../data/hows";
import Navbar from "../components/Navbar";

function Page() {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-neutral-900 via-neutral-900 to-neutral-800 text-neutral-100 py-12 px-4 sm:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <header className="mb-12 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-3 bg-gradient-to-r from-neutral-100 to-neutral-400 bg-clip-text text-transparent">
              How to Play
            </h1>
          </header>

          {/* Content Sections */}
          <div className="space-y-8">
            {hows
              .filter((section) => !section.images || section.images.length === 0)
              .map((section, index) => (
                <article
                  key={index}
                  className="bg-neutral-800/40 backdrop-blur-sm border border-neutral-700/50 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:border-neutral-600 transition-all duration-300"
                >
                  {/* Section Header */}
                  <div className="p-6 border-b border-neutral-700/50 bg-gradient-to-r from-neutral-800/60 to-neutral-800/20">
                    <div className="flex items-center gap-4">
                      <span className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-neutral-700 to-neutral-600 flex items-center justify-center text-lg font-bold">
                        {index + 1}
                      </span>
                      <h2 className="text-2xl font-bold tracking-tight">
                        {section.text}
                      </h2>
                    </div>
                  </div>

                  {/* Section Content */}
                  <div className="p-6">
                    {/* Description */}
                    {section.description && (
                      <p className="text-neutral-300 leading-relaxed mb-6">
                        {section.description}
                      </p>
                    )}

                    {/* Cards (for Card & Token section) */}
                    {section.crads && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {section.crads.map((card, cardIndex) => (
                          <div
                            key={cardIndex}
                            className="bg-neutral-900/50 rounded-lg p-4 border border-neutral-700/30 hover:border-neutral-600 transition-colors"
                          >
                            {/* Card Image */}
                            {card.img && (
                              <div className="mb-3 rounded-md overflow-hidden bg-neutral-800">
                                <div className="w-full aspect-square flex items-center justify-center p-2">
                                  <img
                                    src={card.img}
                                    alt={card.title}
                                    className="max-w-full max-h-full object-contain"
                                    loading="lazy"
                                    onError={(e) => {
                                      console.log(
                                        "Image failed to load:",
                                        card.img
                                      );
                                    }}
                                  />
                                </div>
                              </div>
                            )}

                            {/* Card Title */}
                            <h3 className="text-lg font-semibold text-neutral-100 mb-2">
                              {card.title}
                            </h3>

                            {/* Card Description */}
                            <p className="text-sm text-neutral-400 leading-relaxed">
                              {card.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Teams (for How to Win section) */}
                    {section.team && (
                      <div className="space-y-4">
                        {section.team.map((team, teamIndex) => (
                          <div
                            key={teamIndex}
                            className="bg-neutral-900/50 rounded-lg p-5 border border-neutral-700/30"
                          >
                            <h3 className="text-xl font-bold text-neutral-100 mb-3 capitalize">
                              {team.title}
                            </h3>

                            {/* Conditions */}
                            {team.codition && (
                              <ul className="space-y-2">
                                {team.codition.map((condition, condIndex) => (
                                  <li
                                    key={condIndex}
                                    className="flex items-start gap-3 text-neutral-300"
                                  >
                                    <svg
                                      className="w-5 h-5 text-neutral-500 flex-shrink-0 mt-0.5"
                                      fill="currentColor"
                                      viewBox="0 0 20 20"
                                    >
                                      <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                        clipRule="evenodd"
                                      />
                                    </svg>
                                    <span className="text-sm leading-relaxed">
                                      {condition}
                                    </span>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </article>
              ))}
          </div>

          {/* slideshow */}
          {(() => {
            const example = hows.find((s) => s.images && s.images.length > 0);
            const images = example?.images ?? [];

            const [idx, setIdx] = useState(0);

            useEffect(() => {
              if (!images.length) return;
              const t = setTimeout(
                () => setIdx((i) => (i + 1) % images.length),
                4500
              );
              return () => clearTimeout(t);
            }, [idx, images.length]);

            if (!images.length) return null;

            return (
              <article className="mt-8 bg-neutral-800/40 backdrop-blur-sm border border-neutral-700/50 rounded-xl overflow-hidden shadow-lg transition-all duration-300">
                <div className="p-6 border-b border-neutral-700/50 bg-gradient-to-r from-neutral-800/60 to-neutral-800/20">
                  <div className="flex items-center gap-4">
                    <span className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-neutral-700 to-neutral-600 flex items-center justify-center text-lg font-bold">
                      {hows.findIndex((s) => s === example) + 1}
                    </span>
                    <h2 className="text-2xl font-bold tracking-tight">
                      {example.text}
                    </h2>
                  </div>
                </div>

                <div className="p-6">
                  <div className="relative">
                    <div className="w-full h-full rounded-lg overflow-hidden bg-neutral-900">
                      <img
                        src={images[idx]}
                        alt={`slide-${idx}`}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <button
                      onClick={() =>
                        setIdx((i) => (i - 1 + images.length) % images.length)
                      }
                      aria-label="Previous"
                      className="absolute left-3 top-1/2 -translate-y-1/2 bg-neutral-800/60 hover:bg-neutral-700 text-neutral-100 p-2 rounded-full"
                    >
                      ‹
                    </button>

                    <button
                      onClick={() => setIdx((i) => (i + 1) % images.length)}
                      aria-label="Next"
                      className="absolute right-3 top-1/2 -translate-y-1/2 bg-neutral-800/60 hover:bg-neutral-700 text-neutral-100 p-2 rounded-full"
                    >
                      ›
                    </button>

                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                      {images.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setIdx(i)}
                          aria-label={`Go to slide ${i + 1}`}
                          className={`w-2 h-2 rounded-full ${
                            i === idx ? "bg-neutral-100" : "bg-neutral-600"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            );
          })()}
        </div>
      </div>
    </div>
  );
}

export default Page;