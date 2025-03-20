import React from 'react';

const About = () => {
    return (
        <section id="about" className="container mx-auto p-8 bg-gradient-to-r from-blue-900/10 to-transparent rounded-xl">
            <h2 className="text-5xl font-extrabold mb-12 text-center bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
                About Me
            </h2>
            <div className="backdrop-blur-sm bg-white/5 p-12 rounded-2xl border border-blue-200/20 shadow-xl hover:shadow-blue-400/30 transition-all duration-500 transform hover:scale-[1.02]">
                <p className="text-xl mb-10 text-gray-300 leading-relaxed font-light tracking-wide hover:text-white transition-colors duration-300">
                    Hello! I{"'"}m a passionate <span className="font-semibold text-blue-400">AI Engineer</span> and Full-Stack Developer with experience in building web applications
                    using modern technologies. I specialize in AI-driven solutions, leveraging my expertise to create intelligent, efficient, and scalable applications. 
                    I enjoy crafting intuitive and dynamic user experiences while solving complex problems through innovative solutions.
                </p>
                
                <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">Skills & Expertise</h3>
                <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-10">
                    {["JavaScript (ES6+)", "React", "Next.js", "FastAPI", "Python", "LangChain", "CrewAI", "PostgreSQL", "Tailwind CSS", "Git & GitHub", "TypeScript", "AI Concepts"].map((skill, index) => (
                        <li key={index} className="flex items-center bg-gradient-to-r from-blue-400/10 to-purple-500/10 p-4 rounded-xl border border-blue-200/20 hover:border-blue-400/50 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/20">
                            <span className="text-blue-400 text-xl">▹</span>
                            <span className="ml-3 text-gray-300 font-medium">{skill}</span>
                        </li>
                    ))}
                </ul>

                <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">Let{"'"}s Connect</h3>
                <div className="text-gray-300 space-y-4">
                    <p className="text-lg mb-4">Find me on professional networks:</p>
                    <div className="flex flex-wrap gap-4">
                        <a href="https://github.com/AlishaKK" className="flex items-center px-6 py-3 bg-gradient-to-r from-blue-400/10 to-purple-500/10 rounded-xl border border-blue-200/20 hover:border-blue-400/50 hover:text-blue-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/20">
                            GitHub
                        </a>
                        <a href="https://www.linkedin.com/in/alisha-kayani-a30889202/" className="flex items-center px-6 py-3 bg-gradient-to-r from-blue-400/10 to-purple-500/10 rounded-xl border border-blue-200/20 hover:border-blue-400/50 hover:text-blue-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/20">
                            LinkedIn
                        </a>
                        <a href="mailto:alishakayani.ai@gmail.com" className="flex items-center px-6 py-3 bg-gradient-to-r from-blue-400/10 to-purple-500/10 rounded-xl border border-blue-200/20 hover:border-blue-400/50 hover:text-blue-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/20">
                            Email Me
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
