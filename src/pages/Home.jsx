import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import gym from '../data/gym.json';
import programs from '../data/programs.json';
import facility from '../data/facility.json';
import { useCountUp } from '../hooks/useCountUp';
import Reveal from '../components/Reveal';

const Home = () => {
  const gymInfo = gym;

  return (
    <div className="pt-20">
      <SEO
        title="Premium Gym & Wellness in Chennai"
        description="Join Chennai's elite fitness & wellness community. Expert trainers, holistic wellness, programs, and premium facilities. Book your free trial."
        path="/"
      />
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
              <Reveal className="relative inline-block mb-4 pt-8">
                <span className="absolute top-0 right-0 bg-brand-red text-white px-4 py-1 rounded-full text-sm font-bold animate-pulse">
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
              {facility.features.slice(0, 4).map((feature, index) => (
                <div key={index} className="relative h-64 rounded-lg overflow-hidden group">
                  <img 
                    src={feature.image}
                    alt={feature.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-black/70 to-transparent"></div>
                  <h4 className="absolute bottom-3 left-3 right-3 font-heading text-white text-lg">
                    {feature.name}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-20 pb-8 md:pb-10 bg-gradient-to-br from-brand-black via-brand-black to-gray-900 text-white relative overflow-hidden dark-section">
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

            <div className="flex flex-wrap justify-center gap-8 mt-12 pt-8 border-t border-white/20">
              <div className="text-sm text-gray-400">✓ Certified Trainers</div>
              <div className="text-sm text-gray-400">✓ 24/7 Access</div>
              <div className="text-sm text-gray-400">✓ Premium Equipment</div>
              <div className="text-sm text-gray-400">✓ Holistic Wellness</div>
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

