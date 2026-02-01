"use client";
import React, { useRef } from "react";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const experiences = [
  {
    id: "01",
    role: "Full Stack .NET Developer Intern",
    company: "Bridgeon Solutions LLP",
    location: "Calicut",
    period: "July 2025 – Present",
    description: [
      "Developed and maintained 40+ RESTful APIs using ASP.NET Core and C#, supporting authentication, orders, products, and user management modules.",
      "Engineered data access layers using Entity Framework Core, reducing query execution time by approximately 25–30%.",
      "Designed and optimized 15+ SQL Server tables and stored procedures to support scalable backend operations.",
      "Integrated backend APIs with React.js components across 10+ screens, ensuring consistent and reliable data flow.",
      "Built reusable UI components using React.js, Tailwind CSS, and Bootstrap, improving frontend development speed by 30%.",
      "Established a four-layer Clean Architecture (presentation, application, domain, infrastructure) to improve code maintainability and separation of concerns.",
      "Resolved 10+ bugs per sprint through debugging, testing, and code reviews, improving overall application stability."
    ],
    tech: ["C#", "ASP.NET Core", "EF Core", "SQL Server", "React.js", "Tailwind", "Bootstrap", "Clean Architecture"]
  }
];

export default function Experience() {
  const container = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }

    // 1. Timeline Line Drawing Animation
    gsap.from(lineRef.current, {
      scaleY: 0,
      transformOrigin: "top",
      ease: "none",
      scrollTrigger: {
        trigger: container.current,
        start: "top 70%",
        end: "bottom 80%",
        scrub: 1,
      }
    });

    // 2. Card Appear Animation
    const cards = gsap.utils.toArray(".experience-card");
    cards.forEach((card: any) => {
      gsap.from(card, {
        opacity: 0,
        x: -50,
        duration: 0.8,
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          toggleActions: "play none none reverse",
        }
      });
    });

  }, { scope: container });

  return (
    <section ref={container} id="experience" className="py-32 px-6 md:px-12 lg:px-24 bg-background relative overflow-hidden">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-24 relative z-10">
         <span className="text-primary font-mono text-sm tracking-[0.2em] flex items-center gap-3 mb-4">
           <span className="w-8 h-px bg-primary"></span>
           03 / HISTORY
         </span>
         <h2 className="text-5xl md:text-7xl font-display font-bold text-white leading-[0.9]">
           WORK<br />EXPERIENCE
         </h2>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Timeline Vertical Line */}
        <div className="absolute left-4 md:left-10 top-2 bottom-0 w-px bg-white/10">
            <div ref={lineRef} className="w-full h-full bg-primary origin-top"></div>
        </div>

        {/* Experience Items */}
        <div className="space-y-16">
          {experiences.map((exp) => (
            <div key={exp.id} className="experience-card relative pl-16 md:pl-32 group">
              
              {/* Timeline Dot - Fixed Classes Here */}
              <div className="absolute left-2.75 md:left-8.75 top-2 w-3 h-3 bg-secondary border border-white/30 rounded-full group-hover:bg-primary group-hover:border-primary group-hover:scale-125 transition-all duration-300 z-20"></div>
              
              {/* Content Card */}
              <div className="bg-secondary/30 border border-white/5 p-8 rounded-3xl hover:border-primary/30 transition-colors duration-300">
                
                {/* Top Row: Role & Date */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
                   <div>
                     <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-primary transition-colors">
                        {exp.role}
                     </h3>
                     <div className="flex items-center gap-2 text-gray-400 mt-2 font-mono text-sm">
                        <Briefcase size={14} className="text-primary" />
                        <span className="text-white">{exp.company}</span>
                        <span className="mx-2">•</span>
                        <MapPin size={14} className="text-primary" />
                        <span>{exp.location}</span>
                     </div>
                   </div>
                   
                   <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10 text-primary font-mono text-xs tracking-wider">
                      <Calendar size={14} />
                      {exp.period}
                   </div>
                </div>

                {/* Description List */}
                <ul className="space-y-3 mb-8">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex gap-3 text-gray-400 font-light leading-relaxed">
                       <span className="mt-2 w-1.5 h-1.5 bg-white/20 rounded-full shrink-0"></span>
                       {item}
                    </li>
                  ))}
                </ul>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2">
                   {exp.tech.map((t) => (
                     <span key={t} className="px-3 py-1 text-xs font-mono text-gray-500 border border-white/5 rounded hover:text-white hover:border-white/20 transition-colors">
                       {t}
                     </span>
                   ))}
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}