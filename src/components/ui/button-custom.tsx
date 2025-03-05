
import * as React from "react";
import { cn } from "@/lib/utils";

interface ButtonCustomProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "accent" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  asChild?: boolean;
}

const ButtonCustom = React.forwardRef<HTMLButtonElement, ButtonCustomProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 disabled:pointer-events-none",
          
          // Variants
          variant === "default" && 
            "bg-primary text-primary-foreground shadow hover:bg-primary/90",
          variant === "outline" && 
            "border border-white/10 bg-transparent hover:bg-white/5 text-foreground",
          variant === "ghost" && 
            "hover:bg-accent/10 text-foreground hover:text-accent",
          variant === "accent" && 
            "bg-rustic-accent text-white shadow-lg hover:bg-rustic-accent/90",
          variant === "link" && 
            "text-foreground underline-offset-4 hover:underline",
          
          // Sizes
          size === "default" && "h-12 px-6 py-3",
          size === "sm" && "h-9 px-3",
          size === "lg" && "h-14 px-8 text-base",
          size === "icon" && "h-10 w-10",
          
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

ButtonCustom.displayName = "ButtonCustom";

export { ButtonCustom };
