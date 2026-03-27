import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const skillCategories = [
  {
    title: 'Languages',
    skills: ['C++', 'JavaScript', 'TypeScript', 'HTML/CSS']
  },
  {
    title: 'Frameworks',
    skills: ['React JS', 'Node.js', 'Express.js', 'Tailwind CSS']
  },
  {
    title: 'Databases',
    skills: ['PostgreSQL', 'MongoDB', 'Redis']
  },
  {
    title: 'Core',
    skills: ['Data Structures', 'Algorithms', 'System Design']
  }
];

const Skills = () => {
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null);

  return (
    <section id="skills" className="py-32 bg-[#131312] text-[#F4F0EA] min-h-screen flex flex-col justify-center">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-24 flex flex-col md:flex-row justify-between items-end border-b border-[#F4F0EA]/10 pb-8"
        >
          <div>
            <h2 className="text-[#F4F0EA]/50 font-medium tracking-[0.2em] uppercase text-sm mb-4">
              03 // Capabilities
            </h2>
            <h3 className="font-display text-5xl md:text-7xl lg:text-8xl tracking-tighter leading-none">
              EXPERTISE
            </h3>
          </div>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          
          {/* Left Column: Categories */}
          <div className="lg:col-span-5 border-r border-[#F4F0EA]/10 pr-0 lg:pr-12">
            {skillCategories.map((cat, index) => (
              <div 
                key={index}
                onMouseEnter={() => setHoveredCategory(index)}
                onMouseLeave={() => setHoveredCategory(null)}
                className="group border-b border-[#F4F0EA]/10 last:border-0 py-8 cursor-pointer relative"
              >
                <div className="flex justify-between items-center relative z-10 transition-transform duration-500 group-hover:translate-x-4">
                  <h4 className="font-display text-3xl md:text-5xl text-[#F4F0EA] mix-blend-difference">
                    {cat.title}
                  </h4>
                  <span className="text-[#E5D3B3] font-mono opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    →
                  </span>
                </div>
                {/* Background sliding effect */}
                <div className="absolute inset-0 bg-[#F4F0EA] transform scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-500 z-0"></div>
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
                        className="px-6 py-4 rounded-full border border-[#F4F0EA]/20 text-xl font-light tracking-wide bg-[#0E0E0C] text-[#F4F0EA]"
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
                   className="text-[#F4F0EA]/30 font-display text-4xl md:text-6xl uppercase tracking-tighter leading-tight"
                 >
                   Hover over <br /> a category <br /> to reveal <br /> stack.
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