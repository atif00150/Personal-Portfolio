'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowUpRight, Download, Code, Puzzle, BarChart3, Github, Linkedin, Twitter, Mail, Target } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative pt-3 md:pt-4 lg:pt-5 pb-4 md:pb-6 lg:pb-8 overflow-x-hidden">

      {/* Balanced Wide Container (1380px Desktop Width, Matching Navbar Boundaries) */}
      <div className="max-w-[1380px] mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Professional 2-Column CSS Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* LEFT COLUMN (6 Cols Desktop): Badge, Headline, Description, CTAs, Socials */}
          <div className="lg:col-span-6 space-y-6 w-full pt-1">
            
            {/* 1. Status Badge */}
            <div 
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 text-xs font-black tracking-wider uppercase animate-fade-up"
              style={{ animationDelay: '0.1s' }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
              </span>
              AVAILABLE FOR WORK
            </div>

            {/* 2. Main Headline */}
            <h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-gray-900 leading-[1.18] font-lato max-w-[620px] animate-fade-up"
              style={{ animationDelay: '0.25s' }}
            >
              I build digital<br className="hidden sm:inline" />
              {' '}products that<br className="hidden sm:inline" />
              {' '}<span className="text-emerald-600 underline decoration-emerald-300 decoration-wavy decoration-2">solve</span>{' '}
              real <span className="text-terracotta">problems.</span>
            </h1>

            {/* 3. Description */}
            <p 
              className="text-lg text-gray-600 max-w-xl leading-relaxed font-lato animate-fade-up"
              style={{ animationDelay: '0.4s' }}
            >
              Full Stack Developer crafting modern web applications, AI-powered tools and scalable solutions that create meaningful impact.
            </p>

            {/* 4. CTA Buttons & Social Block */}
            <div 
              className="space-y-4 pt-1 font-lato animate-fade-up"
              style={{ animationDelay: '0.55s' }}
            >
              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-3.5">
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center gap-2 px-6 h-11 rounded-full bg-terracotta hover:bg-terracotta-hover text-white font-bold text-sm transition-all shadow-sm hover:shadow-md transform hover:-translate-y-0.5 shrink-0"
                >
                  View My Work
                  <ArrowUpRight className="w-4.5 h-4.5" />
                </a>

                <a
                  href="/Muhammad Atif SE.pdf"
                  download="Muhammad_Atif_CV.pdf"
                  className="inline-flex items-center justify-center gap-2 px-6 h-11 rounded-full border-2 border-emerald-600 text-emerald-700 hover:bg-emerald-500/10 font-bold text-sm transition-all shrink-0"
                >
                  Download CV
                  <Download className="w-4.5 h-4.5" />
                </a>
              </div>

              {/* Social Links */}
              <div className="flex flex-wrap items-center gap-3.5 pt-0.5">
                <span className="text-xs font-extrabold uppercase tracking-wider text-gray-500 shrink-0">
                  Let's connect
                </span>
                <div className="flex flex-wrap items-center gap-2.5">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-full bg-white border border-black/5 shadow-xs text-gray-700 hover:text-terracotta hover:scale-110 transition-all"
                    aria-label="GitHub"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-full bg-white border border-black/5 shadow-xs text-gray-700 hover:text-terracotta hover:scale-110 transition-all"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-full bg-white border border-black/5 shadow-xs text-gray-700 hover:text-terracotta hover:scale-110 transition-all"
                    aria-label="Twitter"
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=atifmughal00150@gmail.com&su=Project%20Inquiry%20%E2%80%94%20Muhammad%20Atif&body=Hi%20Atif%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project.%0A%0ABest%2C"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-white border border-black/5 shadow-xs text-gray-700 hover:text-terracotta hover:scale-110 transition-all"
                    aria-label="Email"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN (6 Cols Desktop): Profile Composition Visually Aligned to Right Boundary */}
          <div className="lg:col-span-6 relative flex items-center justify-center lg:justify-end py-2">
            
            {/* Centered Composition Container */}
            <div className="relative w-full max-w-[520px] sm:max-w-[580px] lg:max-w-[610px] min-h-[500px] sm:min-h-[560px] lg:min-h-[610px] flex items-center justify-center">

              {/* 1. Proportioned 3D Orbital System with Vertical Dotted Ring (Behind Profile) */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
                
                {/* Main 3D Orbit Container (Slightly larger as requested) */}
                <div className="relative w-[480px] h-[480px] sm:w-[540px] sm:h-[540px] lg:w-[610px] lg:h-[610px] [transform:rotateX(42deg)_rotateY(-8deg)] transition-all">
                  
                  {/* Layer 1: Primary Outer Ring (Compact Green Ring) */}
                  <svg 
                    viewBox="0 0 500 500" 
                    className="absolute inset-0 w-full h-full animate-spin-clockwise"
                  >
                    <circle 
                      cx="250" 
                      cy="250" 
                      r="215" 
                      fill="none" 
                      stroke="#38a159" 
                      strokeWidth="1.8" 
                      strokeOpacity="0.45" 
                    />
                    {/* Orbit Particles */}
                    <circle cx="98" cy="98" r="5" fill="#38a159" />
                    <circle cx="402" cy="402" r="5" fill="#c85a28" />
                  </svg>
 
                  {/* Layer 2: Secondary Inner Ring (Dashed, Counter-Clockwise, Terracotta Accent) */}
                  <svg 
                    viewBox="0 0 500 500" 
                    className="absolute inset-0 w-full h-full animate-spin-counter-clockwise"
                  >
                    <circle 
                      cx="250" 
                      cy="250" 
                      r="175" 
                      fill="none" 
                      stroke="#c85a28" 
                      strokeWidth="1.6" 
                      strokeDasharray="6 8" 
                      strokeOpacity="0.38" 
                    />
                    {/* Orbit Particles */}
                    <circle cx="374" cy="126" r="4.5" fill="#38a159" />
                    <circle cx="126" cy="374" r="4.5" fill="#c85a28" />
                  </svg>
 
                </div>
 
                {/* Layer 3: Vertical Dotted Ring Container (Slightly larger as requested) */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-[450px] h-[450px] sm:w-[510px] sm:h-[510px] lg:w-[570px] lg:h-[570px] [transform:rotateX(72deg)_rotateY(-14deg)] transition-all">
                    <svg 
                      viewBox="0 0 500 500" 
                      className="absolute inset-0 w-full h-full animate-spin-clockwise"
                      style={{ animationDuration: '52s' }}
                    >
                      <circle 
                        cx="250" 
                        cy="250" 
                        r="198" 
                        fill="none" 
                        stroke="#38a159" 
                        strokeWidth="1.8" 
                        strokeDasharray="3 6" 
                        strokeOpacity="0.4" 
                      />
                      {/* Vertical Dotted Ring Particles */}
                      <circle cx="250" cy="52" r="5" fill="#38a159" />
                      <circle cx="250" cy="448" r="5" fill="#c85a28" />
                    </svg>
                  </div>
                </div>

              </div>

              {/* 2. ENLARGED Profile Avatar Circle (410px Desktop Diameter) */}
              <div 
                className="relative z-10 w-80 h-80 sm:w-96 sm:h-96 lg:w-[410px] lg:h-[410px] rounded-full p-3 bg-[#c2d8c9] shadow-2xl flex items-center justify-center border-[6px] border-white animate-scale-in shrink-0"
                style={{ animationDelay: '0.3s' }}
              >
                <Image
                  src="/Profile Picture.png"
                  alt="Atif Mughal"
                  width={440}
                  height={440}
                  priority
                  className="w-full h-full object-cover object-top rounded-full transform hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* 3. Floating Cards Positioned Intentionally Close to Profile Circle */}
              
              {/* Card 1: Clean Code (Upper-Left) */}
              <div 
                className="absolute top-0 left-0 sm:-left-2 z-20 bg-white shadow-[0_12px_32px_rgba(0,0,0,0.07)] rounded-3xl p-3.5 sm:p-4 border border-black/5 animate-float-card min-w-[165px] sm:min-w-[180px]"
                style={{ animationDelay: '0s' }}
              >
                <div className="w-9 h-9 rounded-2xl bg-[#fef2eb] flex items-center justify-center text-terracotta mb-2">
                  <Code className="w-4.5 h-4.5" />
                </div>
                <h4 className="text-xs sm:text-sm font-extrabold text-gray-900 font-lato">Clean Code</h4>
                <p className="text-[11px] font-semibold text-gray-500 font-lato mt-0.5">Always</p>
              </div>

              {/* Card 2: Available (Upper-Right) */}
              <div 
                className="absolute top-4 right-0 sm:-right-2 z-20 bg-white shadow-[0_12px_32px_rgba(0,0,0,0.07)] rounded-3xl p-3.5 sm:p-4 border border-black/5 animate-float-card min-w-[175px] sm:min-w-[190px]"
                style={{ animationDelay: '1.5s' }}
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 shrink-0"></span>
                  <h4 className="text-xs sm:text-sm font-extrabold text-gray-900 font-lato">Available</h4>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] font-semibold text-gray-500 font-lato">
                  <Target className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>for new work</span>
                </div>
              </div>

              {/* Card 3: Problem Solver (Lower-Left) */}
              <div 
                className="absolute bottom-2 left-0 sm:-left-2 z-20 bg-white shadow-[0_12px_32px_rgba(0,0,0,0.07)] rounded-3xl p-3.5 sm:p-4 border border-black/5 animate-float-card max-w-[190px] sm:max-w-[210px]"
                style={{ animationDelay: '3s' }}
              >
                <div className="w-9 h-9 rounded-2xl bg-[#e8f5ec] flex items-center justify-center text-emerald-600 mb-2">
                  <Puzzle className="w-4.5 h-4.5" />
                </div>
                <h4 className="text-xs sm:text-sm font-extrabold text-gray-900 font-lato">Problem Solver</h4>
                <p className="text-[11px] font-medium text-gray-500 font-lato mt-0.5 leading-snug">
                  Turning ideas into real solutions.
                </p>
              </div>

              {/* Card 4: Building for Impact (Lower-Right) */}
              <div 
                className="absolute bottom-0 right-0 sm:-right-2 z-20 bg-white shadow-[0_12px_32px_rgba(0,0,0,0.07)] rounded-3xl p-3.5 sm:p-4 border border-black/5 animate-float-card max-w-[200px] sm:max-w-[220px]"
                style={{ animationDelay: '4.5s' }}
              >
                <div className="w-9 h-9 rounded-2xl bg-[#fef2eb] flex items-center justify-center text-terracotta mb-2">
                  <BarChart3 className="w-4.5 h-4.5" />
                </div>
                <h4 className="text-xs sm:text-sm font-extrabold text-gray-900 font-lato">Building for impact</h4>
                <p className="text-[11px] font-medium text-gray-500 font-lato mt-0.5 leading-snug">
                  Scalable. Reliable. Meaningful.
                </p>
              </div>

              </div>

            </div>

          </div>

        </div>
    </section>
  );
}
