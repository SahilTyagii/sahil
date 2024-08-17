import Spline from '@splinetool/react-spline';
import React from 'react';
import './Default.css'; // Make sure to create and import this CSS file

const Default = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-screen">
      <div className="fixed bottom-32 md:left-20 left-5 text-gray-200">
        <h1 className="text-gradient md:text-8xl text-5xl font-extrabold py-2">
          Sahil Tyagi<br />
        </h1>
        <h1 className="md:text-3xl text-2xl">
          Full-Stack <span className="text-[#E89AF1]">Web</span> Developer
        </h1>
      </div>
      <Spline
        scene="https://prod.spline.design/JymvQAHm4j5RC8R6/scene.splinecode"
      />
    </div>
  );
};

export default Default;
