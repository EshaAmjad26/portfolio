'use client';
import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { href: "#hero", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
    { href: "#education", label: "Education" }
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className='w-full fixed top-0 left-0 right-0 z-50 px-4 py-6'>
      <div className='max-w-[2000px] mx-auto flex justify-between items-center px-8 py-6 backdrop-blur-lg bg-gradient-to-r from-black/40 to-blue-900/30 rounded-2xl shadow-[0_0_15px_rgba(0,0,255,0.2)] border border-blue-200/30 hover:shadow-[0_0_25px_rgba(0,0,255,0.3)] hover:border-blue-300/40 transition-all duration-500'>
        
        {/* Logo */}
        <div className='text-5xl font-large transition-all duration-500 tracking-tight transform hover:scale-105'>
          <span className='font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient'>Alisha</span> 
          <span className='font-light bg-gradient-to-r from-pink-200 to-blue-200 bg-clip-text text-transparent'>Kayani</span>
        </div>

        {/* Desktop Menu */}
        <ul className='gap-10 lg:gap-16 hidden md:flex items-center'>
          {menuItems.map((item, index) => (
            <li key={index} className='menuLink relative text-2xl font-bold group'>
              <a href={item.href} className='block px-4 py-2 transition-all duration-500 hover:scale-110 text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-pink-200 hover:from-blue-400 hover:to-pink-400'>
                {item.label}
                <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-pink-400 transition-all duration-500 group-hover:w-full'></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu} 
          className='md:hidden focus:outline-none hover:rotate-180 transition-all duration-500'
          aria-label='Toggle menu'
        >
          {isMenuOpen ? 
            <AiOutlineClose size={30} className="text-blue-300 hover:text-pink-300 hover:rotate-90 transition-all"/> : 
            <AiOutlineMenu size={30} className="text-blue-300 hover:text-pink-300 hover:rotate-90 transition-all"/>
          }
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className='absolute top-28 left-4 right-4 bg-gradient-to-b from-black/40 to-blue-900/30 backdrop-blur-lg rounded-xl shadow-[0_0_20px_rgba(0,0,255,0.3)] md:hidden border border-blue-200/30 animate-fadeIn'>
            <ul className='flex flex-col items-center py-4'>
              {menuItems.map((item, index) => (
                <li key={index} className='w-full'>
                  <a 
                    href={item.href}
                    onClick={toggleMenu}
                    className='block py-4 text-2xl font-bold text-center bg-gradient-to-r from-blue-200 to-pink-200 bg-clip-text text-transparent hover:from-blue-400 hover:to-pink-400 transition-all duration-500 relative overflow-hidden hover:scale-105 transform'
                  >
                    {item.label}
                    <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-pink-400 transition-all duration-500 group-hover:w-full'></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
