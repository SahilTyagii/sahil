'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import avatar from '/public/avatarNavbar.png';
import Image from 'next/image';

const Navbar: React.FC = () => {
  const [activeLink, setActiveLink] = useState<string>('/');

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      setActiveLink(url);
    };
    handleRouteChange(window.location.pathname);

    const handlePopState = () => handleRouteChange(window.location.pathname);
    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  return (
    <div className="w-[97%] md:w-8/12 lg:w-6/12 h-16 backdrop-blur-lg backdrop-brightness-125 bg-gradient-to-r from-white/10 via-white/20 to-white/10 text-white/80 shadow-2xl shadow-black/50 fixed top-6 z-50 flex md:justify-between justify-center items-center px-8 rounded-full">
      <div className="text-xl font-semibold tracking-wide md:block hidden">
        <Image src={avatar} alt="Avatar" width={48} quality={100} unoptimized/>
      </div>
      <div className="flex space-x-6 justify-between">
        <Link
          href="/"
          className={`hover:text-white/40 transition duration-300 flex items-center
            ${activeLink === '/' ? 'text-[#E89AF1] font-semibold' : 'text-white/80'}`}
          onClick={() => setActiveLink('/')}
        >
          Home
        </Link>
        <Link
          href="/skills"
          className={` hover:text-white/40 transition duration-300 flex items-center
            ${activeLink === '/skills' ? 'text-[#E89AF1] font-semibold' : 'text-white/80'}`}
          onClick={() => setActiveLink('/skills')}
        >
          Skills
        </Link>
        <Link
          href="/projects"
          className={`hover:text-white/40 transition duration-300 flex items-center
            ${activeLink === '/projects' ? 'text-[#E89AF1] font-semibold' : 'text-white/80'}`}
          onClick={() => setActiveLink('/projects')}
        >
          Projects
        </Link>
        <Link
          href="/contact"
          className={`hover:text-white/40 transition duration-300 flex items-center
            ${activeLink === '/contact' ? 'text-[#E89AF1] font-semibold' : 'text-white/80'}`}
          onClick={() => setActiveLink('/contact')}
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
