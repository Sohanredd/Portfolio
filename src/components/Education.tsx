import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar, Award, BookOpen } from 'lucide-react';
import { education } from '../data/resume';

const Education = () => {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 relative">
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
            <span className="gradient-text">Education</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto rounded-full"></div>
        </motion.div>

        {/* Education Card - Centered */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.02, y: -5 }}
            className="glass rounded-2xl p-8 md:p-10 glass-hover shadow-2xl"
          >
            <div className="flex items-start gap-6 mb-8">
              <div className="flex-shrink-0 w-20 h-20 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center shadow-lg shadow-blue-500/50">
                <GraduationCap className="text-white" size={40} />
              </div>
              <div className="flex-1">
                <h3 className="text-3xl font-bold text-white mb-3">
                  {education.degree}
                </h3>
                <p className="text-2xl text-blue-400 font-semibold mb-4">
                  {education.university}
                </p>
                <div className="flex flex-wrap gap-6 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <Calendar size={18} className="text-blue-400" />
                    <span>{education.period}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={18} className="text-blue-400" />
                    <span>{education.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award size={18} className="text-blue-400" />
                    <span className="font-semibold text-blue-400">GPA: {education.gpa}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Highlights */}
            <div className="mb-8">
              <h4 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <Award size={20} className="text-blue-400" />
                Highlights
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {education.highlights.map((highlight, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 bg-white/5 rounded-lg">
                    <span className="text-blue-400 mt-1 text-lg">▹</span>
                    <p className="text-gray-300 text-sm leading-relaxed">{highlight}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Coursework */}
            <div>
              <h4 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <BookOpen size={20} className="text-blue-400" />
                Key Coursework
              </h4>
              <div className="flex flex-wrap gap-3">
                {education.coursework.map((course, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="px-4 py-2 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-blue-500/30 rounded-lg text-sm text-gray-300 hover:text-white hover:border-blue-500/50 transition-all cursor-default shadow-lg"
                  >
                    {course}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
