import React from 'react';
import { MapPin, Mail, GraduationCap, Award, Code, Brain, Target, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const About = () => {
  return (
    <section id="about" className="py-16 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          
          {/* Left Column - Bio & Info */}
          <div className="space-y-8">
            {/* Bio Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <Brain className="text-blue-600 mr-3" size={28} />
                <h3 className="text-2xl font-semibold">My Story</h3>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {portfolioData.personal.bio}
              </p>
              
              {/* Quick Info */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-3 p-3 rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50">
                  <MapPin size={20} className="text-blue-600" />
                  <div>
                    <p className="text-sm text-gray-600">Location</p>
                    <p className="font-medium">{portfolioData.personal.location}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50">
                  <Mail size={20} className="text-blue-600" />
                  <div>
                    <p className="text-sm text-gray-600">Email</p>
                    <p className="font-medium text-sm">{portfolioData.personal.email}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Education Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <GraduationCap className="text-blue-600 mr-3" size={28} />
                <h3 className="text-2xl font-semibold">Education</h3>
              </div>
              
              <div className="space-y-4">
                <div className="border-l-4 border-blue-600 pl-4">
                  <h4 className="text-xl font-semibold text-gray-900">B.Sc. Computer Science (Honours)</h4>
                  <p className="text-blue-600 font-medium">Toronto Metropolitan University</p>
                  <p className="text-gray-600">Sep 2022 - Expected May 2027</p>
                  
                  <div className="mt-4 flex items-center space-x-4">
                    <div className="flex items-center space-x-2 bg-gradient-to-r from-green-50 to-emerald-50 px-3 py-2 rounded-lg">
                      <Award size={18} className="text-green-600" />
                      <span className="font-semibold text-green-800">GPA: 3.98 / 4.33</span>
                    </div>
                  </div>
                </div>

                {/* Coursework */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm font-medium text-gray-800 mb-2">Relevant Coursework:</p>
                  <div className="flex flex-wrap gap-2">
                    {["Data Structures", "Operating Systems", "Software Engineering", "Data Science", "Algorithms", "Computer Networks"].map((course) => (
                      <span key={course} className="text-xs bg-white px-2 py-1 rounded text-gray-700 border">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Skills */}
          <div className="space-y-8">
            {/* Skills Header */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <Code className="text-blue-600 mr-3" size={28} />
                <h3 className="text-2xl font-semibold">Technical Skills</h3>
              </div>
              
              <div className="space-y-6">
                {Object.entries(portfolioData.skills).map(([category, skills]) => (
                  <div key={category} className="group">
                    <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                      {category}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1.5 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 text-sm rounded-full hover:from-blue-200 hover:to-indigo-200 transition-all transform hover:scale-105 cursor-default"
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
      </div>
    </section>
  );
};

export default About;