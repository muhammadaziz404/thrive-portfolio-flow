
import React, { useState, useEffect, useRef } from 'react';

interface Skill {
  name: string;
  level: number;
  icon: React.ComponentType<any>;
  color: string;
}

interface AnimatedSkillBarProps {
  skill: Skill;
  index: number;
}

export const AnimatedSkillBar: React.FC<AnimatedSkillBarProps> = ({ skill, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedLevel, setAnimatedLevel] = useState(0);
  const skillRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          
          // Smooth animation using requestAnimationFrame
          const startTime = performance.now();
          const duration = 1500; // 1.5 seconds
          const delay = index * 100;

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime - delay;
            
            if (elapsed < 0) {
              animationRef.current = requestAnimationFrame(animate);
              return;
            }
            
            const progress = Math.min(elapsed / duration, 1);
            const easeOutCubic = 1 - Math.pow(1 - progress, 3); // Smooth easing
            
            setAnimatedLevel(Math.floor(skill.level * easeOutCubic));
            
            if (progress < 1) {
              animationRef.current = requestAnimationFrame(animate);
            }
          };

          animationRef.current = requestAnimationFrame(animate);
        }
      },
      { 
        threshold: 0.3, 
        rootMargin: '20px',
        // Add root margin to prevent re-triggering
      }
    );

    const currentElement = skillRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
      observer.disconnect();
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [skill.level, index, isVisible]);

  return (
    <div
      ref={skillRef}
      className={`group transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[-30px]'
      }`}
      style={{ 
        transitionDelay: `${index * 100}ms`,
        willChange: isVisible ? 'auto' : 'transform, opacity',
        transform: 'translate3d(0, 0, 0)', // Force GPU layer
      }}
    >
      <div className="flex items-center justify-between mb-2 md:mb-3">
        <div className="flex items-center space-x-2 md:space-x-3">
          <div 
            className={`p-1.5 md:p-2 rounded-lg bg-gradient-to-r ${skill.color} transition-transform duration-300 group-hover:scale-110`}
            style={{ 
              willChange: 'transform',
              transform: 'translate3d(0, 0, 0)',
            }}
          >
            <skill.icon className="h-4 w-4 md:h-5 md:w-5 text-white" />
          </div>
          <span className="font-medium text-sm md:text-lg group-hover:text-purple-400 transition-colors duration-300">
            {skill.name}
          </span>
        </div>
        <span 
          className="text-sm md:text-lg font-bold text-purple-400 tabular-nums min-w-[3rem] text-right"
          style={{ 
            willChange: 'contents',
            contain: 'layout', // Prevent layout shifts
          }}
        >
          {animatedLevel}%
        </span>
      </div>
      
      <div 
        className="relative h-2 md:h-3 bg-muted/30 rounded-full overflow-hidden transition-all duration-300 group-hover:shadow-lg group-hover:shadow-purple-500/20"
        style={{ transform: 'translate3d(0, 0, 0)' }}
      >
        <div
          className={`absolute top-0 left-0 h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-300 ease-out`}
          style={{ 
            width: `${animatedLevel}%`,
            willChange: isVisible && animatedLevel < skill.level ? 'width' : 'auto',
            transform: 'translate3d(0, 0, 0)',
          }}
        >
          <div 
            className="absolute inset-0 bg-white/20 rounded-full"
            style={{
              animation: isVisible ? 'pulse 2s ease-in-out infinite' : 'none',
              willChange: 'opacity',
            }}
          />
        </div>
        
        {/* Optimized shine effect */}
        <div
          className="absolute top-0 left-0 h-full w-6 md:w-8 bg-gradient-to-r from-transparent via-white/30 to-transparent"
          style={{
            animation: isVisible ? `slide-across 2.5s ease-in-out infinite` : 'none',
            animationDelay: `${index * 200 + 1000}ms`,
            transform: 'skewX(12deg) translate3d(0, 0, 0)',
            willChange: 'transform',
          }}
        />
      </div>
    </div>
  );
};
