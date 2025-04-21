import { useState, useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  features: string[];
  repoUrl: string;
  demoUrl: string;
  imageUrl: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Job and Internship Platform',
    description: 'A comprehensive platform connecting job seekers with employers, featuring job listings, applications, and profile management.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    features: ['User authentication', 'Job search and filtering', 'Application tracking', 'Employer dashboard', 'Resume builder'],
    repoUrl: 'https://github.com/nishant25kr/Job-Internship-Platform',
    demoUrl: 'https://job-platform-demo.netlify.app',
    imageUrl: 'https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 2,
    title: 'Farmer Land Buying Platform',
    description: 'A platform connecting farmers with land buyers, streamlining the land acquisition process with legal verification.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Google Maps API'],
    features: ['Land listing with geolocation', 'Document verification', 'User messaging', 'Payment processing', 'Legal compliance checks'],
    repoUrl: 'https://github.com/nishant25kr/FARMCONNECT',
    demoUrl: 'https://farmer-land-platform.netlify.app',
    imageUrl: 'https://images.pexels.com/photos/2280567/pexels-photo-2280567.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 3,
    title: 'To-do List Web App',
    description: 'A feature-rich task management application with categorization, priorities, and deadline reminders.',
    technologies: ['React', 'Firebase', 'Tailwind CSS'],
    features: ['Task categories', 'Priority levels', 'Deadline notifications', 'Drag-and-drop reordering', 'Data export'],
    repoUrl: 'https://github.com/nishant-kumar/todo-app',
    demoUrl: 'https://nishant-todo-app.netlify.app',
    imageUrl: 'https://images.pexels.com/photos/3299/postit-scrabble-to-do.jpg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 4,
    title: 'Packet Sniffing System',
    description: 'A network monitoring tool for analyzing packet data, detecting intrusions, and visualizing network traffic.',
    technologies: ['C++', 'Python', 'React', 'Chart.js'],
    features: ['Real-time packet capture', 'Traffic analysis', 'Intrusion detection', 'Data visualization', 'Alert system'],
    repoUrl: 'https://github.com/nishant-kumar/packet-sniffer',
    demoUrl: 'https://packet-sniffer-demo.netlify.app',
    imageUrl: 'https://images.pexels.com/photos/2881229/pexels-photo-2881229.jpeg?auto=compress&cs=tinysrgb&w=600'
  }
];

const Projects = () => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const openModal = (project: Project) => {
    setActiveProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setActiveProject(null);
    document.body.style.overflow = 'auto';
  };

  const handleModalClick = (e: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      closeModal();
    }
  };

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My Projects
          </h2>
          <div className="h-1 w-20 bg-indigo-600 dark:bg-indigo-400 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className="h-56 overflow-hidden">
                <img 
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <button
                    onClick={() => openModal(project)}
                    className="text-indigo-600 dark:text-indigo-400 font-medium hover:underline"
                  >
                    View Details
                  </button>
                  <div className="flex space-x-3">
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                      aria-label="GitHub Repository"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                      aria-label="Live Demo"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Project Details Modal */}
      {activeProject && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={handleModalClick}
        >
          <div 
            ref={modalRef}
            className="bg-white dark:bg-gray-800 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {activeProject.title}
                </h3>
                <button
                  onClick={closeModal}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                >
                  &times;
                </button>
              </div>
              
              <div className="mb-6">
                <img 
                  src={activeProject.imageUrl}
                  alt={activeProject.title}
                  className="w-full h-56 object-cover rounded-lg"
                />
              </div>
              
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {activeProject.description}
              </p>
              
              <div className="mb-4">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Features
                </h4>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                  {activeProject.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeProject.technologies.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex space-x-4">
                <a
                  href={activeProject.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors"
                >
                  Live Demo
                </a>
                <a
                  href={activeProject.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 rounded-lg transition-colors"
                >
                  View Code
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;