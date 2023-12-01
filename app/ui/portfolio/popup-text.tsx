import React, { useEffect, useState, useRef } from 'react';
import clsx from 'clsx';

export default function PopUpText(props: { text: string, offset: number }){
  const { text, offset } = props;
  const [isVisible, setIsVisible] = useState(false);
  const textRef = useRef(null);

  useEffect(() => {
    const checkScroll = () => {
      if (textRef.current) {
        const { offsetTop } = textRef.current;
        const scrollPosition = window.scrollY + window.innerHeight;

        setIsVisible(scrollPosition > offsetTop + offset);
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
      <div className="text-xs md:text-3xl">
        {text}
      </div>
    </div>
  );
};