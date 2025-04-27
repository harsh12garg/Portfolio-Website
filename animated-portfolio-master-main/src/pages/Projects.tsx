
import React, { useState, useEffect } from 'react';
import ProjectCard, { ProjectCardProps } from '@/components/ProjectCard';
import ProjectDetailModal from '@/components/ProjectDetailModal';
import { motion, AnimatePresence } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Filter } from 'lucide-react';
import AnimatedText from '@/components/AnimatedText';
import { Badge } from '@/components/ui/badge';

const Projects: React.FC = () => {
  const projectsData: ProjectCardProps[] = [
    {
      id: '1',
      title: 'College Event Management System',
      description: 'Developed a responsive College Event Management System using React.js and Tailwind CSS, streamlining event discovery, registration, and administration with a modern UI/UX. Key features include event listings with filtering, user registration workflows, a mock admin panel for event management, simulated email notifications, and QR code-based entry using qrcode.react. Focused on mobile responsiveness and simulated real-world workflows with mocked data.',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80',
      tags: ['React.js', 'Tailwind CSS', 'UI/UX', 'Mobile Responsive'],
      demoUrl: 'https://example.com/event-system',
      codeUrl: 'https://github.com/event-system',
      timeframe: 'June 2024 - August 2024',
      onViewDetails: () => {},
    },
    {
      id: '2',
      title: 'Responsive Portfolio Website',
      description: 'Built a responsive personal portfolio website using React.js and Tailwind CSS, showcasing projects, technical skills, and contact information in a modern, intuitive layout. Incorporated interactive UI elements, animations, and reusable components for enhanced user experience and fast load times across devices. Prioritized mobile responsiveness, performance optimization, and elegant design for professional appeal.',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80',
      tags: ['React.js', 'Tailwind CSS', 'Responsive Design', 'Animation'],
      demoUrl: 'https://example.com/portfolio',
      codeUrl: 'https://github.com/portfolio',
      timeframe: 'January 2024 - April 2024',
      onViewDetails: () => {},
    },
    {
      id: '3',
      title: 'Online Voting & Polling System',
      description: 'Developed an interactive Online Voting & Polling System using React.js and Tailwind CSS, featuring a mobile-first, user-friendly interface for creating, sharing, and participating in polls. Implemented poll creation with customizable options and deadlines, mocked email-based access control with OTP verification, and real-time result visualization using Chart.js/Recharts. Designed a frontend-only admin dashboard to manage polls and monitor participation stats.',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
      tags: ['React.js', 'Tailwind CSS', 'Mobile-first', 'Charts'],
      demoUrl: 'https://example.com/voting-system',
      codeUrl: 'https://github.com/voting-system',
      timeframe: 'August 2023 - November 2023',
      onViewDetails: () => {},
    },
    {
      id: '4',
      title: 'Smart Hospital Management System',
      description: 'Developed a hospital management system using Django, featuring role-based access, appointment scheduling, and patient record management. Designed intuitive admin panels for seamless management of departments, billing, and discharge summaries. Focused on data integrity, user experience, and secure CRUD operations for efficient hospital workflows.',
      image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800&q=80',
      tags: ['Django', 'Material CSS', 'Python', 'Healthcare'],
      demoUrl: 'https://example.com/hospital-system',
      codeUrl: 'https://github.com/hospital-system',
      timeframe: 'October 2024 - January 2025',
      onViewDetails: () => {},
    },
    {
      id: '5',
      title: 'E-Commerce Dashboard',
      description: 'Built a comprehensive e-commerce dashboard with real-time analytics, inventory management, and order processing features. Implemented user authentication, product categorization, and payment integration.',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80',
      tags: ['React.js', 'Node.js', 'MongoDB', 'Express'],
      demoUrl: 'https://example.com/ecommerce-dashboard',
      codeUrl: 'https://github.com/ecommerce-dashboard',
      timeframe: 'March 2023 - July 2023',
      onViewDetails: () => {},
    },
    {
      id: '6',
      title: 'Weather App',
      description: 'Designed and developed a weather application that provides current weather conditions and forecasts for multiple locations. Features include geolocation, custom location saving, and detailed weather metrics.',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80',
      tags: ['JavaScript', 'Weather API', 'CSS3', 'Responsive'],
      demoUrl: 'https://example.com/weather-app',
      codeUrl: 'https://github.com/weather-app',
      timeframe: 'February 2023 - March 2023',
      onViewDetails: () => {},
    }
  ];

  const [activeProjects, setActiveProjects] = useState<ProjectCardProps[]>(projectsData);
  const [selectedProject, setSelectedProject] = useState<ProjectCardProps | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  // Extract all unique tags from projects
  const allTags = Array.from(new Set(projectsData.flatMap(project => project.tags)));

  useEffect(() => {
    let filteredProjects = projectsData;

    // Filter by search term
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      filteredProjects = filteredProjects.filter(
        project => 
          project.title.toLowerCase().includes(searchLower) || 
          project.description.toLowerCase().includes(searchLower)
      );
    }

    // Filter by selected tags
    if (selectedTags.length > 0) {
      filteredProjects = filteredProjects.filter(project => 
        selectedTags.every(tag => project.tags.includes(tag))
      );
    }

    // Apply filters
    setActiveProjects(filteredProjects);
  }, [searchTerm, selectedTags]);

  const handleViewDetails = (id: string) => {
    const project = projectsData.find(p => p.id === id);
    if (project) {
      setSelectedProject(project);
      setIsModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const toggleTag = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter(t => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedTags([]);
  };

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <AnimatedText 
            text="My Projects"
            className="text-4xl md:text-5xl font-bold mb-4"
          />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore my recent work and projects. Each project represents a combination 
            of design thinking, technical challenges, and creative solutions.
          </p>
        </div>

        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 text-muted-foreground" size={16} />
              <Input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button
              onClick={clearFilters}
              variant="outline"
              className="md:w-auto"
              disabled={!searchTerm && selectedTags.length === 0}
            >
              Clear Filters
            </Button>
          </div>

          <div className="mb-6">
            <div className="flex items-center mb-2">
              <Filter size={16} className="mr-2" />
              <h3 className="font-medium">Filter by technology</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {allTags.map((tag) => (
                <Badge 
                  key={tag}
                  variant={selectedTags.includes(tag) ? "default" : "outline"}
                  className="cursor-pointer"
                  onClick={() => toggleTag(tag)}
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {activeProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <ProjectCard
                  {...project}
                  onViewDetails={handleViewDetails}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {activeProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No projects match your filters.</p>
            <Button onClick={clearFilters} variant="outline" className="mt-4">
              Clear Filters
            </Button>
          </div>
        )}
      </div>

      <ProjectDetailModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default Projects;
