"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

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
        title: "AI Image Generator",
        description: "An AI-powered image generator built with Next.js and TypeScript. Create stunning visuals using advanced AI algorithms. Features real-time generation, customizable parameters, and a gallery view. Uses Prisma and Neon for robust data management.",
        link: "https://github.com/AlishaKK/AI-Image-Generator.git",
        images: ["/AiHis.png", "/AiImage.png", "/AiCreate.png"],
        tags: ["Next.js", "Typescript", "ShadCN", "Prisma", "Neon"]
    },
    {
        id: 2,
        title: "Feast & Fussion",
        description: "A modern recipe platform combining traditional and innovative cooking. Features an extensive collection of recipes and cooking techniques. Built with Next.js and TypeScript, styled with Tailwind CSS and ShadCN for a responsive experience.",
        link: "https://github.com/AlishaKK/Next-Js.git",
        images: ["/Feast.png", "/fussion.png", "/fff.png", "/fu.png"],
        tags: ["Next.js", "Typescript", "ShadCN", "tailwindCss"]
    },
    {
        id: 3,
        title: "Weather app & countdown",
        description: "A combined weather forecast and countdown application. Get real-time weather updates with beautiful visualizations while managing events. Features include precise forecasts, customizable timers, and intuitive event tracking.",
        link: "https://github.com/AlishaKK/WeatherApp.git",
        images: ["/weatherApp.png", "/project1.png", "/pp.png"],
        tags: ["Next.js", "Typescript"]
    },
];

const styles = {
    container: "container mx-auto p-12 bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-2xl backdrop-blur-xl border border-blue-400/20 shadow-[0_0_80px_rgba(59,130,246,0.3)]",
    heading: "text-6xl font-bold mb-16 text-center bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-gradient-x",
    projectGrid: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
    projectCard: "rounded-xl overflow-hidden bg-gradient-to-br from-blue-900/50 to-purple-900/50 border border-blue-400/40 shadow-xl hover:shadow-blue-400/30 transform hover:scale-105 transition-all duration-500 group",
    imageContainer: "relative h-64 w-full overflow-hidden",
    image: "object-cover transition-all duration-500 group-hover:scale-110",
    contentContainer: "p-6",
    projectTitle: "text-2xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent",
    description: "text-blue-50 mb-6 text-sm leading-relaxed",
    exploreButton: "inline-block px-6 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-full hover:from-purple-600 hover:to-cyan-500 transition-all duration-300 text-sm",
    techStackContainer: "p-6 bg-gradient-to-b from-transparent to-blue-900/40",
    techStackTitle: "text-xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent",
    tagContainer: "flex flex-wrap gap-2",
    tag: "px-3 py-1 rounded-full bg-gradient-to-r from-blue-500/30 to-purple-500/30 border border-blue-300/50 text-blue-50 text-xs"
};

const ProjectCard = ({ project }: { project: Project }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            if (!isHovered) {
                setCurrentImageIndex(prevIndex => (prevIndex + 1) % project.images.length);
            }
        }, 3500);
        return () => clearInterval(interval);
    }, [project.images.length, isHovered]);

    return (
        <motion.div 
            className={styles.projectCard}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            <div className={styles.imageContainer}>
                <Image
                    src={project.images[currentImageIndex]}
                    alt={project.title}
                    fill
                    className={styles.image}
                    priority
                />
            </div>

            <div className={styles.contentContainer}>
                <h2 className={styles.projectTitle}>{project.title}</h2>
                <p className={styles.description}>{project.description}</p>
                <Link href={project.link} className={styles.exploreButton} target="_blank">
                    View Project →
                </Link>
            </div>
            
            <div className={styles.techStackContainer}>
                <h3 className={styles.techStackTitle}>Technologies</h3>
                <div className={styles.tagContainer}>
                    {project.tags.map((tag: string) => (
                        <span key={tag} className={styles.tag}>{tag}</span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

const Projects = () => {
    return (
        <div id="projects" className={styles.container}>
            <motion.h1 
                className={styles.heading}
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                Featured Projects
            </motion.h1>
            <div className={styles.projectGrid}>
                {projectData.map(project => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </div>
    );
};

export default Projects;
