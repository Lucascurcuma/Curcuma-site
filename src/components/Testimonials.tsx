import React from 'react';
import { testimonials } from '../data/testimonials';
import { Star, CheckCircle, Quote } from 'lucide-react';

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 px-4 bg-gradient-to-b from-white to-green-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            O Que Nossos Clientes Dizem
          </h2>
          <div className="flex items-center justify-center gap-2 mb-4">
            <Star className="w-8 h-8 text-yellow-400 fill-yellow-400" />
            <span className="text-2xl font-bold text-gray-900">4.9/5</span>
          </div>
          <p className="text-xl text-gray-600">
            Mais de 2.547 clientes satisfeitos em todo o Brasil
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-2xl shadow-lg p-6 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="flex items-start gap-4 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-4 border-green-100"
                />
                <div>
                  <div className="flex items-center gap-2">
                    <p className="font-semibold text-lg">{testimonial.name}</p>
                    {testimonial.verified && (
                      <CheckCircle size={16} className="text-green-600 fill-green-600" />
                    )}
                  </div>
                  <p className="text-gray-500 text-sm">{testimonial.location}</p>
                  <div className="flex gap-1 mt-1">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>

              <div className="relative">
                <Quote className="absolute -top-2 -left-2 w-8 h-8 text-green-200 transform -rotate-12" />
                <p className="text-gray-700 mb-4 pl-6">{testimonial.comment}</p>
              </div>

              <div className="border-t border-gray-100 pt-4 mt-4">
                <div className="flex items-center justify-between text-sm">
                  <p className="text-green-600 font-medium">{testimonial.product}</p>
                  <p className="text-gray-500">{testimonial.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a 
            href="#products" 
            className="inline-flex items-center gap-2 bg-green-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-green-700 transform transition-all duration-300 hover:scale-105"
          >
            Ver Produtos em Destaque →
          </a>
        </div>
      </div>
    </section>
  );
};