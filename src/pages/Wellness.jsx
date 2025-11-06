import { Link } from 'react-router-dom';
import wellnessServices from '../data/wellness.json';
import Breadcrumbs from '../components/Breadcrumbs';
import SEO from '../components/SEO';

const Wellness = () => {
  

  return (
    <div className="pt-24 pb-20">
      <SEO
        title="Wellness Corner"
        description="Meditation, recovery, diet consults, stress management—holistic wellness beyond typical gyms."
        path="/wellness"
      />
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-brand-black to-gray-900 text-white py-16 dark-section">
        <div className="container mx-auto px-5 text-center">
          <h1 className="font-heading text-4xl md:text-5xl mb-4">
            Wellness <span className="text-brand-red">Corner</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Beyond fitness. Nurture your mind, body, and soul with our holistic wellness offerings.
          </p>
        </div>
      </section>

      {/* Why Mind & Body Matter */}
      <section className="py-20">
        <div className="container mx-auto px-5">
          <Breadcrumbs />
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="font-heading text-4xl mb-6">Why Mind & Body Matter</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              True transformation happens when you combine physical strength with mental resilience. 
              At 369 Fitness Wellness, we believe in a holistic approach that addresses not just your 
              physical fitness, but your overall well-being. Our wellness services help you manage stress, 
              improve recovery, optimize nutrition, and find inner balance.
            </p>
          </div>
        </div>
      </section>

      {/* Wellness Services */}
      <section className="py-20 bg-brand-light">
        <div className="container mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {wellnessServices.map((service) => {
              return (
              <div 
                key={service.id}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-8">
                  <h3 className="font-heading text-2xl mb-4">{service.name}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">Key Benefits:</h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <span className="text-brand-red mr-2">✓</span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link to="/contact" className="btn-primary w-full text-center block">
                    Book Session
                  </Link>
                </div>
              </div>
            );})}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Wellness;

