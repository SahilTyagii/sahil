'use client';

import Spline from '@splinetool/react-spline';
import React from 'react';
import Autoplay from 'embla-carousel-autoplay';
import FreshWrite from './freshwrite.png';
import Canvas from './canvas.png';
import KabaaD from './kabaad.png';
import Qwiz from './qwiz.png';
import AniFind from './anifind.png';

import { Github, ExternalLink } from 'lucide-react';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Image, { StaticImageData } from 'next/image';

const Projects: React.FC = () => {

  interface Project {
    image: string | StaticImageData;
    title: string;
    description: string;
    github: string;
    link?: string;
  }

  const projects: Project[] = [
    {
      image: Qwiz,
      title: 'QWIZ',
      description: 'Welcome to QWIZ, an multiplayer quiz game where users can challenge themselves and compete on leaderboards.',
      github: 'https://github.com/SahilTyagii/QWIZ',
      link: 'https://qwiz-three.vercel.app/',
    },
    {
      image: AniFind,
      title: 'AniFind',
      description: 'Anifind provides detailed information about anime scenes from screenshots. Built with Node and powered by GraphQL for data retrieval, AniFind is your go-to tool for exploring and rediscovering your favorite anime.',
      github: 'https://github.com/SahilTyagii/AniFind',
      link: 'https://anifind.onrender.com/',
    },
    {
      image: KabaaD,
      title: 'Kabaa-D',
      description: 'A decentralized scraps selling and buying marketplace built on the Ethereum blockchain. It allows users to sell and buy scraps without any middleman.',
      github: 'https://github.com/SahilTyagii/kabaa-d-web3',
    },
    {
      image: FreshWrite,
      title: 'FreshWrite',
      description: 'This is a simple blog application built with Express.js and EJS templates. It allows users to create, read, update, and delete blog posts.',
      github: 'https://github.com/SahilTyagii/FreshWrite',
    },
    {
      image: Canvas,
      title: 'Canvas',
      description: 'A simple React web-app for making flowcharts and diagrams with the help of dragable nodes and connections. It utilizes react-flow for its functionality.',
      github: 'https://github.com/SahilTyagii/canvas',
      link: 'https://canvas-henna-kappa.vercel.app/',
    },
  ];

  return (
    <div className="fixed top-0 left-0 w-full h-screen flex items-center overflow-hidden">
      <div className="fixed md:left-16 md:w-1/2 w-full top-16 ">
        <Carousel plugins={[Autoplay({ delay: 3000 })]} className="text-gray-200 ml-4 mt-10">
          <CarouselContent className="space-x-4">
            {projects.map((project, index) => (
              <CarouselItem key={index} className="w-full">
                <div className="flex flex-col items-start space-y-4 p-4 ">
                  <Image width={650} src={project.image} alt={project.title} className="rounded-md" quality={100} unoptimized />
                  <h1 className="text-2xl font-bold">{project.title}</h1>
                  <p className="md:text-lg text-sm text-gray-300">{project.description}</p>
                  <div className="flex space-x-4">
                  <a href={project.github} target='_blank' rel='noreferrer noopener'>
                  <button className="relative text-gray-200 flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                    <span className="relative flex items-center space-x-2 px-5 py-2.5 transition-all ease-in duration-75 bg-black rounded-md group-hover:bg-opacity-0">
                        <Github />
                        <span>GitHub</span>
                    </span>
                </button>

                  </a>
                    {project.link && <a href={project.link} target='_blank' rel='noreferrer noopener'>
                    <button className="relative text-gray-200 flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                        <span className="relative flex items-center space-x-2 px-5 py-2.5 transition-all ease-in duration-75 bg-black rounded-md group-hover:bg-opacity-0">
                            <ExternalLink />
                            <span>Visit</span>
                        </span>
                    </button>  
                    </a>}
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <Spline scene="https://prod.spline.design/7nKa4lvttnpUiRnc/scene.splinecode" />
    </div>
  );
};

export default Projects;
