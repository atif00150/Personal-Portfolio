'use client';

import React, { useState } from 'react';
import { 
  Code2, 
  Briefcase, 
  Send, 
  CheckCircle2, 
  Layers, 
  BrainCircuit, 
  Globe,
  ArrowRight,
  Folder,
  FileCode,
  Terminal,
  Database,
  Workflow,
  Boxes,
  FileText,
  ShieldCheck,
  Building2,
  Server,
  Zap,
  Lock,
  X,
  ExternalLink,
  Key,
  Shield,
  MapPin,
  Clock
} from 'lucide-react';

/* ==================== TECHNOLOGIES SECTION (Placed above About) ==================== */
export function TechStackSection() {
  const techs = [
    {
      name: 'React',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
          <ellipse cx="12" cy="12" rx="9" ry="4" stroke="#61dafb" strokeWidth="1.5" transform="rotate(0 12 12)" />
          <ellipse cx="12" cy="12" rx="9" ry="4" stroke="#61dafb" strokeWidth="1.5" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="9" ry="4" stroke="#61dafb" strokeWidth="1.5" transform="rotate(120 12 12)" />
          <circle cx="12" cy="12" r="1.8" fill="#61dafb" />
        </svg>
      )
    },
    {
      name: 'Next.js',
      icon: (
        <div className="w-5 h-5 rounded-full bg-gray-900 text-white font-extrabold text-[10px] flex items-center justify-center font-sans tracking-tighter">
          N
        </div>
      )
    },
    {
      name: 'Node.js',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#68a063">
          <path d="M12 2L2 7.8v10.4L12 24l10-5.8V7.8L12 2zm-1.5 5.5h3v2.5h-3V7.5zm-5 4h8v2.5h-8V11.5zm0 4h10v2.5h-10V15.5z"/>
        </svg>
      )
    },
    {
      name: 'TypeScript',
      icon: (
        <div className="w-5 h-5 rounded bg-[#3178c6] text-white font-extrabold text-[10px] flex items-center justify-center font-sans tracking-tighter">
          TS
        </div>
      )
    },
    {
      name: 'MongoDB',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#47a248">
          <path d="M12 1.5s-5.5 6.5-5.5 12c0 3 2.5 5.5 5.5 5.5s5.5-2.5 5.5-5.5c0-5.5-5.5-12-5.5-12z"/>
        </svg>
      )
    },
    {
      name: 'Tailwind CSS',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#38bdf8">
          <path d="M12 6c-3.3 0-5.5 1.7-6.6 5 1.1-1.7 2.5-2.2 4.1-1.7 1 0.3 1.7 1.1 2.5 2C13.3 12.6 15 14.3 19 14.3c3.3 0 5.5-1.7 6.6-5-1.1 1.7-2.5 2.2-4.1 1.7-1-0.3-1.7-1.1-2.5-2C17.7 7.7 16 6 12 6zm-7 6c-3.3 0-5.5 1.7-6.6 5 1.1-1.7 2.5-2.2 4.1-1.7 1 0.3 1.7 1.1 2.5 2C6.3 18.6 8 20.3 12 20.3c3.3 0 5.5-1.7 6.6-5-1.1 1.7-2.5 2.2-4.1 1.7-1-0.3-1.7-1.1-2.5-2C10.7 13.7 9 12 5 12z"/>
        </svg>
      )
    },
    {
      name: 'PostgreSQL',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#336791">
          <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 16c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z"/>
        </svg>
      )
    },
    {
      name: 'Git',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#f05032">
          <path d="M23.5 10.9L13.1.5c-.7-.7-1.8-.7-2.5 0L8.4 2.7l3.2 3.2c.8-.3 1.7-.1 2.3.5.6.6.8 1.6.5 2.4l3.1 3.1c.8-.3 1.7-.1 2.4.5.9.9.9 2.4 0 3.3-.9.9-2.4.9-3.3 0-.7-.7-.9-1.8-.5-2.6l-2.9-2.9v7.7c.3.2.5.5.5.9 0 .8-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5c0-.4.2-.7.5-.9V8.6c-.3-.2-.5-.5-.5-.9 0-.5.2-1 .6-1.3L8.6 3.2 1.5 10.3c-.7.7-.7 1.8 0 2.5l10.4 10.4c.7.7 1.8.7 2.5 0l9.1-9.1c.7-.7.7-1.8 0-2.5z"/>
        </svg>
      )
    },
    {
      name: 'Premiere Pro',
      icon: (
        <div className="w-5 h-5 rounded bg-[#00005b] border border-[#ea77ff]/60 text-[#ea77ff] font-extrabold text-[10px] flex items-center justify-center font-sans tracking-tight shrink-0 shadow-xs">
          Pr
        </div>
      )
    },
    {
      name: 'After Effects',
      icon: (
        <div className="w-5 h-5 rounded bg-[#00005b] border border-[#9999ff]/60 text-[#9999ff] font-extrabold text-[10px] flex items-center justify-center font-sans tracking-tight shrink-0 shadow-xs">
          Ae
        </div>
      )
    }
  ];

  return (
    <section className="py-4 sm:py-6 font-lato">
      {/* Balanced Wide Container */}
      <div className="max-w-[1380px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="relative overflow-hidden p-4 sm:p-5 rounded-3xl bg-white border border-black/5 shadow-[0_10px_30px_rgba(0,0,0,0.04)]">
          
          {/* Edge Fade Gradients */}
          <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

          {/* Infinite Horizontal Marquee Row */}
          <div className="flex items-center gap-8 w-max animate-marquee py-0.5">
            {[...techs, ...techs].map((tech, idx) => (
              <div key={idx} className="flex items-center gap-3 shrink-0">
                {tech.icon}
                <span className="text-sm sm:text-base font-extrabold text-gray-800 tracking-tight whitespace-nowrap">
                  {tech.name}
                </span>
                <span className="text-gray-300 font-light ml-5">|</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

/* ==================== ABOUT SECTION ==================== */
export function AboutSection() {
  return (
    <section id="about" className="py-14 md:py-20 font-lato overflow-hidden">
      {/* Balanced Wide Container */}
      <div className="max-w-[1380px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* LEFT SIDE: Text, Headline, Bio & 4 Feature Cards */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* 1. Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 text-xs font-black tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
              ABOUT ME
            </div>

            {/* 2. Bold Punchy Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight leading-[1.18]">
              I turn ideas into<br />
              <span className="text-emerald-600">digital </span>
              <span className="text-terracotta">products.</span>
            </h2>

            {/* 3. Bio Paragraph */}
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl font-lato">
              I'm a Software Engineer focused on building modern web applications, AI-powered tools, and scalable digital products. I enjoy solving real problems and turning concepts into reliable, user-friendly solutions.
            </p>

            {/* 4. 4 Feature Grid Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-2">
              
              {/* Card 1: Web Apps */}
              <div className="p-4 rounded-3xl bg-white border border-black/5 shadow-[0_10px_25px_rgba(0,0,0,0.03)] hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-3">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="4" width="18" height="16" rx="2" />
                    <line x1="3" y1="9" x2="21" y2="9" />
                    <circle cx="6" cy="6.5" r="0.75" fill="currentColor" />
                    <circle cx="8.5" cy="6.5" r="0.75" fill="currentColor" />
                    <circle cx="11" cy="6.5" r="0.75" fill="currentColor" />
                  </svg>
                </div>
                <h4 className="text-sm font-extrabold text-gray-900 mb-1">Web Apps</h4>
                <p className="text-[11px] text-gray-500 font-medium leading-snug">
                  Building fast and scalable web applications.
                </p>
              </div>

              {/* Card 2: AI Tools */}
              <div className="p-4 rounded-3xl bg-white border border-black/5 shadow-[0_10px_25px_rgba(0,0,0,0.03)] hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-2xl bg-[#fef2eb] text-terracotta flex items-center justify-center mb-3">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2a7 7 0 017 7c0 2.38-1.19 4.47-3 5.74V17a1 1 0 01-1 1H9a1 1 0 01-1-1v-2.26C6.19 13.47 5 11.38 5 9a7 7 0 017-7z" />
                    <path d="M9 21h6" />
                  </svg>
                </div>
                <h4 className="text-sm font-extrabold text-gray-900 mb-1">AI Tools</h4>
                <p className="text-[11px] text-gray-500 font-medium leading-snug">
                  Creating intelligent AI-powered tools and automations.
                </p>
              </div>

              {/* Card 3: SaaS */}
              <div className="p-4 rounded-3xl bg-white border border-black/5 shadow-[0_10px_25px_rgba(0,0,0,0.03)] hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-3">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 00-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                </div>
                <h4 className="text-sm font-extrabold text-gray-900 mb-1">SaaS</h4>
                <p className="text-[11px] text-gray-500 font-medium leading-snug">
                  Developing SaaS products that solve real problems.
                </p>
              </div>

              {/* Card 4: APIs */}
              <div className="p-4 rounded-3xl bg-white border border-black/5 shadow-[0_10px_25px_rgba(0,0,0,0.03)] hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-2xl bg-[#fef2eb] text-terracotta flex items-center justify-center mb-3">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
                  </svg>
                </div>
                <h4 className="text-sm font-extrabold text-gray-900 mb-1">APIs</h4>
                <p className="text-[11px] text-gray-500 font-medium leading-snug">
                  Designing robust and clean APIs for integrations.
                </p>
              </div>

            </div>

          </div>

          {/* RIGHT SIDE: Developer Code Terminal (developer.ts) + Floating Skill Pills */}
          <div className="lg:col-span-5 relative flex items-center justify-center pt-4 lg:pt-0">

            {/* Developer Code Terminal Window (developer.ts) */}
            <div className="relative z-10 w-full max-w-[420px] rounded-3xl bg-[#141816] shadow-2xl border border-white/10 overflow-hidden font-mono text-xs text-gray-300 transform hover:scale-[1.01] transition-transform duration-300">
              
              {/* Window Header */}
              <div className="px-4 py-3 bg-[#1e2420] border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#ff5f56]"></span>
                  <span className="w-3 h-3 rounded-full bg-[#ffbd2e]"></span>
                  <span className="w-3 h-3 rounded-full bg-[#27c93f]"></span>
                </div>
                <span className="text-[11px] font-sans font-semibold text-gray-400">
                  developer.ts
                </span>
                <div className="w-12"></div>
              </div>

              {/* Window Body (Code Content) */}
              <div className="p-5 space-y-2 leading-relaxed">
                <div>
                  <span className="text-purple-400">const</span>{' '}
                  <span className="text-yellow-300">atif</span> = &#123;
                </div>
                
                <div className="pl-4">
                  <span className="text-gray-400">name:</span>{' '}
                  <span className="text-emerald-400">"Muhammad Atif"</span>,
                </div>

                <div className="pl-4">
                  <span className="text-gray-400">role:</span>{' '}
                  <span className="text-emerald-400">"Software Engineer"</span>,
                </div>

                <div className="pl-4 pt-1">
                  <span className="text-gray-400">stack:</span> [
                  <div className="pl-4 text-emerald-300">
                    "React",<br />
                    "Next.js",<br />
                    "Node.js",<br />
                    "AI"
                  </div>
                  ],
                </div>

                <div className="pl-4 pt-1">
                  <span className="text-gray-400">mindset:</span>{' '}
                  <span className="text-amber-300">"Build • Learn • Improve"</span>
                </div>

                <div>&#125;;</div>

                <div className="pt-2 text-gray-500 italic">
                  // Always learning, always building
                </div>

                <div className="pt-2 flex items-center gap-2 text-emerald-400 font-sans text-[11px] font-bold">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  Open to opportunities
                </div>
              </div>

            </div>

            {/* Floating Skill Pill 1: React (Top Left) */}
            <div className="absolute top-2 -left-3 sm:-left-6 z-20 bg-white shadow-[0_12px_30px_rgba(0,0,0,0.08)] rounded-2xl px-3.5 py-2 border border-black/5 flex items-center gap-2 animate-float-card min-w-[105px]">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                <ellipse cx="12" cy="12" rx="9" ry="4" stroke="#61dafb" strokeWidth="1.8" />
                <ellipse cx="12" cy="12" rx="9" ry="4" stroke="#61dafb" strokeWidth="1.8" transform="rotate(60 12 12)" />
                <ellipse cx="12" cy="12" rx="9" ry="4" stroke="#61dafb" strokeWidth="1.8" transform="rotate(120 12 12)" />
                <circle cx="12" cy="12" r="2" fill="#61dafb" />
              </svg>
              <span className="text-xs font-black text-gray-800">React</span>
            </div>

            {/* Floating Skill Pill 2: AI (Top Right) */}
            <div 
              className="absolute top-10 -right-3 sm:-right-6 z-20 bg-white shadow-[0_12px_30px_rgba(0,0,0,0.08)] rounded-2xl px-3.5 py-2 border border-black/5 flex items-center gap-2 animate-float-card min-w-[90px]"
              style={{ animationDelay: '1.8s' }}
            >
              <div className="w-6 h-6 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2a7 7 0 017 7c0 2.38-1.19 4.47-3 5.74V17a1 1 0 01-1 1H9a1 1 0 01-1-1v-2.26C6.19 13.47 5 11.38 5 9a7 7 0 017-7z" />
                </svg>
              </div>
              <span className="text-xs font-black text-gray-800">AI</span>
            </div>

            {/* Floating Skill Pill 3: API (Bottom Left) */}
            <div 
              className="absolute bottom-4 -left-3 sm:-left-6 z-20 bg-white shadow-[0_12px_30px_rgba(0,0,0,0.08)] rounded-2xl px-3.5 py-2 border border-black/5 flex items-center gap-2 animate-float-card min-w-[95px]"
              style={{ animationDelay: '3.6s' }}
            >
              <div className="w-6 h-6 rounded-lg bg-[#fef2eb] text-terracotta flex items-center justify-center">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
                </svg>
              </div>
              <span className="text-xs font-black text-gray-800">API</span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

/* ==================== PROJECTS SECTION ==================== */
export function ProjectsSection() {
  const [activeModal, setActiveModal] = useState<any | null>(null);

  const projects = [
    {
      id: 'codentraa',
      title: 'CODENTRAA — Multi-Tenant Enterprise SaaS Portal',
      subtitle: 'Full-Stack Enterprise Agency & Project Management Platform',
      description: 'Enterprise-grade SaaS agency portal featuring Next.js 14 App Router and C# .NET 8 ASP.NET Core Clean Architecture (Onion Architecture) with Multi-Tenant Data Isolation, SignalR Real-Time WebSockets Sync, and RBAC Security.',
      tags: ['Next.js 14', 'C# .NET 8', 'ASP.NET Core', 'EF Core 8', 'SignalR WebSockets', 'Clean Architecture', 'Multi-Tenancy', 'RBAC Security'],
      icon: <Building2 className="w-6 h-6 text-terracotta" />,
      caseStudy: {
        title: 'CODENTRAA Enterprise SaaS Portal Case Study',
        architecture: '6-Layer Clean / Onion Architecture (Domain, Application, Infrastructure, Api)',
        summary: 'CODENTRAA is a multi-tenant Software-as-a-Service portal designed for modern agencies and enterprises. It guarantees cross-organization data security through automated EF Core interceptors and delivers real-time Kanban task management via SignalR WebSockets.',
        highlights: [
          'Multi-Tenant Data Isolation: Automated TenantDbContextInterceptor & EF Core Global Query Filters enforcing OrganizationId scoping on all DB queries.',
          'Clean Architecture: Decoupled Domain, Application, Infrastructure, and API layers for total testability and zero-dependency domain models.',
          'Real-Time SignalR Sync: WebSockets broadcasting live Kanban board updates and notifications across concurrent client browsers.',
          'Role-Based Access Control (RBAC): 5 System Roles (Owner, Admin, Manager, Developer, Client) with fine-grained capability matrices.',
          'SaaS Billing & Metering: Multi-tier subscriptions (Free, Pro $29/mo, Enterprise $99/mo) with automated usage limit enforcement meters.'
        ],
        techStack: {
          backend: ['C# .NET 8 ASP.NET Core Web API', 'EF Core 8 (SQL Server / In-Memory DB)', 'ASP.NET Core SignalR WebSockets', 'JWT Bearer Token Rotation & SHA256 Password Hashing'],
          frontend: ['Next.js 14 App Router & Server Components', 'TypeScript', 'Tailwind CSS', '@microsoft/signalr Connection Manager']
        },
        endpoints: [
          { method: 'POST', path: '/api/v1/auth/register', desc: 'Registers User + Default Organization Workspace' },
          { method: 'POST', path: '/api/v1/auth/login', desc: 'Authenticates user & returns signed JWT Bearer Token' },
          { method: 'GET', path: '/api/v1/organizations', desc: 'Lists workspaces owned or joined by authenticated user' },
          { method: 'GET', path: '/api/v1/projects', desc: 'Lists active tenant projects with RBAC check' },
          { method: 'PATCH', path: '/api/v1/tasks/{id}/status', desc: 'Updates task status & broadcasts live SignalR WebSocket move' },
          { method: 'GET', path: '/hubs/task', desc: 'ASP.NET Core SignalR WebSockets Hub endpoint' }
        ]
      }
    },
    {
      id: 'lockmaster',
      title: 'LOCK MASTER — Professional Locksmith & Security Platform',
      subtitle: 'Emergency Locksmith & Security Dispatch System',
      description: 'Modern 24/7 security service platform built with React 19, Vite, Tailwind CSS v4, Remix Icons, and React Router v7. Features real-time emergency appointment scheduling, interactive service area coverage mapping, and rapid dispatch hubs.',
      tags: ['React 19', 'Vite HMR', 'Tailwind CSS v4', 'React Router v7', 'Remix Icons', 'Dispatch System', 'Appointment Engine', 'Security Services'],
      icon: <Key className="w-6 h-6 text-emerald-600" />,
      caseStudy: {
        title: 'LOCK MASTER Security & Locksmith Platform Case Study',
        architecture: 'React 19 + Vite HMR SPA with Modular Component Architecture',
        summary: 'LOCK MASTER is a high-availability emergency locksmith and security dispatch platform. It bridges home and commercial security needs with rapid 24/7 appointment scheduling, dynamic regional coverage mapping, and transparent service pricing.',
        highlights: [
          'Emergency Appointment Booking Engine: Interactive appointment system with real-time form validation and automated dispatch queuing.',
          'Dynamic Regional Coverage Map: Coverage mapping displaying locksmith technician availability across residential, commercial, and automotive zones.',
          'Comprehensive Service Catalog: Specialized modules for residential rekeying, commercial master keying, automotive transponders, and electronic safe opening.',
          'Customer Trust & Review Engine: Verified client feedback platform with rating analytics and emergency satisfaction scores.',
          'Rapid Dispatch Emergency Hub: Dedicated 24/7 hotline integration with mobile-optimized emergency click-to-call functionality.'
        ],
        techStack: {
          backend: ['Node.js API Services', 'JSON Schema Validation', 'RESTful Booking Endpoints', 'Client Storage Caching'],
          frontend: ['React 19 Single Page Application', 'Vite HMR Build System', 'Tailwind CSS v4 Engine', 'React Router v7 Navigation', 'Remix Icons']
        },
        endpoints: [
          { method: 'POST', path: '/api/v1/appointments', desc: 'Schedules emergency lockout service & dispatches mobile unit' },
          { method: 'GET', path: '/api/v1/services/area', desc: 'Queries active technician coverage zones by zipcode' },
          { method: 'GET', path: '/api/v1/services/catalog', desc: 'Returns locksmith pricing & service package options' },
          { method: 'POST', path: '/api/v1/reviews', desc: 'Submits customer review & security service rating' }
        ]
      }
    },
    {
      id: 'codentra-portfolio',
      title: 'CODENTRA — 3D Interactive WebGL & GSAP Showcase',
      subtitle: 'Next-Gen 3D WebGL Graphics & Physics Experience',
      description: 'High-performance 3D interactive web application engineered with React 18, Three.js, React Three Fiber, Rapier 3D Physics engine, and GSAP v3 timeline scroll animations with post-processing shaders.',
      tags: ['Three.js', 'React Three Fiber', 'GSAP 3.12', 'Rapier 3D Physics', 'WebGL Shaders', 'TypeScript', 'Vite', 'Tailwind CSS'],
      icon: <BrainCircuit className="w-6 h-6 text-terracotta" />,
      caseStudy: {
        title: 'CODENTRA 3D WebGL & GSAP Experience Case Study',
        architecture: 'React 18 + Three.js + React Three Fiber + Rapier 3D Physics + GSAP v3 Timelines',
        summary: 'CODENTRA is an interactive 3D WebGL digital experience combining real-time rigid body physics simulation, custom fragment shaders, and GSAP scroll-triggered animations for next-generation web interaction.',
        highlights: [
          'Real-Time 3D Physics Engine: Integrated @react-three/rapier rigid body dynamics for real-time gravity physics and interactive 3D object collisions.',
          'WebGL Shaders & Post-Processing: Custom fragment shaders using @react-three/postprocessing for bloom, depth-of-field, and dynamic environment lighting.',
          'GSAP v3 Timeline ScrollTriggers: Multi-stage scroll animations using GSAP v3 for smooth camera orbital transitions and pinned text reveals.',
          'Declarative Scene Graph: React Three Fiber (@react-three/fiber) component graph with @react-three/drei helper utilities.',
          '60FPS Asset Pipeline: Optimized GLTF/GLB 3D model compression and mesh instancing for fluid browser performance.'
        ],
        techStack: {
          backend: ['Vite Build Pipeline', 'GLTF/GLB Asset Optimization', 'WebGL Canvas Renderer', 'Vercel Analytics Engine'],
          frontend: ['React 18 Component Engine', 'Three.js & React Three Fiber', 'Rapier 3D Physics Engine', 'GSAP v3 & ScrollTrigger', 'TypeScript & Tailwind CSS']
        },
        endpoints: [
          { method: 'GET', path: '/assets/3d/environment.gltf', desc: 'Serves compressed 3D GLTF mesh asset' },
          { method: 'GET', path: '/assets/shaders/bloom.glsl', desc: 'Custom WebGL post-processing shader' },
          { method: 'POST', path: '/api/v1/analytics/3d-event', desc: 'Logs interactive 3D scene user engagement metrics' }
        ]
      }
    }
  ];

  return (
    <section id="projects" className="py-12 md:py-16">
      {/* Balanced Wide Container */}
      <div className="max-w-[1380px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="mb-10 font-lato">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 text-xs font-bold uppercase tracking-wider mb-2">
            Featured Work
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Projects
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 font-lato">
          {projects.map((project, idx) => (
            <div 
              key={idx} 
              className="p-6 rounded-3xl card-theme flex flex-col justify-between hover:scale-[1.02] transition-transform duration-300 group bg-white border border-black/5 shadow-[0_10px_30px_rgba(0,0,0,0.04)]"
            >
              <div>
                <div className="p-3.5 rounded-2xl bg-black/5 w-fit mb-4 group-hover:bg-terracotta/10 transition-colors">
                  {project.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-terracotta transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs font-bold text-terracotta/90 mb-3 font-mono">
                  {project.subtitle}
                </p>
                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tags.map((tag, tIdx) => (
                    <span 
                      key={tIdx} 
                      className="px-2.5 py-1 text-[11px] font-semibold rounded-lg bg-black/5 text-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button 
                  onClick={() => project.caseStudy ? setActiveModal(project) : null}
                  className="inline-flex items-center gap-2 text-sm font-bold text-terracotta hover:underline cursor-pointer"
                >
                  View Case Study <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Full Modal Overlay */}
      {activeModal && activeModal.caseStudy && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-fade-in font-lato overflow-y-auto">
          <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#fbfaf8] rounded-3xl shadow-2xl border border-black/10 overflow-hidden flex flex-col my-auto">
            
            {/* Modal Header Bar */}
            <div className="p-6 bg-[#141816] text-white flex items-center justify-between border-b border-white/10 shrink-0">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-terracotta text-white">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-black tracking-wide text-white">
                    {activeModal.caseStudy.title}
                  </h3>
                  <p className="text-xs text-gray-400 font-mono mt-0.5">
                    Next.js 14 App Router + C# .NET 8 ASP.NET Core Clean Architecture
                  </p>
                </div>
              </div>
              <button 
                onClick={() => setActiveModal(null)}
                className="p-2 rounded-xl bg-white/10 text-gray-300 hover:text-white hover:bg-white/20 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Scrollable Body */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-8 text-gray-800">
              
              {/* Section 1: Executive Summary */}
              <div className="p-5 rounded-2xl bg-white border border-black/5 shadow-sm">
                <h4 className="text-sm font-black uppercase text-terracotta tracking-wider mb-2 flex items-center gap-2">
                  <Zap className="w-4 h-4 text-terracotta" /> Executive Overview
                </h4>
                <p className="text-sm leading-relaxed text-gray-700">
                  {activeModal.caseStudy.summary}
                </p>
              </div>

              {/* Section 2: Architectural Highlights */}
              <div className="space-y-3">
                <h4 className="text-sm font-black uppercase text-gray-900 tracking-wider flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" /> Key Architectural Innovations
                </h4>
                <div className="grid grid-cols-1 gap-2.5">
                  {activeModal.caseStudy.highlights.map((item: string, hIdx: number) => (
                    <div key={hIdx} className="p-3.5 rounded-xl bg-white border border-black/5 flex items-start gap-3 shadow-xs">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-gray-700 font-medium leading-normal">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Section 3: Technology Specs Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-white border border-black/5 shadow-sm">
                  <h5 className="text-xs font-black uppercase text-terracotta tracking-wider mb-3 flex items-center gap-2">
                    <Server className="w-4 h-4" /> Backend (.NET 8 C# Clean Architecture)
                  </h5>
                  <ul className="space-y-2 text-xs font-mono text-gray-700">
                    {activeModal.caseStudy.techStack.backend.map((b: string, bIdx: number) => (
                      <li key={bIdx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-terracotta"></span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-black/5 shadow-sm">
                  <h5 className="text-xs font-black uppercase text-emerald-700 tracking-wider mb-3 flex items-center gap-2">
                    <Globe className="w-4 h-4" /> Frontend (Next.js 14 App Router)
                  </h5>
                  <ul className="space-y-2 text-xs font-mono text-gray-700">
                    {activeModal.caseStudy.techStack.frontend.map((f: string, fIdx: number) => (
                      <li key={fIdx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Section 4: REST API Specs Table */}
              <div className="space-y-3">
                <h4 className="text-sm font-black uppercase text-gray-900 tracking-wider flex items-center gap-2">
                  <Lock className="w-4 h-4 text-terracotta" /> REST API & WebSockets Specs
                </h4>
                <div className="overflow-x-auto rounded-2xl border border-black/10 bg-white">
                  <table className="w-full text-xs text-left font-mono">
                    <thead className="bg-[#141816] text-gray-300 uppercase text-[10px] tracking-wider">
                      <tr>
                        <th className="px-4 py-3">Method</th>
                        <th className="px-4 py-3">Endpoint URL</th>
                        <th className="px-4 py-3">Description</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {activeModal.caseStudy.endpoints.map((ep: any, eIdx: number) => (
                        <tr key={eIdx} className="hover:bg-gray-50/80">
                          <td className="px-4 py-2.5 font-bold">
                            <span className={`px-2 py-0.5 rounded text-[10px] ${
                              ep.method === 'POST' ? 'bg-emerald-100 text-emerald-800' :
                              ep.method === 'GET' ? 'bg-blue-100 text-blue-800' :
                              'bg-amber-100 text-amber-800'
                            }`}>
                              {ep.method}
                            </span>
                          </td>
                          <td className="px-4 py-2.5 font-bold text-gray-900">{ep.path}</td>
                          <td className="px-4 py-2.5 text-gray-600 font-lato">{ep.desc}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="p-4 px-6 bg-white border-t border-black/5 flex items-center justify-between shrink-0">
              <span className="text-xs font-mono text-gray-500">
                Path: {activeModal.id === 'codentraa' ? 'C:\\Users\\Atif Mughal\\Downloads\\Codentra portal final' : activeModal.id === 'lockmaster' ? 'C:\\Users\\Atif Mughal\\Downloads\\lock_master-main' : activeModal.id === 'codentra-portfolio' ? 'C:\\Users\\Atif Mughal\\Downloads\\codentra-portfolio-main' : 'Local Project Workspace'}
              </span>
              <button 
                onClick={() => setActiveModal(null)}
                className="px-5 py-2 rounded-xl bg-gray-900 text-white text-xs font-bold uppercase tracking-wider hover:bg-terracotta transition-colors shadow-sm"
              >
                Close Case Study
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}

/* ==================== SKILLS SECTION (Interactive Tree Mindmap) ==================== */
export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const categories = [
    {
      id: 'backend',
      title: 'BACKEND',
      subGroups: [
        {
          name: 'PYTHON',
          count: 5,
          items: [
            {
              name: 'FASTAPI',
              count: 2,
              children: ['REST APIS', 'JWT AUTH', 'SQLALCHEMY', 'PYDANTIC', 'PANDAS', 'NUMPY']
            }
          ]
        },
        {
          name: 'SQL',
          count: 2,
          items: [
            {
              name: 'POSTGRESQL',
              children: ['MYSQL']
            }
          ]
        }
      ]
    },
    {
      id: 'frontend',
      title: 'FRONTEND',
      subGroups: [
        {
          name: 'JAVASCRIPT',
          count: 4,
          items: [
            {
              name: 'TYPESCRIPT',
              children: ['REACT', 'NEXT.JS', 'HTML/CSS', 'TAILWIND CSS']
            }
          ]
        }
      ]
    },
    {
      id: 'ai',
      title: 'AI & LLM',
      directSkills: ['GEMINI', 'CLAUDE', 'OPENCODE', 'PROMPT ENGINEERING', 'RAG', 'MCP', 'AI AGENTS']
    },
    {
      id: 'automation',
      title: 'AUTOMATION',
      directSkills: ['N8N', 'MAKE.COM', 'WEBHOOKS', 'GOHIGHLEVEL', 'WORKFLOWS', 'PIPELINES', 'CRM', 'AIRTABLE']
    },
    {
      id: 'devops',
      title: 'DEVOPS',
      directSkills: ['GIT', 'GITHUB', 'DOCKER', 'AWS']
    },
    {
      id: 'tools',
      title: 'TOOLS',
      directSkills: ['VS CODE', 'CANVA', 'WORDPRESS']
    }
  ];

  return (
    <section id="skills" className="py-14 md:py-20 font-lato relative overflow-visible">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Header Title */}
        <div className="mb-8 font-lato">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 text-xs font-black uppercase tracking-wider mb-2">
            Interactive Flowchart
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Skills & Technology Mindmap
          </h2>
        </div>

        {/* Tree Container (Sitting directly on soft sage green background) */}
        <div className="py-6 px-4 sm:px-6 lg:px-8 overflow-visible">
          
          {/* Top Root Node */}
          <div className="flex justify-center mb-6">
            <div className="px-8 py-3 rounded-2xl bg-terracotta text-white font-black text-base sm:text-lg tracking-widest uppercase shadow-md border-2 border-gray-900 flex items-center gap-2">
              MUHAMMAD ATIF / SKILLS
            </div>
          </div>

          {/* Root Connection Horizontal Line */}
          <div className="hidden lg:block w-full max-w-[92%] mx-auto h-[2px] bg-gray-900/40 relative mb-8">
            <div className="absolute left-1/2 -top-4 w-[2px] h-4 bg-gray-900/40"></div>
          </div>

          {/* 6 Category Columns Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 lg:gap-8 items-start min-w-[850px] lg:min-w-0 p-2">
            {categories.map((cat, idx) => {
              const isSelected = activeCategory === cat.id;
              const isOtherSelected = activeCategory !== null && activeCategory !== cat.id;

              // Smart origin scaling to prevent edge clipping on BACKEND & TOOLS
              const transformOriginClass = idx === 0 ? 'origin-top-left' : idx === categories.length - 1 ? 'origin-top-right' : 'origin-top';

              return (
                <div 
                  key={cat.id}
                  onMouseEnter={() => setActiveCategory(cat.id)}
                  onMouseLeave={() => setActiveCategory(null)}
                  className={`cursor-pointer transition-all duration-300 rounded-2xl p-3 font-mono ${transformOriginClass} ${
                    isSelected 
                      ? 'scale-[1.05] opacity-100 bg-[#fbf3eb]/95 ring-2 ring-terracotta shadow-2xl z-30 border border-terracotta/30' 
                      : isOtherSelected 
                        ? 'opacity-25 filter blur-[2px] scale-95' 
                        : 'hover:scale-[1.02] opacity-100'
                  }`}
                >
                  {/* Category Header Box (Converts to Orange/Terracotta on Hover) */}
                  <div className={`p-3 rounded-xl font-black text-xs sm:text-sm text-center uppercase tracking-wider border-2 border-gray-900 shadow-[3px_3px_0px_rgba(0,0,0,0.9)] transition-all duration-300 ${
                    isSelected 
                      ? 'bg-terracotta text-white shadow-[4px_4px_0px_rgba(0,0,0,0.9)]' 
                      : 'bg-[#f7f5ef] text-gray-900'
                  }`}>
                    {cat.title}
                  </div>

                  {/* Connecting Vertical Line */}
                  <div className={`w-[2px] h-4 mx-auto my-1 transition-colors ${isSelected ? 'bg-terracotta' : 'bg-gray-900/40'}`}></div>

                  {/* Visual Tree Branch Connectors Sub-Tree */}
                  <div className="space-y-3 pt-1 text-xs">
                    {/* Render Grouped Sub-Skills */}
                    {cat.subGroups && cat.subGroups.map((group, gIdx) => (
                      <div key={gIdx} className={`relative border-l-2 pl-3 space-y-2 transition-colors ${isSelected ? 'border-terracotta' : 'border-gray-900/40'}`}>
                        {/* Horizontal Branch Connector Line */}
                        <div className={`absolute -left-[2px] top-2.5 w-2.5 h-[2px] transition-colors ${isSelected ? 'bg-terracotta' : 'bg-gray-900/40'}`}></div>
                        
                        <div className="flex items-center gap-1.5 font-bold text-gray-900">
                          <span>{group.name}</span>
                          {group.count && (
                            <span className={`px-1.5 py-0.2 rounded text-[10px] font-bold ${isSelected ? 'bg-terracotta/20 text-terracotta' : 'bg-gray-900/10 text-gray-700'}`}>
                              {group.count}
                            </span>
                          )}
                        </div>

                        {group.items && group.items.map((item, iIdx) => (
                          <div key={iIdx} className={`relative border-l-2 pl-3 space-y-1.5 transition-colors ${isSelected ? 'border-terracotta/70' : 'border-gray-900/30'}`}>
                            {/* Horizontal Sub-Branch Line */}
                            <div className={`absolute -left-[2px] top-2.5 w-2.5 h-[1.5px] transition-colors ${isSelected ? 'bg-terracotta/70' : 'bg-gray-900/30'}`}></div>
                            
                            <div className="flex items-center gap-1.5 font-semibold text-gray-800">
                              <span>{item.name}</span>
                              {item.count && (
                                <span className="px-1 rounded bg-gray-900/10 text-[9px] text-gray-600">
                                  {item.count}
                                </span>
                              )}
                            </div>

                            {item.children && (
                              <div className={`relative border-l-2 pl-3 space-y-1 text-[11px] transition-colors ${isSelected ? 'border-emerald-600' : 'border-emerald-600/40'}`}>
                                {item.children.map((child, cIdx) => (
                                  <div key={cIdx} className={`relative pl-1 flex items-center gap-1.5 transition-colors ${isSelected ? 'text-terracotta font-bold' : 'text-gray-800'}`}>
                                    <div className={`absolute -left-3 top-2 w-2 h-[1px] ${isSelected ? 'bg-terracotta' : 'bg-emerald-600/40'}`}></div>
                                    <span>• {child}</span>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    ))}

                    {/* Render Direct Skills with Branch Connector Lines */}
                    {cat.directSkills && (
                      <div className={`relative border-l-2 pl-3 space-y-1.5 transition-colors ${isSelected ? 'border-terracotta' : 'border-gray-900/40'}`}>
                        {cat.directSkills.map((skill, dIdx) => (
                          <div key={dIdx} className={`relative flex items-center gap-1.5 text-[11px] transition-colors ${isSelected ? 'text-terracotta font-bold' : 'text-gray-800 font-semibold'}`}>
                            {/* Horizontal Branch Line */}
                            <div className={`absolute -left-3 top-2 w-2.5 h-[1.5px] ${isSelected ? 'bg-terracotta' : 'bg-gray-900/40'}`}></div>
                            <span>• {skill}</span>
                          </div>
                        ))}
                      </div>
                    )}

                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}

/* ==================== EXPERIENCE SECTION (Vertical Timeline) ==================== */
export function ExperienceSection() {
  const experiences = [
    {
      role: 'Video Editing & Marketing Officer',
      company: 'My Impact Meter',
      period: '2023 – Present',
      isCurrent: true,
      points: [
        'Edited and produced high-quality videos for digital platforms.',
        'Managed social media accounts to enhance brand visibility.',
        'Developed and executed marketing strategies to drive engagement.',
        'Optimized content for SEO and social media performance.',
        'Ran and managed Google Ads campaigns for targeted reach.'
      ]
    },
    {
      role: 'Video Editor',
      company: 'Encosoft Technologies',
      period: '2022 – 2023',
      isCurrent: false,
      points: [
        'Produced high-quality digital content and media assets for company operations.',
        'Collaborated with cross-functional teams in an IT environment, ensuring project timelines were met.'
      ]
    }
  ];

  return (
    <section id="experience" className="py-14 md:py-20 font-lato overflow-hidden">
      {/* Balanced Wide Container */}
      <div className="max-w-[1380px] mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Header (Matching Screenshot) */}
        <div className="mb-12 font-lato">
          <div className="text-emerald-700 text-xs font-black uppercase tracking-widest mb-2">
            EXPERIENCE
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            My <span className="text-terracotta">Journey</span>
          </h2>
        </div>

        {/* Vertical Timeline Tree Container */}
        <div className="relative border-l-2 border-gray-400/40 ml-3 sm:ml-6 lg:ml-8 pl-6 sm:pl-10 space-y-10">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative group">
              
              {/* Node Circle Dot (Green for Present, Terracotta for Past - Matching Screenshot) */}
              <div className={`absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full border-2 bg-white flex items-center justify-center transition-transform duration-300 group-hover:scale-125 z-10 ${
                exp.isCurrent 
                  ? 'border-emerald-600 shadow-[0_0_12px_rgba(56,161,89,0.5)]' 
                  : 'border-terracotta shadow-[0_0_10px_rgba(200,90,40,0.4)]'
              }`}>
                <div className={`w-2.5 h-2.5 rounded-full ${exp.isCurrent ? 'bg-emerald-600 animate-pulse' : 'bg-terracotta'}`}></div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 lg:gap-8 items-start">
                
                {/* Left Column: Date Range (Green Font - Matching Screenshot) */}
                <div className="lg:col-span-3 pt-1">
                  <span className="text-sm sm:text-base font-extrabold font-mono text-emerald-700 tracking-wide">
                    {exp.period}
                  </span>
                </div>

                {/* Right Column: Role, Company & Bullet Points */}
                <div className="lg:col-span-9 space-y-3 p-6 sm:p-7 rounded-3xl bg-white/80 border border-black/5 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:border-terracotta/30 transition-all">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight">
                      {exp.role}
                    </h3>
                    <p className="text-sm font-bold text-gray-500 mt-0.5">
                      {exp.company}
                    </p>
                  </div>

                  <ul className="space-y-2 pt-2 border-t border-gray-100">
                    {exp.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2.5 text-sm text-gray-700 font-medium leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

/* ==================== CONTACT SECTION ==================== */
export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-12 md:py-16 border-t border-gray-200/60 bg-black/[0.015]">
      {/* Balanced Wide Container */}
      <div className="max-w-[1380px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 font-lato">
          
          <div className="lg:col-span-5 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-terracotta/10 text-terracotta text-xs font-bold uppercase tracking-wider">
              Get In Touch
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              Let's create something meaningful together.
            </h2>
            <p className="text-base text-gray-600 leading-relaxed">
              Have a project in mind, want to collaborate, or just want to say hi? Feel free to drop a message!
            </p>

            <div className="pt-4 space-y-3">
              <div className="flex items-center gap-3 text-sm font-semibold text-gray-700">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                Available for freelance projects & full-time roles.
              </div>
              <div className="text-sm text-gray-500">
                Email: <a href="mailto:contact@atifmughal.dev" className="text-terracotta font-semibold hover:underline">contact@atifmughal.dev</a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="p-6 sm:p-8 rounded-3xl card-theme bg-white space-y-4">
              {submitted && (
                <div className="p-4 rounded-xl bg-emerald-500/10 text-emerald-600 text-sm font-semibold flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5" />
                  Thank you! Your message has been sent successfully.
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Your Name</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="Atif Mughal" 
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-300 bg-white text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-terracotta"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Email Address</label>
                  <input 
                    type="email" 
                    required 
                    placeholder="you@example.com" 
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-300 bg-white text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-terracotta"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Message</label>
                <textarea 
                  rows={4} 
                  required 
                  placeholder="Tell me about your project..." 
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-300 bg-white text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-terracotta"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-terracotta hover:bg-terracotta-hover text-white text-sm font-semibold inline-flex items-center justify-center gap-2 transition-all shadow-md hover:shadow-lg"
              >
                Send Message
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

/* ==================== FOOTER ==================== */
export function Footer() {
  return (
    <footer className="py-8 border-t border-gray-200/80 bg-white">
      {/* Balanced Wide Container */}
      <div className="max-w-[1380px] mx-auto px-4 sm:px-8 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-4 font-lato">
        <p className="text-xs font-semibold text-gray-500">
          &copy; {new Date().getFullYear()} MUHAMMAD ATIF. All rights reserved. Built with Next.js & Tailwind CSS.
        </p>
        <div className="flex items-center gap-6 text-xs font-semibold text-gray-600">
          <a href="#home" className="hover:text-terracotta transition-colors">Home</a>
          <a href="#projects" className="hover:text-terracotta transition-colors">Projects</a>
          <a href="#skills" className="hover:text-terracotta transition-colors">Skills</a>
          <a href="#contact" className="hover:text-terracotta transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
}
