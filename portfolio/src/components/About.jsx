import React from 'react';
import { MapPin, Mail } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const About = () => {
  return (
    <section id="about" className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-700 mb-6">
              {portfolioData.personal.bio}
            </p>
            <div className="flex items-center space-x-4 text-gray-600 mb-4">
              <MapPin size={20} />
              <span>{portfolioData.personal.location}</span>
            </div>
            <div className="flex items-center space-x-4 text-gray-600">
              <Mail size={20} />
              <span>{portfolioData.personal.email}</span>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-6">Skills & Technologies</h3>
            {Object.entries(portfolioData.skills).map(([category, skills]) => (
              <div key={category} className="mb-4">
                <h4 className="font-medium text-gray-800 mb-2">{category}</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;