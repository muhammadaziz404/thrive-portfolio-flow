
import React, { useState, useEffect } from 'react';
import { Moon, Sun, Github, Linkedin, Instagram, Mail, ArrowDown, ExternalLink, Code, Palette, Zap, User, Briefcase, MessageCircle, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const { toast } = useToast();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
  };

  const skills = [
    { name: 'Web Design', level: 95, icon: Palette },
    { name: 'Frontend Development', level: 90, icon: Code },
    { name: 'Creative Strategy', level: 85, icon: Zap },
  ];

  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'Modern e-commerce solution with React, Node.js, and Stripe integration',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      tags: ['React', 'Node.js', 'Stripe'],
      link: '#'
    },
    {
      title: 'Design System',
      description: 'Comprehensive design system and component library for enterprise applications',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop',
      tags: ['Figma', 'React', 'Storybook'],
      link: '#'
    },
    {
      title: 'Mobile App',
      description: 'Cross-platform mobile application with React Native and Firebase backend',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop',
      tags: ['React Native', 'Firebase'],
      link: '#'
    },
    {
      title: 'Brand Identity',
      description: 'Complete brand identity design including logo, guidelines, and web presence',
      image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=600&h=400&fit=crop',
      tags: ['Branding', 'Logo Design', 'Web Design'],
      link: '#'
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Animated Background Blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-electric-blue/20 to-purple-600/20 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-600/20 to-electric-blue/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-electric-blue/10 to-purple-600/10 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold font-space text-gradient">
              Portfolio
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('home')} className="hover:text-electric-blue transition-colors">Home</button>
              <button onClick={() => scrollToSection('about')} className="hover:text-electric-blue transition-colors">About</button>
              <button onClick={() => scrollToSection('projects')} className="hover:text-electric-blue transition-colors">Projects</button>
              <button onClick={() => scrollToSection('contact')} className="hover:text-electric-blue transition-colors">Contact</button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setDarkMode(!darkMode)}
                className="hover:bg-white/10"
              >
                {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden flex items-center space-x-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setDarkMode(!darkMode)}
                className="hover:bg-white/10"
              >
                {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="hover:bg-white/10"
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-2 animate-fade-in">
              <button onClick={() => scrollToSection('home')} className="block w-full text-left py-2 hover:text-electric-blue transition-colors">Home</button>
              <button onClick={() => scrollToSection('about')} className="block w-full text-left py-2 hover:text-electric-blue transition-colors">About</button>
              <button onClick={() => scrollToSection('projects')} className="block w-full text-left py-2 hover:text-electric-blue transition-colors">Projects</button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left py-2 hover:text-electric-blue transition-colors">Contact</button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative">
        <div className="container mx-auto px-6 text-center">
          <div className="animate-fade-in">
            <div className="mb-8">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face"
                alt="Profile"
                className="w-48 h-48 rounded-full mx-auto border-4 border-electric-blue/50 shadow-2xl hover:scale-105 transition-transform duration-300"
                style={{ transform: `translateY(${scrollY * 0.1}px)` }}
              />
            </div>
            <h1 className="text-6xl md:text-8xl font-bold font-space mb-6 animate-slide-in-left">
              Your <span className="text-gradient">Name</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-slide-in-right">
              Creative Developer & Digital Designer
            </p>
            <p className="text-lg max-w-2xl mx-auto mb-12 animate-fade-in">
              I craft beautiful, functional, and user-centered digital experiences that make a lasting impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-electric-blue to-purple-600 hover:from-electric-blue/80 hover:to-purple-600/80 text-white font-medium px-8 py-4 text-lg hover-glow"
                onClick={() => scrollToSection('projects')}
              >
                View My Work
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-electric-blue text-electric-blue hover:bg-electric-blue hover:text-white px-8 py-4 text-lg transition-all duration-300"
                onClick={() => scrollToSection('contact')}
              >
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-muted/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-space mb-6 animate-fade-in">
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto animate-fade-in">
              I'm a passionate creative developer with a love for crafting exceptional digital experiences. 
              With expertise in modern web technologies and a keen eye for design, I bring ideas to life through code.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h3 className="text-2xl font-bold mb-6 font-space">My Journey</h3>
              <p className="text-muted-foreground mb-6">
                With over 5 years of experience in web development and design, I've had the privilege of working 
                with startups, agencies, and Fortune 500 companies to create digital solutions that drive results.
              </p>
              <p className="text-muted-foreground mb-8">
                I believe in the power of clean code, thoughtful design, and meaningful user experiences. 
                Every project is an opportunity to learn, grow, and push the boundaries of what's possible.
              </p>
            </div>

            <div className="animate-slide-in-right">
              <h3 className="text-2xl font-bold mb-6 font-space">Skills & Expertise</h3>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={skill.name} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <skill.icon className="h-5 w-5 text-electric-blue mr-2" />
                        <span className="font-medium">{skill.name}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-electric-blue to-purple-600 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-space mb-6 animate-fade-in">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto animate-fade-in">
              A showcase of my recent work, featuring projects that demonstrate my expertise in 
              web development, design, and creative problem-solving.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={project.title} 
                className="group hover-glow transition-all duration-300 animate-scale-in bg-card/50 backdrop-blur-sm border-border/50"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button size="sm" variant="secondary" asChild>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 font-space">{project.title}</h3>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-electric-blue/10 text-electric-blue rounded-full text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-muted/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-space mb-6 animate-fade-in">
              Let's <span className="text-gradient">Connect</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto animate-fade-in">
              Ready to bring your ideas to life? I'm always excited to work on new projects and collaborate with amazing people.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="animate-slide-in-left">
              <h3 className="text-2xl font-bold mb-6 font-space">Get In Touch</h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-electric-blue mr-4" />
                  <span>hello@yourname.com</span>
                </div>
                <div className="flex space-x-4">
                  <Button size="sm" variant="outline" className="border-electric-blue text-electric-blue hover:bg-electric-blue hover:text-white">
                    <Github className="h-4 w-4 mr-2" />
                    GitHub
                  </Button>
                  <Button size="sm" variant="outline" className="border-electric-blue text-electric-blue hover:bg-electric-blue hover:text-white">
                    <Linkedin className="h-4 w-4 mr-2" />
                    LinkedIn
                  </Button>
                  <Button size="sm" variant="outline" className="border-electric-blue text-electric-blue hover:bg-electric-blue hover:text-white">
                    <Instagram className="h-4 w-4 mr-2" />
                    Instagram
                  </Button>
                </div>
              </div>
            </div>

            <div className="animate-slide-in-right">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative">
                  <Input
                    type="text"
                    placeholder="Your Name"
                    className="bg-background/50 border-border/50 focus:border-electric-blue transition-colors"
                    required
                  />
                </div>
                <div className="relative">
                  <Input
                    type="email"
                    placeholder="Your Email"
                    className="bg-background/50 border-border/50 focus:border-electric-blue transition-colors"
                    required
                  />
                </div>
                <div className="relative">
                  <Textarea
                    placeholder="Your Message"
                    rows={4}
                    className="bg-background/50 border-border/50 focus:border-electric-blue transition-colors resize-none"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-electric-blue to-purple-600 hover:from-electric-blue/80 hover:to-purple-600/80 text-white font-medium py-3 hover-glow"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border/50">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground">
            © 2024 Your Name. Crafted with ❤️ and lots of ☕
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
