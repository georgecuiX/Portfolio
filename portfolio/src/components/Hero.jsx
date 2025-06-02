import React from 'react';
import { Github, Linkedin } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Hero = () => {
  return (
    <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <img
            src={portfolioData.personal.avatar}
            alt={portfolioData.personal.name}
            className="mx-auto h-32 w-32 rounded-full mb-8"
          />
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            {portfolioData.personal.name}
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-600 mb-6">
            {portfolioData.personal.title}
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            {portfolioData.personal.bio}
          </p>
          <div className="flex justify-center space-x-6">
            <a
              href={portfolioData.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
            >
              <Github size={20} />
              <span>GitHub</span>
            </a>
            <a
              href={portfolioData.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;