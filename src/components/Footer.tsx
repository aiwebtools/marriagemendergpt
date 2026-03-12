
import React from "react";
import { Heart, Mail, Phone, Sparkles } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-t from-black via-rustic-darker to-rustic-dark border-t border-rustic-accent/30 py-12 overflow-hidden">
      {/* Divine background effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-rustic-accent/40 to-yellow-400/40 rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-400/30 to-purple-500/30 rounded-full filter blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-white/10 to-rustic-accent/20 rounded-full filter blur-2xl animate-pulse"></div>
      </div>
      
      {/* Animated sparkles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Sparkles className="absolute top-20 left-20 h-4 w-4 text-rustic-accent animate-pulse" style={{ animationDelay: "0s" }} />
        <Sparkles className="absolute top-32 right-32 h-3 w-3 text-yellow-400 animate-pulse" style={{ animationDelay: "1s" }} />
        <Sparkles className="absolute bottom-40 left-40 h-5 w-5 text-blue-400 animate-pulse" style={{ animationDelay: "2s" }} />
        <Sparkles className="absolute bottom-20 right-20 h-4 w-4 text-purple-400 animate-pulse" style={{ animationDelay: "3s" }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col group">
            <div className="flex items-center transform group-hover:scale-105 transition-transform duration-300">
              <Heart className="h-6 w-6 text-rustic-accent mr-3 animate-pulse" />
              <h3 className="font-bold text-2xl text-transparent bg-gradient-to-r from-white via-rustic-accent to-yellow-400 bg-clip-text">Marriage Mender GPT</h3>
            </div>
            <p className="text-white/80 mt-4 backdrop-blur-sm bg-white/5 p-4 rounded-lg border border-white/10 shadow-lg">
              Your virtual marriage mediator, helping couples find common ground and restore harmony.
            </p>
            <div className="mt-4 p-3 rounded-lg bg-gradient-to-r from-rustic-accent/10 to-yellow-400/10 border border-rustic-accent/20">
              <p className="text-xs text-white/70 italic">
                For informational, educational, and research purposes only
              </p>
            </div>
          </div>

          <div className="flex flex-col">
            <h3 className="font-bold text-xl text-transparent bg-gradient-to-r from-white to-rustic-accent bg-clip-text mb-6">Quick Links</h3>
            <div className="grid grid-cols-1 gap-4">
              <a
                href="https://chatgpt.com/g/g-0MogI8wIQ-marriage-mender-gpt"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden text-white/80 hover:text-white transition-all duration-300 p-3 rounded-lg backdrop-blur-sm bg-white/5 border border-white/10 hover:border-rustic-accent/50 hover:shadow-lg hover:shadow-rustic-accent/20"
              >
                <span className="relative z-10">Try Marriage Mender GPT</span>
                <div className="absolute inset-0 bg-gradient-to-r from-rustic-accent/0 to-rustic-accent/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </a>
              <a
                href="https://aiwebtools.lovable.app/?via=aiwebtools"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden text-white/80 hover:text-white transition-all duration-300 p-3 rounded-lg backdrop-blur-sm bg-white/5 border border-white/10 hover:border-blue-400/50 hover:shadow-lg hover:shadow-blue-400/20"
              >
                <span className="relative z-10">More AI Tools</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/0 to-blue-400/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </a>
              <a
                href="#faq"
                className="group relative overflow-hidden text-white/80 hover:text-white transition-all duration-300 p-3 rounded-lg backdrop-blur-sm bg-white/5 border border-white/10 hover:border-purple-400/50 hover:shadow-lg hover:shadow-purple-400/20"
              >
                <span className="relative z-10">FAQ</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400/0 to-purple-400/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </a>
              <a
                href="#disclaimer"
                className="group relative overflow-hidden text-white/80 hover:text-white transition-all duration-300 p-3 rounded-lg backdrop-blur-sm bg-white/5 border border-white/10 hover:border-yellow-400/50 hover:shadow-lg hover:shadow-yellow-400/20"
              >
                <span className="relative z-10">Disclaimer</span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/0 to-yellow-400/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </a>
            </div>
          </div>

          <div className="flex flex-col">
            <h3 className="font-bold text-xl text-transparent bg-gradient-to-r from-white to-rustic-accent bg-clip-text mb-6">Contact Us</h3>
            <div className="space-y-4">
              <a
                href="tel:+14758008096"
                className="group flex items-center text-white/80 hover:text-white transition-all duration-300 p-3 rounded-lg backdrop-blur-sm bg-white/5 border border-white/10 hover:border-rustic-accent/50 hover:shadow-lg transform hover:scale-105"
              >
                <Phone className="h-5 w-5 mr-3 group-hover:animate-pulse" />
                <span>(475) 800-8096</span>
              </a>
              <a
                href="mailto:Contact@ai-webtools.com"
                className="group flex items-center text-white/80 hover:text-white transition-all duration-300 p-3 rounded-lg backdrop-blur-sm bg-white/5 border border-white/10 hover:border-rustic-accent/50 hover:shadow-lg transform hover:scale-105"
              >
                <Mail className="h-5 w-5 mr-3 group-hover:animate-pulse" />
                <span>Contact@ai-webtools.com</span>
              </a>
            </div>

            <div className="mt-8">
              <h3 className="font-bold text-lg text-transparent bg-gradient-to-r from-white to-rustic-accent bg-clip-text mb-4">Legal</h3>
              <div className="flex flex-col space-y-3">
                <a
                  href="https://openai.com/policies/privacy-policy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white transition-all duration-300 text-sm p-2 rounded backdrop-blur-sm bg-white/5 border border-white/10 hover:border-rustic-accent/30 transform hover:scale-105"
                >
                  Privacy Policy
                </a>
                <a
                  href="https://aiwebtools.lovable.app/disclaimers"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white transition-all duration-300 text-sm p-2 rounded backdrop-blur-sm bg-white/5 border border-white/10 hover:border-rustic-accent/30 transform hover:scale-105"
                >
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-gradient-to-r from-transparent via-rustic-accent/30 to-transparent pt-8 flex flex-col md:flex-row justify-between items-center">
          <a 
            href="https://aiwebtools.lovable.app/?via=aiwebtools" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white/70 hover:text-white transition-all duration-300 backdrop-blur-sm bg-white/5 p-3 rounded-lg border border-white/10 hover:border-rustic-accent/30 transform hover:scale-105"
          >
            © 2025 AI WEB TOOLS LLC All rights reserved.
          </a>

          <a
            href="https://aiwebtools.lovable.app/?via=aiwebtools"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden px-8 py-4 rounded-full text-white hover:text-black flex items-center mt-6 md:mt-0 backdrop-blur-lg bg-gradient-to-r from-rustic-accent/20 to-yellow-400/20 border border-rustic-accent/50 hover:shadow-xl hover:shadow-rustic-accent/30 transform hover:scale-110 transition-all duration-300"
          >
            <span className="relative z-10 mr-3 font-semibold">More AI Tools</span>
            <Heart className="h-5 w-5 relative z-10 group-hover:animate-pulse" />
            <div className="absolute inset-0 bg-gradient-to-r from-rustic-accent to-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full"></div>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
