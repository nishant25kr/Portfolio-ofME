import { useState, useRef, useEffect } from 'react';
import { BookOpen, Trophy } from 'lucide-react';

interface EducationItem {
  id: number;
  institution: string;
  degree: string;
  period: string;
  location: string;
  //score: string;
  details: string[];
}

interface AchievementItem {
  id: number;
  title: string;
  organization: string;
  date: string;
  description: string;
}

const educationData: EducationItem[] = [
  {
    id: 1,
    institution: 'Lovely Professional University',
    degree: 'B.Tech in Computer Science & Engineering',
    period: '2022 - Present',
    location: 'Punjab, India',
    //score: 'CGPA: 8.5/10',
    details: [
      'Specializing in Full-Stack Development and Machine Learning',
      'Active member of the Programming Club and Coding Competitions',
      'Participated in multiple hackathons and Smart India Hackathon',
      'Developed several projects including job platforms and land buying systems'
    ]
  },
  {
    id: 2,
    institution: 'Indian Public School',
    degree: 'Intermediate (12th)',
    period: '2020 - 2022',
    location: 'Purnia, India',
    //score: 'Percentage: 71%',
    details: [
      'Focused on Physics, Chemistry, and Mathematics',
      'Participated in various science exhibitions and competitions',
      'Developed interest in programming and computer science',
      
    ]
  }
];

const achievementsData: AchievementItem[] = [
  {
    id: 1,
    title: 'Smart India Hackathon',
    organization: 'LPU',
    date: 'August 2023',
    description: 'Led a team of 6 developers to create an innovative solution for agricultural land management, winning the regional finals of Smart India Hackathon.'
  },
  {
    id: 2,
    title: 'Community Development Project',
    organization: 'LPU',
    date: 'March 2023',
    description: 'Developed and deployed a web platform to connect local farmers with consumers, reducing middleman costs and increasing farmer profits by 15%.'
  }
];

const Education = () => {
  const [activeTab, setActiveTab] = useState<'education' | 'achievements'>('education');
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
    <section id="education" className="py-20 bg-white dark:bg-gray-900" ref={sectionRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Education & Achievements
          </h2>
          <div className="h-1 w-20 bg-indigo-600 dark:bg-indigo-400 mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {/* Tabs */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex p-1 rounded-lg bg-gray-200 dark:bg-gray-700">
              <button
                onClick={() => setActiveTab('education')}
                className={`flex items-center px-4 py-2 rounded-md ${
                  activeTab === 'education'
                    ? 'bg-white dark:bg-gray-600 text-indigo-600 dark:text-indigo-400 shadow-sm'
                    : 'text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400'
                }`}
              >
                <BookOpen className="w-4 h-4 mr-2" />
                Education
              </button>
              <button
                onClick={() => setActiveTab('achievements')}
                className={`flex items-center px-4 py-2 rounded-md ${
                  activeTab === 'achievements'
                    ? 'bg-white dark:bg-gray-600 text-indigo-600 dark:text-indigo-400 shadow-sm'
                    : 'text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400'
                }`}
              >
                <Trophy className="w-4 h-4 mr-2" />
                Achievements
              </button>
            </div>
          </div>
          
          {/* Education Content */}
          {activeTab === 'education' && (
            <div className="space-y-8">
              {educationData.map((item, index) => (
                <div 
                  key={item.id}
                  className={`bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transform transition-all duration-500 ${
                    animated ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="p-6">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                          {item.institution}
                        </h3>
                        <p className="text-indigo-600 dark:text-indigo-400 font-medium">
                          {item.degree}
                        </p>
                      </div>
                      <div className="md:text-right mt-2 md:mt-0">
                        <span className="inline-block px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400 rounded-full text-sm mb-2">
                          {item.period}
                        </span>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                          {item.location}
                        </p>
                        {/* <p className="text-gray-800 dark:text-gray-200 font-medium">
                          {item.score}
                        </p> */}
                      </div>
                    </div>
                    <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                      {item.details.map((detail, i) => (
                        <li key={i}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          )}
          
          {/* Achievements Content */}
          {activeTab === 'achievements' && (
            <div className="space-y-8">
              {achievementsData.map((item, index) => (
                <div 
                  key={item.id}
                  className={`bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transform transition-all duration-500 ${
                    animated ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="p-6">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                          {item.title}
                        </h3>
                        <p className="text-indigo-600 dark:text-indigo-400 font-medium">
                          {item.organization}
                        </p>
                      </div>
                      <div className="md:text-right mt-2 md:mt-0">
                        <span className="inline-block px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400 rounded-full text-sm">
                          {item.date}
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Education;