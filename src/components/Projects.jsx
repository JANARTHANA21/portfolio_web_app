
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Filter } from 'lucide-react';

const Projects = () => {
  const [filter, setFilter] = useState('All');

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A modern e-commerce platform with React, Node.js, and Stripe integration. Features include real-time inventory, user authentication, and admin dashboard.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      category: 'Full Stack',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      demo: 'https://demo.com',
      github: 'https://github.com'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
      category: 'Frontend',
      tech: ['React', 'JavaScript', 'Tailwind', 'Firebase'],
      demo: 'https://demo.com',
      github: 'https://github.com'
    },
    {
      id: 3,
      title: 'Weather Analytics Dashboard',
      description: 'Data visualization dashboard showing weather patterns and analytics with interactive charts and real-time data updates.',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop',
      category: 'Frontend',
      tech: ['React', 'D3.js', 'REST API', 'Recharts'],
      demo: 'https://demo.com',
      github: 'https://github.com'
    },
    {
      id: 4,
      title: 'Social Media API',
      description: 'RESTful API for social media platform with user authentication, post management, and real-time messaging capabilities.',
      image: 'https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=600&h=400&fit=crop',
      category: 'Backend',
      tech: ['Node.js', 'Express', 'MongoDB', 'Socket.io'],
      demo: 'https://demo.com',
      github: 'https://github.com'
    },
    {
      id: 5,
      title: 'AI Content Generator',
      description: 'Full-stack application leveraging AI APIs to generate content with user-friendly interface and content management system.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
      category: 'Full Stack',
      tech: ['React', 'OpenAI API', 'PostgreSQL', 'Prisma'],
      demo: 'https://demo.com',
      github: 'https://github.com'
    },
    {
      id: 6,
      title: 'Portfolio Website',
      description: 'Interactive 3D portfolio website with animations, particle systems, and responsive design built with modern technologies.',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop',
      category: 'Frontend',
      tech: ['React', 'Three.js', 'Framer Motion', 'Tailwind'],
      demo: 'https://demo.com',
      github: 'https://github.com'
    }
  ];

  const categories = ['All', 'Full Stack', 'Frontend', 'Backend'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="projects" className="py-20 px-6 bg-white/50 dark:bg-background">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 dark:from-neon-cyan dark:to-neon-blue bg-clip-text text-transparent mb-6"
          >
            Featured Projects
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 dark:text-muted-foreground max-w-3xl mx-auto mb-8"
          >
            A showcase of my latest work and creative solutions
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter(category)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 border ${
                  filter === category
                    ? 'bg-gradient-to-r from-gray-800 to-gray-700 dark:from-neon-cyan dark:to-neon-blue text-white dark:text-black border-gray-800 dark:border-neon-cyan'
                    : 'bg-white/80 dark:bg-white/10 text-gray-700 dark:text-foreground hover:text-gray-900 dark:hover:text-neon-cyan border-gray-200 dark:border-white/20 backdrop-blur-sm'
                }`}
              >
                <Filter className="inline-block w-4 h-4 mr-2" />
                {category}
              </motion.button>
            ))}
          </motion.div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="bg-white/90 dark:bg-white/10 backdrop-blur-sm border border-gray-200 dark:border-white/20 rounded-2xl overflow-hidden group hover:shadow-xl dark:hover:shadow-neon-cyan/10 transition-all duration-300 shadow-lg"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-orange-500 dark:hover:bg-neon-cyan hover:text-black transition-colors duration-300"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-gray-800 dark:hover:bg-neon-blue hover:text-white dark:hover:text-black transition-colors duration-300"
                    >
                      <Github className="w-5 h-5" />
                    </motion.a>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-foreground">{project.title}</h3>
                    <span className="text-xs px-2 py-1 bg-orange-100 dark:bg-neon-cyan/20 text-orange-700 dark:text-neon-cyan rounded-full">
                      {project.category}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 dark:text-muted-foreground text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-1 bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-foreground rounded border border-gray-200 dark:border-white/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-white/90 dark:bg-white/10 text-gray-700 dark:text-foreground font-semibold rounded-lg border border-gray-200 dark:border-white/20 hover:border-orange-400 dark:hover:border-neon-cyan/50 transition-all duration-300 backdrop-blur-sm shadow-lg hover:shadow-xl"
          >
            <Github className="w-5 h-5 mr-2" />
            View All Projects on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
