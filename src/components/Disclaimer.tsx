
import React from "react";
import { ShieldAlert } from "lucide-react";

const Disclaimer = () => {
  return (
    <section className="section-padding bg-rustic-darker" id="disclaimer">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
          <div className="inline-flex items-center justify-center space-x-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 mb-4">
            <ShieldAlert className="h-4 w-4 text-red-400" />
            <span className="text-sm font-medium text-red-400">Important Information</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
            Legal Disclaimer
          </h2>
        </div>

        <div className="max-w-4xl mx-auto glass-morph rounded-2xl p-6 md:p-10 animate-fade-in">
          <div className="prose prose-invert max-w-none">
            <h3 className="text-xl font-semibold mb-4 text-white">Educational Purpose Statement</h3>
            
            <p className="text-white/70 mb-4">
              Marriage Mender is a virtual mediation service designed for educational and informational purposes, 
              facilitating communication and understanding between couples facing relationship challenges. 
              It is an experimental simulation that provides guidance and support but is not a replacement for 
              professional counseling or human marriage therapy. Users acknowledge that Marriage Mender is not 
              a licensed therapist and disclaims any liability for actions taken based on the information provided.
            </p>
            
            <h3 className="text-xl font-semibold mt-6 mb-4 text-white">Disclaimer for Marriage Mender GPT</h3>
            
            <p className="text-white/70 mb-4">
              Marriage Mender GPT is provided "as is" without warranty of any kind, either express or implied, including but not limited to the implied warranties of merchantability, fitness for a particular purpose, or non-infringement.
            </p>
            
            <h4 className="text-lg font-semibold mt-6 mb-3 text-white">Not a Substitute for Professional Help</h4>
            <p className="text-white/70 mb-4">
              Marriage Mender GPT is designed to provide general guidance and support for relationship issues. It is not a substitute for professional marriage counseling, therapy, legal advice, or other professional services. In cases of serious relationship distress, domestic violence, abuse, or mental health concerns, please consult with appropriate professionals immediately.
            </p>
            
            <h4 className="text-lg font-semibold mt-6 mb-3 text-white">Limitation of Liability</h4>
            <p className="text-white/70 mb-4">
              AI WEB TOOLS LLC and its affiliates shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the service; (ii) any conduct or content of any third party on the service; (iii) any content obtained from the service; and (iv) unauthorized access, use, or alteration of your transmissions or content.
            </p>
            
            <h4 className="text-lg font-semibold mt-6 mb-3 text-white">Privacy Considerations</h4>
            <p className="text-white/70 mb-4">
              While we strive to protect your privacy, please be aware that information shared through Marriage Mender GPT is subject to the privacy policies of the underlying platforms (e.g., OpenAI). Review these policies to understand how your data may be used.
            </p>
            
            <h4 className="text-lg font-semibold mt-6 mb-3 text-white">User Responsibility</h4>
            <p className="text-white/70 mb-4">
              Users are responsible for their interactions with Marriage Mender GPT and for any decisions made based on its guidance. By using this service, you acknowledge and agree to these terms and limitations.
            </p>
            
            <p className="text-white/70 italic mt-8">
              Last updated: June 15, 2025
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Disclaimer;
