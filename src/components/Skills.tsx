import { motion } from 'framer-motion';
import { Code, Database, Brain, TrendingUp, Shield, Wrench } from 'lucide-react';
import { skills } from '../data/resume';

const iconMap: { [key: string]: any } = {
  "Data Engineering": Database,
  "Business Intelligence": TrendingUp,
  "Programming & Tools": Code,
  "Artificial Intelligence & Machine Learning": Brain,
  "Data Science": Brain,
  "Best Practices": Shield,
};

const Skills = () => {
  const categories = Object.entries(skills);

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, type: "spring" }}
            className="inline-block mb-4"
          >
            <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center shadow-lg shadow-blue-500/50">
              <Wrench className="text-white" size={32} />
            </div>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-6">
            Comprehensive expertise across data engineering, AI/ML, and cloud technologies
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto rounded-full"></div>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {categories.map(([category, skillList], categoryIndex) => {
            const Icon = iconMap[category] || Code;
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                whileHover={{ y: -5 }}
                className="relative group"
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-cyan-600/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all opacity-0 group-hover:opacity-100"></div>
                
                {/* Card */}
                <div className="relative glass rounded-2xl p-6 md:p-8 glass-hover shadow-xl border border-white/10 group-hover:border-blue-500/30 transition-all h-full">
                  {/* Category Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center shadow-lg shadow-blue-500/30 group-hover:shadow-blue-500/50 transition-all">
                      <Icon className="text-white" size={24} />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-white flex-1">
                      {category}
                    </h3>
                    <div className="text-sm text-gray-500 font-medium">
                      {skillList.length} skills
                    </div>
                  </div>

                  {/* Skills Tags */}
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill, skillIndex) => (
                      <motion.span
                        key={skillIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ 
                          duration: 0.3, 
                          delay: categoryIndex * 0.1 + skillIndex * 0.02 
                        }}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="px-3 py-2 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-blue-500/30 rounded-lg text-sm text-gray-300 hover:text-white hover:border-blue-500/50 hover:from-blue-600/30 hover:to-cyan-600/30 transition-all cursor-default shadow-sm"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <div className="glass rounded-2xl p-8 text-center shadow-xl">
            <div className="flex flex-wrap justify-center gap-8 text-center">
              <div>
                <div className="text-4xl font-bold gradient-text mb-2">
                  {categories.length}
                </div>
                <div className="text-gray-400 text-sm">Skill Categories</div>
              </div>
              <div className="w-px bg-gradient-to-b from-transparent via-blue-500/50 to-transparent"></div>
              <div>
                <div className="text-4xl font-bold gradient-text mb-2">
                  {categories.reduce((acc, [, skills]) => acc + skills.length, 0)}
                </div>
                <div className="text-gray-400 text-sm">Total Skills</div>
              </div>
              <div className="w-px bg-gradient-to-b from-transparent via-blue-500/50 to-transparent"></div>
              <div>
                <div className="text-4xl font-bold gradient-text mb-2">
                  5+
                </div>
                <div className="text-gray-400 text-sm">Years Experience</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
