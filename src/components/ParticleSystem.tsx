
import React, { useEffect, useRef, useCallback } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
  hue: number;
}

interface ParticleSystemProps {
  mousePosition: { x: number; y: number };
}

export const ParticleSystem: React.FC<ParticleSystemProps> = ({ mousePosition }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>();
  const lastMousePos = useRef({ x: 0, y: 0 });
  const lastTime = useRef(0);

  // Throttled mouse movement detection
  const hasMouseMoved = useCallback(() => {
    const dx = mousePosition.x - lastMousePos.current.x;
    const dy = mousePosition.y - lastMousePos.current.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    
    if (distance > 8) { // Increased threshold to reduce particle spam
      lastMousePos.current = { x: mousePosition.x, y: mousePosition.y };
      return true;
    }
    return false;
  }, [mousePosition]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { 
      alpha: true,
      desynchronized: true // Better performance for animations
    });
    if (!ctx) return;

    const resizeCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2); // Limit DPR for performance
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.scale(dpr, dpr);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const createParticle = (x: number, y: number): Particle => ({
      x: x + (Math.random() - 0.5) * 20,
      y: y + (Math.random() - 0.5) * 20,
      vx: (Math.random() - 0.5) * 1.2,
      vy: (Math.random() - 0.5) * 1.2,
      life: 0,
      maxLife: 30 + Math.random() * 20, // Shorter life for better performance
      size: Math.random() * 1.5 + 0.5,
      hue: 280 + Math.random() * 40,
    });

    const animate = (currentTime: number) => {
      const deltaTime = currentTime - lastTime.current;
      
      // Limit frame rate to 60fps max for smoother performance
      if (deltaTime < 16.67) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }
      
      lastTime.current = currentTime;

      // Add particles only if mouse moved and not too many exist
      if (hasMouseMoved() && particlesRef.current.length < 40 && Math.random() < 0.3) {
        particlesRef.current.push(createParticle(mousePosition.x, mousePosition.y));
      }

      // Update particles with optimized calculations
      particlesRef.current = particlesRef.current.filter((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life++;
        particle.vy += 0.02; // Reduced gravity
        particle.vx *= 0.99; // Reduced friction
        return particle.life < particle.maxLife;
      });

      // Clear canvas efficiently
      ctx.clearRect(0, 0, canvas.width / (Math.min(window.devicePixelRatio || 1, 2)), canvas.height / (Math.min(window.devicePixelRatio || 1, 2)));

      // Draw particles with optimized rendering
      particlesRef.current.forEach((particle) => {
        const alpha = Math.max(0, 1 - particle.life / particle.maxLife);
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.size * 2
        );
        
        gradient.addColorStop(0, `hsla(${particle.hue}, 70%, 60%, ${alpha * 0.8})`);
        gradient.addColorStop(1, `hsla(${particle.hue}, 70%, 60%, 0)`);
        
        ctx.save();
        ctx.globalCompositeOperation = 'screen';
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [mousePosition, hasMouseMoved]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-10 hidden md:block"
      style={{ 
        mixBlendMode: 'screen',
        willChange: 'auto', // Remove will-change when not actively animating
        transform: 'translate3d(0, 0, 0)', // Force GPU layer
      }}
    />
  );
};
