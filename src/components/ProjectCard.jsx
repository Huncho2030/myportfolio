import React from 'react';
import { ExternalLink, Github } from 'lucide-react';


export function ProjectCard({ title, description, technologies, liveLink, githubLink, image }) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {image && (
        <div className="h-48 bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
      )}
      {!image && (
        <div className="h-48 bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
          <div className="text-white text-4xl opacity-50">📱</div>
        </div>
      )}
      <div className="p-6">
        <h3 className="mb-2 text-indigo-900">{title}</h3>
        <p className="text-slate-600 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span key={index} className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm">
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-3">
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:text-indigo-700 inline-flex items-center gap-1"
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </a>
          )}
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-slate-700 inline-flex items-center gap-1"
            >
              <Github className="w-4 h-4" />
              Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
