import React, { useEffect, useRef } from "react";
import { ButtonCustom } from "./ui/button-custom";
import { Heart, Sparkles, Users } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-bg section-padding pt-32">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-rustic-accent/20 rounded-full filter blur-3xl animate-float" style={{ animationDelay: "0s" }}></div>
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-blue-500/10 rounded-full filter blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
      </div>
      
      <div className="container mx-auto z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 space-y-6 animate-fade-in-slow">
            <div className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-4">
              <div className="flex items-center space-x-2">
                <Sparkles className="h-4 w-4 text-rustic-accent" />
                <span className="text-sm font-medium">AI-Powered Relationship Mediator</span>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight gradient-text">
              Restore Harmony in Your Relationship
            </h1>
            
            <p className="text-lg md:text-xl text-white/80 max-w-xl">
              Meet Phazz, your neutral, AI-powered marriage mediator designed to help couples resolve conflicts and rebuild connection.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <ButtonCustom
                variant="accent"
                size="lg"
                className="group"
                onClick={() => window.open("https://chatgpt.com/g/g-0MogI8wIQ-marriage-mender-gpt", "_blank")}
              >
                <span>Try Marriage Mender GPT</span>
                <Heart className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              </ButtonCustom>
              
              <ButtonCustom
                variant="outline"
                size="lg"
                onClick={() => document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" })}
              >
                <span>Learn How It Works</span>
              </ButtonCustom>
            </div>
            
            <div className="flex items-center space-x-6 pt-6">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white">
                  <Users className="h-5 w-5" />
                </div>
                <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center text-white">
                  <Heart className="h-5 w-5" />
                </div>
                <div className="w-10 h-10 rounded-full bg-rustic-accent flex items-center justify-center text-white">
                  <Sparkles className="h-5 w-5" />
                </div>
              </div>
              <p className="text-sm text-white/70">
                <span className="font-bold text-white">1,000+</span> couples already using Marriage Mender
              </p>
            </div>
          </div>
          
          <div className="lg:w-1/2 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="video-container glass-morph">
              <iframe
                src="https://www.youtube.com/embed/4HPOthRjWR4?autoplay=1&mute=0&controls=1&origin=https://lovable.dev&playsinline=1&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&enablejsapi=1&widgetid=1&vq=hd1080"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Marriage Mender GPT Introduction"
                className="w-full h-full rounded-xl"
                style={{ border: 'none' }}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
