
import React from 'react';

export const AnimatedBackground: React.FC = () => {
  return (
    <>
      {/* Optimized Fixed Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {/* GPU-accelerated animated gradient blobs */}
        <div 
          className="absolute -top-40 -right-40 w-80 h-80 md:w-96 md:h-96 rounded-full blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(147, 51, 234, 0.2) 0%, rgba(236, 72, 153, 0.2) 100%)',
            animation: 'blob 20s infinite',
            willChange: 'transform',
            transform: 'translate3d(0, 0, 0)', // Force GPU layer
          }}
        />
        <div 
          className="absolute -bottom-40 -left-40 w-80 h-80 md:w-96 md:h-96 rounded-full blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, rgba(147, 51, 234, 0.2) 100%)',
            animation: 'blob 20s infinite',
            animationDelay: '10s',
            willChange: 'transform',
            transform: 'translate3d(0, 0, 0)',
          }}
        />
        <div 
          className="absolute top-1/2 left-1/2 w-80 h-80 md:w-96 md:h-96 rounded-full blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(236, 72, 153, 0.1) 0%, rgba(6, 182, 212, 0.1) 100%)',
            animation: 'blob 25s infinite',
            animationDelay: '5s',
            willChange: 'transform',
            transform: 'translate3d(-50%, -50%, 0)',
          }}
        />
        
        {/* Smaller floating elements with reduced animation complexity */}
        <div 
          className="absolute top-1/4 right-1/4 w-32 h-32 rounded-full blur-2xl opacity-30"
          style={{
            background: 'radial-gradient(circle, rgba(6, 182, 212, 0.15) 0%, rgba(147, 51, 234, 0.15) 100%)',
            animation: 'float 12s ease-in-out infinite',
            animationDelay: '2s',
            willChange: 'transform',
            transform: 'translate3d(0, 0, 0)',
          }}
        />
        <div 
          className="absolute bottom-1/4 left-1/4 w-24 h-24 rounded-full blur-xl opacity-25"
          style={{
            background: 'radial-gradient(circle, rgba(236, 72, 153, 0.15) 0%, rgba(251, 146, 60, 0.15) 100%)',
            animation: 'float 15s ease-in-out infinite',
            animationDelay: '7s',
            willChange: 'transform',
            transform: 'translate3d(0, 0, 0)',
          }}
        />
      </div>
      
      {/* Optimized animated light rays */}
      <div className="fixed inset-0 pointer-events-none z-5 overflow-hidden">
        {[
          { left: '25%', delay: '0s', color: 'rgba(147, 51, 234, 0.15)' },
          { right: '33%', delay: '3s', color: 'rgba(236, 72, 153, 0.15)' },
          { left: '66%', delay: '6s', color: 'rgba(6, 182, 212, 0.15)' }
        ].map((ray, index) => (
          <div
            key={index}
            className="absolute top-0 w-px h-full"
            style={{
              ...(ray.left ? { left: ray.left } : { right: ray.right }),
              background: `linear-gradient(to bottom, transparent 0%, ${ray.color} 50%, transparent 100%)`,
              animation: 'pulse 4s ease-in-out infinite',
              animationDelay: ray.delay,
              willChange: 'opacity',
              transform: 'translate3d(0, 0, 0)',
            }}
          />
        ))}
      </div>
    </>
  );
};
