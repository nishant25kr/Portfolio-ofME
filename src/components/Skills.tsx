import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const skillCategories = [
  {
    title: 'Languages',
    skills: ['C++', 'JavaScript', 'TypeScript', 'HTML/CSS']
  },
  {
    title: 'Frontend',
    skills: ['React.js', 'Next.js', 'Tailwind CSS']
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express.js', 'Django']
  },
  {
    title: 'Databases',
    skills: ['PostgreSQL', 'MongoDB', 'Prisma ORM']
  },
  {
    title: 'Real-time',
    skills: ['WebSockets', 'Redis Queue']
  },
  {
    title: 'Tools',
    skills: ['Git', 'GitHub', 'Agile', 'AI Tools']
  },
  {
    title: 'Core CS + DSA',
    skills: ['Problem Solving', 'Data Structures & Algorithms', 'System Design']
  }
];

const Skills = () => {
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null);

  return (
    <section id="skills" className="py-28 md:py-32 bg-[var(--bg-elevated)] text-[var(--text-primary)] min-h-screen flex flex-col justify-center">
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
              03 // Capabilities
            </h2>
            <h3 className="font-display text-5xl md:text-7xl lg:text-8xl tracking-tighter leading-none">
              EXPERTISE
            </h3>
          </div>
        </motion.div>

        <p className="max-w-2xl text-[var(--text-muted)] text-lg md:text-xl font-light leading-relaxed mt-4 mb-10">
          Here's what I bring to your engineering team from day one:
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          
          {/* Left Column: Categories */}
          <div className="lg:col-span-5 border-r border-[var(--border-soft)] pr-0 lg:pr-12">
            {skillCategories.map((cat, index) => (
              <div 
                key={index}
                onMouseEnter={() => setHoveredCategory(index)}
                onMouseLeave={() => setHoveredCategory(null)}
                className="group border-b border-[var(--border-soft)] last:border-0 py-8 cursor-pointer relative"
              >
                <div className="flex justify-between items-center relative z-10 transition-transform duration-500 group-hover:translate-x-3">
                  <h4 className="font-display text-3xl md:text-5xl text-[var(--text-primary)]">
                    {cat.title}
                  </h4>
                  <span className="text-[var(--accent)] font-mono opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    →
                  </span>
                </div>
                <div className="absolute inset-0 bg-[rgba(247,243,238,0.08)] transform scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-500 z-0" />
              </div>
            ))}
          </div>
          
          {/* Right Column: Skills Display */}
          <div className="lg:col-span-7 flex flex-col justify-center min-h-[300px]">
             <AnimatePresence mode="wait">
               {hoveredCategory !== null ? (
                 <motion.div
                   key={hoveredCategory}
                   initial={{ opacity: 0, x: 20 }}
                   animate={{ opacity: 1, x: 0 }}
                   exit={{ opacity: 0, x: -20 }}
                   transition={{ duration: 0.4 }}
                   className="flex flex-wrap gap-4"
                 >
                   {skillCategories[hoveredCategory].skills.map((skill, i) => (
                      <motion.span 
                        key={skill}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1, duration: 0.4 }}
                        className="glass-card px-6 py-4 rounded-full border border-[var(--border-soft)] text-xl font-light tracking-wide bg-[var(--bg-primary)] text-[var(--text-primary)]"
                      >
                        {skill}
                      </motion.span>
                   ))}
                 </motion.div>
               ) : (
                 <motion.div
                   initial={{ opacity: 0 }}
                   animate={{ opacity: 1 }}
                   exit={{ opacity: 0 }}
                   className="text-[var(--text-soft)] font-display text-4xl md:text-6xl uppercase tracking-tighter leading-tight"
                 >
                  Hover a category
                  <br />
                  to see what I
                  <br />
                  use to ship.
                 </motion.div>
               )}
             </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;