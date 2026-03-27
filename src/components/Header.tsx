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
          ? 'py-4 bg-[rgba(12,14,23,0.72)] backdrop-blur-xl border-b border-[var(--border-soft)] shadow-[0_12px_45px_rgba(0,0,0,0.32)]'
          : 'py-7 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <div className="flex justify-between items-center">
          <a href="#home" className="text-xl font-display font-bold tracking-tight text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors duration-500">
            NK.
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-[var(--text-muted)] hover:text-[var(--text-primary)] text-[11px] uppercase tracking-[0.24em] transition-colors duration-500"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-[var(--text-primary)] focus:outline-none"
              aria-label="Toggle menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 z-50 bg-[rgba(9,10,16,0.96)] backdrop-blur-2xl transform transition-transform duration-700 ease-in-out ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="container mx-auto px-6 py-8 h-full flex flex-col">
          <div className="flex justify-between items-center">
            <a href="#home" className="text-xl font-display font-bold tracking-tight text-[var(--text-primary)]">
              NK.
            </a>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="text-[var(--text-primary)]"
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
                className="text-4xl sm:text-6xl font-display font-medium text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {item.name}
              </a>
            ))}
          </nav>

          <div className="pb-8">
            <a href="mailto:nishant927472@gmail.com" className="text-[var(--text-soft)] uppercase tracking-[0.24em] text-sm hover:text-[var(--text-primary)] transition-colors">
              nishant927472@gmail.com
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;