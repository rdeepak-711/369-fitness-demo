import { Link } from 'react-router-dom';
import memberships from '../data/memberships.json';
import Breadcrumbs from '../components/Breadcrumbs';

const Membership = () => {
  

  return (
    <div className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-brand-black to-gray-900 text-white py-16 dark-section">
        <div className="container mx-auto px-5 text-center">
          <h1 className="font-heading text-4xl md:text-5xl mb-4">
            Membership <span className="text-brand-red">Plans</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Choose the plan that works best for you. All plans include a free trial.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="container mx-auto px-5">
          <Breadcrumbs />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {memberships.map((membership) => (
              <div 
                key={membership.id}
                className={`bg-white rounded-lg shadow-xl p-8 relative transition-all duration-300 hover:-translate-y-2 ${
                  membership.popular ? 'border-4 border-brand-red scale-105' : 'border border-gray-200'
                }`}
              >
                {membership.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-brand-red text-white px-6 py-1 rounded-full text-sm font-bold">
                    Most Popular
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="font-heading text-2xl mb-4">{membership.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-heading font-bold text-brand-black">
                      ₹{membership.price.toLocaleString()}
                    </span>
                    {membership.originalPrice && (
                      <div className="text-gray-500 line-through text-lg">
                        ₹{membership.originalPrice.toLocaleString()}
                      </div>
                    )}
                    <div className="text-gray-600 text-sm mt-1">/{membership.period}</div>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {membership.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-brand-red text-xl mr-3 flex-shrink-0">✓</span>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="space-y-3">
                  <Link 
                    to="/contact" 
                    className={`btn-primary w-full text-center block ${
                      membership.popular ? 'bg-brand-red' : ''
                    }`}
                  >
                    Start Free Trial
                  </Link>
                  <Link 
                    to="/contact" 
                    className="btn-secondary w-full text-center block"
                  >
                    Schedule a Tour
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Membership;

