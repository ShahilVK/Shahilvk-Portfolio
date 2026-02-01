

// "use client";
// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useRef } from "react";

// gsap.registerPlugin(ScrollTrigger);

// export default function About() {
//   const container = useRef<HTMLElement>(null);

//   useGSAP(() => {
//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: container.current,
//         start: "top 75%", // Triggers slightly earlier for smoother entry
//         toggleActions: "play none none reverse",
//       },
//     });

//     tl.from(".about-badge", {
//       x: -50,
//       opacity: 0,
//       duration: 0.8,
//       ease: "power3.out",
//     })
//     .from(".about-title", {
//       y: 50,
//       opacity: 0,
//       duration: 0.8,
//       ease: "power3.out",
//     }, "-=0.6")
//     .from(".about-content", {
//       y: 30,
//       opacity: 0,
//       duration: 0.8,
//       stagger: 0.1,
//       ease: "power3.out",
//     }, "-=0.6");
    
//   }, { scope: container });

//   return (
//     <section ref={container} id="about" className="py-32 px-6 md:px-12 lg:px-24 bg-background relative border-t border-white/5">
//       <div className="max-w-7xl mx-auto">
        
//         {/* Section Label */}
//         <p className="about-badge text-primary mb-8 font-mono text-sm tracking-[0.2em] flex items-center gap-3">
//            <span className="w-8 h-[px] bg-primary"></span>
//            01 / NARRATIVE
//         </p>
        
//         {/* Main Headline */}
//         <h2 className="about-title text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.1] text-white mb-20 max-w-5xl uppercase">
//           I SPECIALIZE IN BUILDING <span className="text-gray-600">SCALABLE</span> APPLICATIONS WITH 
//           <span className="text-primary block mt-2"> CLEAN ARCHITECTURE.</span>
//         </h2>

//         {/* Content Grid */}
//         <div className="grid md:grid-cols-12 gap-12 md:gap-24 text-gray-400 leading-relaxed">
          
//           {/* Left Column: Description */}
//           <div className="about-content md:col-span-7 text-lg md:text-xl space-y-8 font-light">
//             <p>
//               Full Stack Developer with hands-on experience building robust solutions using 
//               <strong className="text-white font-medium"> C#, ASP.NET Core, MS SQL Server and ADO.NET</strong>. 
//               I focus on performance, maintainability, and intuitive user experiences.
//             </p>
//             <p>
//               I have designed and delivered <strong className="text-white font-medium">40+ RESTful APIs</strong>, 
//               integrated React.js frontends, and optimized database queries to improve application performance by 
//               <span className="text-primary"> 30%</span>.
//             </p>
//           </div>
          
//           {/* Right Column: Details */}
//           <div className="about-content md:col-span-5 space-y-10">
             
//              {/* Tech Stack Block */}
//              <div className="border-l-2 border-white/10 pl-6 hover:border-primary transition-colors duration-300">
//                 <h4 className="text-white font-bold text-sm tracking-widest mb-2 uppercase">Core Stack</h4>
//                 <p className="text-lg text-gray-300">
//                   .NET Core, Entity Framework, SQL Server, ADO.Net React.js
//                 </p>
//              </div>

//              {/* Location Block */}
//              <div className="border-l-2 border-white/10 pl-6 hover:border-primary transition-colors duration-300">
//                 <h4 className="text-white font-bold text-sm tracking-widest mb-2 uppercase">Location</h4>
//                 <p className="text-lg text-gray-300">
//                   Palakkad, Kerala
//                 </p>
//                 <p className="text-sm text-gray-500 mt-1">Available for Work</p>
//              </div>

//              {/* Education Block */}
//              <div className="border-l-2 border-white/10 pl-6 hover:border-primary transition-colors duration-300">
//                 <h4 className="text-white font-bold text-sm tracking-widest mb-2 uppercase">Education</h4>
//                 <p className="text-lg text-gray-300">
//                   Plus Two Commerce (CA)
//                 </p>
//              </div>

//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }




