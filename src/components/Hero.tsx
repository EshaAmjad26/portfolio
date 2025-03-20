import React from 'react';
import Image from 'next/image';
import Navbar from './Navbar';

export default function Hero() {
  return (
    <div 
      id="hero" 
      className='min-h-screen bg-no-repeat p-4 bg-left bg-cover rounded-xl shadow-2xl bg-gradient-to-r from-blue-900/90 via-blue-800/70 to-transparent relative overflow-hidden'
    >
      <Navbar/>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse -top-10 -left-10"></div>
        <div className="absolute w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse -bottom-10 -right-10"></div>
      </div>

      <div className='container mx-auto grid lg:grid-cols-2 h-[calc(100vh-60px)] relative z-10'>
        <div className='hidden lg:flex lg:items-center lg:justify-center'>
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            <div className="w-80 h-80 rounded-full overflow-hidden relative">
              <Image 
                src="/alishaKk.jpg" 
                alt="Alisha"
                layout="fill"
                objectFit="cover"
                className="transform transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          </div>
        </div>

        <div className='flex flex-col justify-center items-center lg:items-start space-y-4'>
          <div className='text-[60px] sm:text-[100px] font-bold leading-tight text-center lg:text-left'>
            <div className='transform hover:scale-105 transition-all duration-500'>
              <p className='animate-fadeIn bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent hover:from-blue-300 hover:to-purple-400'>
                Hello, I&apos;m
              </p>
              <p className='animate-slideIn bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent hover:from-purple-400 hover:to-pink-400'>
                Alisha Kayani
              </p>
              <div className='text-2xl font-bold mt-6 bg-gradient-to-r from-pink-500 to-blue-400 bg-clip-text text-transparent'>
                AI Engineer | Full Stack Developer
              </div>
            </div>
            <div className='text-lg text-gray-300 mt-8 max-w-lg animate-fadeIn opacity-80 leading-relaxed backdrop-blur-sm bg-white/5 p-6 rounded-xl border border-blue-200/20 hover:border-blue-400/50 transition-all duration-300'>
              Innovative AI Engineer and Full Stack Developer dedicated to creating intelligent, scalable, and user-centric solutions. With expertise in artificial intelligence and comprehensive development skills, I transform complex challenges into seamless digital experiences. Let&apos;s collaborate to bring cutting-edge ideas to life.
            </div>
            <a href="#projects">
              <button className='mt-8 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xl rounded-full hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/50'>
                View My Work
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
