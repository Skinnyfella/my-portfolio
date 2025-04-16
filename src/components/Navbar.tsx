import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Work', path: '/work' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <nav className={`navbar fixed top-0 left-0 right-0 w-full z-50 bg-background/95 backdrop-blur-sm transition-all duration-300 ${scrolled ? 'py-2 shadow-md' : 'py-3'}`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 animate-fade-in">
          <div className="w-10 h-10 bg-neon-pink rounded-md flex items-center justify-center neon-glow">
            <span className="text-white font-bold text-lg">P</span>
          </div>
          <span className="font-bold text-xl tracking-tight">PORTFOLIO</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 animate-fade-in">
          {navItems.map((item) => (
            <Link 
              key={item.name} 
              to={item.path}
              className={`relative px-1 py-2 link-underline transition-colors duration-300 
                ${location.pathname === item.path ? 'text-neon-pink' : 'text-foreground hover:text-neon-blue'}`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-foreground p-2 neon-glow"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 top-[60px] z-40 bg-background/95 backdrop-blur-md md:hidden animate-fade-in">
          <div className="flex flex-col items-center justify-center h-full gap-8">
            {navItems.map((item, index) => (
              <Link 
                key={item.name} 
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`text-2xl font-medium transition-all duration-300 animate-fade-in neon-glow
                  ${location.pathname === item.path ? 'text-neon-pink' : 'text-foreground hover:text-neon-blue'}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
