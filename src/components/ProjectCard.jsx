// ProjectCard.jsx
import React from "react";

export default function ProjectCard({ title, description, codeUrl, siteUrl, frontImage, backImage }) {
  return (
    <div>
      <div className="md:w-1/2 p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-sm mb-4">{description}</p>
        <div className="flex space-x-4">
          <a href={codeUrl} target="_blank" rel="noopener noreferrer" className="bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 rounded">
            Ver Código
          </a>
          <a href={siteUrl} target="_blank" rel="noopener noreferrer" className="bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 rounded">
            Ver Sitio
          </a>
        </div>
      </div>
      <div className="md:w-1/2 relative group">
        <img src={frontImage} alt={title + " front"} className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0" />
        <img src={backImage} alt={title + " back"} className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </div>
    </div>
  );
}