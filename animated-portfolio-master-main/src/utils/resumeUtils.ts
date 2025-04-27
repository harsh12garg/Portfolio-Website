
import { toast } from "@/components/ui/use-toast";

export const downloadResume = () => {
  const resumeUrl = '/lovable-uploads/a1682e0b-8395-41c6-948b-c5ae8bd62d40.png';
  const link = document.createElement('a');
  link.href = resumeUrl;
  link.download = 'Harsh_Garg_Resume.png';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  
  toast({
    title: "Success",
    description: "Resume downloaded successfully!",
  });
};

export const viewResume = () => {
  window.open('/lovable-uploads/a1682e0b-8395-41c6-948b-c5ae8bd62d40.png', '_blank');
};

export const copyProfileLink = async () => {
  try {
    await navigator.clipboard.writeText(window.location.href);
    toast({
      title: "Success",
      description: "Profile link copied to clipboard!",
    });
  } catch (err) {
    toast({
      title: "Error",
      description: "Failed to copy profile link",
      variant: "destructive",
    });
  }
};

export const shareProfile = async () => {
  if (navigator.share) {
    try {
      await navigator.share({
        title: 'Harsh Garg - Full Stack Developer',
        text: 'Check out my portfolio!',
        url: window.location.href,
      });
      toast({
        title: "Success",
        description: "Profile shared successfully!",
      });
    } catch (err) {
      if (err.name !== 'AbortError') {
        toast({
          title: "Error",
          description: "Failed to share profile",
          variant: "destructive",
        });
      }
    }
  } else {
    copyProfileLink();
  }
};
