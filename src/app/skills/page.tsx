import dynamic from 'next/dynamic';

const Navbar = dynamic(() => import('@/components/Navbar'), { ssr: false });

import '../globals.css'
import Skills from '@/components/Skills';

const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
  ssr: false,
});

export default function SkillPage() {
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
        <Skills />
    </main>
  );
}
