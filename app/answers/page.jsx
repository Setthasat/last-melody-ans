import React from "react";
import { answers } from "../data/answer";
import Navbar from "../components/Navbar";
function Page() {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-neutral-900 via-neutral-900 to-neutral-800 text-neutral-100 py-12 px-4 sm:px-8">
        <div className="max-w-4xl mx-auto">
          <header className="mb-12 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-3 bg-gradient-to-r from-neutral-100 to-neutral-400 bg-clip-text text-transparent">
              เฉลย
            </h1>
          </header>

          <div className="space-y-6">
            {answers.map((answer, index) => (
              <article
                key={index}
                className="group bg-neutral-800/40 backdrop-blur-sm border border-neutral-700/50 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:border-neutral-600 transition-all duration-300"
              >
                <div className="p-6 pb-4">
                  <div className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-neutral-700 to-neutral-600 flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </span>
                    <h2 className="text-lg sm:text-xl font-semibold tracking-tight flex-1 group-hover:text-neutral-50 transition-colors">
                      {answer.text}
                    </h2>
                  </div>
                </div>

                <div className="px-6 pb-6 pl-[4.5rem]">
                  <p className="text-neutral-300 leading-relaxed border-l-2 border-neutral-700 pl-4">
                    {answer.answer}
                  </p>
                </div>
              </article>
            ))}
          </div>

          {answers.length === 0 && (
            <div className="text-center py-20">
              <p className="text-neutral-500 text-lg">No questions available</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Page;
