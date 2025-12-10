import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { TechBadge } from '../components/TechBadge';
import { ProjectCard } from '../components/ProjectCard';
import { ArrowRight, Download, Code, Server, Database, Workflow } from 'lucide-react';
import Image from '../components/ui/image';
import {LabSetup, Church, Todo} from '../assets/images';


export function Home() {
  const techStack = [
    'React',
    'TailwindCSS',
    'JavaScript',
    'Vite',
    'Networking',
    'SPSS',
    'STATA',
  ];

  const featuredProjects = [
    {
      title: 'Ministry Website',
      description: 'Fully responsive modern portfolio built with React and TailwindCSS, deployed on Netlify.',
      technologies: ['React', 'TailwindCSS', 'Vite', 'React Router'],
      liveLink: '#',
      githubLink: '#',
      image: Church,
    },
    {
      title: 'ICT Lab Setup',
      description: 'Managed and supported a computer lab with 200+ computers, including hardware assembly and system installation.',
      technologies: ['Networking', 'System Administration', 'Hardware'],
      image: LabSetup,
    },
    {
      title: 'JavaScript Mini Projects',
      description: 'Collection of interactive web applications including Todo app, Weather app, and Calculator.',
      technologies: ['JavaScript', 'HTML', 'CSS', 'API Integration'],
      githubLink: '#',
      image: Todo,
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center bg-gradient-to-br from-slate-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="mb-4">
                <span className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full">
                  Welcome to my portfolio
                </span>
              </div>
              <h1 className="mb-4 text-slate-900">
                Vincent Parkolwa
              </h1>
              <h2 className="mb-6 text-indigo-600">
                Front-End Developer & ICT Support Specialist
              </h2>
              <p className="text-slate-600 mb-8 text-lg">
                Building modern web experiences and delivering reliable ICT solutions.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/projects">
                  <Button variant="primary">
                    View My Work <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <a
                  href="/Vincent-Parkolwa-CV.pdf"
                  download="Vincent-Parkolwa-CV.pdf"
                  >
                  <Button variant="outline">
                    <Download className="w-4 h-4" /> Download CV
                  </Button>
                </a>

              </div>
            </div>

            {/* Right Content - Illustration */}
            <div className="relative">
              <div className="relative w-full flex justify-center">
                <img
                  src= ""
                  alt="Abstract shapes"
                  className="w-full max-w-md mx-auto rounded-2xl shadow-2xl object-cover"
                />
              </div>
              <div className="absolute -z-0 -top-4 -left-4 w-56 h-56 bg-indigo-200 rounded-full mix-blend-multiply blur-xl opacity-70"></div>
              <div className="absolute -z-0 -bottom-4 -right-4 w-56 h-56 bg-purple-200 rounded-full mix-blend-multiply blur-xl opacity-70"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center mb-12 text-slate-900">What I Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-xl bg-slate-50 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4 text-indigo-600">
                <Code className="w-7 h-7" />
              </div>
              <h3 className="mb-2 text-slate-900">Front-End Development</h3>
              <p className="text-slate-600">
                Building responsive websites with React and TailwindCSS
              </p>
            </div>
            <div className="text-center p-6 rounded-xl bg-slate-50 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4 text-indigo-600">
                <Server className="w-7 h-7" />
              </div>
              <h3 className="mb-2 text-slate-900">ICT Support</h3>
              <p className="text-slate-600">
                Installation, troubleshooting & maintenance of 200+ computers
              </p>
            </div>
            <div className="text-center p-6 rounded-xl bg-slate-50 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4 text-indigo-600">
                <Workflow className="w-7 h-7" />
              </div>
              <h3 className="mb-2 text-slate-900">Lab Management</h3>
              <p className="text-slate-600">
                Managed computer labs and livestream setups
              </p>
            </div>
            <div className="text-center p-6 rounded-xl bg-slate-50 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4 text-indigo-600">
                <Database className="w-7 h-7" />
              </div>
              <h3 className="mb-2 text-slate-900">Data Analysis</h3>
              <p className="text-slate-600">
                Statistical analysis using SPSS and STATA
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4 text-slate-900">Featured Projects</h2>
            <p className="text-slate-600">
              Here are some of my recent projects showcasing my skills
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
          <div className="text-center">
            <Link to="/projects">
              <Button variant="primary">
                View All Projects <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center mb-12 text-slate-900">Tech Stack</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {techStack.map((tech, index) => (
              <TechBadge key={index} name={tech} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
