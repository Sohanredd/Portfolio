import { motion } from 'framer-motion';
import { Database, Workflow, TrendingUp, Award, Briefcase, Users } from 'lucide-react';
import { about } from '../data/resume';

const iconMap = {
  Database,
  Workflow,
  TrendingUp,
  Award,
  Briefcase,
  Users,
};

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto rounded-full"></div>
        </motion.div>

        {/* Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass rounded-2xl p-8 md:p-12 mb-16 shadow-2xl border border-white/10"
        >
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed text-center">
            {about.summary}
          </p>
        </motion.div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {about.highlights.map((highlight, index) => {
            const Icon = iconMap[highlight.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative group"
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-cyan-600/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all opacity-0 group-hover:opacity-100"></div>
                
                {/* Card */}
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="relative glass rounded-2xl p-6 md:p-8 glass-hover shadow-xl border border-white/10 group-hover:border-blue-500/30 transition-all h-full"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="flex-shrink-0 mb-4">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center shadow-lg shadow-blue-500/30 group-hover:shadow-blue-500/60 transition-all"
                      >
                        <Icon className="text-white" size={28} />
                      </motion.div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-3 text-white">
                        {highlight.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed text-sm">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
