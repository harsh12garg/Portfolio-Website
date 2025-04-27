
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Toaster } from '@/components/ui/toaster';
import { useToast } from '@/hooks/use-toast';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, Send } from 'lucide-react';
import ParallaxSection from '@/components/ParallaxSection';

const Contact: React.FC = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I will get back to you as soon as possible.",
    });
    (e.target as HTMLFormElement).reset();
  };

  const contactInfo = [
    {
      icon: <Phone size={24} className="text-accent" />,
      title: "Phone",
      value: "+91 8368850238",
      link: "tel:+918368850238"
    },
    {
      icon: <Mail size={24} className="text-accent" />,
      title: "Email",
      value: "hgarg9613@gmail.com",
      link: "mailto:hgarg9613@gmail.com"
    },
    {
      icon: <Github size={24} className="text-accent" />,
      title: "GitHub",
      value: "github.com/harsh12garg",
      link: "https://github.com/harsh12garg"
    },
    {
      icon: <Linkedin size={24} className="text-accent" />,
      title: "LinkedIn",
      value: "Harsh Garg",
      link: "https://www.linkedin.com/in/harsh-garg-61b737204"
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
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          <ParallaxSection className="lg:col-span-2 space-y-6">
            <div className="bg-secondary/30 dark:bg-secondary/20 rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <a 
                    key={index}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start hover:bg-secondary/50 p-3 rounded-lg transition-colors"
                  >
                    <div className="mt-1">{item.icon}</div>
                    <div className="ml-4">
                      <h3 className="font-medium">{item.title}</h3>
                      <p className="text-muted-foreground">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
            
            <div className="bg-secondary/30 dark:bg-secondary/20 rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-4">Location</h2>
              <p className="text-muted-foreground">
                Ghaziabad, Uttar Pradesh, India
              </p>
              <div className="mt-4 aspect-video rounded-lg overflow-hidden bg-muted">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224090.8255918065!2d77.20991241270118!3d28.642184995017425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf179f5419887%3A0xaf55a935c5a38fa1!2sGhaziabad%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1650010531909!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  allowFullScreen 
                  loading="lazy" 
                  style={{ border: 0 }}
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>
          </ParallaxSection>
          
          <ParallaxSection className="lg:col-span-3">
            <div className="bg-secondary/30 dark:bg-secondary/20 rounded-lg p-6 md:p-8">
              <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <motion.div variants={itemVariants} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">
                          Your Name
                        </label>
                        <Input
                          id="name"
                          placeholder="John Doe"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          Your Email
                        </label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="john@example.com"
                          required
                        />
                      </div>
                    </div>
                  </motion.div>
                  
                  <motion.div variants={itemVariants} className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      placeholder="How can I help you?"
                      required
                    />
                  </motion.div>
                  
                  <motion.div variants={itemVariants} className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Your Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Write your message here..."
                      rows={6}
                      required
                    />
                  </motion.div>
                  
                  <motion.div variants={itemVariants}>
                    <Button
                      type="submit"
                      className="w-full mt-6 bg-accent hover:bg-accent/90 flex items-center justify-center"
                    >
                      <span>Send Message</span>
                      <Send size={16} className="ml-2" />
                    </Button>
                  </motion.div>
                </motion.div>
              </form>
            </div>
          </ParallaxSection>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default Contact;
