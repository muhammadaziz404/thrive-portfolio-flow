
import React, { useState, useRef, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  icon: React.ComponentType<any>;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`group transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ 
        transitionDelay: `${index * 150}ms`,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card className="relative overflow-hidden bg-black/40 backdrop-blur-xl border-purple-500/30 hover:border-purple-400/60 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 h-full">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        <CardContent className="p-0 relative h-full flex flex-col">
          <div className="relative overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 md:h-56 object-cover transition-all duration-700 group-hover:scale-110"
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>
            
            <div className={`absolute top-4 left-4 p-2 md:p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-300 ${
              isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
            }`}>
              <project.icon className="h-4 w-4 md:h-6 md:w-6 text-white" />
            </div>
            
            <div className={`absolute top-4 right-4 transition-all duration-300 ${
              isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
            }`}>
              <Button 
                size="sm" 
                className="bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30 p-2"
                asChild
              >
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-3 w-3 md:h-4 md:w-4" />
                </a>
              </Button>
            </div>
          </div>
          
          <div className="p-6 md:p-8 flex-1 flex flex-col">
            <h3 className="text-xl md:text-2xl font-bold mb-3 font-space bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent group-hover:from-pink-400 group-hover:to-cyan-400 transition-all duration-300">
              {project.title}
            </h3>
            
            <p className="text-muted-foreground mb-4 md:mb-6 leading-relaxed text-sm md:text-base flex-1">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-4 md:mb-6">
              {project.tags.map((tag, tagIndex) => (
                <span
                  key={tag}
                  className="px-2 md:px-3 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 rounded-full text-xs md:text-sm border border-purple-500/30 hover:border-purple-400/60 transition-all duration-300"
                  style={{ 
                    animationDelay: `${(index * 150) + (tagIndex * 50)}ms`,
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
            
            <Button
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30 text-sm md:text-base"
              asChild
            >
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <project.icon className="mr-2 h-3 w-3 md:h-4 md:w-4" />
                Visit Channel
                <ExternalLink className="ml-2 h-3 w-3 md:h-4 md:w-4" />
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
