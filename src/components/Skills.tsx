import { useState, useEffect, useRef } from 'react';
import { Code, Server, PenTool as Tool } from 'lucide-react';

interface Skill {
  name: string;
  category: 'language' | 'framework' | 'tool';
  description: string;
  icon: JSX.Element;
}

const skills: Skill[] = [
  { 
    name: 'C++', 
    category: 'language',
    description: 'Expert in data structures, algorithms, and system programming',
    icon: <Code className="w-6 h-6" />
  },
  { 
    name: 'Java', 
    category: 'language',
    description: 'Proficient in object-oriented programming and enterprise applications',
    icon: <Code className="w-6 h-6" />
  },
  { 
    name: 'JavaScript', 
    category: 'language',
    description: 'Advanced knowledge of modern ES6+ features and async programming',
    icon: <Code className="w-6 h-6" />
  },
  { 
    name: 'Node.js', 
    category: 'framework',
    description: 'Building scalable backend services and REST APIs',
    icon: <Server className="w-6 h-6" />
  },
  { 
    name: 'React', 
    category: 'framework',
    description: 'Creating responsive and interactive user interfaces',
    icon: <Server className="w-6 h-6" />
  },
  { 
    name: 'Bootstrap', 
    category: 'framework',
    description: 'Rapid development of responsive web applications',
    icon: <Server className="w-6 h-6" />
  },
  { 
    name: 'MongoDB', 
    category: 'tool',
    description: 'Database design and optimization for NoSQL applications',
    icon: <Tool className="w-6 h-6" />
  },
  { 
    name: 'MySQL', 
    category: 'tool',
    description: 'Relational database management and query optimization',
    icon: <Tool className="w-6 h-6" />
  },
  { 
    name: 'GitHub', 
    category: 'tool',
    description: 'Version control and collaborative development workflows',
    icon: <Tool className="w-6 h-6" />
  }
];

const Skills = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'language' | 'framework' | 'tool'>('all');
  const [visibleSkills, setVisibleSkills] = useState<Skill[]>(skills);
  const [animated, setAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const filteredSkills = activeFilter === 'all' 
      ? skills 
      : skills.filter(skill => skill.category === activeFilter);
    
    setVisibleSkills(filteredSkills);
  }, [activeFilter]);

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

  const filters = [
    { name: 'All', value: 'all' },
    { name: 'Languages', value: 'language' },
    { name: 'Frameworks', value: 'framework' },
    { name: 'Tools', value: 'tool' },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800" ref={sectionRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Expertise
          </h2>
          <div className="h-1 w-20 bg-indigo-600 dark:bg-indigo-400 mx-auto"></div>
        </div>
        
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 rounded-lg bg-gray-200 dark:bg-gray-700">
            {filters.map((filter) => (
              <button
                key={filter.value}
                onClick={() => setActiveFilter(filter.value as any)}
                className={`px-4 py-2 rounded-md text-sm ${
                  activeFilter === filter.value
                    ? 'bg-white dark:bg-gray-600 text-indigo-600 dark:text-indigo-400 shadow-sm'
                    : 'text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400'
                }`}
              >
                {filter.name}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleSkills.map((skill, index) => (
            <div
              key={skill.name}
              className={`bg-white dark:bg-gray-700 rounded-lg p-6 shadow-md transform transition-all duration-500 hover:shadow-lg hover:-translate-y-1 ${
                animated ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-indigo-100 dark:bg-indigo-900 rounded-full mr-4 text-indigo-600 dark:text-indigo-400">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {skill.name}
                </h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;