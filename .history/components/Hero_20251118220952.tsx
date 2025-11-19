import { LucideGithub, LucideLinkedin, FileText } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-20">
      <div className="max-w-4xl w-full text-center">
        {/* Profile Photo */}
        <div className="mb-8 flex justify-center">
          {/*
            Image Size Options (change w-48 h-48):
            - w-32 h-32 = small (128px)
            - w-40 h-40 = medium-small (160px)
            - w-48 h-48 = medium (192px) - current
            - w-56 h-56 = medium-large (224px)
            - w-64 h-64 = large (256px)
            - w-72 h-72 = extra-large (288px)
            - w-80 h-80 = huge (320px)
          */}
          <div className="relative w-70 h-70 rounded-full overflow-hidden bg-gradient-to-br from-blue-600 to-purple-600">
            {/*
              Image Zoom & Position:
              1. Adjust 'transform: scale()' to zoom in/out on the image
                 - scale(1.0) = no zoom (100%)
                 - scale(1.5) = zoomed in to 150%
                 - scale(0.8) = zoomed out to 80%
              2. Adjust 'objectPosition' to reposition the image
                 - 'center center' = centered (default)
                 - 'center top' = centered horizontally, aligned to top
                 - '50% 30%' = custom positioning
            */}
            <img
              src="profilepic.jpeg"
              alt="Allan Ilyasov"
              className="w-full h-full object-cover"
              style={{
                transform: 'scale(1.05)',
                objectPosition: '70% 10%'
              }}
            />
            {/* Fallback if no image - remove this span after adding your photo */}
            {/* <span className="text-7xl font-bold text-white">AI</span> */}
          </div>
        </div>

        {/* Name */}
        <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          ALLAN ILYASOV
        </h1>

        {/* Title */}
        <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8">
          AI/ML Engineer & Full-Stack Developer
        </p>

        {/* Social Links */}
        <div className="flex gap-4 justify-center mb-8">
          <a
            href="https://linkedin.com/in/allanily"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
          >
            <LucideLinkedin className="w-5 h-5" />
            LinkedIn
          </a>
          <a
            href="https://github.com/allanilya"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-full hover:bg-gray-900 transition-colors"
          >
            <LucideGithub className="w-5 h-5" />
            GitHub
          </a>
          <a
            href="/Allan Ilyasov Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 border-2 border-gray-800 dark:border-gray-200 text-gray-800 dark:text-gray-200 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <FileText className="w-5 h-5" />
            Resume
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 animate-bounce">
          <svg
            className="w-6 h-6 mx-auto text-gray-400"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
}
