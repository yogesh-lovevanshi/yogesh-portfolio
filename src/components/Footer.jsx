import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 py-8 px-4 border-t dark:border-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-600 dark:text-gray-400 flex items-center">
              Made with <FiHeart className="text-red-500 mx-2" /> by Yogesh Lovevanshi
            </p>
          </div>

          <div className="flex space-x-6">
            <a
              href="https://github.com/yogesh-lovevanshi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors"
            >
              <FiGithub size={24} />
            </a>
            <a
              href="https://linkedin.com/in/yogesh-lovevanshi-4ba33b22b/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors"
            >
              <FiLinkedin size={24} />
            </a>
            <a
              href="mailto:yogesh11102@gmail.com"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors"
            >
              <FiMail size={24} />
            </a>
          </div>
        </div>

        <div className="text-center mt-6 text-gray-500 dark:text-gray-500 text-sm">
          © {new Date().getFullYear()} Yogesh Lovevanshi. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
