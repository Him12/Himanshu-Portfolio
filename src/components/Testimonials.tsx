import { useState, useEffect } from "react";
import { Star, Quote } from "lucide-react";
import { TestimonialType } from "../types/testimonial";

export function Testimonials() {
  const [testimonials, setTestimonials] = useState<TestimonialType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    try {
      const response = await fetch("/testimonials.json");
      const data = await response.json();
      setTestimonials(data || []);
    } catch (error) {
      console.error("Error loading testimonials:", error);
    } finally {
      setLoading(false);
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={16}
        className={
          i < rating
            ? "fill-yellow-400 text-yellow-400"
            : "text-gray-300 dark:text-gray-600"
        }
      />
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            Testimonials
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            What colleagues and leaders say about working with me
          </p>
        </div>

        {/* Loading State */}
        {loading ? (
          <div className="text-center py-20">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-blue-600 border-t-transparent"></div>
          </div>
        ) : testimonials.length === 0 ? (
          <div className="text-center py-20">
            <Quote className="mx-auto mb-4 text-gray-400" size={48} />
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Testimonials coming soon!
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >

                {/* Category + Period */}
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs font-semibold px-3 py-1 bg-blue-600 text-white rounded-full">
                    {testimonial.category || "ACE Review"}
                  </span>
                  {testimonial.period && (
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {testimonial.period}
                    </span>
                  )}
                </div>

                {/* Header */}
                <div className="flex items-center justify-between mb-3">
                  <Quote className="text-blue-600 dark:text-cyan-400" size={28} />
                  <div className="flex space-x-1">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>

                {/* Content */}
                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>

                {/* Footer */}
                <div className="flex items-center space-x-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                  {testimonial.photo_url ? (
                    <img
                      src={testimonial.photo_url}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-blue-600 dark:border-cyan-400"
                    />
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center text-white font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </div>
                  )}

                  <div>
                    <h4 className="font-bold text-gray-800 dark:text-gray-200">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {testimonial.role}
                      {testimonial.company ? ` · ${testimonial.company}` : ""}
                    </p>
                  </div>
                </div>

              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
