


"use client";
import { Database, Layout, Server, Cpu, Globe } from "lucide-react";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Define the type for the skills data
type Skill = {
  id: string;
  category: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
};

const skills: Skill[] = [
  {
    id: "01",
    category: "Backend",
    title: "ASP.NET Core & C#",
    desc: "RESTful APIs, Entity Framework (ORM), ADO.NET",
    icon: <Server size={28} />,
  },
  {
    id: "02",
    category: "Frontend",
    title: "React.js & Redux",
    desc: "Tailwind CSS, Bootstrap, Modern UI/UX",
    icon: <Layout size={28} />,
  },
  {
    id: "03",
    category: "Database",
    title: "MS SQL Server",
    desc: "Stored Procedures, Query Optimization",
    icon: <Database size={28} />,
  },
  {
    id: "04",
    category: "Architecture",
    title: "Clean Architecture",
    desc: "N-Layer Design, Dependency Injection, SOLID",
    icon: <Cpu size={28} />,
  },
  {
    id: "05",
    category: "API Development",
    title: "RESTful APIs",
    desc: "Authentication (JWT), Swagger, Postman",
    icon: <Globe size={28} />,
  },
];

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }

    const slider = sliderRef.current;
    if (!slider) return;

    // 1. Horizontal Scroll Animation
    // Calculates the exact distance needed to scroll to the end
    const getScrollAmount = () => {
      let racesWidth = slider.scrollWidth;
      return -(racesWidth - window.innerWidth + 100); // +100 adds a little buffer at the end
    };

    const tween = gsap.to(slider, {
      x: getScrollAmount,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        pin: true,            // Pins the section while scrolling
        scrub: 1,             // Smooth scrubbing linked to scroll speed
        invalidateOnRefresh: true, // Recalculates on window resize
        end: () => "+=" + slider.scrollWidth, // Defines how long the scroll lasts
      }
    });

    // 2. Background Marquee Animation
    gsap.to(".marquee-text", {
      xPercent: -50, 
      repeat: -1, 
      duration: 40, 
      ease: "linear",
    });

    return () => {
      tween.kill(); // Cleanup
    };

  }, { scope: sectionRef });

  return (
    <section 
      ref={sectionRef} 
      id="skills" 
      className="py-32 bg-background relative overflow-hidden w-full h-screen flex flex-col justify-center"
    >
      
      {/* Background Marquee Text */}
      <div className="absolute top-20 left-0 w-full overflow-hidden opacity-[0.05] pointer-events-none select-none flex">
         <div className="marquee-text whitespace-nowrap font-display font-bold text-[12vw] leading-none text-transparent stroke-text flex gap-10 pr-10">
            <span>C# ASP.NET CORE SQL ADO.NET REACT CLEAN-ARCHITECTURE</span>
            <span>ASP.NET REACT SQL C# ADO.NET CLEAN-ARCH</span>
         </div>
      </div>

      {/* Header */}
      <div className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto w-full mb-16 relative z-10">
         <span className="text-primary font-mono text-sm tracking-[0.2em] flex items-center gap-3 mb-4">
           <span className="w-8 h-px bg-primary"></span>
           02 / EXPERTISE
         </span>
         <h2 className="text-5xl md:text-7xl font-display font-bold text-white leading-[0.9]">
           TECHNICAL<br />SKILLS
         </h2>
      </div>

      {/* Horizontal Slider Container */}
      <div className="w-full relative z-10 pl-6 md:pl-24">
        <div ref={sliderRef} className="flex gap-8 w-fit">
          {skills.map((skill) => (
            <div 
              key={skill.id} 
              // Fixed widths added to maintain card shape during scroll
              // Updated h-[350px] to h-87.5 as requested
              className="skill-card group relative bg-secondary p-8 rounded-4xl border border-white/5 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between h-87.5 w-[85vw] md:w-[40vw] lg:w-[25vw] shrink-0"
            >
              
              {/* Top Row: Icon Box (Left) & ID (Right) */}
              <div className="flex justify-between items-start mb-8">
                
                {/* Icon Box */}
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center bg-white/5 text-primary group-hover:bg-primary group-hover:text-black transition-all duration-300 shadow-lg group-hover:shadow-[0_0_20px_rgba(204,255,0,0.4)]">
                  {skill.icon}
                </div>

                {/* ID Number */}
                <span className="text-white/20 font-mono text-xl group-hover:text-white/50 transition-colors">
                  {skill.id}
                </span>
              </div>

              {/* Bottom Row: Text Content */}
              <div>
                <p className="text-primary text-xs font-bold uppercase tracking-widest mb-3 font-mono">
                    {skill.category}
                </p>
                <h4 className="text-3xl font-bold text-white mb-4 tracking-tight group-hover:text-primary transition-colors">
                    {skill.title}
                </h4>
                <p className="text-gray-400 text-base leading-relaxed font-light">
                    {skill.desc}
                </p>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}