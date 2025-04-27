
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

export interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl?: string;
  codeUrl?: string;
  timeframe: string;
  onViewDetails: (id: string) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  id,
  title,
  description,
  image,
  tags,
  demoUrl,
  codeUrl,
  timeframe,
  onViewDetails,
}) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="hover:z-10"
      layout
    >
      <Card className="h-full overflow-hidden hover-card">
        <div className="h-48 overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
        
        <CardHeader>
          <div className="flex justify-between items-start">
            <CardTitle>{title}</CardTitle>
            <div className="text-sm text-muted-foreground">{timeframe}</div>
          </div>
          <CardDescription className="line-clamp-2">{description}</CardDescription>
        </CardHeader>
        
        <CardContent>
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag) => (
              <Badge key={tag} variant="outline" className="bg-muted">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
        
        <CardFooter className="flex justify-between">
          <Button variant="ghost" onClick={() => onViewDetails(id)}>
            View Details
          </Button>
          
          <div className="flex space-x-2">
            {codeUrl && (
              <Button size="icon" variant="outline" asChild>
                <a href={codeUrl} target="_blank" rel="noopener noreferrer">
                  <Github size={16} />
                </a>
              </Button>
            )}
            
            {demoUrl && (
              <Button size="icon" variant="outline" asChild>
                <a href={demoUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink size={16} />
                </a>
              </Button>
            )}
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