"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const container = useRef<HTMLElement>(null);
  const rightColumn = useRef<HTMLDivElement>(null);
  const bgGlow = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  // Refs for mouse follow performance
  const xTo = useRef<any>(null);
  const yTo = useRef<any>(null);

  useGSAP(() => {
    // 0. SETUP MOUSE FOLLOWER (New Premium Function)
    // quickTo is much more performant than standard .to() for mouse movement
    xTo.current = gsap.quickTo(bgGlow.current, "x", { duration: 0.8, ease: "power3" });
    yTo.current = gsap.quickTo(bgGlow.current, "y", { duration: 0.8, ease: "power3" });

    // 1. PREMIUM TEXT REVEAL (Existing Masked Slide Up)
    const titleLines = gsap.utils.toArray(".reveal-text");
    gsap.fromTo(titleLines, 
      { y: 100, opacity: 0, rotateX: -20 },
      {
        y: 0,
        opacity: 1,
        rotateX: 0,
        duration: 1.2,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // 2. EXIT BLUR EFFECT (New Premium Function)
    // The title blurs out as you scroll past it
    gsap.to(titleRef.current, {
      opacity: 0,
      filter: "blur(10px)",
      scale: 0.95,
      ease: "none",
      scrollTrigger: {
        trigger: titleRef.current,
        start: "bottom 60%", // Starts blurring when title is halfway up
        end: "bottom 20%",
        scrub: true,
      },
    });

    // 3. 3D PARALLAX ENTRANCE (Enhanced)
    // Adds 3D rotation + Parallax for depth
    gsap.fromTo(rightColumn.current, 
      { y: 100, opacity: 0 },
      {
        y: -50, // Parallax move up
        opacity: 1,
        ease: "none",
        scrollTrigger: {
          trigger: container.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.2,
        },
      }
    );

    // 4. GENERAL FADE IN FOR CONTENT
    gsap.from(".about-content-item", {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".about-grid",
        start: "top 85%",
      }
    });
    
  }, { scope: container });

  // Mouse Move Handler
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!bgGlow.current || !xTo.current || !yTo.current) return;
    
    // Calculate position relative to the container
    const rect = container.current?.getBoundingClientRect();
    if (rect) {
        const x = e.clientX - rect.left - 250; // -250 to center the 500px glow
        const y = e.clientY - rect.top - 250;
        xTo.current(x);
        yTo.current(y);
    }
  };

  return (
    <section 
      ref={container} 
      id="about" 
      onMouseMove={handleMouseMove} // Added Event Listener
      className="py-32 px-6 md:px-12 lg:px-24 bg-background relative border-t border-white/5 overflow-hidden group"
    >
      
      {/* Decorative Background Glow (Interactive) */}
      <div 
        ref={bgGlow}
        className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none mix-blend-screen opacity-60 transition-opacity duration-500 group-hover:opacity-100"
      ></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Label */}
        <div className="overflow-hidden mb-8">
            <p className="reveal-text about-badge text-primary font-mono text-sm tracking-[0.2em] flex items-center gap-3">
            <span className="w-8 h-px bg-primary"></span>
            01 / NARRATIVE
            </p>
        </div>
        
        {/* Main Headline */}
        <h2 ref={titleRef} className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.1] text-white mb-20 max-w-5xl uppercase perspective-text will-change-transform">
          <span className="block overflow-hidden"><span className="block reveal-text">I SPECIALIZE IN BUILDING</span></span>
          <span className="block overflow-hidden"><span className="block reveal-text text-gray-500">SCALABLE APPLICATIONS</span></span>
          <span className="block overflow-hidden"><span className="block reveal-text">WITH <span className="text-primary inline-block transform origin-left hover:scale-105 transition-transform duration-300">CLEAN ARCHITECTURE.</span></span></span>
        </h2>

        {/* Content Grid */}
        <div className="about-grid grid md:grid-cols-12 gap-12 md:gap-24 text-gray-400 leading-relaxed">
          
          {/* Left Column: Description */}
          <div className="md:col-span-7 text-lg md:text-xl space-y-8 font-light">
            <div className="about-content-item">
                <p>
                Full Stack Developer with hands-on experience building robust solutions using 
                <strong className="text-white font-medium border-b border-white/20 pb-0.5 hover:border-primary transition-colors"> C#, ASP.NET Core, MS SQL Server and ADO.NET</strong>. 
                I focus on performance, maintainability, and intuitive user experiences.
                </p>
            </div>
            <div className="about-content-item">
                <p>
                I have designed and delivered <strong className="text-white font-medium">40+ RESTful APIs</strong>, 
                integrated React.js frontends, and optimized database queries to improve application performance by 
                <span className="text-primary font-bold"> 30%</span>.
                </p>
            </div>
          </div>
          
          {/* Right Column: Details (Parallax Target) */}
          <div ref={rightColumn} className="md:col-span-5 space-y-10">
             
             {/* Tech Stack Block */}
             <div className="about-content-item group border-l-2 border-white/10 pl-6 hover:border-primary transition-colors duration-500">
                <h4 className="text-white font-bold text-xs tracking-[0.2em] mb-3 uppercase opacity-50 group-hover:opacity-100 transition-opacity">Core Stack</h4>
                <p className="text-lg text-gray-300 group-hover:text-white transition-colors">
                  .NET Core, Entity Framework, SQL Server, ADO.Net, React.js
                </p>
             </div>

             {/* Location Block */}
             <div className="about-content-item group border-l-2 border-white/10 pl-6 hover:border-primary transition-colors duration-500">
                <h4 className="text-white font-bold text-xs tracking-[0.2em] mb-3 uppercase opacity-50 group-hover:opacity-100 transition-opacity">Location</h4>
                <p className="text-lg text-gray-300 group-hover:text-white transition-colors">
                  Palakkad, Kerala
                </p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                  </span>
                  <p className="text-xs text-primary/80 font-mono uppercase tracking-wider">Available for Work</p>
                </div>
             </div>

             {/* Education Block */}
             <div className="about-content-item group border-l-2 border-white/10 pl-6 hover:border-primary transition-colors duration-500">
                <h4 className="text-white font-bold text-xs tracking-[0.2em] mb-3 uppercase opacity-50 group-hover:opacity-100 transition-opacity">Education</h4>
                <p className="text-lg text-gray-300 group-hover:text-white transition-colors">
                  Plus Two Commerce (CA)
                </p>
             </div>

          </div>
        </div>
      </div>
    </section>
  );
}