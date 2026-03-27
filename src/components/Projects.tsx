import { ExternalLink, Github } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

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
    title: 'RealTime Chess Game',
    description: 'A real-time multiplayer chess platform with move validation, asynchronous processing, and reliable game recovery.',
    technologies: ['Node.js', 'React.js', 'Chess.js', 'WebSocket', 'Redis', 'PostgreSQL'],
    features: [
      'Real-time multiplayer gameplay with board rendering',
      'Independent HTTP authentication server for secure login and authorization',
      'Dedicated WebSocket server for live move synchronization',
      'Redis queue to process game moves asynchronously',
      'Worker server for persistent database storage and recovery'
    ],
    repoUrl: 'https://github.com/nishant25kr/chess',
    demoUrl: 'https://github.com/nishant25kr/chess',
    imageUrl: 'https://images.pexels.com/photos/277124/pexels-photo-277124.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 2,
    title: 'Meta Verse Platform',
    description: 'A scalable real-time multi-user Metaverse platform built with a modular service-based architecture.',
    technologies: ['Node.js', 'React.js', 'WebSocket', 'PostgreSQL', 'Prisma'],
    features: [
      'Modular microservice architecture separating HTTP APIs, WebSockets, and DB layers',
      'Secure RESTful API for JWT-based auth and dynamic virtual space creation',
      'Custom WebSocket server for movement synchronization and live presence tracking',
      'Scalable spatial layout database schema using Prisma ORM'
    ],
    repoUrl: 'https://github.com/nishant25kr/meta-verse',
    demoUrl: 'https://github.com/nishant25kr/meta-verse',
    imageUrl: 'https://images.pexels.com/photos/8721318/pexels-photo-8721318.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 3,
    title: 'AI Task Assignment System',
    description: 'An AI-driven admin dashboard that analyses task requirements and dynamically assigns them to the most suitable employees.',
    technologies: ['Node.js', 'React.js', 'MongoDB', 'Express.js', 'Gemini API'],
    features: [
      'Admin dashboard for organizational task management and tracking',
      'AI-based assignment engine to extract required skills from task descriptions',
      'Skill-based matching using AI text analysis to reduce manual allocation',
      'Real-time dashboard updates reflecting assignments and status changes'
    ],
    repoUrl: 'https://github.com/nishant25kr/AI-Task-Assignment-System',
    demoUrl: 'https://github.com/nishant25kr/AI-Task-Assignment-System',
    imageUrl: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600'
  }
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const yImage = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <div 
      ref={ref}
      className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-24`}
    >
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        className="w-full lg:w-1/2 relative group"
      >
        <motion.div 
          style={{ y: yImage }}
          className="aspect-[4/3] sm:aspect-video lg:aspect-[4/5] overflow-hidden rounded-[2rem] border border-[#F4F0EA]/10 shadow-2xl"
        >
          <div className="absolute inset-0 bg-[#0E0E0C]/40 group-hover:bg-transparent transition-colors duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] z-10"></div>
          <img 
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover filter grayscale opacity-90 transition-all duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:grayscale-0 group-hover:scale-110"
          />
        </motion.div>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="w-full lg:w-1/2 flex flex-col pt-2 pb-4"
      >
        <div className="flex-1">
          <span className="text-[#F4F0EA]/50 font-mono text-sm mb-4 block">
            0{index + 1}
          </span>
          <h3 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#F4F0EA] mb-6 tracking-tight leading-tight mix-blend-difference">
            {project.title}
          </h3>
          
          <p className="text-[#F4F0EA]/70 mb-10 text-lg leading-relaxed font-light">
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-3 mb-12">
            {project.technologies.map((tech) => (
              <span 
                key={tech} 
                className="px-4 py-2 bg-transparent text-[#F4F0EA]/80 rounded-full text-[10px] md:text-xs uppercase tracking-[0.2em] border border-[#F4F0EA]/20 backdrop-blur-md"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        <div className="flex flex-wrap items-center gap-6 mt-auto">
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 text-[#0E0E0C] bg-[#F4F0EA] px-8 py-4 rounded-full font-medium tracking-widest text-xs uppercase hover:bg-white transition-all duration-300 transform hover:scale-105"
          >
            View Project
            <ExternalLink className="w-4 h-4 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 text-[#F4F0EA] border border-[#F4F0EA]/30 px-8 py-4 rounded-full font-medium tracking-widest text-xs uppercase hover:bg-[#F4F0EA]/10 transition-all duration-300 transform hover:scale-105"
          >
            GitHub
            <Github className="w-4 h-4 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:rotate-12" />
          </a>
        </div>
      </motion.div>
    </div>
  );
};

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const headerY = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section ref={sectionRef} id="projects" className="py-32 bg-[#0E0E0C] text-[#F4F0EA]">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <motion.div 
          style={{ y: headerY }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-32 flex flex-col md:flex-row justify-between items-end border-b border-[#F4F0EA]/10 pb-8"
        >
          <div>
            <h2 className="text-[#F4F0EA]/50 font-medium tracking-[0.2em] uppercase text-xs md:text-sm mb-4">
              02 // Work
            </h2>
            <h3 className="font-display text-6xl md:text-7xl lg:text-[7rem] tracking-tighter leading-none">
              SELECTED<br />PROJECTS
            </h3>
          </div>
          <p className="mt-8 md:mt-0 text-[#F4F0EA]/40 max-w-sm uppercase tracking-widest text-[10px] md:text-xs">
            Pushing boundaries with code and intelligent architectures.
          </p>
        </motion.div>
        
        <div className="space-y-40">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;