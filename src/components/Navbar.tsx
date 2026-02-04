"use client";
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { href: "#hero", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
    { href: "#education", label: "Education" },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="w-full fixed top-0 left-0 right-0 z-50 px-4 py-6">
      <div className="max-w-[2000px] mx-auto flex justify-between items-center px-8 py-6 backdrop-blur-md bg-black/80 rounded-2xl border border-purple-500/10 shadow-lg shadow-purple-500/5">
        {/* Logo */}
        <div className="text-4xl font-bold tracking-tight">
          <span className="text-white">Esha</span>
          <span className="text-purple-300"> Amjad</span>
        </div>

        {/* Desktop Menu */}
        <ul className="gap-10 lg:gap-16 hidden md:flex items-center">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="menuLink relative text-lg font-medium group"
            >
              <a
                href={item.href}
                className="block px-4 py-2 text-white hover:text-purple-300 transition-colors duration-300"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-300/60 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden focus:outline-none transition-all duration-300"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <AiOutlineClose
              size={30}
              className="text-white hover:text-purple-300 transition-colors"
            />
          ) : (
            <AiOutlineMenu
              size={30}
              className="text-white hover:text-purple-300 transition-colors"
            />
          )}
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-28 left-4 right-4 bg-black/95 backdrop-blur-md rounded-xl shadow-xl md:hidden border border-purple-500/10">
            <ul className="flex flex-col items-center py-4">
              {menuItems.map((item, index) => (
                <li key={index} className="w-full">
                  <a
                    href={item.href}
                    onClick={toggleMenu}
                    className="block py-4 text-lg font-medium text-center text-white hover:text-purple-300 transition-colors duration-300"
                  >
                    {item.label}
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
