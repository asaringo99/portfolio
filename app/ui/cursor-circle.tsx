import { useEffect, useState, useRef } from 'react';

export default function CursorCircle() {
  const cursorRef = useRef<HTMLDivElement | null>(null);

  const updateCursor = (e: MouseEvent) => {
    const cursor = cursorRef.current;
    if (cursor) {
      cursor.style.top = `${e.clientY}px`;
      cursor.style.left = `${e.clientX}px`;
    }
  };
  
  const handleHoverUp = () => {
    const cursor = cursorRef.current;
    if (cursor) {
      cursor.style.height = "70px"
      cursor.style.width = "70px"
      cursor.style.borderWidth = "5px"
      cursor.style.borderColor = "red"
    }
  };
  const handleHoverDown = () => {
    const cursor = cursorRef.current;
    if (cursor) {
      cursor.style.height = "12px"
      cursor.style.width = "12px"
      cursor.style.borderWidth = "2px"
      cursor.style.borderColor = "#1D4ED8"
    }
  };
  
  const handleMouseUp = () => {
    const cursor = cursorRef.current;
    if (cursor) {
      cursor.style.backgroundColor = "black"
    }
  };
  
  const handleMouseDown = () => {
    const cursor = cursorRef.current;
    if (cursor) {
      cursor.style.backgroundColor = "red"
    }
  };

    useEffect(() => {

      const elementsWithPointerCursor = Array.from(document.querySelectorAll('*')).filter(el => 
        window.getComputedStyle(el).cursor === 'pointer'
      );

      elementsWithPointerCursor.forEach(el => {
        el.addEventListener('mouseover', () => handleHoverUp());
        el.addEventListener('mouseout', () => handleHoverDown());
      });

      window.addEventListener('mouseup', () => handleMouseUp());
      window.addEventListener('mousedown', () => handleMouseDown());
      window.addEventListener('mousemove', updateCursor);

      return () => {
        elementsWithPointerCursor.forEach(el => {
          el.removeEventListener('mouseover', () => handleHoverUp());
          el.removeEventListener('mouseout', () => handleHoverDown());
        });
        window.removeEventListener('mouseup', () => handleMouseUp());
        window.removeEventListener('mousedown', () => handleMouseDown());
        window.removeEventListener('mousemove', updateCursor);
      };
    }, []);

    return (
      <div
        className='border-blue-700 border-2 fixed transition-sizeup pointer-events-none bg-black w-3 h-3 -translate-x-1/2 -translate-y-1/2 rounded-full z-50 ease-in-out duration-300'
        ref={cursorRef}
      />
    );
}
