import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiDownload } from 'react-icons/fi';

const Resume = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="resume" className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Download My <span className="text-blue-500">Resume</span>
          </h2>

          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Get a detailed overview of my skills, experience, and projects. Download my resume to learn more about my professional background.
          </p>

          <motion.a
            href="/Yogesh_Lovevanshi_Resume.pdf"
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <FiDownload size={24} />
            <span className="text-lg font-semibold">Download Resume</span>
          </motion.a>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="mt-12 grid md:grid-cols-3 gap-6"
          >
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg">
              <h3 className="text-3xl font-bold text-blue-500 mb-2">3+</h3>
              <p className="text-gray-600 dark:text-gray-400">Projects Completed</p>
            </div>
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg">
              <h3 className="text-3xl font-bold text-blue-500 mb-2">10+</h3>
              <p className="text-gray-600 dark:text-gray-400">Technologies</p>
            </div>
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg">
              <h3 className="text-3xl font-bold text-blue-500 mb-2">3 Months</h3>
              <p className="text-gray-600 dark:text-gray-400">Internship Experience</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
