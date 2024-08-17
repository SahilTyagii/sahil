import React from 'react'

import dynamic from 'next/dynamic';

const Navbar = dynamic(() => import('@/components/Navbar'), { ssr: false });

import '../globals.css'
import Projects from '@/components/Projects';

const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
  ssr: false,
});

const ProjectsPage: React.FC = () => {
  return (
    <main className="flex h-screen w-full flex-col items-center justify-between custom-scrollbar overflow-hidden bg-black">
      <AnimatedCursor
        innerSize={12}
        outerSize={16}
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
        color="205,135,213"
        clickables={['h1', 'a']}
      />
      <Navbar />
        <Projects />
    </main>
  )
}

export default ProjectsPage
