

"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const container = useRef<HTMLElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top 75%", // Triggers slightly earlier for smoother entry
        toggleActions: "play none none reverse",
      },
    });

    tl.from(".about-badge", {
      x: -50,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    })
    .from(".about-title", {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    }, "-=0.6")
    .from(".about-content", {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "power3.out",
    }, "-=0.6");
    
  }, { scope: container });

  return (
    <section ref={container} id="about" className="py-32 px-6 md:px-12 lg:px-24 bg-background relative border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Label */}
        <p className="about-badge text-primary mb-8 font-mono text-sm tracking-[0.2em] flex items-center gap-3">
           <span className="w-8 h-[px] bg-primary"></span>
           01 / NARRATIVE
        </p>
        
        {/* Main Headline */}
        <h2 className="about-title text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.1] text-white mb-20 max-w-5xl uppercase">
          I SPECIALIZE IN BUILDING <span className="text-gray-600">SCALABLE</span> APPLICATIONS WITH 
          <span className="text-primary block mt-2"> CLEAN ARCHITECTURE.</span>
        </h2>

        {/* Content Grid */}
        <div className="grid md:grid-cols-12 gap-12 md:gap-24 text-gray-400 leading-relaxed">
          
          {/* Left Column: Description */}
          <div className="about-content md:col-span-7 text-lg md:text-xl space-y-8 font-light">
            <p>
              Full Stack Developer with hands-on experience building robust solutions using 
              <strong className="text-white font-medium"> C#, ASP.NET Core, MS SQL Server and ADO.NET</strong>. 
              I focus on performance, maintainability, and intuitive user experiences.
            </p>
            <p>
              I have designed and delivered <strong className="text-white font-medium">40+ RESTful APIs</strong>, 
              integrated React.js frontends, and optimized database queries to improve application performance by 
              <span className="text-primary"> 30%</span>.
            </p>
          </div>
          
          {/* Right Column: Details */}
          <div className="about-content md:col-span-5 space-y-10">
             
             {/* Tech Stack Block */}
             <div className="border-l-2 border-white/10 pl-6 hover:border-primary transition-colors duration-300">
                <h4 className="text-white font-bold text-sm tracking-widest mb-2 uppercase">Core Stack</h4>
                <p className="text-lg text-gray-300">
                  .NET Core, Entity Framework, SQL Server, ADO.Net React.js
                </p>
             </div>

             {/* Location Block */}
             <div className="border-l-2 border-white/10 pl-6 hover:border-primary transition-colors duration-300">
                <h4 className="text-white font-bold text-sm tracking-widest mb-2 uppercase">Location</h4>
                <p className="text-lg text-gray-300">
                  Palakkad, Kerala
                </p>
                <p className="text-sm text-gray-500 mt-1">Available for Work</p>
             </div>

             {/* Education Block */}
             <div className="border-l-2 border-white/10 pl-6 hover:border-primary transition-colors duration-300">
                <h4 className="text-white font-bold text-sm tracking-widest mb-2 uppercase">Education</h4>
                <p className="text-lg text-gray-300">
                  Plus Two Commerce (CA)
                </p>
             </div>

          </div>
        </div>
      </div>
    </section>
  );
}