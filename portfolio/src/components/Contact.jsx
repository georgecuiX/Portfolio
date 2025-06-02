import React, { useState } from 'react';
import { Mail, Linkedin, Github, Send, MessageSquare, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isHovered, setIsHovered] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Message sent!');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
          <div className="flex items-center justify-center space-x-2 text-gray-600">
            <Sparkles className="text-yellow-500" size={20} />
            <p>Let's create something amazing together</p>
            <Sparkles className="text-yellow-500" size={20} />
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center mb-6">
              <MessageSquare className="text-blue-600 mr-3" size={28} />
              <h3 className="text-2xl font-semibold">Let's Connect</h3>
            </div>
            
            <p className="text-gray-700 mb-8 text-lg">
              I'm always interested in hearing about new opportunities and interesting projects. 
              Feel free to reach out if you'd like to collaborate!
            </p>
            
            <div className="space-y-6">
              <a
                href={`mailto:${portfolioData.personal.email}`}
                className="flex items-center space-x-4 p-4 rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 transition-all transform hover:scale-105"
                onMouseEnter={() => setIsHovered('email')}
                onMouseLeave={() => setIsHovered('')}
              >
                <div className="bg-blue-600 p-3 rounded-full text-white">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Email Me</p>
                  <span className="text-gray-600">{portfolioData.personal.email}</span>
                </div>
              </a>
              
              <a
                href={portfolioData.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-4 rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 transition-all transform hover:scale-105"
                onMouseEnter={() => setIsHovered('linkedin')}
                onMouseLeave={() => setIsHovered('')}
              >
                <div className="bg-blue-700 p-3 rounded-full text-white">
                  <Linkedin size={20} />
                </div>
                <div>
                  <p className="font-medium text-gray-900">LinkedIn</p>
                  <span className="text-gray-600">Let's connect professionally</span>
                </div>
              </a>
              
              <a
                href={portfolioData.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-4 rounded-lg bg-gradient-to-r from-gray-50 to-gray-100 hover:from-gray-100 hover:to-gray-200 transition-all transform hover:scale-105"
                onMouseEnter={() => setIsHovered('github')}
                onMouseLeave={() => setIsHovered('')}
              >
                <div className="bg-gray-900 p-3 rounded-full text-white">
                  <Github size={20} />
                </div>
                <div>
                  <p className="font-medium text-gray-900">GitHub</p>
                  <span className="text-gray-600">Check out my code</span>
                </div>
              </a>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold mb-2">Send Me a Message</h3>
                <p className="text-gray-600">I'll get back to you as soon as possible!</p>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="John Doe"
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
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="john@example.com"
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
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-6 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all transform hover:scale-105 flex items-center justify-center space-x-2 font-medium"
              >
                <span>Send Message</span>
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;