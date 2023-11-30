'use cient'

import { useEffect, useState } from 'react';
import { CogIcon } from '@heroicons/react/24/outline';

export default function RotatingGear() {
  const [rotation, setRotation] = useState(0);
  
  const handleScroll = () => {
    const scrollY = window.scrollY / 5;
    setRotation(scrollY % 360);
  };
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <CogIcon 
      className="h-20 w-20" 
      style={{ transform: `rotate(${rotation}deg)`, transition: 'transform 0.5s ease-out' }} 
    />
  );
};