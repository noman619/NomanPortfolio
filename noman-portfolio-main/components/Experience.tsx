import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCE, SKILLS } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-dark-900">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
        
        {/* Work History */}
        <div>
          <h2 className="text-3xl font-bold mb-10">Experience</h2>
          <div className="space-y-12">
            {EXPERIENCE.map((job, index) => (
              <motion.div 
                key={job.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-8 border-l border-white/10"
              >
                <div className="absolute -left-1.5 top-0 w-3 h-3 rounded-full bg-shopify" />
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <h3 className="text-xl font-bold text-white">{job.role}</h3>
                  <span className="text-sm text-gray-500 font-mono">{job.period}</span>
                </div>
                <div className="text-shopify text-sm font-medium mb-3">{job.company}</div>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  {job.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {job.technologies.map(tech => (
                    <span key={tech} className="text-xs text-gray-500 bg-dark-800 px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div>
          <h2 className="text-3xl font-bold mb-10">Technical Stack</h2>
          <div className="bg-dark-800 rounded-2xl p-8 border border-white/5">
            <div className="grid gap-6">
              {SKILLS.map((skill, index) => (
                <motion.div 
                  key={skill.name}
                  initial={{ opacity: 0, width: 0 }}
                  whileInView={{ opacity: 1, width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center gap-3">
                      <skill.icon size={18} style={{ color: skill.color }} />
                      <span className="font-medium">{skill.name}</span>
                    </div>
                    <span className="text-sm text-gray-500">{skill.level}%</span>
                  </div>
                  <div className="h-2 w-full bg-dark-900 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="h-full rounded-full"
                      style={{ backgroundColor: skill.color }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Additional Tags */}
            <div className="mt-10 pt-8 border-t border-white/5">
              <h4 className="text-sm font-semibold text-gray-400 mb-4">Other Tools & Libraries</h4>
              <div className="flex flex-wrap gap-2">
                {["Html","CSS","Tailwind CSS", "Bootstrap", "Javascript", "GSAP", "Shopify", "Shopify Plus", "React.js", "TypeScript", "Git", "Canva", "Google Sheets",].map((tool) => (
                  <span key={tool} className="px-3 py-1.5 bg-dark-900 text-gray-300 text-xs rounded-lg border border-white/5">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;