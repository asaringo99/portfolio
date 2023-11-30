import React, { useEffect, useState, useRef } from 'react';
import clsx from 'clsx';
import { opensans } from '@/ui/font';

export default function PopUpText(props: { text: string }){
  const { text } = props;
  const [isVisible, setIsVisible] = useState(false);
  const textRef = useRef(null);

  useEffect(() => {
    const checkScroll = () => {
      if (textRef.current) {
        const { offsetTop } = textRef.current;
        const scrollPosition = window.scrollY + window.innerHeight;
        console.log(offsetTop, window.scrollY, scrollPosition)

        setIsVisible(scrollPosition > offsetTop + 150);
      }
    };

    window.addEventListener('scroll', checkScroll);

    return () => {
      window.removeEventListener('scroll', checkScroll);
    };
  }, []);

  return (
    <div
      ref={textRef}
      className={clsx(
        'transition-opacity',
        {
          'animate-blur-out-contract-bck': !isVisible,
          'opacity-100 animate-focus-in-expand-fwd': isVisible
        }
      )}
    >
      <div className={`text-3xl ${opensans.className}`}>
        {text}
      </div>
    </div>
  );
};