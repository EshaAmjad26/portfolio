import React from 'react';
import Image from 'next/image';

const skills = [
    { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
    { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Tailwind CSS', icon: '/tw.jpeg' },
    { name: 'Prisma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg' },
    { name: 'ShadCN', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg' },
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'FastAPI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' },
    { name: 'CrewAI', icon: '/c.jpeg' },
    { name: 'LangChain', icon: '/langchain-color.jpg' },
];

function Skills() {
    return (
        <div id="skills" className="container mx-auto p-8 bg-gradient-to-r from-blue-900/10 to-transparent rounded-xl">
            <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Technical Skills
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {skills.map((skill, index) => (
                    <div 
                        key={index} 
                        className="flex flex-col items-center p-6 rounded-xl bg-white/5 backdrop-blur-sm 
                                 border border-blue-200/20 shadow-lg hover:shadow-blue-400/20 
                                 transform hover:scale-105 transition-all duration-300"
                    >
                        <div className="relative w-20 h-20 mb-4">
                            <Image 
                                src={skill.icon} 
                                alt={`${skill.name} icon`} 
                                fill
                                className="hover:animate-spin-slow"
                                unoptimized
                            />
                        </div>
                        <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                            {skill.name}
                        </h3>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Skills;
