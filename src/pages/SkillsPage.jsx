import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Database, Palette, Zap, Sparkles } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';

const skillCategories = [
  {
    title: "Frontend Engineering",
    icon: Layout,
    description: "Build polished web interfaces with modern UI.",
    skills: ["React.js", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
    color: "bg-blue-500/10 text-blue-500 border-blue-500/20"
  },
  {
    title: "Backend & API Development",
    icon: Database,
    description: "Ship APIs and backend services that scale.",
    skills: ["Node.js", "Express.js", "REST API", "JWT Authentication"],
    color: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20"
  },
  {
    title: "Database & Data Management",
    icon: Database,
    description: "Model and manage databases for real apps.",
    skills: ["MongoDB", "MySQL", "SQL", "Database Design"],
    color: "bg-teal-500/10 text-teal-500 border-teal-500/20"
  },
  {
    title: "Leadership & Collaboration",
    icon: Sparkles,
    description: "Driving projects with teamwork, ownership, and clear communication.",
    skills: ["Leadership", "Teamwork", "Project Management", "Communication", "Analytical Thinking", "Adaptability"],
    color: "bg-pink-500/10 text-pink-500 border-pink-500/20"
  },
  {
    title: "Problem Solving & Programming",
    icon: Palette,
    description: "Solve problems with clean, efficient code.",
    skills: ["Data Structures", "Algorithms", "Java", "C"],
    color: "bg-purple-500/10 text-purple-500 border-purple-500/20"
  },
  {
    title: "Development Tools",
    icon: Zap,
    description: "Use tools and workflows for fast delivery.",
    skills: ["Git & GitHub", "Vercel", "VS Code", "MongoDB Atlas"],
    color: "bg-pink-500/10 text-pink-500 border-pink-500/20"
  }
];

export default function SkillsPage() {
  return (
    <div className="flex flex-col gap-16 py-8">
      {/* Top text and subheader removed as requested */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {skillCategories.map((category, idx) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
          >
            <Card className="h-full border-zinc-100 dark:border-zinc-800/50 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 group">
              <CardHeader className="pb-4">
                <div className={`p-4 rounded-2xl w-fit mb-6 transition-transform group-hover:rotate-6 ${category.color}`}>
                  <category.icon size={28} />
                </div>
                <CardTitle className="text-2xl mb-3 tracking-tight group-hover:text-primary transition-colors">
                  {category.title}
                </CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {category.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2 pt-4">
                  {category.skills.map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="secondary"
                      className="transition-all hover:scale-110 hover:-translate-y-1 hover:text-primary hover:border-primary/30"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass rounded-[3rem] p-12 text-center border-primary/10 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
        <h2 className="text-3xl font-black mb-4 text-foreground">Always Learning</h2>
        <p className="text-base text-slate-500 dark:text-slate-400 max-w-2xl mx-auto font-medium">
          Staying updated with latest tech and best practices
        </p>
      </motion.div>
    </div>
  );
}
