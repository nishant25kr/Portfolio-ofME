import { useRef, useState, useEffect } from 'react';
import { Award } from 'lucide-react';

interface Certification {
  id: number;
  title: string;
  issuer: string;
  date: string;
  description: string;
  credentialUrl: string;
}

const certifications: Certification[] = [
  {
    id: 1,
    title: 'Data Structures & Algorithms',
    issuer: 'Cipher School',
    date: 'July 2023',
    description: 'Comprehensive course covering fundamental and advanced data structures, algorithm design, complexity analysis, and problem-solving techniques.',
    credentialUrl: 'https://cipherschools.com/certificate/data-structures-algorithms',
  },
  {
    id: 2,
    title: 'Cloud Computing',
    issuer: 'NPTEL',
    date: 'May 2023',
    description: 'In-depth study of cloud computing architecture, deployment models, services, security considerations, and best practices for cloud migration.',
    credentialUrl: 'https://nptel.ac.in/certificate/cloud-computing',
  },
  {
    id: 3,
    title: 'Design and Analysis of Algorithm',
    issuer: 'Coursera',
    date: 'January 2023',
    description: 'Advanced course on algorithm design paradigms, complexity analysis, optimization techniques, and theoretical foundations of computer science.',
    credentialUrl: 'https://coursera.org/certificate/design-analysis-algorithm',
  },
  {
    id: 4,
    title: 'Generative AI for Everyone',
    issuer: 'Coursera',
    date: 'December 2022',
    description: 'Foundational course on generative AI, covering machine learning principles, neural networks, prompt engineering, and ethical considerations.',
    credentialUrl: 'https://coursera.org/certificate/generative-ai-everyone',
  },
];

const Certifications = () => {
  const [animated, setAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated) {
          setAnimated(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [animated]);

  return (
    <section id="certifications" className="py-20 bg-gray-50 dark:bg-gray-800" ref={sectionRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Certifications
          </h2>
          <div className="h-1 w-20 bg-indigo-600 dark:bg-indigo-400 mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical Timeline Line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-indigo-200 dark:bg-indigo-800"></div>
            
            {/* Certification Items */}
            <div className="space-y-12">
              {certifications.map((certification, index) => (
                <div 
                  key={certification.id}
                  className={`relative ${animated ? 'animate-fade-in' : 'opacity-0'}`}
                  style={{ 
                    animationDelay: `${index * 200}ms`,
                    animationDuration: '1s',
                    animationFillMode: 'forwards' 
                  }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-0 md:left-1/2 transform -translate-y-1/2 md:-translate-x-1/2 flex items-center justify-center w-8 h-8 bg-indigo-500 dark:bg-indigo-600 rounded-full">
                    <Award className="w-4 h-4 text-white" />
                  </div>
                  
                  {/* Content */}
                  <div className={`ml-12 md:ml-0 ${
                    index % 2 === 0 ? 'md:mr-[50%] md:pr-12 text-right' : 'md:ml-[50%] md:pl-12'
                  }`}>
                    <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                        {certification.title}
                      </h3>
                      <div className="flex items-center justify-start mb-4 text-sm text-gray-600 dark:text-gray-400">
                        <span>{certification.issuer}</span>
                        <span className="mx-2">•</span>
                        <span>{certification.date}</span>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300 mb-4">
                        {certification.description}
                      </p>
                      <a
                        href={certification.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block text-indigo-600 dark:text-indigo-400 font-medium hover:underline"
                      >
                        View Credential
                      </a>
                    </div>
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

export default Certifications;