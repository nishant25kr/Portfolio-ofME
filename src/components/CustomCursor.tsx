import { useEffect, useRef, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trailPosition, setTrailPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isTextHover, setIsTextHover] = useState(false);
  const targetRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      targetRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Determine if the element is clickable
      const isClickable = target.closest('a') || target.closest('button') || target.closest('[role="button"]');
      
      // Determine if the element is text
      const isText = ['P', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'SPAN', 'LI'].includes(target.tagName);
      
      if (isClickable) {
        setIsHovering(true);
        setIsTextHover(false);
      } else if (isText) {
        setIsTextHover(true);
        setIsHovering(false);
      } else {
        setIsHovering(false);
        setIsTextHover(false);
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    let rafId = 0;
    const animateTrail = () => {
      setTrailPosition((prev) => ({
        x: prev.x + (targetRef.current.x - prev.x) * 0.18,
        y: prev.y + (targetRef.current.y - prev.y) * 0.18,
      }));
      rafId = requestAnimationFrame(animateTrail);
    };
    rafId = requestAnimationFrame(animateTrail);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      cancelAnimationFrame(rafId);
    };
  }, []);

  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null;
  }

  return (
    <>
      <div
        className={`custom-cursor ${isHovering ? 'hovering' : ''} ${isTextHover ? 'hovering-text' : ''}`}
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />
      <div
        className="custom-cursor-trail"
        style={{
          left: `${trailPosition.x}px`,
          top: `${trailPosition.y}px`,
          transform: `translate(-50%, -50%) scale(${isHovering ? 1.25 : 1})`,
        }}
      />
    </>
  );
};

export default CustomCursor;
