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
    <div className="p-6 border rounded-lg shadow-md bg-white transition-transform hover:scale-105">
      {/* Title */}
      <h2 className="text-xl font-bold text-gray-800">{title}</h2>

      {/* Description */}
      <p className="text-gray-600 mt-2">{description}</p>

      {/* Images (Using next/image for optimization) */}
      {images.length > 0 && (
        <div className="flex gap-2 mt-3">
          {images.map((img, index) => (
            <div key={index} className="relative w-16 h-16">
              <Image 
                src={img} 
                alt={`Image of ${title} - ${index + 1}`} 
                fill
                style={{ objectFit: "cover" }}
                className="rounded-md"
              />
            </div>
          ))}
        </div>
      )}

      {/* Tags */}
      <div className="mt-3 flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span key={index} className="bg-blue-500 text-white text-sm px-3 py-1 rounded">
            {tag}
          </span>
        ))}
      </div>

      {/* Link */}
      <a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-blue-600 hover:underline mt-4 block font-medium"
      >
        View More
      </a>
    </div>
  );
};
