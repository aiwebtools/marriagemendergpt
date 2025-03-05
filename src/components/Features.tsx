
import React, { useEffect, memo } from "react";
import { Heart, Users, Handshake, Sparkles, MessageCircle, ShieldCheck } from "lucide-react";

const featureItems = [
  {
    icon: <Heart className="h-8 w-8 text-rustic-accent" />,
    title: "Relationship Healing",
    description: "Helps couples identify and heal emotional wounds through empathetic guidance and communication strategies."
  },
  {
    icon: <Users className="h-8 w-8 text-rustic-accent" />,
    title: "Neutral Mediation",
    description: "Provides a balanced, non-judgmental perspective that considers both partners' viewpoints."
  },
  {
    icon: <Handshake className="h-8 w-8 text-rustic-accent" />,
    title: "Conflict Resolution",
    description: "Offers practical techniques to transform conflicts into opportunities for growth and understanding."
  },
  {
    icon: <MessageCircle className="h-8 w-8 text-rustic-accent" />,
    title: "Communication Enhancement",
    description: "Teaches effective communication patterns that foster deeper connection and mutual respect."
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-rustic-accent" />,
    title: "Safe Environment",
    description: "Creates a secure space for vulnerable conversations without fear of judgment or rejection."
  },
  {
    icon: <Sparkles className="h-8 w-8 text-rustic-accent" />,
    title: "Personalized Guidance",
    description: "Tailors advice to your unique relationship dynamics and specific challenges."
  }
];

// Memoize the Feature Card component to optimize rendering
const FeatureCard = memo(({ feature, index }: { feature: any, index: number }) => (
  <div 
    key={index} 
    className="glass-morph rounded-2xl p-6 md:p-8 transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg animate-fade-in"
    style={{ animationDelay: `${0.1 + index * 0.1}s` }}
  >
    <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white/5 flex items-center justify-center mb-4 md:mb-6">
      {feature.icon}
    </div>
    <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-white">{feature.title}</h3>
    <p className="text-sm md:text-base text-white/70">{feature.description}</p>
  </div>
));

FeatureCard.displayName = 'FeatureCard';

const Features = () => {
  useEffect(() => {
    console.log("Features component mounted");
  }, []);

  console.log("Rendering Features component with", featureItems.length, "items");

  return (
    <section className="relative section-padding py-12 md:py-20" id="features">
      <div className="container mx-auto z-10 relative">
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-16 animate-fade-in">
          <div className="inline-block px-3 py-1 rounded-full bg-rustic-accent/10 mb-4 border border-rustic-accent/20">
            <span className="text-xs md:text-sm font-medium text-rustic-accent">Advanced Capabilities</span>
          </div>
          <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6 gradient-text">
            How Marriage Mender Helps Your Relationship
          </h2>
          <p className="text-base md:text-lg text-white/70">
            Designed with compassion and powered by advanced AI, Marriage Mender GPT offers comprehensive support for couples facing challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {featureItems.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
