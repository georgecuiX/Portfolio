import React from 'react';
import { Github, Linkedin, Download, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Hero = () => {
  // Animated gradient text
  const AnimatedText = ({ children }) => (
    <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
      {children}
    </span>
  );

  return (
    <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-blue-50 via-white to-indigo-50 min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Profile picture */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 blur-2xl opacity-30 animate-pulse"></div>
              <img
                src="https://media.licdn.com/dms/image/v2/D5603AQFVA5IFjCo83w/profile-displayphoto-shrink_800_800/B56ZSPlL9CGoAg-/0/1737575678710?e=1754524800&v=beta&t=RGCyG2d9ytJ-C8KwbShloiYIZcDb1SZe15GHAtgtQBY"
                alt={portfolioData.personal.name}
                className="relative w-40 h-40 md:w-48 md:h-48 rounded-full border-4 border-white shadow-xl object-cover"
              />
            </div>
          </div>  

          {/* Main heading with animated text */}
          <div className="mb-4">
            <p className="text-lg text-gray-600 mb-2">Hi, I'm</p>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4">
              {portfolioData.personal.name}
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">
              I build <AnimatedText>exceptional digital experiences</AnimatedText>
            </h2>
          </div>

          {/* Short tagline instead of full bio */}
          <div className="max-w-2xl mx-auto mb-8">
            <p className="text-xl text-gray-700 mb-4">
              Computer Science student at <span className="font-semibold text-blue-600">TMU</span> • 
              <span className="font-semibold"> 3.98 GPA</span> • 
              Full-Stack Developer
            </p>
            <div className="flex items-center justify-center space-x-4 text-gray-600">
              <span className="flex items-center">
                <Sparkles size={16} className="mr-1 text-yellow-500" />
                Currently building with React, Node.js & Python
              </span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href={portfolioData.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-all transform hover:scale-105"
            >
              <Github size={20} />
              <span>View My Code</span>
            </a>
            <a
              href={portfolioData.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105"
            >
              <Linkedin size={20} />
              <span>Let's Connect</span>
            </a>
            <a
              href="/GeorgeCui_Resume.pdf"
              download
              className="flex items-center space-x-2 border-2 border-gray-900 text-gray-900 px-6 py-3 rounded-lg hover:bg-gray-900 hover:text-white transition-all transform hover:scale-105"
            >
              <Download size={20} />
              <span>Download Resume</span>
            </a>
          </div>

          {/* Quick stats */}
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">3+</div>
              <div className="text-sm text-gray-600">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">2+</div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">10+</div>
              <div className="text-sm text-gray-600">Technologies</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;