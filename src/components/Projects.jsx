import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const projects = [
    {
      title: 'TaskBuddy',
      description: 'Full-stack service booking platform with user and provider roles. Implemented JWT-based authentication and role-based authorization. Designed RESTful APIs for booking, payments, and service management. Optimized MySQL queries reducing response time by 30%. Integrated frontend with backend using Axios.',
      tech: ['React', 'Spring Boot', 'MySQL', 'JWT', 'Bootstrap', 'Axios'],
      github: 'https://github.com/cdac-project-task-buddy',
      demo: 'https://front-end-ebon-eight.vercel.app/',
      image: '/projects/taskbuddy.png',
    },
    {
      title: 'IMDb Movie Insights',
      description: 'AI-powered movie analysis tool that fetches IMDb movie details, scrapes audience reviews, and uses AI to generate sentiment analysis and insights. Features responsive design with modern UI/UX.',
      tech: ['Next.js', 'React', 'Bootstrap', 'OpenAI API', 'IMDb API'],
      github: 'https://github.com/yogesh-lovevanshi/ai-movie-insight-builder',
      demo: 'https://ai-movie-insight-builder-yogesh-lov.vercel.app/',
      image: '/projects/movie-insights.png',
    },
    {
      title: 'Online Book Store',
      description: 'Full-stack e-commerce platform for buying and selling books. Features user authentication, shopping cart, order management, and admin dashboard for inventory management with real-time updates.',
      tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
      github: 'https://github.com/yogesh-lovevanshi/online-book-store',
      demo: 'https://github.com/yogesh-lovevanshi/online-book-store',
      image: '/projects/bookstore.png',
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-blue-500/5 to-transparent"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Featured <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            Real-world applications built with modern technologies
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: idx * 0.2 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-800"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-56 object-contain bg-gray-100 dark:bg-gray-800 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6 space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/90 backdrop-blur-sm rounded-xl hover:bg-white transition-all transform hover:scale-110 shadow-lg"
                    >
                      <FiGithub className="text-black" size={22} />
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/90 backdrop-blur-sm rounded-xl hover:bg-white transition-all transform hover:scale-110 shadow-lg"
                    >
                      <FiExternalLink className="text-black" size={22} />
                    </a>
                  </div>
                </div>

                <div className="p-7">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-600 transition-colors">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-5 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-1.5 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium border border-blue-100 dark:border-blue-800"
                      >
                        {tech}
                      </span>
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

export default Projects;
