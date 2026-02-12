import { motion } from 'framer-motion';
import { Award, ExternalLink, CheckCircle, Calendar } from 'lucide-react';
import { certifications } from '../data/resume';

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-1/4 -right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -bottom-1/4 -left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
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
              <Award className="text-white" size={32} />
            </div>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Professional <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-6">
            Industry-recognized certifications demonstrating expertise and commitment to excellence
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto rounded-full"></div>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -12, scale: 1.03 }}
              className="relative group"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all opacity-0 group-hover:opacity-100"></div>
              
              {/* Card */}
              <div className="relative glass rounded-2xl p-8 glass-hover shadow-2xl border border-white/10 group-hover:border-blue-500/50 transition-all h-full flex flex-col">
                {/* Badge/Icon */}
                <div className="flex items-center justify-center mb-6">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center shadow-lg shadow-blue-500/50 group-hover:shadow-blue-500/80 transition-all"
                  >
                    <Award className="text-white" size={40} />
                  </motion.div>
                </div>

                {/* Certification Name */}
                <h3 className="text-xl font-bold text-white mb-3 text-center leading-tight min-h-[3.5rem] flex items-center justify-center">
                  {cert.name}
                </h3>

                {/* Issuer & Date */}
                <div className="space-y-2 mb-6 flex-grow">
                  <div className="flex items-center justify-center gap-2 text-gray-400">
                    <CheckCircle size={16} className="text-blue-400 flex-shrink-0" />
                    <p className="text-center font-medium">{cert.issuer}</p>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-gray-500 text-sm">
                    <Calendar size={14} className="text-cyan-400 flex-shrink-0" />
                    <p>{cert.date}</p>
                  </div>
                </div>

                {/* Credential Link */}
                {cert.credentialUrl && (
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 rounded-xl text-sm font-semibold text-white transition-all w-full shadow-lg hover:shadow-blue-500/50 group-hover:shadow-xl"
                  >
                    <ExternalLink size={18} />
                    View Credential
                  </motion.a>
                )}

                {/* Verified Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 + 0.3 }}
                  className="absolute top-4 right-4"
                >
                  <div className="w-8 h-8 rounded-full bg-green-500/20 border border-green-500/50 flex items-center justify-center">
                    <CheckCircle size={16} className="text-green-400" />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 max-w-3xl mx-auto"
        >
          <div className="glass rounded-2xl p-8 text-center shadow-xl">
            <h4 className="text-2xl font-bold text-white mb-4">
              Commitment to Excellence
            </h4>
            <p className="text-gray-400 leading-relaxed">
              Continuously pursuing professional development and staying current with industry best practices 
              through certifications, training, and hands-on experience with cutting-edge technologies.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
