

"use client";
import Link from 'next/link';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Initial Entry Animation
  useGSAP(() => {
    gsap.from(navRef.current, {
      y: -100,
      opacity: 0,
      duration: 1.2,
      ease: "power4.out",
      delay: 0.5,
    });
  }, { scope: navRef });

  // Mobile Menu Animation Control
  useEffect(() => {
    if (isMenuOpen) {
      // Open Animation
      gsap.to(mobileMenuRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power3.out",
        display: "flex",
      });
    } else {
      // Close Animation
      gsap.to(mobileMenuRef.current, {
        y: "-100%",
        opacity: 0,
        duration: 0.5,
        ease: "power3.in",
        onComplete: () => {
          if (mobileMenuRef.current) mobileMenuRef.current.style.display = "none";
        }
      });
    }
  }, [isMenuOpen]);

  // Links Array for cleaner code
  const navLinks = [
    { name: "NARRATIVE", href: "#about" },
    { name: "EXPERTISE", href: "#skills" },
    { name: "HISTORY", href: "#experience" }, // Added Experience Link
    { name: "WORKS", href: "#works" },
  ];

  return (
    <>
      <nav 
        ref={navRef} 
        className="fixed top-0 w-full p-6 md:p-8 flex justify-between items-center z-50 mix-blend-difference"
      >
        {/* Logo */}
        <div className="text-white font-bold text-xl md:text-2xl tracking-tighter cursor-pointer z-50">
          SHAHIL<span className="text-primary">VK</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-10 text-sm font-medium text-gray-300 tracking-widest">
          {navLinks.map((link) => (
             <Link 
               key={link.name} 
               href={link.href} 
               className="hover:text-primary transition-colors duration-300"
             >
               {link.name}
             </Link>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4 z-50">
          {/* Let's Talk Button */}
          <a 
            href="mailto:shahilvk99@gmail.com" 
            className="hidden md:block bg-white text-black px-6 py-2 rounded-full text-sm font-bold hover:bg-primary transition-colors duration-300"
          >
            LET'S TALK
          </a>

          {/* Mobile Menu Toggle Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white hover:text-primary transition-colors"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Full Screen Menu Overlay */}
      <div 
        ref={mobileMenuRef}
        className="fixed inset-0 bg-black z-40 hidden flex-col items-center justify-center gap-8"
        style={{ transform: "translateY(-100%)", opacity: 0 }}
      >
         {navLinks.map((link) => (
             <Link 
               key={link.name} 
               href={link.href} 
               onClick={() => setIsMenuOpen(false)} // Close menu on click
               className="text-3xl font-display font-bold text-white hover:text-primary transition-colors tracking-widest"
             >
               {link.name}
             </Link>
          ))}
          
          <a 
            href="mailto:shahilvk99@gmail.com" 
            className="mt-8 text-gray-400 text-lg hover:text-white"
          >
            shahilvk99@gmail.com
          </a>
      </div>
    </>
  );
}