import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t border-purple-500/10 bg-black text-white py-12">
      <div className="container mx-auto flex flex-col items-center px-4">
        <div className="flex gap-6 mb-8">
          <a
            href="https://www.linkedin.com/in/esha-amjad-06599735b/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-purple-300/80 transition-colors duration-300"
          >
            <FaLinkedin className="text-2xl" />
          </a>
          <a
            href="https://github.com/EshaAmjad26"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-purple-300/80 transition-colors duration-300"
          >
            <FaGithub className="text-2xl" />
          </a>
          <a
            href="mailto:esha26amjad@gmail.com"
            className="text-gray-400 hover:text-purple-300/80 transition-colors duration-300"
          >
            <FaEnvelope className="text-2xl" />
          </a>
        </div>

        <p className="text-center text-gray-400 font-light mb-6">
          &copy; {new Date().getFullYear()}{" "}
          <span className="font-medium text-purple-300/90">
            Esha Amjad
          </span>
          . All rights reserved.
        </p>

        <nav className="mt-6">
          <ul className="flex gap-8">
            <li>
              <a
                href="#about"
                className="text-gray-400 hover:text-purple-300/80 transition-colors duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="text-gray-400 hover:text-purple-300/80 transition-colors duration-300"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="text-gray-400 hover:text-purple-300/80 transition-colors duration-300"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-gray-400 hover:text-purple-300/80 transition-colors duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
