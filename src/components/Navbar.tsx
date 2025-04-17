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
      <div className="container mx-auto px-4 flex flex-row flex-wrap items-center justify-between gap-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 animate-fade-in shrink-0">
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-neon-pink rounded-md flex items-center justify-center neon-glow">
            
          </div>
          <span className="font-bold text-base sm:text-xl tracking-tight">PORTFOLIO</span>
        </Link>

        {/* Navigation */}
        <div className="flex flex-row flex-wrap items-center gap-3 sm:gap-6 animate-fade-in">
          {navItems.map((item) => (
            <Link 
              key={item.name} 
              to={item.path}
              className={`relative px-1 py-1 text-sm sm:text-base transition-colors duration-300 link-underline 
                ${location.pathname === item.path ? 'text-neon-pink' : 'text-foreground hover:text-neon-blue'}`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
