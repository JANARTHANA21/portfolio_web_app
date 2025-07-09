
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Palette, 
  Database, 
  Globe, 
  Smartphone, 
  Zap,
  Monitor,
  Server,
  GitBranch,
  Layers
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Monitor,
      skills: [
        { name: 'React', level: 95, color: 'from-blue-500 to-cyan-500' },
        { name: 'JavaScript', level: 92, color: 'from-yellow-400 to-orange-500' },
        { name: 'TypeScript', level: 88, color: 'from-blue-600 to-blue-400' },
        { name: 'Tailwind CSS', level: 90, color: 'from-teal-400 to-blue-500' },
        { name: 'HTML/CSS', level: 95, color: 'from-orange-500 to-red-500' },
      ]
    },
    {
      title: 'Backend Development',
      icon: Server,
      skills: [
        { name: 'Node.js', level: 85, color: 'from-green-500 to-green-400' },
        { name: 'Express.js', level: 80, color: 'from-gray-600 to-gray-500' },
        { name: 'Python', level: 78, color: 'from-blue-500 to-yellow-500' },
        { name: 'REST APIs', level: 88, color: 'from-purple-500 to-pink-500' },
        { name: 'GraphQL', level: 75, color: 'from-pink-500 to-purple-500' },
      ]
    },
    {
      title: 'Database & Cloud',
      icon: Database,
      skills: [
        { name: 'MongoDB', level: 82, color: 'from-green-600 to-green-500' },
        { name: 'PostgreSQL', level: 78, color: 'from-blue-600 to-blue-500' },
        { name: 'Firebase', level: 85, color: 'from-yellow-500 to-orange-500' },
        { name: 'AWS', level: 72, color: 'from-orange-500 to-yellow-500' },
        { name: 'Docker', level: 70, color: 'from-blue-500 to-cyan-500' },
      ]
    },
    {
      title: 'Tools & Others',
      icon: Zap,
      skills: [
        { name: 'Git/GitHub', level: 90, color: 'from-gray-800 to-gray-600' },
        { name: 'VS Code', level: 95, color: 'from-blue-600 to-blue-500' },
        { name: 'Figma', level: 80, color: 'from-purple-500 to-pink-500' },
        { name: 'Webpack', level: 75, color: 'from-blue-400 to-cyan-400' },
        { name: 'Testing', level: 73, color: 'from-green-500 to-teal-500' },
      ]
    }
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
    <section id="skills" className="py-20 px-6 bg-background/50">
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
            Skills & Expertise
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Technologies I work with to bring ideas to life
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="grid md:grid-cols-2 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="glass-card p-8 rounded-2xl hover:neon-glow transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gradient-to-r from-neon-cyan to-neon-blue rounded-lg mr-4">
                  <category.icon className="w-6 h-6 text-black" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.5, 
                      delay: categoryIndex * 0.1 + skillIndex * 0.05 
                    }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-foreground font-medium">{skill.name}</span>
                      <span className="text-muted-foreground text-sm">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ 
                          duration: 1.2, 
                          delay: categoryIndex * 0.2 + skillIndex * 0.1,
                          ease: "easeOut"
                        }}
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="glass-card p-8 rounded-2xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">Always Learning</h3>
            <p className="text-muted-foreground mb-6">
              Technology evolves rapidly, and so do I. Currently exploring AI/ML integration, 
              Web3 technologies, and advanced cloud architectures to stay ahead of the curve.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {['Next.js', 'Svelte', 'Rust', 'Kubernetes', 'Machine Learning', 'Web3'].map((tech) => (
                <motion.span
                  key={tech}
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 bg-gradient-to-r from-neon-cyan/20 to-neon-blue/20 text-foreground rounded-full text-sm border border-neon-cyan/30"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
