import { Code, Users, Clock, Briefcase } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="h-1 w-20 bg-indigo-600 dark:bg-indigo-400 mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 text-center leading-relaxed">
            I'm a B.Tech CSE student at Lovely Professional University with a passion for building 
            scalable and efficient web applications. I specialize in the MERN stack and have a strong 
            foundation in C++ and data structures & algorithms. My goal is to create technology that 
            makes a positive impact.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md transition-transform hover:transform hover:scale-105">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-indigo-100 dark:bg-indigo-900 rounded-full mr-4">
                  <Code className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Technical Skills</h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Proficient in MERN Stack (MongoDB, Express.js, React, Node.js), C++, Java, and 
                Data Structures & Algorithms. Experienced in building responsive, user-friendly web applications.
              </p>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md transition-transform hover:transform hover:scale-105">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-indigo-100 dark:bg-indigo-900 rounded-full mr-4">
                  <Users className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Team Player</h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                I thrive in collaborative environments and enjoy working with diverse teams to solve complex problems. 
                I value open communication and believe in the power of collective creativity.
              </p>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md transition-transform hover:transform hover:scale-105">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-indigo-100 dark:bg-indigo-900 rounded-full mr-4">
                  <Clock className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Adaptability</h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                I quickly adapt to new technologies and environments. The tech landscape is ever-evolving, 
                and I embrace the challenge of learning new frameworks, languages, and methodologies.
              </p>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md transition-transform hover:transform hover:scale-105">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-indigo-100 dark:bg-indigo-900 rounded-full mr-4">
                  <Briefcase className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Project Management</h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                I have experience managing projects from conception to completion. I'm skilled at breaking down 
                complex tasks, setting milestones, and ensuring deliverables are met on time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;