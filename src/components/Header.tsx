
import React, { useState, useEffect } from "react";
import { ButtonCustom } from "./ui/button-custom";
import { Heart, Menu, X } from "lucide-react";
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

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/80 backdrop-blur-md py-2" : "bg-transparent py-3"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="mr-2">
              <Heart className="h-5 w-5 md:h-6 md:w-6 text-rustic-accent animate-pulse" />
            </div>
            <Link to="/" className="flex flex-col" onClick={closeMenu}>
              {/* Significantly improved spacing for mobile layout */}
              <h1 className="font-bold text-base md:text-xl text-white leading-tight">Marriage Mender GPT</h1>
              <p className="text-[9px] md:text-xs text-white/60 leading-tight mt-0.5">Presented by AiWebTools.Ai</p>
              <p className="text-[9px] md:text-xs text-white/90 leading-tight mt-2 md:mt-1">
                AI-Powered Relationship Mediator
              </p>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              className="text-white p-2 mobile-tap-target"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
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
      </div>

      {/* Mobile menu - improved with slide animation and larger touch targets */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-black/95 backdrop-blur-lg z-40 pt-16 animate-fade-in">
          <div className="px-4 py-6 flex flex-col space-y-6">
            <a
              href="https://chatgpt.com/g/g-0MogI8wIQ-marriage-mender-gpt"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-rustic-accent mobile-tap-target flex items-center px-4 py-3 rounded-lg bg-white/5"
              onClick={closeMenu}
            >
              Try Marriage Mender GPT
            </a>
            <a
              href="https://www.aiwebtools.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-rustic-accent mobile-tap-target flex items-center px-4 py-3 rounded-lg bg-white/5"
              onClick={closeMenu}
            >
              More AI Tools
            </a>
            <a
              href="#faq"
              className="text-white hover:text-rustic-accent mobile-tap-target flex items-center px-4 py-3 rounded-lg bg-white/5"
              onClick={() => {
                closeMenu();
                document.getElementById("faq")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              FAQ
            </a>
            <a
              href="#disclaimer"
              className="text-white hover:text-rustic-accent mobile-tap-target flex items-center px-4 py-3 rounded-lg bg-white/5"
              onClick={() => {
                closeMenu();
                document.getElementById("disclaimer")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Disclaimer
            </a>
            <ButtonCustom
              variant="accent"
              size="default"
              className="w-full mt-4 py-4"
              onClick={() => {
                window.open("https://chatgpt.com/g/g-0MogI8wIQ-marriage-mender-gpt", "_blank");
                closeMenu();
              }}
            >
              Get Started
            </ButtonCustom>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
