
import React from "react";
import { Heart, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black/50 border-t border-white/10 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col">
            <div className="flex items-center">
              <Heart className="h-5 w-5 text-rustic-accent mr-2" />
              <h3 className="font-bold text-xl text-white">Marriage Mender GPT</h3>
            </div>
            <p className="text-white/60 mt-4">
              Your virtual marriage mediator, helping couples find common ground and restore harmony.
            </p>
          </div>

          <div className="flex flex-col">
            <h3 className="font-bold text-lg text-white mb-4">Quick Links</h3>
            <div className="grid grid-cols-1 gap-3">
              <a
                href="https://chatgpt.com/g/g-0MogI8wIQ-marriage-mender-gpt"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-rustic-accent transition-colors"
              >
                Try Marriage Mender GPT
              </a>
              <a
                href="https://www.aiwebtools.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-rustic-accent transition-colors"
              >
                More AI Tools
              </a>
              <a
                href="#faq"
                className="text-white/80 hover:text-rustic-accent transition-colors"
              >
                FAQ
              </a>
              <a
                href="#disclaimer"
                className="text-white/80 hover:text-rustic-accent transition-colors"
              >
                Disclaimer
              </a>
            </div>
          </div>

          <div className="flex flex-col">
            <h3 className="font-bold text-lg text-white mb-4">Contact Us</h3>
            <div className="space-y-3">
              <a
                href="tel:+14758008096"
                className="flex items-center text-white/80 hover:text-rustic-accent transition-colors"
              >
                <Phone className="h-4 w-4 mr-2" />
                (475) 800-8096
              </a>
              <a
                href="mailto:Contact@ai-webtools.com"
                className="flex items-center text-white/80 hover:text-rustic-accent transition-colors"
              >
                <Mail className="h-4 w-4 mr-2" />
                Contact@ai-webtools.com
              </a>
            </div>

            <div className="mt-6">
              <h3 className="font-bold text-lg text-white mb-2">Legal</h3>
              <div className="flex space-x-4">
                <a
                  href="https://openai.com/policies/privacy-policy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-rustic-accent transition-colors text-sm"
                >
                  Privacy Policy
                </a>
                <a
                  href="https://aiwebtools.ai/terms-of-services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-rustic-accent transition-colors text-sm"
                >
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <a 
            href="https://www.aiwebtools.ai" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white/60 hover:text-white transition-colors"
          >
            © 2025 AI WEB TOOLS LLC All rights reserved.
          </a>

          <a
            href="https://www.aiwebtools.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="neo-morph px-6 py-3 rounded-full text-white hover:text-rustic-accent flex items-center mt-4 md:mt-0"
          >
            <span className="mr-2">More AI Tools</span>
            <Heart className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
