import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaJava, FaGitAlt, FaGithub, FaBootstrap, FaNodeJs } from 'react-icons/fa';
import { SiExpress, SiMongodb, SiMysql, SiPostman, SiSpringboot } from 'react-icons/si';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React.js', icon: <FaReact className="text-cyan-400" /> },
        { name: 'HTML5', icon: <FaHtml5 className="text-orange-500" /> },
        { name: 'CSS3', icon: <FaCss3Alt className="text-blue-500" /> },
        { name: 'JavaScript', icon: <FaJs className="text-yellow-400" /> },
        { name: 'Bootstrap', icon: <FaBootstrap className="text-purple-600" /> },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Core Java', icon: <FaJava className="text-red-500" /> },
        { name: 'Spring Boot', icon: <SiSpringboot className="text-green-600" /> },
        { name: 'Spring Security', icon: <SiSpringboot className="text-green-700" /> },
        { name: 'Hibernate', icon: <FaJava className="text-orange-600" /> },
        { name: 'Node.js', icon: <FaNodeJs className="text-green-500" /> },
        { name: 'Express.js', icon: <SiExpress className="text-gray-600 dark:text-gray-300" /> },
        { name: 'REST APIs', icon: <SiExpress className="text-gray-600 dark:text-gray-300" /> },
      ],
    },
    {
      title: 'Database',
      skills: [
        { name: 'MySQL', icon: <SiMysql className="text-blue-600" /> },
        { name: 'MongoDB', icon: <SiMongodb className="text-green-500" /> },
      ],
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git', icon: <FaGitAlt className="text-orange-600" /> },
        { name: 'GitHub', icon: <FaGithub className="text-gray-800 dark:text-white" /> },
        { name: 'Postman', icon: <SiPostman className="text-orange-500" /> },
        { name: 'Swagger', icon: <FaGithub className="text-green-600" /> },
        { name: 'JWT', icon: <FaJava className="text-blue-600" /> },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, idx) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-800 overflow-hidden"
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-center mb-6">
                    <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl shadow-lg">
                      <h3 className="text-xl font-bold text-white">
                        {category.title}
                      </h3>
                    </div>
                  </div>
                  <div className="space-y-4">
                    {category.skills.map((skill) => (
                      <motion.div
                        key={skill.name}
                        whileHover={{ x: 8, scale: 1.05 }}
                        className="flex items-center space-x-4 p-3 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 dark:hover:from-blue-900/20 dark:hover:to-purple-900/20 transition-all duration-300 cursor-pointer"
                      >
                        <div className="text-4xl group-hover:scale-110 transition-transform duration-300">{skill.icon}</div>
                        <span className="text-lg font-medium">{skill.name}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
