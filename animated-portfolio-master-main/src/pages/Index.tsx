
import React from 'react';
import HeroSection from '@/components/HeroSection';
import SkillsSection from '@/components/SkillsSection';
import ParallaxSection from '@/components/ParallaxSection';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index: React.FC = () => {
  const projects = [
    {
      title: "College Event Management System",
      description: "Streamlining event discovery, registration, and administration with a modern UI/UX.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Responsive Portfolio Website",
      description: "A personal portfolio website showcasing projects and skills with elegant animations.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Online Voting System",
      description: "A mobile-first, user-friendly interface for creating and participating in polls.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div>
      <HeroSection />
      
      <SkillsSection />
      
      {/* Featured Projects Section */}
      <ParallaxSection className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects. Each project is built with modern 
            technologies and focuses on user experience and performance.
          </p>
        </div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="rounded-lg overflow-hidden shadow-lg hover-card"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="mt-12 text-center">
          <Button asChild className="group">
            <Link to="/projects" className="flex items-center">
              View All Projects
              <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={16} />
            </Link>
          </Button>
        </div>
      </ParallaxSection>
      
      {/* About Me Preview */}
      <ParallaxSection className="bg-muted/30 dark:bg-secondary/20 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
              <p className="text-muted-foreground mb-6">
                I'm a Full Stack Developer with expertise in Python, Django, JavaScript, 
                and web development frameworks. I'm passionate about creating efficient, 
                scalable, and user-friendly applications.
              </p>
              <Button asChild variant="outline" className="group">
                <Link to="/about" className="flex items-center">
                  Learn More
                  <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={16} />
                </Link>
              </Button>
            </div>
            
            <div className="hidden lg:block">
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-24 h-24 rounded-xl bg-gradient-primary opacity-60 blur-xl"></div>
                <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full bg-gradient-secondary opacity-60 blur-xl"></div>
                <img 
                  src="/lovable-uploads/c0d9eafe-93a0-4c49-a094-a1bc4c18986a.png" 
                  alt="Harsh Garg" 
                  className="w-full h-auto rounded-lg relative z-10"
                />
              </div>
            </div>
          </div>
        </div>
      </ParallaxSection>
      
      {/* Contact CTA */}
      <ParallaxSection className="section-container text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Work Together</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
          I'm currently available for freelance work and looking for new opportunities.
          If you have a project that needs some creative work, I'd love to hear about it.
        </p>
        <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white">
          <Link to="/contact">Get In Touch</Link>
        </Button>
      </ParallaxSection>
    </div>
  );
};

export default Index;
