
import React from 'react';
import { motion } from 'framer-motion';

const CodingActivity: React.FC = () => {
  return (
    <section id="coding-activity" className="py-20 px-6 bg-gradient-to-br from-background to-background/50">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-4xl md:text-5xl font-bold gradient-text mb-16 text-center">Coding Activity</h3>
          
          <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {/* LeetCode Profile Section */}
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden shadow-lg">
              {/* LeetCode Header */}
              <div className="bg-gradient-to-r from-orange-500 to-yellow-500 px-6 py-4">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center font-bold text-2xl text-orange-600">
                    J
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white">user5500lq</h4>
                    <p className="text-orange-100">LeetCode Profile</p>
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

            {/* GitHub Profile Section */}
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden shadow-lg">
              {/* GitHub Header */}
              <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center font-bold text-2xl text-white">
                    J
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white">JANARTHANA21</h4>
                    <p className="text-gray-600 dark:text-gray-300">Full Stack Developer</p>
                    <div className="flex items-center space-x-4 mt-2 text-sm text-gray-600 dark:text-gray-400">
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
                  <div className="text-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">12</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Repositories</div>
                  </div>
                  <div className="text-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">5</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Followers</div>
                  </div>
                </div>

                {/* Contributions */}
                <div className="space-y-3">
                  <h5 className="font-semibold text-gray-900 dark:text-white">2025 Contributions</h5>
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-600 dark:text-green-400">59</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">contributions this year</div>
                    </div>
                  </div>
                </div>

                {/* Popular Repositories */}
                <div className="space-y-3">
                  <h5 className="font-semibold text-gray-900 dark:text-white">Popular repositories</h5>
                  <div className="space-y-3">
                    <div className="p-3 border border-gray-200 dark:border-gray-600 rounded-lg">
                      <div className="flex items-center justify-between">
                        <div>
                          <h6 className="font-medium text-blue-600 dark:text-blue-400">portfolio-website</h6>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Personal portfolio built with React and Tailwind</p>
                        </div>
                        <div className="flex items-center space-x-2 text-xs text-gray-600 dark:text-gray-400">
                          <div className="flex items-center space-x-1">
                            <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                            <span>JavaScript</span>
                          </div>
                          <span>⭐ 3</span>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 border border-gray-200 dark:border-gray-600 rounded-lg">
                      <div className="flex items-center justify-between">
                        <div>
                          <h6 className="font-medium text-blue-600 dark:text-blue-400">mern-ecommerce</h6>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Full-stack e-commerce app with MERN stack</p>
                        </div>
                        <div className="flex items-center space-x-2 text-xs text-gray-600 dark:text-gray-400">
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

                <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                  <a 
                    href="https://github.com/JANARTHANA21"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors text-sm font-medium flex items-center justify-center space-x-2"
                  >
                    <span>View GitHub Profile</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
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

export default CodingActivity;
