import React from "react";
import Image from "next/image";

interface CardProps {
  title: string;
  id: number;
  description: string;
  link: string;
  images: string[];
  tags: string[];
}

export const Card = ({ title, description, link, images, tags }: CardProps) => {
  return (
    <div className="p-6 border border-purple-500/10 bg-gradient-to-br from-black/60 to-purple-900/10 backdrop-blur-sm transition-all duration-300 hover:border-purple-400/20 hover:shadow-lg hover:shadow-purple-500/10 hover:-translate-y-2 rounded-xl">
      {/* Images */}
      {images.length > 0 && (
        <div className="mb-6">
          {images.map((img, index) => (
            <div key={index} className="relative w-full h-64 rounded-lg overflow-hidden bg-gradient-to-br from-purple-900/20 to-black/50 flex items-center justify-center border border-purple-500/5">
              <Image 
                src={img} 
                alt={`Image of ${title} - ${index + 1}`} 
                width={600}
                height={400}
                style={{ objectFit: "contain", maxHeight: "100%", maxWidth: "100%" }}
                className="rounded-lg"
                unoptimized
              />
            </div>
          ))}
        </div>
      )}

      {/* Title */}
      <h2 className="text-2xl font-bold text-white mb-3">{title}</h2>

      {/* Description */}
      <p className="text-gray-300 text-sm mb-6 leading-relaxed">{description}</p>

      {/* Tags */}
      <div className="mb-6 flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span key={index} className="bg-gradient-to-r from-purple-600/20 to-purple-400/20 text-white text-xs px-3 py-1 rounded-full border border-purple-400/15">
            {tag}
          </span>
        ))}
      </div>

      {/* Link */}
      <a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-purple-300 hover:text-purple-200 transition-colors duration-300 font-semibold inline-flex items-center gap-2 group"
      >
        View More
        <span className="group-hover:translate-x-1 transition-transform">→</span>
      </a>
    </div>
  );
};
