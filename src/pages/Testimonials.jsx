import { useState } from 'react';
import SEO from '../components/SEO';
import testimonials from '../data/testimonials.json';
import Breadcrumbs from '../components/Breadcrumbs';

const Testimonials = () => {
  
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="pt-24 pb-20">
      <SEO
        title="Testimonials"
        description="Real success stories from members across Chennai—see their transformations and experiences."
        path="/testimonials"
      />
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-brand-black to-gray-900 text-white py-16 dark-section">
        <div className="container mx-auto px-5 text-center">
          <h1 className="font-heading text-4xl md:text-5xl mb-4">
            Success <span className="text-brand-red">Stories</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Real transformations from real members of the 369 Fitness Wellness community
          </p>
        </div>
      </section>

      {/* Testimonials Slider */}
      <section className="py-20">
        <div className="container mx-auto px-5">
          <Breadcrumbs />
          <div className="max-w-4xl mx-auto">
            {/* Main Testimonial Display */}
            <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 mb-8 relative">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <img 
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-24 h-24 rounded-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="flex-grow">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <span key={i} className="text-brand-red text-xl">★</span>
                    ))}
                  </div>
                  <p className="text-lg text-gray-700 italic mb-6 leading-relaxed">
                    "{testimonials[currentIndex].quote}"
                  </p>
                  <div>
                    <h3 className="font-heading text-xl font-semibold">
                      {testimonials[currentIndex].name}
                    </h3>
                    <p className="text-gray-600">
                      {testimonials[currentIndex].role} - {testimonials[currentIndex].location}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center gap-4 mb-8">
              <button 
                onClick={prevTestimonial}
                className="w-12 h-12 flex items-center justify-center bg-brand-light rounded-full hover:bg-brand-red hover:text-white transition-all"
                aria-label="Previous testimonial"
              >
                ←
              </button>
              <button 
                onClick={nextTestimonial}
                className="w-12 h-12 flex items-center justify-center bg-brand-light rounded-full hover:bg-brand-red hover:text-white transition-all"
                aria-label="Next testimonial"
              >
                →
              </button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex ? 'bg-brand-red w-8' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* All Testimonials Grid */}
      <section className="py-20 bg-brand-light">
        <div className="container mx-auto px-5">
          <h2 className="font-heading text-4xl text-center mb-12">More Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className={`bg-white rounded-lg shadow-lg p-6 ${
                  index === currentIndex ? 'ring-2 ring-brand-red' : ''
                }`}
              >
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                    loading="lazy"
                  />
                  <div>
                    <h3 className="font-heading font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex items-center mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-brand-red">★</span>
                  ))}
                </div>
                <p className="text-gray-600 italic text-sm">"{testimonial.quote.substring(0, 120)}..."</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;

