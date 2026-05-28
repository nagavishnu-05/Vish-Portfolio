import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Calendar, MapPin, Briefcase, GraduationCap, Laptop, Rocket } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';

const experiences = [
  {
    company: "VCET, Madurai",
    role: "Full Stack Development Lead",
    period: "01 Jul 2026 – 01 Aug 2026",
    location: "Madurai, India",
    description: "Led the in-house LeetCode Status Tracker internship project, building a coding performance monitoring platform for placement preparation.",
    achievements: [
      "Built batch/section-wise student tracking and ranking dashboards",
      "Implemented performance comparison and automated report generation",
      "Delivered placement coordinator insights with full-stack analytics"
    ],
    id: 1,
    type: "Inhouse Internship II",
    icon: Laptop
  },
  {
    company: "VCET, Madurai",
    role: "Frontend Lead",
    period: "01 Jul 2026 – 01 Aug 2026",
    location: "Madurai, India",
    description: "Led frontend development for the VCET Placement Portal, creating dashboards, profile modules, and placement analytics.",
    achievements: [
      "Designed student profile and company placement tracking modules",
      "Built interactive analytics visualizations for placement workflows",
      "Implemented admin functionality for streamlined placement operations"
    ],
    id: 2,
    type: "Inhouse Internship I",
    icon: Rocket
  },
  {
    company: "Vinsup Infotech",
    role: "Artificial Intelligence Intern",
    period: "26 May 2025 – 26 Jun 2025",
    location: "Remote",
    description: "Worked on an AI-focused internship, developing a Learning Management System while gaining practical AI application experience.",
    achievements: [
      "Developed a simple LMS with AI-driven learning workflows",
      "Collaborated on software development and project delivery",
      "Gained exposure to AI application concepts and industry workflows"
    ],
    id: 3,
    type: "Internship",
    icon: Building2
  },
  {
    company: "NSIC, Chennai",
    role: "Cloud Computing Intern",
    period: "16 Dec 2024 – 30 Dec 2024",
    location: "Chennai, India",
    description: "Completed a cloud computing internship by building a Student Attendance Management System and learning deployment workflows.",
    achievements: [
      "Built a cloud-based attendance management application",
      "Learned cloud deployment platforms and hosting workflows",
      "Applied practical cloud computing fundamentals in a real project"
    ],
    id: 4,
    type: "Internship",
    icon: MapPin
  }
];

export default function ExperiencePage() {
  return (
    <div className="flex flex-col gap-12 py-8">
      <header className="flex flex-col gap-4 text-center max-w-2xl mx-auto mb-12">
        <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto shadow-sm border border-primary/20 animate-bounce">
          <Briefcase size={28} />
        </div>
        <h1 className="text-4xl font-black tracking-tight text-foreground sm:text-5xl">Professional <span className="text-primary">Journey</span></h1>
        <p className="text-base text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
          {/* Top text removed as requested */}
        </p>
      </header>

      <section className="relative space-y-12 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-[2px] before:bg-gradient-to-b before:from-transparent before:via-zinc-100 dark:before:via-zinc-800/10 before:to-transparent">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group`}
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-2xl border border-zinc-100 dark:border-zinc-800 bg-white dark:bg-slate-900 text-primary shadow-xl shadow-primary/5 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 group-hover:scale-125 transition-transform duration-300 z-10 group-hover:bg-primary group-hover:text-white">
              <exp.icon size={22} />
            </div>

            <div className="w-[calc(100%-4.5rem)] md:w-[calc(50%-3rem)] md:group-odd:pl-10 md:group-even:pr-10">
              <Card className="hover:border-primary/20 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/5">
                <CardHeader className="flex flex-col gap-4 p-8">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div className="space-y-1">
                      <Badge variant="default" className="text-primary-light">{exp.type}</Badge>
                      <CardTitle className="text-2xl mt-1 tracking-tight">{exp.role}</CardTitle>
                      <p className="font-bold text-slate-600 dark:text-slate-300 flex items-center gap-2">
                        <Building2 size={16} /> {exp.company}
                      </p>
                    </div>
                    <div className="flex flex-col text-xs text-slate-500 dark:text-slate-400 items-start sm:items-end font-bold uppercase tracking-widest gap-2">
                      <span className="flex items-center gap-1.5"><Calendar size={14}/> {exp.period}</span>
                      <span className="flex items-center gap-1.5"><MapPin size={14}/> {exp.location}</span>
                    </div>
                  </div>
                  
                  <div className="h-[1px] bg-zinc-100 dark:bg-zinc-800" />
                  
                  <div className="space-y-4 pt-2">
                    <p className="text-base text-slate-600 dark:text-slate-400 font-medium leading-relaxed italic border-l-4 border-primary/20 pl-4">
                      "{exp.description}"
                    </p>
                    <ul className="space-y-3">
                      {exp.achievements.map((item, i) => (
                        <li key={i} className="text-sm flex items-start gap-3 text-slate-600 dark:text-slate-300 font-medium leading-relaxed group/item">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0 group-hover/item:scale-150 transition-transform" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardHeader>
              </Card>
            </div>
          </motion.div>
        ))}
      </section>
    </div>
  );
}
