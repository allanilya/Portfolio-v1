/**
 * SKILLS COMPONENT
 * ================
 * Displays your technical skills organized by category in a grid layout.
 *
 * What it displays:
 * - "Technical Skills" heading
 * - Cards for each skill category (Languages, Frontend, Backend, etc.)
 * - Individual skill tags within each card
 * - Gray background to separate from other sections
 *
 * How to customize:
 * - EDIT skills: Go to /lib/skillsData.ts to add/remove categories and skills
 * - Change layout: grid-cols-3 means 3 columns on desktop (line 56)
 *   - grid-cols-2 = 2 columns
 *   - grid-cols-4 = 4 columns
 */

import { skillCategories } from '@/lib/skillsData';

export default function Skills() {
  // Skill categories and colors are now imported from /lib/skillsData.ts
  // This ensures consistency with the Projects component

  return (
    <section id="skills" className="relative z-10 py-16 md:py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Technical Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group bg-gray-800 rounded-xl p-5 md:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-700 hover:border-gray-600 transform hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-1 h-8 bg-gradient-to-b ${category.colors.bg} rounded-full`}></div>
                <h3 className={`text-lg md:text-xl font-bold ${category.colors.text}`}>
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className={`px-3 py-1.5 ${category.colors.badge} rounded-lg text-sm font-medium transition-transform hover:scale-105`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
