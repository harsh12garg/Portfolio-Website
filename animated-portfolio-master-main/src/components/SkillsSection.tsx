
import React from 'react';
import { motion } from 'framer-motion';
import AnimatedText from './AnimatedText';

interface SkillCategory {
  name: string;
  skills: string[];
}

const SkillsSection: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      name: "Frontend",
      skills: ["HTML", "CSS", "React.js", "JavaScript", "Tailwind CSS"]
    },
    {
      name: "Backend",
      skills: ["Python", "Django", "MySQL", "RESTful APIs"]
    },
    {
      name: "Tools",
      skills: ["Git", "VS Code", "Docker", "Figma"]
    },
    {
      name: "Languages",
      skills: ["Hindi", "English"]
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
    <section id="skills" className="py-16 md:py-24 bg-muted/30 dark:bg-secondary/20">
      <div className="container mx-auto px-4">
        <AnimatedText 
          text="My Skills & Expertise"
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        />

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.name}
              variants={itemVariants}
              className="bg-background rounded-lg shadow-md p-6 hover-card"
            >
              <h3 className="text-xl font-semibold mb-4 text-gradient">{category.name}</h3>
              
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li key={skill} className="flex items-center space-x-2">
                    <span className="w-2 h-2 rounded-full bg-accent" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
