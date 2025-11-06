import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/98 backdrop-blur-md shadow-lg' : 'bg-white/95 backdrop-blur-sm shadow-md'
    }`}>
      <div className="container mx-auto px-5">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex flex-col font-heading font-extrabold text-brand-black">
            <span className="text-3xl leading-tight">369</span>
            <span className="text-xs font-semibold text-brand-red tracking-wider">Fitness Wellness</span>
          </Link>

          <div className={`lg:flex items-center gap-8 ${
            isMobileMenuOpen 
              ? 'fixed top-[70px] left-0 right-0 bg-white flex flex-col items-start p-8 shadow-xl lg:static lg:shadow-none lg:bg-transparent lg:p-0' 
              : 'hidden lg:flex'
          }`}>
            <Link 
              to="/" 
              className={`font-medium text-sm transition-colors pb-2 relative ${
                isActive('/') 
                  ? 'text-brand-red font-semibold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-brand-red' 
                  : 'text-brand-black hover:text-brand-red after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-brand-red after:transition-all hover:after:w-full'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`font-medium text-sm transition-colors pb-2 relative ${
                isActive('/about') 
                  ? 'text-brand-red font-semibold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-brand-red' 
                  : 'text-brand-black hover:text-brand-red after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-brand-red after:transition-all hover:after:w-full'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/programs" 
              className={`font-medium text-sm transition-colors pb-2 relative ${
                isActive('/programs') 
                  ? 'text-brand-red font-semibold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-brand-red' 
                  : 'text-brand-black hover:text-brand-red after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-brand-red after:transition-all hover:after:w-full'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Programs
            </Link>
            <Link 
              to="/membership" 
              className={`font-medium text-sm transition-colors pb-2 relative ${
                isActive('/membership') 
                  ? 'text-brand-red font-semibold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-brand-red' 
                  : 'text-brand-black hover:text-brand-red after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-brand-red after:transition-all hover:after:w-full'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Membership
            </Link>
            <Link 
              to="/wellness" 
              className={`font-medium text-sm transition-colors pb-2 relative ${
                isActive('/wellness') 
                  ? 'text-brand-red font-semibold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-brand-red' 
                  : 'text-brand-black hover:text-brand-red after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-brand-red after:transition-all hover:after:w-full'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Wellness Corner
            </Link>
            <Link 
              to="/testimonials" 
              className={`font-medium text-sm transition-colors pb-2 relative ${
                isActive('/testimonials') 
                  ? 'text-brand-red font-semibold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-brand-red' 
                  : 'text-brand-black hover:text-brand-red after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-brand-red after:transition-all hover:after:w-full'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Testimonials
            </Link>
            <Link 
              to="/contact" 
              className={`font-medium text-sm transition-colors pb-2 relative ${
                isActive('/contact') 
                  ? 'text-brand-red font-semibold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-brand-red' 
                  : 'text-brand-black hover:text-brand-red after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-brand-red after:transition-all hover:after:w-full'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Link 
              to="/contact" 
              className="btn-primary mt-4 lg:mt-0 lg:ml-4 text-sm px-6 py-2.5"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Claim Your Free Trial
            </Link>
          </div>

          <button 
            className="lg:hidden flex flex-col gap-1.5 p-1.5"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`w-6 h-0.5 bg-brand-black transition-all duration-300 ${
              isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
            }`}></span>
            <span className={`w-6 h-0.5 bg-brand-black transition-all duration-300 ${
              isMobileMenuOpen ? 'opacity-0' : ''
            }`}></span>
            <span className={`w-6 h-0.5 bg-brand-black transition-all duration-300 ${
              isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}></span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
