import gym from '../data/gym.json';
import SEO from '../components/SEO';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Toaster, toast } from 'react-hot-toast';
import { useState } from 'react';
import Breadcrumbs from '../components/Breadcrumbs';

const Contact = () => {
  const gymInfo = gym;

  const schema = z.object({
    name: z.string().min(2, 'Please enter your full name'),
    email: z.string().email('Enter a valid email address'),
    phone: z
      .string()
      .min(8, 'Enter a valid phone number')
      .regex(/^[0-9+\-()\s]*$/, 'Only digits and + - ( ) allowed'),
    preferredTime: z.string().optional(),
    message: z.string().max(1000).optional(),
  });

  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm({
    resolver: zodResolver(schema),
    defaultValues: { name: '', email: '', phone: '+91 ', preferredTime: '', message: '' },
  });

  const [showThanks, setShowThanks] = useState(false);

  const onSubmit = async (values) => {
    try {
      const res = await axios.post('/api/bookings', values);
      if (res.status === 201) {
        setShowThanks(true);
        reset();
      } else {
        toast.error('Something went wrong. Please try again.');
      }
    } catch (err) {
      toast.error(err?.response?.data?.message || 'Failed to submit. Please try again.');
    }
  };

  return (
    <div className="pt-24 pb-20">
      <SEO
        title="Contact & Location"
        description="Book your free trial. Call/WhatsApp, find our Velachery/Madipakkam location, and get directions."
        path="/contact"
      />
      <Toaster position="top-right" />
      {showThanks && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-4">
          <div className="bg-white rounded-lg shadow-2xl max-w-md w-full p-8 text-center">
            <h3 className="font-heading text-2xl mb-3 text-brand-red">Thank you!</h3>
            <p className="text-gray-700 mb-6">Your free trial request has been received. Our team will contact you shortly.</p>
            <button className="btn-primary w-full" onClick={() => setShowThanks(false)}>Close</button>
          </div>
        </div>
      )}
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-brand-black to-gray-900 text-white py-16 dark-section">
        <div className="container mx-auto px-5 text-center">
          <h1 className="font-heading text-4xl md:text-5xl mb-4">
            Book Your <span className="text-brand-red">Free Trial</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Experience world-class fitness and wellness. No credit card required.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-5 mt-16">
        <Breadcrumbs />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-xl p-8">
            <h2 className="font-heading text-3xl mb-6">Get Started Today</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  {...register('name')}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent"
                  placeholder="Enter your name"
                />
                {errors.name && (<p className="text-sm text-red-600 mt-1">{errors.name.message}</p>)}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  {...register('email')}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent"
                  placeholder="your.email@example.com"
                />
                {errors.email && (<p className="text-sm text-red-600 mt-1">{errors.email.message}</p>)}
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold mb-2">
                  Phone / WhatsApp *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  {...register('phone')}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent"
                  placeholder="+91 98765 43210"
                />
                {errors.phone && (<p className="text-sm text-red-600 mt-1">{errors.phone.message}</p>)}
                <p className="text-xs text-gray-500 mt-1">Auto-prefilled with +91. You can edit if needed.</p>
              </div>

              <div>
                <label htmlFor="preferredTime" className="block text-sm font-semibold mb-2">
                  Preferred Time for Trial
                </label>
                <select
                  id="preferredTime"
                  name="preferredTime"
                  {...register('preferredTime')}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent"
                >
                  <option value="">Select a time</option>
                  <option value="morning">Morning (6 AM - 10 AM)</option>
                  <option value="afternoon">Afternoon (10 AM - 2 PM)</option>
                  <option value="evening">Evening (2 PM - 6 PM)</option>
                  <option value="night">Night (6 PM - 10 PM)</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-2">
                  Message (optional)
                </label>
                <textarea
                  id="message"
                  rows="4"
                  {...register('message')}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent"
                  placeholder="Tell us your goals or preferred date/time"
                />
                {errors.message && (<p className="text-sm text-red-600 mt-1">{errors.message.message}</p>)}
              </div>

              <button type="submit" disabled={isSubmitting} className="btn-primary w-full py-4 text-lg disabled:opacity-60">
                Book Free Trial
              </button>

              <p className="text-sm text-gray-500 text-center">
                * No credit card required. We'll contact you within 24 hours.
              </p>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-xl p-8">
              <h2 className="font-heading text-3xl mb-6">Visit Us</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-brand-red text-2xl mr-4">📍</span>
                  <div>
                    <h3 className="font-semibold mb-1">Address</h3>
                    <p className="text-gray-600">{gymInfo.location.address}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <span className="text-brand-red text-2xl mr-4">📞</span>
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <a href={`tel:${gymInfo.location.phone}`} className="text-brand-red hover:underline">
                      {gymInfo.location.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <span className="text-brand-red text-2xl mr-4">💬</span>
                  <div>
                    <h3 className="font-semibold mb-1">WhatsApp</h3>
                    <a 
                      href={`https://wa.me/${gymInfo.location.phone.replace(/\D/g, '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brand-red hover:underline"
                    >
                      {gymInfo.location.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <span className="text-brand-red text-2xl mr-4">✉️</span>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <a href={`mailto:${gymInfo.location.email}`} className="text-brand-red hover:underline">
                      {gymInfo.location.email}
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <h3 className="font-semibold mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <a 
                    href={gymInfo.location.socialMedia.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center bg-brand-light rounded-full hover:bg-brand-red hover:text-white transition-all"
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
                    className="w-12 h-12 flex items-center justify-center bg-brand-light rounded-full hover:bg-brand-red hover:text-white transition-all"
                    aria-label="Facebook"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.5!2d80.2!3d12.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525ddd6f6e3257%3A0xf2a3579581540aa9!2s369%20fitness!5e0!3m2!1sen!2sin!4v1690000000000!5m2!1sen!2sin"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="369 Fitness Wellness Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

