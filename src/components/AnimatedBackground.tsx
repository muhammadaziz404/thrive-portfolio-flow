
import React from 'react';

export const AnimatedBackground: React.FC = () => {
  return (
    <>
      {/* Enhanced Fixed Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {/* Large animated gradient blobs */}
        <div className="absolute -top-40 -right-40 w-80 h-80 md:w-96 md:h-96 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 md:w-96 md:h-96 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 md:w-96 md:h-96 bg-gradient-to-br from-pink-500/10 to-cyan-500/10 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
        
        {/* Additional smaller animated elements */}
        <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-gradient-to-br from-cyan-500/15 to-purple-500/15 rounded-full blur-2xl animate-float animation-delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/4 w-24 h-24 bg-gradient-to-br from-pink-500/15 to-orange-500/15 rounded-full blur-xl animate-float animation-delay-3000"></div>
        
        {/* Animated gradient mesh */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-900/5 via-transparent to-pink-900/5 animate-gradient-shift"></div>
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-blue-900/5 via-transparent to-cyan-900/5 animate-gradient-shift animation-delay-2000"></div>
        </div>
        
        {/* Subtle animated patterns */}
        <div className="absolute inset-0 opacity-10">
          <div 
            className="absolute inset-0 bg-repeat opacity-20"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgba(147, 51, 234, 0.3) 1px, transparent 0)`,
              backgroundSize: '40px 40px',
              animation: 'matrix-rain 20s linear infinite'
            }}
          />
        </div>
      </div>
      
      {/* Enhanced animated light rays */}
      <div className="fixed inset-0 pointer-events-none z-5 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-purple-500/20 to-transparent animate-pulse animation-delay-1000"></div>
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-pink-500/20 to-transparent animate-pulse animation-delay-2000"></div>
        <div className="absolute top-0 left-2/3 w-px h-full bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent animate-pulse animation-delay-3000"></div>
      </div>
    </>
  );
};
