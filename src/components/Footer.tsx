
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t border-border">
      {/* Main Footer */}
      <div className="py-8 px-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          {/* Logo & Tagline */}
          <div className="mb-6 md:mb-0 text-center md:text-left">
           
            <p className="text-sm text-muted-foreground mt-2">
              Bringing Your Ideas into Reality with Tech
            </p>
          </div>
          
          {/* Social Icons */}
          <div className="flex gap-4">
            <a 
              href=" https://github.com/Skinnyfella" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center transition-colors hover:bg-muted"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/skinnyfella/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center transition-colors hover:bg-muted"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="https://x.com/Iamskinny_fella" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center transition-colors hover:bg-muted"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a 
              href="mailto:officialayanfedavid@gmail.com" 
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center transition-colors hover:bg-muted"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="py-4 border-t border-border text-center text-sm text-muted-foreground">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p>© {currentYear} Portfolio. All rights reserved.</p>
          <div className="flex gap-6 mt-3 md:mt-0">
            <Link to="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-foreground transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
