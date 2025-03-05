
import React, { useState, useEffect } from "react";
import { ButtonCustom } from "./ui/button-custom";
import { Heart, Menu, X, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/80 backdrop-blur-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col space-y-2">
          {/* Logo and brand section */}
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="mr-2">
                <Heart className="h-6 w-6 text-rustic-accent animate-pulse" />
              </div>
              <Link to="/" className="flex flex-col">
                <h1 className="font-bold text-xl text-white">Marriage Mender GPT</h1>
                <p className="text-xs text-white/60">Presented by AiWebTools.Ai</p>
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                className="text-white p-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              <a
                href="https://chatgpt.com/g/g-0MogI8wIQ-marriage-mender-gpt"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-rustic-accent transition-colors"
              >
                Try Marriage Mender GPT
              </a>
              <a
                href="https://www.aiwebtools.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-rustic-accent transition-colors"
              >
                More AI Tools
              </a>
              <a
                href="#faq"
                className="text-white hover:text-rustic-accent transition-colors"
              >
                FAQ
              </a>
              <a
                href="#disclaimer"
                className="text-white hover:text-rustic-accent transition-colors"
              >
                Disclaimer
              </a>

              <ButtonCustom
                variant="accent"
                size="default"
                className="ml-4"
                onClick={() => window.open("https://chatgpt.com/g/g-0MogI8wIQ-marriage-mender-gpt", "_blank")}
              >
                Get Started
              </ButtonCustom>
            </nav>
          </div>
          
          {/* AI-Powered badge - moved down as a separate element */}
          <div className="flex justify-start mt-1">
            <div className="bg-black/40 backdrop-blur-sm px-4 py-1.5 rounded-full inline-flex items-center border border-white/10 shadow-sm">
              <Sparkles className="h-4 w-4 text-yellow-400 mr-2" />
              <span className="text-sm font-medium text-white/90">AI-Powered Relationship Mediator</span>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black/90 backdrop-blur-lg p-4 flex flex-col space-y-4 border-t border-white/10 animate-fade-in">
          <a
            href="https://chatgpt.com/g/g-0MogI8wIQ-marriage-mender-gpt"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-rustic-accent px-4 py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Try Marriage Mender GPT
          </a>
          <a
            href="https://www.aiwebtools.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-rustic-accent px-4 py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            More AI Tools
          </a>
          <a
            href="#faq"
            className="text-white hover:text-rustic-accent px-4 py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            FAQ
          </a>
          <a
            href="#disclaimer"
            className="text-white hover:text-rustic-accent px-4 py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Disclaimer
          </a>
          <ButtonCustom
            variant="accent"
            size="default"
            className="w-full"
            onClick={() => {
              window.open("https://chatgpt.com/g/g-0MogI8wIQ-marriage-mender-gpt", "_blank");
              setIsMenuOpen(false);
            }}
          >
            Get Started
          </ButtonCustom>
        </div>
      )}
    </header>
  );
};

export default Header;
