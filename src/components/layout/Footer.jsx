import React from 'react';
import { Github, Linkedin, Instagram, Globe, Terminal, Heart, Mail, Smartphone } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const socialLinks = [
  { name: 'GitHub', icon: Github, href: 'https://github.com/nagavishnu-05' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/naga-vishnu-karthik-b-s/' },
  { name: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/nagavishnukarthik05_official/' },
    { name: 'Email', icon: Mail, href: 'mailto:nagavishnukarthikbs@gmail.com' },
  ];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-zinc-100 dark:border-zinc-800 mt-20 pt-16 pb-12 relative overflow-hidden bg-white dark:bg-slate-950 transition-colors">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
        
        {/* Brand Section */}
        <div className="flex flex-col gap-4">
          <Link to="/" className="flex items-center gap-2 group w-fit">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
              <Terminal size={22} />
            </div>
            <span className="text-xl font-black tracking-tight text-foreground group-hover:text-primary transition-colors">Nagavishnu</span>
          </Link>
          <p className="text-sm text-slate-500 dark:text-slate-400 font-medium leading-relaxed max-w-xs">
            A developer passionate about building high-performance, accessible, and 
            visually stunning web experiences.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-4">
          <h3 className="text-xs font-black uppercase tracking-widest text-slate-400">Navigation</h3>
          <div className="grid grid-cols-2 gap-3">
            <Link to="/" className="text-sm font-bold text-slate-600 dark:text-slate-300 hover:text-primary transition-colors w-fit">Home</Link>
            <Link to="/projects" className="text-sm font-bold text-slate-600 dark:text-slate-300 hover:text-primary transition-colors w-fit">Projects</Link>
            <Link to="/skills" className="text-sm font-bold text-slate-600 dark:text-slate-300 hover:text-primary transition-colors w-fit">Skills</Link>
            <Link to="/experience" className="text-sm font-bold text-slate-600 dark:text-slate-300 hover:text-primary transition-colors w-fit">Experience</Link>
            <Link to="/certificates" className="text-sm font-bold text-slate-600 dark:text-slate-300 hover:text-primary transition-colors w-fit">Certifications</Link>
            <Link to="/contact" className="text-sm font-bold text-slate-600 dark:text-slate-300 hover:text-primary transition-colors w-fit">Contact</Link>
          </div>
        </div>

        {/* Social & Legal */}
        <div className="flex flex-col gap-6 md:items-end">
          <h3 className="text-xs font-black uppercase tracking-widest text-slate-400">Connect</h3>
          <div className="flex items-center gap-3">
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.1 }}
                className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-900 text-slate-500 hover:text-primary border border-zinc-100 dark:border-zinc-800 hover:border-primary/20 shadow-sm transition-all"
                aria-label={link.name}
              >
                <link.icon size={20} strokeWidth={2} />
              </motion.a>
            ))}
          </div>
          <div className="text-xs text-slate-500 dark:text-slate-400 font-bold flex flex-col items-start md:items-end gap-2 mt-4">
            <span>© {currentYear} Nagavishnu Karthik
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
