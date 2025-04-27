
import React from 'react';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary dark:bg-secondary/20 mt-16">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Harsh Garg</h3>
            <p className="text-muted-foreground">Full Stack Developer</p>
            <p className="text-muted-foreground">Focused on creating elegant solutions to complex problems.</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold">Contact</h3>
            <div className="flex items-center space-x-2">
              <Phone size={16} />
              <a href="tel:8368850238" className="text-foreground hover:text-accent transition-colors">
                +91 8368850238
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <Mail size={16} />
              <a href="mailto:hgarg9613@gmail.com" className="text-foreground hover:text-accent transition-colors">
                hgarg9613@gmail.com
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold">Follow</h3>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/harsh12garg" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-accent/10 transition-colors"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/harsh-garg-61b737204" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-accent/10 transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Harsh Garg. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
