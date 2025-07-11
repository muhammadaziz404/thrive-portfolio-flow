
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

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate the skill level with smoother timing
          setTimeout(() => {
            let current = 0;
            const increment = skill.level / 50; // Smoother animation
            const timer = setInterval(() => {
              current += increment;
              if (current >= skill.level) {
                setAnimatedLevel(skill.level);
                clearInterval(timer);
              } else {
                setAnimatedLevel(Math.floor(current));
              }
            }, 20); // Smoother frame rate
          }, index * 150); // Reduced stagger for smoother sequence
        }
      },
      { threshold: 0.3, rootMargin: '20px' }
    );

    if (skillRef.current) {
      observer.observe(skillRef.current);
    }

    return () => observer.disconnect();
  }, [skill.level, index]);

  return (
    <div
      ref={skillRef}
      className={`group transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[-30px]'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="flex items-center justify-between mb-2 md:mb-3">
        <div className="flex items-center space-x-2 md:space-x-3">
          <div className={`p-1.5 md:p-2 rounded-lg bg-gradient-to-r ${skill.color} group-hover:scale-110 transition-transform duration-300`}>
            <skill.icon className="h-4 w-4 md:h-5 md:w-5 text-white" />
          </div>
          <span className="font-medium text-sm md:text-lg group-hover:text-purple-400 transition-colors">
            {skill.name}
          </span>
        </div>
        <span className="text-sm md:text-lg font-bold text-purple-400 tabular-nums min-w-[3rem] text-right">
          {animatedLevel}%
        </span>
      </div>
      
      <div className="relative h-2 md:h-3 bg-muted/30 rounded-full overflow-hidden group-hover:shadow-lg group-hover:shadow-purple-500/20 transition-all duration-300">
        <div
          className={`absolute top-0 left-0 h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
          style={{ width: `${animatedLevel}%` }}
        >
          <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
        </div>
        
        {/* Animated shine effect */}
        <div
          className="absolute top-0 left-0 h-full w-6 md:w-8 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
          style={{
            animation: `slide-across 2s ease-in-out infinite`,
            animationDelay: `${index * 200 + 1000}ms`,
          }}
        ></div>
      </div>
    </div>
  );
};
