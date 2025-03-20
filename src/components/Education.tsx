import React from 'react';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-blue-850 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-900/20"></div>
      <div className="container mx-auto px-4 relative">
        <h2 className="text-4xl font-bold text-center mb-12 text-white bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
          Education Journey
        </h2>
        
        <div className="max-w-4xl mx-auto space-y-12">
          {/* PIAIC Program */}
          <div className="bg-gradient-to-br from-blue-900/60 to-blue-800/40 p-8 rounded-2xl shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-1 transition-all duration-300 border border-blue-600/30 backdrop-blur-lg">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-2xl font-bold text-white">Presidential Initiative for Artificial Intelligence & Computing (PIAIC)</h3>
                <p className="text-xl text-blue-200 mt-2 font-semibold">Artificial Intelligence Program</p>
              </div>
              <span className="px-4 py-2 bg-blue-700/30 rounded-full text-blue-200 font-medium">2024 - Present</span>
            </div>
            <div className="mt-6 text-blue-100">
              <p className="flex items-center space-x-3 group">
                <span className="text-blue-400 text-lg group-hover:text-blue-300 transition-colors">→</span>
                <span className="group-hover:text-white transition-colors">Comprehensive training in AI, including machine learning, deep learning, and data science</span>
              </p>
              <p className="flex items-center space-x-3 mt-3 group">
                <span className="text-blue-400 text-lg group-hover:text-blue-300 transition-colors">→</span>
                <span className="group-hover:text-white transition-colors">Hands-on projects and real-world applications</span>
              </p>
            </div>
          </div>

          {/* Virtual University */}
          <div className="bg-gradient-to-br from-blue-900/60 to-blue-800/40 p-8 rounded-2xl shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-1 transition-all duration-300 border border-blue-600/30 backdrop-blur-lg">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-2xl font-bold text-white">Virtual University</h3>
                <p className="text-xl text-blue-200 mt-2 font-semibold">Software Engineering</p>
              </div>
              <span className="px-4 py-2 bg-blue-700/30 rounded-full text-blue-200 font-medium">2020 - 2024</span>
            </div>
            <div className="mt-6 text-blue-100">
              <p className="flex items-center space-x-3 group">
                <span className="text-blue-400 text-lg group-hover:text-blue-300 transition-colors">→</span>
                <span className="group-hover:text-white transition-colors">Relevant coursework: Computer Science, Data Structures, Algorithms</span>
              </p>
            </div>
          </div>

          {/* Mehran Degree College */}
          <div className="bg-gradient-to-br from-blue-900/60 to-blue-800/40 p-8 rounded-2xl shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-1 transition-all duration-300 border border-blue-600/30 backdrop-blur-lg">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-2xl font-bold text-white">Mehran Degree College</h3>
                <p className="text-xl text-blue-200 mt-2 font-semibold">Pre-Engineering</p>
              </div>
              <span className="px-4 py-2 bg-blue-700/30 rounded-full text-blue-200 font-medium">2018 - 2020</span>
            </div>
            <div className="mt-6 text-blue-100">
              <p className="flex items-center space-x-3 group">
                <span className="text-blue-400 text-lg group-hover:text-blue-300 transition-colors">→</span>
                <span className="group-hover:text-white transition-colors">Chemistry</span>
              </p>
              <p className="flex items-center space-x-3 mt-3 group">
                <span className="text-blue-400 text-lg group-hover:text-blue-300 transition-colors">→</span>
                <span className="group-hover:text-white transition-colors">Mathematics</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
