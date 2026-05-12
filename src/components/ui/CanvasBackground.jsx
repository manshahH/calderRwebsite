import { useEffect, useRef } from 'react';

export default function CanvasBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    let animationFrameId;
    let t = 0;
    
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
    
    let mouseX = -1000;
    let mouseY = -1000;
    
    const SPACING = 48;
    const MAX_DIST = 220;
    const BASE_OPACITY = 0.055;
    const MAX_OPACITY = 0.45;
    const BASE_RADIUS = 1;
    const MAX_RADIUS = 3;

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleMouseLeave = () => {
      mouseX = -1000;
      mouseY = -1000;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      
      const cols = Math.floor(width / SPACING) + 1;
      const rows = Math.floor(height / SPACING) + 1;

      const dots = [];

      for (let r = 0; r < rows; r++) {
        const dotRow = [];
        for (let c = 0; c < cols; c++) {
          const x = c * SPACING;
          const y = r * SPACING;
          
          const dx = x - mouseX;
          const dy = y - mouseY;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          let influence = 0;
          if (dist < MAX_DIST) {
            influence = 1 - (dist / MAX_DIST);
          }

          const wave = Math.sin(c * 0.6 + t) * Math.cos(r * 0.5 + t * 0.8) * 0.02;
          const currentBaseOpacity = BASE_OPACITY + wave;
          const opacity = currentBaseOpacity + influence * (MAX_OPACITY - currentBaseOpacity);
          const radius = BASE_RADIUS + influence * (MAX_RADIUS - BASE_RADIUS);

          dotRow.push({ x, y, influence, opacity, radius });
        }
        dots.push(dotRow);
      }

      // Draw lines between adjacent dots
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const dot = dots[r][c];
          
          if (dot.influence > 0) {
            // Check right neighbor
            if (c < cols - 1) {
              const rightDot = dots[r][c + 1];
              if (rightDot.influence > 0) {
                const avgInfluence = (dot.influence + rightDot.influence) / 2;
                ctx.beginPath();
                ctx.moveTo(dot.x, dot.y);
                ctx.lineTo(rightDot.x, rightDot.y);
                ctx.strokeStyle = `rgba(59, 175, 212, ${avgInfluence * 0.12})`;
                ctx.lineWidth = 1;
                ctx.stroke();
              }
            }
            
            // Check bottom neighbor
            if (r < rows - 1) {
              const bottomDot = dots[r + 1][c];
              if (bottomDot.influence > 0) {
                const avgInfluence = (dot.influence + bottomDot.influence) / 2;
                ctx.beginPath();
                ctx.moveTo(dot.x, dot.y);
                ctx.lineTo(bottomDot.x, bottomDot.y);
                ctx.strokeStyle = `rgba(59, 175, 212, ${avgInfluence * 0.12})`;
                ctx.lineWidth = 1;
                ctx.stroke();
              }
            }
          }
        }
      }

      // Draw dots
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const dot = dots[r][c];
          ctx.beginPath();
          ctx.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(226, 232, 242, ${Math.max(0, dot.opacity)})`;
          ctx.fill();
        }
      }

      t += 0.004;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
    />
  );
}
