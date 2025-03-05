
import React from "react";
import { Heart } from "lucide-react";

const LogoAnimation = () => {
  return (
    <div className="relative h-16 w-16">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-full w-full rounded-full bg-gradient-to-r from-rustic-accent to-red-500 opacity-20 animate-pulse"></div>
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <Heart className="h-8 w-8 text-rustic-accent animate-glow" fill="#E57C23" />
      </div>
    </div>
  );
};

export default LogoAnimation;
