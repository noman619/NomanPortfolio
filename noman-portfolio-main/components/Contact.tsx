import React from 'react';
import { Mail, Linkedin, Github, Twitter } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 to-black z-0" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-shopify/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to start your brand?</h2>
        <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
          Whether you need a custom desiged layout, a complex problem solution, or a user-friendly interface fully mobile responsive, I'm ready to help you in your journey to success.
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-16">
          <a 
            href="mailto:mnomannaveed007@gmail.com" 
            className="px-8 py-4 bg-shopify text-white font-bold rounded-lg hover:bg-shopify-dim transition-all w-full md:w-auto flex items-center justify-center gap-2"
          >
            <Mail size={20} /> Send an Email
          </a>
          <a 
            href="tel:03014262019" 
            className="px-8 py-4 bg-dark-800 border border-white/10 text-white font-bold rounded-lg hover:bg-dark-700 transition-all w-full md:w-auto"
          >
            Book a Call
          </a>
        </div>

        <div className="flex justify-center gap-8 text-gray-400">
          <a href="https://github.com/noman619" className="hover:text-shopify transition-colors transform hover:-translate-y-1 block">
            <Github size={24} />
          </a>
          <a href="#" className="hover:text-shopify transition-colors transform hover:-translate-y-1 block">
            <Linkedin size={24} />
          </a>
          {/* <a href="#" className="hover:text-shopify transition-colors transform hover:-translate-y-1 block">
            <Twitter size={24} />
          </a> */}
        </div>
      </div>
    </section>
  );
};

export default Contact;