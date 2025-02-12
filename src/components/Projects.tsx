"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const data = [
    {
        id: 1,
        title: "AI Image Generator",
        description: "AI Image Generator: This project leverages advanced AI techniques to generate stunning images based on user input. Built with Next.js and TypeScript, it offers a seamless and dynamic user experience while utilizing Prisma for efficient database management and Neon for enhanced scalability. The stylish interface incorporates ShadCN to provide an intuitive design, making it easy for users to create high-quality images effortlessly.",
        link: "https://github.com/AlishaKK/AI-Image-Generator.git",
        images: ["/AiHis.png", "/AiImage.png", "/AiCreate.png"],
        tags: ["Next.js", "Typescript", "ShadCN", "Prisma", "Neon"]
    },
    {
        id: 2,
        title: "Feast & Fussion",
        description: "Feast & Fussion: This innovative web application brings culinary inspiration to your fingertips by combining diverse recipes and food ideas. Designed using Next.js and TypeScript, it ensures robust performance and type safety. The responsive interface employs Tailwind CSS for a modern, sleek design and ShadCN for enhanced UI components, allowing users to easily explore and discover new dishes.",
        link: "https://github.com/AlishaKK/Next-Js.git",
        images: ["/Feast.png", "/fussion.png", "/fff.png", "/fu.png"],
        tags: ["Next.js", "Typescript", "ShadCN", "tailwindCss"]
    },
    {
        id: 3,
        title: "Weather app & countdown",
        description: "Weather App & Countdown: This versatile application provides real-time weather updates and a countdown feature for upcoming events or deadlines. Built with Next.js and TypeScript, it offers a dynamic and responsive user experience. Users can easily check the weather conditions in their area while keeping track of important dates.",
        link: "https://github.com/AlishaKK/WeatherApp.git",
        images: ["/weatherApp.png", "/project1.png", "/pp.png"],
        tags: ["Next.js", "Typescript"]
    },
];

function Projects() {
    return (
        <div id="projects" className="container mx-auto p-8 bg-gradient-to-r from-blue-900/10 to-transparent rounded-xl">
            <h1 className="text-5xl font-extrabold mb-12 text-center bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
                My Projects
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {data.map(project => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </div>
    );
}

function ProjectCard({ project }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            if (!isHovered) {
                setCurrentImageIndex(prevIndex => (prevIndex + 1) % project.images.length);
            }
        }, 3000);

        return () => clearInterval(interval);
    }, [project.images.length, isHovered]);

    return (
        <div 
            className="rounded-xl overflow-hidden bg-white/5 backdrop-blur-sm border border-blue-200/20 
                     shadow-lg hover:shadow-blue-400/20 transform hover:scale-105 transition-all duration-300"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="p-8">
                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent hover:scale-105 transform transition-all duration-300">
                    {project.title}
                </h2>
                <p className="text-gray-300 mb-6 leading-relaxed text-lg font-light tracking-wide hover:text-white transition-colors duration-300">
                    {project.description}
                </p>
                
                <Link 
                    href={project.link} 
                    className="inline-block px-8 py-3 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500
                             text-white rounded-full hover:from-pink-500 hover:via-purple-500 hover:to-blue-400
                             transition-all duration-500 transform hover:scale-110 font-semibold tracking-wide shadow-lg hover:shadow-purple-500/30"
                    target="_blank"
                >
                    View Project
                </Link>
            </div>
            
            <div className="relative h-72 w-full">
                <Image
                    src={project.images[currentImageIndex]}
                    alt={`${project.title} Image ${currentImageIndex + 1}`}
                    fill
                    className="object-cover transition-all duration-700 hover:scale-110 filter hover:brightness-110"
                />
            </div>
            
            <div className="p-8">
                <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                    Technologies Used
                </h3>
                <div className="flex flex-wrap gap-3">
                    {project.tags.map(tag => (
                        <span 
                            key={tag} 
                            className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-400/10 to-purple-500/10 
                                     border border-blue-200/30 text-blue-200 text-sm font-medium tracking-wider
                                     hover:border-blue-400/50 hover:text-blue-100 transition-all duration-300
                                     transform hover:scale-105 shadow-sm hover:shadow-blue-500/20"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Projects;
