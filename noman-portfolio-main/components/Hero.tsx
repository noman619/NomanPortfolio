import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code2 } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-shopify/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 animate-blob" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 animate-blob animation-delay-2000" />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6">
            <span className="w-2 h-2 rounded-full bg-shopify animate-pulse"></span>
            <span className="text-xs font-medium text-gray-300 uppercase tracking-wider">Available for new projects</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
            Hi, I'm M. Noman. <br />
            I Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-shopify to-green-300">Modern</span> <br />
            Shopify Stores.
          </h1>
          
          <p className="text-lg text-gray-400 mb-8 max-w-lg leading-relaxed">
            I'm a specialized Shopify Developer creating high-converting, pixel-perfect e-commerce experiences and headless solutions that help brands stand out.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a 
              href="#projects" 
              className="px-8 py-4 bg-shopify text-white font-bold rounded-lg flex items-center gap-2 hover:bg-shopify-dim transition-all shadow-lg shadow-shopify/20"
            >
              View My Work <ArrowRight size={20} />
            </a>
            <a 
              href="#contact" 
              className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-lg hover:bg-white/10 transition-all"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-12 flex items-center gap-8 text-gray-500 text-sm font-mono">
            <span>// SHOPIFY PLUS</span>
            <span>// HYDROGEN</span>
            <span>// LIQUID</span>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden md:block"
        >
          <div className="relative z-10 bg-dark-800 border border-white/10 rounded-2xl p-6 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
            <div className="flex items-center justify-between mb-6 border-b border-white/10 pb-4">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <Code2 size={20} className="text-gray-500" />
            </div>
            <div className="space-y-3 font-mono text-sm">
              <div className="flex">
                <span className="text-purple-400 mr-2">const</span>
                <span className="text-blue-400 mr-2">developer</span>
                <span className="text-white mr-2">=</span>
                <span className="text-yellow-300">new</span>
                <span className="text-shopify ml-2">Nauman</span>
                <span className="text-gray-400">();</span>
              </div>
              <div className="pl-4">
                <span className="text-blue-400">developer</span>
                <span className="text-gray-400">.</span>
                <span className="text-yellow-300">create</span>
                <span className="text-gray-400">({'{'}</span>
              </div>
              <div className="pl-8">
                <span className="text-white">platform:</span> <span className="text-green-400">'Shopify'</span><span className="text-gray-400">,</span>
              </div>
              <div className="pl-8">
                <span className="text-white">style:</span> <span className="text-green-400">'Modern'</span><span className="text-gray-400">,</span>
              </div>
              <div className="pl-8">
                <span className="text-white">focus:</span> <span className="text-green-400">'UX/UI'</span>
              </div>
              <div className="pl-4 text-gray-400">{'}'});</div>
              <div>
                <span className="text-blue-400">developer</span>
                <span className="text-gray-400">.</span>
                <span className="text-yellow-300">deploy</span>
                <span className="text-gray-400">();</span>
              </div>
            </div>
          </div>
          
          {/* Decorative floating elements */}
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute -top-10 -right-10 bg-dark-700 p-4 rounded-xl border border-white/10 shadow-xl z-20"
          >
            <div className="text-xs text-gray-400 mb-1">Total Sales Generated</div>
            <div className="text-xl font-bold text-white">$1.2M+</div>
          </motion.div>

          <motion.div 
            animate={{ y: [0, 20, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-5 -left-5 bg-dark-700 p-4 rounded-xl border border-white/10 shadow-xl z-20"
          >
             <div className="text-xs text-gray-400 mb-1">Avg. Performance</div>
             <div className="text-xl font-bold text-shopify">99/100</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;