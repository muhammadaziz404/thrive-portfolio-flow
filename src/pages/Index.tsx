
import React, { useState, useEffect, useCallback } from 'react';
import { Moon, Sun, Github, Linkedin, Instagram, Mail, ArrowDown, ExternalLink, Code, Palette, Zap, User, Briefcase, MessageCircle, Menu, X, Send, Rocket, Star, Sparkles, Globe, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { ParticleSystem } from '@/components/ParticleSystem';
import { TypewriterText } from '@/components/TypewriterText';
import { AnimatedSkillBar } from '@/components/AnimatedSkillBar';
import { ProjectCard } from '@/components/ProjectCard';
import { FloatingElements } from '@/components/FloatingElements';

const Index = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    // Trigger load animations
    setTimeout(() => setIsLoaded(true), 300);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMenuOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent! 🚀",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
  };

  const skills = [
    { name: 'English Content Creation', level: 98, icon: Palette, color: 'from-pink-500 to-purple-600' },
    { name: 'Digital Education', level: 95, icon: Code, color: 'from-blue-500 to-cyan-500' },
    { name: 'Creative Strategy', level: 92, icon: Zap, color: 'from-orange-500 to-red-500' },
    { name: 'Community Building', level: 88, icon: User, color: 'from-green-500 to-emerald-500' },
  ];

  const projects = [
    {
      title: 'Elevate English',
      description: 'Premium English learning content with advanced grammar, vocabulary, and conversation practice for intermediate to advanced learners.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop',
      tags: ['Telegram', 'Education', 'English'],
      link: 'https://t.me/elevate_english_channel',
      icon: Star
    },
    {
      title: 'English Movie Channel',
      description: 'Learn English through movies! Watch popular films with subtitles and detailed explanations to improve your language skills naturally.',
      image: 'https://images.unsplash.com/photo-1489599904593-130882361046?w=600&h=400&fit=crop',
      tags: ['Movies', 'Learning', 'Entertainment'],
      link: 'https://t.me/english_movie_channel',
      icon: Play
    },
    {
      title: 'Unity Listening',
      description: 'Focused listening practice channel with audio exercises, pronunciation guides, and comprehension activities for all skill levels.',
      image: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=600&h=400&fit=crop',
      tags: ['Listening', 'Audio', 'Practice'],
      link: 'https://t.me/unity_listening',
      icon: Sparkles
    },
    {
      title: 'UKTAMOV English',
      description: 'Comprehensive English learning hub featuring daily lessons, tips, tricks, and interactive content for rapid language improvement.',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=400&fit=crop',
      tags: ['Comprehensive', 'Daily', 'Interactive'],
      link: 'https://t.me/uktamov_english',
      icon: Globe
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden relative">
      {/* Particle System */}
      <ParticleSystem mousePosition={mousePosition} />
      
      {/* Floating Elements */}
      <FloatingElements />

      {/* Fixed Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-40 -right-40 w-80 h-80 md:w-96 md:h-96 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 md:w-96 md:h-96 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 md:w-96 md:h-96 bg-gradient-to-br from-pink-500/10 to-cyan-500/10 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Custom Cursor */}
      <div 
        className="fixed w-6 h-6 pointer-events-none z-50 transition-all duration-300 ease-out hidden md:block"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          background: 'radial-gradient(circle, rgba(147, 51, 234, 0.3) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(2px)'
        }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-white/10 backdrop-blur-xl">
        <div className="container mx-auto px-4 lg:px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl md:text-2xl font-bold font-space bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
              Muhammad Aziz
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              <button onClick={() => scrollToSection('home')} className="hover:text-purple-400 transition-all duration-300 hover:scale-110">Home</button>
              <button onClick={() => scrollToSection('about')} className="hover:text-purple-400 transition-all duration-300 hover:scale-110">About</button>
              <button onClick={() => scrollToSection('projects')} className="hover:text-purple-400 transition-all duration-300 hover:scale-110">Projects</button>
              <button onClick={() => scrollToSection('contact')} className="hover:text-purple-400 transition-all duration-300 hover:scale-110">Contact</button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setDarkMode(!darkMode)}
                className="hover:bg-white/10 hover:scale-110 transition-all duration-300"
              >
                {darkMode ? <Sun className="h-5 w-5 text-yellow-400" /> : <Moon className="h-5 w-5 text-purple-400" />}
              </Button>
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden flex items-center space-x-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setDarkMode(!darkMode)}
                className="hover:bg-white/10 transition-all duration-300"
              >
                {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="hover:bg-white/10 transition-all duration-300"
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-2 glass-effect rounded-lg p-4 border border-white/10">
              <button onClick={() => scrollToSection('home')} className="block w-full text-left py-2 hover:text-purple-400 transition-colors">Home</button>
              <button onClick={() => scrollToSection('about')} className="block w-full text-left py-2 hover:text-purple-400 transition-colors">About</button>
              <button onClick={() => scrollToSection('projects')} className="block w-full text-left py-2 hover:text-purple-400 transition-colors">Projects</button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left py-2 hover:text-purple-400 transition-colors">Contact</button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <div className={`transition-all duration-2000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            {/* Profile Image */}
            <div className="mb-8 md:mb-12 relative">
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-xl opacity-75 animate-pulse"></div>
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
                  alt="Muhammad Aziz"
                  className="relative w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full mx-auto border-4 border-gradient-to-r from-purple-500 to-pink-500 shadow-2xl hover:scale-105 transition-all duration-500"
                  style={{ transform: `translateY(${scrollY * 0.05}px)` }}
                />
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 rounded-full blur-2xl opacity-30 animate-spin-slow"></div>
              </div>
            </div>
            
            {/* Text Content */}
            <div className="space-y-4 md:space-y-6">
              <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold font-space mb-4 md:mb-6">
                <TypewriterText 
                  text="Muhammad Aziz" 
                  className="bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent"
                />
              </h1>
              
              <div className="animate-fade-in animation-delay-500">
                <TypewriterText 
                  text="Creative English Content Curator & Digital Educator"
                  className="text-lg md:text-xl lg:text-3xl text-muted-foreground font-light"
                  delay={2000}
                />
              </div>
              
              <p className="text-base md:text-lg max-w-2xl mx-auto mb-8 md:mb-12 animate-fade-in animation-delay-1000 leading-relaxed px-4">
                Transforming English learning through innovative digital content, 
                cinematic experiences, and engaging educational platforms that inspire learners worldwide.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center animate-scale-in animation-delay-1500 px-4">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-medium px-8 md:px-12 py-4 md:py-6 text-base md:text-lg hover-glow transition-all duration-500 hover:scale-105"
                  onClick={() => scrollToSection('projects')}
                >
                  <span className="mr-2">🚀</span>
                  Explore My Work
                  <ExternalLink className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                </Button>
                
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-8 md:px-12 py-4 md:py-6 text-base md:text-lg transition-all duration-500 hover:scale-105 backdrop-blur-sm"
                  onClick={() => scrollToSection('contact')}
                >
                  <Mail className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                  Let's Connect
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 md:h-8 md:w-8 text-purple-400 animate-pulse" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-transparent to-purple-900/10 relative">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold font-space mb-6 md:mb-8 animate-fade-in">
              About <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Me</span>
            </h2>
            <div className="max-w-4xl mx-auto animate-fade-in animation-delay-300 px-4">
              <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed mb-6 md:mb-8">
                I'm passionate about revolutionizing English education through innovative digital content. 
                With expertise in content curation, educational strategy, and community building, 
                I create immersive learning experiences that make mastering English both enjoyable and effective.
              </p>
              <p className="text-base md:text-lg text-muted-foreground/80 leading-relaxed">
                Through my Telegram channels, I've built thriving communities of English learners, 
                combining entertainment with education to create lasting impact in language learning.
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center max-w-6xl mx-auto">
            {/* Skills Section */}
            <div className="animate-slide-in-left space-y-6 md:space-y-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 font-space flex items-center">
                <Sparkles className="mr-3 h-6 w-6 md:h-8 md:w-8 text-purple-400" />
                My Expertise
              </h3>
              
              <div className="space-y-6 md:space-y-8">
                {skills.map((skill, index) => (
                  <AnimatedSkillBar 
                    key={skill.name}
                    skill={skill}
                    index={index}
                  />
                ))}
              </div>
            </div>

            {/* Info Card */}
            <div className="animate-slide-in-right">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur-xl"></div>
                <Card className="relative bg-black/40 backdrop-blur-xl border-purple-500/30 hover:border-purple-400/60 transition-all duration-500 hover:scale-105">
                  <CardContent className="p-6 md:p-8">
                    <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-center bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                      Why Choose My Approach?
                    </h3>
                    <div className="space-y-3 md:space-y-4 text-muted-foreground">
                      <div className="flex items-start space-x-3">
                        <Star className="h-4 w-4 md:h-5 md:w-5 text-yellow-400 mt-1 flex-shrink-0" />
                        <p className="text-sm md:text-base">Innovative content that makes learning engaging and memorable</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Globe className="h-4 w-4 md:h-5 md:w-5 text-blue-400 mt-1 flex-shrink-0" />
                        <p className="text-sm md:text-base">Building global communities of passionate English learners</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Play className="h-4 w-4 md:h-5 md:w-5 text-green-400 mt-1 flex-shrink-0" />
                        <p className="text-sm md:text-base">Using multimedia and interactive methods for better retention</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Zap className="h-4 w-4 md:h-5 md:w-5 text-purple-400 mt-1 flex-shrink-0" />
                        <p className="text-sm md:text-base">Proven track record of helping students achieve fluency</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 md:py-24 lg:py-32 relative">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold font-space mb-6 md:mb-8 animate-fade-in">
              My <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in animation-delay-300 px-4">
              Discover my educational channels and content platforms that are transforming 
              how people learn English around the world.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <ProjectCard 
                key={project.title}
                project={project}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-transparent to-purple-900/20 relative">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold font-space mb-6 md:mb-8 animate-fade-in">
              Let's <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Connect</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in animation-delay-300 px-4">
              Ready to collaborate or learn more about my educational content? 
              I'm always excited to connect with fellow educators and learners.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div className="animate-slide-in-left space-y-6 md:space-y-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 font-space flex items-center">
                <MessageCircle className="mr-3 h-6 w-6 md:h-8 md:w-8 text-purple-400" />
                Get In Touch
              </h3>
              
              <div className="space-y-4 md:space-y-6">
                <div className="flex items-center space-x-4 group hover:translate-x-2 transition-transform duration-300">
                  <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full">
                    <Mail className="h-5 w-5 md:h-6 md:w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-sm md:text-base">Email</p>
                    <p className="text-muted-foreground group-hover:text-purple-400 transition-colors text-sm md:text-base">
                      muhammadaziz.github@gmail.com
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 group hover:translate-x-2 transition-transform duration-300">
                  <div className="p-3 bg-gradient-to-r from-pink-500 to-cyan-500 rounded-full">
                    <Instagram className="h-5 w-5 md:h-6 md:w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-sm md:text-base">Instagram</p>
                    <p className="text-muted-foreground group-hover:text-pink-400 transition-colors text-sm md:text-base">
                      @uktamov
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="pt-4 md:pt-6">
                <h4 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-purple-400">My Channels</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                  {projects.map((project, index) => (
                    <Button 
                      key={project.title}
                      variant="outline" 
                      size="sm"
                      className="border-purple-500/30 text-purple-400 hover:bg-purple-500 hover:text-white transition-all duration-300 hover:scale-105 text-xs md:text-sm"
                      asChild
                    >
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <project.icon className="h-3 w-3 md:h-4 md:w-4 mr-2" />
                        {project.title}
                      </a>
                    </Button>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-slide-in-right">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-3xl blur-xl"></div>
                <Card className="relative bg-black/40 backdrop-blur-xl border-purple-500/30 hover:border-purple-400/60 transition-all duration-500">
                  <CardContent className="p-6 md:p-8">
                    <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                      <div className="relative group">
                        <Input
                          type="text"
                          placeholder="Your Name"
                          className="bg-black/20 border-purple-500/30 focus:border-purple-400 transition-all duration-300 pl-4 pt-6 pb-2 text-sm md:text-base"
                          required
                        />
                        <label className="absolute left-4 top-2 text-xs text-purple-400 transition-all duration-300">
                          Name
                        </label>
                      </div>
                      
                      <div className="relative group">
                        <Input
                          type="email"
                          placeholder="Your Email"
                          className="bg-black/20 border-purple-500/30 focus:border-purple-400 transition-all duration-300 pl-4 pt-6 pb-2 text-sm md:text-base"
                          required
                        />
                        <label className="absolute left-4 top-2 text-xs text-purple-400 transition-all duration-300">
                          Email
                        </label>
                      </div>
                      
                      <div className="relative group">
                        <Textarea
                          placeholder="Your Message"
                          rows={4}
                          className="bg-black/20 border-purple-500/30 focus:border-purple-400 transition-all duration-300 pl-4 pt-6 pb-2 resize-none text-sm md:text-base"
                          required
                        />
                        <label className="absolute left-4 top-2 text-xs text-purple-400 transition-all duration-300">
                          Message
                        </label>
                      </div>
                      
                      <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-medium py-3 md:py-4 text-sm md:text-lg hover-glow transition-all duration-500 hover:scale-105"
                      >
                        <Send className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                        Send Message
                        <Sparkles className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 md:py-16 border-t border-purple-500/20 bg-gradient-to-t from-purple-900/20 to-transparent">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center space-y-6 md:space-y-8">
            <div className="flex justify-center space-x-4 md:space-x-6">
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-purple-500/20 hover:scale-110 transition-all duration-300"
                asChild
              >
                <a href="mailto:muhammadaziz.github@gmail.com">
                  <Mail className="h-5 w-5 md:h-6 md:w-6 text-purple-400" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-pink-500/20 hover:scale-110 transition-all duration-300"
                asChild
              >
                <a href="https://instagram.com/uktamov" target="_blank" rel="noopener noreferrer">
                  <Instagram className="h-5 w-5 md:h-6 md:w-6 text-pink-400" />
                </a>
              </Button>
            </div>
            
            <p className="text-muted-foreground text-sm md:text-lg">
              © 2024 Muhammad Aziz. Crafted with 💜 and lots of ☕
            </p>
            
            <p className="text-xs md:text-sm text-muted-foreground/60">
              Creative English Content Curator & Digital Educator
            </p>
          </div>
        </div>
        
        {/* Scroll to Top Button */}
        <Button
          onClick={() => scrollToSection('home')}
          className="fixed bottom-6 right-6 md:bottom-8 md:right-8 p-3 md:p-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 z-40"
          size="icon"
        >
          <Rocket className="h-5 w-5 md:h-6 md:w-6 text-white" />
        </Button>
      </footer>
    </div>
  );
};

export default Index;
