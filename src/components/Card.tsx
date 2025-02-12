import React from 'react';

interface CardProps {
    title: string;
    id: number;
    description: string;
    link: string;
    images: string[];
    tags: string[];
}

export const Card = ({ title, id, description, link, images, tags }: CardProps) => {
  return (
    <div>Card</div>
  );
}
