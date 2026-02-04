import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="container mx-auto p-8 py-20 bg-gradient-to-b from-black to-purple-900/5"
    >
      <h2 className="text-6xl font-bold mb-16 text-center">
        <span className="text-purple-300/90">
          About Me
        </span>
      </h2>

      <div className="border border-purple-500/10 bg-gradient-to-br from-black/60 to-purple-900/10 backdrop-blur-sm p-12 rounded-xl shadow-lg shadow-purple-500/5">
        {/* ABOUT TEXT */}
        <p className="text-lg mb-10 text-gray-300 leading-relaxed">
          Hello! I&apos;m{" "}
          <span className="font-semibold text-purple-300/90">Esha Amjad</span>, a
          passionate{" "}
          <span className="font-semibold text-purple-300/90">
            AI Engineer & Python Developer
          </span>{" "}
          who loves exploring Artificial Intelligence, Agentic systems, and AI
          automation. I enjoy learning new tools, experimenting with ideas, and
          building practical AI solutions using Python, RAG, and prompt
          engineering. My goal is to turn innovative ideas into real-world
          intelligent applications.
        </p>

        {/* SKILLS */}
        <h3 className="text-3xl font-bold mb-8 text-white">
          Skills & Expertise
        </h3>

        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-10">
          {[
            "Python",
            "Agentic AI (OpenAI Agents SDK)",
            "RAG (Retrieval-Augmented Generation)",
            "Prompt Engineering",
            "FastAPI",
            "LangChain",
            "Claude Code",
            "Git & GitHub",
            "HTML & CSS",
            "JavaScript",
            "C / C++",
            "AI Automation",
            "Problem Solving",
          ].map((skill, index) => (
            <li
              key={index}
              className="flex items-center p-4 border border-purple-500/10 bg-black/40 hover:border-purple-400/20 hover:bg-purple-900/10 transition-all duration-300 rounded-lg"
            >
              <span className="text-purple-300/70 text-lg mr-3">▹</span>
              <span className="text-gray-300 font-medium text-sm">{skill}</span>
            </li>
          ))}
        </ul>

        {/* CONNECT */}
        <h3 className="text-3xl font-bold mb-8 text-white">
          Let&apos;s Connect
        </h3>

        <div className="text-gray-300 space-y-4">
          <p className="text-lg mb-4">Find me on professional networks:</p>

          <div className="flex flex-wrap gap-4">
            <a
              href="https://github.com/EshaAmjad26"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-6 py-3 border border-purple-500/10 bg-gradient-to-r from-purple-600/15 to-purple-400/15 hover:border-purple-400/20 hover:from-purple-600/20 hover:to-purple-400/20 text-white transition-all duration-300 rounded-lg"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/esha-amjad-06599735b/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-6 py-3 border border-purple-500/10 bg-gradient-to-r from-purple-600/15 to-purple-400/15 hover:border-purple-400/20 hover:from-purple-600/20 hover:to-purple-400/20 text-white transition-all duration-300 rounded-lg"
            >
              LinkedIn
            </a>

            <a
              href="mailto:esha26amjad@gmail.com"
              className="flex items-center px-6 py-3 border border-purple-500/10 bg-gradient-to-r from-purple-600/15 to-purple-400/15 hover:border-purple-400/20 hover:from-purple-600/20 hover:to-purple-400/20 text-white transition-all duration-300 rounded-lg"
            >
              Email Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
