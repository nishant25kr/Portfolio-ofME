import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="pt-20 pb-10 bg-[#0E0E0C] border-t border-[#F4F0EA]/10 text-[#F4F0EA]">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 gap-8">
          <div>
            <h2 className="font-display text-4xl md:text-6xl tracking-tighter hover:text-[#E5D3B3] transition-colors cursor-pointer">
              NISHANT KUMAR.
            </h2>
          </div>
          
          <div className="flex items-center space-x-6">
            <a
              href="https://github.com/nishant25kr"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border border-[#F4F0EA]/20 flex items-center justify-center text-[#F4F0EA] hover:bg-[#F4F0EA] hover:text-[#0E0E0C] transition-all duration-300 transform hover:scale-110"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/nishant25kr"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border border-[#F4F0EA]/20 flex items-center justify-center text-[#F4F0EA] hover:bg-[#F4F0EA] hover:text-[#0E0E0C] transition-all duration-300 transform hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:nishant927472@gmail.com"
              className="w-12 h-12 rounded-full border border-[#F4F0EA]/20 flex items-center justify-center text-[#F4F0EA] hover:bg-[#F4F0EA] hover:text-[#0E0E0C] transition-all duration-300 transform hover:scale-110"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-[#F4F0EA]/40 text-xs uppercase tracking-widest pt-8 border-t border-[#F4F0EA]/5 gap-4">
          <p>&copy; {currentYear} All rights reserved.</p>
          <div className="flex space-x-8">
            <a href="#about" className="hover:text-[#F4F0EA] transition-colors">About</a>
            <a href="#projects" className="hover:text-[#F4F0EA] transition-colors">Work</a>
            <a href="#contact" className="hover:text-[#F4F0EA] transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;