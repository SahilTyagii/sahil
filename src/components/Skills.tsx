'use client'
import Spline from '@splinetool/react-spline'
import React, { useState, useEffect } from 'react'

const Skills = () => {
  const [scene, setScene] = useState('')

  useEffect(() => {
    // Function to handle screen size change
    const handleResize = () => {
      if (window.innerWidth < 768) {
        // Smaller screens
        setScene('https://prod.spline.design/cf10r9BhDutcY1Es/scene.splinecode')
      } else {
        // Medium and larger screens
        setScene('https://prod.spline.design/HHeFUCAlT6kfI7T4/scene.splinecode')
      }
    }

    // Call handleResize initially to set the correct scene
    handleResize()

    // Add event listener to handle window resize
    window.addEventListener('resize', handleResize)

    // Clean up the event listener on component unmount
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className="fixed top-0 left-0 w-full h-screen">
      {scene && <Spline scene={scene} />}
    </div>
  )
}

export default Skills
