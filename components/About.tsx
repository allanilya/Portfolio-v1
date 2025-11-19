export default function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>
        <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            I'm a Graduate Student pursuing an MS in Data Science and BS in Computer Science at St. John's University,
            graduating in May 2026 and May 2025 respectively. Currently working as a Graduate Research Assistant,
            I specialize in building AI-powered applications and scalable cloud infrastructure.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            My expertise spans full-stack development, machine learning, and AWS cloud services. I've led the development
            of Codify AI, an AI-powered programming tutor, and won multiple hackathons for innovative AI solutions.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            When I'm not coding, I'm contributing to Uncle Edik's Pickles, a startup I helped grow from a home-based
            operation to a national brand.
          </p>
        </div>
      </div>
    </section>
  );
}
