import React from 'react';
import { motion } from 'framer-motion';
import { ScrollArea } from '@/components/ui/scroll-area';

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
    'VS Code', 'Git', 'Vite', 'CRA (Create React App)',
    'Nodemailer', 'Multer', 'Cloudinary', 'dotenv', 'Postman',
    'Esbuild', 'Vercel', 'Netlify', 'Render', 
    'MongoDB Atlas', 'Helmet', 'CORS', 'Rate Limiting', 'Input Validation'
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

  // Generate realistic GitHub-style contribution data based on your profile
  const generateContributionData = () => {
    const weeks = 53;
    const daysPerWeek = 7;
    const data = [];
    
    // Create base data with no contributions
    for (let week = 0; week < weeks; week++) {
      const weekData = [];
      for (let day = 0; day < daysPerWeek; day++) {
        weekData.push({ level: 0, date: new Date() });
      }
      data.push(weekData);
    }
    
    // Add realistic contribution patterns for 2025 (59 contributions total)
    const contributionPatterns = [
      // Recent activity weeks (2025)
      { weeks: [45, 46, 47, 48, 49, 50, 51, 52], pattern: [0, 1, 2, 3, 2, 1, 0] },
      // Moderate activity weeks
      { weeks: [40, 42, 44], pattern: [1, 1, 0, 2, 1, 0, 0] },
      // Light activity weeks
      { weeks: [35, 38], pattern: [0, 1, 0, 1, 0, 0, 0] },
    ];

    let totalContributions = 0;
    contributionPatterns.forEach(({ weeks, pattern }) => {
      weeks.forEach(weekIndex => {
        if (weekIndex < data.length) {
          pattern.forEach((level, dayIndex) => {
            if (dayIndex < data[weekIndex].length && totalContributions < 59) {
              data[weekIndex][dayIndex].level = level;
              if (level > 0) totalContributions++;
            }
          });
        }
      });
    });
    
    return data;
  };

  const contributionData = generateContributionData();
  const totalContributions = 59; // Your actual 2025 contributions

  // Updated GitHub-accurate contribution colors
  const getContributionColor = (level: number) => {
    switch (level) {
      case 0: return 'bg-gray-100 dark:bg-[#161b22] border-gray-200 dark:border-[#21262d]';
      case 1: return 'bg-[#9be9a8] dark:bg-[#0e4429] border-[#9be9a8] dark:border-[#0e4429]';
      case 2: return 'bg-[#40c463] dark:bg-[#006d32] border-[#40c463] dark:border-[#006d32]';
      case 3: return 'bg-[#30a14e] dark:bg-[#26a641] border-[#30a14e] dark:border-[#26a641]';
      case 4: return 'bg-[#216e39] dark:bg-[#39d353] border-[#216e39] dark:border-[#39d353]';
      default: return 'bg-gray-100 dark:bg-[#161b22] border-gray-200 dark:border-[#21262d]';
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
                    
                    {/* Progress Bar with Gradient */}
                    <div className="w-full bg-gray-200 dark:bg-muted rounded-full h-3 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ 
                          duration: 1.5, 
                          delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.3,
                          ease: "easeOut"
                        }}
                        className="bg-gradient-to-r from-neon-cyan via-neon-blue to-purple-500 h-3 rounded-full relative overflow-hidden shadow-lg"
                        style={{
                          boxShadow: '0 0 10px rgba(0, 255, 255, 0.5)'
                        }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent transform skew-x-12 animate-pulse-slow"></div>
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

        {/* Coding Activity Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-24"
        >
          <h3 className="text-3xl font-bold text-gray-800 dark:text-foreground mb-12 text-center">Coding Activity</h3>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* LeetCode Section */}
            <div className="bg-white/95 dark:bg-white/10 backdrop-blur-sm border border-gray-200 dark:border-white/20 p-8 rounded-2xl hover:shadow-xl dark:hover:shadow-neon-cyan/10 transition-all duration-300 shadow-lg">
              <div className="flex items-center justify-center mb-6">
                <div className="text-4xl mr-4">🚀</div>
                <h4 className="text-2xl font-bold text-gray-800 dark:text-foreground">LeetCode Stats</h4>
              </div>
              
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 dark:text-neon-cyan mb-1">128</div>
                  <div className="text-sm text-gray-600 dark:text-muted-foreground">Total Active Days</div>
                </div>
                
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-500 dark:text-neon-blue mb-1">45</div>
                  <div className="text-sm text-gray-600 dark:text-muted-foreground">Max Streak</div>
                </div>
                
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 dark:text-green-500 mb-1">105</div>
                  <div className="text-sm text-gray-600 dark:text-muted-foreground">Daily Challenges</div>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-200 dark:border-border/50">
                <a 
                  href="https://leetcode.com/u/user5500lq/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-600 dark:text-neon-cyan hover:text-orange-700 dark:hover:text-neon-blue transition-colors text-sm font-medium block text-center"
                >
                  View LeetCode Profile →
                </a>
              </div>
            </div>

            {/* GitHub Contributions Section */}
            <div className="bg-white/95 dark:bg-white/10 backdrop-blur-sm border border-gray-200 dark:border-white/20 p-8 rounded-2xl hover:shadow-xl dark:hover:shadow-neon-cyan/10 transition-all duration-300 shadow-lg">
              <div className="flex items-center justify-center mb-6">
                <div className="text-4xl mr-4">📊</div>
                <h4 className="text-2xl font-bold text-gray-800 dark:text-foreground">GitHub Activity</h4>
              </div>
              
              <div className="text-center mb-6">
                <div className="text-2xl font-bold text-green-600 dark:text-green-500 mb-1">{totalContributions} contributions</div>
                <div className="text-sm text-gray-600 dark:text-muted-foreground">in 2025</div>
              </div>

              {/* GitHub-style contribution graph with horizontal scroll */}
              <div className="mt-8">
                <div className="bg-white/80 dark:bg-black/20 border border-gray-200 dark:border-white/20 rounded-lg p-4 overflow-hidden">
                  <div className="overflow-x-auto overflow-y-hidden scrollbar-custom">
                    <div className="inline-flex flex-col gap-1 min-w-[800px] pb-2">
                      {/* Month labels */}
                      <div className="flex text-xs text-gray-500 dark:text-muted-foreground mb-2 pl-8">
                        <div className="w-3"></div>
                        <div className="flex-1 text-center">Jun</div>
                        <div className="flex-1 text-center">Aug</div>
                        <div className="flex-1 text-center">Oct</div>
                        <div className="flex-1 text-center">Dec</div>
                        <div className="flex-1 text-center">Feb</div>
                        <div className="flex-1 text-center">Apr</div>
                        <div className="flex-1 text-center">Jun</div>
                      </div>
                      
                      {/* Day labels and contribution squares */}
                      {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, dayIndex) => (
                        <div key={day} className="flex items-center gap-1">
                          <div className="w-6 text-xs text-gray-500 dark:text-muted-foreground text-right">
                            {dayIndex % 2 === 1 ? day : ''}
                          </div>
                          <div className="flex gap-1">
                            {contributionData.map((week, weekIndex) => (
                              <div
                                key={weekIndex}
                                className={`w-2.5 h-2.5 rounded-sm border ${getContributionColor(week[dayIndex]?.level || 0)} hover:ring-1 hover:ring-gray-400 dark:hover:ring-white/30 transition-all cursor-pointer`}
                                title={`${week[dayIndex]?.level || 0} contributions`}
                              />
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Legend with GitHub-accurate colors */}
                <div className="flex items-center justify-between text-xs text-gray-500 dark:text-muted-foreground mt-4">
                  <span>Less</span>
                  <div className="flex items-center gap-1">
                    <div className="w-2.5 h-2.5 bg-gray-100 dark:bg-[#161b22] rounded-sm border border-gray-200 dark:border-[#21262d]"></div>
                    <div className="w-2.5 h-2.5 bg-[#9be9a8] dark:bg-[#0e4429] rounded-sm border border-[#9be9a8] dark:border-[#0e4429]"></div>
                    <div className="w-2.5 h-2.5 bg-[#40c463] dark:bg-[#006d32] rounded-sm border border-[#40c463] dark:border-[#006d32]"></div>
                    <div className="w-2.5 h-2.5 bg-[#30a14e] dark:bg-[#26a641] rounded-sm border border-[#30a14e] dark:border-[#26a641]"></div>
                    <div className="w-2.5 h-2.5 bg-[#216e39] dark:bg-[#39d353] rounded-sm border border-[#216e39] dark:border-[#39d353]"></div>
                  </div>
                  <span>More</span>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-200 dark:border-border/50">
                <a 
                  href="https://github.com/JANARTHANA21"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 dark:text-neon-cyan hover:text-gray-900 dark:hover:text-neon-blue transition-colors text-sm font-medium block text-center"
                >
                  View GitHub Profile →
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Global styles for scrollbar using Tailwind classes only */}
      <style>
        {`
          .scrollbar-custom::-webkit-scrollbar {
            height: 8px;
          }
          .scrollbar-custom::-webkit-scrollbar-track {
            background: #f1f5f9;
            border-radius: 4px;
          }
          .dark .scrollbar-custom::-webkit-scrollbar-track {
            background: #1e293b;
          }
          .scrollbar-custom::-webkit-scrollbar-thumb {
            background: #cbd5e1;
            border-radius: 4px;
          }
          .dark .scrollbar-custom::-webkit-scrollbar-thumb {
            background: #475569;
          }
          .scrollbar-custom::-webkit-scrollbar-thumb:hover {
            background: #94a3b8;
          }
          .dark .scrollbar-custom::-webkit-scrollbar-thumb:hover {
            background: #64748b;
          }
        `}
      </style>
    </section>
  );
};

export default Skills;
