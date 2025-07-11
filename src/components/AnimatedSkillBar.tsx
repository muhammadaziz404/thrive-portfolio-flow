
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
          // Animate the skill level
          setTimeout(() => {
            let current = 0;
            const increment = skill.level / 60; // 60 frames for 1 second at 60fps
            const timer = setInterval(() => {
              current += increment;
              if (current >= skill.level) {
                setAnimatedLevel(skill.level);
                clearInterval(timer);
              } else {
                setAnimatedLevel(Math.floor(current));
              }
            }, 16); // ~60fps
          }, index * 200); // Stagger animation
        }
      },
      { threshold: 0.3 }
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
        isVisible ? 'animate-fade-in translate-x-0' : 'opacity-0 translate-x-[-50px]'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-3">
          <div className={`p-2 rounded-lg bg-gradient-to-r ${skill.color} group-hover:scale-110 transition-transform duration-300`}>
            <skill.icon className="h-5 w-5 text-white" />
          </div>
          <span className="font-medium text-lg group-hover:text-purple-400 transition-colors">
            {skill.name}
          </span>
        </div>
        <span className="text-lg font-bold text-purple-400 tabular-nums">
          {animatedLevel}%
        </span>
      </div>
      
      <div className="relative h-3 bg-muted/30 rounded-full overflow-hidden group-hover:shadow-lg group-hover:shadow-purple-500/20 transition-all duration-300">
        <div
          className={`absolute top-0 left-0 h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
          style={{ width: `${animatedLevel}%` }}
        >
          <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
        </div>
        
        {/* Animated shine effect */}
        <div
          className="absolute top-0 left-0 h-full w-8 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 animate-slide-across"
          style={{
            animationDelay: `${index * 200 + 1000}ms`,
            animationDuration: '2s',
            animationIterationCount: 'infinite',
          }}
        ></div>
      </div>
    </div>
  );
};
