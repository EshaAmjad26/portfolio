import About from '@/components/About';
import ContactMe from '@/components/Contact';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Education from '@/components/Education';
import React from 'react';

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <section className="container mx-auto">
        <Hero />
      </section>
      
      <section className="container mx-auto">
        <Projects />
      </section>

      <section className="container mx-auto">
        <Skills />
      </section>

      <Education />
      
      <section className="container mx-auto">
        <About />
      </section>
      
      <section className="container mx-auto">
        <ContactMe />
      </section>
    </main>
  );
}
