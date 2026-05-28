import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Layout, Globe, Smartphone, Monitor } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import Button from '../components/ui/Button';

const projects = [
  {
    title: 'VCET Placement Portal',
    description: 'A department-focused placement management platform for Velammal College of Engineering and Technology that streamlines placement tracking, analytics, eligibility verification, recruitment round management, and Excel-based data workflows.',
    tech: ['React.js', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'Chart.js'],
    github: 'https://github.com/nagavishnu-05/VCET-Placement-Project',
    demo: 'https://vcet-placement-portal.vercel.app/',
    drive: 'https://drive.google.com/file/d/1HOuyJb4mRTEzeGMjhvaCpEC3n5caZijH/view?usp=drive_link',
    image: '/placement.png',
    icon: Globe,
  },
  {
    title: 'LeetCode Status Tracker',
    description: 'A coding performance analytics platform for placement preparation that tracks student LeetCode progress across batches and sections with rankings, historical reports, and faculty dashboards.',
    tech: ['React.js', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'Chart.js'],
    github: 'https://github.com/nagavishnu-05/LeetCode-Status-Tracker',
    demo: 'https://leet-code-status-tracker.vercel.app/',
    drive: 'https://drive.google.com/file/d/1151G0WvQ3Vs3_o9gQXlADK8Asq3A_Crl/view?usp=drive_link',
    image: '/leetcode.png',
    icon: Monitor,
  },
  {
    title: 'CivicPulse',
    description: 'A civic engagement dashboard designed to visualize public feedback and community data for more informed decision making.',
    tech: ['Angular', 'Tailwind CSS', 'SpringBoot', 'MySQL'],
    github: 'https://github.com/nagavishnu-05/CivicPulseHub-Frontend',
    image: '/civicpulse.png',
    icon: Layout,
  },
  {
    title: 'IoT Smart Attendance & Cashless Canteen',
    description: 'An ESP32 and RFID-powered campus automation system with attendance logging, cashless canteen payments, LCD feedback, and secure wallet transactions.',
    tech: ['ESP32', 'RFID', 'Node.js', 'MongoDB'],
    github: 'https://github.com/nagavishnu-05/RFID-Smart-Attendance-Canteen-System',
    drive: 'https://drive.google.com/file/d/1jNedK8ozspv1xLNt76QXJHGdIWX2baKY/view?usp=drive_link',
    image: '/rfid.png',
    icon: Smartphone,
  },
  {
    title: 'Marvel Based Portfolio',
    description: 'A character-inspired portfolio website with bold UI design and polished motion interactions.',
    tech: ['React.js', 'Tailwind CSS'],
    github: 'https://github.com/nagavishnu-05/NVK-Portfolio',
    demo: 'https://nvk-portfolio.vercel.app/',
    drive: 'https://drive.google.com/file/d/1Gp23Arpfst9hnyR8bKG4qWr6gmc16-hq/view?usp=sharing',
    image: '/portfolio.png',
    icon: Globe,
  },
  {
    title: 'VCET Attendo',
    description: 'A campus attendance portal for VCET featuring batch management, reporting, and accessible student workflows.',
    tech: ['React.js', 'Tailwind CSS', 'Node.js'],
    github: 'https://github.com/nagavishnu-05/VCET-Attendo',
    demo: 'https://vcet-attendo.vercel.app/',
    drive: 'https://drive.google.com/file/d/1zPtpwfEtU3StMj330ORk8zuqfrWETmHq/view?usp=sharing',
    image: '/attendo.png',
    icon: Monitor,
  },
  {
    title: 'Forkfinder',
    description: 'A UX concept for an intelligent developer tool discovery experience, prototyped in Figma.',
    tech: ['Figma', 'Product Design'],
    github: 'https://github.com/nagavishnu-05/Forkfinder',
    figma: 'https://www.figma.com/design/suKhqYcssBT9Tcimj96Wt3/FORKFINDER?node-id=326-2765&t=a5K6hlUxx3IxJCce-1',
    image: '/forkfinder.png',
    icon: Layout,
  },
];

export default function ProjectsPage() {
  return (
    <div className="flex flex-col gap-12 py-8">
      <header className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <p className="text-sm uppercase tracking-[0.32em] text-primary font-semibold">Portfolio</p>
          <h1 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-950 dark:text-white">
            All Projects
          </h1>

        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
          >
            <Card className="flex flex-col h-full overflow-hidden group hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/5">
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <div className="flex gap-2">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Button size="sm" variant="secondary" className="gap-2">
                          <ExternalLink size={14} /> GitHub
                        </Button>
                      </a>
                    )}
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <Button size="sm" className="gap-2">
                          <ExternalLink size={14} /> Demo
                        </Button>
                      </a>
                    )}
                    {project.drive && (
                      <a href={project.drive} target="_blank" rel="noopener noreferrer">
                        <Button size="sm" variant="secondary" className="gap-2">
                          <Layout size={14} /> Drive
                        </Button>
                      </a>
                    )}
                    {project.figma && (
                      <a href={project.figma} target="_blank" rel="noopener noreferrer">
                        <Button size="sm" className="gap-2">
                          <ExternalLink size={14} /> Figma
                        </Button>
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <CardHeader className="gap-2">
                <div className="flex items-center justify-between">
                  <div className="p-2 rounded-xl bg-primary/5 text-primary">
                    <project.icon size={18} />
                  </div>
                  <div className="flex gap-1.5">
                    {project.tech.map((t) => (
                      <Badge key={t} variant="default" className="bg-primary/5 text-primary border-primary/10">
                        {t}
                      </Badge>
                    ))}
                  </div>
                </div>
                <CardTitle className="leading-tight group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="line-clamp-2">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="mt-auto" />
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
