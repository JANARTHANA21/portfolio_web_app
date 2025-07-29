
import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Download, Mail, Github, Linkedin } from 'lucide-react';
import ThreeDHero from './ThreeDHero';
import ParticlesBackground from './ParticlesBackground';

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticlesBackground />
      
      <div className="absolute inset-0 opacity-40 z-0">
        <ThreeDHero />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-transparent to-background/30 z-5" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-xl text-muted-foreground font-mono backdrop-blur-sm"
          >
            Hello, I'm
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-4xl md:text-7xl font-bold gradient-text mb-4 drop-shadow-2xl"
            style={{
              textShadow: '0 0 30px rgba(0, 255, 255, 0.5), 0 0 60px rgba(0, 153, 255, 0.3)'
            }}
          >
            JANARTHANA
          </motion.h1>

          <div className="text-2xl md:text-4xl font-semibold text-foreground h-16 flex items-center justify-center">
            <TypeAnimation
              sequence={[
                'Full Stack Developer',
                2000,
                'Problem Solver',
                2000,
                'Tech Explorer',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="gradient-text drop-shadow-lg"
            />
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed backdrop-blur-sm bg-background/10 rounded-lg p-4"
          >
            I craft beautiful, interactive web experiences with modern technologies. 
            Passionate about creating solutions that make a difference.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8"
          >
            <motion.button
              whileHover={{ 
                scale: 1.05, 
                boxShadow: '0 0 40px rgba(0, 255, 255, 0.6)',
                y: -2
              }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToProjects}
              className="px-8 py-4 bg-gradient-to-r from-neon-cyan to-neon-blue text-black font-semibold rounded-lg shadow-2xl hover:shadow-xl transition-all duration-300 backdrop-blur-sm"
            >
              View My Work
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToContact}
              className="px-8 py-4 glass-card neon-glow text-foreground font-semibold rounded-lg border border-white/30 hover:border-neon-cyan/70 transition-all duration-300 backdrop-blur-md"
            >
              <Mail className="inline-block w-5 h-5 mr-2" />
              Contact Me
            </motion.button>

            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="/final_Jana_resume1.pdf"
              download
              className="px-8 py-4 glass-card text-foreground font-semibold rounded-lg border border-white/30 hover:border-neon-blue/70 transition-all duration-300 backdrop-blur-md"
            >
              <Download className="inline-block w-5 h-5 mr-2" />
              Resume
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
            className="flex justify-center space-x-6 mt-8"
          >
            {[
              { icon: Github, href: 'https://github.com/JANARTHANA21', label: 'GitHub' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/janarthana21/', label: 'LinkedIn' },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                whileHover={{ 
                  scale: 1.2, 
                  y: -5,
                  boxShadow: '0 10px 25px rgba(0, 255, 255, 0.3)'
                }}
                whileTap={{ scale: 0.9 }}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass-card rounded-full text-muted-foreground hover:text-neon-cyan transition-all duration-300 backdrop-blur-md border border-white/20"
                aria-label={label}
              >
                <Icon className="w-6 h-6" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
