import React from 'react'
import dynamic from 'next/dynamic';

const Navbar = dynamic(() => import('@/components/Navbar'), { ssr: false });

import '../globals.css'
import Contact from '@/components/Contact';

const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
  ssr: false,
});
const ContactPage: React.FC = () => {
  return (
    <main className="flex h-screen w-full flex-col items-center justify-between custom-scrollbar overflow-hidden">
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
      <Contact />
    </main>
  )
}

export default ContactPage
