import about from '../data/about.json';
import trainers from '../data/trainers.json';
import facility from '../data/facility.json';
import Breadcrumbs from '../components/Breadcrumbs';
import Reveal from '../components/Reveal';
import SEO from '../components/SEO';

const About = () => {
  

  return (
    <div className="pt-24 pb-20">
      <SEO
        title="About Us"
        description="Empowering Chennai to achieve peak fitness through expert trainers, premium facilities, and holistic wellness."
        path="/about"
      />
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-brand-black to-gray-900 text-white py-16 dark-section">
        <div className="container mx-auto px-5 text-center">
          <h1 className="font-heading text-4xl md:text-5xl mb-4">
            About <span className="text-brand-red">369 Fitness Wellness</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Empowering individuals to achieve their best selves through expert guidance and holistic wellness
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-5">
          <Breadcrumbs />
          <Reveal className="max-w-4xl mx-auto">
            <h2 className="font-heading text-4xl mb-6 text-center">Our Story</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">{about.story}</p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">{about.mission}</p>
            
            <div className="mt-12 space-y-6">
              {about.values.map((value, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="flex flex-col items-center">
                    <span className="inline-block w-10 h-10 rounded-full bg-brand-red text-white flex items-center justify-center font-heading text-lg">✨</span>
                  </div>
                  <h3 className="font-heading text-xl text-brand-black">{value}</h3>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Trainers Section */}
      <section className="py-20 bg-brand-light">
        <div className="container mx-auto px-5">
          <h2 className="font-heading text-4xl md:text-5xl text-center mb-16">
            Meet Our <span className="text-brand-red">Expert Team</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trainers.map((trainer) => {
              return (
              <div key={trainer.id} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={trainer.image}
                    alt={trainer.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-xl mb-1">{trainer.name}</h3>
                  <p className="text-brand-red font-semibold text-sm mb-2">{trainer.role}</p>
                  <p className="text-gray-600 text-xs mb-3">{trainer.credentials}</p>
                  <p className="text-gray-600 text-sm mb-4">{trainer.bio}</p>
                  <div className="flex flex-wrap gap-2">
                    {trainer.specialties.map((spec, idx) => (
                      <span key={idx} className="text-xs bg-brand-light px-2 py-1 rounded">
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );})}
          </div>
        </div>
      </section>

      {/* Facility Section */}
      <section className="py-20">
        <div className="container mx-auto px-5">
          <h2 className="font-heading text-4xl md:text-5xl text-center mb-4">
            Our <span className="text-brand-red">Facility</span>
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            {facility.description}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {facility.features.map((feature, index) => {
              return (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={feature.image}
                    alt={feature.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-2xl mb-3">{feature.name}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            );})}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

