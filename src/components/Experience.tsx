import { motion } from 'framer-motion';
import { Briefcase, MapPin, Calendar, Award, Code } from 'lucide-react';
import { experience } from '../data/resume';

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
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
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
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
          className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
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
              <Briefcase className="text-white" size={32} />
            </div>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-6">
            Building scalable data solutions for enterprise healthcare and Fortune 500 companies
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto rounded-full"></div>
        </motion.div>

        {/* Experience Timeline */}
        <div className="relative max-w-6xl mx-auto">
          {/* Vertical Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-600 via-cyan-600 to-blue-600 opacity-30"></div>

          {/* Experience Items */}
          <div className="space-y-16">
            {experience.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                {/* Timeline Dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                  className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full border-4 border-slate-950 z-10 shadow-lg shadow-blue-500/50"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full animate-ping opacity-75"></div>
                </motion.div>

                {/* Content Card */}
                <div className={`lg:flex lg:gap-8 ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Spacer */}
                  <div className="hidden lg:block lg:w-1/2"></div>
                  
                  {/* Card */}
                  <div className="lg:w-1/2">
                    <motion.div
                      whileHover={{ y: -8, scale: 1.02 }}
                      className="relative group"
                    >
                      {/* Glow Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all opacity-0 group-hover:opacity-100"></div>
                      
                      {/* Main Card */}
                      <div className="relative glass rounded-2xl p-8 glass-hover shadow-2xl border border-white/10 group-hover:border-blue-500/50 transition-all">
                        {/* Header Section */}
                        <div className="flex items-start gap-4 mb-6">
                          <div className="flex-shrink-0">
                            <motion.div
                              whileHover={{ rotate: 360 }}
                              transition={{ duration: 0.6 }}
                              className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center shadow-lg shadow-blue-500/30 group-hover:shadow-blue-500/60 transition-all"
                            >
                              <Briefcase className="text-white" size={28} />
                            </motion.div>
                          </div>
                          <div className="flex-1">
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 leading-tight">
                              {job.role}
                            </h3>
                            <p className="text-xl text-blue-400 font-semibold mb-3">
                              {job.company}
                            </p>
                            <div className="flex flex-wrap gap-4 text-sm">
                              <div className="flex items-center gap-2 text-gray-400">
                                <Calendar size={16} className="text-blue-400" />
                                <span className="font-medium">{job.period}</span>
                              </div>
                              <div className="flex items-center gap-2 text-gray-400">
                                <MapPin size={16} className="text-cyan-400" />
                                <span>{job.location}</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Description */}
                        <div className="mb-6 p-4 bg-white/5 rounded-xl border border-white/10">
                          <p className="text-gray-300 leading-relaxed">
                            {job.description}
                          </p>
                        </div>

                        {/* Key Achievements */}
                        <div className="mb-6">
                          <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                            <Award size={20} className="text-blue-400" />
                            Key Achievements
                          </h4>
                          <div className="space-y-3">
                            {job.achievements.map((achievement, i) => (
                              <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.2 + i * 0.1 }}
                                className="flex items-start gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-all group/item"
                              >
                                <span className="text-blue-400 mt-1 text-lg font-bold group-hover/item:scale-125 transition-transform">▹</span>
                                <p className="text-gray-400 text-sm leading-relaxed flex-1">
                                  {achievement}
                                </p>
                              </motion.div>
                            ))}
                          </div>
                        </div>

                        {/* Technologies */}
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                            <Code size={20} className="text-cyan-400" />
                            Technologies & Tools
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {job.technologies.map((tech, i) => (
                              <motion.span
                                key={i}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: index * 0.2 + i * 0.05 }}
                                whileHover={{ scale: 1.1, y: -2 }}
                                className="px-4 py-2 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-blue-500/30 rounded-lg text-sm text-gray-300 hover:text-white hover:border-blue-500/50 hover:from-blue-600/30 hover:to-cyan-600/30 transition-all cursor-default shadow-sm font-medium"
                              >
                                {tech}
                              </motion.span>
                            ))}
                          </div>
                        </div>

                        {/* Current Role Badge */}
                        {index === 0 && (
                          <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                            className="absolute -top-3 -right-3"
                          >
                            <div className="px-4 py-2 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full text-xs font-bold text-white shadow-lg shadow-green-500/50 flex items-center gap-2">
                              <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                              Current Role
                            </div>
                          </motion.div>
                        )}
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Experience Summary */}
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
                  {experience.length}
                </div>
                <div className="text-gray-400 text-sm">Positions</div>
              </div>
              <div className="w-px bg-gradient-to-b from-transparent via-blue-500/50 to-transparent"></div>
              <div>
                <div className="text-4xl font-bold gradient-text mb-2">
                  3+
                </div>
                <div className="text-gray-400 text-sm">Years Experience</div>
              </div>
              <div className="w-px bg-gradient-to-b from-transparent via-blue-500/50 to-transparent"></div>
              <div>
                <div className="text-4xl font-bold gradient-text mb-2">
                  Fortune 500
                </div>
                <div className="text-gray-400 text-sm">Clients</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
