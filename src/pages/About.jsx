import React from 'react';
import { GraduationCap, Briefcase, Code, Server, Video, Database, CheckCircle } from 'lucide-react';
import Image from '../components/ui/image';


export function About() {
  const skills = {
    frontend: ['React', 'Vite', 'TailwindCSS', 'JavaScript', 'HTML', 'CSS'],
    ictSupport: ['Troubleshooting', 'Installation', 'Maintenance', 'Networking', 'System Administration'],
    media: ['Livestream Setup', 'OBS', 'Camera Configuration', 'Audio Setup'],
    data: ['SPSS', 'STATA', 'Data Analysis'],
  };

  const workValues = [
    'Reliable and dependable professional',
    'Strong problem-solving abilities',
    'Fast learner with adaptability',
    'Attention to detail and quality',
  ];

  return (
    <div className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Personal Introduction */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-4">
                <span className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full">
                  About Me
                </span>
              </div>
              <h1 className="mb-6 text-slate-900">Vincent Parkolwa</h1>
              <p className="text-slate-600 mb-4 text-lg">
                I'm a passionate Front-End Developer and ICT Support Specialist with a strong foundation in building modern web applications and providing comprehensive technical support.
              </p>
              <p className="text-slate-600 mb-4">
                With hands-on experience managing large-scale computer labs and developing responsive web applications, I bring a unique blend of software development and IT infrastructure expertise to every project.
              </p>
              <p className="text-slate-600">
                My approach combines technical proficiency with a commitment to delivering reliable, user-friendly solutions that meet real-world needs.
              </p>
            </div>
            <div className="relative">
              <img
                src= ""
                alt="Vincent Parkolwa"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600">
              <GraduationCap className="w-6 h-6" />
            </div>
            <h2 className="text-slate-900">Education</h2>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="mb-2 text-slate-900">Bachelor of Science in Information Technology</h3>
            <p className="text-indigo-600 mb-2">Mount Kenya University</p>
            <p className="text-slate-600">Graduated: August 2025</p>
          </div>
        </section>

        {/* Experience */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600">
              <Briefcase className="w-6 h-6" />
            </div>
            <h2 className="text-slate-900">Experience</h2>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="mb-2 text-slate-900">Full-Stack Web Development Internship</h3>
            <p className="text-indigo-600 mb-4">Edureka</p>
            <p className="text-slate-600 mb-6">
              Trained in Full-Stack Web Development, focusing on front-end and foundational
              back-end concepts.
            </p>
            <h4 className="mb-3 text-slate-900">Key Achievements:</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-slate-600">
                <CheckCircle className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                <span>Developed a Netflix Clone using HTML, CSS, and Bootstrap.</span>
              </li>
              <li className="flex items-start gap-3 text-slate-600">
                <CheckCircle className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                <span>Built a Weather Application using HTML, CSS, Bootstrap, and JavaScript</span>
              </li>
              <li className="flex items-start gap-3 text-slate-600">
                <CheckCircle className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                <span>Collaborated on project-based exercises following modern UI/UX and responsive
                 design principles.</span>
              </li>
              <li className="flex items-start gap-3 text-slate-600">
                <CheckCircle className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                <span>Gained hands-on experience with version control, deployment, and best coding
                practices.</span>
              </li>
              {/* <li className="flex items-start gap-3 text-slate-600">
                <CheckCircle className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                <span>Assisted with network configuration and infrastructure maintenance</span>
              </li> */}
            </ul>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="mb-2 text-slate-900">ICT Attachment</h3>
            <p className="text-indigo-600 mb-4">Kenyatta University</p>
            <p className="text-slate-600 mb-6">
              Gained hands-on experience in managing IT infrastructure and providing technical support in an educational environment.
            </p>
            <h4 className="mb-3 text-slate-900">Key Achievements:</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-slate-600">
                <CheckCircle className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                <span>Managed and maintained 200+ computers across multiple computer labs</span>
              </li>
              <li className="flex items-start gap-3 text-slate-600">
                <CheckCircle className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                <span>Assembled and configured a 12U server cabinet with proper cable management</span>
              </li>
              <li className="flex items-start gap-3 text-slate-600">
                <CheckCircle className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                <span>Installed operating systems and deployed antivirus solutions across the network</span>
              </li>
              <li className="flex items-start gap-3 text-slate-600">
                <CheckCircle className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                <span>Provided technical support and troubleshooting for students and staff</span>
              </li>
              <li className="flex items-start gap-3 text-slate-600">
                <CheckCircle className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                <span>Assisted with network configuration and infrastructure maintenance</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Skills */}
        <section className="mb-20">
          <h2 className="text-center mb-12 text-slate-900">Skills & Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Front-End Development */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600">
                  <Code className="w-5 h-5" />
                </div>
                <h3 className="text-slate-900">Front-End Development</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.frontend.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* ICT Support */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600">
                  <Server className="w-5 h-5" />
                </div>
                <h3 className="text-slate-900">ICT Support</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.ictSupport.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Media & Production */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600">
                  <Video className="w-5 h-5" />
                </div>
                <h3 className="text-slate-900">Digital Media</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.media.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Data Analysis */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600">
                  <Database className="w-5 h-5" />
                </div>
                <h3 className="text-slate-900">Data Analysis</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.data.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Work Philosophy */}
        <section>
          <h2 className="text-center mb-12 text-slate-900">Work Philosophy</h2>
          <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl shadow-2xl p-12 text-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {workValues.map((value, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
                  <p className="text-lg">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
