import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ShieldCheck, Medal, Star, CheckCircle } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import Button from '../components/ui/Button';

const certificateGroups = [
  {
    title: "WIPRO Futureskills Prime Certificates",
    certificates: [
      {
        title: "UiPath Automation Business Analyst",
        issuer: "UiPath Academy",
        date: "WIPRO Futureskills Prime",
        link: "https://drive.google.com/file/d/1bHbO4rkxAzdifJdRthdeJr_flXdXplif/view?usp=sharing",
        id: 1,
        category: "Automation",
        icon: Medal
      },
      {
        title: "Microsoft PowerBI Data Analyst",
        issuer: "Microsoft",
        date: "WIPRO Futureskills Prime",
        link: "https://drive.google.com/file/d/1dqHEJvV9k91AGwSHO8QPAGBHucqZLF7z/view?usp=sharing",
        id: 2,
        category: "Data",
        icon: Star
      },
      {
        title: "DataScience for Beginners",
        issuer: "Board Infinity",
        date: "WIPRO Futureskills Prime",
        link: "https://drive.google.com/file/d/1qfIB2x07R5FjSIjQmh3X2bvFzAPWZp7g/view?usp=sharing",
        id: 3,
        category: "Data",
        icon: CheckCircle
      },
      {
        title: "Cybersecurity Essentials",
        issuer: "CISCO NetAcademy",
        date: "WIPRO Futureskills Prime",
        link: "https://drive.google.com/file/d/1kygVt8Nl3h32ZrSUZlnHzD7IoRciyLJ6/view?usp=sharing",
        id: 4,
        category: "Security",
        icon: ShieldCheck
      }
    ]
  },
  {
    title: "Sem - 6",
    certificates: [
      {
        title: "Inhouse Internship : VCET Placement Portal Completion Certificate",
        issuer: "VCET",
        date: "Sem - 6",
        link: "https://drive.google.com/file/d/1zRK8qv0XHSmiW-8qOl-OJEa1j_lB0ykV/view?usp=sharing",
        id: 5,
        category: "Internship",
        icon: Medal
      },
      {
        title: "Inhouse Internship : Leetcode Status Tracker Completion Certificate",
        issuer: "VCET",
        date: "Sem - 6",
        link: "https://drive.google.com/file/d/12rGF7r6FGx3RnJCko2gofM6Qfdgjd3-T/view?usp=sharing",
        id: 6,
        category: "Internship",
        icon: Star
      },
      {
        title: "Internship in Java Full Stack",
        issuer: "Infosys Springboard",
        date: "Sem - 6",
        link: "https://drive.google.com/file/d/1psn-ejA36RM8LiUQMudJRKUj2x0cElqG/view?usp=sharing",
        id: 7,
        category: "Internship",
        icon: CheckCircle
      }
    ]
  },
  {
    title: "Sem - 5",
    certificates: [
      {
        title: "Programming using Java",
        issuer: "Infosys Springboard",
        date: "Sem - 5",
        link: "https://drive.google.com/file/d/1OTIDDB1CiS8ZxuZsKT0MIt_jP9cerv-U/view?usp=sharing",
        id: 8,
        category: "Programming",
        icon: Medal
      },
      {
        title: "Java Foundation Course",
        issuer: "Infosys Springboard",
        date: "Sem - 5",
        link: "https://drive.google.com/file/d/1KCpwMyXvOOunlJUomGf3XtRCCz6Y38Pa/view?usp=sharing",
        id: 9,
        category: "Programming",
        icon: Star
      },
      {
        title: "Internship in Artificial Intelligence",
        issuer: "Vinsup Infotech",
        date: "Sem - 5",
        link: "https://drive.google.com/file/d/1KCpwMyXvOOunlJUomGf3XtRCCz6Y38Pa/view?usp=sharing",
        id: 10,
        category: "Internship",
        icon: CheckCircle
      },
      {
        title: "Database Management System",
        issuer: "Infosys Springboard",
        date: "Sem - 5",
        link: "https://drive.google.com/file/d/186DOnorvGzUNtW7sGM3ACkBgd9CVzb6p/view?usp=sharing",
        id: 11,
        category: "Database",
        icon: ShieldCheck
      }
    ]
  },
  {
    title: "Sem - 4",
    certificates: [
      {
        title: "React Basics",
        issuer: "Coursera",
        date: "Sem - 4",
        link: "https://drive.google.com/file/d/1r3Z6_IujASR-TZpMWD6I4FIUTLtsG2sK/view?usp=sharing",
        id: 12,
        category: "Frontend",
        icon: Medal
      },
      {
        title: "Internship in Cloud Computing",
        issuer: "NSIC",
        date: "Sem - 4",
        link: "https://drive.google.com/file/d/1l7PqpiL1SeRTiav2Tnn53hvl93MMN2Z5/view?usp=sharing",
        id: 13,
        category: "Cloud",
        icon: Star
      },
      {
        title: "Frontend for Java Full Stack Development",
        issuer: "Coursera",
        date: "Sem - 4",
        link: "https://drive.google.com/file/d/1MnxGDXEYRrIfgnohcWPuJcpUmJ5zT4G9/view?usp=sharing",
        id: 14,
        category: "Frontend",
        icon: CheckCircle
      },
      {
        title: "Software Testing",
        issuer: "NPTEL",
        date: "Sem - 4",
        link: "https://drive.google.com/file/d/1t0kx8Rt-oFjqSbG0HO44-2SfCwgNj3Fi/view?usp=sharing",
        id: 15,
        category: "Quality",
        icon: ShieldCheck
      }
    ]
  },
  {
    title: "Sem - 3",
    certificates: [
      {
        title: "Fundamentals of Java Programming",
        issuer: "Coursera",
        date: "Sem - 3",
        link: "https://drive.google.com/file/d/1ab_NsMiclvqY__pcBwuhZ7DICqb-VXmJ/view?usp=sharing",
        id: 16,
        category: "Programming",
        icon: Medal
      },
      {
        title: "Introduction to SQL",
        issuer: "Coursera",
        date: "Sem - 3",
        link: "https://drive.google.com/file/d/1wU8aQPPkUwR2DhI4vC9xajE9kfcUf6yB/view?usp=sharing",
        id: 17,
        category: "Database",
        icon: Star
      },
      {
        title: "Introduction to MongoDB",
        issuer: "MongoDB",
        date: "Sem - 3",
        link: "https://drive.google.com/file/d/1NJaKGuQsmfhTw-f_GlmT_HfgkjHGgYjW/view?usp=sharing",
        id: 18,
        category: "Database",
        icon: CheckCircle
      },
      {
        title: "Cybersecurity for Beginners",
        issuer: "Microsoft",
        date: "Sem - 3",
        link: "https://drive.google.com/file/d/1TzLM6F8l1WkTH62VnxP-Gi510MBxvzOD/view?usp=sharing",
        id: 19,
        category: "Security",
        icon: ShieldCheck
      }
    ]
  },
  {
    title: "Sem - 2",
    certificates: [
      {
        title: "Introduction to C Programming",
        issuer: "NPTEL",
        date: "Sem - 2",
        link: "https://drive.google.com/file/d/1fRwKI4watm_5BB29c9OTr1OejTlIS_Hf/view?usp=sharing",
        id: 20,
        category: "Programming",
        icon: Medal
      },
      {
        title: "UI / UX Master Class",
        issuer: "NoviTech",
        date: "Sem - 2",
        link: "https://drive.google.com/file/d/1SIg8J4NK3E-DC7P69ezgbCiLAGan6O--/view?usp=sharing",
        id: 21,
        category: "Design",
        icon: Star
      }
    ]
  },
  {
    title: "Sem - 1",
    certificates: [
      {
        title: "Online Intern in Python",
        issuer: "Marcello Tech",
        date: "Sem - 1",
        link: "https://drive.google.com/file/d/1IBU60YyhCMGqwXnTJJYpqmebd75MuidE/view?usp=sharing",
        id: 22,
        category: "Programming",
        icon: Medal
      },
      {
        title: "Frontend Development Workshop",
        issuer: "Reccsar",
        date: "Sem - 1",
        link: "https://drive.google.com/file/d/1v2NPGbVTYClWk8oSIZHulLapVeJ8DdRc/view?usp=sharing",
        id: 23,
        category: "Frontend",
        icon: Star
      }
    ]
  }
];

