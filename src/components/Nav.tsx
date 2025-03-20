'use client';
import React from 'react';

const navLinks = [
  { path: "#hero", label: "Home" },
  { path: "#about", label: "About" },
  { path: "#projects", label: "Projects" },
  { path: "#skills", label: "Skills" },
  { path: "#contact", label: "Contact" },
  { path: "#education", label: "Education" }
];

const Nav = () => {
  return (
    <nav>
      <ul className="flex gap-6">
        {navLinks.map((link, index) => (
          <li key={index}>
            <a
              href={link.path}
              className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-400 hover:from-blue-600 hover:to-pink-600 transition-all duration-300"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
