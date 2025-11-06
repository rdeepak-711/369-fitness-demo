import { Link } from 'react-router-dom';
import gym from '../data/gym.json';

const Footer = () => {
  const gymInfo = gym;

  return (
    <footer className="bg-brand-black text-white py-16">
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex flex-col font-heading font-extrabold mb-4">
              <span className="text-2xl text-white">369</span>
              <span className="text-xs font-semibold text-brand-red tracking-wider">Fitness Wellness</span>
            </div>
            <p className="text-brand-light italic mb-6">{gymInfo.tagline}</p>
            <div className="flex gap-4">
              <a 
                href={gymInfo.location.socialMedia.instagram} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full hover:bg-brand-red transition-all duration-300 hover:-translate-y-1"
                aria-label="Instagram"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a 
                href={gymInfo.location.socialMedia.facebook} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full hover:bg-brand-red transition-all duration-300 hover:-translate-y-1"
                aria-label="Facebook"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-heading text-xl mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-brand-light hover:text-brand-red transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-brand-light hover:text-brand-red transition-colors">About Us</Link></li>
              <li><Link to="/programs" className="text-brand-light hover:text-brand-red transition-colors">Programs</Link></li>
              <li><Link to="/membership" className="text-brand-light hover:text-brand-red transition-colors">Membership</Link></li>
              <li><Link to="/wellness" className="text-brand-light hover:text-brand-red transition-colors">Wellness Corner</Link></li>
              <li><Link to="/testimonials" className="text-brand-light hover:text-brand-red transition-colors">Testimonials</Link></li>
              <li><Link to="/privacy" className="text-brand-light hover:text-brand-red transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-brand-light hover:text-brand-red transition-colors">Terms & Conditions</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-xl mb-6">Contact</h3>
            <ul className="space-y-3 text-brand-light">
              <li>
                <a href={`tel:${gymInfo.location.phone}`} className="hover:text-brand-red transition-colors">
                  {gymInfo.location.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${gymInfo.location.email}`} className="hover:text-brand-red transition-colors">
                  {gymInfo.location.email}
                </a>
              </li>
              <li className="text-sm">{gymInfo.location.address}</li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-xl mb-6">Get Started</h3>
            <p className="text-brand-light mb-6">Ready to transform your body and elevate your mind?</p>
            <Link to="/contact" className="btn-primary inline-block">
              Book Free Trial
            </Link>
            {false && (
              <form className="mt-6">
                <label htmlFor="newsletter" className="block text-sm mb-2 text-brand-light">Join our newsletter</label>
                <div className="flex gap-2">
                  <input id="newsletter" type="email" placeholder="Your email" className="flex-1 px-4 py-3 rounded bg-white/10 text-white placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-red" />
                  <button type="button" className="btn-primary px-5">Subscribe</button>
                </div>
              </form>
            )}
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-brand-light text-sm">
          <p>&copy; {new Date().getFullYear()} 369 Fitness Wellness. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
