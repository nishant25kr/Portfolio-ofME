import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const educationData = [
  {
    id: 1,
    institution: 'Lovely Professional University',
    degree: 'B.Tech in Computer Science & Engineering',
    period: '2022 - 2026',
    location: 'Phagwara, Punjab',
    details: [
      'CGPA: 6.50',
      'Specializing in Full-Stack Web Development',
      'Built advanced projects like real-time multiplayer chess and Metaverse platforms'
    ]
  },
  {
    id: 2,
    institution: 'Indian Public School',
    degree: 'Intermediate (12th)',
    period: '2019 - 2020',
    location: 'Purnia, Bihar',
    details: [
      'Percentage: 70.00%',
      'Focused on Mathematics and Science fundamentals',
      'Developed early interest in programming and computer science'
    ]
  }
];

const experienceData = [
  {
    id: 1,
    title: 'Full Stack Developer Intern',
    organization: 'Dhobi G (Remote)',
    date: 'June 2025 - Jul 2025',
    description: 'Developed a responsive web-based laundry management platform using Next.js for dynamic UI components and Django for RESTful APIs enabling secure user management and order processing. Collaborated in Agile sprints, utilizing AI tools and Git for task efficiency.'
  }
];

const Education = () => {
  const [activeTab, setActiveTab] = useState<'experience' | 'education'>('experience');

  return (
    <section id="education" className="py-28 md:py-32 bg-[var(--bg-primary)] text-[var(--text-primary)] min-h-screen">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-20 md:mb-24 flex flex-col md:flex-row justify-between items-end border-b border-[var(--border-soft)] pb-8"
        >
          <div>
            <h2 className="text-[var(--text-soft)] font-medium tracking-[0.24em] uppercase text-xs md:text-sm mb-4">
              04 // Timeline
            </h2>
            <h3 className="font-display text-5xl md:text-7xl lg:text-8xl tracking-tighter leading-none">
              MILESTONES
            </h3>
          </div>
          
          <div className="glass-card flex gap-3 mt-8 md:mt-0 rounded-full border border-[var(--border-soft)] px-4 py-2">
            <button
              onClick={() => setActiveTab('experience')}
              className={`text-sm md:text-base font-display tracking-tight transition-colors duration-300 px-4 py-2 rounded-full ${activeTab === 'experience' ? 'bg-[rgba(247,243,238,0.12)] text-[var(--text-primary)]' : 'text-[var(--text-soft)] hover:text-[var(--text-primary)]'}`}
            >
              Experience
            </button>
            <button
              onClick={() => setActiveTab('education')}
              className={`text-sm md:text-base font-display tracking-tight transition-colors duration-300 px-4 py-2 rounded-full ${activeTab === 'education' ? 'bg-[rgba(247,243,238,0.12)] text-[var(--text-primary)]' : 'text-[var(--text-soft)] hover:text-[var(--text-primary)]'}`}
            >
              Education
            </button>
          </div>
        </motion.div>
        
        <div className="max-w-4xl">
          <AnimatePresence mode="wait">
            {activeTab === 'experience' ? (
              <motion.div
                key="experience"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="space-y-16"
              >
                {experienceData.map((item) => (
                  <div key={item.id} className="group relative pl-8 md:pl-0">
                    <div className="hidden md:block absolute left-[-40px] top-4 w-3 h-3 rounded-full border border-[var(--border-strong)] group-hover:bg-[var(--accent)] group-hover:scale-150 transition-all duration-500" />
                    <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-4">
                      <h4 className="font-display text-3xl md:text-5xl tracking-tight mb-2 md:mb-0">
                        {item.title}
                      </h4>
                      <span className="text-[var(--text-soft)] font-mono text-sm uppercase tracking-widest shrink-0 md:ml-8">
                        {item.date}
                      </span>
                    </div>
                    <div className="text-xl text-[var(--text-muted)] mb-6 font-display">
                      {item.organization}
                    </div>
                    <p className="text-[var(--text-muted)] font-light leading-relaxed max-w-2xl text-lg">
                      {item.description}
                    </p>
                  </div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="education"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="space-y-16"
              >
                {educationData.map((item) => (
                  <div key={item.id} className="group relative pl-8 md:pl-0">
                    <div className="hidden md:block absolute left-[-40px] top-4 w-3 h-3 rounded-full border border-[var(--border-strong)] group-hover:bg-[var(--accent)] group-hover:scale-150 transition-all duration-500" />
                    <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-4">
                      <h4 className="font-display text-3xl md:text-5xl tracking-tight mb-2 md:mb-0">
                        {item.institution}
                      </h4>
                      <span className="text-[var(--text-soft)] font-mono text-sm uppercase tracking-widest shrink-0 md:ml-8">
                        {item.period}
                      </span>
                    </div>
                    <div className="text-xl text-[var(--text-muted)] mb-6 font-display">
                      {item.degree} <span className="mx-2">•</span> <span className="text-[var(--text-soft)]">{item.location}</span>
                    </div>
                    <ul className="space-y-3 max-w-2xl">
                      {item.details.map((detail, i) => (
                        <li key={i} className="flex items-start text-[var(--text-muted)] font-light text-lg">
                          <span className="mr-4 text-[var(--accent-soft)] mt-1.5 text-xs">◆</span>
                          <span className="leading-relaxed">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Education;