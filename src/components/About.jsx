import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="about" className="py-20 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            About <span className="text-blue-500">Me</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="space-y-4"
            >
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                I'm a Full Stack Java Developer with hands-on experience building scalable RESTful web applications
                using Spring Boot, MySQL, React.js, and the MERN stack (MongoDB, Express.js, React.js, Node.js).
                Strong knowledge of backend architecture, JWT authentication, API integration, and database optimization.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                I have completed PG-DAC from Sunbeam Institute of Information Technology, Pune-Karad, and
                my B.Tech in Computer Science and Engineering (AIML) from Lakshmi Narain College of Technology, Bhopal.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Passionate about developing high-performance, secure, and user-friendly applications. I love solving
                complex problems and building solutions that make a real impact.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl blur-xl opacity-20"></div>
              <div className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 p-4 md:p-8 rounded-2xl shadow-2xl max-w-full overflow-hidden">
                <div className="space-y-6 md:space-y-8 text-white">
                  <div className="group hover:scale-105 transition-transform duration-300">
                    <div className="flex items-start space-x-3 md:space-x-4">
                      <div className="p-2 md:p-3 bg-white/20 backdrop-blur-sm rounded-xl flex-shrink-0">
                        <div className="text-2xl md:text-3xl">🎯</div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 flex flex-wrap items-center gap-2">
                          Focus Areas
                          <span className="text-xs md:text-sm bg-white/20 px-2 py-1 rounded-full">Core Skills</span>
                        </h3>
                        <p className="text-blue-50 leading-relaxed text-sm md:text-base break-words">
                          Backend Architecture • RESTful APIs • JWT Authentication • Database Optimization • Microservices • Spring Boot • React.js
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="h-px bg-white/20"></div>
                  
                  <div className="group hover:scale-105 transition-transform duration-300">
                    <div className="flex items-start space-x-3 md:space-x-4">
                      <div className="p-2 md:p-3 bg-white/20 backdrop-blur-sm rounded-xl flex-shrink-0">
                        <div className="text-2xl md:text-3xl">💼</div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 flex flex-wrap items-center gap-2">
                          Experience
                          <span className="text-xs md:text-sm bg-white/20 px-2 py-1 rounded-full">3 Months</span>
                        </h3>
                        <p className="text-blue-50 leading-relaxed font-medium text-sm md:text-base">
                          Frontend Developer Intern
                        </p>
                        <p className="text-blue-100 text-xs md:text-sm mt-1">
                          Alphawizz Technology Pvt Ltd • Indore, MP
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="h-px bg-white/20"></div>
                  
                  <div className="group hover:scale-105 transition-transform duration-300">
                    <div className="flex items-start space-x-3 md:space-x-4">
                      <div className="p-2 md:p-3 bg-white/20 backdrop-blur-sm rounded-xl flex-shrink-0">
                        <div className="text-2xl md:text-3xl">📍</div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">Location</h3>
                        <p className="text-blue-50 leading-relaxed font-medium text-sm md:text-base">
                          Pune, Maharashtra, India
                        </p>
                        <p className="text-blue-100 text-xs md:text-sm mt-1">
                          Open to Remote & Relocation
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
