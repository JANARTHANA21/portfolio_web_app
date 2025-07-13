
import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Globe, Smartphone, Cloud, Zap } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: Globe,
      skills: [
        { name: 'React', level: 95 },
        { name: 'JavaScript', level: 92 },
        { name: 'TypeScript', level: 88 },
        { name: 'HTML/CSS', level: 95 },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'Next.js', level: 85 }
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Backend',
      icon: Database,
      skills: [
        { name: 'Node.js', level: 88 },
        { name: 'Python', level: 82 },
        { name: 'PostgreSQL', level: 80 },
        { name: 'MongoDB', level: 85 },
        { name: 'REST APIs', level: 90 },
        { name: 'GraphQL', level: 75 }
      ],
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Mobile',
      icon: Smartphone,
      skills: [
        { name: 'React Native', level: 80 },
        { name: 'Flutter', level: 70 },
        { name: 'iOS (Swift)', level: 65 },
        { name: 'Android', level: 68 }
      ],
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'DevOps & Cloud',
      icon: Cloud,
      skills: [
        { name: 'AWS', level: 78 },
        { name: 'Docker', level: 82 },
        { name: 'Kubernetes', level: 70 },
        { name: 'CI/CD', level: 85 },
        { name: 'Linux', level: 80 }
      ],
      color: 'from-orange-500 to-red-500'
    }
  ];

  const tools = [
    'VS Code', 'Git', 'Figma', 'Postman', 'Jira', 'Slack',
    'Webpack', 'Vite', 'ESLint', 'Prettier', 'Jest', 'Cypress'
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
    <section id="skills" className="py-20 px-6 bg-white/50 dark:bg-background/50">
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
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 dark:from-neon-cyan dark:to-neon-blue bg-clip-text text-transparent mb-6"
          >
            Skills & Expertise
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 dark:text-muted-foreground max-w-3xl mx-auto"
          >
            Technologies and tools I work with to bring ideas to life
          </motion.p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="bg-white/90 dark:bg-white/10 backdrop-blur-sm border border-gray-200 dark:border-white/20 rounded-2xl p-8 hover:shadow-xl dark:hover:shadow-neon-cyan/10 transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} mr-4`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-foreground">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 dark:text-foreground font-medium">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                        className={`h-2 rounded-full bg-gradient-to-r ${category.color}`}
                      />
                    </div>
                  </div>
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
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-gray-800 dark:text-foreground mb-8">
            Tools & Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {tools.map((tool, index) => (
              <motion.span
                key={tool}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-4 py-2 bg-white/90 dark:bg-white/10 text-gray-700 dark:text-foreground border border-gray-200 dark:border-white/20 rounded-full text-sm font-medium backdrop-blur-sm hover:shadow-lg transition-all duration-300"
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
