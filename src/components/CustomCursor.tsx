import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isTextHover, setIsTextHover] = useState(false);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
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

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <div 
      className={`custom-cursor ${isHovering ? 'hovering' : ''} ${isTextHover ? 'hovering-text' : ''}`}
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    />
  );
};

export default CustomCursor;
