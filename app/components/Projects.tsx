



"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { ArrowUpRight, Github } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Data Structure for Projects
const projects = [
  {
    id: "01",
    title: "E-Commerce Platform",
    category: "Full Stack Development",
    year: "2025",
    description: "A robust e-commerce solution featuring a secure authentication system using JWT & Refresh Tokens. I architected the database and developed 40+ RESTful APIs to support complex product catalogs, shopping carts, and checkout workflows, resulting in a 30% reduction in query response times.",
    tech: ["ASP.NET Core", "SQL Server", "React.js", "Redux", "Tailwind"],
    // Updated image to a cleaner Unsplash URL
    image: "https://i.pinimg.com/736x/76/1c/74/761c749dafe37daa7cd575491fbddb04.jpg", 
    link: "#",
    github: "#"
  },
//   {
//     id: "02",
//     title: "Employee Management System",
//     category: "Enterprise Application",
//     year: "2024",
//     description: "Designed a scalable N-Layer architecture application for managing employee records. Implemented role-based access control (RBAC), advanced filtering, and automated reporting. Optimized database stored procedures to handle large datasets efficiently.",
//     tech: ["C#", ".NET 8", "Entity Framework", "Bootstrap", "MS SQL"],
//     // Updated image to a cleaner Unsplash URL
//     image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop", 
//     link: "#",
//     github: "#"
//   }
];

export default function Projects() {
  const container = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }

    const projectCards = gsap.utils.toArray(".project-card");

    projectCards.forEach((card: any) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });
    });

  }, { scope: container });

  return (
    <section ref={container} id="works" className="py-32 px-6 md:px-12 lg:px-24 bg-background relative border-t border-white/5">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-24">
         <span className="text-primary font-mono text-sm tracking-[0.2em] flex items-center gap-3 mb-4">
           <span className="w-8 h-px bg-primary"></span>
           04 / WORKS
         </span>
         <h2 className="text-5xl md:text-7xl font-display font-bold text-white leading-[0.9]">
           SELECTED<br />PROJECTS
         </h2>
      </div>

      {/* Projects List */}
      <div className="max-w-7xl mx-auto flex flex-col gap-32">
        {projects.map((project, index) => (
          <div 
            key={project.id} 
            className={`project-card flex flex-col ${index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"} gap-12 lg:gap-20 items-center`}
          >
            
            {/* Image Section */}
            <div className="w-full lg:w-3/5 group relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
              <div className="aspect-video relative bg-secondary/50">
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 flex items-center justify-center gap-4">
                    <a href={project.link} className="w-16 h-16 bg-primary rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                        <ArrowUpRight className="text-black w-8 h-8" />
                    </a>
                </div>
                
                {/* Image */}
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                />
              </div>
            </div>

            {/* Content Section */}
            <div className="w-full lg:w-2/5 space-y-6">
               <div className="flex justify-between items-end border-b border-white/10 pb-6">
                  <div>
                    <span className="text-primary font-mono text-xs tracking-widest mb-2 block">
                        {project.category} — {project.year}
                    </span>
                    <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                        {project.title}
                    </h3>
                  </div>
                  <span className="text-white/10 font-display text-6xl font-bold hidden md:block">
                      {project.id}
                  </span>
               </div>

               <p className="text-gray-400 leading-relaxed text-lg font-light">
                 {project.description}
               </p>

               {/* Tech Stack Pills */}
               <div className="flex flex-wrap gap-2 pt-2">
                 {project.tech.map((t) => (
                    <span key={t} className="px-4 py-1.5 border border-white/10 rounded-full text-xs text-white/70 bg-white/5 font-mono hover:border-primary hover:text-primary transition-colors cursor-default">
                        {t}
                    </span>
                 ))}
               </div>

               {/* Links */}
               <div className="pt-6 flex gap-8">
                  <a href={project.link} className="flex items-center gap-2 text-white hover:text-primary transition-colors border-b border-transparent hover:border-primary pb-1">
                    <span className="font-bold text-sm tracking-widest uppercase">View Case Study</span>
                    <ArrowUpRight size={18} />
                  </a>
                  <a href={project.github} className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors">
                    <Github size={20} />
                    <span className="text-sm">Source Code</span>
                  </a>
               </div>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}


