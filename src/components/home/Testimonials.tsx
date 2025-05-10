import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonials } from '../../data/mirrors';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="reviews" className="py-16 md:py-24" style={{ backgroundColor: '#f5f2ed' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl mb-4 font-bold" 
            style={{ fontFamily: 'Cormorant Garamond' }}
          >
            Wat Onze Klanten Zeggen
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto px-4">
            Ontdek waarom klanten door heel de Benelux kiezen voor onze maatwerk spiegels.
          </p>
        </div>

        <div className="max-w-4xl mx-auto flex items-center gap-4 md:gap-8 px-4">
          <button 
            onClick={prevTestimonial}
            className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors flex-shrink-0"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          <div className="flex-1">
            <div className="bg-white rounded-lg p-6 md:p-12 shadow-sm">
              <div className="flex mb-6 md:mb-8 justify-center md:justify-start">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={20} 
                    className="text-amber-400 fill-amber-400"
                  />
                ))}
              </div>
              <p className="text-gray-700 text-lg md:text-xl italic mb-8 md:mb-12 leading-relaxed text-center md:text-left">
                "{currentTestimonial.text}"
              </p>
              <div className="flex items-center justify-center md:justify-start">
                <div 
                  className="w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center text-xl md:text-2xl"
                  style={{ backgroundColor: '#e5e1da' }}
                >
                  {currentTestimonial.name.charAt(0)}
                </div>
                <div className="ml-4 md:ml-6">
                  <p className="text-lg md:text-xl mb-1" style={{ fontFamily: 'Cormorant Garamond' }}>
                    {currentTestimonial.name}
                  </p>
                  <p className="text-gray-500 text-sm md:text-base">Verified Customer</p>
                </div>
              </div>
            </div>
          </div>

          <button 
            onClick={nextTestimonial}
            className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors flex-shrink-0"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>
        </div>

        <div className="mt-8 md:mt-12 text-center">
          <div 
            className="inline-block px-6 md:px-8 py-3 md:py-4 rounded text-sm md:text-base"
            style={{ backgroundColor: '#1a1a1a', color: '#ffffff' }}
          >
            ★ 5.0 / 5 gemiddelde beoordeling | 100+ tevreden klanten
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;