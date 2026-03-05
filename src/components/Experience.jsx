import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const timeline = [
    {
      year: '2025-2026',
      title: 'PG-DAC at Sunbeam Institute',
      description: 'Post Graduate Diploma in Advanced Computing from Sunbeam Institute of Information Technology, Pune-Karad',
      icon: '🎓',
    },
    {
      year: 'Aug-Oct 2024',
      title: 'Frontend Developer Intern',
      description: 'Alphawizz Technology Pvt Ltd - Developed responsive UI components, integrated REST APIs, and optimized performance',
      icon: '💼',
    },
    {
      year: 'May-Aug 2024',
      title: 'Wipro TalentNext Certification',
      description: 'Java Full Stack Development - Core Java, JDBC, Servlets, JSP, and full-stack fundamentals',
      icon: '📜',
    },
    {
      year: '2021-2025',
      title: 'B.Tech in CSE (AIML)',
      description: 'Lakshmi Narain College of Technology, Bhopal - Computer Science and Engineering with AIML specialization',
      icon: '🎓',
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Education & <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            My academic and professional journey
          </p>

          <div className="relative">
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500"></div>

            {timeline.map((item, idx) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: idx * 0.2 }}
                className="relative mb-12 last:mb-0"
              >
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className={`w-full md:w-5/12 ${idx % 2 === 0 ? 'md:text-right' : 'md:order-2 md:text-left'}`}>
                    <div className="group bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-800 hover:scale-105 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <div className="relative z-10">
                        <span className="text-4xl mb-3 block">{item.icon}</span>
                        <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-600 transition-colors">{item.title}</h3>
                        <p className="text-blue-600 dark:text-blue-400 font-semibold mb-3 text-sm">{item.year}</p>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </div>

                  <div className="hidden md:flex w-2/12 justify-center">
                    <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full border-4 border-white dark:border-gray-800 shadow-lg z-10"></div>
                  </div>

                  <div className={`hidden md:block w-5/12 ${idx % 2 === 0 ? 'md:order-2' : ''}`}></div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
