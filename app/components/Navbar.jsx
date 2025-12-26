import React from "react";

function navbar() {
  return (
    <div className="justify-between h-16 w-full sticky top-0 bg-neutral-900/50 backdrop-blur-sm border-b border-neutral-700/50 flex items-center px-4 sm:px-8 z-50">
      <a className="hover:scale-120 duration-200" href="/">THE LAST MELODY</a>
      <div className="flex gap-16">
        <a className="hover:scale-120 duration-200" href="/how">HOW</a>
        <a className="hover:scale-120 duration-200" href="/characters">CHARACTERS</a>
        <a className="hover:scale-120 duration-200" href="/answers">ANSWERS</a>
      </div>
    </div>
  );
}

export default navbar;
