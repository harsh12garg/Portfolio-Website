
import React from 'react';
import ParallaxSection from '@/components/ParallaxSection';
import AnimatedText from '@/components/AnimatedText';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const personalInfo = [
    { label: "Name", value: "Harsh Garg" },
    { label: "Email", value: "hgarg9613@gmail.com" },
    { label: "Phone", value: "+91 8368850238" },
    { label: "Location", value: "Ghaziabad, India" },
  ];

  const educationInfo = [
    {
      degree: "Master of Computer Application",
      school: "Hi tech Institute of Engineering and Technology",
      period: "2023 - Present",
      location: "Ghaziabad, India"
    },
    {
      degree: "BCA",
      school: "Hi tech institute of engineering and technology",
      period: "2020 - 2023",
      location: "Ghaziabad, India"
    },
    {
      degree: "12th",
      school: "Ishwar Chand Inter College",
      period: "2019 - 2020",
      location: "Ghaziabad, India"
    },
    {
      degree: "10th",
      school: "R.K. International School",
      period: "2017 - 2018",
      location: "Bulandshahr, India"
    },
  ];

  const hobbies = ["Video games", "Traveling", "Cricket"];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <div className="pt-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <AnimatedText 
            text="About Me"
            className="text-4xl md:text-5xl font-bold mb-4"
          />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get to know more about me, my background, and what drives me.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-start">
          <ParallaxSection>
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 rounded-xl bg-gradient-primary opacity-60 blur-xl"></div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full bg-gradient-secondary opacity-60 blur-xl"></div>
              <img 
                src="/lovable-uploads/c0d9eafe-93a0-4c49-a094-a1bc4c18986a.png" 
                alt="Harsh Garg" 
                className="w-full h-auto rounded-lg relative z-10"
              />
            </div>
          </ParallaxSection>
          
          <div className="space-y-6">
            <ParallaxSection>
              <h2 className="text-3xl font-bold mb-4">Who am I?</h2>
              <p className="text-muted-foreground mb-4">
                I'm Harsh Garg, a Full Stack Developer with expertise in Python, Django, JavaScript, 
                and web development frameworks. I'm passionate about creating efficient, scalable, 
                and user-friendly applications.
              </p>
              <p className="text-muted-foreground">
                I'm seeking an entry-level position to grow my skills, collaborate with experienced 
                developers, and contribute to innovative projects. My focus is on creating elegant 
                solutions to complex problems through clean code and intuitive design.
              </p>
            </ParallaxSection>
            
            <ParallaxSection>
              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4">Personal Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {personalInfo.map((info, index) => (
                    <div key={index} className="flex">
                      <span className="font-medium w-24">{info.label}:</span>
                      <span className="text-muted-foreground">{info.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ParallaxSection>
            
            <ParallaxSection>
              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4">Hobbies & Interests</h3>
                <div className="flex flex-wrap gap-2">
                  {hobbies.map((hobby, index) => (
                    <span key={index} className="px-3 py-1 bg-secondary rounded-full text-sm">
                      {hobby}
                    </span>
                  ))}
                </div>
              </div>
            </ParallaxSection>
          </div>
        </div>
        
        <ParallaxSection className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Education</h2>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {educationInfo.map((edu, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="bg-secondary/30 dark:bg-secondary/20 p-6 rounded-lg hover-card"
              >
                <div className="flex justify-between flex-wrap">
                  <h3 className="font-bold text-xl">{edu.degree}</h3>
                  <span className="text-accent">{edu.period}</span>
                </div>
                <p className="text-muted-foreground">{edu.school}</p>
                <p className="text-sm text-muted-foreground">{edu.location}</p>
              </motion.div>
            ))}
          </motion.div>
        </ParallaxSection>
      </div>
    </div>
  );
};

export default About;
