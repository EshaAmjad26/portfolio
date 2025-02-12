import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="backdrop-blur-sm bg-black/30 text-white py-8 border-t border-blue-200/20">
            <div className="container mx-auto flex flex-col items-center px-4">
                <div className="flex gap-6 mb-6">
                    <a href="https://facebook.com/yourusername" className="hover:text-blue-400 transform hover:scale-110 transition-all duration-300">
                        <FaFacebookF className="text-2xl" />
                    </a>
                    <a href="https://twitter.com/yourusername" className="hover:text-blue-400 transform hover:scale-110 transition-all duration-300">
                        <FaTwitter className="text-2xl" />
                    </a>
                    <a href="https://www.linkedin.com/in/alisha-kayani-a30889202/" className="hover:text-blue-400 transform hover:scale-110 transition-all duration-300">
                        <FaLinkedin className="text-2xl" />
                    </a>
                    <a href="https://github.com/AlishaKK" className="hover:text-blue-400 transform hover:scale-110 transition-all duration-300">
                        <FaGithub className="text-2xl" />
                    </a>
                </div>

                <p className="text-center text-gray-300 font-light">
                    &copy; {new Date().getFullYear()} <span className="font-semibold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Alisha Kayani</span>. All rights reserved.
                </p>

                <nav className="mt-6">
                    <ul className="flex gap-8">
                        <li>
                            <a href="#about" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 relative group">
                                About
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
                            </a>
                        </li>
                        <li>
                            <a href="#projects" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 relative group">
                                Projects
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
                            </a>
                        </li>
                        <li>
                            <a href="#skills" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 relative group">
                                Skills
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
                            </a>
                        </li>
                        <li>
                            <a href="#contact" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 relative group">
                                Contact
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </footer>
    );
}

export default Footer;
