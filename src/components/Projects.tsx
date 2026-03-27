import { ExternalLink, Github } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface Project {
  id: number;
  title: string;
  description: [string, string];
  impact: string;
  tagline: string;
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
    description: [
      'A real-time multiplayer chess platform.',
      'Designed so every move is validated, queued, and persisted—without slowing gameplay.',
    ],
    impact: 'Demonstrates deep understanding of distributed systems, real-time communication, and scalable backend design.',
    tagline: 'Not just a chess app — a distributed real-time system',
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
    title: 'MetaVerse Platform',
    description: [
      'A multi-user virtual space where presence stays real-time.',
      'Modular services (HTTP, WebSockets, storage) keep scalability intentional—not accidental.',
    ],
    impact: 'Shows ability to architect complex systems with clean separation of concerns and production-grade thinking.',
    tagline: 'A virtual world with real engineering behind it',
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
    description: [
      'An AI system that reads a task brief and recommends the best employee.',
      'Gemini-powered understanding plus a live admin dashboard turns “manual matching” into minutes.',
    ],
    impact: 'Reduces manual task allocation effort significantly—turning a real business problem into measurable time saved.',
    tagline: 'Replaced hours of manual work with one smart algorithm',
    technologies: ['Node.js', 'React.js', 'Express.js', 'MongoDB', 'Gemini API'],
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
  const showDemoLink = Boolean(project.demoUrl && project.demoUrl !== project.repoUrl);

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
          className="glass-card aspect-[4/3] sm:aspect-video lg:aspect-[4/5] overflow-hidden rounded-[2rem] border border-[var(--border-soft)] shadow-[var(--shadow-lift)]"
        >
          <div className="absolute inset-0 bg-[rgba(9,10,16,0.38)] group-hover:bg-transparent transition-colors duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] z-10" />
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
          <span className="text-[var(--text-soft)] font-mono text-sm mb-4 block">
            0{index + 1}
          </span>
          <h3 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[var(--text-primary)] mb-6 tracking-tight leading-tight">
            {project.title}
          </h3>
          
          <p className="text-[var(--text-muted)] mb-10 text-lg leading-relaxed font-light">
            {project.description[0]}
            <br />
            {project.description[1]}
          </p>

          <p className="text-[var(--text-soft)] mb-6 text-base leading-relaxed font-light">
            {project.impact}
          </p>

          <p className="text-[var(--accent)] text-xs uppercase tracking-[0.24em] leading-none">
            {project.tagline}
          </p>
          
          <div className="flex flex-wrap gap-3 mb-12">
            {project.technologies.map((tech) => (
              <span 
                key={tech} 
                className="glass-card px-4 py-2 bg-transparent text-[var(--text-muted)] rounded-full text-[10px] md:text-xs uppercase tracking-[0.2em] border border-[var(--border-soft)]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        <div className="flex flex-wrap items-center gap-6 mt-auto">
          {showDemoLink && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 text-[#111318] bg-[var(--text-primary)] px-8 py-4 rounded-full font-medium tracking-widest text-xs uppercase hover:bg-white transition-all duration-500 hover:-translate-y-1"
            >
              Live demo
              <ExternalLink className="w-4 h-4 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          )}

          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card group flex items-center gap-3 text-[var(--text-primary)] border border-[var(--border-soft)] px-8 py-4 rounded-full font-medium tracking-widest text-xs uppercase hover:border-[var(--border-strong)] transition-all duration-500 hover:-translate-y-1"
          >
            View on GitHub
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
    <section ref={sectionRef} id="projects" className="py-28 md:py-32 bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <motion.div 
          style={{ y: headerY }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-24 md:mb-32 flex flex-col md:flex-row justify-between items-end border-b border-[var(--border-soft)] pb-8"
        >
          <div>
            <h2 className="text-[var(--text-soft)] font-medium tracking-[0.24em] uppercase text-xs md:text-sm mb-4">
              02 // Work
            </h2>
            <h3 className="font-display text-6xl md:text-7xl lg:text-[7rem] tracking-tighter leading-none">
              SELECTED<br />PROJECTS
            </h3>
          </div>
          <p className="mt-8 md:mt-0 text-[var(--text-soft)] max-w-sm uppercase tracking-widest text-[10px] md:text-xs">
            Systems that feel fast today—and stay calm tomorrow.
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