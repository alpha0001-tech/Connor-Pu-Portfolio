import React from 'react';
import { PROJECTS } from '../constants';
import { ExternalLink, PlayCircle } from 'lucide-react';

const Portfolio: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="mb-16 max-w-3xl">
        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-brand-orange">AI Apps & Films</h1>
        <p className="text-xl text-gray-400">
          A collection of experiments, tools, and visual narratives created with the assistance of Generative AI. 
          From marketing platforms to simulated universes.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {PROJECTS.map((project) => (
          <article key={project.id} className="bg-gray-900 rounded-2xl overflow-hidden border border-white/10 hover:border-brand-orange/50 transition-all flex flex-col group">
            <div className="relative h-64 overflow-hidden">
              <img 
                src={project.imageUrl} 
                alt={project.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
              />
              <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-brand-orange uppercase">
                {project.category}
              </div>
            </div>
            
            <div className="p-8 flex flex-col flex-grow">
              <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
              <p className="text-gray-400 mb-6 flex-grow">{project.description}</p>
              
              <a 
                href={project.link} 
                className="inline-flex items-center justify-center w-full py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-colors font-medium text-sm"
              >
                {project.category === 'Film' ? (
                  <>
                    <PlayCircle size={18} className="mr-2" /> Watch Video
                  </>
                ) : (
                  <>
                    <ExternalLink size={18} className="mr-2" /> Launch App
                  </>
                )}
              </a>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-20 p-8 rounded-2xl bg-gradient-to-r from-brand-blue/20 to-transparent border border-brand-blue/20">
        <h3 className="text-2xl font-bold mb-4">Note on Process</h3>
        <p className="text-gray-300">
          These projects leverage tools like Replit Agent, OpenAI O1, Runway Gen-3, and Sora. 
          My role shifts from pure coder to architect and director, guiding the AI to achieve the specific utility or aesthetic I envision.
        </p>
      </div>
    </div>
  );
};

export default Portfolio;