
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

        {/* Enhanced Coding Activity Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-24"
        >
          <h3 className="text-3xl font-bold text-gray-800 dark:text-foreground mb-12 text-center">Coding Activity</h3>
          
          <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {/* Enhanced LeetCode Profile Section */}
            <div className="bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden shadow-lg">
              {/* LeetCode Header */}
              <div className="bg-gradient-to-r from-orange-500 to-yellow-500 px-6 py-4">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center font-bold text-2xl text-orange-600">
                    J
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white">user5500lq</h4>
                    <p className="text-orange-100">Rank 1,234,567</p>
                  </div>
                </div>
              </div>

              {/* LeetCode Stats */}
              <div className="p-6 space-y-6">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                    <div className="text-2xl font-bold text-green-600 dark:text-green-400">57</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Solved</div>
                  </div>
                  <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                    <div className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">25</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Easy</div>
                  </div>
                  <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                    <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">32</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Medium</div>
                  </div>
                </div>

                {/* Problem Solving Progress */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Easy</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">25/826</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '3%' }}></div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Medium</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">32/1735</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '2%' }}></div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Hard</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">0/735</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className="bg-red-500 h-2 rounded-full" style={{ width: '0%' }}></div>
                  </div>
                </div>

                {/* Badges */}
                <div className="space-y-3">
                  <h5 className="font-semibold text-gray-800 dark:text-gray-200">Badges</h5>
                  <div className="flex flex-wrap gap-2">
                    <div className="flex items-center space-x-2 bg-orange-100 dark:bg-orange-900/30 px-3 py-1 rounded-full">
                      <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
                      <span className="text-sm text-orange-700 dark:text-orange-300">50 Days Badge 2024</span>
                    </div>
                    <div className="flex items-center space-x-2 bg-blue-100 dark:bg-blue-900/30 px-3 py-1 rounded-full">
                      <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                      <span className="text-sm text-blue-700 dark:text-blue-300">Annual Badge 2024</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                  <a 
                    href="https://leetcode.com/u/user5500lq/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300 transition-colors text-sm font-medium flex items-center justify-center space-x-2"
                  >
                    <span>View Full Profile</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Enhanced GitHub Profile Section */}
            <div className="bg-white dark:bg-[#0d1117] border border-gray-200 dark:border-[#30363d] rounded-lg overflow-hidden shadow-lg">
              {/* GitHub Header */}
              <div className="p-6 border-b border-gray-200 dark:border-[#30363d]">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center font-bold text-2xl text-white">
                    J
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-[#f0f6fc]">JANARTHANA21</h4>
                    <p className="text-gray-600 dark:text-[#7d8590]">Full Stack Developer</p>
                    <div className="flex items-center space-x-4 mt-2 text-sm text-gray-600 dark:text-[#7d8590]">
                      <span className="flex items-center space-x-1">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        <span>India</span>
                      </span>
                      <span>Joined Dec 2021</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* GitHub Stats */}
              <div className="p-6 space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-gray-50 dark:bg-[#161b22] rounded-lg">
                    <div className="text-2xl font-bold text-gray-900 dark:text-[#f0f6fc]">12</div>
                    <div className="text-sm text-gray-600 dark:text-[#7d8590]">Repositories</div>
                  </div>
                  <div className="text-center p-3 bg-gray-50 dark:bg-[#161b22] rounded-lg">
                    <div className="text-2xl font-bold text-gray-900 dark:text-[#f0f6fc]">5</div>
                    <div className="text-sm text-gray-600 dark:text-[#7d8590]">Followers</div>
                  </div>
                </div>

                {/* Contribution Graph */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h5 className="font-semibold text-gray-900 dark:text-[#f0f6fc]">
                      {totalContributions} contributions in 2025
                    </h5>
                    <span className="text-sm text-gray-600 dark:text-[#7d8590]">Learn how we count contributions</span>
                  </div>

                  {/* GitHub-style contribution graph */}
                  <div className="bg-white dark:bg-[#0d1117] border border-gray-200 dark:border-[#30363d] rounded-lg p-4">
                    <div className="overflow-x-auto">
                      <div className="inline-flex flex-col gap-1 min-w-[800px]">
                        {/* Month labels */}
                        <div className="flex text-xs text-gray-500 dark:text-[#7d8590] mb-2 pl-8">
                          <div className="w-3"></div>
                          <div className="flex-1 text-center">Jan</div>
                          <div className="flex-1 text-center">Mar</div>
                          <div className="flex-1 text-center">May</div>
                          <div className="flex-1 text-center">Jul</div>
                          <div className="flex-1 text-center">Sep</div>
                          <div className="flex-1 text-center">Nov</div>
                        </div>
                        
                        {/* Contribution squares */}
                        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, dayIndex) => (
                          <div key={day} className="flex items-center gap-1">
                            <div className="w-6 text-xs text-gray-500 dark:text-[#7d8590] text-right">
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

                    {/* Legend */}
                    <div className="flex items-center justify-between text-xs text-gray-500 dark:text-[#7d8590] mt-3">
                      <span>Less</span>
                      <div className="flex items-center gap-1">
                        <div className="w-2.5 h-2.5 bg-gray-100 dark:bg-[#161b22] rounded-sm border border-gray-200 dark:border-[#21262d]"></div>
                        <div className="w-2.5 h-2.5 bg-[#9be9a8] dark:bg-[#0e4429] rounded-sm"></div>
                        <div className="w-2.5 h-2.5 bg-[#40c463] dark:bg-[#006d32] rounded-sm"></div>
                        <div className="w-2.5 h-2.5 bg-[#30a14e] dark:bg-[#26a641] rounded-sm"></div>
                        <div className="w-2.5 h-2.5 bg-[#216e39] dark:bg-[#39d353] rounded-sm"></div>
                      </div>
                      <span>More</span>
                    </div>
                  </div>
                </div>

                {/* Popular Repositories */}
                <div className="space-y-3">
                  <h5 className="font-semibold text-gray-900 dark:text-[#f0f6fc]">Popular repositories</h5>
                  <div className="space-y-3">
                    <div className="p-3 border border-gray-200 dark:border-[#30363d] rounded-lg">
                      <div className="flex items-center justify-between">
                        <div>
                          <h6 className="font-medium text-blue-600 dark:text-blue-400">portfolio-website</h6>
                          <p className="text-sm text-gray-600 dark:text-[#7d8590] mt-1">Personal portfolio built with React and Tailwind</p>
                        </div>
                        <div className="flex items-center space-x-2 text-xs text-gray-600 dark:text-[#7d8590]">
                          <div className="flex items-center space-x-1">
                            <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                            <span>JavaScript</span>
                          </div>
                          <span>⭐ 3</span>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 border border-gray-200 dark:border-[#30363d] rounded-lg">
                      <div className="flex items-center justify-between">
                        <div>
                          <h6 className="font-medium text-blue-600 dark:text-blue-400">mern-ecommerce</h6>
                          <p className="text-sm text-gray-600 dark:text-[#7d8590] mt-1">Full-stack e-commerce app with MERN stack</p>
                        </div>
                        <div className="flex items-center space-x-2 text-xs text-gray-600 dark:text-[#7d8590]">
                          <div className="flex items-center space-x-1">
                            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                            <span>Node.js</span>
                          </div>
                          <span>⭐ 7</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200 dark:border-[#30363d]">
                  <a 
                    href="https://github.com/JANARTHANA21"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors text-sm font-medium flex items-center justify-center space-x-2"
                  >
                    <span>View GitHub Profile</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
