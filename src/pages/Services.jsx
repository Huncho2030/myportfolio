import React from 'react';
import { Link } from 'react-router-dom';
import { ServiceCard } from '../components/ServiceCard';
import { Button } from '../components/Button';
import { Code, Server, Video, ArrowRight } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: <Code className="w-6 h-6" />,
      title: 'Web Development',
      description: 'Modern, responsive websites built with the latest technologies to help your business stand out online.',
      features: [
        'Custom React websites and web applications',
        'Responsive landing pages optimized for conversions',
        'Portfolio and business websites',
        'Performance optimization and SEO',
        'Website maintenance and updates',
        'Cross-browser compatibility',
      ],
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: 'ICT Support Services',
      description: 'Comprehensive IT support to keep your systems running smoothly and efficiently.',
      features: [
        'Computer installation and configuration',
        'Hardware and software troubleshooting',
        'System maintenance and updates',
        'Computer lab setup and management',
        'Antivirus deployment and security',
        'Network configuration and support',
        'Technical support and training',
      ],
    },
    {
      icon: <Video className="w-6 h-6" />,
      title: 'Digital Media & Livestream',
      description: 'Professional livestream and media production services for events, classes, and online content.',
      features: [
        'Livestream setup and configuration',
        'Multi-camera production systems',
        'Audio mixing and optimization',
        'OBS and streaming software setup',
        'Recording and post-production support',
        'Technical support during live events',
      ],
    },
  ];

  return (
    <div className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="mb-4">
            <span className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full">
              What I Offer
            </span>
          </div>
          <h1 className="mb-4 text-slate-900">Services</h1>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Professional web development and ICT support services tailored to meet your specific needs.
          </p>
        </div>

        {/* Services Grid */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </section>

        {/* Why Choose Me Section */}
        <section className="mb-20">
          <div className="bg-white rounded-2xl shadow-lg p-12">
            <h2 className="text-center mb-12 text-slate-900">Why Work With Me?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4 text-indigo-600 text-2xl">
                  🎯
                </div>
                <h3 className="mb-2 text-slate-900">Detail-Oriented</h3>
                <p className="text-slate-600">
                  Meticulous attention to every aspect of your project
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4 text-indigo-600 text-2xl">
                  ⚡
                </div>
                <h3 className="mb-2 text-slate-900">Fast & Reliable</h3>
                <p className="text-slate-600">
                  Quick turnaround without compromising quality
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4 text-indigo-600 text-2xl">
                  💡
                </div>
                <h3 className="mb-2 text-slate-900">Problem Solver</h3>
                <p className="text-slate-600">
                  Creative solutions to technical challenges
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4 text-indigo-600 text-2xl">
                  🤝
                </div>
                <h3 className="mb-2 text-slate-900">Collaborative</h3>
                <p className="text-slate-600">
                  Clear communication throughout the project
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="mb-20">
          <h2 className="text-center mb-12 text-slate-900">How I Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="relative">
              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  1
                </div>
                <h3 className="mb-2 text-slate-900">Consultation</h3>
                <p className="text-slate-600">
                  We discuss your needs, goals, and vision for the project
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  2
                </div>
                <h3 className="mb-2 text-slate-900">Planning</h3>
                <p className="text-slate-600">
                  I create a detailed plan and timeline for implementation
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  3
                </div>
                <h3 className="mb-2 text-slate-900">Development</h3>
                <p className="text-slate-600">
                  Building your solution with regular updates on progress
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  4
                </div>
                <h3 className="mb-2 text-slate-900">Delivery</h3>
                <p className="text-slate-600">
                  Final testing, deployment, and ongoing support
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section>
          <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl shadow-2xl p-12 text-center text-white">
            <h2 className="mb-4">Ready to Start Your Project?</h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Need a website or ICT support? Let's work together to bring your ideas to life and solve your technical challenges.
            </p>
            <Link to="/contact">
              <Button variant="secondary">
                Get In Touch <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
