
import React from 'react';
import { Star, Sparkles, Zap, Globe, Heart, Code } from 'lucide-react';

export const FloatingElements: React.FC = () => {
  const elements = [
    { icon: Star, delay: '0s', position: 'top-20 left-10' },
    { icon: Sparkles, delay: '2s', position: 'top-40 right-20' },
    { icon: Zap, delay: '4s', position: 'top-60 left-20' },
    { icon: Globe, delay: '6s', position: 'top-80 right-10' },
    { icon: Heart, delay: '8s', position: 'bottom-40 left-16' },
    { icon: Code, delay: '10s', position: 'bottom-60 right-16' },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-5 overflow-hidden">
      {elements.map((element, index) => (
        <div
          key={index}
          className={`absolute ${element.position} opacity-20`}
          style={{
            animation: `float 6s ease-in-out infinite`,
            animationDelay: element.delay,
          }}
        >
          <div className="relative">
            <element.icon 
              className="h-8 w-8 text-purple-400 animate-pulse" 
              style={{
                filter: 'drop-shadow(0 0 10px rgba(147, 51, 234, 0.5))',
                animation: `float 4s ease-in-out infinite, pulse 2s ease-in-out infinite`,
                animationDelay: element.delay,
              }}
            />
          </div>
        </div>
      ))}
      
      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-purple-400 rounded-full animate-ping opacity-30"></div>
      <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-pink-400 rounded-full animate-ping opacity-20" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-3/4 w-2 h-2 bg-cyan-400 rounded-full animate-ping opacity-25" style={{ animationDelay: '2s' }}></div>
    </div>
  );
};
