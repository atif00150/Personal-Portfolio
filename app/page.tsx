import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import { 
  TechStackSection,
  AboutSection, 
  ProjectsSection, 
  SkillsSection, 
  ExperienceSection, 
  ContactSection, 
  Footer 
} from '@/components/Sections';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#dae6dd] text-gray-900">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <TechStackSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
