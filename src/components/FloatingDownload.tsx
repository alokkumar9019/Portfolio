import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const FloatingDownload = () => {
  return (
    <div className="fixed bottom-8 right-8 z-50 animate-pulse-glow">
      <Button 
        size="lg"
        className="rounded-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all duration-300 shadow-[0_0_30px_hsla(189,94%,55%,0.6)] hover:shadow-[0_0_40px_hsla(189,94%,55%,0.8)] p-4"
        asChild
      >
        <a 
          href="/Alok_Resume.pdf" 
          download
          title="Download Resume"
        >
          <Download className="w-6 h-6" />
        </a>
      </Button>
    </div>
  );
};

export default FloatingDownload;
