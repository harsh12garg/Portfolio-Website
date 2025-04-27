
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  const controls = useAnimation();
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

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
    <section className="min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
        <motion.div 
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="lg:col-span-3 space-y-6"
        >
          <motion.p variants={itemVariants} className="text-accent font-medium">
            Hello, I'm
          </motion.p>
          
          <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Harsh Garg
          </motion.h1>
          
          <motion.h2 variants={itemVariants} className="text-2xl md:text-3xl text-gradient">
            Full Stack Developer
          </motion.h2>
          
          <motion.p variants={itemVariants} className="text-lg text-muted-foreground max-w-2xl">
            Enthusiastic Python Full Stack Developer with expertise in Python, Django, JavaScript, 
            and web development frameworks. Seeking an entry-level position to grow skills, 
            collaborate with experienced developers, and contribute to innovative projects.
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
            <Button asChild className="bg-accent hover:bg-accent/90 text-white rounded-md">
              <Link to="/projects">View Projects</Link>
            </Button>
            
            <Button asChild variant="outline" className="group">
              <Link to="/contact">
                Contact Me
                <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="lg:col-span-2 flex justify-center"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-accent shadow-xl">
            <img 
              src="/lovable-uploads/c0d9eafe-93a0-4c49-a094-a1bc4c18986a.png" 
              alt="Harsh Garg"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
