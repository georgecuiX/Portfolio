import React, { useState } from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = () => {
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Message sent! (This is a demo - implement your preferred form handling)');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Get In Touch</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-6">Let's Connect</h3>
            <p className="text-gray-700 mb-8">
              I'm always interested in hearing about new opportunities and interesting projects. 
              Feel free to reach out if you'd like to collaborate!
            </p>
            <div className="space-y-4">
              <a
                href={`mailto:${portfolioData.personal.email}`}
                className="flex items-center space-x-3 text-gray-700 hover:text-blue-600"
              >
                <Mail size={20} />
                <span>{portfolioData.personal.email}</span>
              </a>
              <a
                href={portfolioData.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-700 hover:text-blue-600"
              >
                <Linkedin size={20} />
                <span>LinkedIn Profile</span>
              </a>
              <a
                href={portfolioData.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-700 hover:text-blue-600"
              >
                <Github size={20} />
                <span>GitHub Profile</span>
              </a>
            </div>
          </div>
          <div>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
              <button
                onClick={handleSubmit}
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;