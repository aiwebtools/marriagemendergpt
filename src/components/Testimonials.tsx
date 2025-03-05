
import React, { useState, useEffect } from "react";
import { Heart, ArrowLeft, ArrowRight, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Marriage Mender GPT helped us communicate in ways we never could before. It was like having a professional counselor available 24/7.",
      author: "Sarah & Michael",
      location: "Denver, CO",
      rating: 5
    },
    {
      quote: "After 15 years of marriage, we hit a rough patch. Phazz helped us remember why we fell in love and gave us practical tools to rebuild trust.",
      author: "David & Jennifer",
      location: "Austin, TX",
      rating: 5
    },
    {
      quote: "The neutral perspective was exactly what we needed. Instead of taking sides, Phazz helped us both feel heard and understood.",
      author: "Robert & Lisa",
      location: "Seattle, WA",
      rating: 5
    },
    {
      quote: "I was skeptical about AI counseling, but the guidance we received was thoughtful and personalized. It changed our relationship for the better.",
      author: "James & Emily",
      location: "Chicago, IL",
      rating: 4
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  // Auto-advance testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 8000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <section className="relative section-padding bg-rustic-darker overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-40 bg-gradient-radial from-rustic-accent/5 to-transparent"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <div className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-4">
            <span className="text-sm font-medium text-white">Success Stories</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
            Couples Sharing Their Experience
          </h2>
          <p className="text-lg text-white/70">
            Real stories from real couples who found their way back to harmony with Marriage Mender GPT.
          </p>
        </div>

        <div className="max-w-4xl mx-auto glass-morph rounded-2xl p-8 md:p-12 relative">
          <div className="absolute -top-6 -left-6">
            <Quote className="h-12 w-12 text-rustic-accent opacity-50" />
          </div>
          
          <div key={currentIndex} className={`${isAnimating ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`}>
            <p className="text-xl md:text-2xl text-white mb-8 italic">
              "{testimonials[currentIndex].quote}"
            </p>
            
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold text-white">{testimonials[currentIndex].author}</p>
                <p className="text-white/60 text-sm">{testimonials[currentIndex].location}</p>
              </div>
              
              <div className="flex">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Heart key={i} className="h-5 w-5 text-rustic-accent" fill="#E57C23" />
                ))}
                {[...Array(5 - testimonials[currentIndex].rating)].map((_, i) => (
                  <Heart key={i + testimonials[currentIndex].rating} className="h-5 w-5 text-white/20" />
                ))}
              </div>
            </div>
          </div>
          
          <div className="absolute top-1/2 -left-5 transform -translate-y-1/2">
            <button 
              onClick={handlePrev}
              className="w-10 h-10 rounded-full bg-rustic-muted flex items-center justify-center text-white hover:bg-rustic-accent transition-colors"
              aria-label="Previous testimonial"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
          </div>
          
          <div className="absolute top-1/2 -right-5 transform -translate-y-1/2">
            <button 
              onClick={handleNext}
              className="w-10 h-10 rounded-full bg-rustic-muted flex items-center justify-center text-white hover:bg-rustic-accent transition-colors"
              aria-label="Next testimonial"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
        
        <div className="flex justify-center mt-8">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              className={`w-3 h-3 mx-1 rounded-full transition-all ${
                idx === currentIndex ? "bg-rustic-accent w-6" : "bg-white/30"
              }`}
              onClick={() => {
                setCurrentIndex(idx);
                setIsAnimating(true);
                setTimeout(() => setIsAnimating(false), 500);
              }}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
