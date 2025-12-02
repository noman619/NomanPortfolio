import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS } from '../constants';
import { Project } from '../types';
import { ExternalLink, ArrowUpRight, Play, Image as ImageIcon, Video, CircleDot, Layout } from 'lucide-react';

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (project.video && videoRef.current) {
      videoRef.current.play().catch(e => console.log("Autoplay prevented", e));
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (project.video && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group relative bg-dark-800 rounded-3xl overflow-hidden border border-white/5 hover:border-shopify/30 transition-all duration-500 hover:shadow-2xl hover:shadow-shopify/5"
    >
      {/* Media Container */}
      <div className="relative aspect-[16/10] overflow-hidden bg-dark-900">
        {/* Status Badge */}
        <div className="absolute top-4 left-4 z-20 flex gap-2">
            <span className={`text-[10px] font-bold uppercase tracking-wider backdrop-blur-md px-2.5 py-1 rounded-full flex items-center gap-1.5 shadow-lg ${project.isLive ? 'bg-shopify/90 text-black' : 'bg-white/90 text-black'}`}>
                {project.isLive ? (
                  <>
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-black"></span>
                    </span>
                    Live Store
                  </>
                ) : (
                  <>
                    <Layout size={10} />
                    Design Concept
                  </>
                )}
            </span>
            
            {project.video && (
              <span className="text-[10px] font-bold uppercase tracking-wider text-white bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full flex items-center gap-1 border border-white/10">
                <Video size={10} />
                Video
              </span>
            )}
        </div>

        {/* Video Layer */}
        {project.video && (
          <video
            ref={videoRef}
            src={project.video}
            poster={project.image}
            muted
            loop
            playsInline
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${isHovered ? 'opacity-100 scale-105' : 'opacity-0 scale-100'}`}
          />
        )}

        {/* Image Layer (Fallback/Poster) */}
        <div className={`absolute inset-0 w-full h-full transition-opacity duration-700 ${isHovered && project.video ? 'opacity-0' : 'opacity-100'}`}>
             <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
            />
             {/* Play Button Indicator (only if video exists) */}
            {project.video && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:opacity-0 transition-opacity duration-300">
                    <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 shadow-xl">
                        <Play size={24} className="text-white fill-white ml-1" />
                    </div>
                </div>
            )}
        </div>
        
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/40 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />

        {/* Floating Action Button */}
        <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
             <a 
                href={project.link || '#'}
                className="w-10 h-10 bg-shopify rounded-full flex items-center justify-center text-black hover:bg-white transition-colors shadow-lg shadow-black/50"
             >
                 <ArrowUpRight size={20} strokeWidth={2.5} />
             </a>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 relative z-10 -mt-6 bg-gradient-to-b from-transparent to-dark-800">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-2xl font-bold text-white group-hover:text-shopify transition-colors duration-300">
            {project.title}
          </h3>
        </div>

        <p className="text-gray-400 text-sm mb-5 line-clamp-2 group-hover:text-gray-300 transition-colors">
            {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span key={tag} className="text-[10px] font-semibold text-gray-400 bg-white/5 border border-white/5 px-2 py-1 rounded">
              {tag}
            </span>
          ))}
        </div>

        {/* Animated Stats */}
        <AnimatePresence>
            {project.stats && (
                <div className="grid grid-cols-2 gap-2 pt-4 border-t border-white/5">
                    {project.stats.map((stat, idx) => (
                    <motion.div 
                        key={idx} 
                        initial={{ opacity: 0.8 }}
                        whileHover={{ scale: 1.05 }}
                        className="bg-white/5 rounded-lg p-2 border border-white/5"
                    >
                        <span className="block text-xs text-gray-500 uppercase tracking-wider mb-0.5">{stat.label}</span>
                        <span className="block text-lg font-bold text-shopify">{stat.value}</span>
                    </motion.div>
                    ))}
                </div>
            )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-32 bg-black relative">
       {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay"></div>
      
      {/* Background Blurs */}
      <div className="absolute top-20 left-0 w-96 h-96 bg-shopify/5 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[128px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-shopify"></span>
                <span className="text-xs font-medium text-gray-300 uppercase tracking-wider">Portfolio</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Selected Works</h2>
            <p className="text-gray-400 max-w-xl text-lg">
                A showcase of immersive commerce experiences, featuring live stores and conceptual designs. Hover over cards to preview.
            </p>
          </div>
          <a 
            href="#" 
            className="flex items-center gap-2 text-white border-b border-shopify pb-1 hover:text-shopify transition-colors group"
          >
            View Full Archive 
            <ExternalLink size={16} className="transform group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;