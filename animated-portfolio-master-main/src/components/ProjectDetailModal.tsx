
import React from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import { ProjectCardProps } from './ProjectCard';

interface ProjectDetailModalProps {
  project: ProjectCardProps | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  isOpen,
  onClose,
}) => {
  if (!project) return null;

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
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">{project.title}</DialogTitle>
          <DialogDescription>{project.timeframe}</DialogDescription>
        </DialogHeader>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="space-y-6"
        >
          <motion.div variants={itemVariants} className="rounded-md overflow-hidden">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-auto object-cover"
            />
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="outline" className="bg-muted">
                {tag}
              </Badge>
            ))}
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="font-semibold text-lg mb-2">About this project</h3>
            <p className="text-muted-foreground">{project.description}</p>
          </motion.div>

          <motion.div variants={itemVariants} className="flex space-x-4">
            {project.demoUrl && (
              <Button asChild>
                <a 
                  href={project.demoUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2"
                >
                  <span>Live Demo</span>
                  <ExternalLink size={16} />
                </a>
              </Button>
            )}

            {project.codeUrl && (
              <Button variant="outline" asChild>
                <a 
                  href={project.codeUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2"
                >
                  <span>View Code</span>
                  <Github size={16} />
                </a>
              </Button>
            )}
          </motion.div>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectDetailModal;
