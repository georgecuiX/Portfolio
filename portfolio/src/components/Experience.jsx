import React from 'react';
import { Calendar, MapPin } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Experience = () => {
  return (
    <section id="experience" className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Work Experience</h2>
        <div className="space-y-8">
          {portfolioData.experience.map((exp) => (
            <div key={exp.id} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{exp.role}</h3>
                  <h4 className="text-lg font-medium text-blue-600">{exp.company}</h4>
                </div>
                <div className="text-gray-600 mt-2 md:mt-0">
                  <div className="flex items-center space-x-2 mb-1">
                    <Calendar size={16} />
                    <span>{exp.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin size={16} />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>
              <ul className="space-y-2">
                {exp.achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;