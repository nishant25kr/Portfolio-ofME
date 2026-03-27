import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Work', href: '#projects' },
  { name: 'Expertise', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-700 ${
        scrolled 
          ? 'py-4 bg-[#0E0E0C]/80 backdrop-blur-md border-b border-[#F4F0EA]/5' 
          : 'py-8 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <div className="flex justify-between items-center">
          <a href="#home" className="text-xl font-display font-bold tracking-tighter text-[#F4F0EA] hover:opacity-70 transition-opacity">
            NK.
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-12">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-[#F4F0EA]/60 hover:text-[#F4F0EA] text-xs uppercase tracking-[0.2em] transition-colors"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-[#F4F0EA] focus:outline-none"
              aria-label="Toggle menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 z-50 bg-[#0E0E0C] transform transition-transform duration-700 ease-in-out ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="container mx-auto px-6 py-8 h-full flex flex-col">
          <div className="flex justify-between items-center">
            <a href="#home" className="text-xl font-display font-bold tracking-tighter text-[#F4F0EA]">
              NK.
            </a>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#F4F0EA]"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <nav className="mt-auto mb-auto flex flex-col space-y-8">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-4xl sm:text-6xl font-display font-medium text-[#F4F0EA] hover:text-[#E5D3B3] transition-colors"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {item.name}
              </a>
            ))}
          </nav>

          <div className="pb-8">
            <a href="mailto:nishant927472@gmail.com" className="text-[#F4F0EA]/50 uppercase tracking-[0.2em] text-sm hover:text-[#F4F0EA] transition-colors">
              nishant927472@gmail.com
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;