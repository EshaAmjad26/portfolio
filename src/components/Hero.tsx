import React from "react";
import Navbar from "./Navbar";
import Image from "next/image";

export default function Hero() {
  return (
    <div
      id="hero"
      className="min-h-screen bg-gradient-to-br from-black via-purple-900/10 to-black p-4 relative overflow-hidden"
    >
      <Navbar />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse -top-20 -left-20"></div>
        <div className="absolute w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-pulse -bottom-20 -right-20"></div>
      </div>

      <div className="container mx-auto grid lg:grid-cols-2 h-[calc(100vh-60px)] relative z-10 pt-20">
        {/* Image Section */}
        <div className="hidden lg:flex lg:items-center lg:justify-center">
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-purple-500/30 via-purple-400/30 to-purple-500/30 rounded-full blur-lg opacity-40 group-hover:opacity-50 transition duration-500"></div>
            <div className="w-80 h-80 relative rounded-full overflow-hidden border-2 border-purple-300/20">
              <Image
                src="/esha.png"
                alt="Esha Amjad"
                width={320}
                height={320}
                priority
                className="w-80 h-80 object-cover rounded-full transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>
        </div>

        {/* Text Section */}
        <div className="flex flex-col justify-center items-center lg:items-start space-y-6">
          <div className="text-[60px] sm:text-[90px] font-bold leading-tight text-center lg:text-left">
            <p className="text-purple-300/80 text-xl font-normal mb-4">
              Hello, I&apos;m
            </p>

            <p className="text-white mb-4 bg-gradient-to-r from-white via-purple-100 to-purple-200 bg-clip-text text-transparent">
              Esha Amjad
            </p>

            <div className="text-2xl font-normal mt-6 text-purple-200/90">
              AI Engineer | Python & Agentic AI Developer
            </div>
          </div>

          <div className="text-lg text-gray-300 mt-8 max-w-lg leading-relaxed">
            Computer Science graduate passionate about Artificial
            Intelligence, Agentic systems, and AI automation. I build
            practical AI solutions using Python, RAG, and prompt engineering
            to turn ideas into real-world intelligent applications.
          </div>

          <a href="#projects">
            <button className="mt-8 px-10 py-4 bg-gradient-to-r from-purple-500/80 to-purple-400/80 text-white text-lg font-semibold rounded-full hover:from-purple-500 hover:to-purple-400 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-purple-500/20">
              View My Work
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
