
import React from 'react';
import { motion } from 'framer-motion';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'HTML/CSS3', level: 95 },
        { name: 'Bootstrap', level: 65 },
        { name: 'Tailwind CSS', level: 70 },
        { name: 'JavaScript', level: 92 },
        { name: 'React', level: 85 },
        { name: 'Redux', level: 88 },
        { name: 'React Query', level: 83 },
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 88 },
        { name: 'Express.js', level: 90 },
        { name: 'MongoDB', level: 90 },
        { name: 'Mongoose', level: 98 },
        { name: 'REST APIs', level: 90 },
      ]
    }
  ];

  const tools = [
    'VS Code', 'Git', 'Postman', 'Vite', 'CRA (Create React App)',
    'Nodemailer', 'Multer', 'Cloudinary', 'dotenv', 'Esbuild', 
    'Vercel', 'Netlify', 'Render', 'MongoDB Atlas', 'Helmet', 
    'CORS', 'Rate Limiting', 'Input Validation'
  ];

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
    <section id="skills" className="py-20 px-6 bg-gradient-to-br from-background to-background/50">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold gradient-text mb-6"
          >
            Skills & Technologies
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Technologies I love working with and constantly improving
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="glass-card p-8 rounded-2xl hover:neon-glow transition-all duration-300 bg-white/90 dark:bg-white/10 border-slate-200 dark:border-white/20 shadow-lg"
            >
              <h3 className="text-2xl font-bold text-gray-800 dark:text-foreground mb-8 text-center">
                {category.title}
              </h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.6, 
                      delay: categoryIndex * 0.2 + skillIndex * 0.1 
                    }}
                    className="relative"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 dark:text-foreground font-medium">{skill.name}</span>
                      <span className="text-gray-600 dark:text-muted-foreground text-sm">{skill.level}%</span>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="w-full bg-gray-200 dark:bg-muted rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ 
                          duration: 1.5, 
                          delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.3,
                          ease: "easeOut"
                        }}
                        className="bg-gradient-to-r from-neon-cyan to-neon-blue h-2 rounded-full relative overflow-hidden"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform skew-x-12 animate-pulse-slow"></div>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Tools & Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16"
        >
          <h3 className="text-3xl font-bold text-gray-800 dark:text-foreground mb-12 text-center">Tools & Technologies</h3>
          
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {tools.map((tool, index) => (
              <motion.span
                key={tool}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-4 py-2 bg-white/95 dark:bg-white/10 text-gray-700 dark:text-foreground border border-gray-200 dark:border-white/20 rounded-full text-sm font-medium backdrop-blur-sm hover:shadow-lg transition-all duration-300"
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
