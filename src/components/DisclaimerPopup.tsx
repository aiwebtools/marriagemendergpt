
import React, { useState, useEffect } from "react";
import { ShieldAlert, X } from "lucide-react";
import { ButtonCustom } from "./ui/button-custom";

interface DisclaimerPopupProps {
  onClose: () => void;
}

const DisclaimerPopup = ({ onClose }: DisclaimerPopupProps) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleAgree = () => {
    setIsVisible(false);
    // Wait for exit animation to complete before closing
    setTimeout(() => {
      onClose();
      // Save to localStorage to prevent showing again in the same session
      localStorage.setItem("disclaimerAgreed", "true");
    }, 300);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop overlay */}
      <div 
        className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      />
      
      {/* Popup container */}
      <div 
        className={`relative w-11/12 max-w-md transform transition-all duration-300 ${
          isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
      >
        <div className="glass-morph overflow-hidden rounded-2xl border border-white/20 bg-gradient-to-br from-rustic-blue/90 to-rustic-darker shadow-xl">
          {/* Header */}
          <div className="relative border-b border-white/10 bg-black/30 p-5 text-center">
            <div className="flex items-center justify-center space-x-2">
              <ShieldAlert className="h-6 w-6 text-rustic-accent" />
              <h2 className="text-xl font-bold text-white">Disclaimer</h2>
            </div>
            <button 
              onClick={onClose} 
              className="absolute right-4 top-4 rounded-full p-1 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
            >
              <X size={20} />
            </button>
          </div>
          
          {/* Content */}
          <div className="p-6">
            <p className="mb-4 text-sm text-white/80">
              Marriage Mender is provided for educational purposes only and is not a substitute for professional counseling or therapy. 
            </p>
            <p className="mb-6 text-sm text-white/80">
              By using this service, you acknowledge that this is an AI experiment, and you agree to our terms of service and privacy policy.
            </p>
            
            {/* Agreement button */}
            <div className="flex justify-center">
              <ButtonCustom
                variant="accent"
                className="group relative overflow-hidden px-8 py-3 font-bold transition-all duration-300 hover:shadow-[0_0_15px_5px_rgba(229,124,35,0.3)]"
                onClick={handleAgree}
              >
                <span className="relative z-10">I AGREE</span>
                <span className="absolute bottom-0 left-0 h-1 w-full transform bg-white/30 transition-all duration-300 group-hover:h-full"></span>
              </ButtonCustom>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisclaimerPopup;
