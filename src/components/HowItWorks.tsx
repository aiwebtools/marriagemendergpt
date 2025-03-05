
import React from "react";
import { ButtonCustom } from "./ui/button-custom";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Meet Phazz",
      description: "Introduce yourself to Phazz, your AI marriage mediator who will guide you and your partner through the process.",
      image: "bg-gradient-to-br from-rustic-accent/20 to-purple-500/20"
    },
    {
      number: "02",
      title: "Share Your Concerns",
      description: "Express your thoughts and feelings in a safe, non-judgmental environment designed for open communication.",
      image: "bg-gradient-to-br from-blue-500/20 to-purple-600/20"
    },
    {
      number: "03",
      title: "Receive Guidance",
      description: "Get personalized insights and practical strategies tailored to your specific relationship dynamics.",
      image: "bg-gradient-to-br from-purple-500/20 to-blue-500/20"
    },
    {
      number: "04",
      title: "Find Common Ground",
      description: "Discover shared perspectives and solutions that honor both partners' needs and strengthen your connection.",
      image: "bg-gradient-to-br from-rustic-accent/20 to-red-500/20"
    }
  ];

  return (
    <section className="relative section-padding" id="how-it-works">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40 pointer-events-none"></div>

      <div className="container mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <div className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-4">
            <span className="text-sm font-medium text-white">Simple Process</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
            How Marriage Mender Works
          </h2>
          <p className="text-lg text-white/70">
            Our easy four-step process helps you and your partner navigate challenges and rebuild connection with expert guidance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="rounded-2xl overflow-hidden flex flex-col h-full border border-white/10 animate-fade-in"
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              <div className={`${step.image} aspect-[4/3] p-6 flex items-end`}>
                <span className="text-4xl font-bold text-white/30">{step.number}</span>
              </div>
              <div className="bg-rustic-muted p-6 flex-grow">
                <h3 className="text-xl font-bold mb-3 text-white">{step.title}</h3>
                <p className="text-white/70">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <ButtonCustom
            variant="accent"
            size="lg"
            onClick={() => window.open("https://chatgpt.com/g/g-0MogI8wIQ-marriage-mender-gpt", "_blank")}
          >
            Start Your Journey Today
          </ButtonCustom>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
