import React from "react";

function Home() {
  return (
    <div className="flex flex-col w-screen h-screen items-center pt-24 ">
      <h1 className="font-bold text-4xl sm:text-5xl">The Last Melody</h1>
      <div className="flex flex-col gap-4 mt-24 text-2xl">
        <a href="/characters">CHARACTERS</a>
        <a href="/answers">ANSWERS</a>
        <a href="/how">HOW TO PLAY</a>
      </div>
    </div>
  );
}

export default Home;
