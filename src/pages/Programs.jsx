import { Link } from 'react-router-dom';
import programs from '../data/programs.json';

const Programs = () => {
  

  return (
    <div className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-brand-black to-gray-900 text-white py-16">
        <div className="container mx-auto px-5 text-center">
          <h1 className="font-heading text-4xl md:text-5xl mb-4">
            Our <span className="text-brand-red">Programs</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Comprehensive fitness and wellness programs designed to help you achieve your goals
          </p>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20">
        <div className="container mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program) => (
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
                  <p className="text-gray-600 mb-6">{program.description}</p>
                  <ul className="space-y-2 mb-6">
                    {program.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <span className="text-brand-red mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex gap-3">
                    <Link to="/membership" className="btn-primary flex-1 text-center">
                      Join Now
                    </Link>
                    <Link to="/contact" className="btn-secondary flex-1 text-center">
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programs;

