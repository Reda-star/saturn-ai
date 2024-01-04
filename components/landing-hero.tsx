"use client";

import TypewriterComponent from "typewriter-effect";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";

export const LandingHero = () => {

  return (
    <div className="text-white bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 font-bold py-36 text-center space-y-5">
      <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold">
        <h1>The Stunning Platform for</h1>
        <div className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-red-400 to-red-500">
          <TypewriterComponent
            options={{
              strings: [
                "AI Chatbots",
                "Unique Characters​",
                "Fun and Entertainement​"
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
      <div className="text-sm md:text-xl font-light text-white-400">
        Create your own AI 🤖​
      </div>
      <div>
        <Link href="/">
          <Button variant="premium" className="md:text-lg p-4 md:p-6 rounded-full font-semibold hover:scale-110 transition duration-150 ease-in-out">
            Explore Now ✨​
          </Button>
        </Link>
      </div>
    </div>
  );
};
