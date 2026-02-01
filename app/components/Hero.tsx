"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { ArrowUpRight, FileText, Github, Linkedin, Instagram } from "lucide-react"; // Added Social Icons

export default function Hero() {
  const container = useRef<HTMLElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(".hero-badge", {
      y: -20,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    })
    .from(".hero-text", {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power4.out",
    }, "-=0.5")
    .from(".hero-btn", {
      scale: 0.9,
      opacity: 0,
      duration: 0.5,
      stagger: 0.1,
      ease: "back.out(1.7)",
    }, "-=0.2")
    .from(".social-icon", {
      y: 20,
      opacity: 0,
      duration: 0.5,
      stagger: 0.1,
      ease: "power2.out",
    }, "-=0.3");
  }, { scope: container });

  return (
    <section 
      ref={container} 
      className="h-screen flex flex-col justify-center items-center text-center px-4 bg-background relative overflow-hidden"
    >
      
      {/* 1. Top Badge */}
      <div className="hero-badge mb-8 border border-white/10 px-5 py-2 rounded-full inline-flex items-center gap-3 bg-secondary/50 backdrop-blur-md">
        <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
        <span className="text-[10px] md:text-xs tracking-[0.2em] text-gray-400 uppercase font-medium">
          HELLO I'M SHAHIL VK 👋
        </span>
      </div>

      {/* 2. Main Typography (Video Style) */}
      <div className="font-display font-bold uppercase select-none flex flex-col items-center leading-none">
        
        {/* Row 1: .NET (White) + Full Stack (Grey) */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-6 items-baseline">
           <span className="hero-text text-[16vw] md:text-[8.5rem] text-white tracking-tighter">
             .NET
           </span>
           <span className="hero-text text-[16vw] md:text-[8.5rem] text-gray-600 tracking-tighter">
             Full stack
           </span>
        </div>

        {/* Row 2: Developer (Italic & Darker) */}
        <div className="hero-text">
          <span className="text-[16vw] md:text-[8.5rem] text-gray-800 italic pr-4" style={{ fontFamily: 'var(--font-inter)' }}>
            Developer
          </span>
        </div>
      </div>

      {/* 3. Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mt-12 mb-12">
        {/* Email Me (Neon) */}
        <a 
          href="mailto:shahilvk99@gmail.com" 
          className="hero-btn group bg-primary text-black px-8 py-3 rounded-full font-bold text-sm md:text-base tracking-wide hover:scale-105 transition-transform flex items-center gap-2"
        >
          Email me <ArrowUpRight className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" size={18} />
        </a>

        {/* Get Resume (Dark) */}
        <a 
          href="/Shahil-CV.pdf" 
          download 
          className="hero-btn group bg-secondary border border-white/10 text-white px-8 py-3 rounded-full font-bold text-sm md:text-base tracking-wide hover:bg-white/10 transition-colors flex items-center gap-2"
        >
          <FileText size={18} className="text-gray-400 group-hover:text-white transition-colors"/> 
          GET RESUME
        </a>
      </div>

      {/* 4. Social Icons (From Video Bottom) */}
      <div className="flex gap-6 items-center">
        <a href="https://github.com/ShahilVK" className="social-icon text-gray-500 hover:text-white transition-colors p-2 bg-secondary/50 rounded-full hover:bg-white/10">
          <Github size={20} />
        </a>
        <a href="https://www.linkedin.com/in/shahil-vk-02b7a537a" className="social-icon text-gray-500 hover:text-white transition-colors p-2 bg-secondary/50 rounded-full hover:bg-white/10">
          <Linkedin size={20} />
        </a>
        <a href="https://www.instagram.com/shaahill__" className="social-icon text-gray-500 hover:text-white transition-colors p-2 bg-secondary/50 rounded-full hover:bg-white/10">
          <Instagram size={20} />
        </a>
      </div>

    </section>
  );
}