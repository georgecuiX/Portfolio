import React from 'react';
import { MapPin, Mail, GraduationCap, Award } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const About = () => {
  return (
    <section id="about" className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <div className="mb-8">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                {portfolioData.personal.bio}
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-4 text-gray-600">
                  <MapPin size={20} className="text-blue-600" />
                  <span>{portfolioData.personal.location}</span>
                </div>
                <div className="flex items-center space-x-4 text-gray-600">
                  <Mail size={20} className="text-blue-600" />
                  <span>{portfolioData.personal.email}</span>
                </div>
                <div className="flex items-center space-x-4 text-gray-600">
                  <GraduationCap size={20} className="text-blue-600" />
                  <span>Toronto Metropolitan University</span>
                </div>
                <div className="flex items-center space-x-4 text-gray-600">
                  <Award size={20} className="text-blue-600" />
                  <span>GPA: 3.98 / 4.33</span>
                </div>
              </div>
            </div>

            {/* Education Section */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Education</h3>
              <div>
                <h4 className="font-medium text-gray-800">B.Sc. Computer Science (Honours)</h4>
                <p className="text-gray-600">Toronto Metropolitan University</p>
                <p className="text-gray-500 text-sm">Sep 2022 - Expected May 2027</p>
                <div className="mt-3">
                  <p className="text-sm text-gray-600 font-medium">Relevant Coursework:</p>
                  <p className="text-sm text-gray-600 mt-1">
                    Data Structures • Operating Systems • Software Engineering • 
                    Data Science • Algorithms • Computer Networks
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6">Skills & Technologies</h3>
            <div className="space-y-6">
              {Object.entries(portfolioData.skills).map(([category, skills]) => (
                <div key={category} className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-800 mb-3">{category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full hover:bg-blue-200 transition-colors"
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
      </div>
    </section>
  );
};

export default About; 