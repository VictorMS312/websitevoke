import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { testimonials } from '../data/mock';
import { Button } from './ui/button';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            O que nossos <span className="text-orange-500">clientes</span> dizem
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A satisfação dos nossos clientes é nossa maior conquista
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main Testimonial */}
          <div className="relative bg-gray-900 rounded-xl p-8 md:p-12 mb-8">
            <div className="absolute top-6 left-6">
              <Quote className="w-12 h-12 text-orange-500/30" />
            </div>
            
            <div className="relative z-10">
              {/* Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-orange-500 fill-current" />
                ))}
              </div>

              {/* Testimonial Content */}
              <blockquote className="text-xl md:text-2xl text-gray-100 text-center leading-relaxed mb-8 font-light italic">
                "{testimonials[currentIndex].content}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center justify-center space-x-4">
                <img
                  src={testimonials[currentIndex].avatar}
                  alt={testimonials[currentIndex].name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-orange-500"
                />
                <div className="text-center">
                  <div className="text-white font-semibold text-lg">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-orange-500 font-medium">
                    {testimonials[currentIndex].role}
                  </div>
                  <div className="text-gray-400 text-sm">
                    {testimonials[currentIndex].company}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center space-x-4">
            <Button
              onClick={prevTestimonial}
              variant="outline"
              size="icon"
              className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-300"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            {/* Dots */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-orange-500 scale-125'
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>

            <Button
              onClick={nextTestimonial}
              variant="outline"
              size="icon"
              className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-300"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          {/* All Testimonials Grid (Mobile View) */}
          <div className="grid grid-cols-1 md:hidden gap-6 mt-12">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`bg-gray-900 rounded-xl p-6 transition-all duration-300 ${
                  index === currentIndex ? 'ring-2 ring-orange-500' : ''
                }`}
              >
                <div className="flex items-center space-x-4 mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="text-white font-semibold">{testimonial.name}</div>
                    <div className="text-orange-500 text-sm">{testimonial.role}</div>
                    <div className="text-gray-400 text-xs">{testimonial.company}</div>
                  </div>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed italic">
                  "{testimonial.content}"
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-gray-300 mb-8 text-lg">
            Quer ser nosso próximo caso de sucesso?
          </p>
          <Button
            onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            Fale Conosco
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;