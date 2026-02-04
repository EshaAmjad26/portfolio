import React from "react";
import { Card } from "./Card";

interface Project {
  id: number;
  title: string;
  description: string;
  link: string;
  images: string[];
  tags: string[];
}

const projectData: Project[] = [
  {
    id: 1,
    title: "RAG Agent System",
    description:
      "An intelligent Retrieval-Augmented Generation (RAG) based Agentic AI system that retrieves relevant knowledge and generates accurate responses using LLMs. Designed for scalable AI automation and smart knowledge querying.",
    link: "https://github.com/EshaAmjad26/RAG_AGENT",
    images: ["/rag.png"],
    tags: ["Python", "RAG", "LangChain", "Agentic AI", "FastAPI"],
  },

  {
    id: 2,
    title: "PyMentorBot (AI Learning Assistant)",
    description:
      "Final Year Project: An AI-powered learning assistant that helps students understand programming concepts, answer questions, and provide guidance using prompt engineering and LLM-based reasoning.",
    link: "https://github.com/EshaAmjad26/PyMentorBot-main",
    images: ["/pymentorbot.PNG"],
    tags: ["Python", "LLMs", "Prompt Engineering", "AI Assistant"],
  },

  {
    id: 3,
    title: "Quiz Application",
    description:
      "A simple and interactive quiz application built with Python that allows users to attempt quizzes, view scores, and improve learning through practice.",
    link: "https://github.com/EshaAmjad26/Quiz",
    images: ["/quiz module.PNG"],
    tags: ["Python", "CLI App", "Logic Building"],
  },

  {
    id: 4,
    title: "OpenAI SDK Project",
    description:
      "A project demonstrating usage of OpenAI Agents SDK for building intelligent agents, tool calling, and conversational AI workflows.",
    link: "https://github.com/EshaAmjad26/OpenAI_SDK_Project",
    images: ["/front_line.png"],
    tags: ["Python", "OpenAI SDK", "Agentic AI", "Automation"],
  },
];

function Projects() {
  return (
    <div
      id="projects"
      className="container mx-auto p-8 py-20 bg-gradient-to-b from-black to-purple-900/5"
    >
      <h2 className="text-6xl font-bold mb-16 text-center">
        <span className="text-purple-300/90">
          Projects
        </span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectData.map((project) => (
          <Card
            key={project.id}
            id={project.id}
            title={project.title}
            description={project.description}
            link={project.link}
            images={project.images}
            tags={project.tags}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
