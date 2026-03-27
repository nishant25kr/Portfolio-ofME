import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="pt-20 pb-10 bg-[var(--bg-primary)] border-t border-[var(--border-soft)] text-[var(--text-primary)]">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 gap-8">
          <div>
            <h2 className="font-display text-4xl md:text-6xl tracking-tighter hover:text-[var(--accent)] transition-colors cursor-pointer">
              NISHANT KUMAR.
            </h2>
          </div>
          
          <div className="flex items-center space-x-6">
            <a
              href="https://github.com/nishant25kr"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card w-12 h-12 rounded-full border border-[var(--border-soft)] flex items-center justify-center text-[var(--text-primary)] hover:border-[var(--border-strong)] transition-all duration-500 hover:-translate-y-1"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/nishant25kr"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card w-12 h-12 rounded-full border border-[var(--border-soft)] flex items-center justify-center text-[var(--text-primary)] hover:border-[var(--border-strong)] transition-all duration-500 hover:-translate-y-1"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:nishant927472@gmail.com"
              className="glass-card w-12 h-12 rounded-full border border-[var(--border-soft)] flex items-center justify-center text-[var(--text-primary)] hover:border-[var(--border-strong)] transition-all duration-500 hover:-translate-y-1"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-[var(--text-soft)] text-xs uppercase tracking-widest pt-8 border-t border-[rgba(247,243,238,0.08)] gap-4">
          <p>&copy; {currentYear} All rights reserved.</p>
          <div className="flex space-x-8">
            <a href="#about" className="hover:text-[var(--text-primary)] transition-colors">About</a>
            <a href="#projects" className="hover:text-[var(--text-primary)] transition-colors">Work</a>
            <a href="#contact" className="hover:text-[var(--text-primary)] transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;