const certificateGroupsDeduped = (() => {
  const seenTitles = new Set();

  return certificateGroups
    .map((group) => ({
      ...group,
      certificates: group.certificates.filter((cert) => {
        const normalizedTitle = cert.title.trim().toLowerCase();
        if (seenTitles.has(normalizedTitle)) {
          return false;
        }

        seenTitles.add(normalizedTitle);
        return true;
      }),
    }))
    .filter((group) => group.certificates.length > 0);
})();

export default function CertificatesPage() {
  return (
    <div className="flex flex-col gap-14 py-8">
      {certificateGroupsDeduped.map((group, groupIndex) => (
        <section key={group.title} className="flex flex-col gap-8">
          <div className="space-y-2">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">{group.title}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {group.certificates.map((cert, certIndex) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (groupIndex * 0.15) + (certIndex * 0.05) }}
              >
                <Card className="h-full border-zinc-100 dark:border-zinc-800/50 hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/5 group relative overflow-hidden">
                  <div className="absolute top-[-10%] right-[-10%] opacity-5 text-primary scale-150 rotate-12 transition-transform group-hover:scale-175">
                    <cert.icon size={120} />
                  </div>

                  <CardHeader className="gap-4 p-8 relative z-10">
                    <div className="flex items-center justify-between">
                      <div className="p-3 bg-primary/5 rounded-2xl text-primary group-hover:scale-110 transition-transform">
                        <cert.icon size={24} />
                      </div>
                      <Badge variant="outline" className="text-[10px] uppercase font-bold tracking-wider">{cert.category}</Badge>
                    </div>
                    <div>
                      <CardTitle className="text-xl leading-tight group-hover:text-primary transition-colors h-14 md:h-12 overflow-hidden">{cert.title}</CardTitle>
                      <CardDescription className="flex items-center gap-2 mt-2 font-bold text-slate-600 dark:text-slate-300">
                        <ShieldCheck size={16} className="text-emerald-500" /> {cert.issuer}
                      </CardDescription>
                    </div>
                  </CardHeader>

                  <CardContent className="px-8 pb-8 pt-0 flex flex-col gap-6 relative z-10">
                    <a href={cert.link} target="_blank" rel="noopener noreferrer" className="block">
                      <Button variant="outline" size="sm" className="w-full gap-2 group-hover:bg-primary group-hover:text-white group-hover:border-primary hover:bg-primary hover:text-white hover:border-primary transition-all">
                        <ExternalLink size={14} /> Verify Credential
                      </Button>
                    </a>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
