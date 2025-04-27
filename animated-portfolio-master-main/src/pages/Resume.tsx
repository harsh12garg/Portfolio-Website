import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { motion } from 'framer-motion';
import { Download, ExternalLink, Github, Linkedin, Mail, Phone, Share2, Copy } from 'lucide-react';
import ParallaxSection from '@/components/ParallaxSection';
import { downloadResume, viewResume, copyProfileLink, shareProfile } from '../utils/resumeUtils';
import { useToast } from '@/components/ui/use-toast';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { useIsMobile } from '@/hooks/use-mobile';

const Resume: React.FC = () => {
  const { toast } = useToast();
  const isMobile = useIsMobile();
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  const educationInfo = [
    {
      degree: "Master of Computer Application",
      school: "Hi tech Institute of Engineering and Technology (MCA)",
      period: "2023 - Present",
      location: "Ghaziabad, India"
    },
    {
      degree: "BCA",
      school: "Hi tech institute of engineering and technology (BCA)",
      period: "2020 - 2023",
      location: "Ghaziabad, India"
    },
    {
      degree: "12th",
      school: "Ishwar Chand Inter College (12th)",
      period: "2019 - 2020",
      location: "Ghaziabad, India"
    },
    {
      degree: "10th",
      school: "R.K. International School (10th)",
      period: "2017 - 2018",
      location: "Bulandshahr, India"
    },
  ];

  const projects = [
    {
      title: "College Event Management System",
      period: "June 2024 - August 2024",
      description: "Developed a responsive College Event Management System using React.js and Tailwind CSS, streamlining event discovery, registration, and administration with a modern UI/UX.",
      technologies: ["React.js", "Tailwind CSS", "UI/UX", "Mobile Responsive"],
      githubUrl: "https://github.com/harsh12garg/college-event-management"
    },
    {
      title: "Responsive Portfolio Website",
      period: "January 2024 - April 2024",
      description: "Built a responsive personal portfolio website using React.js and Tailwind CSS, showcasing projects, technical skills, and contact information in a modern, intuitive layout.",
      technologies: ["React.js", "Tailwind CSS", "Responsive Design", "Animation"],
      githubUrl: "https://github.com/harsh12garg/portfolio"
    },
    {
      title: "Online Voting & Polling System",
      period: "August 2023 - November 2023",
      description: "Developed an interactive Online Voting & Polling System using React.js and Tailwind CSS.",
      technologies: ["React.js", "Tailwind CSS", "Mobile-first", "Charts"],
      githubUrl: "https://github.com/harsh12garg/voting-system"
    },
    {
      title: "Smart Hospital Management System",
      period: "October 2024 - January 2025",
      description: "Developed a hospital management system using Django.",
      technologies: ["Django", "Material CSS", "Python", "Healthcare"],
      githubUrl: "https://github.com/harsh12garg/hospital-management"
    },
  ];

  const skills = [
    { 
      category: "Languages", 
      items: ["Python", "JavaScript"], 
      proficiency: {
        "Python": 85,
        "JavaScript": 90
      }
    },
    { 
      category: "Frontend", 
      items: ["HTML", "CSS", "React.js"],
      proficiency: {
        "HTML": 95,
        "CSS": 85,
        "React.js": 88
      }
    },
    { 
      category: "Backend", 
      items: ["Django", "RESTful APIs"],
      proficiency: {
        "Django": 80,
        "RESTful APIs": 85
      }
    },
    { 
      category: "Databases", 
      items: ["MySQL"],
      proficiency: {
        "MySQL": 82
      }
    },
    { 
      category: "Tools", 
      items: ["Git", "VS Code"],
      proficiency: {
        "Git": 88,
        "VS Code": 92
      }
    },
  ];

  const training = [
    {
      title: "Python full Stack Web Development Course",
      organization: "",
      period: "08/2023 - 04/2024",
      description: "Successfully completed an intensive, project-based training program focused on Full Stack Web Development. Acquired in-depth, practical knowledge in designing and building dynamic, scalable, and responsive web applications. Gained hands-on experience with both front-end and back-end technologies, including Python, Django, SQL, HTML5, CSS3, JavaScript, and React.js. Developed real-world applications emphasizing user-centric design, database integration, API development, and full-stack deployment practices."
    }
  ];

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
    hidden: { y: 10, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
  };

  const handleSkillClick = (skill: string) => {
    setSelectedSkill(skill);
    const proficiency = skills.find(category => 
      category.items.includes(skill)
    )?.proficiency[skill];
    
    toast({
      title: `${skill} Proficiency`,
      description: `Current proficiency level: ${proficiency}%`,
    });
  };

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8 mb-12">
          <div className="md:w-1/3 space-y-6">
            <div className="bg-secondary/30 dark:bg-secondary/20 rounded-lg p-6">
              <div className="flex justify-center mb-6">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-accent/30">
                  <img 
                    src="/lovable-uploads/c0d9eafe-93a0-4c49-a094-a1bc4c18986a.png"
                    alt="Harsh Garg"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
              
              <h2 className="text-2xl font-bold text-center mb-1">Harsh Garg</h2>
              <p className="text-accent text-center mb-4">Full Stack Developer</p>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone size={16} className="text-accent" />
                  <span>+91 8368850238</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Mail size={16} className="text-accent" />
                  <span className="truncate">hgarg9613@gmail.com</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Github size={16} className="text-accent" />
                  <a 
                    href="https://github.com/harsh12garg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent transition-colors"
                  >
                    GitHub
                  </a>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Linkedin size={16} className="text-accent" />
                  <a 
                    href="https://www.linkedin.com/in/harsh-garg-61b737204"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent transition-colors"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
              
              <div className="mt-6 space-y-3">
                <Button 
                  className="w-full flex items-center justify-center space-x-2 bg-accent hover:bg-accent/90"
                  onClick={downloadResume}
                >
                  <Download size={16} />
                  <span>Download Resume</span>
                </Button>
                
                <Button 
                  variant="outline" 
                  className="w-full flex items-center justify-center space-x-2"
                  onClick={viewResume}
                >
                  <ExternalLink size={16} />
                  <span>View Resume</span>
                </Button>

                <Button 
                  variant="outline" 
                  className="w-full flex items-center justify-center space-x-2"
                  onClick={copyProfileLink}
                >
                  <Copy size={16} />
                  <span>Copy Profile Link</span>
                </Button>

                <Button 
                  variant="outline" 
                  className="w-full flex items-center justify-center space-x-2"
                  onClick={shareProfile}
                >
                  <Share2 size={16} />
                  <span>Share Profile</span>
                </Button>
              </div>
            </div>
            
            <div className="bg-secondary/30 dark:bg-secondary/20 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Skills</h3>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <h4 className="font-medium text-accent">{skill.category}</h4>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {skill.items.map((item, i) => (
                        <Badge 
                          key={i} 
                          className="px-2 py-1 cursor-pointer hover:bg-accent/20 transition-colors"
                          onClick={() => handleSkillClick(item)}
                        >
                          {item}
                          {selectedSkill === item && (
                            <Progress 
                              value={skill.proficiency[item]} 
                              className="h-1 mt-1"
                            />
                          )}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="md:w-2/3">
            <div className="bg-secondary/30 dark:bg-secondary/20 rounded-lg p-6 mb-6">
              <h2 className="text-2xl font-bold mb-4">Professional Summary</h2>
              <p className="text-muted-foreground">
                Enthusiastic Python Full Stack Developer with expertise in Python, Django, JavaScript, 
                and web development frameworks. Seeking an entry-level position to grow skills, 
                collaborate with experienced developers, and contribute to innovative projects.
              </p>
            </div>
            
            <Tabs defaultValue="overview" className="w-full" onValueChange={setActiveTab}>
              <TabsList className="grid grid-cols-4 mb-8">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="education">Education</TabsTrigger>
                <TabsTrigger value="projects">Projects</TabsTrigger>
                <TabsTrigger value="training">Training</TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview" className="space-y-6">
                <ParallaxSection className="bg-secondary/30 dark:bg-secondary/20 rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-4">Professional Summary</h3>
                  <p className="text-muted-foreground">
                    Enthusiastic Python Full Stack Developer with expertise in Python, Django, JavaScript, 
                    and web development frameworks. Seeking an entry-level position to grow skills, 
                    collaborate with experienced developers, and contribute to innovative projects.
                  </p>
                </ParallaxSection>
                
                <ParallaxSection>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-secondary/30 dark:bg-secondary/20 rounded-lg p-6">
                      <h3 className="text-xl font-bold mb-4">Education</h3>
                      <div className="space-y-4">
                        {educationInfo.slice(0, 2).map((edu, index) => (
                          <div key={index}>
                            <h4 className="font-semibold">{edu.degree}</h4>
                            <p className="text-muted-foreground text-sm">{edu.school}</p>
                            <p className="text-accent text-sm">{edu.period}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="bg-secondary/30 dark:bg-secondary/20 rounded-lg p-6">
                      <h3 className="text-xl font-bold mb-4">Skills</h3>
                      <div className="grid grid-cols-2 gap-4">
                        {skills.slice(0, 4).map((skill, index) => (
                          <div key={index}>
                            <h4 className="font-medium text-accent">{skill.category}</h4>
                            <div className="flex flex-wrap gap-2 mt-2">
                              {skill.items.map((item, i) => (
                                <span key={i} className="px-2 py-1 bg-background rounded-md text-sm">
                                  {item}
                                </span>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </ParallaxSection>
                
                <ParallaxSection className="bg-secondary/30 dark:bg-secondary/20 rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-4">Recent Projects</h3>
                  <div className="space-y-4">
                    {projects.slice(0, 2).map((project, index) => (
                      <div key={index} className="pb-4 border-b border-border last:border-0 last:pb-0">
                        <div className="flex justify-between items-start flex-wrap gap-2">
                          <h4 className="font-semibold">{project.title}</h4>
                          <span className="text-accent text-sm">{project.period}</span>
                        </div>
                        <p className="text-muted-foreground text-sm mt-1 line-clamp-2">{project.description}</p>
                      </div>
                    ))}
                  </div>
                </ParallaxSection>
              </TabsContent>
              
              <TabsContent value="education">
                <ParallaxSection className="bg-secondary/30 dark:bg-secondary/20 rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-6">My Education</h3>
                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="space-y-8"
                  >
                    {educationInfo.map((edu, index) => (
                      <motion.div 
                        key={index}
                        variants={itemVariants}
                        className="relative pl-8 pb-8 border-l border-accent/30 last:pb-0"
                      >
                        <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-accent flex items-center justify-center">
                          <div className="w-2 h-2 rounded-full bg-white"></div>
                        </div>
                        <div>
                          <div className="flex justify-between items-start flex-wrap gap-2">
                            <h4 className="font-bold text-lg">{edu.degree}</h4>
                            <span className="text-accent font-medium">{edu.period}</span>
                          </div>
                          <p className="text-muted-foreground">{edu.school}</p>
                          <p className="text-sm text-muted-foreground">{edu.location}</p>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </ParallaxSection>
              </TabsContent>
              
              <TabsContent value="projects">
                <ParallaxSection className="bg-secondary/30 dark:bg-secondary/20 rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-6">My Projects</h3>
                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="space-y-8"
                  >
                    {projects.map((project, index) => (
                      <motion.div 
                        key={index}
                        variants={itemVariants}
                        className="pb-8 border-b border-border last:border-0 last:pb-0"
                      >
                        <div className="flex justify-between items-start flex-wrap gap-2">
                          <h4 className="font-bold text-lg">{project.title}</h4>
                          <span className="text-accent font-medium">{project.period}</span>
                        </div>
                        <p className="text-muted-foreground my-2">{project.description}</p>
                        <div className="flex items-center gap-4 mt-3">
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, i) => (
                              <span key={i} className="px-2 py-1 bg-background rounded-md text-sm">
                                {tech}
                              </span>
                            ))}
                          </div>
                          {project.githubUrl && (
                            <a 
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2 hover:bg-accent/10 rounded-full transition-colors"
                            >
                              <Github size={20} />
                            </a>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </ParallaxSection>
              </TabsContent>
              
              <TabsContent value="training">
                <ParallaxSection className="bg-secondary/30 dark:bg-secondary/20 rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-6">Professional Training</h3>
                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="space-y-8"
                  >
                    {training.map((item, index) => (
                      <motion.div 
                        key={index}
                        variants={itemVariants}
                        className="relative pl-8 pb-8 border-l border-accent/30 last:pb-0"
                      >
                        <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-accent flex items-center justify-center">
                          <div className="w-2 h-2 rounded-full bg-white"></div>
                        </div>
                        <div>
                          <div className="flex justify-between items-start flex-wrap gap-2">
                            <h4 className="font-bold text-lg">{item.title}</h4>
                            <span className="text-accent font-medium">{item.period}</span>
                          </div>
                          {item.organization && (
                            <p className="text-muted-foreground">{item.organization}</p>
                          )}
                          <p className="text-muted-foreground mt-2">{item.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </ParallaxSection>

                <div className="mt-6 p-6 bg-secondary/30 dark:bg-secondary/20 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Resume Image</h3>
                  <div className="aspect-auto rounded-lg overflow-hidden">
                    <img 
                      src="/lovable-uploads/543ce8b7-a017-4554-ae31-c2042e8ab965.png" 
                      alt="Resume" 
                      className="w-full object-contain"
                    />
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
        
        <div className="mt-8">
          <img 
            src="/lovable-uploads/1a2ea3a6-11ce-49fb-ae4e-935acbae50c9.png" 
            alt="Resume Page 2" 
            className="w-full max-w-3xl mx-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Resume;
