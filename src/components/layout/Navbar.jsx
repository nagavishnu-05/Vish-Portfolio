import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Terminal, Code2, Mail, FolderGit2, Briefcase, GraduationCap, Trophy } from 'lucide-react';
import ThemeToggle from '../ui/ThemeToggle';

const navLinks = [
  { name: 'Home', path: '/', icon: Terminal },
  { name: 'Projects', path: '/projects', icon: FolderGit2 },
  { name: 'Skills', path: '/skills', icon: Code2 },
  { name: 'Experience', path: '/experience', icon: Briefcase },
  { name: 'Certificates', path: '/certificates', icon: GraduationCap },
  { name: 'Coding Stats', path: '/coding-stats', icon: Trophy },
  { name: 'Contact', path: '/contact', icon: Mail },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-3' : 'py-5'}`}>
      <div className="max-w-screen-2xl mx-auto px-8 md:px-16 lg:px-24">
        <div className={`glass rounded-2xl flex items-center justify-between px-6 py-2.5 transition-all duration-500 ${scrolled ? 'shadow-xl shadow-black/5 dark:shadow-primary/10' : ''}`}>
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
              <Terminal size={20} />
            </div>
            <span className="text-lg font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">Nagavishnu</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`relative px-3.5 py-1.5 rounded-xl text-sm font-semibold transition-all duration-300 group hover:text-primary ${location.pathname === link.path ? 'text-primary' : 'text-zinc-500 dark:text-zinc-400'}`}
              >
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-primary/5 rounded-xl -z-10"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative flex items-center gap-2">
                  <link.icon size={15} className="group-hover:scale-110 transition-transform" />
                  {link.name}
                </span>
              </Link>
            ))}
            <div className="ml-4 pl-4 border-l border-zinc-200 dark:border-zinc-800">
              <ThemeToggle />
            </div>
          </div>

          <div className="flex items-center gap-3 md:hidden">
            <ThemeToggle />
            <button
              className="p-2 text-zinc-500 dark:text-zinc-400 hover:text-primary transition-colors"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 left-6 right-6 md:hidden glass rounded-2xl p-3 shadow-2xl"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${location.pathname === link.path ? 'bg-primary/10 text-primary' : 'text-zinc-500 dark:text-zinc-400 hover:bg-black/5 dark:hover:bg-white/5'}`}
                >
                  <link.icon size={18} />
                  <span className="font-bold">{link.name}</span>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
