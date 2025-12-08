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
 * - ADD a new category: Copy lines 22-25 and add to the array
 * - EDIT skills: Change the items in the skills array (lines 18-40)
 * - REMOVE a category: Delete the entire {...} block
 * - Change category colors: Edit text-blue-600 (line 62)
 * - Change layout: grid-cols-3 means 3 columns on desktop (line 56)
 *   - grid-cols-2 = 2 columns
 *   - grid-cols-4 = 4 columns
 */

export default function Skills() {
  // EDIT YOUR SKILLS HERE
  // Add, remove, or modify categories and skills below
  const skillCategories = [
    {
      title: "Languages",  // Category name
      skills: ["Python", "TypeScript", "JavaScript", "Java", "SQL", "R", "Swift", "PHP"]  // List of skills
    },
    {
      title: "Frontend",
      skills: ["React", "Next.js", "Tailwind CSS", "Radix UI"]
    },
    {
      title: "Backend",
      skills: ["Flask", "Django", "Spring Boot", "Node.js", "REST APIs"]
    },
    {
      title: "AI/ML",
      skills: ["LangChain", "LangGraph", "TensorFlow", "PyTorch", "Scikit-learn", "AWS Bedrock"]
    },
    {
      title: "Cloud & DevOps",
      skills: ["AWS", "Docker", "DynamoDB", "Elastic Beanstalk", "Lambda", "API Gateway"]
    },
    {
      title: "Data Science",
      skills: ["Pandas", "NumPy", "Plotly", "Spark", "NLTK", "Spacy", "Beautiful Soup"]
    },
    {
      title: "Databases",
      skills: ["MySQL", "MongoDB", "Pinecone", "FAISS", "Vector Databases"]
    }
  ];

  // Color scheme for different categories
  const categoryColors = [
    { bg: 'from-purple-500 to-pink-500', text: 'text-purple-600 dark:text-purple-400', badge: 'bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200' },
    { bg: 'from-blue-500 to-cyan-500', text: 'text-blue-600 dark:text-blue-400', badge: 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200' },
    { bg: 'from-green-500 to-emerald-500', text: 'text-green-600 dark:text-green-400', badge: 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200' },
    { bg: 'from-orange-500 to-red-500', text: 'text-orange-600 dark:text-orange-400', badge: 'bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200' },
    { bg: 'from-indigo-500 to-purple-500', text: 'text-indigo-600 dark:text-indigo-400', badge: 'bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200' },
    { bg: 'from-teal-500 to-cyan-500', text: 'text-teal-600 dark:text-teal-400', badge: 'bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200' },
    { bg: 'from-pink-500 to-rose-500', text: 'text-pink-600 dark:text-pink-400', badge: 'bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-200' },
  ];

  return (
    <section id="skills" className="relative z-10 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Technical Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => {
            const colors = categoryColors[index % categoryColors.length];
            return (
              <div
                key={index}
                className="group bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transform hover:-translate-y-1"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-1 h-8 bg-gradient-to-b ${colors.bg} rounded-full`}></div>
                  <h3 className={`text-xl font-bold ${colors.text}`}>
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className={`px-3 py-1.5 ${colors.badge} rounded-lg text-sm font-medium transition-transform hover:scale-105`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
