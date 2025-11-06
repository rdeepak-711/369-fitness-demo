import { Link } from 'react-router-dom';
import gym from '../data/gym.json';
import programs from '../data/programs.json';
import facility from '../data/facility.json';
import { useCountUp } from '../hooks/useCountUp';
import ShareButtons from '../components/ShareButtons';
import Reveal from '../components/Reveal';

const Home = () => {
  const gymInfo = gym;

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden dark-section">
        {/** Allow overriding hero image via .env (VITE_HERO_IMAGE_URL). Supports public/ paths too. */}
        {(() => { /* noop wrapper to allow local vars in JSX */ })()}
        {(() => {
          const heroImage = import.meta.env.VITE_HERO_IMAGE_URL || 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1600&q=80';
          return (
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${heroImage})`,
                filter: 'brightness(0.4)'
              }}
            ></div>
          );
        })()}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-black/60 via-brand-black/50 to-brand-black/70"></div>
        
        <div className="relative z-10 container mx-auto px-5 text-center text-white">
          <h1 className="font-heading font-extrabold text-5xl md:text-7xl lg:text-8xl mb-6 animate-fade-in mt-6 md:mt-0">
            Transform Your Body.
            <br />
            <span className="text-brand-red">Elevate Your Mind.</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto font-light">
            Join Chennai's elite fitness & wellness community. Expert trainers, holistic wellness, and a vibrant community await you.
          </p>
          <p className="text-lg mb-2 text-brand-light">No credit card required • Cancel anytime</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link to="/contact" className="btn-primary text-lg px-10 py-5">
              Book Your Free Trial
            </Link>
            <Link to="/programs" className="btn-secondary text-lg px-10 py-5">
              Explore Programs
            </Link>
          </div>

          {/* Stats */}
          <Stats />
        </div>
      </section>

      {/* Why Choose 369 */}
      <section className="py-20 bg-brand-white">
        <div className="container mx-auto px-5">
          <h2 className="font-heading text-4xl md:text-5xl text-center mb-16">
            Why Choose <span className="text-brand-red">369</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {gymInfo.why369.map((item, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-brand-light"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="font-heading text-xl mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Programs */}
      <section className="py-20 bg-brand-light">
        <div className="container mx-auto px-5">
          <h2 className="font-heading text-4xl md:text-5xl text-center mb-4">
            Our <span className="text-brand-red">Programs</span>
          </h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            Comprehensive fitness and wellness programs designed to help you achieve your goals
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.slice(0, 6).map((program) => (
              <div 
                key={program.id}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={program.image} 
                    alt={program.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 to-transparent"></div>
                  <h3 className="absolute bottom-4 left-4 right-4 font-heading text-2xl text-white">
                    {program.name}
                  </h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4 line-clamp-3">{program.description}</p>
                  <ul className="mb-6 space-y-2">
                    {program.features.slice(0, 2).map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <span className="text-brand-red mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link 
                    to="/programs" 
                    className="btn-primary w-full text-center block"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* World-Class Facilities */}
      <section className="py-20 bg-brand-white relative overflow-hidden">
        <div className="container mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Reveal className="relative inline-block mb-4">
                <span className="absolute -top-2 -right-2 bg-brand-red text-white px-4 py-1 rounded-full text-sm font-bold animate-pulse">
                  ₹999 First Month
                </span>
                <h2 className="font-heading text-4xl md:text-5xl">
                  World-Class <span className="text-brand-red">Facilities</span>
                </h2>
              </Reveal>
              <p className="text-gray-600 mb-8 text-lg">
                Our state-of-the-art facility spans 5000 sq ft and includes everything you need for a complete fitness and wellness journey.
              </p>
              
              <div className="space-y-4 mb-8">
                {facility.features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <span className="text-brand-red text-2xl mr-3">✓</span>
                    <div>
                      <h4 className="font-heading font-semibold mb-1">{feature.name}</h4>
                      <p className="text-gray-600 text-sm">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="btn-primary text-center">
                  Schedule a Tour
                </Link>
                <Link to="/membership" className="btn-secondary text-center">
                  View Membership Plans
                </Link>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {facility.features.slice(0, 4).map((feature, index) => {
                const imgVar = `VITE_FACILITY_${index+1}_IMAGE_URL`;
                const featureImg = import.meta.env[imgVar];
                return (
                <div key={index} className="relative h-64 rounded-lg overflow-hidden group">
                  <img 
                    src={featureImg}
                    alt={feature.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-black/70 to-transparent"></div>
                  <h4 className="absolute bottom-3 left-3 right-3 font-heading text-white text-lg">
                    {feature.name}
                  </h4>
                </div>
              );})}
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-20 pb-28 md:pb-20 bg-gradient-to-br from-brand-black via-brand-black to-gray-900 text-white relative overflow-hidden dark-section">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-brand-red rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-red rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-5">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="font-heading text-4xl md:text-5xl mb-6">
              Start Your Transformation <span className="text-brand-red">Today</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join Chennai's elite fitness & wellness community. You deserve the best.
            </p>
            
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-8 mb-8 border border-white/20">
              <h3 className="font-heading text-2xl mb-6">Free Trial Benefits:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                <div className="flex items-center">
                  <span className="text-brand-red mr-3">✓</span>
                  <span>Full facility access</span>
                </div>
                <div className="flex items-center">
                  <span className="text-brand-red mr-3">✓</span>
                  <span>All group classes</span>
                </div>
                <div className="flex items-center">
                  <span className="text-brand-red mr-3">✓</span>
                  <span>Expert trainer consultation</span>
                </div>
                <div className="flex items-center">
                  <span className="text-brand-red mr-3">✓</span>
                  <span>Nutrition guidance</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link to="/contact" className="btn-primary text-lg px-10 py-5 bg-white text-brand-black hover:bg-brand-light">
                Book Your Free Trial
              </Link>
              <a 
                href={`tel:${gymInfo.location.phone}`}
                className="btn-secondary text-lg px-10 py-5 border-white text-white hover:bg-white hover:text-brand-black"
              >
                Call Now
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-2xl font-heading mb-2">{gymInfo.location.address}</div>
                <div className="text-gray-400 text-sm">Velachery, Chennai</div>
              </div>
              <div>
                <a href={`tel:${gymInfo.location.phone}`} className="text-2xl font-heading mb-2 hover:text-brand-red transition-colors block">
                  {gymInfo.location.phone}
                </a>
                <div className="text-gray-400 text-sm">Call or WhatsApp</div>
              </div>
              <div className="flex justify-center gap-4">
                <a 
                  href={gymInfo.location.socialMedia.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center bg-white/10 rounded-full hover:bg-brand-red transition-all"
                  aria-label="Instagram"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a 
                  href={gymInfo.location.socialMedia.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center bg-white/10 rounded-full hover:bg-brand-red transition-all"
                  aria-label="Facebook"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-8 mt-12 pt-8 border-t border-white/20">
              <div className="text-sm text-gray-400">✓ Certified Trainers</div>
              <div className="text-sm text-gray-400">✓ 24/7 Access</div>
              <div className="text-sm text-gray-400">✓ Premium Equipment</div>
              <div className="text-sm text-gray-400">✓ Holistic Wellness</div>
            </div>
            <div className="mt-8 flex justify-center">
              <ShareButtons text="Check out 369 Fitness Wellness – Chennai's premium gym & wellness studio" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const Stats = () => {
  const m = useCountUp(500, 1200);
  const t = useCountUp(15, 1200);
  const h = useCountUp(10000, 1200);
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-16">
      <div ref={m.ref} className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
        <div className="text-4xl md:text-5xl font-heading font-bold text-brand-red mb-2">{m.value}+</div>
        <div className="text-brand-light">Active Members</div>
      </div>
      <div ref={t.ref} className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
        <div className="text-4xl md:text-5xl font-heading font-bold text-brand-red mb-2">{t.value}+</div>
        <div className="text-brand-light">Expert Trainers</div>
      </div>
      <div ref={h.ref} className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
        <div className="text-4xl md:text-5xl font-heading font-bold text-brand-red mb-2">{h.value.toLocaleString()}+</div>
        <div className="text-brand-light">Hours Trained</div>
      </div>
    </div>
  );
};

export default Home;

