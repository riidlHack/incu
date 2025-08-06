import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

import { Link } from "react-router-dom";

const faqs = [
  {
    question: "Who can participate in Incuverse 1.0?",
    answer: "Incuverse is open to all the College students across India. You can participate in teams of 2 to 4 people. No prior hackathon experience required!"
  },
  {
    question: "How much does it cost to participate?",
    answer: "Participation is completely free! We provide meals, snacks, swag, mentorship, and all the resources you need to build something amazing."
  },
  {
    question: "What should I bring?",
    answer: "Bring your laptop, chargers, any hardware you want to use, and a positive attitude! We'll provide everything else including food, drinks, wifi, and workspaces."
  },
  {
    question: "Can I work on an existing project?",
    answer: "No, all projects must be started from scratch during the hackathon. However, you can use existing libraries, frameworks, APIs, and open-source tools."
  },
  {
    question: "How are projects judged?",
    answer: "Projects are evaluated on innovation, technical complexity, design, feasibility, and potential impact. Each track may have specific criteria outlined by our sponsor partners."
  },
  {
    question: "Are there mentors available?",
    answer: "Yes! We have industry mentors from top startups and companies. They'll be available for 1-on-1 sessions throughout the weekend."
  },
  {
    question: "What about accommodation?",
    answer: "The venue is open 24/7 during the hackathon with designated sleeping areas."
  },
  {
    question: "Can I submit to multiple tracks?",
    answer: "Absolutely! Teams can submit their project to multiple relevant tracks to maximize their chances of winning prizes."
  },
  {
    question: "What happens to intellectual property?",
    answer: "You retain full ownership of any IP you create. Some sponsor challenges may offer licensing opportunities, but participation is always optional."
  }
];
const FAQItem = ({ faq, index }: { faq: any, index: number }) => {
  const [isOpen, setIsOpen] = useState(false);


  return (
    <div 
      className="glass-panel p-6 hover-glow cursor-pointer"
      style={{ animationDelay: `${index * 0.1}s` }}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex items-center justify-between">
        <h3 className="font-heading text-lg font-semibold text-foreground pr-4">
          {faq.question}
        </h3>
        <div className="flex-shrink-0">
          {isOpen ? (
            <ChevronUp className="w-5 h-5 text-neon-green" />
          ) : (
            <ChevronDown className="w-5 h-5 text-neon-green" />
          )}
        </div>
      </div>
      
      {isOpen && (
        <div className="mt-4 pt-4 border-t border-neon-green/20">
          <p className="text-muted-foreground leading-relaxed">
            {faq.answer}
          </p>
        </div>
      )}
      
      {/* Circuit decoration */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-green/30 to-transparent" />
    </div>
  );
};

export const FAQSection = () => {
  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="neon-text font-heading text-4xl md:text-6xl font-black uppercase tracking-tight mb-6">
            FAQ's
          </h2>
          <p className="text-muted-foreground font-heading uppercase tracking-wide">
            Everything you need to know
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} faq={faq} index={index} />
          ))}
        </div>

        {/* Contact for More Questions */}
        <div className="mt-16 text-center">
          <div className="glass-panel p-8 hover-glow">
            <h3 className="font-heading text-2xl font-bold text-neon-green mb-4">
              Still Have Questions?
            </h3>
            <p className="text-muted-foreground mb-6">
              Can't find the answer you're looking for? Our team is here to help!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:hackathon.riidl@somaiya.edu">
                
                <button className="glass-panel hover-glow font-heading px-6 py-3 border border-neon-cyan/30 text-neon-cyan hover:bg-neon-cyan/10 transition-all duration-300">
                Email Us
              </button></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
