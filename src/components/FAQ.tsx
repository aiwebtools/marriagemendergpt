
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqItems = [
    {
      question: "What is Marriage Mender GPT?",
      answer: "Marriage Mender GPT is an AI-powered virtual marriage mediator designed to help couples resolve conflicts, improve communication, and restore harmony in their relationships. It provides a neutral, non-judgmental space for both partners to express their concerns and receive guidance."
    },
    {
      question: "How does Marriage Mender GPT work?",
      answer: "Marriage Mender GPT works by engaging with both partners individually and as a couple, asking thoughtful questions to understand each person's perspective. It then uses advanced communication strategies and conflict resolution techniques to help identify solutions that work for both individuals. The AI mediator, Phazz, maintains neutrality throughout the process, ensuring both partners feel heard and valued."
    },
    {
      question: "Is my conversation with Marriage Mender GPT private?",
      answer: "Yes, conversations with Marriage Mender GPT are private and secure. We prioritize your privacy and maintain strict confidentiality. Your personal information and conversation details are protected in accordance with our privacy policy."
    },
    {
      question: "Can Marriage Mender GPT replace professional marriage counseling?",
      answer: "While Marriage Mender GPT offers valuable guidance and support, it is not intended to replace professional marriage counseling or therapy. It serves as a supplementary resource for couples who want to improve their communication and resolve conflicts. For serious relationship issues, we recommend consulting with a licensed marriage counselor or therapist."
    },
    {
      question: "What types of relationship issues can Marriage Mender GPT help with?",
      answer: "Marriage Mender GPT can help with a wide range of relationship issues, including communication problems, conflict resolution, rebuilding trust, reconnecting emotionally, navigating life transitions, and finding common ground on important decisions. It provides strategies for improving everyday interactions and addressing deeper relationship challenges."
    },
    {
      question: "How do I get started with Marriage Mender GPT?",
      answer: "Getting started is easy. Simply click on the 'Try Marriage Mender GPT' button, which will direct you to the ChatGPT platform where you can begin your conversation with Phazz, your AI marriage mediator. You'll both be asked for your names and to share the issues you're facing, and the guided process will begin from there."
    }
  ];

  return (
    <section className="section-padding relative" id="faq">
      <div className="container mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <div className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-4">
            <span className="text-sm font-medium text-white">Common Questions</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-white/70">
            Find answers to common questions about Marriage Mender GPT and how it can help strengthen your relationship.
          </p>
        </div>

        <div className="max-w-3xl mx-auto glass-morph rounded-2xl p-4 md:p-8 animate-fade-in">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-white/10 last:border-0">
                <AccordionTrigger className="text-left text-lg font-medium py-5 text-white hover:text-rustic-accent transition-colors">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-white/70 pb-5">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
