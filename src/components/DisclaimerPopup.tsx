
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, CheckCircle2, X } from "lucide-react";
import { ButtonCustom } from "./ui/button-custom";
import { useToast } from "@/hooks/use-toast";

const DisclaimerPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Check if the user has already accepted the disclaimer
    const hasAccepted = localStorage.getItem("disclaimerAccepted");
    
    if (!hasAccepted) {
      // Show popup after a short delay
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    // Save to localStorage so it doesn't show again
    localStorage.setItem("disclaimerAccepted", "true");
    setIsOpen(false);
    
    // Show confirmation toast
    toast({
      title: "Welcome!",
      description: "Thank you for accepting our disclaimer.",
    });
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Popup */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-[90%] max-w-md"
          >
            <div className="bg-gradient-to-br from-rustic-dark to-rustic-blue border border-white/10 rounded-2xl shadow-xl overflow-hidden">
              {/* Header */}
              <div className="relative p-6 bg-rustic-blue/30 border-b border-white/10">
                <button 
                  onClick={() => setIsOpen(false)} 
                  className="absolute right-4 top-4 text-white/60 hover:text-white transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
                <div className="flex items-center space-x-3">
                  <Shield className="h-8 w-8 text-rustic-accent" />
                  <h2 className="text-2xl font-bold gradient-text tracking-tight">Important Notice</h2>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <p className="text-white/80 mb-4 leading-relaxed font-light">
                  Marriage Mender GPT is provided for educational and informational purposes only. 
                  It is not a substitute for professional counseling or therapy.
                </p>
                <p className="text-white/70 mb-6 text-sm leading-relaxed">
                  By clicking "I Agree" below, you acknowledge that you understand this is an AI tool 
                  and should not be used for serious relationship issues that require professional help.
                </p>
                
                {/* Button */}
                <ButtonCustom
                  variant="accent"
                  className="w-full tap-effect group relative overflow-hidden"
                  onClick={handleAccept}
                >
                  <span className="relative z-10 font-medium tracking-wide flex items-center justify-center">
                    I AGREE
                    <CheckCircle2 className="ml-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-rustic-accent to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </ButtonCustom>
                
                {/* Fine print */}
                <p className="text-white/40 text-xs mt-4 text-center">
                  For serious relationship issues, please consult with a licensed therapist.
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default DisclaimerPopup;
