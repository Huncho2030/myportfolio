import React from 'react';
import { ProjectCard } from '../components/ProjectCard';
import { Clock } from 'lucide-react';
import Image from '../components/ui/image';
import {LabSetup, Livestream, Weather, Calculator, Antivirus,Img12U,Todo,Church} from '../assets/images';

export function Projects() {
  const projects = [
    {
      title: 'Ministry Website',
      description: 'A fully responsive modern website built with React, TailwindCSS, and React Router. Features smooth animations, mobile-friendly design, and optimized performance. Deployed on Netlify for fast global delivery.',
      technologies: ['React', 'TailwindCSS', 'Vite', 'React Router', 'Netlify'],
      liveLink: 'https://warningoflastdays.netlify.app/',
      githubLink: 'https://github.com/Huncho2030/warning-of-last-days',
      image: Church,
    },
    {
      title: 'ICT Lab Setup & Management',
      description: 'Comprehensive IT infrastructure project managing 200+ computers across multiple labs. Included hardware assembly, system installation, network configuration, and ongoing technical support for students and staff.',
      technologies: ['Networking', 'System Administration', 'Hardware', 'Technical Support'],
      image: LabSetup,
    },
    {
      title: '12U Server Cabinet Assembly',
      description: 'Designed and assembled a professional 12U server cabinet with proper cable management, ventilation, and power distribution. Configured network equipment and ensured optimal airflow for equipment cooling.',
      technologies: ['Hardware Assembly', 'Cable Management', 'Network Infrastructure'],
      image: Img12U,
    },
    {
      title: 'JavaScript Todo Application',
      description: 'Interactive task management application with add, edit, delete, and mark complete functionality. Features local storage persistence, filter options, and a clean, intuitive user interface.',
      technologies: ['JavaScript', 'HTML', 'CSS', 'Local Storage'],
      liveLink: '#',
      githubLink: '#',
      image: Todo,
    },
    {
      title: 'Weather Dashboard',
      description: 'Real-time weather application using external API integration. Displays current conditions, 5-day forecast, and weather alerts. Features location search and automatic geolocation detection.',
      technologies: ['JavaScript', 'API Integration', 'HTML', 'CSS'],
      liveLink: '#',
      githubLink: '#',
      image: Weather,
    },
    {
      title: 'Calculator App',
      description: 'Fully functional calculator with standard arithmetic operations, decimal support, and keyboard input. Designed with a modern interface and responsive layout for all device sizes.',
      technologies: ['JavaScript', 'HTML', 'CSS'],
      liveLink: '#',
      githubLink: '#',
      image: Calculator,
    },
    {
      title: 'Antivirus Deployment System',
      description: 'Deployed and configured antivirus solutions across a network of 200+ computers. Created automated scripts for installation and updates, ensuring comprehensive security coverage.',
      technologies: ['System Administration', 'Scripting', 'Network Security'],
      image: Antivirus,
    },
    {
      title: 'Livestream Setup & Production',
      description: 'Configured professional livestream systems for events and online classes. Set up OBS software, multiple camera inputs, audio mixing, and real-time graphics overlays for high-quality broadcasts.',
      technologies: ['OBS', 'Video Production', 'Audio Engineering', 'Hardware Setup'],
      image: Livestream,
    },
  ];

  return (
    <div className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="mb-4">
            <span className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full">
              My Work
            </span>
          </div>
          <h1 className="mb-4 text-slate-900">Projects & Experience</h1>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            A collection of web development projects and ICT infrastructure work showcasing my technical skills and problem-solving abilities.
          </p>
        </div>

        {/* Projects Grid */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </section>

        {/* Coming Soon Section */}
        <section>
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl shadow-lg p-12 text-center">
            <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6 text-indigo-600">
              <Clock className="w-8 h-8" />
            </div>
            <h2 className="mb-4 text-slate-900">More Projects Coming Soon</h2>
            <p className="text-slate-600 max-w-2xl mx-auto mb-6">
              I'm constantly working on new projects and expanding my skills. Check back soon to see what I'm building next!
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <span className="px-4 py-2 bg-white text-slate-700 rounded-full shadow-sm">
                E-commerce Platform
              </span>
              <span className="px-4 py-2 bg-white text-slate-700 rounded-full shadow-sm">
                Task Management System
              </span>
              <span className="px-4 py-2 bg-white text-slate-700 rounded-full shadow-sm">
                Blog Platform
              </span>
              <span className="px-4 py-2 bg-white text-slate-700 rounded-full shadow-sm">
                Network Monitoring Tool
              </span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
