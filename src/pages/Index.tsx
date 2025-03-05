
import React, { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Disclaimer from "@/components/Disclaimer";
import Footer from "@/components/Footer";
import { ButtonCustom } from "@/components/ui/button-custom";
import { Heart } from "lucide-react";

const Index = () => {
  // Smooth scroll to section if URL contains hash
  useEffect(() => {
    console.log("Index page mounted");
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        console.log(`Scrolling to element with id: ${id}`);
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  // Log rendering for debugging
  useEffect(() => {
    console.log("Rendering main content");
  }, []);

  return (
    <div className="min-h-screen bg-rustic-dark text-white overflow-hidden">
      <Header />
      
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Testimonials />
        
        {/* Call to Action Section */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-rustic-blue to-rustic-dark opacity-90"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <Heart className="h-12 w-12 text-rustic-accent mx-auto mb-6" fill="#E57C23" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
                Ready to Transform Your Relationship?
              </h2>
              <p className="text-lg md:text-xl text-white/80 mb-8">
                Take the first step toward a stronger, more connected partnership. 
                Start your journey with Marriage Mender GPT today.
              </p>
              <ButtonCustom
                variant="accent"
                size="lg"
                className="animate-pulse"
                onClick={() => window.open("https://chatgpt.com/g/g-0MogI8wIQ-marriage-mender-gpt", "_blank")}
              >
                <span>Try Marriage Mender GPT</span>
                <Heart className="ml-2 h-5 w-5" />
              </ButtonCustom>
            </div>
          </div>
        </section>
        
        <FAQ />
        <Disclaimer />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
