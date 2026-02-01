// "use client";
// import { Github, Linkedin, Mail, ArrowUp, Instagram, Send } from "lucide-react";
// import React, { useRef } from "react";
// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// export default function Footer() {
//   const footerRef = useRef<HTMLElement>(null);

//   useGSAP(() => {
//     if (typeof window !== "undefined") {
//       gsap.registerPlugin(ScrollTrigger);
//     }

//     // Parallax Reveal Effect
//     gsap.from(footerRef.current, {
//       yPercent: 20,
//       opacity: 0,
//       duration: 1,
//       ease: "power2.out",
//       scrollTrigger: {
//         trigger: footerRef.current,
//         start: "top bottom",
//         toggleActions: "play none none reverse",
//       },
//     });
//   }, { scope: footerRef });

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   return (
//     <footer 
//       ref={footerRef} 
//       className="py-24 px-6 md:px-12 lg:px-24 bg-background border-t border-white/5 relative overflow-hidden"
//     >
//       <div className="max-w-7xl mx-auto relative z-10">
        
//         {/* Top Section: Grid Layout for Text & Form */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-20">
          
//           {/* Left Column: CTA Text & Email */}
//           <div className="flex flex-col justify-between">
//              <div>
//                 <span className="text-primary font-mono text-sm tracking-[0.2em] flex items-center gap-3 mb-6">
//                    <span className="w-8 h-px bg-primary"></span>
//                    CONTACT
//                 </span>
//                 <h2 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white leading-[0.9] mb-8">
//                   LET'S WORK <br /> 
//                   <span className="text-transparent stroke-text hover:text-primary transition-colors duration-500 cursor-default">
//                     TOGETHER
//                   </span>
//                 </h2>
                
//                 {/* Email Button */}
//                 <a 
//                   href="mailto:shahilvk99@gmail.com" 
//                   className="group inline-flex items-center gap-4 text-xl md:text-2xl text-gray-400 hover:text-white transition-colors duration-300"
//                 >
//                   <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-primary group-hover:border-primary group-hover:text-black transition-all duration-300">
//                     <Mail size={20} />
//                   </div>
//                   <span className="border-b border-transparent group-hover:border-primary pb-1">
//                     shahilvk99@gmail.com
//                   </span>
//                 </a>
//              </div>
             
//              {/* Back to Top (Desktop Position) */}
//              <div className="hidden lg:block mt-12">
//                  <button 
//                     onClick={scrollToTop}
//                     className="flex items-center gap-4 group"
//                   >
//                     <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300">
//                       <ArrowUp size={24} className="group-hover:-translate-y-1 transition-transform" />
//                     </div>
//                     <span className="text-xs font-mono text-gray-500 uppercase tracking-widest group-hover:text-white transition-colors">
//                       Back to Top
//                     </span>
//                   </button>
//              </div>
//           </div>

//           {/* Right Column: Small Contact Form */}
//           <div className="w-full">
//             <form className="bg-secondary/30 backdrop-blur-sm p-8 md:p-10 rounded-3xl border border-white/5 space-y-6">
//                 <h3 className="text-2xl font-bold text-white mb-2">Send a Message</h3>
                
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     <div className="space-y-2">
//                         <label className="text-xs font-mono text-gray-500 uppercase tracking-widest">Name</label>
//                         <input 
//                           type="text" 
//                           placeholder="John Doe" 
//                           className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors"
//                         />
//                     </div>
//                     <div className="space-y-2">
//                         <label className="text-xs font-mono text-gray-500 uppercase tracking-widest">Email</label>
//                         <input 
//                           type="email" 
//                           placeholder="john@example.com" 
//                           className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors"
//                         />
//                     </div>
//                 </div>

//                 <div className="space-y-2">
//                     <label className="text-xs font-mono text-gray-500 uppercase tracking-widest">Message</label>
//                     <textarea 
//                       rows={4} 
//                       placeholder="Tell me about your project..." 
//                       className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors resize-none"
//                     ></textarea>
//                 </div>

//                 <button className="w-full bg-primary hover:bg-white text-black font-bold uppercase tracking-widest py-4 rounded-xl transition-colors duration-300 flex items-center justify-center gap-2 group">
//                    <span>Send Message</span>
//                    <Send size={18} className="group-hover:translate-x-1 transition-transform" />
//                 </button>
//             </form>

//             {/* Back to Top (Mobile Position) */}
//             <div className="lg:hidden flex justify-center mt-12">
//                  <button onClick={scrollToTop} className="flex flex-col items-center gap-2 group">
//                     <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300">
//                       <ArrowUp size={20} />
//                     </div>
//                     <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">Back to Top</span>
//                  </button>
//             </div>
//           </div>

//         </div>

//         {/* Divider */}
//         <div className="w-full h-px bg-white/10 mb-12"></div>

//         {/* Bottom Section: Links & Copyright */}
//         <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-sm text-gray-500 font-mono">
          
//           {/* Copyright */}
//           <p>© 2026 Shahil Vk. All rights reserved.</p>

//           {/* Social Links */}
//           <div className="flex gap-8">
//              <a href="https://www.linkedin.com/in/shahil-vk-02b7a537a" className="hover:text-primary transition-colors uppercase tracking-wider">LinkedIn</a>
//              <a href="https://github.com/ShahilVK" className="hover:text-primary transition-colors uppercase tracking-wider">GitHub</a>
//              <a href="https://www.instagram.com/shaahill__" className="hover:text-primary transition-colors uppercase tracking-wider">Instagram</a>
//           </div>

//           {/* Credits */}
//           <p className="hidden md:block">
//             Built with Next.js & GSAP
//           </p>
//         </div>

//       </div>

//       {/* Decorative Background Glow */}
//       {/* Updated w-[500px] -> w-125 and h-[500px] -> h-125 */}
//       <div className="absolute -bottom-1/2 -left-1/4 w-125 h-125 bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>
//     </footer>
//   );
// }




"use client";

import { Github, Linkedin, Mail, ArrowUp, Instagram } from "lucide-react";

import React, { useRef } from "react";

import { useGSAP } from "@gsap/react";

import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";



export default function Footer() {

  const footerRef = useRef<HTMLElement>(null);



  useGSAP(() => {

    if (typeof window !== "undefined") {

      gsap.registerPlugin(ScrollTrigger);

    }



    // Parallax Reveal Effect

    gsap.from(footerRef.current, {

      yPercent: 20,

      opacity: 0,

      duration: 1,

      ease: "power2.out",

      scrollTrigger: {

        trigger: footerRef.current,

        start: "top bottom",

        toggleActions: "play none none reverse",

      },

    });

  }, { scope: footerRef });



  const scrollToTop = () => {

    window.scrollTo({ top: 0, behavior: "smooth" });

  };



  return (

    <footer

      ref={footerRef}

      className="py-24 px-6 md:px-12 lg:px-24 bg-background border-t border-white/5 relative overflow-hidden"

    >

      <div className="max-w-7xl mx-auto relative z-10">

       

        {/* Top Section: CTA */}

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12 mb-20">

          <div>

            <span className="text-primary font-mono text-sm tracking-[0.2em] flex items-center gap-3 mb-6">

               <span className="w-8 h-px bg-primary"></span>

               CONTACT

            </span>

            <h2 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white leading-[0.9] mb-8">

              LET'S WORK <br />

              <span className="text-transparent stroke-text hover:text-primary transition-colors duration-500 cursor-default">

                TOGETHER

              </span>

            </h2>

           

            {/* Email Button */}

            <a

              href="mailto:shahilvk99@gmail.com"

              className="group inline-flex items-center gap-4 text-xl md:text-2xl text-gray-400 hover:text-white transition-colors duration-300"

            >

              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-primary group-hover:border-primary group-hover:text-black transition-all duration-300">

                <Mail size={20} />

              </div>

              <span className="border-b border-transparent group-hover:border-primary pb-1">

                shahilvk99@gmail.com

              </span>

            </a>

          </div>



          {/* Back to Top Button */}

          <button

            onClick={scrollToTop}

            className="hidden md:flex flex-col items-center gap-2 group"

          >

            <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300">

              <ArrowUp size={24} className="group-hover:-translate-y-1 transition-transform" />

            </div>

            <span className="text-xs font-mono text-gray-500 uppercase tracking-widest group-hover:text-white transition-colors">

              Back to Top

            </span>

          </button>

        </div>



        {/* Divider */}

        <div className="w-full h-px bg-white/10 mb-12"></div>



        {/* Bottom Section: Links & Copyright */}

        <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-sm text-gray-500 font-mono">

         

          {/* Copyright */}

          <p>© 2026 Shahil Vk. All rights reserved.</p>



          {/* Social Links */}

          </div>
          </div>

          </footer>
          )}