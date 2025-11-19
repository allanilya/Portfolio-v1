import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import DarkModeToggle from '@/components/DarkModeToggle';

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <DarkModeToggle />
      <Hero />
      <About />
      <Skills />
      <Projects />
    </div>
  );
}
