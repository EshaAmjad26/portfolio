import React from "react";
import Image from "next/image";

const skills = [
  {
    name: "Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: "FastAPI",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
  },
  {
    name: "LangChain",
    icon: "/langchain-color.jpg",
  },
  {
    name: "GitHub",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  {
    name: "HTML",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "C",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
  },
  {
    name: "C++",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
  },
  {
    name: "OpenAI (Agentic AI)",
    icon: "/openai.PNG",
  },
  {
    name: "RAG Systems",
    icon: "https://cdn-icons-png.flaticon.com/512/4712/4712109.png",
  },
  {
    name: "VS Code",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  },
];

function Skills() {
  return (
    <div
      id="skills"
      className="container mx-auto p-8 py-20 bg-gradient-to-b from-purple-900/5 to-black"
    >
      <h2 className="text-6xl font-bold mb-16 text-center">
        <span className="text-purple-300/90">
          Technical Skills
        </span>
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-6 border border-purple-500/10 bg-gradient-to-br from-black/60 to-purple-900/10 backdrop-blur-sm hover:border-purple-400/20 hover:shadow-lg hover:shadow-purple-500/10 hover:-translate-y-2 transition-all duration-300 rounded-xl"
          >
            <div className="relative w-20 h-20 mb-4">
              <Image
                src={skill.icon}
                alt={`${skill.name} icon`}
                fill
                className="object-contain"
                unoptimized
              />
            </div>

            <h3 className="text-lg font-semibold text-white text-center">
              {skill.name}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
