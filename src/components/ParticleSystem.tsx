
import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
}

interface ParticleSystemProps {
  mousePosition: { x: number; y: number };
}

export const ParticleSystem: React.FC<ParticleSystemProps> = ({ mousePosition }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>();
  const lastMousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const createParticle = (x: number, y: number): Particle => ({
      x,
      y,
      vx: (Math.random() - 0.5) * 1.5,
      vy: (Math.random() - 0.5) * 1.5,
      life: 0,
      maxLife: 40 + Math.random() * 30, // Shorter life for better performance
      size: Math.random() * 2 + 1,
    });

    const updateParticles = () => {
      // Only add particles if mouse moved significantly
      const dx = mousePosition.x - lastMousePos.current.x;
      const dy = mousePosition.y - lastMousePos.current.y;
      const mouseMoved = Math.sqrt(dx * dx + dy * dy) > 5;

      if (mouseMoved && Math.random() < 0.2) { // Reduced particle spawn rate
        particlesRef.current.push(
          createParticle(
            mousePosition.x + (Math.random() - 0.5) * 30,
            mousePosition.y + (Math.random() - 0.5) * 30
          )
        );
        lastMousePos.current = { x: mousePosition.x, y: mousePosition.y };
      }

      // Update existing particles
      particlesRef.current = particlesRef.current.filter((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life++;
        particle.vy += 0.03; // Reduced gravity
        particle.vx *= 0.98; // Reduced friction

        return particle.life < particle.maxLife;
      });

      // Limit particle count for performance
      if (particlesRef.current.length > 60) {
        particlesRef.current = particlesRef.current.slice(-60);
      }
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach((particle) => {
        const alpha = Math.max(0, 1 - particle.life / particle.maxLife);
        const hue = 280 + Math.sin(particle.life * 0.1) * 40;
        
        ctx.save();
        ctx.globalAlpha = alpha * 0.8; // Reduced opacity for subtlety
        ctx.fillStyle = `hsla(${hue}, 70%, 60%, ${alpha})`;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        
        // Reduced glow effect for performance
        ctx.shadowBlur = 10;
        ctx.shadowColor = `hsla(${hue}, 70%, 60%, ${alpha * 0.5})`;
        ctx.fill();
        
        ctx.restore();
      });
    };

    const animate = () => {
      updateParticles();
      drawParticles();
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [mousePosition]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-10 hidden md:block"
      style={{ mixBlendMode: 'screen' }}
    />
  );
};
