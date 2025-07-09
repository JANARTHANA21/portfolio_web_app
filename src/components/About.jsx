
import React from 'react';
import { motion } from 'framer-motion';
import { Code, Lightbulb, Users, Zap } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable code with best practices'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Always exploring new technologies and creative solutions'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Strong team player with excellent communication skills'
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Optimizing applications for speed and user experience'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
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
    <section id="about" className="py-20 px-6">
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
            About Me
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Passionate developer with a love for creating exceptional digital experiences
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-foreground mb-4">My Journey</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Started my coding journey in 2019 with a curiosity about how websites work. 
                  What began as a hobby quickly became a passion as I discovered the power 
                  of creating solutions that impact people's lives.
                </p>
                <p>
                  Over the years, I've developed expertise in modern web technologies, 
                  focusing on React, Node.js, and cloud platforms. I love the challenge 
                  of turning complex problems into elegant, user-friendly solutions.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new technologies, 
                  contributing to open source projects, or sharing knowledge with the 
                  developer community.
                </p>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="glass-card p-6 rounded-2xl"
            >
              <h4 className="text-lg font-semibold text-foreground mb-4">Quick Timeline</h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-neon-cyan rounded-full"></div>
                  <span className="text-muted-foreground">2024 - Senior Full Stack Developer</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-neon-blue rounded-full"></div>
                  <span className="text-muted-foreground">2022 - Full Stack Developer</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <span className="text-muted-foreground">2020 - Frontend Developer</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
                  <span className="text-muted-foreground">2019 - Started Learning</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-6"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass-card p-6 rounded-xl text-center group hover:neon-glow transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-lg bg-gradient-to-r from-neon-cyan to-neon-blue">
                  <highlight.icon className="w-6 h-6 text-black" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">
                  {highlight.title}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {highlight.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
