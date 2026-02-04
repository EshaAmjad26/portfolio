import React from "react";

const Education = () => {
  return (
    <section id="education" className="py-20 bg-gradient-to-b from-purple-900/5 to-black relative">
      <div className="container mx-auto px-4">
        <h2 className="text-6xl font-bold text-center mb-16">
          <span className="text-purple-300/90">
            Education Journey
          </span>
        </h2>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Bachelor Degree */}
          <div className="p-8 border border-purple-500/10 bg-gradient-to-br from-black/60 to-purple-900/10 backdrop-blur-sm hover:border-purple-400/20 hover:shadow-lg hover:shadow-purple-500/10 hover:-translate-y-2 transition-all duration-300 rounded-xl">
            <div className="flex justify-between items-start flex-wrap gap-4">
              <div>
                <h3 className="text-2xl font-bold text-white">
                  Lahore College for Women University (LCWU)
                </h3>
                <p className="text-lg text-purple-200/80 mt-2">
                  Bachelor of Computer Science (BSCS)
                </p>
              </div>

              <span className="px-4 py-2 border border-purple-500/10 bg-gradient-to-r from-purple-600/15 to-purple-400/15 text-gray-300 font-medium rounded-lg">
                2021 - 2025
              </span>
            </div>

            <div className="mt-6 text-gray-300 space-y-2">
              <p className="flex items-start">
                <span className="text-purple-300/70 mr-3">→</span>
                <span>
                  Focused on Artificial Intelligence, Programming & Software
                  Development
                </span>
              </p>

              <p className="flex items-start">
                <span className="text-purple-300/70 mr-3">→</span>
                <span>
                  Final Year Project: PyMentorBot (AI-powered learning
                  assistant)
                </span>
              </p>
            </div>
          </div>

          {/* Intermediate */}
          <div className="p-8 border border-purple-500/10 bg-gradient-to-br from-black/60 to-purple-900/10 backdrop-blur-sm hover:border-purple-400/20 hover:shadow-lg hover:shadow-purple-500/10 hover:-translate-y-2 transition-all duration-300 rounded-xl">
            <div className="flex justify-between items-start flex-wrap gap-4">
              <div>
                <h3 className="text-2xl font-bold text-white">
                  Intermediate (ICS)
                </h3>
                <p className="text-lg text-purple-200/80 mt-2">
                  Lahore Board
                </p>
              </div>

              <span className="px-4 py-2 border border-purple-500/10 bg-gradient-to-r from-purple-600/15 to-purple-400/15 text-gray-300 font-medium rounded-lg">
                2019 - 2021
              </span>
            </div>

            <div className="mt-6 text-gray-300">
              <p className="flex items-start">
                <span className="text-purple-300/70 mr-3">→</span>
                <span>
                  Studied Computer Science, Mathematics & Programming Basics
                </span>
              </p>
            </div>
          </div>

          {/* Matric */}
          <div className="p-8 border border-purple-500/10 bg-gradient-to-br from-black/60 to-purple-900/10 backdrop-blur-sm hover:border-purple-400/20 hover:shadow-lg hover:shadow-purple-500/10 hover:-translate-y-2 transition-all duration-300 rounded-xl">
            <div className="flex justify-between items-start flex-wrap gap-4">
              <div>
                <h3 className="text-2xl font-bold text-white">
                  Matriculation (Science)
                </h3>
                <p className="text-lg text-purple-200/80 mt-2">
                  Lahore Board
                </p>
              </div>

              <span className="px-4 py-2 border border-purple-500/10 bg-gradient-to-r from-purple-600/15 to-purple-400/15 text-gray-300 font-medium rounded-lg">
                2017 - 2019
              </span>
            </div>

            <div className="mt-6 text-gray-300">
              <p className="flex items-start">
                <span className="text-purple-300/70 mr-3">→</span>
                <span>
                  Science background with strong foundation in Mathematics
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
