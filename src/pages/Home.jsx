import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Terminal, Layout, Database, Palette, Server, GitBranch, Code2, Cpu, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';

// Typing animation hook
function useTypingEffect(words, typingSpeed = 80, deletingSpeed = 50, pauseTime = 2500) {
  const [displayText, setDisplayText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let timeout;

    if (!isDeleting && displayText === currentWord) {
      timeout = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    } else {
      timeout = setTimeout(() => {
        setDisplayText(
          isDeleting
            ? currentWord.substring(0, displayText.length - 1)
            : currentWord.substring(0, displayText.length + 1)
        );
      }, isDeleting ? deletingSpeed : typingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseTime]);

  return displayText;
}

const roles = ['CSE Student', 'Full Stack Developer', 'UI Designer', 'IoT Enthusiast'];
// LeetCode section moved to CodingStatsPage.jsx

const projects = [
  {
    title: 'VCET Placement Portal',
    description: 'A department placement platform with analytics, eligibility verification, recruiter workflows, and Excel-driven data management.',
    tech: ['React', 'Tailwind', 'Node.js', 'MongoDB'],
    icon: Globe,
  },
  {
    title: 'LeetCode Status Tracker',
    description: 'Batch-level LeetCode analytics and ranking dashboards for placement preparation.',
    tech: ['React', 'Tailwind', 'Node.js', 'MongoDB'],
    icon: Code2,
  },
  {
    title: 'IoT Smart Attendance & Cashless Canteen',
    description: 'ESP32 and RFID-based attendance automation with cashless canteen payments.',
    tech: ['ESP32', 'RFID', 'MongoDB'],
    icon: Cpu,
  }
];

const techStack = [
  { name: 'React', icon: Globe },
  { name: 'Node.js', icon: Server },
  { name: 'MongoDB', icon: Database },
  { name: 'Tailwind CSS', icon: Palette },
  { name: 'JavaScript', icon: Code2 },
  { name: 'Express', icon: Server },
  { name: 'Git', icon: GitBranch },
  { name: 'UI Design', icon: Layout },
];

const getProgress = (solved, total) => (total ? Math.round((solved / total) * 100) : 0);

export default function Home() {
  const typedText = useTypingEffect(roles);
  // LeetCode state removed

  return (
    <div className="flex flex-col gap-32 py-12 lg:py-20 lg:pb-32 px-4 md:px-0 max-w-[1440px] mx-auto">
      <section className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 lg:gap-16 min-h-[50vh]">
        <div className="flex-1 space-y-8 text-center lg:text-left pt-4 lg:pt-8 lg:pr-8">
          <div className="space-y-4">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-primary font-bold tracking-[0.2em] uppercase text-xs"
            >
              Hey there, I am
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-5xl font-extrabold leading-tight tracking-tight text-foreground"
            >
              Nagavishnu <span className="text-gradient">Karthik B S</span>
            </motion.h1>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex items-center justify-center lg:justify-start gap-4 h-12 text-xl md:text-2xl font-bold text-zinc-600 dark:zinc-400"
            >
              <Terminal size={24} className="text-primary" />
              <span>{typedText}</span>
              <span className="w-1 h-8 bg-primary animate-blink" />
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg text-zinc-500 dark:text-zinc-400 max-w-xl leading-relaxed mx-auto lg:mx-0 font-medium"
          >
            Engineering student passionate about building real-world solutions through
            full-stack development and IoT systems. Focused on efficiency and creating impactful projects.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-6 pt-4"
          >
            <Link to="/projects">
              <Button size="lg" className="px-8 rounded-xl shadow-lg bg-primary hover:bg-primary/90 transition-all font-bold">
                My Projects
                <ArrowRight size={18} className="ml-2" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="px-8 rounded-xl border-2 font-bold hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-all">
                Say Hello
              </Button>
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative w-full lg:w-1/3 flex justify-center lg:justify-start lg:pr-8"
        >
          <div className="relative w-full max-w-[20rem] h-72 md:max-w-[22rem] md:h-[28rem] lg:max-w-[22rem] lg:h-[30rem] rounded-[2rem] overflow-hidden border-2 border-primary/10 shadow-2xl bg-white dark:bg-zinc-900">
            <img
              src="/profile.png"
              alt="Nagavishnu Karthik B S"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </motion.div>
      </section>

      {/* LeetCode section removed. See CodingStatsPage.jsx for new location. */}

      {/* Featured Works Section */}
      <section className="space-y-12">
        <div className="text-center md:text-left space-y-4">
          <p className="text-primary font-bold tracking-[0.2em] uppercase text-xs">My Work</p>
          <h2 className="text-3xl md:text-4xl font-black tracking-tight leading-tight uppercase">Featured <span className="text-gradient">Projects</span></h2>
          <p className="text-zinc-500 dark:text-zinc-400 max-w-2xl text-lg font-medium">
            A selection of my best work showcasing full-stack development, IoT systems, and design thinking.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="group relative bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-xl"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <project.icon size={24} />
                </div>
              </div>
              <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-primary/5 text-primary group-hover:bg-primary/10 transition-colors"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center pt-4">
          <Link to="/projects">
            <Button size="lg" className="px-8 rounded-xl shadow-lg bg-primary hover:bg-primary/90 transition-all font-bold">
              View All Projects
              <ArrowRight size={18} className="ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      <div className="py-16 border-t border-zinc-100 dark:border-zinc-900">
        <section className="space-y-12">
          <div className="text-center md:text-left space-y-4">
            <p className="text-primary font-bold tracking-[0.2em] uppercase text-xs">Skills & Tools</p>
            <h2 className="text-2xl md:text-3xl font-black tracking-tight leading-tight uppercase">Technologies <span className="text-gradient">I Work With</span></h2>
          </div>
          <div className="relative overflow-hidden">
            <motion.div
              animate={{ x: ['0%', '-50%'] }}
              transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
              className="flex items-center gap-20 w-max whitespace-nowrap opacity-40 hover:opacity-100 transition-all duration-700"
            >
              {[...techStack, ...techStack].map((tech) => (
                <div key={tech.name} className="flex items-center gap-4 px-4 group cursor-default">
                  <tech.icon size={24} className="group-hover:text-primary transition-colors duration-300" />
                  <span className="text-xs font-black tracking-[0.25em] uppercase">{tech.name}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </section>
      </div>
    </div>
    );
  }
