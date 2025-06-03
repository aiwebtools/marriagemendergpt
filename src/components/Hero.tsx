
import React, { useEffect, useRef } from "react";
import { ButtonCustom } from "./ui/button-custom";
import { Heart, Sparkles, Users, Star } from "lucide-react";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create floating particles
    const createParticle = () => {
      if (!heroRef.current) return;
      
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.width = Math.random() * 4 + 2 + 'px';
      particle.style.height = particle.style.width;
      particle.style.animationDuration = (Math.random() * 3 + 5) + 's';
      particle.style.animationDelay = Math.random() * 2 + 's';
      
      heroRef.current.appendChild(particle);
      
      setTimeout(() => {
        if (heroRef.current && heroRef.current.contains(particle)) {
          heroRef.current.removeChild(particle);
        }
      }, 8000);
    };

    const interval = setInterval(createParticle, 300);
    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden section-padding pt-16">
      {/* Divine Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-rustic-accent/30 to-yellow-400/30 rounded-full filter blur-3xl animate-holy-float" style={{ animationDelay: "0s" }}></div>
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full filter blur-3xl animate-holy-float" style={{ animationDelay: "2s" }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-white/10 to-rustic-accent/20 rounded-full filter blur-2xl animate-divine-pulse"></div>
        
        {/* Additional divine orbs */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-r from-yellow-400/40 to-orange-400/40 rounded-full filter blur-2xl animate-holy-float" style={{ animationDelay: "1s" }}></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-gradient-to-r from-purple-400/30 to-pink-400/30 rounded-full filter blur-3xl animate-holy-float" style={{ animationDelay: "3s" }}></div>
      </div>

      {/* Floating stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
        <Star className="absolute top-32 left-32 h-6 w-6 text-yellow-400 animate-divine-pulse" style={{ animationDelay: "0s" }} />
        <Star className="absolute top-48 right-48 h-4 w-4 text-rustic-accent animate-divine-pulse" style={{ animationDelay: "1s" }} />
        <Star className="absolute bottom-48 left-48 h-5 w-5 text-blue-400 animate-divine-pulse" style={{ animationDelay: "2s" }} />
        <Star className="absolute bottom-32 right-32 h-7 w-7 text-purple-400 animate-divine-pulse" style={{ animationDelay: "3s" }} />
        <Sparkles className="absolute top-40 left-1/4 h-5 w-5 text-yellow-300 animate-divine-pulse" style={{ animationDelay: "0.5s" }} />
        <Sparkles className="absolute bottom-40 right-1/4 h-4 w-4 text-orange-400 animate-divine-pulse" style={{ animationDelay: "2.5s" }} />
      </div>
      
      <div className="container mx-auto z-20 relative">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          <div className="lg:w-full space-y-8 animate-fade-in-slow text-center lg:text-left">
            <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-white/10 to-rustic-accent/10 border border-rustic-accent/30 mb-6 backdrop-blur-lg shadow-lg divine-glow">
              <div className="flex items-center space-x-3">
                <Sparkles className="h-5 w-5 text-rustic-accent animate-divine-pulse" />
                <span className="text-sm font-semibold gradient-text">AI Web Tools | Professional AI-Powered Relationship Mediator</span>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight gradient-text divine-text">
              Restore Harmony in Your Relationship
            </h1>
            
            <h2 className="text-2xl md:text-3xl font-semibold text-transparent bg-gradient-to-r from-white via-rustic-accent to-yellow-400 bg-clip-text mb-4">
              Marriage Mender GPT by AI Web Tools - #1 AI Tools for Couples
            </h2>
            
            <p className="text-xl md:text-2xl text-white/90 max-w-xl leading-relaxed backdrop-blur-sm bg-white/5 p-6 rounded-2xl border border-white/10 shadow-xl">
              Meet Phazz, your neutral, AI-powered marriage mediator designed to help couples resolve conflicts and rebuild connection using advanced AI web tools technology.
            </p>
            
            <div className="flex flex-wrap gap-6 pt-6">
              <ButtonCustom
                variant="accent"
                size="lg"
                className="group relative overflow-hidden px-10 py-4 text-lg font-bold transform hover:scale-110 transition-all duration-500 divine-glow"
                onClick={() => window.open("https://chatgpt.com/g/g-0MogI8wIQ-marriage-mender-gpt", "_blank")}
              >
                <span className="relative z-10">Try Marriage Mender GPT</span>
                <Heart className="ml-3 h-6 w-6 group-hover:animate-divine-pulse transition-transform relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full"></div>
              </ButtonCustom>
              
              <ButtonCustom
                variant="outline"
                size="lg"
                className="px-8 py-4 text-lg backdrop-blur-lg bg-white/5 border-2 border-white/20 hover:border-rustic-accent/50 hover:bg-white/10 transform hover:scale-105 transition-all duration-300"
                onClick={() => document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" })}
              >
                <span>Learn How AI Tools Work</span>
              </ButtonCustom>
            </div>

            {/* Video Section - Positioned after the buttons */}
            <div className="w-full max-w-4xl mx-auto mb-8 z-30 relative">
              <div className="relative w-full">
                <div className="relative w-full bg-black rounded-2xl overflow-hidden shadow-2xl border-2 border-white/30" style={{ aspectRatio: '16/9' }}>
                  <iframe
                    src="https://www.youtube.com/embed/3HCv5_QldrU?controls=1&rel=0&modestbranding=1&playsinline=1&autoplay=0&mute=0"
                    title="Marriage Mender GPT Introduction - AI Web Tools for Relationship Healing"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                    style={{ 
                      border: 'none',
                      display: 'block'
                    }}
                  />
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-8 pt-8">
              <div className="flex -space-x-3">
                <div className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center text-white shadow-lg divine-glow transform hover:scale-110 transition-transform">
                  <Users className="h-6 w-6" />
                </div>
                <div className="w-14 h-14 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center text-white shadow-lg divine-glow transform hover:scale-110 transition-transform">
                  <Heart className="h-6 w-6" />
                </div>
                <div className="w-14 h-14 rounded-full bg-gradient-to-r from-rustic-accent to-yellow-500 flex items-center justify-center text-white shadow-lg divine-glow transform hover:scale-110 transition-transform">
                  <Sparkles className="h-6 w-6" />
                </div>
              </div>
              <p className="text-base text-white/80 backdrop-blur-sm bg-white/5 p-4 rounded-xl border border-white/10">
                <span className="font-bold text-transparent bg-gradient-to-r from-white to-rustic-accent bg-clip-text text-xl">1,000+</span><br />
                <span className="text-sm">couples already using our AI tools</span>
              </p>
            </div>
            
            {/* SEO Keywords Section */}
            <div className="hidden">
              <h3>AI Web Tools for Relationship Success</h3>
              <p>AIWEBTOOLS.AI provides cutting-edge artificial intelligence tools for couples therapy, marriage counseling, and relationship mediation. Our AI tools help resolve conflicts and improve communication.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Divine particles container */}
      <div className="divine-particles absolute inset-0 z-0"></div>
    </section>
  );
};

export default Hero;
