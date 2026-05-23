import React from "react";

interface HeroSectionProps {
  title: string;
  imagePath: string;
}

export default function HeroSection({ title, imagePath }: HeroSectionProps) {
  return (
    <div className="relative w-full h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${imagePath})` }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-secondary/70 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight drop-shadow-md">
          {title}
        </h1>
        <div className="h-1 w-24 bg-primary mx-auto rounded-full"></div>
      </div>
    </div>
  );
}
