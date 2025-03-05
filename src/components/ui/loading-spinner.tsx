
import React from "react";

export const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center space-x-2">
      <div className="w-4 h-4 rounded-full bg-rustic-accent animate-bounce" style={{ animationDelay: "0s" }}></div>
      <div className="w-4 h-4 rounded-full bg-rustic-accent animate-bounce" style={{ animationDelay: "0.2s" }}></div>
      <div className="w-4 h-4 rounded-full bg-rustic-accent animate-bounce" style={{ animationDelay: "0.4s" }}></div>
    </div>
  );
};

export default LoadingSpinner;
